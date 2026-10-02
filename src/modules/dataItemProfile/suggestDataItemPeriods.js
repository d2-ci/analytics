import {
    getRelativePeriodsDetails,
    getRelativePeriodsOptions,
} from '../../components/PeriodDimension/utils/relativePeriods.js'
import {
    COMPATIBILITY_FULL,
    getDataItemProfileCompatibility,
} from './getDataItemProfileCompatibility.js'
import {
    getFixedPeriodOfTypeByDate,
    getPeriodDates,
} from './periodTypeRelations.js'
import {
    getCandidatePeriodTypes,
    getFrequencyOrder,
    getPeriodTypeOfPeriodId,
    isPeriodType,
    sortPeriodTypes,
} from './periodTypes.js'

// The types tried by default: the ones most pickers offer
export const SUGGESTION_PERIOD_TYPES = [
    'Weekly',
    'BiWeekly',
    'Monthly',
    'Quarterly',
    'SixMonthly',
    'Yearly',
]

// The length of a relative period's unit in days, to compare relative periods
const RELATIVE_UNIT_DAYS = {
    DAILY: 1,
    WEEKLY: 7,
    BIWEEKLY: 14,
    MONTHLY: 365 / 12,
    BIMONTHLY: 365 / 6,
    QUARTERLY: 365 / 4,
    SIXMONTHLY: 365 / 2,
    FINANCIAL: 365,
    YEARLY: 365,
}

const isComplete = (profile, periods, options) =>
    getDataItemProfileCompatibility(profile, { periods }, options).status ===
    COMPATIBILITY_FULL

const unique = (values) => [...new Set(values)]

// The periods of a type that hold the start and the end of each period, in order
const getCoveringPeriods = (allDates, periodType, calendar) => {
    const periods = allDates.flatMap(({ startDate, endDate }) =>
        [startDate, endDate].map((date) =>
            getFixedPeriodOfTypeByDate(periodType, date, calendar)
        )
    )

    if (periods.includes(null)) {
        return null
    }

    return unique(
        [...periods]
            .sort((a, b) => a.startDate.localeCompare(b.startDate))
            .map(({ id }) => id)
    )
}

// The types in the list at least as long as `periodType`, shortest first
const getLongerTypes = (periodTypes, periodType) =>
    sortPeriodTypes(periodTypes).filter(
        (candidate) =>
            getFrequencyOrder(candidate) >= getFrequencyOrder(periodType)
    )

const suggestFixedPeriods = (profile, periods, options) => {
    const { periodTypes, calendar } = options
    const allDates = periods.map((period) => getPeriodDates(period, calendar))

    if (allDates.includes(null)) {
        return null
    }

    const longest = sortPeriodTypes(periods.map(getPeriodTypeOfPeriodId)).pop()

    for (const periodType of getLongerTypes(periodTypes, longest)) {
        const suggestion = getCoveringPeriods(allDates, periodType, calendar)

        if (suggestion && isComplete(profile, suggestion, options)) {
            return suggestion
        }
    }

    return null
}

const suggestPeriodType = (profile, periodType, options) => {
    const suggestion = getLongerTypes(options.periodTypes, periodType).find(
        (candidate) => isComplete(profile, [candidate], options)
    )

    return suggestion ? [suggestion] : null
}

// "This", "last" or "… this year": the anchor a suggestion keeps
const getAnchor = ({ offset }) =>
    offset === 0 ? 'this' : offset < 0 ? 'last' : 'thisYear'

const getSpan = ({ duration, type }) => duration * RELATIVE_UNIT_DAYS[type]

/* The relative periods of longer types with the same anchor, each the
 * shortest of its type that lasts at least as long, shortest type first */
const getRelativeCandidates = (relative, options) =>
    getRelativePeriodsOptions()
        .filter(
            ({ id }) =>
                RELATIVE_UNIT_DAYS[id] >= RELATIVE_UNIT_DAYS[relative.type]
        )
        .map(
            ({ getPeriods }) =>
                getPeriods()
                    .map((period) => getRelativePeriodsDetails()[period.id])
                    .filter(
                        (candidate) =>
                            getAnchor(candidate) === getAnchor(relative) &&
                            (getAnchor(relative) === 'thisYear' ||
                                getSpan(candidate) >= getSpan(relative))
                    )
                    .sort((a, b) => a.duration - b.duration)[0]
        )
        .filter(
            (candidate) =>
                candidate &&
                getCandidatePeriodTypes(candidate.id, options).some((type) =>
                    options.periodTypes.includes(type)
                )
        )

const suggestRelativePeriod = (profile, periodId, options) => {
    const relative = getRelativePeriodsDetails()[periodId]
    const suggestion =
        relative &&
        getRelativeCandidates(relative, options).find((candidate) =>
            isComplete(profile, [candidate.id], options)
        )

    return suggestion ? [suggestion.id] : null
}

const suggestFor = (profile, period, options) => {
    if (isComplete(profile, [period], options)) {
        return [period]
    }

    return isPeriodType(period)
        ? suggestPeriodType(profile, period, options)
        : suggestRelativePeriod(profile, period, options)
}

/**
 * Periods fully compatible with the item, in place of `periods`, or null:
 * when `periods` already are, or nothing suits.
 *
 * - Fixed periods: the shortest periods of one type that hold them all.
 * - A period type: the shortest type that suits the item.
 * - A relative period: one of a longer type with the same anchor (this,
 *   last, or … this year) that lasts at least as long: LAST_4_WEEKS gives
 *   LAST_MONTH.
 *
 * Types are tried from `options.periodTypes` (default SUGGESTION_PERIOD_TYPES),
 * shortest first; a type shorter than a period can't help, so it is skipped.
 * Mixed periods get a suggestion each, and none when one part has none.
 * Other options (the relative period settings, calendar, server version) are
 * passed to getDataItemProfileCompatibility.
 *
 * From a profile of current metadata, it is a guess to check before Update.
 * From getObservedProfile, it follows the data.
 */
export const suggestDataItemPeriods = (profile, periods = [], options = {}) => {
    const resolved = {
        ...options,
        periodTypes: options.periodTypes ?? SUGGESTION_PERIOD_TYPES,
    }

    if (!periods.length || isComplete(profile, periods, resolved)) {
        return null
    }

    const fixed = periods.filter(getPeriodTypeOfPeriodId)
    const parts = [
        ...(fixed.length
            ? [
                  isComplete(profile, fixed, resolved)
                      ? fixed
                      : suggestFixedPeriods(profile, fixed, resolved),
              ]
            : []),
        ...periods
            .filter((period) => !getPeriodTypeOfPeriodId(period))
            .map((period) => suggestFor(profile, period, resolved)),
    ]

    return parts.includes(null) ? null : unique(parts.flat())
}
