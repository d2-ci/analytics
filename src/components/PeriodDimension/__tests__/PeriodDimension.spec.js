import React from 'react'
import { shallow } from 'enzyme'
import PeriodDimension from '../PeriodDimension'

describe('The Period Dimension component', () => {
    let props
    let shallowPeriodDimension

    const getWrapper = () => {
        if (!shallowPeriodDimension) {
            shallowPeriodDimension = shallow(<PeriodDimension {...props} />)
        }
        return shallowPeriodDimension
    }

    beforeEach(() => {
        props = {
            selectedPeriods: [],
            onSelect: jest.fn(),
            rightFooter: <></>,
        }
        shallowPeriodDimension = undefined
    })

    it('matches the snapshot', () => {
        const wrapper = getWrapper()

        expect(wrapper).toMatchSnapshot()
    })
})
