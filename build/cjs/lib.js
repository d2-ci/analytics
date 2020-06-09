/* eslint-disable */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var i18n = _interopDefault(require('@dhis2/d2-i18n'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var debounce = _interopDefault(require('lodash/debounce'));
var isEqual = _interopDefault(require('lodash/isEqual'));
var _JSXStyle = _interopDefault(require('styled-jsx/style'));
var cx = _interopDefault(require('classnames'));
var uiCore = require('@dhis2/ui-core');
var throttle = _interopDefault(require('lodash/throttle'));
var ArrowForward = _interopDefault(require('@material-ui/icons/ArrowForward'));
var ArrowBack = _interopDefault(require('@material-ui/icons/ArrowBack'));
var InfoIcon = _interopDefault(require('@material-ui/icons/InfoOutlined'));
var reactBeautifulDnd = require('react-beautiful-dnd');
var DeselectIcon = _interopDefault(require('@material-ui/icons/Close'));
var sortBy = _interopDefault(require('lodash/sortBy'));
var propTypes = _interopDefault(require('@dhis2/prop-types'));
var d2UiOrgUnitDialog = require('@dhis2/d2-ui-org-unit-dialog');
var styles$5 = require('@material-ui/core/styles');
var LockIcon = _interopDefault(require('@material-ui/icons/Lock'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Popper = _interopDefault(require('@material-ui/core/Popper'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var Menu = _interopDefault(require('@material-ui/core/Menu'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var ArrowRightIcon = _interopDefault(require('@material-ui/icons/ArrowRight'));
var Zoom = _interopDefault(require('@material-ui/core/Zoom'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var SvgIcon = _interopDefault(require('@material-ui/core/SvgIcon'));
var times = _interopDefault(require('lodash/times'));
var ResizeObserver = _interopDefault(require('resize-observer-polyfill'));
var isObject = _interopDefault(require('lodash/isObject'));
var isString = _interopDefault(require('lodash/isString'));
var isArray = _interopDefault(require('d2-utilizr/lib/isArray'));
require('core-js/fn/array/find-index');
var isObject$1 = _interopDefault(require('d2-utilizr/lib/isObject'));
var isString$1 = _interopDefault(require('d2-utilizr/lib/isString'));
var arrayContains = _interopDefault(require('d2-utilizr/lib/arrayContains'));
var arrayUnique = _interopDefault(require('d2-utilizr/lib/arrayUnique'));
var objectClean = _interopDefault(require('d2-utilizr/lib/objectClean'));
var arrayClean = _interopDefault(require('d2-utilizr/lib/arrayClean'));
var isNumeric = _interopDefault(require('d2-utilizr/lib/isNumeric'));
var isNumber = _interopDefault(require('d2-utilizr/lib/isNumber'));
var numberDecimals = _interopDefault(require('d2-utilizr/lib/numberDecimals'));
var arrayPluck = _interopDefault(require('d2-utilizr/lib/arrayPluck'));
var arraySort = _interopDefault(require('d2-utilizr/lib/arraySort'));
var d3Color = require('d3-color');
var H = _interopDefault(require('highcharts'));
var HM = _interopDefault(require('highcharts/highcharts-more'));
var HSG = _interopDefault(require('highcharts/modules/solid-gauge'));
var HNDTD = _interopDefault(require('highcharts/modules/no-data-to-display'));
var HE = _interopDefault(require('highcharts/modules/exporting'));

var Totals = "الإجمالي";
var Details = "التفاصيل";
var Detail = "تفصيل";
var Remove = "إزالة";
var Search = "البحث";
var Year = "سنة";
var January = "يناير";
var February = "فبراير";
var March = "مارس";
var April = "ابريل";
var May = "مايو";
var June = "يونيو";
var July = "يوليو";
var August = "اغسطس";
var September = "سبتمبر";
var October = "اكتوبر";
var November = "نوفمبر";
var December = "ديسمبر";
var Daily = "يومي";
var Weekly = "أسبوعي";
var Monthly = "شهري";
var Quarterly = "ربعي";
var Yearly = "سنوي";
var Today = "اليوم";
var Yesterday = "الأمس";
var Days = "‏‏الأيام";
var Weeks = "الأسابيع";
var Months = "الأشهر";
var Quarters = "أرباع السنة";
var Years = "السنوات";
var Series = "سلسلة";
var Category = "الفئة";
var Filter = "عامل التصفية";
var Columns = "الأعمدة";
var Rows = "الصفوف";
var Program = "البرنامج";
var Indicators = "المؤشرات";
var Data = "بيانات";
var Period = "الفترة الزمنية";
var Column = "العمود";
var Bar = "مخطط شريطي";
var Line = "مخطط خطي";
var Area = "مساحة";
var Pie = "مخطط دائري";
var Radar = "مخطط رادار";
var Gauge = "مخطط قياس";
var Target = "الهدف";
var Base = "الأساس";
var arTranslations = {
	"Data Type": "نوع البيانات",
	Totals: Totals,
	Details: Details,
	Detail: Detail,
	"Move to {{axisName}}": "تحريك إلى {{axisName}}",
	"Add to {{axisName}}": "إضافة إلى {{axisName}}",
	Remove: Remove,
	"Not available for {{visualizationType}}": "غير متوفر لـ {{visualizationType}}",
	"Requires 2 or more data items": "يتطلب 2 عنصر بيانات أو أكثر",
	"Only available when data is in Series": "متاح فقط عندما تكون البيانات في السلسلة",
	"Remove Assigned Categories": "إزالة الفئات المعينة",
	"Add Assigned Categories": "إضافة فئات معينة",
	"Manage chart axes": "إدارة محاور المخطط",
	"Filter dimensions": "تصفية الأبعاد",
	"Main dimensions": "الأبعاد الرئيسية",
	"Your dimensions": "الأبعاد الخاصة بك",
	"Dimension recommended with selected data": "البعد موصى به مع البيانات المحددة",
	Search: Search,
	"Selected Data": "البيانات المحددة",
	"Deselect All": "إلغاء تحديد الكل",
	"Select all": "تحديد الكل",
	"Period type": "نوع الفترة الزمنية",
	Year: Year,
	"Select year": "اختر السنة",
	"Relative periods": "الفترات الزمنية النسبية",
	"Fixed periods": "فترات زمنية ثابتة",
	"No periods selected": "لم يتم تحديد أية فترات زمنية",
	January: January,
	February: February,
	March: March,
	April: April,
	May: May,
	June: June,
	July: July,
	August: August,
	September: September,
	October: October,
	November: November,
	December: December,
	"Week {{weekNumber}}": "الإسبوع {{weekNumber}}",
	"Bi-Week {{biWeekNumber}}": "ثنائي الإسبوع {{biWeekNumber}}",
	Daily: Daily,
	Weekly: Weekly,
	"Bi-weekly": "كل اسبوعين",
	"Weekly (Start Wednesday)": "اسبوعياً (يبدأ الأربعاء)",
	"Weekly (Start Thursday)": "اسبوعياً (يبدأ الخميس)",
	"Weekly (Start Saturday)": "اسبوعياً (يبدأ السبت)",
	"Weekly (Start Sunday)": "اسبوعياً (يبدأ الأحد)",
	Monthly: Monthly,
	"Bi-monthly": "كل شهرين",
	Quarterly: Quarterly,
	"Six-monthly": "كل ستة-أشهر",
	"Six-monthly April": "نصف سنوي، كل ستة أشهر، ابريل",
	Yearly: Yearly,
	"Financial year (Start November)": "السنة المالية (تبدأ في نوفمبر)",
	"Financial year (Start October)": "السنة المالية (تبدأ في اكتوبر)",
	"Financial year (Start July)": "السنة المالية (تبدأ في يوليو)",
	"Financial year (Start April)": "السنة المالية (تبدأ في ابريل)",
	Today: Today,
	Yesterday: Yesterday,
	"Last 3 days": "آخر 3 أيام",
	"Last 7 days": "آخر 7 أيام",
	"Last 14 days": "آخر 14 يوم",
	"This week": "هذا الأسبوع",
	"Last week": "الأسبوع الماضي",
	"Last 4 weeks": "آخر 4 أسابيع",
	"Last 12 weeks": "آخر 12 أسبوع",
	"Last 52 weeks": "آخر 52 أسبوع",
	"Weeks this year": "أسابيع السنة الحالية",
	"This bi-week": "الأسبوعين الحاليين",
	"Last bi-week": "آخر اسبوعين",
	"Last 4 bi-weeks": "آخر 4 ثنائي اسابيع",
	"This month": "الشهر الحالي",
	"Last month": "الشهر الماضي",
	"Last 3 months": "آخر 3 أشهر",
	"Last 6 months": "آخر 6 أشهر",
	"Last 12 months": "آخر 12 شهر",
	"Months this year": "أشهر السنة الحالية",
	"This bi-month": "الشهران المزدوجان الحاليان",
	"Last bi-month": "آخر شهرين مزدوجين",
	"Last 6 bi-months": "آخر 6 أشهر مزدوجة",
	"Bi-months this year": "الأشهر المزدوجة في السنة الحالية",
	"This quarter": "ربع السنة الحالي",
	"Last quarter": "ربع السنة الماضي",
	"Last 4 quarters": "آخر 4 أرباع السنة",
	"Quarters this year": "أرباع السنة الحالية",
	"This six-month": "الستة أشهر الحالية",
	"Last six-month": "آخر ستة-أشهر",
	"Last 2 six-month": "آخر نصفي سنة (فترتي ستة-أشهر)",
	"This financial year": "السنة المالية الحالية",
	"Last financial year": "السنة المالية الماضية",
	"Last 5 financial years": "آخر 5 سنوات مالية",
	"This year": "السنة الحالية",
	"Last year": "السنة الماضية",
	"Last 5 years": "آخر 5 سنوات",
	Days: Days,
	Weeks: Weeks,
	"Bi-weeks": "كل اسبوعين",
	Months: Months,
	"Bi-months": "الأشهر المزدوجة",
	Quarters: Quarters,
	"Six-months": "ستة-أشهر",
	"Financial Years": "السنوات المالية",
	Years: Years,
	Series: Series,
	Category: Category,
	Filter: Filter,
	Columns: Columns,
	Rows: Rows,
	"Reporting rate": "معدل الإبلاغ",
	"Reporting rate on time": "معدل الإبلاغ في الوقت المحدد",
	"Actual reports": "الإبلاغات الفعلية",
	"Actual reports on time": "الإبلاغات الفعلية في الوقت المحدد",
	"Expected reports": "الإبلاغات المتوقعة",
	Program: Program,
	"Select a program": "حدد برنامجاً",
	Indicators: Indicators,
	"Select indicator group": "تحديد مجموعة المؤشرات",
	"[ All groups ]": "[ كل المجموعات ]",
	"Data elements": "عناصر البيانات",
	"Select data element group": "تحديد مجموعة عناصر البيانات",
	"[ All data elements ]": "[ كل عناصر البيانات ]",
	"Data sets": "حزم البيانات",
	"Select data sets": "حدد حزم بيانات",
	"[ All metrics ]": "[جميع المقاييس]",
	"Event data items": "عناصر بيانات الحدث",
	"Program indicators": "مؤشرات البرنامج",
	"{{dynamicOuNames}} and {{lastOuName}}": "{{dynamicOuNames}} و {{lastOuName}}",
	"{{allDynamicOuNames}} levels": "مستويات {{allDynamicOuNames}}",
	"{{allDynamicOuNames}} groups": "مجموعات {{allDynamicOuNames}}",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "مستويات {{allDynamicOuNames}} في {{staticOuNames}}",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "مجموعات {{allDynamicOuNames}} في {{staticOuNames}}",
	Data: Data,
	Period: Period,
	"Organisation Unit": "الوحدة التنظيمية",
	"Assigned Categories": "الفئات المعينة",
	Column: Column,
	"Stacked column": "عمود تراكمي",
	Bar: Bar,
	"Stacked bar": "شريط تراكمي",
	Line: Line,
	Area: Area,
	Pie: Pie,
	Radar: Radar,
	Gauge: Gauge,
	"Year over year (line)": "عام بعد عام (خط)",
	"Year over year (column)": "عام بعد عام (عمود)",
	"Single value": "قيمة مفردة",
	"Pivot table": "الجدول المحوري",
	Target: Target,
	Base: Base,
	"No data": "لا توجد بيانات"
};

var Totals$1 = "الإجماليات";
var Details$1 = "التفاصيل";
var Detail$1 = "";
var Remove$1 = "إزالة";
var Search$1 = "البحث";
var Year$1 = "";
var January$1 = "";
var February$1 = "";
var March$1 = "";
var April$1 = "";
var May$1 = "";
var June$1 = "";
var July$1 = "";
var August$1 = "";
var September$1 = "";
var October$1 = "";
var November$1 = "";
var December$1 = "";
var Daily$1 = "يومي";
var Weekly$1 = "أسبوعي";
var Monthly$1 = "شهري";
var Quarterly$1 = "ربع سنوي";
var Yearly$1 = "سنوي";
var Today$1 = "اليوم";
var Yesterday$1 = "الأمس";
var Days$1 = "‏‏الأيام";
var Weeks$1 = "الأسابيع";
var Months$1 = "الأشهر";
var Quarters$1 = "أرباع السنة";
var Years$1 = "السنوات";
var Series$1 = "";
var Category$1 = "";
var Filter$1 = "";
var Columns$1 = "";
var Rows$1 = "";
var Program$1 = "البرنامج";
var Indicators$1 = "المؤشرات";
var Data$1 = "البيانات";
var Period$1 = "";
var Column$1 = "العمود";
var Bar$1 = "";
var Line$1 = "";
var Area$1 = "مساحة";
var Pie$1 = "";
var Radar$1 = "";
var Gauge$1 = "";
var Target$1 = "";
var Base$1 = "";
var ar_IQTranslations = {
	"Data Type": "",
	Totals: Totals$1,
	Details: Details$1,
	Detail: Detail$1,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$1,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$1,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "",
	"Period type": "",
	Year: Year$1,
	"Select year": "",
	"Relative periods": "الفترات الزمنية النسبية",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$1,
	February: February$1,
	March: March$1,
	April: April$1,
	May: May$1,
	June: June$1,
	July: July$1,
	August: August$1,
	September: September$1,
	October: October$1,
	November: November$1,
	December: December$1,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$1,
	Weekly: Weekly$1,
	"Bi-weekly": "كل اسبوعين",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$1,
	"Bi-monthly": "أشهر مزدوجة",
	Quarterly: Quarterly$1,
	"Six-monthly": "ستة أشهر",
	"Six-monthly April": "ستة أشهر نيسان",
	Yearly: Yearly$1,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "السنة المالية (بداية تشرين الأول)",
	"Financial year (Start July)": "السنة المالية (بداية تموز)",
	"Financial year (Start April)": "السنة المالية (بداية نيسان)",
	Today: Today$1,
	Yesterday: Yesterday$1,
	"Last 3 days": "آخر 3 أيام",
	"Last 7 days": "آخر 7 أيام",
	"Last 14 days": "آخر 14 يوم",
	"This week": "الأسبوع الحالي",
	"Last week": "الأسبوع الماضي",
	"Last 4 weeks": "آخر 4 أسابيع",
	"Last 12 weeks": "آخر 12 أسبوع",
	"Last 52 weeks": "آخر 52 أسبوع",
	"Weeks this year": "أسابيع السنة الحالية",
	"This bi-week": "الأسبوعين الحاليين",
	"Last bi-week": "آخر اسبوعين",
	"Last 4 bi-weeks": "آخر 4 زوج اسابيع",
	"This month": "الشهر الحالي",
	"Last month": "الشهر الماضي",
	"Last 3 months": "آخر 3 أشهر",
	"Last 6 months": "آخر 6 أشهر",
	"Last 12 months": "آخر 12 شهر",
	"Months this year": "أشهر السنة الحالية",
	"This bi-month": "الشهران المزدوجان الحاليان",
	"Last bi-month": "آخر شهرين مزدوجين",
	"Last 6 bi-months": "آخر 6 أشهر مزدوجة",
	"Bi-months this year": "الأشهر المزدوجة في السنة الحالية",
	"This quarter": "ربع السنة الحالي",
	"Last quarter": "ربع السنة الماضي",
	"Last 4 quarters": "آخر 4 أرباع السنة",
	"Quarters this year": "أرباع السنة الحالية",
	"This six-month": "نصف السنة الحالي (فترة من ستة أشهر)",
	"Last six-month": "آخر ستة أشهر",
	"Last 2 six-month": "",
	"This financial year": "السنة المالية الحالية",
	"Last financial year": "السنة المالية الماضية",
	"Last 5 financial years": "آخر 5 سنوات مالية",
	"This year": "السنة الحالية",
	"Last year": "السنة الماضية",
	"Last 5 years": "آخر 5 سنوات",
	Days: Days$1,
	Weeks: Weeks$1,
	"Bi-weeks": "كل اسبوعين",
	Months: Months$1,
	"Bi-months": "الأشهر المزدوجة",
	Quarters: Quarters$1,
	"Six-months": "ستة أشهر",
	"Financial Years": "",
	Years: Years$1,
	Series: Series$1,
	Category: Category$1,
	Filter: Filter$1,
	Columns: Columns$1,
	Rows: Rows$1,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$1,
	"Select a program": "",
	Indicators: Indicators$1,
	"Select indicator group": "تحديد مجموعة المؤشرات",
	"[ All groups ]": "",
	"Data elements": "عناصر البيانات",
	"Select data element group": "تحديد مجموعة عناصر البيانات",
	"[ All data elements ]": "",
	"Data sets": "حزم البيانات",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$1,
	Period: Period$1,
	"Organisation Unit": "الوحدة التنظيمية",
	"Assigned Categories": "",
	Column: Column$1,
	"Stacked column": "",
	Bar: Bar$1,
	"Stacked bar": "",
	Line: Line$1,
	Area: Area$1,
	Pie: Pie$1,
	Radar: Radar$1,
	Gauge: Gauge$1,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "الجدول المحوري",
	Target: Target$1,
	Base: Base$1,
	"No data": ""
};

var Totals$2 = "";
var Details$2 = "Details";
var Detail$2 = "";
var Remove$2 = "Remove";
var Search$2 = "";
var Year$2 = "Year";
var January$2 = "January";
var February$2 = "February";
var March$2 = "March";
var April$2 = "April";
var May$2 = "May";
var June$2 = "June";
var July$2 = "July";
var August$2 = "August";
var September$2 = "September";
var October$2 = "October";
var November$2 = "November";
var December$2 = "December";
var Daily$2 = "Daily";
var Weekly$2 = "Weekly";
var Monthly$2 = "Monthly";
var Quarterly$2 = "Quarterly";
var Yearly$2 = "Yearly";
var Today$2 = "";
var Yesterday$2 = "";
var Days$2 = "";
var Weeks$2 = "";
var Months$2 = "";
var Quarters$2 = "";
var Years$2 = "";
var Series$2 = "";
var Category$2 = "Category";
var Filter$2 = "Filter";
var Columns$2 = "";
var Rows$2 = "";
var Program$2 = "";
var Indicators$2 = "Indicators";
var Data$2 = "";
var Period$2 = "";
var Column$2 = "";
var Bar$2 = "";
var Line$2 = "";
var Area$2 = "";
var Pie$2 = "";
var Radar$2 = "";
var Gauge$2 = "";
var Target$2 = "";
var Base$2 = "";
var daTranslations = {
	"Data Type": "",
	Totals: Totals$2,
	Details: Details$2,
	Detail: Detail$2,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$2,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$2,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Select all",
	"Period type": "",
	Year: Year$2,
	"Select year": "",
	"Relative periods": "",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$2,
	February: February$2,
	March: March$2,
	April: April$2,
	May: May$2,
	June: June$2,
	July: July$2,
	August: August$2,
	September: September$2,
	October: October$2,
	November: November$2,
	December: December$2,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$2,
	Weekly: Weekly$2,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$2,
	"Bi-monthly": "Bi-monthly",
	Quarterly: Quarterly$2,
	"Six-monthly": "Six-monthly",
	"Six-monthly April": "",
	Yearly: Yearly$2,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$2,
	Yesterday: Yesterday$2,
	"Last 3 days": "",
	"Last 7 days": "",
	"Last 14 days": "",
	"This week": "",
	"Last week": "Last week",
	"Last 4 weeks": "",
	"Last 12 weeks": "",
	"Last 52 weeks": "",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "Last month",
	"Last 3 months": "Last 3 months",
	"Last 6 months": "Last 6 months",
	"Last 12 months": "Last 12 months",
	"Months this year": "",
	"This bi-month": "",
	"Last bi-month": "",
	"Last 6 bi-months": "",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "",
	"Last 4 quarters": "",
	"Quarters this year": "",
	"This six-month": "",
	"Last six-month": "",
	"Last 2 six-month": "",
	"This financial year": "",
	"Last financial year": "",
	"Last 5 financial years": "",
	"This year": "",
	"Last year": "",
	"Last 5 years": "",
	Days: Days$2,
	Weeks: Weeks$2,
	"Bi-weeks": "",
	Months: Months$2,
	"Bi-months": "",
	Quarters: Quarters$2,
	"Six-months": "",
	"Financial Years": "",
	Years: Years$2,
	Series: Series$2,
	Category: Category$2,
	Filter: Filter$2,
	Columns: Columns$2,
	Rows: Rows$2,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$2,
	"Select a program": "",
	Indicators: Indicators$2,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "Data elements",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "Data sets",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$2,
	Period: Period$2,
	"Organisation Unit": "",
	"Assigned Categories": "",
	Column: Column$2,
	"Stacked column": "",
	Bar: Bar$2,
	"Stacked bar": "",
	Line: Line$2,
	Area: Area$2,
	Pie: Pie$2,
	Radar: Radar$2,
	Gauge: Gauge$2,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$2,
	Base: Base$2,
	"No data": ""
};

var Totals$3 = "";
var Details$3 = "";
var Detail$3 = "";
var Remove$3 = "";
var Search$3 = "";
var Year$3 = "";
var January$3 = "";
var February$3 = "";
var March$3 = "";
var April$3 = "";
var May$3 = "";
var June$3 = "";
var July$3 = "";
var August$3 = "";
var September$3 = "";
var October$3 = "";
var November$3 = "";
var December$3 = "";
var Daily$3 = "";
var Weekly$3 = "";
var Monthly$3 = "";
var Quarterly$3 = "";
var Yearly$3 = "";
var Today$3 = "";
var Yesterday$3 = "";
var Days$3 = "";
var Weeks$3 = "";
var Months$3 = "";
var Quarters$3 = "";
var Years$3 = "";
var Series$3 = "";
var Category$3 = "";
var Filter$3 = "";
var Columns$3 = "";
var Rows$3 = "";
var Program$3 = "";
var Indicators$3 = "";
var Data$3 = "";
var Period$3 = "";
var Column$3 = "";
var Bar$3 = "";
var Line$3 = "";
var Area$3 = "";
var Pie$3 = "";
var Radar$3 = "";
var Gauge$3 = "";
var Target$3 = "";
var Base$3 = "";
var enTranslations = {
	"Data Type": "",
	Totals: Totals$3,
	Details: Details$3,
	Detail: Detail$3,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$3,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	"No items selected": "",
	Search: Search$3,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "",
	"Period type": "",
	Year: Year$3,
	"Select year": "",
	"Relative periods": "",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$3,
	February: February$3,
	March: March$3,
	April: April$3,
	May: May$3,
	June: June$3,
	July: July$3,
	August: August$3,
	September: September$3,
	October: October$3,
	November: November$3,
	December: December$3,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$3,
	Weekly: Weekly$3,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$3,
	"Bi-monthly": "",
	Quarterly: Quarterly$3,
	"Six-monthly": "",
	"Six-monthly April": "",
	Yearly: Yearly$3,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$3,
	Yesterday: Yesterday$3,
	"Last 3 days": "",
	"Last 7 days": "",
	"Last 14 days": "",
	"This week": "",
	"Last week": "",
	"Last 4 weeks": "",
	"Last 12 weeks": "",
	"Last 52 weeks": "",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "",
	"Last 3 months": "",
	"Last 6 months": "",
	"Last 12 months": "",
	"Months this year": "",
	"This bi-month": "",
	"Last bi-month": "",
	"Last 6 bi-months": "",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "",
	"Last 4 quarters": "",
	"Quarters this year": "",
	"This six-month": "",
	"Last six-month": "",
	"Last 2 six-month": "",
	"This financial year": "",
	"Last financial year": "",
	"Last 5 financial years": "",
	"This year": "",
	"Last year": "",
	"Last 5 years": "",
	Days: Days$3,
	Weeks: Weeks$3,
	"Bi-weeks": "",
	Months: Months$3,
	"Bi-months": "",
	Quarters: Quarters$3,
	"Six-months": "",
	"Financial Years": "",
	Years: Years$3,
	Series: Series$3,
	Category: Category$3,
	Filter: Filter$3,
	Columns: Columns$3,
	Rows: Rows$3,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$3,
	"Select a program": "",
	Indicators: Indicators$3,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$3,
	Period: Period$3,
	"Organisation Unit": "",
	"Assigned Categories": "",
	Column: Column$3,
	"Stacked column": "",
	Bar: Bar$3,
	"Stacked bar": "",
	Line: Line$3,
	Area: Area$3,
	Pie: Pie$3,
	Radar: Radar$3,
	Gauge: Gauge$3,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$3,
	Base: Base$3,
	"No data": ""
};

var Totals$4 = "Totales";
var Details$4 = "Detalles";
var Detail$4 = "Detalle";
var Remove$4 = "Eliminar";
var Search$4 = "Buscar";
var Year$4 = "Año";
var January$4 = "Enero";
var February$4 = "Febrero";
var March$4 = "Marzo";
var April$4 = "Abril";
var May$4 = "Mayo";
var June$4 = "Junio";
var July$4 = "Julio";
var August$4 = "Agosto";
var September$4 = "Septiembre";
var October$4 = "Octubre";
var November$4 = "Noviembre";
var December$4 = "Diciembre";
var Daily$4 = "Diario";
var Weekly$4 = "Semanal";
var Monthly$4 = "Mensual";
var Quarterly$4 = "Trimestral";
var Yearly$4 = "Anual";
var Today$4 = "Hoy";
var Yesterday$4 = "Ayer";
var Days$4 = "Días";
var Weeks$4 = "Semanas";
var Months$4 = "Meses";
var Quarters$4 = "Trimestral";
var Years$4 = "Años";
var Series$4 = "";
var Category$4 = "Categoría";
var Filter$4 = "filtro";
var Columns$4 = "";
var Rows$4 = "";
var Program$4 = "Programa";
var Indicators$4 = "Indicadores";
var Data$4 = "Datos";
var Period$4 = "Periodo";
var Column$4 = "Columna";
var Bar$4 = "Barra";
var Line$4 = "Línea";
var Area$4 = "Área";
var Pie$4 = "Pastel";
var Radar$4 = "Radar";
var Gauge$4 = "Calibre";
var Target$4 = "Objetivo";
var Base$4 = "";
var esTranslations = {
	"Data Type": "Tipo de datos",
	Totals: Totals$4,
	Details: Details$4,
	Detail: Detail$4,
	"Move to {{axisName}}": "Mover a {{Nombredeleje}}",
	"Add to {{axisName}}": "Añadir a {{Nombredeleje}}",
	Remove: Remove$4,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$4,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Seleccionar todos",
	"Period type": "Tipo de periodo",
	Year: Year$4,
	"Select year": "Seleccionar año",
	"Relative periods": "Periodos relativos",
	"Fixed periods": "Periodos fijos",
	"No periods selected": "No se ha seleccionado ningún periodo",
	January: January$4,
	February: February$4,
	March: March$4,
	April: April$4,
	May: May$4,
	June: June$4,
	July: July$4,
	August: August$4,
	September: September$4,
	October: October$4,
	November: November$4,
	December: December$4,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$4,
	Weekly: Weekly$4,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$4,
	"Bi-monthly": "Bimestral",
	Quarterly: Quarterly$4,
	"Six-monthly": "Semestral",
	"Six-monthly April": "Semestral Abril",
	Yearly: Yearly$4,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Año fiscal - Octubre",
	"Financial year (Start July)": "Año fiscal - Julio",
	"Financial year (Start April)": "Año fiscal - Abril",
	Today: Today$4,
	Yesterday: Yesterday$4,
	"Last 3 days": "Últimos 3 días",
	"Last 7 days": "Últimos 7 diass",
	"Last 14 days": "Últimos 14 días",
	"This week": "Esta semana",
	"Last week": "Última semana",
	"Last 4 weeks": "Últimas 4 semanas",
	"Last 12 weeks": "Últimas 12 semanas",
	"Last 52 weeks": "Últimas 52 semanas",
	"Weeks this year": "Semanas de este año",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "Este mes",
	"Last month": "Mes anterior",
	"Last 3 months": "Últimos 3 meses",
	"Last 6 months": "Últimos 6 meses",
	"Last 12 months": "Ultimos 12 meses",
	"Months this year": "Meses este año",
	"This bi-month": "Este bimestre",
	"Last bi-month": "Bimestre anterior",
	"Last 6 bi-months": "Últimos 6 bimestres",
	"Bi-months this year": "",
	"This quarter": "Este trimestre",
	"Last quarter": "El trimestre pasado",
	"Last 4 quarters": "Últimos 4 trimestres",
	"Quarters this year": "Trimestres de este año",
	"This six-month": "Este semestre",
	"Last six-month": "Último semestre",
	"Last 2 six-month": "",
	"This financial year": "Este año fiscal",
	"Last financial year": "Último ejercicio financiero",
	"Last 5 financial years": "Últimos 5 ejercicios financieros",
	"This year": "Este año",
	"Last year": "El año pasado",
	"Last 5 years": "Últimos 5 años",
	Days: Days$4,
	Weeks: Weeks$4,
	"Bi-weeks": "",
	Months: Months$4,
	"Bi-months": "Bimestres",
	Quarters: Quarters$4,
	"Six-months": "Semestres",
	"Financial Years": "",
	Years: Years$4,
	Series: Series$4,
	Category: Category$4,
	Filter: Filter$4,
	Columns: Columns$4,
	Rows: Rows$4,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$4,
	"Select a program": "",
	Indicators: Indicators$4,
	"Select indicator group": "Elija un grupo de indicadores",
	"[ All groups ]": "",
	"Data elements": "Elementos de datos",
	"Select data element group": "Seleccionar grupo de elementos de datos",
	"[ All data elements ]": "",
	"Data sets": "Sets de datos",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "Datos de eventos",
	"Program indicators": "Indicadores de programa",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$4,
	Period: Period$4,
	"Organisation Unit": "Unidad Organizativa",
	"Assigned Categories": "",
	Column: Column$4,
	"Stacked column": "Columna apilada",
	Bar: Bar$4,
	"Stacked bar": "Barra apilada",
	Line: Line$4,
	Area: Area$4,
	Pie: Pie$4,
	Radar: Radar$4,
	Gauge: Gauge$4,
	"Year over year (line)": "Año tras año (línea)",
	"Year over year (column)": "Año tras año (columna)",
	"Single value": "Valor único",
	"Pivot table": "Tabla dinámica",
	Target: Target$4,
	Base: Base$4,
	"No data": "No hay datos"
};

var Totals$5 = "Totaux";
var Details$5 = "Details";
var Detail$5 = "Détail";
var Remove$5 = "Supprimer";
var Search$5 = "Chercher";
var Year$5 = "Année";
var January$5 = "Janvier";
var February$5 = "Février";
var March$5 = "Mars";
var April$5 = "Avril";
var May$5 = "Mai";
var June$5 = "Juin";
var July$5 = "Juillet";
var August$5 = "Août";
var September$5 = "Septembre";
var October$5 = "Octobre";
var November$5 = "Novembre";
var December$5 = "Décembre";
var Daily$5 = "Quotidien";
var Weekly$5 = "Hebdomadaire";
var Monthly$5 = "Mensuel";
var Quarterly$5 = "Trimestriel";
var Yearly$5 = "Annuel";
var Today$5 = "Aujourd'hui";
var Yesterday$5 = "Hier";
var Days$5 = "Jours";
var Weeks$5 = "Semaines";
var Months$5 = "Mois";
var Quarters$5 = "Trimestres";
var Years$5 = "Années";
var Series$5 = "Séries";
var Category$5 = "Catégorie";
var Filter$5 = "Filtrer";
var Columns$5 = "Colonnes";
var Rows$5 = "Lignes";
var Program$5 = "Programme";
var Indicators$5 = "Indicateurs";
var Data$5 = "Données";
var Period$5 = "Période";
var Column$5 = "Colonne";
var Bar$5 = "Bar";
var Line$5 = "Ligne";
var Area$5 = "Aire";
var Pie$5 = "Tarte";
var Radar$5 = "Radar";
var Gauge$5 = "Jauge";
var Target$5 = "Cible";
var Base$5 = "Base";
var frTranslations = {
	"Data Type": "Type de données",
	Totals: Totals$5,
	Details: Details$5,
	Detail: Detail$5,
	"Move to {{axisName}}": "Déménager à {{nomdel'axe}}",
	"Add to {{axisName}}": "Ajouter à {{nomdel'axe}} ",
	Remove: Remove$5,
	"Not available for {{visualizationType}}": "Non disponible pour {{Typedevisualisation}}",
	"Requires 2 or more data items": "Nécessite 2 éléments de données ou plus",
	"Only available when data is in Series": "Disponible uniquement lorsque les données sont en série",
	"Remove Assigned Categories": "Supprimer les Catégories Attribuées",
	"Add Assigned Categories": "Ajouter des Catégories Affectées",
	"Manage chart axes": "Gérer les axes du graphique",
	"Filter dimensions": "Dimensions du filtre",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "Dimension recommandée avec les données sélectionnées",
	Search: Search$5,
	"Selected Data": "Données sélectionnées",
	"Deselect All": "Tout déselectionner",
	"Select all": "Sélectionner tout",
	"Period type": "Type de période",
	Year: Year$5,
	"Select year": "Sélectionnez année",
	"Relative periods": "Périodes relatives",
	"Fixed periods": "Périodes fixes",
	"No periods selected": "Aucune périodes n'est sélectionnée",
	January: January$5,
	February: February$5,
	March: March$5,
	April: April$5,
	May: May$5,
	June: June$5,
	July: July$5,
	August: August$5,
	September: September$5,
	October: October$5,
	November: November$5,
	December: December$5,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$5,
	Weekly: Weekly$5,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "Hebdomadaire (début mercredi)",
	"Weekly (Start Thursday)": "Hebdomadaire (début jeudi)",
	"Weekly (Start Saturday)": "Hebdomadaire (début samedi)",
	"Weekly (Start Sunday)": "Hebdomadaire (début dimanche)",
	Monthly: Monthly$5,
	"Bi-monthly": "Bimensuel",
	Quarterly: Quarterly$5,
	"Six-monthly": "Semestriel",
	"Six-monthly April": "Six-mois avril",
	Yearly: Yearly$5,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Financière Octobre",
	"Financial year (Start July)": "Financière Juillet",
	"Financial year (Start April)": "Financière Avril",
	Today: Today$5,
	Yesterday: Yesterday$5,
	"Last 3 days": "3 derniers jours",
	"Last 7 days": "7 derniers jours",
	"Last 14 days": "14 dernier jours",
	"This week": "Cette semaine",
	"Last week": "Semaine passée",
	"Last 4 weeks": "4 dernières semaines",
	"Last 12 weeks": "12 dernières semaines",
	"Last 52 weeks": "52 dernières semaines",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "Ce mois-ci",
	"Last month": "Le mois dernier",
	"Last 3 months": "3 derniers mois",
	"Last 6 months": "6 derniers mois",
	"Last 12 months": "12 derniers mois",
	"Months this year": "Mois cette année",
	"This bi-month": "Ces 2 dernières semaines",
	"Last bi-month": "Dernier bi-mestre",
	"Last 6 bi-months": "6 derniers bimestres",
	"Bi-months this year": "",
	"This quarter": "Ce trimestre",
	"Last quarter": "Trimestre précédent",
	"Last 4 quarters": "4 derniers trimestres",
	"Quarters this year": "Trimestres cette année",
	"This six-month": "Ce semestre",
	"Last six-month": "Dernier semestre",
	"Last 2 six-month": "",
	"This financial year": "Année fiscale en cours",
	"Last financial year": "Dernière année financière",
	"Last 5 financial years": "5 dernières années financières",
	"This year": "Année en cours",
	"Last year": "L'année passée",
	"Last 5 years": "5 dernières années",
	Days: Days$5,
	Weeks: Weeks$5,
	"Bi-weeks": "",
	Months: Months$5,
	"Bi-months": "Bimensuel",
	Quarters: Quarters$5,
	"Six-months": "Semestres",
	"Financial Years": "",
	Years: Years$5,
	Series: Series$5,
	Category: Category$5,
	Filter: Filter$5,
	Columns: Columns$5,
	Rows: Rows$5,
	"Reporting rate": "Taux de déclaration",
	"Reporting rate on time": "Taux de notification à temps",
	"Actual reports": "Rapports réels",
	"Actual reports on time": "Rapports réels à temps",
	"Expected reports": "Rapports attendus",
	Program: Program$5,
	"Select a program": "Sélectionnez un programme",
	Indicators: Indicators$5,
	"Select indicator group": "Sélectionner groupe d'indicateurs",
	"[ All groups ]": "[ Tous les groupes ]",
	"Data elements": "Eléments de données",
	"Select data element group": "Sélectionner groupe d'éléments de données",
	"[ All data elements ]": "[ Tous les éléments de données ]",
	"Data sets": "Ensembles de données",
	"Select data sets": "Sélectionner des ensembles de données",
	"[ All metrics ]": "[ Toutes les métriques ]",
	"Event data items": "Eléments de données évènement",
	"Program indicators": "Program indicators",
	"{{dynamicOuNames}} and {{lastOuName}}": "{{NomsOudynamiques}} et {{dernièreOuNom}}",
	"{{allDynamicOuNames}} levels": "{{touslesnomsOudynamiques}} niveaux",
	"{{allDynamicOuNames}} groups": "{{touslesnomsOudynamiques}} groupes",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "{{touslesnomsOudynamiques}} niveaux dans {{NomsOustatiques}} ",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "{{touslesnomsOudynamiques}} groupes dans {{NomsOustatiques}}",
	Data: Data$5,
	Period: Period$5,
	"Organisation Unit": "Unité d'organisation",
	"Assigned Categories": "Catégories attribuées",
	Column: Column$5,
	"Stacked column": "Colonne empilée",
	Bar: Bar$5,
	"Stacked bar": "Bar empilé",
	Line: Line$5,
	Area: Area$5,
	Pie: Pie$5,
	Radar: Radar$5,
	Gauge: Gauge$5,
	"Year over year (line)": "Année après année (ligne)",
	"Year over year (column)": "Année après année (colonne)",
	"Single value": "Valeur unique",
	"Pivot table": "Tableau croisé dynamique",
	Target: Target$5,
	Base: Base$5,
	"No data": "Aucune donnée"
};

var Totals$6 = "Total";
var Details$6 = "Rincian";
var Detail$6 = "Rincian";
var Remove$6 = "Hapus";
var Search$6 = "Pencarian";
var Year$6 = "";
var January$6 = "Januari";
var February$6 = "Februari";
var March$6 = "Maret";
var April$6 = "April";
var May$6 = "Mei";
var June$6 = "Juni";
var July$6 = "Juli";
var August$6 = "Agustus";
var September$6 = "September";
var October$6 = "Oktober";
var November$6 = "November";
var December$6 = "Desember";
var Daily$6 = "Harian";
var Weekly$6 = "Mingguan";
var Monthly$6 = "Bulanan";
var Quarterly$6 = "Triwulanan";
var Yearly$6 = "Tahunan";
var Today$6 = "Hari ini";
var Yesterday$6 = "Kemarin";
var Days$6 = "Hari";
var Weeks$6 = "Minggu";
var Months$6 = "Bulan";
var Quarters$6 = "Triwulan";
var Years$6 = "Tahun";
var Series$6 = "Seri";
var Category$6 = "Kategori";
var Filter$6 = "Saring";
var Columns$6 = "";
var Rows$6 = "";
var Program$6 = "Program";
var Indicators$6 = "Indikator";
var Data$6 = "Data";
var Period$6 = "Periode";
var Column$6 = "Kolom";
var Bar$6 = "Bar";
var Line$6 = "Garis";
var Area$6 = "Area";
var Pie$6 = "Pie";
var Radar$6 = "Radar";
var Gauge$6 = "Meteran";
var Target$6 = "";
var Base$6 = "Dasar";
var idTranslations = {
	"Data Type": "Tipe Data",
	Totals: Totals$6,
	Details: Details$6,
	Detail: Detail$6,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "Tambahkan ke {{axisName}}",
	Remove: Remove$6,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "Filter dimensi",
	"Main dimensions": "Dimensi utama",
	"Your dimensions": "Dimensi Anda",
	"Dimension recommended with selected data": "Dimensi yang direkomendasikan dengan data terpilih",
	Search: Search$6,
	"Selected Data": "Data Terpilih",
	"Deselect All": "",
	"Select all": "",
	"Period type": "Tipe periode",
	Year: Year$6,
	"Select year": "",
	"Relative periods": "Periode relatif",
	"Fixed periods": "Periode tetap",
	"No periods selected": "Tidak ada periode yang dipilih",
	January: January$6,
	February: February$6,
	March: March$6,
	April: April$6,
	May: May$6,
	June: June$6,
	July: July$6,
	August: August$6,
	September: September$6,
	October: October$6,
	November: November$6,
	December: December$6,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$6,
	Weekly: Weekly$6,
	"Bi-weekly": "Dwiwulanan",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$6,
	"Bi-monthly": "Dwiwulanan",
	Quarterly: Quarterly$6,
	"Six-monthly": "Semester",
	"Six-monthly April": "Semester April",
	Yearly: Yearly$6,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Financial October",
	"Financial year (Start July)": "Financial July",
	"Financial year (Start April)": "Financial April",
	Today: Today$6,
	Yesterday: Yesterday$6,
	"Last 3 days": "3 hari terakhir",
	"Last 7 days": "7 hari terakhir",
	"Last 14 days": "14 hari terakhir",
	"This week": "Minggu ini",
	"Last week": "Minggu lalu",
	"Last 4 weeks": "4 minggu terakhir",
	"Last 12 weeks": "12 minggu terakhir",
	"Last 52 weeks": "52 minggu terakhir",
	"Weeks this year": "Mingguan tahun ini",
	"This bi-week": "Dwiwulan ini",
	"Last bi-week": "Dwiwulan terakhir",
	"Last 4 bi-weeks": "4 dwiwulan terakhir",
	"This month": "Bulan ini",
	"Last month": "Bulan lalu",
	"Last 3 months": "3 bulan terakhir",
	"Last 6 months": "6 bulan terakhir",
	"Last 12 months": "12 bulan terakhir",
	"Months this year": "Bulanan tahun ini",
	"This bi-month": "2 bulan ini",
	"Last bi-month": "Dwiwulan terakhir",
	"Last 6 bi-months": "6 dwiwulan terakhir",
	"Bi-months this year": "Dwiwulanan tahun ini",
	"This quarter": "Triwulan ini",
	"Last quarter": "Triwulan yang lalu",
	"Last 4 quarters": "4 triwulan terakhir",
	"Quarters this year": "Triwulanan tahun ini",
	"This six-month": "6 bulan ini",
	"Last six-month": "Semester lalu",
	"Last 2 six-month": "",
	"This financial year": "Tahun finansial ini",
	"Last financial year": "Tahun finansial kemarin",
	"Last 5 financial years": "5 tahun finansial terakhir",
	"This year": "Tahun ini",
	"Last year": "Tahun kemarin",
	"Last 5 years": "5 tahun terakhir",
	Days: Days$6,
	Weeks: Weeks$6,
	"Bi-weeks": "Dwiwulan",
	Months: Months$6,
	"Bi-months": "Dwiwulan",
	Quarters: Quarters$6,
	"Six-months": "Semester",
	"Financial Years": "",
	Years: Years$6,
	Series: Series$6,
	Category: Category$6,
	Filter: Filter$6,
	Columns: Columns$6,
	Rows: Rows$6,
	"Reporting rate": "Tingkat pelaporan",
	"Reporting rate on time": "Tingkat pelaporan tepat waktu",
	"Actual reports": "Laporan sesungguhnya",
	"Actual reports on time": "Laporan sesungguhnya yang tepat waktu",
	"Expected reports": "Laporan yang diharapkan",
	Program: Program$6,
	"Select a program": "Pilih program",
	Indicators: Indicators$6,
	"Select indicator group": "Pilih grup indikator",
	"[ All groups ]": "[ All groups ]",
	"Data elements": "Data elemen",
	"Select data element group": "Pilih grup data elemen",
	"[ All data elements ]": "[ All data elements ]",
	"Data sets": "Data set",
	"Select data sets": "Pilih data set",
	"[ All metrics ]": "[ All metrics ]",
	"Event data items": "Item data event",
	"Program indicators": "Indikator program",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$6,
	Period: Period$6,
	"Organisation Unit": "Unit Organisasi",
	"Assigned Categories": "",
	Column: Column$6,
	"Stacked column": "Kolom tumpuk",
	Bar: Bar$6,
	"Stacked bar": "Bar tumpuk",
	Line: Line$6,
	Area: Area$6,
	Pie: Pie$6,
	Radar: Radar$6,
	Gauge: Gauge$6,
	"Year over year (line)": "Tahun ke tahun (garis)",
	"Year over year (column)": "Tahun ke tahun (kolom)",
	"Single value": "Nilai tunggal",
	"Pivot table": "Tabel Pivot",
	Target: Target$6,
	Base: Base$6,
	"No data": "Tidak ada data"
};

var Totals$7 = "";
var Details$7 = "លម្អិត";
var Detail$7 = "";
var Remove$7 = "យកចេញ";
var Search$7 = "ស្វែងរក";
var Year$7 = "ឆ្នាំ";
var January$7 = "មករា​";
var February$7 = "កុម្ភៈ​";
var March$7 = "មីនា​";
var April$7 = "មេសា​";
var May$7 = "ឧសភា​";
var June$7 = "មិថុនា​";
var July$7 = "កក្កដា​";
var August$7 = "សីហា​";
var September$7 = "កញ្ញា​";
var October$7 = "តុលា​";
var November$7 = "វិច្ឆិកា​";
var December$7 = "ធ្នូ​";
var Daily$7 = "រាល់​ថ្ងៃ";
var Weekly$7 = "រាល់​សប្ដាហ៍";
var Monthly$7 = "រាល់​ខែ";
var Quarterly$7 = "រាល់ត្រីមាស";
var Yearly$7 = "ប្រចាំឆ្នាំ";
var Today$7 = "";
var Yesterday$7 = "";
var Days$7 = "ថ្ងៃ";
var Weeks$7 = "សប្ដាហ៏";
var Months$7 = "ខែ";
var Quarters$7 = "";
var Years$7 = "ឆ្នាំ";
var Series$7 = "";
var Category$7 = "";
var Filter$7 = "";
var Columns$7 = "";
var Rows$7 = "";
var Program$7 = "";
var Indicators$7 = "Indicators";
var Data$7 = "Data";
var Period$7 = "កំឡុងពេល";
var Column$7 = "";
var Bar$7 = "";
var Line$7 = "";
var Area$7 = "";
var Pie$7 = "";
var Radar$7 = "";
var Gauge$7 = "";
var Target$7 = "";
var Base$7 = "";
var kmTranslations = {
	"Data Type": "",
	Totals: Totals$7,
	Details: Details$7,
	Detail: Detail$7,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$7,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$7,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "ជ្រើស​ទាំងអស់",
	"Period type": "Period type",
	Year: Year$7,
	"Select year": "",
	"Relative periods": "",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$7,
	February: February$7,
	March: March$7,
	April: April$7,
	May: May$7,
	June: June$7,
	July: July$7,
	August: August$7,
	September: September$7,
	October: October$7,
	November: November$7,
	December: December$7,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$7,
	Weekly: Weekly$7,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$7,
	"Bi-monthly": "រាល់ពីរសប្តាហ៍",
	Quarterly: Quarterly$7,
	"Six-monthly": "រាល់ឆមាស",
	"Six-monthly April": "ប្រចាំឆមាស​ពីខែមេសា",
	Yearly: Yearly$7,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$7,
	Yesterday: Yesterday$7,
	"Last 3 days": "",
	"Last 7 days": "",
	"Last 14 days": "",
	"This week": "",
	"Last week": "",
	"Last 4 weeks": "",
	"Last 12 weeks": "",
	"Last 52 weeks": "",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "",
	"Last 3 months": "",
	"Last 6 months": "",
	"Last 12 months": "",
	"Months this year": "",
	"This bi-month": "",
	"Last bi-month": "",
	"Last 6 bi-months": "",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "",
	"Last 4 quarters": "",
	"Quarters this year": "",
	"This six-month": "",
	"Last six-month": "",
	"Last 2 six-month": "",
	"This financial year": "",
	"Last financial year": "",
	"Last 5 financial years": "",
	"This year": "",
	"Last year": "",
	"Last 5 years": "",
	Days: Days$7,
	Weeks: Weeks$7,
	"Bi-weeks": "",
	Months: Months$7,
	"Bi-months": "",
	Quarters: Quarters$7,
	"Six-months": "",
	"Financial Years": "",
	Years: Years$7,
	Series: Series$7,
	Category: Category$7,
	Filter: Filter$7,
	Columns: Columns$7,
	Rows: Rows$7,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$7,
	"Select a program": "",
	Indicators: Indicators$7,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "Data elements",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$7,
	Period: Period$7,
	"Organisation Unit": "ផ្នែក​នៃ​អង្គការ",
	"Assigned Categories": "",
	Column: Column$7,
	"Stacked column": "",
	Bar: Bar$7,
	"Stacked bar": "",
	Line: Line$7,
	Area: Area$7,
	Pie: Pie$7,
	Radar: Radar$7,
	Gauge: Gauge$7,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$7,
	Base: Base$7,
	"No data": ""
};

var Totals$8 = "ລວມທັງໝົດ";
var Details$8 = "ລາຍລະອຽດ";
var Detail$8 = "";
var Remove$8 = "ລົບອອກ";
var Search$8 = "ຄົນຫາ";
var Year$8 = "ປີ";
var January$8 = "ມັງກອນ";
var February$8 = "ກຸມພາ";
var March$8 = "ມີນາ";
var April$8 = "ເມສາ";
var May$8 = "ພຶດສະພາ";
var June$8 = "ມີຖຸນາ";
var July$8 = "ກໍລະກົດ";
var August$8 = "ສິງຫາ";
var September$8 = "ກັນຍາ";
var October$8 = "ຕຸລາ";
var November$8 = "ພະຈິກ";
var December$8 = "ທັນວາ";
var Daily$8 = "ທຸກໆມື້";
var Weekly$8 = "ເປັນອາທິດ";
var Monthly$8 = "ລາຍເດືອນ";
var Quarterly$8 = "ໄຕມາດ";
var Yearly$8 = "ລາຍປີ";
var Today$8 = "ມື້ນີ້";
var Yesterday$8 = "ມື້ວານນີ";
var Days$8 = "ມື້";
var Weeks$8 = "ອາທິດ";
var Months$8 = "ເດືອນ";
var Quarters$8 = "ໄຕມາດ";
var Years$8 = "ປີ";
var Series$8 = "ແທ່ງ";
var Category$8 = "ລວງນອນ";
var Filter$8 = "Filter";
var Columns$8 = "";
var Rows$8 = "";
var Program$8 = "Program";
var Indicators$8 = "ຕົວຊີ້ວັດ";
var Data$8 = "ຂໍ້ມູນ";
var Period$8 = "ຊ່ວງເວລາ";
var Column$8 = "ຖັນ";
var Bar$8 = "";
var Line$8 = "";
var Area$8 = "";
var Pie$8 = "";
var Radar$8 = "";
var Gauge$8 = "";
var Target$8 = "ເປົ້າໝາຍ";
var Base$8 = "ຖານ";
var loTranslations = {
	"Data Type": "",
	Totals: Totals$8,
	Details: Details$8,
	Detail: Detail$8,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$8,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$8,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Select all",
	"Period type": "ແບບຊ່ວງເວລາ",
	Year: Year$8,
	"Select year": "",
	"Relative periods": "​ໄລ​ຍະ​ເວ​ລາ​ໄກ້​ຄຽງ",
	"Fixed periods": "ໄລຍະເວລາທີ່ໄດ້ກຳນົດ",
	"No periods selected": "ບໍ່ທັນໄດ້ເລືອກໄລຍະເວລາ",
	January: January$8,
	February: February$8,
	March: March$8,
	April: April$8,
	May: May$8,
	June: June$8,
	July: July$8,
	August: August$8,
	September: September$8,
	October: October$8,
	November: November$8,
	December: December$8,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$8,
	Weekly: Weekly$8,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$8,
	"Bi-monthly": "ທຸກໆສອງເດືອນ",
	Quarterly: Quarterly$8,
	"Six-monthly": "ແຕ່ລະ 6 ເດືອນ",
	"Six-monthly April": "ແຕ່ລະຫົກເດືອນ ແລະ ເດືອນເມສາ",
	Yearly: Yearly$8,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "ສົກປີງົບປະມານ (ເລີ່ມແຕ່ເດືອນຕຸລາ)",
	"Financial year (Start July)": "ສົກປີງົບປະມານ (ເລີ່ມແຕ່ເດືອນມິຖຸນາ)",
	"Financial year (Start April)": "ສົກປີງົບປະມານ (ເລີ່ມແຕ່ເດືອນເມສາ)",
	Today: Today$8,
	Yesterday: Yesterday$8,
	"Last 3 days": "3 ມື້ກ່ອນ",
	"Last 7 days": "7 ມື້ກ່ອນ",
	"Last 14 days": "14 ມື້ກ່ອນ",
	"This week": "ທິດນີ້",
	"Last week": "ອາທິດທີ່ຜ່ານມາ",
	"Last 4 weeks": "4 ອາທິດຍ້ອນຫຼັງ",
	"Last 12 weeks": "12 ອາທິດຍ້ອນຫຼັງ",
	"Last 52 weeks": "52 ອາທິດຜ່ານມາ",
	"Weeks this year": "ອາທິດ ຂອງປີນີ້",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "ເດືອນນີ້",
	"Last month": "ເດືອນຜ່ານມາ",
	"Last 3 months": "3 ເດືອນຍ້ອນຫຼັງ",
	"Last 6 months": "6 ເດືອນຜ່ານມາ",
	"Last 12 months": "12 ເດືອນຍ້ອນຫຼັງ",
	"Months this year": "​ເດືອນ​ໃນ​ປີ",
	"This bi-month": "ສອງເດືອນນີ້",
	"Last bi-month": "ສອງເດືອນກ່ອນທ້າຍປີ",
	"Last 6 bi-months": "6 ຂອງສອງເດືອນສຸດທ້າຍ",
	"Bi-months this year": "ສອງເດືອນ ຂອງປີນີ້",
	"This quarter": "ໄຕມານີ້",
	"Last quarter": "ໄຕມາດຜ່ານມາ",
	"Last 4 quarters": "4 ໄຕມາດຍ້ອນຫຼັງ",
	"Quarters this year": "​ໄຕຼມາດ​ໃນ​ປີ",
	"This six-month": "6 ເດືອນນີ້",
	"Last six-month": "6 ເດືອນຜ່ານມາ",
	"Last 2 six-month": "",
	"This financial year": "ສົກປີງົບປະມານຂອງປິນີ້",
	"Last financial year": "​ສົກ​ປີ​ງົບ​ປະ​ມານ​ປີ​ກາຍ",
	"Last 5 financial years": "​ສົກ​ປິ​ງົບ​ປະ​ມານ 5ປີ​ຜ່ານ​ມາ",
	"This year": "ປີນີ້",
	"Last year": "ປີກາຍ",
	"Last 5 years": "5 ປີຍ້ອນຫຼັງ",
	Days: Days$8,
	Weeks: Weeks$8,
	"Bi-weeks": "",
	Months: Months$8,
	"Bi-months": "2ເດືອນ",
	Quarters: Quarters$8,
	"Six-months": "6 ເດືອນ",
	"Financial Years": "",
	Years: Years$8,
	Series: Series$8,
	Category: Category$8,
	Filter: Filter$8,
	Columns: Columns$8,
	Rows: Rows$8,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$8,
	"Select a program": "",
	Indicators: Indicators$8,
	"Select indicator group": "ເລືອກກຸ່ມຕົວຊີ້ວັດ",
	"[ All groups ]": "",
	"Data elements": "ອົງປະກອບຂໍ້ມູນ",
	"Select data element group": "ເລືອກກຸ່ມອົງປະກອບຂອງຂໍ້ມູນ",
	"[ All data elements ]": "",
	"Data sets": "ແບບຟອມ",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "ຂໍ້ມູນລາຍບຸກຄົນ",
	"Program indicators": "ຕົວຊີ້ວັດສະເພາະວຽກຂອງຂະແໜງ",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$8,
	Period: Period$8,
	"Organisation Unit": "ຫົວໜ່ວຍ ການຈັດຕັ້ງ",
	"Assigned Categories": "",
	Column: Column$8,
	"Stacked column": "",
	Bar: Bar$8,
	"Stacked bar": "",
	Line: Line$8,
	Area: Area$8,
	Pie: Pie$8,
	Radar: Radar$8,
	Gauge: Gauge$8,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$8,
	Base: Base$8,
	"No data": "ບໍ່ມີຂໍ້ມູນ"
};

var Totals$9 = "";
var Details$9 = "အသေးစိတ်များ";
var Detail$9 = "";
var Remove$9 = "ဖယ်ရှားခြင်း";
var Search$9 = "";
var Year$9 = "ခုနှစ်";
var January$9 = "ဇန်နဝါရီ";
var February$9 = "ဖေဖော်ဝါရီ";
var March$9 = "မတ်";
var April$9 = "ဧပြီ";
var May$9 = "မေ";
var June$9 = "ဇွန်";
var July$9 = "ဇူလိုင်";
var August$9 = "သြဂုတ်";
var September$9 = "စက်တင်ဘာ";
var October$9 = "အောက်တိုဘာ";
var November$9 = "နိုဝင်ဘာ";
var December$9 = "ဒီဇင်ဘာ";
var Daily$9 = "နေ့စဉ်";
var Weekly$9 = "အပတ်စဉ်";
var Monthly$9 = "လစဉ်";
var Quarterly$9 = "သုံးလတစ်ကြိမ်";
var Yearly$9 = "နှစ်စဉ်";
var Today$9 = "";
var Yesterday$9 = "";
var Days$9 = "";
var Weeks$9 = "";
var Months$9 = "လများ";
var Quarters$9 = "၃လမြောက်";
var Years$9 = "နှစ်များ";
var Series$9 = "အစဉ်အတန်းများ";
var Category$9 = "category";
var Filter$9 = "ရှာဖွေထုတ်သည်";
var Columns$9 = "";
var Rows$9 = "";
var Program$9 = "";
var Indicators$9 = "အညွှန်းများ";
var Data$9 = "အချက်အလက်";
var Period$9 = "အချိန်ကာလ";
var Column$9 = "";
var Bar$9 = "";
var Line$9 = "";
var Area$9 = "";
var Pie$9 = "";
var Radar$9 = "";
var Gauge$9 = "";
var Target$9 = "ပစ်မှတ်/ ဦးတည်ချက်";
var Base$9 = "အခြေ";
var myTranslations = {
	"Data Type": "",
	Totals: Totals$9,
	Details: Details$9,
	Detail: Detail$9,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$9,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$9,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "အားလုံးကိုရွေးချယ်သည်",
	"Period type": "Period type",
	Year: Year$9,
	"Select year": "",
	"Relative periods": "",
	"Fixed periods": "",
	"No periods selected": "သက်ဆိုင်ရာ အချိန်ကာလကို မရွေးချယ်ထားပါ။",
	January: January$9,
	February: February$9,
	March: March$9,
	April: April$9,
	May: May$9,
	June: June$9,
	July: July$9,
	August: August$9,
	September: September$9,
	October: October$9,
	November: November$9,
	December: December$9,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$9,
	Weekly: Weekly$9,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$9,
	"Bi-monthly": "နှစ်လတစ်ကြိမ်",
	Quarterly: Quarterly$9,
	"Six-monthly": "ခြောက်လတစ်ကြိမ်",
	"Six-monthly April": "",
	Yearly: Yearly$9,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$9,
	Yesterday: Yesterday$9,
	"Last 3 days": "",
	"Last 7 days": "",
	"Last 14 days": "",
	"This week": "",
	"Last week": "Last week",
	"Last 4 weeks": "",
	"Last 12 weeks": "",
	"Last 52 weeks": "",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "ယခင်လ",
	"Last 3 months": "လွန်ခဲ့သော ၁၂လ",
	"Last 6 months": "Last 6 months",
	"Last 12 months": "လွန်ခဲ့သော ၁၂လ",
	"Months this year": "",
	"This bi-month": "",
	"Last bi-month": "လွန်ခဲ့သော ၆လက",
	"Last 6 bi-months": "လွန်ခဲ့သော ၆လ(၂ကြိမ်)",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "လွန်ခဲ့သော ၃လက",
	"Last 4 quarters": "လွန်ခဲ့သော ၁၂လက",
	"Quarters this year": "Quarters this year",
	"This six-month": "",
	"Last six-month": "လွန်ခဲ့သော ၆လက",
	"Last 2 six-month": "",
	"This financial year": "",
	"Last financial year": "",
	"Last 5 financial years": "",
	"This year": "ဒီနှစ်",
	"Last year": "ယခင်နှစ်",
	"Last 5 years": "လွန်ခဲ့သော ၅ နှစ်",
	Days: Days$9,
	Weeks: Weeks$9,
	"Bi-weeks": "",
	Months: Months$9,
	"Bi-months": "Двухмесячные промежутки",
	Quarters: Quarters$9,
	"Six-months": "၆ လ",
	"Financial Years": "",
	Years: Years$9,
	Series: Series$9,
	Category: Category$9,
	Filter: Filter$9,
	Columns: Columns$9,
	Rows: Rows$9,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$9,
	"Select a program": "",
	Indicators: Indicators$9,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "အချက်အလတ်အစိတ်အပိုင်းများ",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "စီမံချက်",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$9,
	Period: Period$9,
	"Organisation Unit": "အဖွဲ့အစည်းယူနစ်",
	"Assigned Categories": "",
	Column: Column$9,
	"Stacked column": "",
	Bar: Bar$9,
	"Stacked bar": "",
	Line: Line$9,
	Area: Area$9,
	Pie: Pie$9,
	Radar: Radar$9,
	Gauge: Gauge$9,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$9,
	Base: Base$9,
	"No data": "အချက်အလက်မရှိပါ။"
};

var Totals$a = "Totalsummer";
var Details$a = "Detaljer";
var Detail$a = "Detalj";
var Remove$a = "Fjern";
var Search$a = "Søk";
var Year$a = "År";
var January$a = "Januar";
var February$a = "Februar";
var March$a = "Mars";
var April$a = "April";
var May$a = "Mai";
var June$a = "Juni";
var July$a = "Juli";
var August$a = "August";
var September$a = "September";
var October$a = "Oktober";
var November$a = "November";
var December$a = "Desember";
var Daily$a = "Daglig";
var Weekly$a = "Ukentlig";
var Monthly$a = "Månedlig";
var Quarterly$a = "Kvartalsvis";
var Yearly$a = "Årlig";
var Today$a = "I dag";
var Yesterday$a = "I går";
var Days$a = "Dager";
var Weeks$a = "Uker";
var Months$a = "Måneder";
var Quarters$a = "Kvartaler";
var Years$a = "År";
var Series$a = "Serie";
var Category$a = "Kategori";
var Filter$a = "Filter";
var Columns$a = "Kolonner";
var Rows$a = "Rader";
var Program$a = "Program";
var Indicators$a = "Indikatorer";
var Data$a = "Data";
var Period$a = "Periode";
var Column$a = "Stolpe";
var Bar$a = "Liggende stolpe";
var Line$a = "Linje";
var Area$a = "Areal";
var Pie$a = "Sektor";
var Radar$a = "Radar";
var Gauge$a = "Radialmåler";
var Target$a = "Mål";
var Base$a = "Grunn";
var nbTranslations = {
	"Data Type": "Datatype",
	Totals: Totals$a,
	Details: Details$a,
	Detail: Detail$a,
	"Move to {{axisName}}": "Flytt til {{axisName}}",
	"Add to {{axisName}}": "Legg til {{axisName}}",
	Remove: Remove$a,
	"Not available for {{visualizationType}}": "Ikke tilgjengelig for {{visualizationType}}",
	"Requires 2 or more data items": "Krever 2 eller flere datapunkter",
	"Only available when data is in Series": "Bare tilgjengelig når data er i Serier",
	"Remove Assigned Categories": "Fjern Tildelte Kategorier",
	"Add Assigned Categories": "Legg tildelte kategorier",
	"Manage chart axes": "Administrer diagramakser",
	"Filter dimensions": "Filterdimensjoner",
	"Main dimensions": "Hoveddimensjoner",
	"Your dimensions": "Dine dimensjoner",
	"Dimension recommended with selected data": "Dimensjon anbefalt med valgte data",
	Search: Search$a,
	"Selected Data": "Valgt data",
	"Deselect All": "Fjern valg",
	"Select all": "Velg alt",
	"Period type": "Periodetype",
	Year: Year$a,
	"Select year": "Velg år",
	"Relative periods": "Relative perioder",
	"Fixed periods": "Faste perioder",
	"No periods selected": "Ingen perioder er valgt",
	January: January$a,
	February: February$a,
	March: March$a,
	April: April$a,
	May: May$a,
	June: June$a,
	July: July$a,
	August: August$a,
	September: September$a,
	October: October$a,
	November: November$a,
	December: December$a,
	"Week {{weekNumber}}": "Uke {{weekNumber}}",
	"Bi-Week {{biWeekNumber}}": "Touke {{biWeekNumber}}",
	Daily: Daily$a,
	Weekly: Weekly$a,
	"Bi-weekly": "Toukentlig",
	"Weekly (Start Wednesday)": "Ukentlig (start onsdag)",
	"Weekly (Start Thursday)": "Ukentlig (start torsdag)",
	"Weekly (Start Saturday)": "Ukentlig (start lørdag)",
	"Weekly (Start Sunday)": "Ukentlig (start søndag)",
	Monthly: Monthly$a,
	"Bi-monthly": "Tomånedlig",
	Quarterly: Quarterly$a,
	"Six-monthly": "Halvårlig",
	"Six-monthly April": "Halvårig April",
	Yearly: Yearly$a,
	"Financial year (Start November)": "Regnskapsår (start november)",
	"Financial year (Start October)": "Regnskapsår (start oktober)",
	"Financial year (Start July)": "Regnskapsår (start juli)",
	"Financial year (Start April)": "Regnskapsår (start april)",
	Today: Today$a,
	Yesterday: Yesterday$a,
	"Last 3 days": "Siste 3 dager",
	"Last 7 days": "Siste 7 dager",
	"Last 14 days": "Siste 14 dager",
	"This week": "Denne uken",
	"Last week": "Forrige uke",
	"Last 4 weeks": "Siste 4 uker",
	"Last 12 weeks": "Siste 12 uker",
	"Last 52 weeks": "Siste 52 uker",
	"Weeks this year": "Uker inneværende år",
	"This bi-week": "Denne touken",
	"Last bi-week": "Sist touke",
	"Last 4 bi-weeks": "Siste 4 touker",
	"This month": "Denne måneden",
	"Last month": "Forrige måned",
	"Last 3 months": "Siste 3 måneder",
	"Last 6 months": "Siste 6 måneder",
	"Last 12 months": "Siste 12 måneder",
	"Months this year": "Måneder i år",
	"This bi-month": "Denne tomåneden",
	"Last bi-month": "Siste tomåned",
	"Last 6 bi-months": "Siste 6 tomåneder",
	"Bi-months this year": "Tomåneder i år",
	"This quarter": "Dette kvartalet",
	"Last quarter": "Siste kvartal",
	"Last 4 quarters": "Siste 4 kvartaler",
	"Quarters this year": "Kvartaler i år",
	"This six-month": "Dette halvåret",
	"Last six-month": "Siste halvår",
	"Last 2 six-month": "Siste to halvår",
	"This financial year": "Dette regnskapsåret",
	"Last financial year": "Siste regnskapsår",
	"Last 5 financial years": "Siste 5 regnskapsår",
	"This year": "Dette året",
	"Last year": "Forrige år",
	"Last 5 years": "Siste 5 år",
	Days: Days$a,
	Weeks: Weeks$a,
	"Bi-weeks": "Touker",
	Months: Months$a,
	"Bi-months": "Tomåneder",
	Quarters: Quarters$a,
	"Six-months": "Halvår",
	"Financial Years": "Regnskapsår",
	Years: Years$a,
	Series: Series$a,
	Category: Category$a,
	Filter: Filter$a,
	Columns: Columns$a,
	Rows: Rows$a,
	"Reporting rate": "Rapporteringfrekvens",
	"Reporting rate on time": "Rapporteringsfrekvens i tide",
	"Actual reports": "Faktiske rapporter",
	"Actual reports on time": "Faktiske rapporter i tide",
	"Expected reports": "Forventede rapporter",
	Program: Program$a,
	"Select a program": "Velg et program",
	Indicators: Indicators$a,
	"Select indicator group": "Velg indikatorgruppe",
	"[ All groups ]": "[ Alle grupper ]",
	"Data elements": "Dataelementer",
	"Select data element group": "Velg dataelementgrupper",
	"[ All data elements ]": "[ Alle dataelementer ]",
	"Data sets": "Datasett",
	"Select data sets": "Velg datasett",
	"[ All metrics ]": "[ Alle beregninger ]",
	"Event data items": "Hendelsesdatapunkter",
	"Program indicators": "Programindikatorer",
	"{{dynamicOuNames}} and {{lastOuName}}": "{{dynamicOuNames}} og {{lastOuName}}",
	"{{allDynamicOuNames}} levels": "{{allDynamicOuNames}}-nivåer",
	"{{allDynamicOuNames}} groups": "{{allDynamicOuNames}}-grupper",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "{{allDynamicOuNames}} nivåer i {{staticOuNames}}",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "{{allDynamicOuNames}}-grupper i {{staticOuNames}}",
	Data: Data$a,
	Period: Period$a,
	"Organisation Unit": "Organisasjonsenhet",
	"Assigned Categories": "Tildelte Kategorier",
	Column: Column$a,
	"Stacked column": "Stablet stående stolpe",
	Bar: Bar$a,
	"Stacked bar": "Liggende stablet stolpe",
	Line: Line$a,
	Area: Area$a,
	Pie: Pie$a,
	Radar: Radar$a,
	Gauge: Gauge$a,
	"Year over year (line)": "År over år (linje)",
	"Year over year (column)": "År over år (stolpe)",
	"Single value": "Enkeltverdi",
	"Pivot table": "Pivottabell",
	Target: Target$a,
	Base: Base$a,
	"No data": "Ingen data"
};

var Totals$b = "مجموعه";
var Details$b = "جزئیات";
var Detail$b = "";
var Remove$b = "حذف";
var Search$b = "جستجو";
var Year$b = "سال";
var January$b = "جنوری";
var February$b = "فبروری";
var March$b = "مارچ";
var April$b = "آپریل";
var May$b = "می";
var June$b = "جون";
var July$b = "جولای";
var August$b = "آگست";
var September$b = "سپتامبر";
var October$b = "اکتبر";
var November$b = "نوامبر";
var December$b = "دسامبر";
var Daily$b = "روزنه";
var Weekly$b = "هفته وار";
var Monthly$b = "ماهانه";
var Quarterly$b = "سه ماهه";
var Yearly$b = "سالانه";
var Today$b = "امروز";
var Yesterday$b = "دیروز";
var Days$b = "روزها";
var Weeks$b = "هفته ها";
var Months$b = "ماه ها";
var Quarters$b = "سه ماهه";
var Years$b = "سالانه";
var Series$b = "سلسله (لړۍ)";
var Category$b = "دسته بندی";
var Filter$b = "فلتر";
var Columns$b = "";
var Rows$b = "";
var Program$b = "برنامه";
var Indicators$b = "شاخص ها";
var Data$b = "دیتا";
var Period$b = "دوره";
var Column$b = "ستون";
var Bar$b = "";
var Line$b = "";
var Area$b = "";
var Pie$b = "";
var Radar$b = "";
var Gauge$b = "";
var Target$b = "موخه";
var Base$b = "اساس";
var prsTranslations = {
	"Data Type": "",
	Totals: Totals$b,
	Details: Details$b,
	Detail: Detail$b,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$b,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$b,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "انتخاب همه",
	"Period type": "د مودې ډول",
	Year: Year$b,
	"Select year": "غوره کال",
	"Relative periods": "دوره های ارتباطی",
	"Fixed periods": "ثابتې مودې",
	"No periods selected": "هېڅ مودې نه دي غوره شوې",
	January: January$b,
	February: February$b,
	March: March$b,
	April: April$b,
	May: May$b,
	June: June$b,
	July: July$b,
	August: August$b,
	September: September$b,
	October: October$b,
	November: November$b,
	December: December$b,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$b,
	Weekly: Weekly$b,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$b,
	"Bi-monthly": "دوبار در- ماه",
	Quarterly: Quarterly$b,
	"Six-monthly": "شش-ماهه",
	"Six-monthly April": "شش-ماهه اپریل",
	Yearly: Yearly$b,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "اکتوبر مالی",
	"Financial year (Start July)": "مالی جولای",
	"Financial year (Start April)": "مالی اپریل",
	Today: Today$b,
	Yesterday: Yesterday$b,
	"Last 3 days": "3 روز گذشته",
	"Last 7 days": "7 روز گذشته",
	"Last 14 days": "14 روز گذشته",
	"This week": "هفته جاری",
	"Last week": "هفته گذشته",
	"Last 4 weeks": "4 هفته گذشته",
	"Last 12 weeks": "12 هفته گذشته",
	"Last 52 weeks": "52 هفته گذشته",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "ماه جاری",
	"Last month": "ماه گذشته",
	"Last 3 months": "3 ماهه گذشته",
	"Last 6 months": "6 ماه گذشته",
	"Last 12 months": "12 ماهه گذشته",
	"Months this year": "ماه های سال هذا",
	"This bi-month": "دوبار در ماه جاری",
	"Last bi-month": "دوبار در ماه گذشته",
	"Last 6 bi-months": "دروبار در شش-ماه گذشته",
	"Bi-months this year": "",
	"This quarter": "سه ماهه جاری",
	"Last quarter": "سه ماهه آخیر",
	"Last 4 quarters": "4 سه ماهه آخیر",
	"Quarters this year": "ربع های سال هذا",
	"This six-month": "شش-ماه جاری",
	"Last six-month": "شش-ماهه گذشته",
	"Last 2 six-month": "",
	"This financial year": "سال مالی جاری",
	"Last financial year": "سال گذشته مالی",
	"Last 5 financial years": "5 سال گذشته مالی",
	"This year": "سال جاری",
	"Last year": "سال گذشته",
	"Last 5 years": "5 سال گذشته",
	Days: Days$b,
	Weeks: Weeks$b,
	"Bi-weeks": "",
	Months: Months$b,
	"Bi-months": "دوبار در ماه",
	Quarters: Quarters$b,
	"Six-months": "شش-ماهه",
	"Financial Years": "",
	Years: Years$b,
	Series: Series$b,
	Category: Category$b,
	Filter: Filter$b,
	Columns: Columns$b,
	Rows: Rows$b,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$b,
	"Select a program": "",
	Indicators: Indicators$b,
	"Select indicator group": "انتخاب گروپ شاخص",
	"[ All groups ]": "",
	"Data elements": "دیتا ایلمنت ها",
	"Select data element group": "انتخاب گروپ دیتا ایلمنت",
	"[ All data elements ]": "",
	"Data sets": "دیتا سیت ها",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "د پېښې د مالوماتو (ډاټا) موضوعات",
	"Program indicators": "د پروګرام شاخصونه",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$b,
	Period: Period$b,
	"Organisation Unit": "واحد سازمان",
	"Assigned Categories": "",
	Column: Column$b,
	"Stacked column": "",
	Bar: Bar$b,
	"Stacked bar": "",
	Line: Line$b,
	Area: Area$b,
	Pie: Pie$b,
	Radar: Radar$b,
	Gauge: Gauge$b,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$b,
	Base: Base$b,
	"No data": "معلوماتی وجود ندارد"
};

var Totals$c = "مجموعې";
var Details$c = "جزیات [ ژباړه ـ جزیات ]";
var Detail$c = "";
var Remove$c = "لرې کول";
var Search$c = "جستجو";
var Year$c = "کال";
var January$c = "جنوري";
var February$c = "فبروري";
var March$c = "مارچ";
var April$c = "اپرېل";
var May$c = "می [ میاشت. می]";
var June$c = "جون";
var July$c = "جولای";
var August$c = "اګست";
var September$c = "سپټمبر";
var October$c = "اکتوبر";
var November$c = "نومبر";
var December$c = "ډیسمبر";
var Daily$c = "ورځني [ د مودې ډول ]";
var Weekly$c = "اوونیز";
var Monthly$c = "میاشتنۍ";
var Quarterly$c = "درې میاشتنۍ";
var Yearly$c = "کلنۍ";
var Today$c = "نن ورځ";
var Yesterday$c = "پرونۍ ورځ";
var Days$c = "ورځې";
var Weeks$c = "اونۍ";
var Months$c = "میاشت";
var Quarters$c = "ربعې";
var Years$c = "کلونه";
var Series$c = "سلسله (لړۍ)";
var Category$c = "کټګوري";
var Filter$c = "فیلټر";
var Columns$c = "";
var Rows$c = "";
var Program$c = "پروګرام";
var Indicators$c = "شاخصونه";
var Data$c = "مالومات (ډاټا)";
var Period$c = "معیاد";
var Column$c = "ستون";
var Bar$c = "";
var Line$c = "";
var Area$c = "";
var Pie$c = "";
var Radar$c = "";
var Gauge$c = "";
var Target$c = "هدف";
var Base$c = "اساس";
var psTranslations = {
	"Data Type": "",
	Totals: Totals$c,
	Details: Details$c,
	Detail: Detail$c,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$c,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$c,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "ټول غوره یا انتخاب کړئ",
	"Period type": "د مودې ډول",
	Year: Year$c,
	"Select year": "کال ټاکل",
	"Relative periods": "اړونده مودط",
	"Fixed periods": "ثابتې مودې",
	"No periods selected": "هېڅ مودې نه دي غوره شوې",
	January: January$c,
	February: February$c,
	March: March$c,
	April: April$c,
	May: May$c,
	June: June$c,
	July: July$c,
	August: August$c,
	September: September$c,
	October: October$c,
	November: November$c,
	December: December$c,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$c,
	Weekly: Weekly$c,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$c,
	"Bi-monthly": "دوه میاشتنۍ",
	Quarterly: Quarterly$c,
	"Six-monthly": "شپږ- میاشتنۍ",
	"Six-monthly April": "شپږ - د اپرېل میاشتنۍ",
	Yearly: Yearly$c,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "مالی کال- اکتوبر",
	"Financial year (Start July)": "مالی کال- جولای",
	"Financial year (Start April)": "مالی کال- آپریل",
	Today: Today$c,
	Yesterday: Yesterday$c,
	"Last 3 days": "تېرې درې ورځې",
	"Last 7 days": "تېرې اوه ورځې",
	"Last 14 days": "تېرې څورلس ورځې",
	"This week": "هفته هذا",
	"Last week": "تېره اونۍ",
	"Last 4 weeks": "تېرې 4 اونۍ",
	"Last 12 weeks": "تېرو 12 اونۍ",
	"Last 52 weeks": "تېرې دوه پنځوس اونۍ",
	"Weeks this year": "په روان کال کې اونۍ",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "ماه هذا",
	"Last month": "تېره میاشت",
	"Last 3 months": "تېرې 3 میاشتې",
	"Last 6 months": "تېرې شپږ میاشتې",
	"Last 12 months": "تېرې 12 میاشتې",
	"Months this year": "د روان کال میاشتې",
	"This bi-month": "این دوماهه",
	"Last bi-month": "تېرې دوه میاشتې",
	"Last 6 bi-months": "په تېرو شپږو میاشتو کې ډوه ځلې",
	"Bi-months this year": "په روان کال کې دوه میاشتې",
	"This quarter": "ربع هذا",
	"Last quarter": "تېره ربعه",
	"Last 4 quarters": "تېرې 4ربعې",
	"Quarters this year": "د سږ کال ربعې",
	"This six-month": "شش ماه هذا",
	"Last six-month": "تېرې شپږ میاشتې [ تېرې ـ شپږ ـ میاشتې ]",
	"Last 2 six-month": "",
	"This financial year": "سږنۍ مالي کال",
	"Last financial year": "تېر مالي کال",
	"Last 5 financial years": "تېر 5 مالي کلونه",
	"This year": "روان کال",
	"Last year": "تېر کال",
	"Last 5 years": "تېر 5 کلونه",
	Days: Days$c,
	Weeks: Weeks$c,
	"Bi-weeks": "",
	Months: Months$c,
	"Bi-months": "دوه میاشتنۍ",
	Quarters: Quarters$c,
	"Six-months": "شپږ میاشتې",
	"Financial Years": "",
	Years: Years$c,
	Series: Series$c,
	Category: Category$c,
	Filter: Filter$c,
	Columns: Columns$c,
	Rows: Rows$c,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$c,
	"Select a program": "",
	Indicators: Indicators$c,
	"Select indicator group": "د شاخص ګروپ انتخاب یا غوره کړئ",
	"[ All groups ]": "",
	"Data elements": "د مالوماتو (ډاټا) برخې",
	"Select data element group": "د ډاټا یا مالوماتو د برخې ګروپ انتخاب یا غوره کړئ.",
	"[ All data elements ]": "",
	"Data sets": "د مالوماتو یا ډاټا ټولګې",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "د پېښې د ډاټا یا مالوماتو محتویات",
	"Program indicators": "د پروګرام شاخص",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$c,
	Period: Period$c,
	"Organisation Unit": "",
	"Assigned Categories": "",
	Column: Column$c,
	"Stacked column": "",
	Bar: Bar$c,
	"Stacked bar": "",
	Line: Line$c,
	Area: Area$c,
	Pie: Pie$c,
	Radar: Radar$c,
	Gauge: Gauge$c,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$c,
	Base: Base$c,
	"No data": "د مالوماتو (ډاټا) نشتوالۍ"
};

var Totals$d = "Totais";
var Details$d = "Detalhes";
var Detail$d = "Detalhe";
var Remove$d = "Remover";
var Search$d = "Pesquisar";
var Year$d = "Ano";
var January$d = "Janeiro";
var February$d = "Fevereiro";
var March$d = "Março";
var April$d = "Abril";
var May$d = "Maio";
var June$d = "Junho";
var July$d = "Julho";
var August$d = "Agosto";
var September$d = "Setembro";
var October$d = "Outubro";
var November$d = "Novembro";
var December$d = "Dezembro";
var Daily$d = "Diário";
var Weekly$d = "Semanal";
var Monthly$d = "Mensal";
var Quarterly$d = "Trimestral";
var Yearly$d = "Anualmente";
var Today$d = "Hoje";
var Yesterday$d = "Ontém";
var Days$d = "Dias";
var Weeks$d = "Semanas";
var Months$d = "Meses";
var Quarters$d = "Trimestres";
var Years$d = "Anos";
var Series$d = "Série";
var Category$d = "Categoria";
var Filter$d = "Filtro";
var Columns$d = "Colunas";
var Rows$d = "Linhas";
var Program$d = "Programa";
var Indicators$d = "Indicadores";
var Data$d = "Dados";
var Period$d = "Período";
var Column$d = "Coluna";
var Bar$d = "Barra";
var Line$d = "Linha";
var Area$d = "Área";
var Pie$d = "Torta";
var Radar$d = "Radar";
var Gauge$d = "Calibre";
var Target$d = "Meta";
var Base$d = "Base";
var ptTranslations = {
	"Data Type": "Tipo de dados",
	Totals: Totals$d,
	Details: Details$d,
	Detail: Detail$d,
	"Move to {{axisName}}": "Mover para {{Nomedoeixo}}",
	"Add to {{axisName}}": "Adicionar à {{Nomedoeixo}}",
	Remove: Remove$d,
	"Not available for {{visualizationType}}": "Não disponível para {{Tipodevisualização}}",
	"Requires 2 or more data items": "Requer 2 ou mais itens de dados",
	"Only available when data is in Series": "Disponível apenas quando os dados estão em série",
	"Remove Assigned Categories": "Remover categorias atribuídas",
	"Add Assigned Categories": "Adicionar categorias atribuídas",
	"Manage chart axes": "Gerenciar eixos do gráfico",
	"Filter dimensions": "Dimensões do filtro",
	"Main dimensions": "Dimensões principais",
	"Your dimensions": "",
	"Dimension recommended with selected data": "Dimensão recomendada com dados selecionados",
	Search: Search$d,
	"Selected Data": "Dados Selecionados",
	"Deselect All": "Desmarcar todos",
	"Select all": "Selec. todos",
	"Period type": "Tipo de periodo",
	Year: Year$d,
	"Select year": "Selecionar ano",
	"Relative periods": "Períodos relativos",
	"Fixed periods": "Períodos fixos",
	"No periods selected": "Não há períodos relativos seleccionados",
	January: January$d,
	February: February$d,
	March: March$d,
	April: April$d,
	May: May$d,
	June: June$d,
	July: July$d,
	August: August$d,
	September: September$d,
	October: October$d,
	November: November$d,
	December: December$d,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$d,
	Weekly: Weekly$d,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$d,
	"Bi-monthly": "Bimensal",
	Quarterly: Quarterly$d,
	"Six-monthly": "Semestral",
	"Six-monthly April": "Semestral a partir de Abril",
	Yearly: Yearly$d,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Ano Financeiro - Outubro",
	"Financial year (Start July)": "Ano Financeiro - Julho",
	"Financial year (Start April)": "Ano Financeiro - Abril",
	Today: Today$d,
	Yesterday: Yesterday$d,
	"Last 3 days": "",
	"Last 7 days": "Últimos 7 dias",
	"Last 14 days": "",
	"This week": "Esta semana",
	"Last week": "Última semana",
	"Last 4 weeks": "Últimas quatro semanas",
	"Last 12 weeks": "Últimas doze semanas",
	"Last 52 weeks": "Últimas 52 semanas",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "Este mês",
	"Last month": "Último mês",
	"Last 3 months": "Últimos três meses",
	"Last 6 months": "Últimos seis meses",
	"Last 12 months": "Últimos doze meses",
	"Months this year": "Meses deste ano",
	"This bi-month": "Este bi-mês",
	"Last bi-month": "Último bimestre",
	"Last 6 bi-months": "Últimos seis bi-meses",
	"Bi-months this year": "",
	"This quarter": "Este Trimestre",
	"Last quarter": "Último trimestre",
	"Last 4 quarters": "Últimos quatro trimestres",
	"Quarters this year": "Trimestres deste ano",
	"This six-month": "Estes seis meses",
	"Last six-month": "Último semestre",
	"Last 2 six-month": "",
	"This financial year": "Ano financeiro",
	"Last financial year": "Último ano fiscal",
	"Last 5 financial years": "Últimos cinco anos fiscais",
	"This year": "Este ano",
	"Last year": "Último ano",
	"Last 5 years": "Últimos cinco anos",
	Days: Days$d,
	Weeks: Weeks$d,
	"Bi-weeks": "",
	Months: Months$d,
	"Bi-months": "Bi-mensal",
	Quarters: Quarters$d,
	"Six-months": "Seis meses",
	"Financial Years": "",
	Years: Years$d,
	Series: Series$d,
	Category: Category$d,
	Filter: Filter$d,
	Columns: Columns$d,
	Rows: Rows$d,
	"Reporting rate": "Taxa de relatórios",
	"Reporting rate on time": "Taxa de relatórios no prazo",
	"Actual reports": "Relatórios reais",
	"Actual reports on time": "Relatórios reais dentro do prazo",
	"Expected reports": "Relatórios esperados",
	Program: Program$d,
	"Select a program": "Selecione um programa",
	Indicators: Indicators$d,
	"Select indicator group": "Seleccionar grupo de indicador",
	"[ All groups ]": "[ Todos os grupos ]",
	"Data elements": "Elementos de Dados",
	"Select data element group": "Seleccionar grupo de elementos de dados",
	"[ All data elements ]": "[ Todos os elementos de dados ]",
	"Data sets": "Agregação de Dados",
	"Select data sets": "Selecionar conjuntos de dados",
	"[ All metrics ]": "[ Todas as métricas ]",
	"Event data items": "Itens de dados do evento",
	"Program indicators": "Indicador do programa",
	"{{dynamicOuNames}} and {{lastOuName}}": "{{nomesdinâmicosOu}} e {{últimoNomeOu}}",
	"{{allDynamicOuNames}} levels": "{{tudoDynamicOuNomes}} níveis",
	"{{allDynamicOuNames}} groups": "{{tudoDynamicOuNomes}} grupos",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "{{tudoDynamicOuNomes}} níveis em {{NomesestáticosOu}}",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "{{tudoDynamicOuNomes}} grupos em {{NomesestáticosOu}}",
	Data: Data$d,
	Period: Period$d,
	"Organisation Unit": "Unidade organizacional",
	"Assigned Categories": "Categorias atribuídas",
	Column: Column$d,
	"Stacked column": "Coluna empilhada",
	Bar: Bar$d,
	"Stacked bar": "Barra empilhada",
	Line: Line$d,
	Area: Area$d,
	Pie: Pie$d,
	Radar: Radar$d,
	Gauge: Gauge$d,
	"Year over year (line)": "Ano após ano (linha)",
	"Year over year (column)": "Ano após ano (coluna)",
	"Single value": "Valor unico",
	"Pivot table": "Tabela Dinâmica",
	Target: Target$d,
	Base: Base$d,
	"No data": "Não ha dados"
};

var Totals$e = "Totais";
var Details$e = "Detalhes";
var Detail$e = "";
var Remove$e = "Remover";
var Search$e = "Pesquisar";
var Year$e = "Ano";
var January$e = "Janeiro";
var February$e = "Fevereiro";
var March$e = "Março";
var April$e = "Abril";
var May$e = "Maio";
var June$e = "Junho";
var July$e = "Julho";
var August$e = "Agosto";
var September$e = "Setembro";
var October$e = "Outubro";
var November$e = "Novembro";
var December$e = "Dezembro";
var Daily$e = "Diário";
var Weekly$e = "Semanal";
var Monthly$e = "Mensal";
var Quarterly$e = "Trimestral";
var Yearly$e = "Anual";
var Today$e = "Hoje";
var Yesterday$e = "Ontém";
var Days$e = "";
var Weeks$e = "";
var Months$e = "Meses";
var Quarters$e = "Trimestres";
var Years$e = "Anos";
var Series$e = "Série";
var Category$e = "Categoria";
var Filter$e = "Filtro";
var Columns$e = "";
var Rows$e = "";
var Program$e = "Programa";
var Indicators$e = "Indicadores";
var Data$e = "Dados";
var Period$e = "Período";
var Column$e = "Coluna";
var Bar$e = "";
var Line$e = "";
var Area$e = "";
var Pie$e = "";
var Radar$e = "";
var Gauge$e = "";
var Target$e = "Meta";
var Base$e = "";
var pt_BRTranslations = {
	"Data Type": "",
	Totals: Totals$e,
	Details: Details$e,
	Detail: Detail$e,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$e,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$e,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Seleccione todos",
	"Period type": "Tipo de período",
	Year: Year$e,
	"Select year": "",
	"Relative periods": "Períodos relativos",
	"Fixed periods": "Periodos fixos",
	"No periods selected": "Não há períodos relativos seleccionados",
	January: January$e,
	February: February$e,
	March: March$e,
	April: April$e,
	May: May$e,
	June: June$e,
	July: July$e,
	August: August$e,
	September: September$e,
	October: October$e,
	November: November$e,
	December: December$e,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$e,
	Weekly: Weekly$e,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$e,
	"Bi-monthly": "Bimensal",
	Quarterly: Quarterly$e,
	"Six-monthly": "Semestral",
	"Six-monthly April": "",
	Yearly: Yearly$e,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$e,
	Yesterday: Yesterday$e,
	"Last 3 days": "",
	"Last 7 days": "Últimos 7 dias",
	"Last 14 days": "",
	"This week": "",
	"Last week": "Última semana",
	"Last 4 weeks": "Últimas 4 semanas",
	"Last 12 weeks": "Últimoas 12 semanas",
	"Last 52 weeks": "",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "Mês passado",
	"Last 3 months": "Últimos 3 meses",
	"Last 6 months": "Últimos 6 meses",
	"Last 12 months": "Últimos 12 meses",
	"Months this year": "Meses deste ano",
	"This bi-month": "",
	"Last bi-month": "",
	"Last 6 bi-months": "Últimos 6 bi-meses",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "Último trimestre",
	"Last 4 quarters": "Últimos 4 trimestresÚltimo 4 trimestre",
	"Quarters this year": "Trimestres deste ano",
	"This six-month": "",
	"Last six-month": "Últimos 6 meses",
	"Last 2 six-month": "",
	"This financial year": "",
	"Last financial year": "último ano financeiro",
	"Last 5 financial years": "Últimos 5 anos financeiros",
	"This year": "Este ano",
	"Last year": "Ano passado",
	"Last 5 years": "Últimos 5 anos",
	Days: Days$e,
	Weeks: Weeks$e,
	"Bi-weeks": "",
	Months: Months$e,
	"Bi-months": "",
	Quarters: Quarters$e,
	"Six-months": "",
	"Financial Years": "",
	Years: Years$e,
	Series: Series$e,
	Category: Category$e,
	Filter: Filter$e,
	Columns: Columns$e,
	Rows: Rows$e,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$e,
	"Select a program": "",
	Indicators: Indicators$e,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "Os elementos de dados",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "Agregação de Dados",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$e,
	Period: Period$e,
	"Organisation Unit": "Unidade organizacional",
	"Assigned Categories": "",
	Column: Column$e,
	"Stacked column": "",
	Bar: Bar$e,
	"Stacked bar": "",
	Line: Line$e,
	Area: Area$e,
	Pie: Pie$e,
	Radar: Radar$e,
	Gauge: Gauge$e,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$e,
	Base: Base$e,
	"No data": "Não ha dados"
};

var Totals$f = "Итоги";
var Details$f = "Детали";
var Detail$f = "";
var Remove$f = "Убрать";
var Search$f = "Поиск";
var Year$f = "Год";
var January$f = "Январь";
var February$f = "Февраль";
var March$f = "Март";
var April$f = "Апрель";
var May$f = "Май";
var June$f = "Июнь";
var July$f = "Июль";
var August$f = "Август";
var September$f = "Сентябрь";
var October$f = "Октябрь";
var November$f = "Ноябрь";
var December$f = "Декабрь";
var Daily$f = "Ежедневно";
var Weekly$f = "Еженедельно";
var Monthly$f = "Ежемесячно";
var Quarterly$f = "Ежеквартально";
var Yearly$f = "Ежегодно";
var Today$f = "Сегодня";
var Yesterday$f = "Вчера";
var Days$f = "Дни";
var Weeks$f = "Недели";
var Months$f = "Месяцы";
var Quarters$f = "Кварталы";
var Years$f = "Годы";
var Series$f = "Ряды";
var Category$f = "Категория";
var Filter$f = "Фильтр";
var Columns$f = "";
var Rows$f = "";
var Program$f = "Program";
var Indicators$f = "Индикаторы";
var Data$f = "Данные";
var Period$f = "Период";
var Column$f = "Столбчатая";
var Bar$f = "Гистограмма";
var Line$f = "Линейная";
var Area$f = "Диаграмма-области";
var Pie$f = "Круговая";
var Radar$f = "Радиальная";
var Gauge$f = "Спидометр";
var Target$f = "Цель";
var Base$f = "Базовый";
var ruTranslations = {
	"Data Type": "",
	Totals: Totals$f,
	Details: Details$f,
	Detail: Detail$f,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$f,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$f,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Выбрать все",
	"Period type": "Виды периода",
	Year: Year$f,
	"Select year": "Выбрать год",
	"Relative periods": "Соответствующие периоды",
	"Fixed periods": "Фиксированные периоды",
	"No periods selected": "Периоды не выбраны",
	January: January$f,
	February: February$f,
	March: March$f,
	April: April$f,
	May: May$f,
	June: June$f,
	July: July$f,
	August: August$f,
	September: September$f,
	October: October$f,
	November: November$f,
	December: December$f,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$f,
	Weekly: Weekly$f,
	"Bi-weekly": "Каждые две недели",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$f,
	"Bi-monthly": "Раз в два месяца",
	Quarterly: Quarterly$f,
	"Six-monthly": "Раз в полугодие",
	"Six-monthly April": "Полугодовой-Апрель",
	Yearly: Yearly$f,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Финансовый год - Октябрь",
	"Financial year (Start July)": "Финансовый год - Июль",
	"Financial year (Start April)": "Финансовый год - Апрель",
	Today: Today$f,
	Yesterday: Yesterday$f,
	"Last 3 days": "Последние 3 дня",
	"Last 7 days": "Последние 7 дней",
	"Last 14 days": "Последние 14 дней",
	"This week": "Эта неделя",
	"Last week": "Прошлая неделя",
	"Last 4 weeks": "Прошлые 4 недели",
	"Last 12 weeks": "Прошлые 12 недель",
	"Last 52 weeks": "Последние 52 недели",
	"Weeks this year": "Недели этого года",
	"This bi-week": "Эта би-неделя",
	"Last bi-week": "Последняя би-неделя",
	"Last 4 bi-weeks": "Последние 4 би-недель",
	"This month": "Этот месяц",
	"Last month": "Последний месяц",
	"Last 3 months": "Прошлые 3 месяца",
	"Last 6 months": "Последние 6 месяцев",
	"Last 12 months": "Прошлые 12 месяцев",
	"Months this year": "Месяцы этого года",
	"This bi-month": "Этот период по два месяца",
	"Last bi-month": "Прошлый двухмесячный период",
	"Last 6 bi-months": "Последние 6 двухмесячных периодов",
	"Bi-months this year": "Би-месяцы этого года",
	"This quarter": "Этот квартал",
	"Last quarter": "Последний квартал",
	"Last 4 quarters": "Прошлые 4 квартала",
	"Quarters this year": "Кварталы этого года",
	"This six-month": "Это полугодие",
	"Last six-month": "Прошлое полугодие",
	"Last 2 six-month": "",
	"This financial year": "Этот финансовый год",
	"Last financial year": "Прошлый финансовый год",
	"Last 5 financial years": "Прошлые 5 финансовых лет",
	"This year": "Этот год",
	"Last year": "Прошлый год",
	"Last 5 years": "Прошлые 5 лет",
	Days: Days$f,
	Weeks: Weeks$f,
	"Bi-weeks": "Двухнедельные промежутки",
	Months: Months$f,
	"Bi-months": "Двухмесячный период",
	Quarters: Quarters$f,
	"Six-months": "Полугодие",
	"Financial Years": "",
	Years: Years$f,
	Series: Series$f,
	Category: Category$f,
	Filter: Filter$f,
	Columns: Columns$f,
	Rows: Rows$f,
	"Reporting rate": "Показатель отчетности",
	"Reporting rate on time": "Показатель отчетности по времени",
	"Actual reports": "Текущие отчеты",
	"Actual reports on time": "Текущие отчеты по времени",
	"Expected reports": "Ожидаемые отчеты",
	Program: Program$f,
	"Select a program": "Выбрать программу",
	Indicators: Indicators$f,
	"Select indicator group": "Выбрать группу индикаторов",
	"[ All groups ]": "[Все группы]",
	"Data elements": "Элементы данных",
	"Select data element group": "Выберите группу элементов данных",
	"[ All data elements ]": "[Все элементы данных]",
	"Data sets": "Наборы данных",
	"Select data sets": "Выбрать набор данных",
	"[ All metrics ]": "[Все показатели]",
	"Event data items": "Элементы данных событий",
	"Program indicators": "Индикаторы программы",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$f,
	Period: Period$f,
	"Organisation Unit": "Организация",
	"Assigned Categories": "",
	Column: Column$f,
	"Stacked column": "Столбчатая с накоплением",
	Bar: Bar$f,
	"Stacked bar": "Гистограмма с накоплением",
	Line: Line$f,
	Area: Area$f,
	Pie: Pie$f,
	Radar: Radar$f,
	Gauge: Gauge$f,
	"Year over year (line)": "Год за годом (линия)",
	"Year over year (column)": "Год за годом (столбец)",
	"Single value": "",
	"Pivot table": "Сводная таблица",
	Target: Target$f,
	Base: Base$f,
	"No data": "Нет данных"
};

var Totals$g = "Totals";
var Details$g = "detaljer";
var Detail$g = "";
var Remove$g = "Avlägsna";
var Search$g = "Sök";
var Year$g = "År";
var January$g = "januari";
var February$g = "februari";
var March$g = "Mars";
var April$g = "april";
var May$g = "Maj";
var June$g = "juni";
var July$g = "juli";
var August$g = "augusti";
var September$g = "september";
var October$g = "oktober";
var November$g = "november";
var December$g = "december";
var Daily$g = "Dagligen";
var Weekly$g = "Varje vecka";
var Monthly$g = "En gång i månaden";
var Quarterly$g = "Kvartals";
var Yearly$g = "Årlig";
var Today$g = "";
var Yesterday$g = "";
var Days$g = "Dagar";
var Weeks$g = "Veckor";
var Months$g = "Månader";
var Quarters$g = "";
var Years$g = "År";
var Series$g = "";
var Category$g = "";
var Filter$g = "Filtrera";
var Columns$g = "";
var Rows$g = "";
var Program$g = "Program";
var Indicators$g = "indikatorer";
var Data$g = "Data";
var Period$g = "Period";
var Column$g = "";
var Bar$g = "";
var Line$g = "";
var Area$g = "";
var Pie$g = "";
var Radar$g = "";
var Gauge$g = "";
var Target$g = "Mål";
var Base$g = "";
var svTranslations = {
	"Data Type": "",
	Totals: Totals$g,
	Details: Details$g,
	Detail: Detail$g,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$g,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$g,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Välj alla",
	"Period type": "Periodtyp",
	Year: Year$g,
	"Select year": "Välj år",
	"Relative periods": "",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$g,
	February: February$g,
	March: March$g,
	April: April$g,
	May: May$g,
	June: June$g,
	July: July$g,
	August: August$g,
	September: September$g,
	October: October$g,
	November: November$g,
	December: December$g,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$g,
	Weekly: Weekly$g,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$g,
	"Bi-monthly": "varannan månad",
	Quarterly: Quarterly$g,
	"Six-monthly": "Halvårs",
	"Six-monthly April": "Halvårs April",
	Yearly: Yearly$g,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Budgetår - Oktober",
	"Financial year (Start July)": "Budgetår - Juli",
	"Financial year (Start April)": "Budgetår - April",
	Today: Today$g,
	Yesterday: Yesterday$g,
	"Last 3 days": "",
	"Last 7 days": "",
	"Last 14 days": "",
	"This week": "Denna vecka",
	"Last week": "Förra veckan",
	"Last 4 weeks": "Senaste 4 veckorna",
	"Last 12 weeks": "Senast 12 veckor",
	"Last 52 weeks": "Senast 52 veckor",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "Den här månaden",
	"Last month": "Förra månaden",
	"Last 3 months": "Senaste 3 månaderna",
	"Last 6 months": "Senaste 6 månaderna",
	"Last 12 months": "Senaste 12 månaderna",
	"Months this year": "Månader i år",
	"This bi-month": "Denna bi-månaders",
	"Last bi-month": "Senast bi månad",
	"Last 6 bi-months": "Senaste 6 bi-månader",
	"Bi-months this year": "",
	"This quarter": "detta kvartal",
	"Last quarter": "Förra kvartalet",
	"Last 4 quarters": "Senaste 4 kvartal",
	"Quarters this year": "Kvartalen i år",
	"This six-month": "Denna sexmånaders",
	"Last six-month": "Senast sex månader",
	"Last 2 six-month": "",
	"This financial year": "Detta räkenskapsår",
	"Last financial year": "Föregående räkenskapsår",
	"Last 5 financial years": "Senaste 5 räkenskapsåren",
	"This year": "Det här året",
	"Last year": "Förra året",
	"Last 5 years": "Senaste 5 år",
	Days: Days$g,
	Weeks: Weeks$g,
	"Bi-weeks": "",
	Months: Months$g,
	"Bi-months": "",
	Quarters: Quarters$g,
	"Six-months": "",
	"Financial Years": "",
	Years: Years$g,
	Series: Series$g,
	Category: Category$g,
	Filter: Filter$g,
	Columns: Columns$g,
	Rows: Rows$g,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$g,
	"Select a program": "",
	Indicators: Indicators$g,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "dataelement",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "dataset",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "Händelsedataposter",
	"Program indicators": "programindikatorer",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$g,
	Period: Period$g,
	"Organisation Unit": "Organisationsenhet",
	"Assigned Categories": "",
	Column: Column$g,
	"Stacked column": "",
	Bar: Bar$g,
	"Stacked bar": "",
	Line: Line$g,
	Area: Area$g,
	Pie: Pie$g,
	Radar: Radar$g,
	Gauge: Gauge$g,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$g,
	Base: Base$g,
	"No data": ""
};

var Totals$h = "Totais";
var Details$h = "Detalles";
var Detail$h = "";
var Remove$h = "Hasai";
var Search$h = "";
var Year$h = "Tinan";
var January$h = "Janeiru";
var February$h = "Fevereiru";
var March$h = "Marsu";
var April$h = "Abril";
var May$h = "Mai";
var June$h = "Juñu";
var July$h = "Jullu";
var August$h = "Agostu";
var September$h = "Setembru";
var October$h = "Outubru";
var November$h = "Novembru";
var December$h = "Dezembru";
var Daily$h = "Diáriu";
var Weekly$h = "Semanal";
var Monthly$h = "Mensal";
var Quarterly$h = "Trimestral";
var Yearly$h = "Anual";
var Today$h = "";
var Yesterday$h = "";
var Days$h = "";
var Weeks$h = "Semanas";
var Months$h = "Fulan";
var Quarters$h = "Trimestres";
var Years$h = "Tinan";
var Series$h = "Séries";
var Category$h = "Kategoria";
var Filter$h = "Filtru";
var Columns$h = "";
var Rows$h = "";
var Program$h = "";
var Indicators$h = "Indikadores";
var Data$h = "Dadus";
var Period$h = "Períodu";
var Column$h = "Koluna";
var Bar$h = "";
var Line$h = "";
var Area$h = "";
var Pie$h = "";
var Radar$h = "";
var Gauge$h = "";
var Target$h = "Alvu";
var Base$h = "Baze";
var tetTranslations = {
	"Data Type": "",
	Totals: Totals$h,
	Details: Details$h,
	Detail: Detail$h,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$h,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$h,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Hili hotu",
	"Period type": "",
	Year: Year$h,
	"Select year": "",
	"Relative periods": "Peeríodus relativus",
	"Fixed periods": "Períodus fixus",
	"No periods selected": "Laiha períodu selesionadu",
	January: January$h,
	February: February$h,
	March: March$h,
	April: April$h,
	May: May$h,
	June: June$h,
	July: July$h,
	August: August$h,
	September: September$h,
	October: October$h,
	November: November$h,
	December: December$h,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$h,
	Weekly: Weekly$h,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$h,
	"Bi-monthly": "Bimensal",
	Quarterly: Quarterly$h,
	"Six-monthly": "Semestral",
	"Six-monthly April": "Abril semestral",
	Yearly: Yearly$h,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Outubru finanseiru",
	"Financial year (Start July)": "Jullu finanseiru",
	"Financial year (Start April)": "Abril finanseiru",
	Today: Today$h,
	Yesterday: Yesterday$h,
	"Last 3 days": "",
	"Last 7 days": "",
	"Last 14 days": "",
	"This week": "",
	"Last week": "Semana kotuk",
	"Last 4 weeks": "Semana 4 ikus",
	"Last 12 weeks": "Semana 12 ikus",
	"Last 52 weeks": "Semana 52 ikus",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "Fulan kotuk",
	"Last 3 months": "Fulan 3 ikus",
	"Last 6 months": "Fulan 6 ikus",
	"Last 12 months": "Fulan 12 ikus",
	"Months this year": "Fulan sira tinan ida ne'e",
	"This bi-month": "",
	"Last bi-month": "Bimensal kotuk",
	"Last 6 bi-months": "Bimensal 6 ikus liu",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "Trimestre kotuk",
	"Last 4 quarters": "Trimestre 4 ikus liu",
	"Quarters this year": "Trimestres sira tinan ida ne'e",
	"This six-month": "",
	"Last six-month": "Fulan-nén ikus",
	"Last 2 six-month": "",
	"This financial year": "Tinan finanseiru ida ne'e",
	"Last financial year": "Tinan finanseiru kotuk",
	"Last 5 financial years": "Tinan finanseiru 5 ikus",
	"This year": "Tina ida ne'e",
	"Last year": "Tinan kotuk",
	"Last 5 years": "Tinan 5 kotuk",
	Days: Days$h,
	Weeks: Weeks$h,
	"Bi-weeks": "",
	Months: Months$h,
	"Bi-months": "Bimensal",
	Quarters: Quarters$h,
	"Six-months": "Fulan-nén",
	"Financial Years": "",
	Years: Years$h,
	Series: Series$h,
	Category: Category$h,
	Filter: Filter$h,
	Columns: Columns$h,
	Rows: Rows$h,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$h,
	"Select a program": "",
	Indicators: Indicators$h,
	"Select indicator group": "Hili grupu indikadores",
	"[ All groups ]": "",
	"Data elements": "Elementus dadus",
	"Select data element group": "Hili grupu elementus dadus",
	"[ All data elements ]": "",
	"Data sets": "Pakote dadus",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$h,
	Period: Period$h,
	"Organisation Unit": "Unidade Organizasaun",
	"Assigned Categories": "",
	Column: Column$h,
	"Stacked column": "",
	Bar: Bar$h,
	"Stacked bar": "",
	Line: Line$h,
	Area: Area$h,
	Pie: Pie$h,
	Radar: Radar$h,
	Gauge: Gauge$h,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$h,
	Base: Base$h,
	"No data": "Laiha dadus"
};

var Totals$i = "Ҳамагӣ";
var Details$i = "Маълумоти муфассал";
var Detail$i = "";
var Remove$i = "Тоза кардан";
var Search$i = "Ҷустуҷӯ";
var Year$i = "Сол";
var January$i = "Январ";
var February$i = "Феврал";
var March$i = "Март";
var April$i = "Апрел";
var May$i = "Май";
var June$i = "Июн";
var July$i = "Июл";
var August$i = "Август";
var September$i = "Сентябр";
var October$i = "Октябр";
var November$i = "Ноябр";
var December$i = "Декабр";
var Daily$i = "Ҳаррӯза";
var Weekly$i = "Ҳафтаина";
var Monthly$i = "Моҳона";
var Quarterly$i = "Семоҳа";
var Yearly$i = "Солона";
var Today$i = "Имрӯз";
var Yesterday$i = "Дирӯз";
var Days$i = "";
var Weeks$i = "Ҳафтаҳо";
var Months$i = "Моҳҳо";
var Quarters$i = "Семоҳаҳо";
var Years$i = "Солҳо";
var Series$i = "Силсила";
var Category$i = "Категория";
var Filter$i = "Филтр";
var Columns$i = "";
var Rows$i = "";
var Program$i = "Барнома";
var Indicators$i = "Индикаторҳо";
var Data$i = "Иттилоот";
var Period$i = "Давра";
var Column$i = "Сутун";
var Bar$i = "";
var Line$i = "";
var Area$i = "";
var Pie$i = "";
var Radar$i = "";
var Gauge$i = "";
var Target$i = "Нақша";
var Base$i = "Замина";
var tgTranslations = {
	"Data Type": "",
	Totals: Totals$i,
	Details: Details$i,
	Detail: Detail$i,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$i,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$i,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Интихоб кардани ҳама",
	"Period type": "Навъи давара",
	Year: Year$i,
	"Select year": "",
	"Relative periods": "Давраҳои нисбӣ",
	"Fixed periods": "Давраҳои собит",
	"No periods selected": "Ягон давра инитихоб нашудааст",
	January: January$i,
	February: February$i,
	March: March$i,
	April: April$i,
	May: May$i,
	June: June$i,
	July: July$i,
	August: August$i,
	September: September$i,
	October: October$i,
	November: November$i,
	December: December$i,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$i,
	Weekly: Weekly$i,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$i,
	"Bi-monthly": "Ду маротиба дар як моҳ",
	Quarterly: Quarterly$i,
	"Six-monthly": "Шашмоҳа",
	"Six-monthly April": "",
	Yearly: Yearly$i,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$i,
	Yesterday: Yesterday$i,
	"Last 3 days": "",
	"Last 7 days": "7 рӯзи охир",
	"Last 14 days": "",
	"This week": "",
	"Last week": "Ҳафтаи гузашта",
	"Last 4 weeks": "4 ҳафтаи охир",
	"Last 12 weeks": "12 ҳафтаи охир",
	"Last 52 weeks": "",
	"Weeks this year": "",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "",
	"Last month": "Моҳи гузашта",
	"Last 3 months": "3 моҳи охир",
	"Last 6 months": "6 моҳи охир",
	"Last 12 months": "12 моҳи охир",
	"Months this year": "Моҳҳо дар ин сол",
	"This bi-month": "",
	"Last bi-month": "Думоҳаи охир",
	"Last 6 bi-months": "6 думоҳаи охир",
	"Bi-months this year": "",
	"This quarter": "",
	"Last quarter": "Семоҳаи охир",
	"Last 4 quarters": "4 семоҳаи охир",
	"Quarters this year": "Семоҳаҳои ин сол",
	"This six-month": "",
	"Last six-month": "Шашмоҳаи охир",
	"Last 2 six-month": "",
	"This financial year": "",
	"Last financial year": "Соли молиявии гузашта",
	"Last 5 financial years": "5 соли молиявии гузашта",
	"This year": "Имсол",
	"Last year": "Соли гузашта",
	"Last 5 years": "5 соли охир",
	Days: Days$i,
	Weeks: Weeks$i,
	"Bi-weeks": "",
	Months: Months$i,
	"Bi-months": "Думоҳаҳо",
	Quarters: Quarters$i,
	"Six-months": "Шашмоҳаҳо",
	"Financial Years": "",
	Years: Years$i,
	Series: Series$i,
	Category: Category$i,
	Filter: Filter$i,
	Columns: Columns$i,
	Rows: Rows$i,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$i,
	"Select a program": "",
	Indicators: Indicators$i,
	"Select indicator group": "Интихоби гурӯҳҳои индикаторҳо",
	"[ All groups ]": "",
	"Data elements": "Унсурҳои иттилоот",
	"Select data element group": "Интихоби гурӯҳи унсурҳои иттилоот",
	"[ All data elements ]": "",
	"Data sets": "Маҷмӯъҳои иттилоот",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$i,
	Period: Period$i,
	"Organisation Unit": "Воҳиди сохторӣ",
	"Assigned Categories": "",
	Column: Column$i,
	"Stacked column": "",
	Bar: Bar$i,
	"Stacked bar": "",
	Line: Line$i,
	Area: Area$i,
	Pie: Pie$i,
	Radar: Radar$i,
	Gauge: Gauge$i,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$i,
	Base: Base$i,
	"No data": "Ягон иттилоот нест"
};

var Totals$j = "Підсумки";
var Details$j = "Деталі";
var Detail$j = "";
var Remove$j = "Прибрати";
var Search$j = "Пошук";
var Year$j = "Рік";
var January$j = "Січень";
var February$j = "Лютий";
var March$j = "Березень";
var April$j = "Квітень";
var May$j = "Травень";
var June$j = "Червень";
var July$j = "Липень";
var August$j = "Серпень";
var September$j = "Вересень";
var October$j = "Жовтень";
var November$j = "Листопад";
var December$j = "Грудень";
var Daily$j = "Щодня";
var Weekly$j = "Щотижня";
var Monthly$j = "Щомісячно";
var Quarterly$j = "Щоквартально";
var Yearly$j = "Щорічно";
var Today$j = "Сьогодні";
var Yesterday$j = "Вчора";
var Days$j = "Дні";
var Weeks$j = "Тижні";
var Months$j = "Місяці";
var Quarters$j = "Квартали";
var Years$j = "Роки";
var Series$j = "";
var Category$j = "Категорія";
var Filter$j = "Фільтр";
var Columns$j = "";
var Rows$j = "";
var Program$j = "Програма";
var Indicators$j = "Показники";
var Data$j = "Дані";
var Period$j = "Період";
var Column$j = "Стовпчик";
var Bar$j = "";
var Line$j = "";
var Area$j = "";
var Pie$j = "";
var Radar$j = "";
var Gauge$j = "";
var Target$j = "Ціль";
var Base$j = "";
var ukTranslations = {
	"Data Type": "",
	Totals: Totals$j,
	Details: Details$j,
	Detail: Detail$j,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$j,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$j,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Вибрати усе",
	"Period type": "",
	Year: Year$j,
	"Select year": "",
	"Relative periods": "Відносні періоди",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$j,
	February: February$j,
	March: March$j,
	April: April$j,
	May: May$j,
	June: June$j,
	July: July$j,
	August: August$j,
	September: September$j,
	October: October$j,
	November: November$j,
	December: December$j,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$j,
	Weekly: Weekly$j,
	"Bi-weekly": "Щодвотижневий",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$j,
	"Bi-monthly": "Щодва місяці",
	Quarterly: Quarterly$j,
	"Six-monthly": "Раз на півріччя",
	"Six-monthly April": "Раз на півріччя квітень",
	Yearly: Yearly$j,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Фінансовий рік (Початок у жовтні)",
	"Financial year (Start July)": "Фінансовий рік (Початок у липні)",
	"Financial year (Start April)": "Фінансовий рік (Початок у квітні)",
	Today: Today$j,
	Yesterday: Yesterday$j,
	"Last 3 days": "Минулі 3 дні",
	"Last 7 days": "Минулі 7 днів",
	"Last 14 days": "Минулі 14 днів",
	"This week": "Поточний тиждень",
	"Last week": "Минулий тиждень",
	"Last 4 weeks": "Останні 4 тижні",
	"Last 12 weeks": "Останні 12 тижнів",
	"Last 52 weeks": "Останні 52 тижні",
	"Weeks this year": "Тижні поточного року",
	"This bi-week": "Теперішній двотижневий проміжок",
	"Last bi-week": "Попередній двотижневий проміжок",
	"Last 4 bi-weeks": "Попередні 4 двотижневі проміжки",
	"This month": "Поточний місяць",
	"Last month": "Останній місяць",
	"Last 3 months": "Останні 3 місяці",
	"Last 6 months": "Останні 6 місяців",
	"Last 12 months": "Останні 12 місяців",
	"Months this year": "Місяців поточного року",
	"This bi-month": "Поточний двомісячний період",
	"Last bi-month": "Останні два місяці",
	"Last 6 bi-months": "Останні 6 двомісячних періоди",
	"Bi-months this year": "Щодва місяці поточного року",
	"This quarter": "Поточний квартал",
	"Last quarter": "Минулий квартал",
	"Last 4 quarters": "Останні 4 квартали",
	"Quarters this year": "Квартали поточного року",
	"This six-month": "Поточне півріччя",
	"Last six-month": "Останнє півріччя",
	"Last 2 six-month": "",
	"This financial year": "Поточний фінансовий рік",
	"Last financial year": "Минулий фінансовий рік",
	"Last 5 financial years": "Останні 5 фінансових років",
	"This year": "Поточний рік",
	"Last year": "Минулий рік",
	"Last 5 years": "Останні 5 років",
	Days: Days$j,
	Weeks: Weeks$j,
	"Bi-weeks": "Двотижневі проміжки",
	Months: Months$j,
	"Bi-months": "Двомісячні періоди",
	Quarters: Quarters$j,
	"Six-months": "Півріччя",
	"Financial Years": "",
	Years: Years$j,
	Series: Series$j,
	Category: Category$j,
	Filter: Filter$j,
	Columns: Columns$j,
	Rows: Rows$j,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "",
	"Actual reports on time": "",
	"Expected reports": "",
	Program: Program$j,
	"Select a program": "",
	Indicators: Indicators$j,
	"Select indicator group": "Обрати групу показників",
	"[ All groups ]": "",
	"Data elements": "Елементи даних",
	"Select data element group": "Обрати групу елементів даних",
	"[ All data elements ]": "",
	"Data sets": "Набори даних",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "Складові дані події",
	"Program indicators": "Програмні показники",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$j,
	Period: Period$j,
	"Organisation Unit": "Організаційний підрозділ",
	"Assigned Categories": "",
	Column: Column$j,
	"Stacked column": "",
	Bar: Bar$j,
	"Stacked bar": "",
	Line: Line$j,
	Area: Area$j,
	Pie: Pie$j,
	Radar: Radar$j,
	Gauge: Gauge$j,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "Зведена таблиця",
	Target: Target$j,
	Base: Base$j,
	"No data": "Немає даних"
};

var Totals$k = "مجموعی طور پر";
var Details$k = "تفصیلات";
var Detail$k = "";
var Remove$k = "حذف";
var Search$k = "تلاش کریں";
var Year$k = "سال";
var January$k = "جنوری";
var February$k = "فروری";
var March$k = "مارچ";
var April$k = "اپریل";
var May$k = "مئی";
var June$k = "جون";
var July$k = "جولائی";
var August$k = "اگست";
var September$k = "ستمبر";
var October$k = "اکتوبر";
var November$k = "نومبر";
var December$k = "دسمبر";
var Daily$k = "روزانہ";
var Weekly$k = "ہفتہ وار";
var Monthly$k = "ماہانہ";
var Quarterly$k = "سہ ماہی";
var Yearly$k = "سالانہ";
var Today$k = "آج";
var Yesterday$k = "کل";
var Days$k = "دن";
var Weeks$k = "ہفتوں";
var Months$k = "مہینے";
var Quarters$k = "چوتھائی";
var Years$k = "سال";
var Series$k = "سیریز";
var Category$k = "قسم";
var Filter$k = "فلٹر";
var Columns$k = "";
var Rows$k = "";
var Program$k = "پروگرام";
var Indicators$k = "اشارے";
var Data$k = "ڈیٹا";
var Period$k = "مدت";
var Column$k = "کالم";
var Bar$k = "بار";
var Line$k = "لائن";
var Area$k = "رقبہ";
var Pie$k = "پائی";
var Radar$k = "رڈار";
var Gauge$k = "گیج";
var Target$k = "ہدف";
var Base$k = "بنیاد";
var urTranslations = {
	"Data Type": "",
	Totals: Totals$k,
	Details: Details$k,
	Detail: Detail$k,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "",
	Remove: Remove$k,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "",
	"Main dimensions": "",
	"Your dimensions": "",
	"Dimension recommended with selected data": "",
	Search: Search$k,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "تمام کو چنو",
	"Period type": "مدت کی قسم",
	Year: Year$k,
	"Select year": "سال کو منتخب کریں",
	"Relative periods": "رشتہ دار دور",
	"Fixed periods": "فکسڈ مدت",
	"No periods selected": "کوئی مدت منتخب نہیں",
	January: January$k,
	February: February$k,
	March: March$k,
	April: April$k,
	May: May$k,
	June: June$k,
	July: July$k,
	August: August$k,
	September: September$k,
	October: October$k,
	November: November$k,
	December: December$k,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$k,
	Weekly: Weekly$k,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "ہفتہ وار (بدھ شروع کریں)",
	"Weekly (Start Thursday)": "ہفتہ وار (جمعرات شروع کریں)",
	"Weekly (Start Saturday)": "ہفتہ وار (ہفتہ شروع کریں)",
	"Weekly (Start Sunday)": "ہفتہ (اتوار شروع کریں)",
	Monthly: Monthly$k,
	"Bi-monthly": "دو ماہی",
	Quarterly: Quarterly$k,
	"Six-monthly": "چھ ماہی",
	"Six-monthly April": "چھ ماہی اپریل",
	Yearly: Yearly$k,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "مالی سال (اکتوبر شروع کریں)",
	"Financial year (Start July)": "مالی سال (جولائی شروع کریں)",
	"Financial year (Start April)": "مالی سال (اپریل شروع کریں)",
	Today: Today$k,
	Yesterday: Yesterday$k,
	"Last 3 days": "آخری 3 دن",
	"Last 7 days": "آخری 7 دن",
	"Last 14 days": "آخری 14 دن",
	"This week": "اس ہفتے",
	"Last week": "آخری ہفتہ",
	"Last 4 weeks": "آخری ۴ ہفتے",
	"Last 12 weeks": "آخری ۱۲ ہفتے",
	"Last 52 weeks": "آخری ۵۲ ہفتے",
	"Weeks this year": "اس سال ہفتہ",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "اس مہینے",
	"Last month": "آخری ماہ",
	"Last 3 months": "آخری ۳ ماہ",
	"Last 6 months": "آخری ۶ ماہ",
	"Last 12 months": "آخری ۱۲ ماہ",
	"Months this year": "ماہ اس سال",
	"This bi-month": "یہ دو ماہ",
	"Last bi-month": "آخری دو ماہ",
	"Last 6 bi-months": "آخری ۶ دو ماہانہ",
	"Bi-months this year": "اس مہینے میں مہینے",
	"This quarter": "اس سہ ماہی",
	"Last quarter": "آخری سہ ماہ",
	"Last 4 quarters": "آخری ۴ سہ ماہی",
	"Quarters this year": "سہ ماہی اس سال",
	"This six-month": "یہ چھ ماہ",
	"Last six-month": "آخری ۶ ماہ",
	"Last 2 six-month": "",
	"This financial year": "اس مالیاتی سال",
	"Last financial year": "آخری مالیاتی سال",
	"Last 5 financial years": "آخری ۵ مالیاتی سال",
	"This year": "اس سال",
	"Last year": "آخری سال",
	"Last 5 years": "آخری ۵ سال",
	Days: Days$k,
	Weeks: Weeks$k,
	"Bi-weeks": "",
	Months: Months$k,
	"Bi-months": "دو ماہ",
	Quarters: Quarters$k,
	"Six-months": "چھ ماہ",
	"Financial Years": "",
	Years: Years$k,
	Series: Series$k,
	Category: Category$k,
	Filter: Filter$k,
	Columns: Columns$k,
	Rows: Rows$k,
	"Reporting rate": "",
	"Reporting rate on time": "",
	"Actual reports": "اصل رپورٹ",
	"Actual reports on time": "",
	"Expected reports": "متوقع رپورٹ",
	Program: Program$k,
	"Select a program": "",
	Indicators: Indicators$k,
	"Select indicator group": "اشارے گروپ منتخب کریں",
	"[ All groups ]": "[ تمام گروپ ]",
	"Data elements": "ڈیٹا عنصر",
	"Select data element group": "ڈیٹا عنصر گروپ منتخب کریں",
	"[ All data elements ]": "[ تمام ڈیٹا عناصر ]",
	"Data sets": "ڈیٹا سیٹس",
	"Select data sets": "ڈیٹا سیٹ کا انتخاب کریں",
	"[ All metrics ]": "[ تمام میٹرکس ]",
	"Event data items": "واقعہ کے اعداد و شمار کی اشیاء",
	"Program indicators": "پروگرام اشارے",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$k,
	Period: Period$k,
	"Organisation Unit": "",
	"Assigned Categories": "",
	Column: Column$k,
	"Stacked column": "اسٹیک کالم",
	Bar: Bar$k,
	"Stacked bar": "اسٹیک بار",
	Line: Line$k,
	Area: Area$k,
	Pie: Pie$k,
	Radar: Radar$k,
	Gauge: Gauge$k,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$k,
	Base: Base$k,
	"No data": "کوئی مواد نہیں"
};

var Totals$l = "Tổng";
var Details$l = "Chi tiết";
var Detail$l = "";
var Remove$l = "Tháo ra";
var Search$l = "Tìm kiếm";
var Year$l = "Năm";
var January$l = "Tháng một";
var February$l = "Tháng hai";
var March$l = "Tháng ba";
var April$l = "Tháng tư";
var May$l = "Tháng năm";
var June$l = "Tháng sáu";
var July$l = "Tháng bảy";
var August$l = "Tháng tám";
var September$l = "Tháng chín";
var October$l = "Tháng mười";
var November$l = "Tháng mười một";
var December$l = "Tháng mười hai";
var Daily$l = "Hàng ngày";
var Weekly$l = "Hàng tuần";
var Monthly$l = "Hàng tháng";
var Quarterly$l = "Hàng quý";
var Yearly$l = "Một năm";
var Today$l = "Hôm nay";
var Yesterday$l = "Hôm qua";
var Days$l = "Ngày";
var Weeks$l = "Tuần";
var Months$l = "Tháng";
var Quarters$l = "Quý";
var Years$l = "Năm";
var Series$l = "Chuỗi Dữ Liệu";
var Category$l = "Phân loại";
var Filter$l = "Lọc";
var Columns$l = "";
var Rows$l = "";
var Program$l = "Chương trình";
var Indicators$l = "Các chỉ số";
var Data$l = "Lấy dữ liệu";
var Period$l = "Thời điểm";
var Column$l = "Cột";
var Bar$l = "Cột";
var Line$l = "Đường";
var Area$l = "Khu vực";
var Pie$l = "Bánh";
var Radar$l = "Radar";
var Gauge$l = "Biểu đồ đo lường";
var Target$l = "Mục tiêu";
var Base$l = "Đường đáy";
var viTranslations = {
	"Data Type": "",
	Totals: Totals$l,
	Details: Details$l,
	Detail: Detail$l,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "Thêm {{tên trục}",
	Remove: Remove$l,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "Các chiều lọc",
	"Main dimensions": "Các chiều chính",
	"Your dimensions": "Các chiều dữ liệu của bạn",
	"Dimension recommended with selected data": "",
	Search: Search$l,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "Chọn tất cả",
	"Period type": "Loại thời điểm",
	Year: Year$l,
	"Select year": "Chọn năm",
	"Relative periods": "Thời điểm tương đối",
	"Fixed periods": "Thời điểm tĩnh",
	"No periods selected": "Chưa chọn thời điểm",
	January: January$l,
	February: February$l,
	March: March$l,
	April: April$l,
	May: May$l,
	June: June$l,
	July: July$l,
	August: August$l,
	September: September$l,
	October: October$l,
	November: November$l,
	December: December$l,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$l,
	Weekly: Weekly$l,
	"Bi-weekly": "Hai-tuần",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$l,
	"Bi-monthly": "Hàng 2 tháng",
	Quarterly: Quarterly$l,
	"Six-monthly": "Hàng 6 tháng",
	"Six-monthly April": "Hàng 6 tháng - tháng 4",
	Yearly: Yearly$l,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "Năm Tài Chính - Tháng 10",
	"Financial year (Start July)": "Năm Tài Chính - Tháng 7",
	"Financial year (Start April)": "Năm Tài Chính - Tháng 4",
	Today: Today$l,
	Yesterday: Yesterday$l,
	"Last 3 days": "3 ngày trước",
	"Last 7 days": "7 ngày trước",
	"Last 14 days": "14 ngày trước",
	"This week": "Tuần này",
	"Last week": "Tuần trước",
	"Last 4 weeks": "4 tuần trước",
	"Last 12 weeks": "12 tuần trước",
	"Last 52 weeks": "52 tuần trước",
	"Weeks this year": "Các tuần trong năm nay",
	"This bi-week": "Kỳ hiện tại, 1 kỳ = 2 tuần",
	"Last bi-week": "Kỳ trước, 1 kỳ = 2 tuần",
	"Last 4 bi-weeks": "4 kỳ trước, 1 kỳ = 2 tuần",
	"This month": "Tháng này",
	"Last month": "Tháng trước",
	"Last 3 months": "3 tháng trước",
	"Last 6 months": "6 tháng trước",
	"Last 12 months": "Trong 12 tháng trước",
	"Months this year": "Tháng năm nay",
	"This bi-month": "Lần Hai-Tháng này",
	"Last bi-month": "Kỳ 2 tháng trước",
	"Last 6 bi-months": "6 kỳ 2 tháng trước",
	"Bi-months this year": "Các kỳ 2 tháng năm nay",
	"This quarter": "Quý này",
	"Last quarter": "Quý trước",
	"Last 4 quarters": "4 quý trước",
	"Quarters this year": "Quý năm nay",
	"This six-month": "6 tháng này",
	"Last six-month": "6 tháng trước",
	"Last 2 six-month": "",
	"This financial year": "Năm tài chính này",
	"Last financial year": "Năm tài chính trước",
	"Last 5 financial years": "5 năm tài chính trước",
	"This year": "Năm nay",
	"Last year": "Năm ngoái",
	"Last 5 years": "5 năm trước",
	Days: Days$l,
	Weeks: Weeks$l,
	"Bi-weeks": "Các kỳ, 1 kỳ = 2 tuần",
	Months: Months$l,
	"Bi-months": "Các kỳ 2 tháng",
	Quarters: Quarters$l,
	"Six-months": "Sáu-tháng",
	"Financial Years": "Năm tài chính",
	Years: Years$l,
	Series: Series$l,
	Category: Category$l,
	Filter: Filter$l,
	Columns: Columns$l,
	Rows: Rows$l,
	"Reporting rate": "Tỉ lệ báo cáo",
	"Reporting rate on time": "Tỉ lệ báo cáo đúng hạn",
	"Actual reports": "Báo cáo thực tế",
	"Actual reports on time": "Báo cáo thực tế đúng hạn",
	"Expected reports": "Báo cáo dự kiến",
	Program: Program$l,
	"Select a program": "",
	Indicators: Indicators$l,
	"Select indicator group": "Chọn nhóm chỉ số",
	"[ All groups ]": "",
	"Data elements": "Các phần tử dữ liệu",
	"Select data element group": "Chọn nhóm yếu tố dữ liệu",
	"[ All data elements ]": "",
	"Data sets": "Biểu nhập",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "Mục dữ liệu sự kiện",
	"Program indicators": "Chỉ Số Chương Trình",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$l,
	Period: Period$l,
	"Organisation Unit": "Đơn vị",
	"Assigned Categories": "",
	Column: Column$l,
	"Stacked column": "Cột chồng",
	Bar: Bar$l,
	"Stacked bar": "Cột chồng",
	Line: Line$l,
	Area: Area$l,
	Pie: Pie$l,
	Radar: Radar$l,
	Gauge: Gauge$l,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "Giá trị đơn",
	"Pivot table": "Bảng xoay",
	Target: Target$l,
	Base: Base$l,
	"No data": "Không có dữ liệu"
};

var Totals$m = "总共";
var Details$m = "详情";
var Detail$m = "";
var Remove$m = "移除";
var Search$m = "搜索";
var Year$m = "年";
var January$m = "1月";
var February$m = "2月";
var March$m = "3月";
var April$m = "4月";
var May$m = "5月";
var June$m = "6月";
var July$m = "7月";
var August$m = "8月";
var September$m = "9月";
var October$m = "10月";
var November$m = "11月";
var December$m = "12月";
var Daily$m = "每日";
var Weekly$m = "每周";
var Monthly$m = "每月";
var Quarterly$m = "季度";
var Yearly$m = "每年";
var Today$m = "今天";
var Yesterday$m = "昨天";
var Days$m = "天数";
var Weeks$m = "星期";
var Months$m = "月";
var Quarters$m = "四分之一";
var Years$m = "年";
var Series$m = "系列";
var Category$m = "分类";
var Filter$m = "过滤器";
var Columns$m = "";
var Rows$m = "";
var Program$m = "项目";
var Indicators$m = "指标";
var Data$m = "数据";
var Period$m = "期间";
var Column$m = "列";
var Bar$m = "柱状图";
var Line$m = "折线图";
var Area$m = "面积";
var Pie$m = "饼图";
var Radar$m = "雷达图";
var Gauge$m = "表盘图";
var Target$m = "目标";
var Base$m = "基";
var zhTranslations = {
	"Data Type": "",
	Totals: Totals$m,
	Details: Details$m,
	Detail: Detail$m,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "添加到 {{axisName}}",
	Remove: Remove$m,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "过滤器维度",
	"Main dimensions": "主要维度",
	"Your dimensions": "你的维度",
	"Dimension recommended with selected data": "",
	Search: Search$m,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "全选",
	"Period type": "周期类型",
	Year: Year$m,
	"Select year": "",
	"Relative periods": "相关周期",
	"Fixed periods": "固定周期",
	"No periods selected": "没有选择相对周期",
	January: January$m,
	February: February$m,
	March: March$m,
	April: April$m,
	May: May$m,
	June: June$m,
	July: July$m,
	August: August$m,
	September: September$m,
	October: October$m,
	November: November$m,
	December: December$m,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$m,
	Weekly: Weekly$m,
	"Bi-weekly": "两周",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$m,
	"Bi-monthly": "每两月",
	Quarterly: Quarterly$m,
	"Six-monthly": "六个月",
	"Six-monthly April": "半年四月",
	Yearly: Yearly$m,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "财务十月",
	"Financial year (Start July)": "财务七月",
	"Financial year (Start April)": "财务四月",
	Today: Today$m,
	Yesterday: Yesterday$m,
	"Last 3 days": "Last 3 days",
	"Last 7 days": "最近7天",
	"Last 14 days": "Last 14 days",
	"This week": "本年",
	"Last week": "上周",
	"Last 4 weeks": "最近四周",
	"Last 12 weeks": "最近12周",
	"Last 52 weeks": "Last 52 weeks",
	"Weeks this year": "Weeks this year",
	"This bi-week": "本双周",
	"Last bi-week": "最近两周",
	"Last 4 bi-weeks": "最近4个两周",
	"This month": "本月",
	"Last month": "上月",
	"Last 3 months": "最近3个月",
	"Last 6 months": "Last 6 months",
	"Last 12 months": "最近12月",
	"Months this year": "今年的月份",
	"This bi-month": "本双月",
	"Last bi-month": "Last bi-month",
	"Last 6 bi-months": "Last 6 bi-months",
	"Bi-months this year": "Bi-months this year",
	"This quarter": "本季度",
	"Last quarter": "最近一季",
	"Last 4 quarters": "最近四个季度",
	"Quarters this year": "今年的季度",
	"This six-month": "本六个月",
	"Last six-month": "最近六个月",
	"Last 2 six-month": "",
	"This financial year": "本财年",
	"Last financial year": "上一财政年",
	"Last 5 financial years": "最近五个财政年",
	"This year": "今年",
	"Last year": "去年",
	"Last 5 years": "最近5年",
	Days: Days$m,
	Weeks: Weeks$m,
	"Bi-weeks": "双周",
	Months: Months$m,
	"Bi-months": "Bi-months",
	Quarters: Quarters$m,
	"Six-months": "Six-months",
	"Financial Years": "Financial Years",
	Years: Years$m,
	Series: Series$m,
	Category: Category$m,
	Filter: Filter$m,
	Columns: Columns$m,
	Rows: Rows$m,
	"Reporting rate": "上报率",
	"Reporting rate on time": "准时上报率",
	"Actual reports": "实际上报",
	"Actual reports on time": "实际准时上报",
	"Expected reports": "预期上报",
	Program: Program$m,
	"Select a program": "选择一个项目",
	Indicators: Indicators$m,
	"Select indicator group": "选择指标组",
	"[ All groups ]": "【所有组】",
	"Data elements": "数据元",
	"Select data element group": "选择数据元组",
	"[ All data elements ]": "【所有数据元】",
	"Data sets": "数据集",
	"Select data sets": "选择数据集",
	"[ All metrics ]": "[ 所有尺度 ]",
	"Event data items": "事件数据条目",
	"Program indicators": "项目指标",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$m,
	Period: Period$m,
	"Organisation Unit": "组织机构",
	"Assigned Categories": "",
	Column: Column$m,
	"Stacked column": "叠列",
	Bar: Bar$m,
	"Stacked bar": "叠柱图",
	Line: Line$m,
	Area: Area$m,
	Pie: Pie$m,
	Radar: Radar$m,
	Gauge: Gauge$m,
	"Year over year (line)": "逐年（折线图）",
	"Year over year (column)": "逐年（列图）",
	"Single value": "单个值",
	"Pivot table": "透视表",
	Target: Target$m,
	Base: Base$m,
	"No data": "无数据"
};

var Totals$n = "总共";
var Details$n = "详情";
var Detail$n = "";
var Remove$n = "移除";
var Search$n = "搜索";
var Year$n = "年";
var January$n = "01";
var February$n = "02";
var March$n = "03";
var April$n = "04";
var May$n = "05";
var June$n = "06";
var July$n = "07";
var August$n = "08";
var September$n = "09";
var October$n = "10";
var November$n = "11";
var December$n = "12";
var Daily$n = "每日";
var Weekly$n = "每周";
var Monthly$n = "每月";
var Quarterly$n = "季度";
var Yearly$n = "每年";
var Today$n = "今天";
var Yesterday$n = "昨天";
var Days$n = "天数";
var Weeks$n = "周";
var Months$n = "月";
var Quarters$n = "";
var Years$n = "年";
var Series$n = "";
var Category$n = "分类";
var Filter$n = "过滤器";
var Columns$n = "";
var Rows$n = "";
var Program$n = "项目";
var Indicators$n = "指标";
var Data$n = "数据";
var Period$n = "周期";
var Column$n = "";
var Bar$n = "";
var Line$n = "";
var Area$n = "";
var Pie$n = "";
var Radar$n = "";
var Gauge$n = "";
var Target$n = "";
var Base$n = "";
var zh_CNTranslations = {
	"Data Type": "",
	Totals: Totals$n,
	Details: Details$n,
	Detail: Detail$n,
	"Move to {{axisName}}": "",
	"Add to {{axisName}}": "添加到 {{axisName}}",
	Remove: Remove$n,
	"Not available for {{visualizationType}}": "",
	"Requires 2 or more data items": "",
	"Only available when data is in Series": "",
	"Remove Assigned Categories": "",
	"Add Assigned Categories": "",
	"Manage chart axes": "",
	"Filter dimensions": "过滤器维度",
	"Main dimensions": "主要维度",
	"Your dimensions": "你的维度",
	"Dimension recommended with selected data": "",
	Search: Search$n,
	"Selected Data": "",
	"Deselect All": "",
	"Select all": "全选",
	"Period type": "周期类型",
	Year: Year$n,
	"Select year": "",
	"Relative periods": "",
	"Fixed periods": "",
	"No periods selected": "",
	January: January$n,
	February: February$n,
	March: March$n,
	April: April$n,
	May: May$n,
	June: June$n,
	July: July$n,
	August: August$n,
	September: September$n,
	October: October$n,
	November: November$n,
	December: December$n,
	"Week {{weekNumber}}": "",
	"Bi-Week {{biWeekNumber}}": "",
	Daily: Daily$n,
	Weekly: Weekly$n,
	"Bi-weekly": "",
	"Weekly (Start Wednesday)": "",
	"Weekly (Start Thursday)": "",
	"Weekly (Start Saturday)": "",
	"Weekly (Start Sunday)": "",
	Monthly: Monthly$n,
	"Bi-monthly": "每两月",
	Quarterly: Quarterly$n,
	"Six-monthly": "六个月",
	"Six-monthly April": "",
	Yearly: Yearly$n,
	"Financial year (Start November)": "",
	"Financial year (Start October)": "",
	"Financial year (Start July)": "",
	"Financial year (Start April)": "",
	Today: Today$n,
	Yesterday: Yesterday$n,
	"Last 3 days": "最近3天",
	"Last 7 days": "最近7天",
	"Last 14 days": "最近14天",
	"This week": "本周",
	"Last week": "上周",
	"Last 4 weeks": "最近四周",
	"Last 12 weeks": "最近12周",
	"Last 52 weeks": "最近52周",
	"Weeks this year": "今年的星期",
	"This bi-week": "",
	"Last bi-week": "",
	"Last 4 bi-weeks": "",
	"This month": "本月",
	"Last month": "上月",
	"Last 3 months": "最近3个月",
	"Last 6 months": "最近六个月<br>",
	"Last 12 months": "最近12月",
	"Months this year": "今年的月份",
	"This bi-month": "本两月",
	"Last bi-month": "",
	"Last 6 bi-months": "",
	"Bi-months this year": "",
	"This quarter": "本季",
	"Last quarter": "最近一季",
	"Last 4 quarters": "最近四个季度",
	"Quarters this year": "今年的季度",
	"This six-month": "本半年",
	"Last six-month": "最近六个月",
	"Last 2 six-month": "",
	"This financial year": "本财政年",
	"Last financial year": "上一财政年",
	"Last 5 financial years": "最近五个财政年",
	"This year": "今年",
	"Last year": "去年",
	"Last 5 years": "最近5年",
	Days: Days$n,
	Weeks: Weeks$n,
	"Bi-weeks": "",
	Months: Months$n,
	"Bi-months": "",
	Quarters: Quarters$n,
	"Six-months": "",
	"Financial Years": "",
	Years: Years$n,
	Series: Series$n,
	Category: Category$n,
	Filter: Filter$n,
	Columns: Columns$n,
	Rows: Rows$n,
	"Reporting rate": "上报率",
	"Reporting rate on time": "准时上报率",
	"Actual reports": "实际上报",
	"Actual reports on time": "实际准时上报",
	"Expected reports": "预期上报",
	Program: Program$n,
	"Select a program": "",
	Indicators: Indicators$n,
	"Select indicator group": "",
	"[ All groups ]": "",
	"Data elements": "数据元",
	"Select data element group": "",
	"[ All data elements ]": "",
	"Data sets": "数据集",
	"Select data sets": "",
	"[ All metrics ]": "",
	"Event data items": "",
	"Program indicators": "",
	"{{dynamicOuNames}} and {{lastOuName}}": "",
	"{{allDynamicOuNames}} levels": "",
	"{{allDynamicOuNames}} groups": "",
	"{{allDynamicOuNames}} levels in {{staticOuNames}}": "",
	"{{allDynamicOuNames}} groups in {{staticOuNames}}": "",
	Data: Data$n,
	Period: Period$n,
	"Organisation Unit": "组织机构",
	"Assigned Categories": "",
	Column: Column$n,
	"Stacked column": "",
	Bar: Bar$n,
	"Stacked bar": "",
	Line: Line$n,
	Area: Area$n,
	Pie: Pie$n,
	Radar: Radar$n,
	Gauge: Gauge$n,
	"Year over year (line)": "",
	"Year over year (column)": "",
	"Single value": "",
	"Pivot table": "",
	Target: Target$n,
	Base: Base$n,
	"No data": "无数据"
};

//------------------------------------------------------------------------------
const namespace = 'default';
i18n.addResources('ar', namespace, arTranslations);
i18n.addResources('ar_IQ', namespace, ar_IQTranslations);
i18n.addResources('da', namespace, daTranslations);
i18n.addResources('en', namespace, enTranslations);
i18n.addResources('es', namespace, esTranslations);
i18n.addResources('fr', namespace, frTranslations);
i18n.addResources('id', namespace, idTranslations);
i18n.addResources('km', namespace, kmTranslations);
i18n.addResources('lo', namespace, loTranslations);
i18n.addResources('my', namespace, myTranslations);
i18n.addResources('nb', namespace, nbTranslations);
i18n.addResources('prs', namespace, prsTranslations);
i18n.addResources('ps', namespace, psTranslations);
i18n.addResources('pt', namespace, ptTranslations);
i18n.addResources('pt_BR', namespace, pt_BRTranslations);
i18n.addResources('ru', namespace, ruTranslations);
i18n.addResources('sv', namespace, svTranslations);
i18n.addResources('tet', namespace, tetTranslations);
i18n.addResources('tg', namespace, tgTranslations);
i18n.addResources('uk', namespace, ukTranslations);
i18n.addResources('ur', namespace, urTranslations);
i18n.addResources('vi', namespace, viTranslations);
i18n.addResources('zh', namespace, zhTranslations);
i18n.addResources('zh_CN', namespace, zh_CNTranslations);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

const ItemIcon = ({
  backgroundColor
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: _JSXStyle.dynamic([["921056640", [backgroundColor]]])
  }, /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: "921056640",
    dynamic: [backgroundColor]
  }, ["div.__jsx-style-dynamic-selector{background-color:".concat(backgroundColor, ";min-height:6px;min-width:6px;margin:0px 5px;}")]));
};

ItemIcon.propTypes = {
  backgroundColor: PropTypes.string
};

const _defaultExport = [".highlighted-text.jsx-8772423{color:".concat(uiCore.colors.white, ";}"), ".item.jsx-8772423{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:3px;}", ".unselected-item.jsx-8772423:hover{background-color:#e0e0e0;}", ".highlighted-item.jsx-8772423{background-color:".concat(uiCore.theme.secondary800, ";}"), ".item-label.jsx-8772423{font-size:14px;padding:2px 5px 2px 2px;}"];
_defaultExport.__hash = "8772423";

const onClickWrapper = ({
  id,
  index,
  onClick
}) => event => onClick({
  isCtrlPressed: event.metaKey || event.ctrlKey,
  isShiftPressed: event.shiftKey,
  index,
  id
});

const Item = (_ref) => {
  let {
    name,
    highlighted
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "highlighted"]);

  return /*#__PURE__*/React__default.createElement("div", {
    onClick: onClickWrapper(rest),
    "data-test": "dimension-item-".concat(rest.id),
    className: "jsx-".concat(_defaultExport.__hash) + " " + (cx('item', {
      'highlighted-item': highlighted,
      'unselected-item': !highlighted
    }) || "")
  }, /*#__PURE__*/React__default.createElement(ItemIcon, {
    backgroundColor: uiCore.colors.grey500
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "jsx-".concat(_defaultExport.__hash) + " " + (cx('item-label', {
      'highlighted-text': highlighted
    }) || "")
  }, name), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport.__hash
  }, _defaultExport));
};
Item.defualtProps = {
  onClick: () => null
};
Item.propTypes = {
  highlighted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const _defaultExport$1 = [".arrow-button.jsx-1434579173{background-color:transparent;border:1px solid #d5dde5;border-radius:4px;height:36px;min-height:36px;min-width:40px;padding:0;width:40px;}", ".arrow-button.jsx-1434579173:focus{outline:none;}", ".arrow-button.jsx-1434579173:active.jsx-1434579173:focus{background-color:rgba(158,158,158,0.18);}", ".arrow-button.jsx-1434579173:hover{cursor:pointer;background-color:rgba(158,158,158,0.07);}", ".arrow-icon.jsx-1434579173{fill:".concat(uiCore.colors.grey700, ";height:20px;width:24px;}")];
_defaultExport$1.__hash = "1434579173";

const ArrowButton = ({
  onClick,
  iconType
}) => /*#__PURE__*/React__default.createElement("button", {
  onClick: onClick,
  className: "jsx-".concat(_defaultExport$1.__hash) + " " + "arrow-button"
}, /*#__PURE__*/React__default.createElement("span", {
  className: "jsx-".concat(_defaultExport$1.__hash) + " " + "arrow-icon"
}, iconType === 'arrowForward' ? /*#__PURE__*/React__default.createElement(ArrowForward, null) : /*#__PURE__*/React__default.createElement(ArrowBack, null)), /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$1.__hash
}, _defaultExport$1));
ArrowButton.propTypes = {
  iconType: PropTypes.string,
  onClick: PropTypes.func
};

const toggler = ({
  id,
  isCtrlPressed,
  isShiftPressed,
  index,
  lastClickedIndex,
  highlightedIds,
  items
}) => {
  let ids;
  let newIndex = lastClickedIndex;

  if (!isCtrlPressed && !isShiftPressed) {
    ids = [id];
    newIndex = index;
  } else if (isShiftPressed) {
    const minIndex = getMinIndex(lastClickedIndex, index);
    const maxIndex = getMaxIndex(lastClickedIndex, index);
    ids = mergeIds({
      highlightedIds,
      items,
      minIndex,
      maxIndex
    });
  } else {
    const newArr = updateArray({
      highlightedIds,
      id,
      lastClickedIndex,
      index
    });
    ids = newArr.ids;
    newIndex = newArr.newIndex;
  }

  const orderedIds = items.filter(item => ids.includes(item));
  return {
    ids: orderedIds,
    lastClickedIndex: newIndex
  };
};

const getMinIndex = (lastClickedIndex, index) => lastClickedIndex > index ? index : lastClickedIndex;

const getMaxIndex = (lastClickedIndex, index) => lastClickedIndex < index ? index : lastClickedIndex;

const mergeIds = ({
  highlightedIds,
  items,
  minIndex,
  maxIndex
}) => highlightedIds.length ? items.slice(minIndex, maxIndex + 1).filter(id => !highlightedIds.includes(id)).concat(highlightedIds) : items.slice(minIndex, maxIndex + 1);

const updateArray = ({
  highlightedIds,
  id,
  lastClickedIndex,
  index
}) => {
  let ids;
  let newIndex = lastClickedIndex;
  const idIndex = highlightedIds.findIndex(highlightedId => highlightedId === id);

  if (idIndex >= 0) {
    ids = highlightedIds.slice(0, idIndex).concat(highlightedIds.slice(idIndex + 1));
  } else {
    ids = [...highlightedIds, id];
    newIndex = index;
  }

  return {
    ids,
    newIndex
  };
};

const _defaultExport$2 = [".unselected-list-container.jsx-2016409548{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;}", ".unselected-list.jsx-2016409548{border-bottom:0px;list-style:none;margin:0px;padding-left:0px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".unselected-list-item.jsx-2016409548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:2px;}", ".select-all-button.jsx-2016409548{display:block;margin:0 auto;padding:5px;}", ".select-highlighted-button.jsx-2016409548{left:426px;position:absolute;top:230px;}"];
_defaultExport$2.__hash = "2016409548";

class UnselectedItems extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      highlighted: [],
      lastClickedIndex: 0
    });

    _defineProperty(this, "onSelectClick", () => {
      this.props.onSelect(this.state.highlighted);
      this.setState({
        highlighted: []
      });
    });

    _defineProperty(this, "onSelectAllClick", () => {
      this.props.onSelect(this.props.items.map(i => i.id));
      this.setState({
        highlighted: []
      });
    });

    _defineProperty(this, "onDoubleClickItem", id => {
      const highlighted = this.state.highlighted.filter(dataDimId => dataDimId !== id);
      this.setState({
        highlighted
      });
      this.props.onSelect([id]);
    });

    _defineProperty(this, "filterTextContains", displayName => displayName.toLowerCase().includes(this.props.filterText.toLowerCase()));

    _defineProperty(this, "filterItems", (item, index) => this.filterTextContains(item.name) ? this.renderListItem(item, index) : null);

    _defineProperty(this, "toggleHighlight", ({
      isCtrlPressed,
      isShiftPressed,
      index,
      id
    }) => {
      const newState = toggler({
        id,
        isCtrlPressed,
        isShiftPressed,
        index,
        lastClickedIndex: this.state.lastClickedIndex,
        highlightedIds: this.state.highlighted,
        items: this.props.items.map(item => item.id)
      });
      this.setState({
        highlighted: newState.ids,
        lastClickedIndex: newState.lastClickedIndex
      });
    });

    _defineProperty(this, "renderListItem", (dataDim, index) => /*#__PURE__*/React__default.createElement("li", {
      key: dataDim.id,
      onDoubleClick: () => this.onDoubleClickItem(dataDim.id),
      className: "jsx-".concat(_defaultExport$2.__hash) + " " + "unselected-list-item"
    }, /*#__PURE__*/React__default.createElement(Item, {
      id: dataDim.id,
      index: index,
      name: dataDim.name,
      highlighted: !!this.state.highlighted.includes(dataDim.id),
      onClick: this.toggleHighlight
    }), /*#__PURE__*/React__default.createElement(_JSXStyle, {
      id: _defaultExport$2.__hash
    }, _defaultExport$2)));

    _defineProperty(this, "requestMoreItems", throttle(() => {
      const node = this.scrolElRef.current;

      if (node) {
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;

        if (bottom) {
          this.props.requestMoreItems();
        }
      }
    }, 1000));

    _defineProperty(this, "render", () => {
      const listItems = this.props.items.map((item, index) => this.props.filterText.length ? this.filterItems(item, index) : this.renderListItem(item, index));
      return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        ref: this.scrolElRef,
        onScroll: this.requestMoreItems,
        className: "jsx-".concat(_defaultExport$2.__hash) + " " + "unselected-list-container"
      }, /*#__PURE__*/React__default.createElement("ul", {
        className: "jsx-".concat(_defaultExport$2.__hash) + " " + "unselected-list"
      }, listItems)), /*#__PURE__*/React__default.createElement("div", {
        className: "jsx-".concat(_defaultExport$2.__hash) + " " + "select-all-button"
      }, /*#__PURE__*/React__default.createElement(uiCore.Button, {
        onClick: this.onSelectAllClick
      }, i18n.t('Select all'))), /*#__PURE__*/React__default.createElement("div", {
        className: "jsx-".concat(_defaultExport$2.__hash) + " " + "select-highlighted-button"
      }, /*#__PURE__*/React__default.createElement(ArrowButton, {
        onClick: this.onSelectClick,
        iconType: 'arrowForward'
      })), /*#__PURE__*/React__default.createElement(_JSXStyle, {
        id: _defaultExport$2.__hash
      }, _defaultExport$2));
    });

    this.scrolElRef = React__default.createRef();
  }

}
UnselectedItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  filterText: PropTypes.string,
  requestMoreItems: PropTypes.func
};
UnselectedItems.defaultProps = {
  requestMoreItems: () => null,
  filterText: ''
};

const _defaultExport$3 = [".deselect-icon-button.jsx-2598389575{background:none;border:none;height:18px;outline:none;padding:0px;width:18px;}"];
_defaultExport$3.__hash = "2598389575";

const DeselectIconButton = ({
  fill,
  onClick: _onClick
}) => {
  const iconStyle = {
    height: '13px',
    width: '10px',
    fill
  };
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: e => {
      e.stopPropagation();

      _onClick();
    },
    className: "jsx-".concat(_defaultExport$3.__hash) + " " + "deselect-icon-button"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "jsx-".concat(_defaultExport$3.__hash)
  }, /*#__PURE__*/React__default.createElement(DeselectIcon, {
    style: iconStyle
  })), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$3.__hash
  }, _defaultExport$3));
};
DeselectIconButton.propTypes = {
  fill: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const _defaultExport$4 = [".highlighted-text.jsx-2633005402{color:".concat(uiCore.colors.white, ";}"), ".icon.jsx-2633005402{background-color:".concat(uiCore.theme.secondary600, ";}"), ".item.jsx-2633005402{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:3px;}", ".ghost.jsx-2633005402{opacity:0.2;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;}", ".selected-item.jsx-2633005402{background-color:".concat(uiCore.theme.secondary200, ";}"), ".selected-item.jsx-2633005402:hover{background-color:#86c4bf;}", ".highlighted-item.jsx-2633005402{background-color:".concat(uiCore.theme.secondary800, ";}"), ".inactive-item.jsx-2633005402{opacity:0.3;}", ".item-label.jsx-2633005402{font-size:14px;padding:2px;}"];
_defaultExport$4.__hash = "2633005402";

const onClickWrapper$1 = ({
  id,
  index,
  onClick
}) => event => onClick({
  isCtrlPressed: event.metaKey || event.ctrlKey,
  isShiftPressed: event.shiftKey,
  index,
  id
});

const Item$1 = (_ref) => {
  let {
    name,
    highlighted,
    ghost,
    active,
    onRemoveItem
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "highlighted", "ghost", "active", "onRemoveItem"]);

  return /*#__PURE__*/React__default.createElement("div", {
    onClick: onClickWrapper$1(rest),
    "data-test": "dimension-item-".concat(rest.id),
    className: "jsx-".concat(_defaultExport$4.__hash) + " " + (cx('item', {
      'highlighted-item': highlighted,
      ghost,
      'selected-item': !highlighted,
      'inactive-item': !active
    }) || "")
  }, /*#__PURE__*/React__default.createElement(ItemIcon, {
    backgroundColor: highlighted ? uiCore.colors.white : uiCore.theme.secondary600
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "jsx-".concat(_defaultExport$4.__hash) + " " + (cx('item-label', {
      'highlighted-text': highlighted
    }) || "")
  }, name), /*#__PURE__*/React__default.createElement(DeselectIconButton, {
    fill: highlighted ? uiCore.colors.white : uiCore.theme.secondary600,
    onClick: () => onRemoveItem(rest.id)
  }), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$4.__hash
  }, _defaultExport$4));
};
Item$1.defaultProps = {
  active: true,
  onRemoveItem: () => null,
  onClick: () => null
};
Item$1.propTypes = {
  highlighted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
  onRemoveItem: PropTypes.func
};

const reorderList = ({
  items,
  highlightedItemIds,
  destinationIndex,
  sourceIndex,
  draggableId,
  isMultiDrag
}) => {
  const list = Array.from(items.map(item => item.id));

  if (isMultiDrag) {
    const indexedItemsToMove = sortBy(highlightedItemIds.map(highlightedItemId => ({
      item: highlightedItemId,
      idx: items.map(item => item.id).indexOf(highlightedItemId)
    })), 'idx');
    const highlightedAboveDestination = indexedItemsToMove.filter(item => item.idx < destinationIndex);
    const newDestinationIndex = destinationIndex - highlightedAboveDestination.length;
    indexedItemsToMove.forEach(indexed => {
      const idx = list.indexOf(indexed.item);
      list.splice(idx, 1);
    });
    indexedItemsToMove.forEach((indexed, i) => {
      list.splice(newDestinationIndex + i, 0, indexed.item);
    });
  } else {
    list.splice(sourceIndex, 1);
    list.splice(destinationIndex, 0, draggableId);
  }

  return list;
};

const _defaultExport$5 = [".selected-list.jsx-1623961477{-webkit-flex:1;-ms-flex:1;flex:1;list-style:none;margin:0 6px;overflow-y:auto;padding-left:0px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".selected-list-item.jsx-1623961477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:2px;}", ".selected-list-item.jsx-1623961477:focus{outline:none;}", ".subtitle-container.jsx-1623961477{border-bottom:1px solid ".concat(uiCore.colors.grey300, ";height:42px;}"), ".subtitle-text.jsx-1623961477{color:".concat(uiCore.colors.grey900, ";height:20px;font-family:Roboto;font-size:15px;font-weight:500;left:8px;position:relative;top:12px;}"), ".info-container.jsx-1623961477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:8px;padding:8px;background-color:#e8edf2;border-radius:4px;}", ".info-text.jsx-1623961477{padding-left:6px;color:#4a5768;font-size:12px;line-height:17px;}", ".info-icon.jsx-1623961477{font-size:16px;color:#4a5768;}", ".deselect-all-button.jsx-1623961477{display:block;margin:0 auto;padding:5px;}", ".deselect-highlighted-button.jsx-1623961477{left:-48px;position:absolute;top:291px;}"];
_defaultExport$5.__hash = "1623961477";

const Subtitle = () => /*#__PURE__*/React__default.createElement("div", {
  className: "jsx-".concat(_defaultExport$5.__hash) + " " + "subtitle-container"
}, /*#__PURE__*/React__default.createElement("span", {
  className: "jsx-".concat(_defaultExport$5.__hash) + " " + "subtitle-text"
}, i18n.t('Selected Data')), /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$5.__hash
}, _defaultExport$5));

const InfoBox = ({
  message
}) => /*#__PURE__*/React__default.createElement("div", {
  className: "jsx-".concat(_defaultExport$5.__hash) + " " + "info-container"
}, /*#__PURE__*/React__default.createElement(InfoIcon, {
  style: {
    fontSize: 16,
    color: uiCore.colors.grey600
  }
}), /*#__PURE__*/React__default.createElement("span", {
  className: "jsx-".concat(_defaultExport$5.__hash) + " " + "info-text"
}, message), /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$5.__hash
}, _defaultExport$5));

const ItemsList = ({
  innerRef,
  children
}) => /*#__PURE__*/React__default.createElement("ul", {
  ref: innerRef,
  className: "jsx-".concat(_defaultExport$5.__hash) + " " + "selected-list"
}, children, /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$5.__hash
}, _defaultExport$5));

const CLONE_INDEX = 9999; // a high number to not influence the actual item list

class SelectedItems extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      highlighted: [],
      lastClickedIndex: 0,
      draggingId: null
    });

    _defineProperty(this, "onDeselectHighlighted", () => {
      this.props.onDeselect(this.state.highlighted);
      this.setState({
        highlighted: []
      });
    });

    _defineProperty(this, "onDeselectOne", id => {
      const highlighted = this.state.highlighted.filter(highlightedId => highlightedId !== id);
      this.props.onDeselect([id]);
      this.setState({
        highlighted
      });
    });

    _defineProperty(this, "onDeselectAll", () => {
      this.props.onDeselect(this.props.items.map(item => item.id));
      this.setState({
        highlighted: []
      });
    });

    _defineProperty(this, "toggleHighlight", ({
      isCtrlPressed,
      isShiftPressed,
      index,
      id
    }) => {
      const newState = toggler({
        id,
        isCtrlPressed,
        isShiftPressed,
        index,
        lastClickedIndex: this.state.lastClickedIndex,
        highlightedIds: this.state.highlighted,
        items: this.props.items.map(item => item.id)
      });
      this.setState({
        highlighted: newState.ids,
        lastClickedIndex: newState.lastClickedIndex
      });
    });

    _defineProperty(this, "isMultiDrag", draggableId => {
      return this.state.highlighted.includes(draggableId) && this.state.highlighted.length > 1;
    });

    _defineProperty(this, "onDragStart", start => {
      const id = start.draggableId;
      const selected = this.state.highlighted.find(itemId => itemId === id); // if dragging an item that is not highlighted, unhighlight all items

      if (!selected) {
        this.setState({
          highlighted: []
        });
      }

      this.setState({
        draggingId: start.draggableId
      });
    });

    _defineProperty(this, "onDragEnd", ({
      destination,
      source,
      draggableId
    }) => {
      this.setState({
        draggingId: null
      });

      if (destination === null) {
        return;
      }

      if (destination.draggableId === source.draggableId && destination.index === source.index) {
        return;
      }

      const newList = reorderList({
        destinationIndex: destination.index,
        sourceIndex: source.index,
        draggableId,
        isMultiDrag: this.isMultiDrag(draggableId),
        items: this.props.items,
        highlightedItemIds: this.state.highlighted
      });
      this.props.onReorder(newList);
    });

    _defineProperty(this, "renderListItem", ({
      id,
      name,
      isActive
    }, index) => /*#__PURE__*/React__default.createElement(reactBeautifulDnd.Draggable, {
      draggableId: id,
      index: index,
      key: id
    }, (provided, snapshot) => {
      const isDraggedItem = snapshot.isDragging && this.state.highlighted.length > 1 && this.state.highlighted.includes(this.state.draggingId);
      const ghost = this.state.highlighted.includes(id) && Boolean(this.state.draggingId) && this.state.draggingId !== id;
      const itemText = isDraggedItem ? "".concat(this.state.highlighted.length, " items") : name;
      return /*#__PURE__*/React__default.createElement("li", _extends({
        id: id,
        onDoubleClick: () => this.onDeselectOne(id)
      }, provided.draggableProps, provided.dragHandleProps, {
        ref: provided.innerRef,
        className: "jsx-".concat(_defaultExport$5.__hash) + " " + (provided.dragHandleProps && provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps && provided.draggableProps.className != null && provided.draggableProps.className || "selected-list-item")
      }), /*#__PURE__*/React__default.createElement(Item$1, {
        id: id,
        index: index,
        name: itemText,
        highlighted: !!this.state.highlighted.includes(id),
        active: isActive,
        onRemoveItem: this.onDeselectOne,
        onClick: this.toggleHighlight,
        ghost: ghost
      }), /*#__PURE__*/React__default.createElement(_JSXStyle, {
        id: _defaultExport$5.__hash
      }, _defaultExport$5));
    }));

    _defineProperty(this, "renderCloneItem", ({
      id,
      name
    }, index) => {
      const cloneId = "".concat(id, "-clone");
      return /*#__PURE__*/React__default.createElement(reactBeautifulDnd.Draggable, {
        draggableId: cloneId,
        index: index,
        key: cloneId
      }, provided => /*#__PURE__*/React__default.createElement("li", _extends({
        id: cloneId
      }, provided.draggableProps, provided.dragHandleProps, {
        ref: provided.innerRef,
        className: "jsx-".concat(_defaultExport$5.__hash) + " " + (provided.dragHandleProps && provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps && provided.draggableProps.className != null && provided.draggableProps.className || "selected-list-item")
      }), /*#__PURE__*/React__default.createElement(Item$1, {
        id: cloneId,
        index: CLONE_INDEX,
        name: name,
        highlighted: !!this.state.highlighted.includes(id),
        selected: true,
        ghost: true
      }), /*#__PURE__*/React__default.createElement(_JSXStyle, {
        id: _defaultExport$5.__hash
      }, _defaultExport$5)));
    });

    _defineProperty(this, "getItemListWithClone", () => {
      const list = [];
      this.props.items.forEach(item => {
        list.push(item);
        const isDraggedItem = this.isMultiDrag(this.state.draggingId) && this.state.draggingId === item.id;

        if (isDraggedItem) {
          list.push({
            id: item.id,
            name: item.name,
            isActive: item.isActive,
            clone: true
          });
        }
      });
      return list;
    });

    _defineProperty(this, "render", () => {
      const itemList = this.getItemListWithClone().map((item, i) => item.clone ? this.renderCloneItem(item, i) : this.renderListItem(item, i));
      return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(Subtitle, null), this.props.infoBoxMessage ? /*#__PURE__*/React__default.createElement(InfoBox, {
        message: this.props.infoBoxMessage
      }) : null, /*#__PURE__*/React__default.createElement(reactBeautifulDnd.DragDropContext, {
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd
      }, /*#__PURE__*/React__default.createElement(reactBeautifulDnd.Droppable, {
        droppableId: "selected-items-droppable"
      }, provided => /*#__PURE__*/React__default.createElement(ItemsList, _extends({
        innerRef: provided.innerRef
      }, provided.droppableProps), itemList, provided.placeholder))), /*#__PURE__*/React__default.createElement("div", {
        className: "jsx-".concat(_defaultExport$5.__hash) + " " + "deselect-all-button"
      }, /*#__PURE__*/React__default.createElement(uiCore.Button, {
        onClick: this.onDeselectAll
      }, i18n.t('Deselect All'))), /*#__PURE__*/React__default.createElement("div", {
        className: "jsx-".concat(_defaultExport$5.__hash) + " " + "deselect-highlighted-button"
      }, /*#__PURE__*/React__default.createElement(ArrowButton, {
        onClick: this.onDeselectHighlighted,
        iconType: 'arrowBack'
      })), /*#__PURE__*/React__default.createElement(_JSXStyle, {
        id: _defaultExport$5.__hash
      }, _defaultExport$5));
    });
  }

}
InfoBox.propTypes = {
  message: PropTypes.string
};
ItemsList.propTypes = {
  children: PropTypes.array,
  innerRef: PropTypes.func
};
SelectedItems.propTypes = {
  items: PropTypes.array.isRequired,
  onDeselect: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
  infoBoxMessage: PropTypes.string
};

const _defaultExport$6 = [".item-selector-container.jsx-1669762466{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;font-family:Roboto,sans-serif;}", ".section.jsx-1669762466{border:1px solid ".concat(uiCore.colors.grey300, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:480px;position:relative;}"), ".unselected.jsx-1669762466{margin-right:55px;width:418px;}", ".selected.jsx-1669762466{width:276px;}"];
_defaultExport$6.__hash = "1669762466";

class ItemSelector extends React.Component {
  render() {
    const {
      unselected,
      selected,
      children: filterZone
    } = this.props;
    return /*#__PURE__*/React__default.createElement("div", {
      className: "jsx-".concat(_defaultExport$6.__hash) + " " + "item-selector-container"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "jsx-".concat(_defaultExport$6.__hash) + " " + (cx('section', 'unselected') || "")
    }, filterZone, /*#__PURE__*/React__default.createElement(UnselectedItems, unselected)), /*#__PURE__*/React__default.createElement("div", {
      className: "jsx-".concat(_defaultExport$6.__hash) + " " + (cx('section', 'selected') || "")
    }, /*#__PURE__*/React__default.createElement(SelectedItems, selected)), /*#__PURE__*/React__default.createElement(_JSXStyle, {
      id: _defaultExport$6.__hash
    }, _defaultExport$6));
  }

}

ItemSelector.propTypes = {
  children: PropTypes.object,
  selected: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    })).isRequired,
    onDeselect: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
    dialogId: PropTypes.string,
    infoBoxMessage: PropTypes.string
  }),
  unselected: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
    filterText: PropTypes.string,
    requestMoreItems: PropTypes.func
  })
};

const REPORTING_RATE = 'REPORTING_RATE';
const REPORTING_RATE_ON_TIME = 'REPORTING_RATE_ON_TIME';
const ACTUAL_REPORTS = 'ACTUAL_REPORTS';
const ACTUAL_REPORTS_ON_TIME = 'ACTUAL_REPORTS_ON_TIME';
const EXPECTED_REPORTS = 'EXPECTED_REPORTS';
const DATA_SETS_CONSTANTS = [{
  id: REPORTING_RATE,
  getName: () => i18n.t('Reporting rate')
}, {
  id: REPORTING_RATE_ON_TIME,
  getName: () => i18n.t('Reporting rate on time')
}, {
  id: ACTUAL_REPORTS,
  getName: () => i18n.t('Actual reports')
}, {
  id: ACTUAL_REPORTS_ON_TIME,
  getName: () => i18n.t('Actual reports on time')
}, {
  id: EXPECTED_REPORTS,
  getName: () => i18n.t('Expected reports')
}];

const CHART_AGGREGATE_AGGREGATABLE_TYPES = ['BOOLEAN', 'TRUE_ONLY', 'INTEGER', 'INTEGER_POSITIVE', 'INTEGER_NEGATIVE', 'INTEGER_ZERO_OR_POSITIVE', 'NUMBER', 'UNIT_INTERVAL', 'PERCENTAGE'];
const ALL_ID = 'ALL';
const INDICATORS = 'indicators';
const DATA_ELEMENTS = 'dataElements';
const DATA_SETS = 'dataSets';
const EVENT_DATA_ITEMS = 'eventDataItems';
const PROGRAM_INDICATORS = 'programIndicators';
const TOTALS = 'totals';
const DETAIL = 'detail';

const getProgramText = () => i18n.t('Program');

const getSelectProgramText = () => i18n.t('Select a program');

const dataTypes = {
  [INDICATORS]: {
    id: INDICATORS,
    getName: () => i18n.t('Indicators'),
    getGroupLabel: () => i18n.t('Select indicator group'),
    defaultGroup: {
      id: ALL_ID,
      getName: () => i18n.t('[ All groups ]')
    },
    groupDetail: false
  },
  [DATA_ELEMENTS]: {
    id: DATA_ELEMENTS,
    getName: () => i18n.t('Data elements'),
    getGroupLabel: () => i18n.t('Select data element group'),
    defaultGroup: {
      id: ALL_ID,
      getName: () => i18n.t('[ All data elements ]')
    },
    groupDetail: {
      default: TOTALS
    }
  },
  [DATA_SETS]: {
    id: DATA_SETS,
    getName: () => i18n.t('Data sets'),
    getGroupLabel: () => i18n.t('Select data sets'),
    defaultGroup: {
      id: ALL_ID,
      getName: () => i18n.t('[ All metrics ]')
    },
    groupDetail: false,
    augmentAlternatives: (alternatives, groupId) => getReportingRates(alternatives, groupId)
  },
  [EVENT_DATA_ITEMS]: {
    id: EVENT_DATA_ITEMS,
    getName: () => i18n.t('Event data items'),
    getGroupLabel: getProgramText,
    getPlaceholder: getSelectProgramText,
    defaultGroup: null,
    groupDetail: false
  },
  [PROGRAM_INDICATORS]: {
    id: PROGRAM_INDICATORS,
    getName: () => i18n.t('Program indicators'),
    getGroupLabel: getProgramText,
    getPlaceholder: getSelectProgramText,
    defaultGroup: null,
    groupDetail: false
  }
};
function defaultGroupId(dataType) {
  return dataTypes[dataType].defaultGroup ? dataTypes[dataType].defaultGroup.id : '';
}
function defaultGroupDetail(dataType) {
  return dataTypes[dataType].groupDetail ? dataTypes[dataType].groupDetail.default : '';
}
const DEFAULT_DATATYPE_ID = INDICATORS;

const getReportingRates = (contents, groupSetId) => {
  let dataSets = [];

  if (groupSetId === ALL_ID) {
    DATA_SETS_CONSTANTS.forEach(reportingRate => dataSets = [...dataSets, ...contents.map(dataSet => concatReportingRate(dataSet, reportingRate))]);
  } else {
    const reportingRateIndex = DATA_SETS_CONSTANTS.find(item => item.id === groupSetId);
    dataSets = contents.map(dataSet => concatReportingRate(dataSet, reportingRateIndex));
  }

  return dataSets;
};

const concatReportingRate = (dataSet, reportingRate) => {
  return {
    id: "".concat(dataSet.id, ".").concat(reportingRate.id),
    name: "".concat(dataSet.name, " (").concat(reportingRate.getName(), ")")
  };
};

const _defaultExport$7 = [".container.jsx-3086687232{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;height:70px;border-bottom:0;padding-left:10px;padding-right:5px;padding-top:5px;}"];
_defaultExport$7.__hash = "3086687232";

const DataTypes = ({
  currentDataType,
  onChange: _onChange
}) => {
  var _dataTypes$currentDat, _dataTypes$currentDat2;

  return /*#__PURE__*/React__default.createElement("div", {
    className: "jsx-".concat(_defaultExport$7.__hash) + " " + "container"
  }, /*#__PURE__*/React__default.createElement(uiCore.SingleSelectField, {
    label: i18n.t('Data Type'),
    selected: {
      value: (_dataTypes$currentDat = dataTypes[currentDataType]) === null || _dataTypes$currentDat === void 0 ? void 0 : _dataTypes$currentDat.id,
      label: (_dataTypes$currentDat2 = dataTypes[currentDataType]) === null || _dataTypes$currentDat2 === void 0 ? void 0 : _dataTypes$currentDat2.getName()
    },
    onChange: ref => _onChange(ref.selected.value),
    dense: true
  }, Object.values(dataTypes).map(type => /*#__PURE__*/React__default.createElement(uiCore.SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName()
  }))), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$7.__hash
  }, _defaultExport$7));
};
DataTypes.propTypes = {
  currentDataType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const _defaultExport$8 = [".detail-container.jsx-4143247276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;width:40%;padding-right:5px;padding-left:5px;}"];
_defaultExport$8.__hash = "4143247276";

const getOptions = () => ({
  [TOTALS]: i18n.t('Totals'),
  [DETAIL]: i18n.t('Details')
});

const Detail$o = ({
  currentValue,
  onChange: _onChange
}) => {
  const options = getOptions();
  const currentLabel = options[currentValue];
  return /*#__PURE__*/React__default.createElement("div", {
    className: "jsx-".concat(_defaultExport$8.__hash) + " " + "detail-container"
  }, /*#__PURE__*/React__default.createElement(uiCore.SingleSelectField, {
    label: i18n.t('Detail'),
    selected: currentLabel ? {
      value: currentValue,
      label: currentLabel
    } : null,
    onChange: ref => _onChange(ref.selected.value),
    dense: true
  }, Object.entries(options).map(option => /*#__PURE__*/React__default.createElement(uiCore.SingleSelectOption, {
    value: option[0],
    key: option[0],
    label: option[1]
  }))), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$8.__hash
  }, _defaultExport$8));
};
Detail$o.propTypes = {
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const _defaultExport$9 = [".container.jsx-2662255650{border:1px solid ".concat(uiCore.colors.grey300, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:53px;border-right:0;border-left:0;padding-top:5px;padding-left:10px;}"), ".group-container.jsx-2662255650{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:inherit;min-width:294px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-right:5px;}"];
_defaultExport$9.__hash = "2662255650";

const Groups = ({
  dataType,
  detailValue,
  groupId,
  groups,
  onDetailChange,
  onGroupChange
}) => {
  let optionItems = groups;

  if (dataTypes[dataType].defaultGroup) {
    const {
      id,
      getName
    } = dataTypes[dataType].defaultGroup;
    optionItems = [{
      id,
      name: getName()
    }, ...optionItems];
  }

  const groupDetail = dataTypes[dataType].groupDetail;
  const selected = optionItems.find(item => item.id === groupId) || {};
  return /*#__PURE__*/React__default.createElement("div", {
    className: "jsx-".concat(_defaultExport$9.__hash) + " " + "container"
  }, /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$9.__hash
  }, _defaultExport$9), /*#__PURE__*/React__default.createElement("div", {
    className: "jsx-".concat(_defaultExport$9.__hash) + " " + "group-container"
  }, /*#__PURE__*/React__default.createElement(uiCore.SingleSelectField, {
    label: dataTypes[dataType].getGroupLabel(),
    selected: selected.id && selected.name ? {
      value: selected.id,
      label: selected.name
    } : {},
    placeholder: !groupId && dataTypes[dataType].getPlaceholder ? dataTypes[dataType].getPlaceholder() : null,
    onChange: ref => onGroupChange(ref.selected.value),
    dense: true
  }, optionItems.map(item => /*#__PURE__*/React__default.createElement(uiCore.SingleSelectOption, {
    value: item.id,
    key: item.id,
    label: item.name
  })))), groupDetail && /*#__PURE__*/React__default.createElement(Detail$o, {
    currentValue: detailValue,
    onChange: onDetailChange
  }));
};
Groups.propTypes = {
  dataType: PropTypes.string.isRequired,
  detailValue: PropTypes.string.isRequired,
  groupId: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired,
  onDetailChange: PropTypes.func.isRequired,
  onGroupChange: PropTypes.func.isRequired
};

const Filter$o = ({
  text,
  onChange: _onChange,
  onClear,
  placeholder,
  type
}) => /*#__PURE__*/React__default.createElement(uiCore.InputField, {
  placeholder: placeholder,
  onChange: ref => ref.value.length ? _onChange(ref.value) : onClear(),
  value: text,
  dense: true,
  type: type
});
Filter$o.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  text: PropTypes.string
};
Filter$o.defaultProps = {
  type: 'text'
};

const _defaultExport$a = [".container.jsx-152958988{border:1px solid ".concat(uiCore.colors.grey300, ";background-color:").concat(uiCore.colors.white, ";height:53px;border-right:0;border-left:0;border-top:0;padding:10px 5px 10px 10px;}")];
_defaultExport$a.__hash = "152958988";

const FilterField = ({
  text,
  onFilterTextChange,
  onClearFilter
}) => /*#__PURE__*/React__default.createElement("div", {
  className: "jsx-".concat(_defaultExport$a.__hash) + " " + "container"
}, /*#__PURE__*/React__default.createElement(Filter$o, {
  placeholder: i18n.t('Search'),
  text: text,
  onChange: onFilterTextChange,
  onClear: onClearFilter
}), /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$a.__hash
}, _defaultExport$a));
FilterField.propTypes = {
  text: PropTypes.string.isRequired,
  onClearFilter: PropTypes.func.isRequired,
  onFilterTextChange: PropTypes.func.isRequired
};

// Helper functions
const onError = error => console.log('Error: ', error);

const selectFromResponse = (response, entity, selectorFn) => typeof selectorFn === 'function' ? selectorFn(response) : response[entity]; // Request functions


const request = (d2, entity, {
  paramString,
  selectorFn
} = {}) => {
  const url = "/".concat(entity, "?").concat(paramString, "&paging=false");
  return d2.Api.getApi().get(url).then(response => selectFromResponse(response, entity, selectorFn)).catch(onError);
};

const requestWithPaging = (d2, entity, {
  page,
  paramString,
  selectorFn
} = {}) => {
  const paging = "&paging=true&page=".concat(page);
  const url = "/".concat(entity, "?").concat(paramString).concat(paging);
  return d2.Api.getApi().get(url).then(response => ({
    dimensionItems: selectFromResponse(response, entity, selectorFn),
    nextPage: response.pager.nextPage ? response.pager.page + 1 : null
  })).catch(onError);
}; // Fetch functions


const apiFetchDimensions = (d2, nameProp) => {
  const fields = "fields=id,".concat(nameProp, "~rename(name),dimensionType,dataDimensionType");
  const order = "order=".concat(nameProp, ":asc");
  const params = "".concat(fields, "&").concat(order);
  return request(d2, 'dimensions', {
    paramString: params
  });
};
const apiFetchRecommendedIds = (d2, dxIds, ouIds) => {
  let dimensions = 'dimension=';

  if (dxIds.length) {
    dimensions = dimensions.concat("dx:".concat(dxIds.join(';')));
    if (ouIds.length) dimensions = dimensions.concat("&dimension=ou:".concat(ouIds.join(';')));
  } else if (ouIds.length) {
    dimensions = dimensions.concat("ou:".concat(ouIds.join(';')));
  } else {
    return Promise.resolve([]);
  }

  const url = "/dimensions/recommendations?".concat(dimensions, "&fields=id");
  return d2.Api.getApi().get(url).then(response => response.dimensions.map(item => item.id)).catch(onError);
};
const apiFetchItemsByDimension = (d2, dimensionId) => {
  const fields = "fields=id,displayName~rename(name)";
  const order = "order=displayName:asc";
  const url = "dimensions/".concat(dimensionId, "/items?").concat(fields, "&").concat(order);
  return d2.Api.getApi().get(url).then(response => response.items);
};
const apiFetchGroups = (d2, dataType, nameProp) => {
  // indicatorGroups does not support shortName
  const name = dataType === 'indicators' ? 'displayName' : nameProp;
  const fields = "fields=id,".concat(name, "~rename(name)");
  const order = "order=".concat(name, ":asc");
  const params = "".concat(fields, "&").concat(order);

  switch (dataType) {
    case 'indicators':
      {
        return request(d2, 'indicatorGroups', {
          paramString: params
        });
      }

    case 'dataElements':
      {
        return request(d2, 'dataElementGroups', {
          paramString: params
        });
      }

    case 'dataSets':
      {
        const dataSetGroups = DATA_SETS_CONSTANTS.map(({
          id,
          getName
        }) => ({
          id,
          name: getName()
        }));
        return Promise.resolve(dataSetGroups);
      }

    case 'eventDataItems':
    case 'programIndicators':
      {
        return request(d2, 'programs', {
          paramString: params
        });
      }

    default:
      return null;
  }
};
const apiFetchAlternatives = args => {
  const {
    d2,
    dataType,
    groupDetail
  } = args,
        queryParams = _objectWithoutProperties(args, ["d2", "dataType", "groupDetail"]);

  switch (dataType) {
    case 'indicators':
      {
        return fetchIndicators(_objectSpread2({
          d2
        }, queryParams));
      }

    case 'dataElements':
      {
        if (groupDetail === 'detail') {
          return fetchDataElementOperands(_objectSpread2({
            d2
          }, queryParams));
        } else {
          return fetchDataElements(_objectSpread2({
            d2
          }, queryParams));
        }
      }

    case 'dataSets':
      {
        return fetchDataSets(_objectSpread2({
          d2
        }, queryParams));
      }

    case 'eventDataItems':
      {
        return queryParams.groupId ? getEventDataItems(_objectSpread2({
          d2
        }, queryParams)) : null;
      }

    case 'programIndicators':
      {
        return queryParams.groupId ? fetchProgramIndicators(_objectSpread2({
          d2
        }, queryParams)) : null;
      }

    default:
      return null;
  }
};

const fetchIndicators = ({
  d2,
  nameProp,
  groupId,
  filterText,
  page
}) => {
  const fields = "fields=id,".concat(nameProp, "~rename(name),dimensionItemType&order=").concat(nameProp, ":asc");
  const order = "order=".concat(nameProp, ":asc");
  let filter = groupId !== 'ALL' ? "&filter=indicatorGroups.id:eq:".concat(groupId) : '';

  if (filterText) {
    filter = filter.concat("&filter=".concat(nameProp, ":ilike:").concat(filterText));
  }

  const paramString = "".concat(fields, "&").concat(order).concat(filter);
  return requestWithPaging(d2, 'indicators', {
    paramString,
    page
  });
};

const fetchDataElements = ({
  d2,
  groupId,
  page,
  filterText,
  nameProp
}) => {
  const idField = groupId === 'ALL' ? 'id' : 'dimensionItem~rename(id)';
  const fields = "fields=".concat(idField, ",").concat(nameProp, "~rename(name)");
  const order = "order=".concat(nameProp, ":asc");
  let filter = '&filter=domainType:eq:AGGREGATE';

  if (groupId !== 'ALL') {
    filter = filter.concat("&filter=dataElementGroups.id:eq:".concat(groupId));
  }

  if (filterText) {
    filter = filter.concat("&filter=".concat(nameProp, ":ilike:").concat(filterText));
  }

  const paramString = "".concat(fields, "&").concat(order).concat(filter);
  return requestWithPaging(d2, 'dataElements', {
    paramString,
    page
  });
};

const fetchDataElementOperands = ({
  d2,
  groupId,
  page,
  filterText,
  nameProp
}) => {
  const idField = groupId === 'ALL' ? 'id' : 'dimensionItem~rename(id)';
  const fields = "fields=".concat(idField, ",").concat(nameProp, "~rename(name)");
  const order = "order=".concat(nameProp, ":asc");
  let filter = '';

  if (groupId !== 'ALL') {
    filter = "&filter=dataElement.dataElementGroups.id:eq:".concat(groupId);
  }

  if (filterText) {
    const textFilter = "&filter=".concat(nameProp, ":ilike:").concat(filterText);
    filter = filter.length ? filter.concat(textFilter) : textFilter;
  }

  return requestWithPaging(d2, 'dataElementOperands', {
    paramString: "".concat(fields, "&").concat(order).concat(filter),
    page
  });
};

const fetchDataSets = ({
  d2,
  page,
  filterText,
  nameProp
}) => {
  const fields = "fields=dimensionItem~rename(id),".concat(nameProp, "~rename(name)");
  const order = "order=".concat(nameProp, ":asc");
  const filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  const paramString = "".concat(fields, "&").concat(order).concat(filter);
  return requestWithPaging(d2, 'dataSets', {
    paramString,
    page
  });
};

const fetchProgramDataElements = ({
  d2,
  groupId,
  page,
  filterText,
  nameProp
}) => {
  const fields = "fields=dimensionItem~rename(id),".concat(nameProp, "~rename(name),valueType");
  const order = "order=".concat(nameProp, ":asc");
  const program = "program=".concat(groupId);
  const filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  const paramString = "".concat(fields, "&").concat(order, "&").concat(program).concat(filter);
  return requestWithPaging(d2, 'programDataElements', {
    paramString,
    page
  });
};

const fetchTrackedEntityAttributes = ({
  d2,
  groupId,
  filterText,
  nameProp
}) => {
  const fields = "fields=".concat(nameProp, "~rename(name),programTrackedEntityAttributes[trackedEntityAttribute[id,").concat(nameProp, "~rename(name),valueType]]");
  const filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  const paramString = "".concat(fields).concat(filter);
  return request(d2, "programs/".concat(groupId), {
    paramString,
    selectorFn: r => Array.isArray(r.programTrackedEntityAttributes) ? r.programTrackedEntityAttributes.map(a => a.trackedEntityAttribute).map(a => _objectSpread2({}, a, {
      id: "".concat(groupId, ".").concat(a.id),
      name: "".concat(r.name, " ").concat(a.name)
    })) : []
  });
};

const getEventDataItems = async (d2, queryParams) => {
  const [dataElementsObj, attributes] = await Promise.all([fetchProgramDataElements(d2), fetchTrackedEntityAttributes(d2)]);

  const filterInvalidTypes = item => Boolean(CHART_AGGREGATE_AGGREGATABLE_TYPES.includes(item.valueType));

  return _objectSpread2({}, dataElementsObj, {
    dimensionItems: sortBy([...dataElementsObj.dimensionItems, ...attributes].filter(filterInvalidTypes), 'name')
  });
};

const fetchProgramIndicators = ({
  d2,
  groupId,
  page,
  filterText,
  nameProp
}) => {
  const fields = "fields=dimensionItem~rename(id),".concat(nameProp, "~rename(name)");
  const order = "order=".concat(nameProp, ":asc");
  const programFilter = "filter=program.id:eq:".concat(groupId);
  const filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  const paramString = "".concat(fields, "&").concat(order, "&").concat(programFilter).concat(filter);
  return requestWithPaging(d2, 'programIndicators', {
    paramString,
    page
  });
};

const DataIcon = () => {
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Exp",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Artboard",
    transform: "translate(-7.000000, -9.000000)"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "icon_data_new",
    transform: "translate(7.000000, 9.000000)"
  }, /*#__PURE__*/React__default.createElement("rect", {
    id: "frame",
    x: "0",
    y: "0",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React__default.createElement("g", {
    id: "database-2",
    transform: "translate(2.000000, 2.000000)",
    stroke: "#000000",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default.createElement("ellipse", {
    id: "Oval",
    cx: "5.5",
    cy: "2.5",
    rx: "5.5",
    ry: "2.5"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0,3 L0,5.59978665 C0,6.9252378 2.46253333,8 5.5,8 C8.53746667,8 11,6.92577118 11,5.59978665 L11,3",
    id: "Shape"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M0,5 L0,8.6 C0,9.92533333 2.46253333,11 5.5,11 C8.53746667,11 11,9.92533333 11,8.6 L11,5",
    id: "Shape"
  }))))));
};

const PeriodIcon = () => {
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Exp",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Artboard",
    transform: "translate(-32.000000, -9.000000)"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "icon_period_new",
    transform: "translate(32.000000, 9.000000)"
  }, /*#__PURE__*/React__default.createElement("rect", {
    id: "frame",
    fill: "#D8D8D8",
    opacity: "0",
    x: "0",
    y: "0",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React__default.createElement("g", {
    id: "time-clock-circle",
    transform: "translate(2.000000, 2.000000)"
  }, /*#__PURE__*/React__default.createElement("circle", {
    id: "Oval",
    stroke: "#000000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    cx: "5.5",
    cy: "5.5",
    r: "5.5"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M6,5.29289322 L8.18198052,7.47487373 C8.37724266,7.67013588 8.37724266,7.98671837 8.18198052,8.18198052 C7.98671837,8.37724266 7.67013588,8.37724266 7.47487373,8.18198052 L5.01023174,5.71733852 L5,5.7144165 L5,3.5 C5,3.22385763 5.22385763,3 5.5,3 C5.77614237,3 6,3.22385763 6,3.5 L6,5.29289322 Z",
    id: "Combined-Shape",
    fill: "#000000"
  }))))));
};

const OrgUnitIcon = () => {
  return /*#__PURE__*/React__default.createElement("svg", {
    height: "16",
    viewBox: "0 0 16 16",
    width: "16"
  }, /*#__PURE__*/React__default.createElement("g", {
    fill: "#212934",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m2 2h1v10h-1z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m3 4h2v1h-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m3 11h2v1h-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m6 4h2v1h-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m6 11h2v1h-2z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m9 4h1v1h-1z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m9 11h1v1h-1z"
  }), /*#__PURE__*/React__default.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m14 2h-4v5h4zm-1 1v3h-2v-3z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m14 9h-4v5h4zm-1 1v3h-2v-3z"
  }))));
};

const AssignedCategoriesIcon = () => {
  return /*#__PURE__*/React__default.createElement("svg", {
    height: "16",
    viewBox: "0 0 16 16",
    width: "16"
  }, /*#__PURE__*/React__default.createElement("g", {
    fill: "#212934",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m2 7h11v1h-11z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m2 13h11v1h-11z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m2 2h11v1h-11z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m7 8h1v5h-1z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m12 3h1v10h-1z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "m2 3h1v10h-1z"
  })));
};

const DIMENSION_ID_DATA = 'dx';
const DIMENSION_ID_PERIOD = 'pe';
const DIMENSION_ID_ORGUNIT = 'ou';
const DIMENSION_ID_ASSIGNED_CATEGORIES = 'co';
const DIMENSION_PROP_NO_ITEMS = 'noItems';
const getFixedDimensions = () => ({
  [DIMENSION_ID_DATA]: {
    id: DIMENSION_ID_DATA,
    name: i18n.t('Data'),
    iconName: 'DataIcon',
    icon: DataIcon
  },
  [DIMENSION_ID_PERIOD]: {
    id: DIMENSION_ID_PERIOD,
    name: i18n.t('Period'),
    iconName: 'PeriodIcon',
    icon: PeriodIcon
  },
  [DIMENSION_ID_ORGUNIT]: {
    id: DIMENSION_ID_ORGUNIT,
    name: i18n.t('Organisation Unit'),
    iconName: 'OrgUnitIcon',
    icon: OrgUnitIcon
  }
});
const getDynamicDimensions = () => ({
  [DIMENSION_ID_ASSIGNED_CATEGORIES]: {
    id: DIMENSION_ID_ASSIGNED_CATEGORIES,
    name: i18n.t('Assigned Categories'),
    iconName: 'AssignedCategoriesIcon',
    icon: AssignedCategoriesIcon,
    [DIMENSION_PROP_NO_ITEMS]: true
  }
});
const getPredefinedDimensions = () => _objectSpread2({}, getFixedDimensions(), {}, getDynamicDimensions());
const filterOutPredefinedDimensions = dimensionIds => dimensionIds.filter(dimensionId => !Object.keys(getPredefinedDimensions()).includes(dimensionId));
const getPredefinedDimensionProp = (dimensionId, propName) => (getPredefinedDimensions()[dimensionId] || {})[propName];
const getDimensionById = dimensionId => getPredefinedDimensions()[dimensionId];

const FIRST_PAGE = 1;
const DEFAULT_ALTERNATIVES = {
  dimensionItems: [],
  nextPage: FIRST_PAGE
};
class DataDimension extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dataType: DEFAULT_DATATYPE_ID,
      groups: {
        indicators: [],
        dataElements: [],
        dataElementOperands: [],
        dataSets: [],
        eventDataItems: [],
        programIndicators: []
      },
      groupId: ALL_ID,
      groupDetail: '',
      filterText: '',
      items: [],
      itemsCopy: [],
      nextPage: null,
      filter: {}
    });

    _defineProperty(this, "updateGroups", async () => {
      const dataType = this.state.dataType;

      if (!this.state.groups[dataType].length) {
        const dataTypeGroups = await apiFetchGroups(this.props.d2, dataType, this.props.displayNameProp);
        const groups = Object.assign({}, this.state.groups, {
          [dataType]: dataTypeGroups
        });
        this.setState({
          groups
        }, this.updateAlternatives);
      } else {
        this.updateAlternatives();
      }
    });

    _defineProperty(this, "onDataTypeChange", dataType => {
      if (dataType !== this.state.dataType) {
        const filter = Object.assign({}, this.state.filter, {
          [this.state.dataType]: {
            groupId: this.state.groupId,
            groupDetail: this.state.groupDetail
          }
        });
        const currentFilter = this.state.filter[dataType] || {};
        const groupId = currentFilter.groupId || defaultGroupId(dataType);
        const groupDetail = currentFilter.groupDetail || defaultGroupDetail(dataType);
        this.setState({
          filter,
          dataType,
          groupId,
          groupDetail,
          filterText: ''
        }, this.updateGroups);
      }
    });

    _defineProperty(this, "requestMoreItems", () => {
      if (this.state.nextPage) {
        this.updateAlternatives(this.state.nextPage, true);
      }
    });

    _defineProperty(this, "updateAlternatives", async (page = FIRST_PAGE, concatItems = false) => {
      const {
        dataType,
        groupId,
        groupDetail,
        filterText
      } = this.state;
      const alternatives = (await apiFetchAlternatives({
        d2: this.props.d2,
        dataType,
        groupId,
        groupDetail,
        page,
        filterText,
        nameProp: this.props.displayNameProp
      })) || DEFAULT_ALTERNATIVES;
      let {
        dimensionItems
      } = alternatives;
      const augmentFn = dataTypes[dataType].augmentAlternatives;

      if (augmentFn) {
        dimensionItems = augmentFn(dimensionItems, groupId);
      }

      const items = concatItems ? this.state.items.concat(dimensionItems) : dimensionItems;
      this.setState({
        items: items.filter(di => !this.props.selectedDimensions.includes(di.id)),
        itemsCopy: items,
        nextPage: alternatives.nextPage
      });
    });

    _defineProperty(this, "onGroupChange", async groupId => {
      if (groupId !== this.state.groupId) {
        this.setState({
          groupId
        }, this.updateAlternatives);
      }
    });

    _defineProperty(this, "onDetailChange", groupDetail => {
      if (groupDetail !== this.state.groupDetail) {
        this.setState({
          groupDetail
        }, this.updateAlternatives);
      }
    });

    _defineProperty(this, "onClearFilter", () => {
      this.setState({
        filterText: ''
      }, debounce(async () => this.updateAlternatives(), 300));
    });

    _defineProperty(this, "onFilterTextChange", filterText => {
      this.setState({
        filterText
      }, debounce(async () => this.updateAlternatives(), 300));
    });

    _defineProperty(this, "selectItems", selectedIds => {
      const itemsToAdd = this.state.items.filter(di => selectedIds.includes(di.id));
      this.props.onSelect({
        dimensionId: DIMENSION_ID_DATA,
        items: [...this.props.selectedDimensions.filter(item => !selectedIds.includes(item.id)), ...itemsToAdd]
      });
    });

    _defineProperty(this, "deselectItems", itemIdsToRemove => {
      this.props.onDeselect({
        dimensionId: DIMENSION_ID_DATA,
        itemIdsToRemove
      });
    });

    _defineProperty(this, "reorderItems", itemIds => this.props.onReorder({
      dimensionId: DIMENSION_ID_DATA,
      itemIds
    }));

    _defineProperty(this, "getUnselectedItems", () => this.state.items.filter(item => !this.props.selectedDimensions.find(i => i.id === item.id)));

    _defineProperty(this, "render", () => {
      const groups = this.state.groups[this.state.dataType] || [];

      const filterZone = () => {
        return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(DataTypes, {
          currentDataType: this.state.dataType,
          onChange: this.onDataTypeChange
        }), /*#__PURE__*/React__default.createElement(Groups, {
          dataType: this.state.dataType,
          groups: groups,
          groupId: this.state.groupId,
          onGroupChange: this.onGroupChange,
          onDetailChange: this.onDetailChange,
          detailValue: this.state.groupDetail
        }), /*#__PURE__*/React__default.createElement(FilterField, {
          text: this.state.filterText,
          onFilterTextChange: this.onFilterTextChange,
          onClearFilter: this.onClearFilter
        }));
      };

      const unselected = {
        items: this.getUnselectedItems(),
        onSelect: this.selectItems,
        filterText: this.state.filterText,
        requestMoreItems: this.requestMoreItems
      };
      const selected = {
        items: this.props.selectedDimensions,
        infoBoxMessage: this.props.infoBoxMessage,
        dialogId: DIMENSION_ID_DATA,
        onDeselect: this.deselectItems,
        onReorder: this.reorderItems
      };
      return /*#__PURE__*/React__default.createElement(ItemSelector, {
        itemClassName: "data-dimension",
        unselected: unselected,
        selected: selected
      }, filterZone());
    });
  }

  componentDidMount() {
    this.updateGroups();
  }

  componentDidUpdate(prevProps) {
    const prevItems = prevProps.selectedDimensions;
    const currentItems = this.props.selectedDimensions;

    if (!isEqual(prevItems, currentItems)) {
      this.setState({
        items: this.state.itemsCopy.filter(di => !currentItems.includes(di.id))
      });
    }
  }

}
DataDimension.propTypes = {
  d2: PropTypes.object.isRequired,
  displayNameProp: PropTypes.string.isRequired,
  selectedDimensions: PropTypes.array.isRequired,
  onDeselect: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  infoBoxMessage: PropTypes.string
};
DataDimension.defaultProps = {
  selectedDimensions: [],
  onSelect: Function.prototype,
  onDeselect: Function.prototype,
  onReorder: Function.prototype
};

const DAILY = 'Daily';
const WEEKLY = 'Weekly';
const BIWEEKLY = 'Bi-weekly';
const WEEKLYWED = 'Weekly (Start Wednesday)';
const WEEKLYTHU = 'Weekly (Start Thursday)';
const WEEKLYSAT = 'Weekly (Start Saturday)';
const WEEKLYSUN = 'Weekly (Start Sunday)';
const MONTHLY = 'Monthly';
const BIMONTHLY = 'Bi-monthly';
const QUARTERLY = 'Quarterly';
const SIXMONTHLY = 'Six-monthly';
const SIXMONTHLYAPR = 'Six-monthly April';
const YEARLY = 'Yearly';
const FYNOV = 'Financial year (Start November)';
const FYOCT = 'Financial year (Start October)';
const FYJUL = 'Financial year (Start July)';
const FYAPR = 'Financial year (Start April)';

const getMonthName = key => {
  const monthNames = [i18n.t('January'), i18n.t('February'), i18n.t('March'), i18n.t('April'), i18n.t('May'), i18n.t('June'), i18n.t('July'), i18n.t('August'), i18n.t('September'), i18n.t('October'), i18n.t('November'), i18n.t('December')];
  return monthNames[key];
};

const dailyPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("01 Jan ".concat(year));

    while (date.getFullYear() === year) {
      const period = {};
      period.startDate = formatYyyyMmDd(date);
      period.endDate = period.startDate;

      period.getName = () => period.startDate;

      period.iso = period.startDate.replace(/-/g, '');
      period.id = period.iso;
      periods.push(period);
      date.setDate(date.getDate() + 1);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
};

const weeklyPeriodType = (formatYyyyMmDd, weekObj, fnFilter) => {
  // Calculate the first date of an EPI year base on ISO standard  ( first week always contains 4th Jan )
  const getEpiWeekStartDay = (year, startDayOfWeek) => {
    const jan4 = new Date(year, 0, 4);
    const jan4DayOfWeek = jan4.getDay();
    const startDate = jan4;
    const dayDiff = jan4DayOfWeek - startDayOfWeek;

    if (dayDiff > 0) {
      startDate.setDate(jan4.getDate() - dayDiff);
    } else if (dayDiff < 0) {
      startDate.setDate(jan4.getDate() - dayDiff);
      startDate.setDate(startDate.getDate() - 7);
    }

    return startDate;
  };

  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = getEpiWeekStartDay(year, weekObj.startDay);
    let week = 1;

    while (date.getFullYear() <= year) {
      const period = {};
      period.startDate = formatYyyyMmDd(date);
      period.iso = "".concat(year).concat(weekObj.shortName, "W").concat(week);
      period.id = period.iso;
      date.setDate(date.getDate() + 6);
      period.endDate = formatYyyyMmDd(date);
      const weekNumber = week;

      period.getName = () => "".concat(i18n.t('Week {{weekNumber}}', {
        weekNumber
      }), " - ").concat(period.startDate, " - ").concat(period.endDate); // if end date is Jan 4th or later, week belongs to next year


      if (date.getFullYear() > year && date.getDate() >= 4) {
        break;
      }

      periods.push(period);
      date.setDate(date.getDate() + 1);
      week += 1;
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
};

const biWeeklyPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("01 Jan ".concat(year));
    const day = date.getDay();
    let biWeek = 1;

    if (day <= 4) {
      date.setDate(date.getDate() - (day - 1));
    } else {
      date.setDate(date.getDate() + (8 - day));
    }

    while (date.getFullYear() <= year) {
      const period = {};
      period.iso = "".concat(year, "BiW").concat(biWeek);
      period.id = period.iso;
      period.startDate = formatYyyyMmDd(date);
      date.setDate(date.getDate() + 13);
      period.endDate = formatYyyyMmDd(date);
      const biWeekNumber = biWeek;

      period.getName = () => "".concat(i18n.t('Bi-Week {{biWeekNumber}}', {
        biWeekNumber
      }), " - ").concat(period.startDate, " - ").concat(period.endDate); // if end date is Jan 4th or later, biweek belongs to next year


      if (date.getFullYear() > year && date.getDate() >= 4) {
        break;
      }

      periods.push(period);
      date.setDate(date.getDate() + 1);
      biWeek += 1;
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
};

const monthlyPeriodType = (formatYyyyMmDd, fnFilter) => {
  const formatIso = date => {
    const y = date.getFullYear();
    let m = String(date.getMonth() + 1);
    m = m.length < 2 ? "0".concat(m) : m;
    return y + m;
  };

  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("31 Dec ".concat(year));

    while (date.getFullYear() === year) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setDate(1);
      period.startDate = formatYyyyMmDd(date);
      const monthName = getMonthName(date.getMonth());

      period.getName = () => "".concat(monthName, " ").concat(year);

      period.iso = formatIso(date);
      period.id = period.iso;
      periods.push(period);
      date.setDate(0);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Months are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const biMonthlyPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("31 Dec ".concat(year));
    let index = 6;

    while (date.getFullYear() === year) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setDate(0);
      date.setDate(1);
      period.startDate = formatYyyyMmDd(date);
      const monthStart = getMonthName(date.getMonth());
      const monthEnd = getMonthName(date.getMonth() + 1);
      const fullYear = date.getFullYear();

      period.getName = () => "".concat(monthStart, " - ").concat(monthEnd, " ").concat(fullYear);

      period.iso = "".concat(year, "0").concat(index, "B");
      period.id = period.iso;
      periods.push(period);
      date.setDate(0);
      index--;
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Bi-months are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const quarterlyPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("31 Dec ".concat(year));
    let quarter = 4;

    while (date.getFullYear() === year) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setDate(0);
      date.setDate(0);
      date.setDate(1);
      period.startDate = formatYyyyMmDd(date);
      const monthStart = getMonthName(date.getMonth());
      const monthEnd = getMonthName(date.getMonth() + 2);
      const fullYear = date.getFullYear();

      period.getName = () => "".concat(monthStart, " - ").concat(monthEnd, " ").concat(fullYear);

      period.iso = "".concat(year, "Q").concat(quarter);
      period.id = period.iso;
      periods.push(period);
      date.setDate(0);
      quarter -= 1;
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Quarters are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const sixMonthlyPeriodType = fnFilter => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    let period = {};
    period.startDate = "".concat(year, "-01-01");
    period.endDate = "".concat(year, "-06-30");

    period.getName = () => "".concat(getMonthName(0), " - ").concat(getMonthName(5), " ").concat(year);

    period.iso = "".concat(year, "S1");
    period.id = period.iso;
    periods.push(period);
    period = {};
    period.startDate = "".concat(year, "-07-01");
    period.endDate = "".concat(year, "-12-31");

    period.getName = () => "".concat(getMonthName(6), " - ").concat(getMonthName(11), " ").concat(year);

    period.iso = "".concat(year, "S2");
    period.id = period.iso;
    periods.push(period);
    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
};

const sixMonthlyAprilPeriodType = fnFilter => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    let period = {};
    period.startDate = "".concat(year, "-04-01");
    period.endDate = "".concat(year, "-09-30");

    period.getName = () => "".concat(getMonthName(3), " - ").concat(getMonthName(8), " ").concat(year);

    period.iso = "".concat(year, "AprilS1");
    period.id = period.iso;
    periods.push(period);
    period = {};
    period.startDate = "".concat(year, "-10-01");
    period.endDate = "".concat(year + 1, "-03-31");

    period.getName = () => "".concat(getMonthName(9), " ").concat(year, " - ").concat(getMonthName(2), " ").concat(year + 1);

    period.iso = "".concat(year, "AprilS2");
    period.id = period.iso;
    periods.push(period);
    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
};

const yearlyPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("31 Dec ".concat(year));

    while (year - date.getFullYear() < 10) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setMonth(0, 1);
      period.startDate = formatYyyyMmDd(date);
      const dateString = date.getFullYear().toString();

      period.getName = () => dateString;

      period.iso = date.getFullYear().toString();
      period.id = period.iso.toString();
      periods.push(period);
      date.setDate(0);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Years are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const financialOctoberPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("30 Sep ".concat(year + 1));

    for (let i = 0; i < 10; i++) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      const yearStart = date.getFullYear();
      const yearEnd = date.getFullYear() + 1;

      period.getName = () => "".concat(getMonthName(9), " ").concat(yearStart, " - ").concat(getMonthName(8), " ").concat(yearEnd);

      period.id = "".concat(date.getFullYear(), "Oct");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialOctober periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const financialNovemberPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("31 Oct ".concat(year + 1));

    for (let i = 0; i < 10; i++) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      const yearStart = date.getFullYear();
      const yearEnd = date.getFullYear() + 1;

      period.getName = () => "".concat(getMonthName(10), " ").concat(yearStart, " - ").concat(getMonthName(9), " ").concat(yearEnd);

      period.id = "".concat(date.getFullYear(), "Nov");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialNovember periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const financialJulyPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("30 Jun ".concat(year + 1));

    for (let i = 0; i < 10; i++) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      const yearStart = date.getFullYear();
      const yearEnd = date.getFullYear() + 1;

      period.getName = () => "".concat(getMonthName(6), " ").concat(yearStart, " - ").concat(getMonthName(5), " ").concat(yearEnd);

      period.id = "".concat(date.getFullYear(), "July");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialJuly periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const financialAprilPeriodType = (formatYyyyMmDd, fnFilter) => {
  return config => {
    let periods = [];
    const offset = parseInt(config.offset, 10);
    const isFilter = config.filterFuturePeriods;
    const isReverse = config.reversePeriods;
    const year = new Date(Date.now()).getFullYear() + offset;
    const date = new Date("31 Mar ".concat(year + 1));

    for (let i = 0; i < 10; i++) {
      const period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      const yearStart = date.getFullYear();
      const yearEnd = date.getFullYear() + 1;

      period.getName = () => "".concat(getMonthName(3), " ").concat(yearStart, " - ").concat(getMonthName(2), " ").concat(yearEnd);

      period.id = "".concat(date.getFullYear(), "April");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialApril periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
};

const formatYyyyMmDd = date => {
  const y = date.getFullYear();
  let m = String(date.getMonth() + 1);
  let d = String(date.getDate());
  m = m.length < 2 ? "0".concat(m) : m;
  d = d.length < 2 ? "0".concat(d) : d;
  return "".concat(y, "-").concat(m, "-").concat(d);
};

const filterFuturePeriods = periods => {
  const array = [];
  const now = new Date(Date.now());

  for (let i = 0; i < periods.length; i++) {
    if (new Date(periods[i].startDate) <= now) {
      array.push(periods[i]);
    }
  }

  return array;
};

const options = [{
  id: DAILY,
  getPeriods: dailyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Daily')
}, {
  id: WEEKLY,
  getPeriods: weeklyPeriodType(formatYyyyMmDd, {
    shortName: '',
    startDay: 1
  }, filterFuturePeriods),
  getName: () => i18n.t('Weekly')
}, {
  id: BIWEEKLY,
  getPeriods: biWeeklyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Bi-weekly')
}, {
  id: WEEKLYWED,
  getPeriods: weeklyPeriodType(formatYyyyMmDd, {
    shortName: 'Wed',
    startDay: 3
  }, filterFuturePeriods),
  getName: () => i18n.t('Weekly (Start Wednesday)')
}, {
  id: WEEKLYTHU,
  getPeriods: weeklyPeriodType(formatYyyyMmDd, {
    shortName: 'Thu',
    startDay: 4
  }, filterFuturePeriods),
  getName: () => i18n.t('Weekly (Start Thursday)')
}, {
  id: WEEKLYSAT,
  getPeriods: weeklyPeriodType(formatYyyyMmDd, {
    shortName: 'Sat',
    startDay: 6
  }, filterFuturePeriods),
  getName: () => i18n.t('Weekly (Start Saturday)')
}, {
  id: WEEKLYSUN,
  getPeriods: weeklyPeriodType(formatYyyyMmDd, {
    shortName: 'Sun',
    startDay: 7
  }, filterFuturePeriods),
  getName: () => i18n.t('Weekly (Start Sunday)')
}, {
  id: MONTHLY,
  getPeriods: monthlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Monthly')
}, {
  id: BIMONTHLY,
  getPeriods: biMonthlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Bi-monthly')
}, {
  id: QUARTERLY,
  getPeriods: quarterlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Quarterly')
}, {
  id: SIXMONTHLY,
  getPeriods: sixMonthlyPeriodType(filterFuturePeriods),
  getName: () => i18n.t('Six-monthly')
}, {
  id: SIXMONTHLYAPR,
  getPeriods: sixMonthlyAprilPeriodType(filterFuturePeriods),
  getName: () => i18n.t('Six-monthly April')
}, {
  id: YEARLY,
  getPeriods: yearlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Yearly')
}, {
  id: FYNOV,
  getPeriods: financialNovemberPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Financial year (Start November)')
}, {
  id: FYOCT,
  getPeriods: financialOctoberPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Financial year (Start October)')
}, {
  id: FYJUL,
  getPeriods: financialJulyPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Financial year (Start July)')
}, {
  id: FYAPR,
  getPeriods: financialAprilPeriodType(formatYyyyMmDd, filterFuturePeriods),
  getName: () => i18n.t('Financial year (Start April)')
}];
const getFixedPeriodsOptionsById = id => options.find(option => option.id === id);
const getFixedPeriodsOptions = () => options;

const _defaultExport$b = [".leftSection.jsx-2872988609{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".leftSection.jsx-2872988609>.filterElement,.rightSection.jsx-2872988609>.filterElement{margin:0;}", ".rightSection.jsx-2872988609{width:120px;margin-left:".concat(uiCore.spacers.dp8, ";}")];
_defaultExport$b.__hash = "2872988609";

const FixedPeriodFilter = ({
  currentPeriodType,
  currentYear,
  onSelectPeriodType,
  onSelectYear
}) => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
  className: "jsx-".concat(_defaultExport$b.__hash) + " " + "leftSection"
}, /*#__PURE__*/React__default.createElement(uiCore.SingleSelectField, {
  label: i18n.t('Period type'),
  onChange: ({
    selected
  }) => onSelectPeriodType(selected),
  dense: true,
  selected: currentPeriodType,
  className: "filterElement"
}, getFixedPeriodsOptions().map(option => /*#__PURE__*/React__default.createElement(uiCore.SingleSelectOption, {
  key: option.id,
  value: option.id,
  label: option.getName()
})))), /*#__PURE__*/React__default.createElement("div", {
  className: "jsx-".concat(_defaultExport$b.__hash) + " " + "rightSection"
}, /*#__PURE__*/React__default.createElement(uiCore.InputField, {
  label: i18n.t('Year'),
  className: "filterElement",
  type: "number",
  placeholder: i18n.t('Select year'),
  value: currentYear,
  onChange: ({
    value
  }) => onSelectYear(value),
  dense: true
})), /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$b.__hash
}, _defaultExport$b));

FixedPeriodFilter.propTypes = {
  currentPeriodType: PropTypes.object.isRequired,
  currentYear: PropTypes.string.isRequired,
  onSelectPeriodType: PropTypes.func.isRequired,
  onSelectYear: PropTypes.func.isRequired
};

const DAYS = 'Days';
const WEEKS = 'Weeks';
const BIWEEKS = 'BiWeeks';
const MONTHS = 'Months';
const BIMONTHS = 'BiMonths';
const QUARTERS = 'Quarters';
const SIXMONTHS = 'SixMonths';
const FINACIALYEARS = 'FinancialYears';
const YEARS = 'Years';

const daysPeriodType = () => [{
  id: 'TODAY',
  getName: () => i18n.t('Today')
}, {
  id: 'YESTERDAY',
  getName: () => i18n.t('Yesterday')
}, {
  id: 'LAST_3_DAYS',
  getName: () => i18n.t('Last 3 days')
}, {
  id: 'LAST_7_DAYS',
  getName: () => i18n.t('Last 7 days')
}, {
  id: 'LAST_14_DAYS',
  getName: () => i18n.t('Last 14 days')
}];

const weeksPeriodType = () => [{
  id: 'THIS_WEEK',
  getName: () => i18n.t('This week')
}, {
  id: 'LAST_WEEK',
  getName: () => i18n.t('Last week')
}, {
  id: 'LAST_4_WEEKS',
  getName: () => i18n.t('Last 4 weeks')
}, {
  id: 'LAST_12_WEEKS',
  getName: () => i18n.t('Last 12 weeks')
}, {
  id: 'LAST_52_WEEKS',
  getName: () => i18n.t('Last 52 weeks')
}, {
  id: 'WEEKS_THIS_YEAR',
  getName: () => i18n.t('Weeks this year')
}];

const biWeeksPeriodType = () => [{
  id: 'THIS_BIWEEK',
  getName: () => i18n.t('This bi-week')
}, {
  id: 'LAST_BIWEEK',
  getName: () => i18n.t('Last bi-week')
}, {
  id: 'LAST_4_BIWEEKS',
  getName: () => i18n.t('Last 4 bi-weeks')
}];

const monthsPeriodType = () => [{
  id: 'THIS_MONTH',
  getName: () => i18n.t('This month')
}, {
  id: 'LAST_MONTH',
  getName: () => i18n.t('Last month')
}, {
  id: 'LAST_3_MONTHS',
  getName: () => i18n.t('Last 3 months')
}, {
  id: 'LAST_6_MONTHS',
  getName: () => i18n.t('Last 6 months')
}, {
  id: 'LAST_12_MONTHS',
  getName: () => i18n.t('Last 12 months')
}, {
  id: 'MONTHS_THIS_YEAR',
  getName: () => i18n.t('Months this year')
}];

const biMonthsPeriodType = () => [{
  id: 'THIS_BIMONTH',
  getName: () => i18n.t('This bi-month')
}, {
  id: 'LAST_BIMONTH',
  getName: () => i18n.t('Last bi-month')
}, {
  id: 'LAST_6_BIMONTHS',
  getName: () => i18n.t('Last 6 bi-months')
}, {
  id: 'BIMONTHS_THIS_YEAR',
  getName: () => i18n.t('Bi-months this year')
}];

const quartersPeriodType = () => [{
  id: 'THIS_QUARTER',
  getName: () => i18n.t('This quarter')
}, {
  id: 'LAST_QUARTER',
  getName: () => i18n.t('Last quarter')
}, {
  id: 'LAST_4_QUARTERS',
  getName: () => i18n.t('Last 4 quarters')
}, {
  id: 'QUARTERS_THIS_YEAR',
  getName: () => i18n.t('Quarters this year')
}];

const sixMonthsPeriodType = () => [{
  id: 'THIS_SIX_MONTH',
  getName: () => i18n.t('This six-month')
}, {
  id: 'LAST_SIX_MONTH',
  getName: () => i18n.t('Last six-month')
}, {
  id: 'LAST_2_SIXMONTHS',
  getName: () => i18n.t('Last 2 six-month')
}];

const financialYearsPeriodType = () => [{
  id: 'THIS_FINANCIAL_YEAR',
  getName: () => i18n.t('This financial year')
}, {
  id: 'LAST_FINANCIAL_YEAR',
  getName: () => i18n.t('Last financial year')
}, {
  id: 'LAST_5_FINANCIAL_YEARS',
  getName: () => i18n.t('Last 5 financial years')
}];

const yearsPeriodType = () => [{
  id: 'THIS_YEAR',
  getName: () => i18n.t('This year')
}, {
  id: 'LAST_YEAR',
  getName: () => i18n.t('Last year')
}, {
  id: 'LAST_5_YEARS',
  getName: () => i18n.t('Last 5 years')
}];

const options$1 = [{
  id: DAYS,
  getPeriods: daysPeriodType,
  getName: () => i18n.t('Days')
}, {
  id: WEEKS,
  getPeriods: weeksPeriodType,
  getName: () => i18n.t('Weeks')
}, {
  id: BIWEEKS,
  getPeriods: biWeeksPeriodType,
  getName: () => i18n.t('Bi-weeks')
}, {
  id: MONTHS,
  getPeriods: monthsPeriodType,
  getName: () => i18n.t('Months')
}, {
  id: BIMONTHS,
  getPeriods: biMonthsPeriodType,
  getName: () => i18n.t('Bi-months')
}, {
  id: QUARTERS,
  getPeriods: quartersPeriodType,
  getName: () => i18n.t('Quarters')
}, {
  id: SIXMONTHS,
  getPeriods: sixMonthsPeriodType,
  getName: () => i18n.t('Six-months')
}, {
  id: FINACIALYEARS,
  getPeriods: financialYearsPeriodType,
  getName: () => i18n.t('Financial Years')
}, {
  id: YEARS,
  getPeriods: yearsPeriodType,
  getName: () => i18n.t('Years')
}];
const getRelativePeriodsOptionsById = id => options$1.find(option => option.id === id);
const getRelativePeriodsOptions = () => options$1;

const RelativePeriodFilter = ({
  currentFilter,
  onSelectFilter
}) => /*#__PURE__*/React__default.createElement("div", {
  className: "jsx-".concat(_defaultExport$b.__hash) + " " + "leftSection"
}, /*#__PURE__*/React__default.createElement(uiCore.SingleSelectField, {
  label: i18n.t('Period type'),
  onChange: ({
    selected
  }) => onSelectFilter(selected),
  dense: true,
  selected: currentFilter,
  className: "filterElement"
}, getRelativePeriodsOptions().map(option => /*#__PURE__*/React__default.createElement(uiCore.SingleSelectOption, {
  key: option.id,
  value: option.id,
  label: option.getName()
}))), /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: _defaultExport$b.__hash
}, _defaultExport$b));

RelativePeriodFilter.propTypes = {
  currentFilter: PropTypes.object.isRequired,
  onSelectFilter: PropTypes.func.isRequired
};

const _defaultExport$c = [".filterContainer.jsx-901925928{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:".concat(uiCore.spacers.dp12, ";margin-top:").concat(uiCore.spacers.dp8, ";}"), ".emptySelection.jsx-901925928{text-align:center;font-size:14px;line-height:16px;margin:".concat(uiCore.spacers.dp24, " 0 0;color:").concat(uiCore.colors.grey700, ";}")];
_defaultExport$c.__hash = "901925928";

const _defaultExport$d = [".wrapper.jsx-911965247:last-child{margin-bottom:".concat(uiCore.spacers.dp4, ";}"), ".chip.jsx-911965247{display:inline-block;background:".concat(uiCore.colors.grey200, ";font-size:14px;line-height:16px;padding:2px ").concat(uiCore.spacers.dp8, " 2px ").concat(uiCore.spacers.dp4, ";margin-top:").concat(uiCore.spacers.dp4, ";margin-left:").concat(uiCore.spacers.dp8, ";border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"), ".chip.jsx-911965247:hover{background:".concat(uiCore.colors.grey300, ";}"), ".chip.highlighted.jsx-911965247{background:".concat(uiCore.theme.secondary800, ";color:").concat(uiCore.colors.white, ";}"), ".chip.highlighted.jsx-911965247 .icon path{fill:".concat(uiCore.colors.white, ";}"), ".chip.disabled.jsx-911965247{opacity:0.3;cursor:not-allowed;}", ".icon.jsx-911965247,.label.jsx-911965247{line-height:18px;}", ".icon.jsx-911965247{margin-right:".concat(uiCore.spacers.dp4, ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:text-bottom;}"), ".label.jsx-911965247{font-size:14px;}"];
_defaultExport$d.__hash = "911965247";

const DOUBLE_CLICK_MAX_DELAY = 500;
const TransferOption = ({
  disabled,
  label,
  highlighted,
  onClick: _onClick,
  onDoubleClick,
  value,
  icon
}) => {
  const doubleClickTimeout = React.useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    "data-value": value,
    className: "jsx-".concat(_defaultExport$d.__hash) + " " + "wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: event => {
      if (disabled) return;
      const option = {
        label,
        value
      };

      if (doubleClickTimeout.current) {
        clearTimeout(doubleClickTimeout.current);
        doubleClickTimeout.current = null;
        onDoubleClick({
          option
        }, event);
      } else {
        doubleClickTimeout.current = setTimeout(() => {
          clearTimeout(doubleClickTimeout.current);
          doubleClickTimeout.current = null;
        }, DOUBLE_CLICK_MAX_DELAY);

        _onClick({
          option
        }, event);
      }
    },
    className: "jsx-".concat(_defaultExport$d.__hash) + " " + (cx('chip', {
      highlighted,
      disabled
    }) || "")
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "jsx-".concat(_defaultExport$d.__hash) + " " + "icon"
  }, icon), /*#__PURE__*/React__default.createElement("span", {
    className: "jsx-".concat(_defaultExport$d.__hash) + " " + "label"
  }, label)), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$d.__hash
  }, _defaultExport$d));
};
TransferOption.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  disabled: propTypes.bool,
  highlighted: propTypes.bool,
  icon: propTypes.node,
  onClick: propTypes.func,
  onDoubleClick: propTypes.func
};

var PeriodIcon$1 = /*#__PURE__*/React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#6E7A8A",
  d: "M8,4 C10.209139,4 12,5.790861 12,8 C12,10.209139 10.209139,12 8,12 C5.790861,12 4,10.209139 4,8 C4,5.790861 5.790861,4 8,4 Z M8,5 C6.34314575,5 5,6.34314575 5,8 C5,9.65685425 6.34314575,11 8,11 C9.65685425,11 11,9.65685425 11,8 C11,6.34314575 9.65685425,5 8,5 Z M8.5,6 L8.5,7.5 L9.5,7.5 L9.5,8.5 L7.5,8.5 L7.5,6 L8.5,6 Z"
}));

const TRANSFER_OPTIONS_WIDTH = '420px';
const TRANSFER_SELECTED_WIDTH = '298px';
const TRANSFER_HEIGHT = '512px';

const defaultRelativePeriodType = getRelativePeriodsOptionsById(MONTHS);
const defaultFixedPeriodType = getFixedPeriodsOptionsById(MONTHLY);
const defaultFixedPeriodYear = new Date().getFullYear();

const fixedPeriodConfig = year => ({
  offset: year - defaultFixedPeriodYear,
  filterFuturePeriods: false,
  reversePeriods: false
});

class PeriodSelector extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      allPeriods: defaultRelativePeriodType.getPeriods(),
      selectedPeriods: [],
      isRelative: true,
      relativeFilter: {
        periodType: {
          label: defaultRelativePeriodType.getName(),
          value: defaultRelativePeriodType.id
        }
      },
      fixedFilter: {
        periodType: {
          label: defaultFixedPeriodType.getName(),
          value: defaultFixedPeriodType.id
        },
        year: defaultFixedPeriodYear.toString()
      }
    });

    _defineProperty(this, "onIsRelativeClick", isRelative => {
      if (this.state.isRelative !== isRelative) {
        this.setState({
          isRelative
        });
        this.setState({
          allPeriods: isRelative ? getRelativePeriodsOptionsById(this.state.relativeFilter.periodType.value).getPeriods() : getFixedPeriodsOptionsById(this.state.fixedFilter.periodType.value).getPeriods(fixedPeriodConfig(Number(this.state.fixedFilter.year)))
        });
      }
    });

    _defineProperty(this, "renderHeader", () => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(uiCore.TabBar, null, /*#__PURE__*/React__default.createElement(uiCore.Tab, {
      selected: this.state.isRelative,
      onClick: () => this.onIsRelativeClick(true)
    }, i18n.t('Relative periods')), /*#__PURE__*/React__default.createElement(uiCore.Tab, {
      selected: !this.state.isRelative,
      onClick: () => this.onIsRelativeClick(false)
    }, i18n.t('Fixed periods'))), /*#__PURE__*/React__default.createElement("div", {
      className: "jsx-".concat(_defaultExport$c.__hash) + " " + "filterContainer"
    }, this.state.isRelative ? /*#__PURE__*/React__default.createElement(RelativePeriodFilter, {
      currentFilter: this.state.relativeFilter.periodType,
      onSelectFilter: filter => {
        this.setState({
          relativeFilter: {
            periodType: filter
          }
        });
        this.setState({
          allPeriods: getRelativePeriodsOptionsById(filter.value).getPeriods()
        });
      }
    }) : /*#__PURE__*/React__default.createElement(FixedPeriodFilter, {
      currentPeriodType: this.state.fixedFilter.periodType,
      currentYear: this.state.fixedFilter.year,
      onSelectPeriodType: periodType => {
        this.onSelectFixedPeriods({
          periodType,
          year: this.state.fixedFilter.year
        });
      },
      onSelectYear: year => {
        this.onSelectFixedPeriods({
          periodType: this.state.fixedFilter.periodType,
          year
        });
      }
    })), /*#__PURE__*/React__default.createElement(_JSXStyle, {
      id: _defaultExport$c.__hash
    }, _defaultExport$c)));

    _defineProperty(this, "onSelectFixedPeriods", fixedFilter => {
      this.setState({
        fixedFilter,
        allPeriods: getFixedPeriodsOptionsById(fixedFilter.periodType.value).getPeriods(fixedPeriodConfig(Number(fixedFilter.year)))
      });
    });

    _defineProperty(this, "renderEmptySelection", () => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("p", {
      className: "jsx-".concat(_defaultExport$c.__hash) + " " + "emptySelection"
    }, i18n.t('No periods selected')), /*#__PURE__*/React__default.createElement(_JSXStyle, {
      id: _defaultExport$c.__hash
    }, _defaultExport$c)));

    _defineProperty(this, "render", () => /*#__PURE__*/React__default.createElement(uiCore.Transfer, {
      onChange: ({
        selected
      }) => {
        this.setState({
          selectedPeriods: selected
        });
        this.props.onSelect(selected);
      },
      selected: this.state.selectedPeriods,
      leftHeader: this.renderHeader(),
      enableOrderChange: true,
      height: TRANSFER_HEIGHT,
      optionsWidth: TRANSFER_OPTIONS_WIDTH,
      selectedWidth: TRANSFER_SELECTED_WIDTH,
      selectedEmptyComponent: this.renderEmptySelection(),
      rightFooter: this.props.rightFooter // TODO: Add rightHeader "Selected Periods" once the Transfer component supports this (https://github.com/dhis2/ui-core/issues/885)

    }, this.state.allPeriods.map(item => /*#__PURE__*/React__default.createElement(TransferOption, {
      label: item.getName(),
      value: item.id,
      key: item.id,
      icon: PeriodIcon$1
    }))));

    this.state.selectedPeriods = this.props.initialSelectedPeriods.map(item => ({
      label: item.name,
      value: item.id,
      key: item.id
    }));
  }

}

PeriodSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
  initialSelectedPeriods: PropTypes.arrayOf(PropTypes.object),
  rightFooter: PropTypes.node
};
PeriodSelector.defaultProps = {
  initialSelectedPeriods: []
};

const PeriodDimension = ({
  onSelect,
  selectedPeriods,
  rightFooter
}) => {
  const selectPeriods = periods => {
    const formattedPeriods = periods.map(period => ({
      id: period.value,
      name: period.label
    }));
    onSelect({
      dimensionId: DIMENSION_ID_PERIOD,
      items: formattedPeriods
    });
  };

  return /*#__PURE__*/React__default.createElement(PeriodSelector, {
    onSelect: selectPeriods,
    initialSelectedPeriods: selectedPeriods,
    rightFooter: rightFooter
  });
};
PeriodDimension.propTypes = {
  onSelect: PropTypes.func.isRequired,
  rightFooter: PropTypes.node,
  selectedPeriods: PropTypes.array
};
PeriodDimension.defaultProps = {
  selectedPeriods: []
};

/**
 * Fetch organisation units
 * @returns {Promise<T | never>}
 */

const apiFetchOrganisationUnits = (d2, displayNameProperty) => {
  const fields = ['id', 'path', "".concat(displayNameProperty, "~rename(displayName)"), 'children::isNotEmpty'];
  return d2.models.organisationUnits.list({
    paging: false,
    level: 1,
    fields: fields.join(','),
    userDataViewFallback: true
  });
};
/**
 * Fetch organisation unit groups
 * @returns {*}
 */

const apiFetchOrganisationUnitGroups = (d2, displayNameProperty) => {
  const endPoint = '/organisationUnitGroups';
  const fields = ['id', "".concat(displayNameProperty, "~rename(displayName)"), 'name'];
  const url = "".concat(endPoint, "?paging=false&fields=").concat(fields.join(','));
  return d2.Api.getApi().get(url).then(({
    organisationUnitGroups
  }) => organisationUnitGroups).catch(onError);
};
/**
 * Fetch organisation unit levels
 * @returns {*}
 */

const apiFetchOrganisationUnitLevels = d2 => {
  const endPoint = '/organisationUnitLevels';
  const fields = ['id', 'displayName', 'name', 'level'];
  const url = "".concat(endPoint, "?paging=false&fields=").concat(fields.join(','));
  return d2.Api.getApi().get(url).then(({
    organisationUnitLevels
  }) => organisationUnitLevels).catch(onError);
};

const LEVEL_ID_PREFIX = 'LEVEL';
const GROUP_ID_PREFIX = 'OU_GROUP';

const hasGroupPrefix = id => id.substr(0, GROUP_ID_PREFIX.length) === GROUP_ID_PREFIX;

const hasLevelPrefix = id => id.substr(0, LEVEL_ID_PREFIX.length) === LEVEL_ID_PREFIX;

const stripLevelPrefix = id => hasLevelPrefix(id) ? id.substr(LEVEL_ID_PREFIX.length + 1) : id;

const stripGroupPrefix = id => hasGroupPrefix(id) ? id.substr(GROUP_ID_PREFIX.length + 1) : id;

const removePrefix = id => stripGroupPrefix(stripLevelPrefix(id));

const ouIdHelper = Object.freeze({
  addLevelPrefix: id => "".concat(LEVEL_ID_PREFIX, "-").concat(removePrefix(id)),
  addGroupPrefix: id => "".concat(GROUP_ID_PREFIX, "-").concat(removePrefix(id)),
  removePrefix,
  hasGroupPrefix,
  hasLevelPrefix
});

const _defaultExport$e = [".loader.jsx-3308394077{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100px;}"];
_defaultExport$e.__hash = "3308394077";

const defaultState = {
  root: undefined,
  roots: undefined,
  // use "selected" property for cloning org units while user org unit(s) is (are) selected
  selected: [],
  ouLevels: [],
  ouGroups: [],
  showOrgUnitsTree: true
};

class OrgUnitDimension extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showOrgUnitsTree", () => {
      this.setState({
        showOrgUnitsTree: true
      });
    });

    _defineProperty(this, "hideOrgUnitsTree", () => {
      this.setState({
        showOrgUnitsTree: false
      });
    });

    _defineProperty(this, "getUserOrgUnitsFromIds", ids => {
      return d2UiOrgUnitDialog.userOrgUnits.filter(ou => ids.includes(ou.id));
    });

    _defineProperty(this, "onLevelChange", event => {
      const levelIds = event.target.value.filter(id => !!id);
      this.props.onSelect({
        dimensionId: DIMENSION_ID_ORGUNIT,
        items: [...this.props.ouItems.filter(ou => !ouIdHelper.hasLevelPrefix(ou.id)), ...levelIds.map(id => {
          const levelOu = this.state.ouLevels.find(ou => ou.id === id);
          return _objectSpread2({}, levelOu, {
            id: ouIdHelper.addLevelPrefix(levelOu.id)
          });
        })]
      });
    });

    _defineProperty(this, "onGroupChange", event => {
      const groupIds = event.target.value.filter(id => !!id);
      this.props.onSelect({
        dimensionId: DIMENSION_ID_ORGUNIT,
        items: [...this.props.ouItems.filter(ou => !ouIdHelper.hasGroupPrefix(ou.id)), ...groupIds.map(id => {
          const groupOu = this.state.ouGroups.find(ou => ou.id === id);
          return _objectSpread2({}, groupOu, {
            id: ouIdHelper.addGroupPrefix(id)
          });
        })]
      });
    });

    _defineProperty(this, "onDeselectAllClick", () => this.props.onDeselect({
      dimensionId: DIMENSION_ID_ORGUNIT,
      itemIdsToRemove: this.props.ouItems.map(ou => ou.id)
    }));

    _defineProperty(this, "loadOrgUnitTree", (d2, displayNameProperty) => {
      apiFetchOrganisationUnits(d2, displayNameProperty).then(rootLevel => rootLevel.toArray()).then(roots => {
        this.setState({
          roots,
          root: roots[0]
        });
      });
    });

    _defineProperty(this, "loadOrgUnitGroups", (d2, displayNameProperty) => {
      apiFetchOrganisationUnitGroups(d2, displayNameProperty).then(organisationUnitGroups => this.setState({
        ouGroups: organisationUnitGroups
      }));
    });

    _defineProperty(this, "loadOrgUnitLevels", d2 => {
      apiFetchOrganisationUnitLevels(d2).then(organisationUnitLevels => this.setState({
        ouLevels: sortBy(organisationUnitLevels, ['level'])
      }));
    });

    _defineProperty(this, "handleOrgUnitClick", (event, orgUnit) => {
      const selected = this.props.ouItems;

      if (selected.some(ou => ou.path === orgUnit.path)) {
        this.props.onDeselect({
          dimensionId: DIMENSION_ID_ORGUNIT,
          itemIdsToRemove: [orgUnit.id]
        });
      } else {
        this.props.onSelect({
          dimensionId: DIMENSION_ID_ORGUNIT,
          items: [...selected, _objectSpread2({}, orgUnit, {
            name: orgUnit.name || orgUnit.displayName
          })]
        });
      }
    });

    _defineProperty(this, "handleUserOrgUnitClick", (event, checked) => {
      if (checked) {
        if (!this.state.selected.length) {
          this.setState({
            selected: this.props.ouItems.slice()
          });
        }

        this.props.onSelect({
          dimensionId: DIMENSION_ID_ORGUNIT,
          items: [...this.props.ouItems.filter(ou => this.userOrgUnitIds.includes(ou.id)), d2UiOrgUnitDialog.userOrgUnits.find(ou => ou.id === event.target.name)]
        });
      } else {
        if (this.props.ouItems.length === 1 && this.state.selected.length > 0) {
          this.props.onSelect({
            dimensionId: DIMENSION_ID_ORGUNIT,
            items: this.state.selected
          });
        } else {
          this.props.onDeselect({
            dimensionId: DIMENSION_ID_ORGUNIT,
            itemIdsToRemove: [event.target.name]
          });
        }
      }
    });

    _defineProperty(this, "handleMultipleOrgUnitsSelect", orgUnits => {
      const selected = this.props.ouItems;
      this.props.onSelect({
        dimensionId: DIMENSION_ID_ORGUNIT,
        items: [...selected, ...orgUnits.reduce((obj, ou) => {
          // avoid duplicates when clicking "Select children" multiple times
          if (!selected.find(i => i.id === ou.id)) {
            obj.push(_objectSpread2({}, ou, {
              name: ou.name || ou.displayName
            }));
          }

          return obj;
        }, [])]
      });
    });

    _defineProperty(this, "render", () => {
      const ids = this.props.ouItems.map(ou => ou.id);
      const selected = this.props.ouItems.filter(ou => !this.userOrgUnitIds.includes(ou.id) && !ouIdHelper.hasLevelPrefix(ou.id) && !ouIdHelper.hasGroupPrefix(ou.id));
      const userOrgUnits = this.getUserOrgUnitsFromIds(ids);
      const level = ids.filter(ouIdHelper.hasLevelPrefix).map(ouIdHelper.removePrefix);
      const group = ids.filter(ouIdHelper.hasGroupPrefix).map(ouIdHelper.removePrefix);
      return /*#__PURE__*/React__default.createElement(React.Fragment, null, this.state.root && this.state.showOrgUnitsTree && /*#__PURE__*/React__default.createElement(d2UiOrgUnitDialog.OrgUnitSelector, {
        d2: this.props.d2,
        root: this.state.root,
        roots: this.state.roots,
        selected: selected,
        userOrgUnits: userOrgUnits,
        level: level,
        group: group,
        levelOptions: this.state.ouLevels,
        groupOptions: this.state.ouGroups,
        onLevelChange: this.onLevelChange,
        onGroupChange: this.onGroupChange,
        onDeselectAllClick: this.onDeselectAllClick,
        handleUserOrgUnitClick: this.handleUserOrgUnitClick,
        handleOrgUnitClick: this.handleOrgUnitClick,
        handleMultipleOrgUnitsSelect: this.handleMultipleOrgUnitsSelect,
        checkboxColor: "secondary",
        deselectAllTooltipFontColor: uiCore.colors.grey900,
        deselectAllTooltipBackgroundColor: uiCore.colors.grey300,
        displayNameProperty: this.props.displayNameProperty,
        isUserDataViewFallback: true
      }), !this.state.root && /*#__PURE__*/React__default.createElement("div", {
        className: "jsx-".concat(_defaultExport$e.__hash) + " " + "loader"
      }, /*#__PURE__*/React__default.createElement(uiCore.CircularLoader, null)), /*#__PURE__*/React__default.createElement(_JSXStyle, {
        id: _defaultExport$e.__hash
      }, _defaultExport$e));
    });

    this.state = defaultState;
    this.userOrgUnitIds = d2UiOrgUnitDialog.userOrgUnits.map(ou => ou.id);
    this.loadOrgUnitTree(props.d2, props.displayNameProperty);
    this.loadOrgUnitGroups(props.d2, props.displayNameProperty);
    this.loadOrgUnitLevels(props.d2);
  }

  componentDidUpdate(prevProps) {
    const previousId = prevProps.current ? prevProps.current.id : null;
    const currentId = this.props.current ? this.props.current.id : null; // remount org units selector component to ensure
    // only selected org units are expanded

    if (previousId !== currentId) {
      this.hideOrgUnitsTree();
      setTimeout(this.showOrgUnitsTree, 0);
    }
  }

}

OrgUnitDimension.propTypes = {
  current: PropTypes.object,
  d2: PropTypes.object,
  displayNameProperty: PropTypes.string,
  ouItems: PropTypes.array,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func
};

var GenericIcon = /*#__PURE__*/React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#6E7A8A",
  d: "M11,5 L11,11 L5,11 L5,5 L11,5 Z M10,6 L6,6 L6,10 L10,10 L10,6 Z"
}));

const ItemSelector$1 = ({
  allItems,
  onSelect,
  initialSelectedItems,
  leftHeader,
  rightFooter
}) => {
  const [selectedItems, setSelectedItems] = React.useState(initialSelectedItems.map(item => ({
    label: item.name,
    value: item.id,
    key: item.id
  })));

  const renderEmptySelection = () => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("p", {
    className: "jsx-".concat(_defaultExport$c.__hash) + " " + "emptySelection"
  }, i18n.t('No items selected')), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: _defaultExport$c.__hash
  }, _defaultExport$c));

  return /*#__PURE__*/React__default.createElement(uiCore.Transfer, {
    onChange: ({
      selected
    }) => {
      setSelectedItems(selected);
      onSelect(selected);
    },
    selected: selectedItems,
    leftHeader: leftHeader,
    filterable: true,
    enableOrderChange: true,
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: renderEmptySelection(),
    rightFooter: rightFooter // TODO: Add a filter placeholer once the Transfer component supports this (https://github.com/dhis2/ui/issues/131)
    // TODO: Add rightHeader "Selected Periods" once the Transfer component supports this (https://github.com/dhis2/ui-core/issues/885)

  }, allItems.map(item => /*#__PURE__*/React__default.createElement(TransferOption, {
    label: item.name,
    value: item.id,
    key: item.id,
    icon: GenericIcon
  })));
};

ItemSelector$1.propTypes = {
  allItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.object),
  leftHeader: PropTypes.node,
  rightFooter: PropTypes.node
};
ItemSelector$1.defaultProps = {
  initialSelectedItems: []
};

const DynamicDimension = ({
  context,
  dimensionId,
  onSelect,
  selectedItems,
  rightFooter
}) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if (!items || !items.length) {
      getItems();
    }
  }, []);

  const getItems = async () => setItems((await apiFetchItemsByDimension(context, dimensionId))); // TODO: This needs to be refactored to use a loading spinner once Transfer supports it: https://jira.dhis2.org/browse/TECH-379


  const selectItems = items => {
    const formattedItems = items.map(item => ({
      id: item.value,
      name: item.label
    }));
    onSelect({
      dimensionId: dimensionId,
      items: formattedItems
    });
  };

  return /*#__PURE__*/React__default.createElement(ItemSelector$1, {
    onSelect: selectItems,
    allItems: items,
    initialSelectedItems: selectedItems,
    rightFooter: rightFooter // TODO: Pass in a func prop to fetch items, instead of fetching them on this level, to enable the loading spinner?

  });
};
DynamicDimension.propTypes = {
  context: PropTypes.object.isRequired,
  dimensionId: PropTypes.string.isRequired,
  selectedItems: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  rightFooter: PropTypes.node
};
DynamicDimension.defaultProps = {
  selectedItems: [],
  onSelect: Function.prototype
};

const styles = {
  label: {
    display: 'flex',
    outline: 'none'
  }
};

class DimensionLabel extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onLabelClick", () => {
      if (!this.props.isDeactivated && !getPredefinedDimensionProp(this.props.id, DIMENSION_PROP_NO_ITEMS)) {
        this.props.onClick(this.props.id);
      }
    });

    _defineProperty(this, "onKeyPress", event => {
      if (event.key === 'Enter' && event.ctrlKey === false) {
        this.onLabelClick();
      }
    });
  }

  render() {
    return /*#__PURE__*/React__default.createElement("div", {
      "data-test": "dimension-id-".concat(this.props.id),
      className: "label",
      onClick: this.onLabelClick,
      onKeyPress: this.onKeyPress,
      tabIndex: 0,
      style: styles.label
    }, this.props.children);
  }

}

_defineProperty(DimensionLabel, "propTypes", {
  id: PropTypes.string.isRequired,
  isDeactivated: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.array
});

const styles$1 = {
  toolTip: {
    color: uiCore.colors.white,
    backgroundColor: '#4a4a4a',
    boxShadow: 'none',
    width: '160px',
    borderRadius: '3px',
    position: 'relative',
    top: '5px',
    fontSize: '12px',
    padding: '7px 9px'
  },
  recommendedIcon: {
    backgroundColor: uiCore.theme.secondary300,
    height: '8px',
    width: '8px',
    borderRadius: '4px',
    marginLeft: '5px',
    display: 'inline-block',
    cursor: 'pointer'
  }
};

class RecommendedIcon extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      anchorEl: null
    });

    _defineProperty(this, "onMouseOver", event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(this, "onMouseExit", () => {
      this.setState({
        anchorEl: null
      });
    });

    _defineProperty(this, "showTooltip", () => /*#__PURE__*/React__default.createElement(Popper, {
      anchorEl: this.state.anchorEl,
      open: Boolean(this.state.anchorEl),
      placement: "bottom"
    }, /*#__PURE__*/React__default.createElement(Paper, {
      style: styles$1.toolTip
    }, i18n.t('Dimension recommended with selected data'))));
  }

  render() {
    const TooltipOnHover = this.state.anchorEl ? this.showTooltip() : null;
    return this.props.isRecommended ? /*#__PURE__*/React__default.createElement("div", {
      style: styles$1.recommendedIcon,
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseExit
    }, TooltipOnHover) : null;
  }

}
RecommendedIcon.propTypes = {
  isRecommended: PropTypes.bool.isRequired
};

const MoreHorizontalIcon = ({
  style
}) => {
  return /*#__PURE__*/React__default.createElement("svg", {
    style: _objectSpread2({}, style),
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};

MoreHorizontalIcon.propTypes = {
  style: PropTypes.array
};

const OptionsButton = ({
  style,
  onClick
}) => /*#__PURE__*/React__default.createElement(IconButton, {
  style: style,
  onClick: onClick
}, /*#__PURE__*/React__default.createElement(MoreHorizontalIcon, null));
OptionsButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func
};

const DynamicDimensionIcon = () => {
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Exp",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Artboard",
    transform: "translate(-80.000000, -9.000000)"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "icon_dimension_new",
    transform: "translate(80.000000, 9.000000)"
  }, /*#__PURE__*/React__default.createElement("rect", {
    id: "frame",
    x: "0",
    y: "0",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React__default.createElement("g", {
    id: "module",
    transform: "translate(4.000000, 4.000000)",
    stroke: "#000000",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0.33209728,1.1742111 L3.16308174,0.0641666694 C3.37911767,-0.0213888898 3.61963794,-0.0213888898 3.83567387,0.0641666694 L6.66665833,1.1742111 C6.87300668,1.26220739 7.00497003,1.467 6.99984343,1.69127776 L6.99984343,5.30887771 C7.00517859,5.53285411 6.87376309,5.73756106 6.66790272,5.82594437 L3.83691826,6.93629991 C3.62076407,7.02123336 3.38048032,7.02123336 3.16432613,6.93629991 L0.333341668,5.82594437 C0.126993317,5.73794808 -0.00497002591,5.53315547 0.000156574133,5.30887771 L0.000156574133,1.69127776 C-0.00517858533,1.46730136 0.126236906,1.26259441 0.33209728,1.1742111 Z",
    id: "Shape"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M3.5,2.72795833 L0.322,1.48195833",
    id: "Shape"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M3.5,2.72795833 L6.678,1.48195833",
    id: "Shape"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M3.5,6.78125 L3.5,2.72795833",
    id: "Shape"
  }))))));
};

const styles$2 = {
  labelWrapper: {
    padding: '2px 5px 2px 0'
  },
  text: {
    color: uiCore.colors.grey900,
    userSelect: 'none',
    cursor: 'pointer',
    wordBreak: 'break-word',
    fontSize: '14px'
  },
  textDeactivated: {
    cursor: 'auto',
    color: uiCore.colors.grey500
  },
  item: {
    display: 'flex',
    minHeight: '24px',
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    borderRadius: '2px'
  },
  selected: {
    backgroundColor: uiCore.theme.secondary100,
    fontWeight: 500
  },
  fixedDimensionIcon: {
    paddingLeft: '6px',
    paddingBottom: '2px'
  },
  dynamicDimensionIcon: {
    paddingLeft: '9px',
    paddingRight: '9px'
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3px 8px 0 8px'
  },
  lockIcon: {
    fontSize: '14px',
    marginTop: '1px'
  },
  optionsWrapper: {
    position: 'relative',
    height: '24px',
    minWidth: '22px',
    left: '5px',
    alignSelf: 'start'
  },
  optionsButton: {
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '1px 0px 0px 0px'
  }
};

class DimensionItem extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      mouseOver: false
    });

    _defineProperty(this, "onOptionsClick", id => event => this.props.onOptionsClick(event, id));

    _defineProperty(this, "onMouseOver", () => {
      this.setState({
        mouseOver: true
      });
    });

    _defineProperty(this, "onMouseExit", () => {
      this.setState({
        mouseOver: false
      });
    });

    _defineProperty(this, "getDimensionIcon", () => {
      const Icon = getPredefinedDimensionProp(this.props.id, 'icon');
      return Icon ? /*#__PURE__*/React__default.createElement(Icon, {
        style: styles$2.fixedDimensionIcon
      }) : /*#__PURE__*/React__default.createElement(DynamicDimensionIcon, {
        style: styles$2.dynamicDimensionIcon
      });
    });

    _defineProperty(this, "getDimensionType", () => {
      const {
        id,
        name,
        isDeactivated
      } = this.props;
      return /*#__PURE__*/React__default.createElement("span", {
        "data-dimensionid": id,
        style: _objectSpread2({}, styles$2.text, {}, isDeactivated ? styles$2.textDeactivated : {})
      }, name);
    });
  }

  render() {
    const _this$props = this.props,
          {
      id,
      isDeactivated,
      isSelected,
      isRecommended,
      isLocked,
      onClick,
      onOptionsClick,
      innerRef,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["id", "isDeactivated", "isSelected", "isRecommended", "isLocked", "onClick", "onOptionsClick", "innerRef", "style"]);

    const Icon = this.getDimensionIcon();
    const Label = this.getDimensionType();
    const itemStyle = isSelected && !isDeactivated ? _objectSpread2({}, styles$2.item, {}, styles$2.selected) : styles$2.item;
    return /*#__PURE__*/React__default.createElement("li", _extends({
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseExit,
      ref: innerRef,
      style: Object.assign({}, itemStyle, style)
    }, rest), /*#__PURE__*/React__default.createElement(DimensionLabel, {
      id: id,
      isDeactivated: isDeactivated,
      onClick: onClick
    }, /*#__PURE__*/React__default.createElement("div", {
      style: styles$2.iconWrapper
    }, Icon), /*#__PURE__*/React__default.createElement("div", {
      style: styles$2.labelWrapper
    }, Label, /*#__PURE__*/React__default.createElement(RecommendedIcon, {
      isRecommended: isRecommended
    })), isLocked && /*#__PURE__*/React__default.createElement("div", {
      style: styles$2.iconWrapper
    }, /*#__PURE__*/React__default.createElement(LockIcon, {
      style: styles$2.lockIcon
    }))), onOptionsClick ? /*#__PURE__*/React__default.createElement("div", {
      style: styles$2.optionsWrapper
    }, this.state.mouseOver && !isDeactivated && !isLocked ? /*#__PURE__*/React__default.createElement(OptionsButton, {
      style: styles$2.optionsButton,
      onClick: this.onOptionsClick(id)
    }) : null) : null);
  }

}
DimensionItem.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  // XXX
  name: PropTypes.string.isRequired,
  innerRef: PropTypes.func,
  isDeactivated: PropTypes.bool,
  isLocked: PropTypes.bool,
  isRecommended: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onOptionsClick: PropTypes.func
};
DimensionItem.defaultProps = {
  isDeactivated: false,
  isRecommended: false,
  isSelected: false,
  isLocked: false,
  onClick: Function.prototype,
  innerRef: Function.prototype,
  style: {}
};

// Wrap the list in a div with position:relative (and flex:1 instead of on the list)
// On the list, set position:absolute, width:100%, height:100%

const styles$3 = {
  container: {
    position: 'relative',
    flex: '1 1 0%',
    minHeight: '30vh'
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    marginTop: '0px',
    padding: 0
  },
  list: {
    margin: 0,
    padding: 0
  },
  header: {
    textTransform: 'uppercase',
    fontSize: '11px',
    color: uiCore.colors.grey700,
    margin: '5px 0',
    letterSpacing: '0.3px'
  },
  section: {
    '&:not(:last-child)': {
      marginBottom: uiCore.spacers.dp24
    }
  }
};

class DimensionList extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "nameContainsFilterText", dimension => dimension.name.toLowerCase().includes(this.props.filterText.toLowerCase()));

    _defineProperty(this, "isDisabled", dimensionId => this.props.disabledDimension(dimensionId) || false);

    _defineProperty(this, "isRecommended", dimensionId => this.props.recommendedDimension(dimensionId) || false);

    _defineProperty(this, "isLocked", dimensionId => this.props.lockedDimension(dimensionId) || false);

    _defineProperty(this, "renderItem", dimension => /*#__PURE__*/React__default.createElement(DimensionItem, {
      id: dimension.id,
      key: dimension.id,
      name: dimension.name,
      isLocked: this.isLocked(dimension.id),
      isSelected: this.props.selectedIds.includes(dimension.id),
      isRecommended: this.isRecommended(dimension.id),
      isDeactivated: this.isDisabled(dimension.id),
      onClick: this.props.onDimensionClick,
      onOptionsClick: this.props.onDimensionOptionsClick,
      onDragStart: this.props.onDimensionDragStart
    }));

    _defineProperty(this, "getDimensionItemsByFilter", filter => this.props.dimensions.filter(filter).filter(this.nameContainsFilterText).map(this.renderItem));
  }

  render() {
    const {
      classes
    } = this.props;
    const fixedDimensions = this.getDimensionItemsByFilter(dimension => Object.values(getFixedDimensions()).some(fixedDim => fixedDim.id === dimension.id));
    const nonPredefinedDimensions = this.getDimensionItemsByFilter(dimension => !Object.values(getPredefinedDimensions()).some(predefDim => predefDim.id === dimension.id));
    return /*#__PURE__*/React__default.createElement("div", {
      className: classes.container
    }, /*#__PURE__*/React__default.createElement("div", {
      className: classes.wrapper
    }, /*#__PURE__*/React__default.createElement("div", {
      className: classes.section
    }, /*#__PURE__*/React__default.createElement("h3", {
      className: classes.header
    }, i18n.t('Main dimensions')), /*#__PURE__*/React__default.createElement("ul", {
      className: classes.list
    }, fixedDimensions)), /*#__PURE__*/React__default.createElement("div", {
      className: classes.section
    }, /*#__PURE__*/React__default.createElement("h3", {
      className: classes.header
    }, i18n.t('Your dimensions')), /*#__PURE__*/React__default.createElement("ul", {
      className: classes.list
    }, nonPredefinedDimensions))));
  }

}
DimensionList.propTypes = {
  dimensions: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  classes: PropTypes.object,
  disabledDimension: PropTypes.func,
  lockedDimension: PropTypes.func,
  recommendedDimension: PropTypes.func,
  selectedIds: PropTypes.array,
  onDimensionClick: PropTypes.func,
  onDimensionDragStart: PropTypes.func,
  onDimensionOptionsClick: PropTypes.func
};
DimensionList.defaultProps = {
  selectedIds: [],
  disabledDimension: Function.prototype,
  lockedDimension: Function.prototype,
  recommendedDimension: Function.prototype
};
var DimensionList$1 = styles$5.withStyles(styles$3)(DimensionList);

const styles$4 = {
  divContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: uiCore.colors.grey050,
    padding: '8px',
    overflow: 'hidden'
  },
  textField: {
    marginBottom: '6px',
    background: uiCore.colors.white,
    border: "1px solid ".concat(uiCore.colors.grey400),
    borderRadius: '5px'
  }
};

class DimensionsPanel extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      filterText: ''
    });

    _defineProperty(this, "onClearFilter", () => {
      this.setState({
        filterText: ''
      });
    });

    _defineProperty(this, "onFilterTextChange", filterText => {
      this.setState({
        filterText
      });
    });
  }

  render() {
    const {
      dimensions,
      selectedIds,
      disabledDimension,
      lockedDimension,
      recommendedDimension,
      onDimensionClick,
      onDimensionOptionsClick,
      onDimensionDragStart,
      style
    } = this.props;
    return /*#__PURE__*/React__default.createElement("div", {
      style: _objectSpread2({}, styles$4.divContainer, {}, style)
    }, /*#__PURE__*/React__default.createElement(Filter$o, {
      style: styles$4.textField,
      placeholder: i18n.t('Filter dimensions'),
      text: this.state.filterText,
      onChange: this.onFilterTextChange,
      onClear: this.onClearFilter,
      type: "search"
    }), /*#__PURE__*/React__default.createElement(DimensionList$1, {
      dimensions: dimensions,
      selectedIds: selectedIds,
      filterText: this.state.filterText,
      disabledDimension: disabledDimension,
      lockedDimension: lockedDimension,
      recommendedDimension: recommendedDimension,
      onDimensionOptionsClick: onDimensionOptionsClick,
      onDimensionClick: onDimensionClick,
      onDimensionDragStart: onDimensionDragStart
    }));
  }

}
DimensionsPanel.propTypes = {
  dimensions: PropTypes.array.isRequired,
  disabledDimension: PropTypes.func,
  lockedDimension: PropTypes.func,
  recommendedDimension: PropTypes.func,
  selectedIds: PropTypes.array,
  style: PropTypes.object,
  onDimensionClick: PropTypes.func,
  onDimensionDragStart: PropTypes.func,
  onDimensionOptionsClick: PropTypes.func
};
DimensionsPanel.defaultProps = {
  selectedIds: [],
  style: {},
  onDimensionClick: Function.prototype
};

// Axis
const AXIS = {
  defaultValue: [],
  isValid: axis => Array.isArray(axis)
}; // Axis ids

const AXIS_ID_COLUMNS = 'columns';
const AXIS_ID_ROWS = 'rows';
const AXIS_ID_FILTERS = 'filters';
const DEFAULT_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS];

var BarIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "#7B8998"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "1",
  y: "10",
  width: "13",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "1",
  y: "5",
  width: "10",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "1",
  y: "0",
  width: "5",
  height: "3"
}))));

var StackedBarIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "#7B8998"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "1",
  y: "10",
  width: "6",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "8",
  y: "10",
  width: "6",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "1",
  y: "5",
  width: "3",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "5",
  y: "5",
  width: "5",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "1",
  y: "0",
  width: "4",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "6",
  y: "0",
  width: "3",
  height: "3"
}))));

var ColumnIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "#7B8998"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "13",
  y: "8",
  width: "3",
  height: "7"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "8",
  y: "2",
  width: "3",
  height: "13"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "3",
  y: "4",
  width: "3",
  height: "11"
}))));

var StackedColumnIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "#7B8998"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "13",
  y: "8",
  width: "3",
  height: "7"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "13",
  y: "4",
  width: "3",
  height: "3"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "8",
  y: "9",
  width: "3",
  height: "6"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "8",
  y: "1",
  width: "3",
  height: "7"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "3",
  y: "13",
  width: "3",
  height: "2"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "3",
  y: "7",
  width: "3",
  height: "5"
}))));

var LineIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("mask", {
  id: "mask-2",
  fill: "white"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "16",
  height: "16"
})), /*#__PURE__*/React__default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("polyline", {
  stroke: "#7B8998",
  strokeWidth: "1.5",
  mask: "url(#mask-2)",
  points: "0 5 5 9 9 7 15 12"
}))));

var AreaIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("mask", {
  fill: "white"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "16",
  height: "16"
})), /*#__PURE__*/React__default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("polygon", {
  stroke: "#7B8998",
  strokeWidth: "1.5",
  fill: "#7B8998",
  mask: "url(#mask-2)",
  points: "3 5 7 9 10 7 15 12 15 13 3 13"
})));

var PieIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(-1.000000, 0.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M9,0 C11.86,0 14.5,1.52 15.93,4 C17.36,6.48 17.36,9.52 15.93,12 C14.5,14.48 11.86,16 9,16 C6.14,16 3.5,14.48 2.07,12 C0.64,9.52 0.64,6.48 2.07,4 C3.5,1.52 6.14,0 9,0 L9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 L9,0 Z",
  fillOpacity: "0.002",
  fill: "#455A64"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M9.25,0.253999142 L9.25,7.62589712 L16.0605377,4.80583684 C15.9597575,4.58208479 15.8426843,4.35299631 15.7134245,4.12488021 C14.3709859,1.79673487 11.9260373,0.33967375 9.25,0.253999142 Z",
  stroke: "#FFFFFF",
  strokeWidth: "0.5",
  fill: "#7B8998"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M16.2507321,5.26825168 L9.25,8.16706634 L9.25,15.7459734 C11.5677905,15.6712788 13.7388491,14.5610154 15.1515843,12.7179105 C16.7838303,10.5884861 17.1923733,7.7729977 16.2507321,5.26825168 Z",
  stroke: "#FFFFFF",
  strokeWidth: "0.5",
  fill: "#7B8998"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M8.75,15.7460009 L8.75,0.253999142 C6.07396269,0.33967375 3.62901411,1.79673487 2.28657547,4.12488021 C0.901141511,6.52759085 0.901141511,9.47240915 2.28657547,11.8751198 C3.62901411,14.2032651 6.07396269,15.6603262 8.75,15.7460009 Z",
  stroke: "#FFFFFF",
  strokeWidth: "0.5",
  fill: "#7B8998"
})), /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(-1.000000, 0.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M9,0 C11.86,0 14.5,1.52 15.93,4 C17.36,6.48 17.36,9.52 15.93,12 C14.5,14.48 11.86,16 9,16 C6.14,16 3.5,14.48 2.07,12 C0.64,9.52 0.64,6.48 2.07,4 C3.5,1.52 6.14,0 9,0 L9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 C9,8 9,8 9,8 L9,0 Z",
  fillOpacity: "0.002",
  fill: "#455A64"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M9.25,0.253999142 L9.25,7.87969351 L15.208572,12.6370174 C15.3964843,12.3885798 15.5650482,12.1347754 15.7134245,11.8751198 C17.0988585,9.47240915 17.0988585,6.52759085 15.7134245,4.12488021 C14.3709859,1.79673487 11.9260373,0.33967375 9.25,0.253999142 Z",
  stroke: "#FFFFFF",
  strokeWidth: "0.5",
  fill: "#7B8998"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M14.8955472,13.0269114 L9.08920592,8.3911285 L5.86513188,15.0901411 C6.48561254,15.3656722 7.15156976,15.5571176 7.84755483,15.6628368 C10.5003854,16.0659171 13.160928,15.0629335 14.8955472,13.0269114 Z",
  stroke: "#FFFFFF",
  strokeWidth: "0.5",
  fill: "#7B8998"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M5.41482695,14.8728263 L8.75,7.94297101 L8.75,0.253977185 C7.27404265,0.301055104 5.8471024,0.764373723 4.63088851,1.5965198 C2.34652789,3.15491836 1.06570164,5.81818129 1.26932408,8.58162875 C1.46659354,11.2588571 3.03960782,13.6359852 5.41482695,14.8728263 Z",
  stroke: "#FFFFFF",
  strokeWidth: "0.5",
  fill: "#7B8998"
}))));

var RadarIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("circle", {
  stroke: "#7B8998",
  cx: "8",
  cy: "8",
  r: "6"
}), /*#__PURE__*/React__default.createElement("circle", {
  stroke: "#7B8998",
  cx: "8",
  cy: "8",
  r: "3"
}), /*#__PURE__*/React__default.createElement("circle", {
  fill: "#7B8998",
  cx: "8",
  cy: "2",
  r: "2"
}), /*#__PURE__*/React__default.createElement("circle", {
  fill: "#7B8998",
  cx: "3",
  cy: "12",
  r: "2"
})));

var GaugeIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("mask", {
  fill: "white"
}, /*#__PURE__*/React__default.createElement("polygon", {
  points: "0 0 16 0 16 16 0 16"
}))), /*#__PURE__*/React__default.createElement("path", {
  d: "M15,12 C15,8.13400675 11.8659932,5 8,5 C4.13400675,5 1,8.13400675 1,12",
  stroke: "#7B8998"
}), /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(1.000000, 6.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M7,0 C9.14,0 11.13,1.14 12.2,3 C13.27,4.86 13.27,7.14 12.2,9 C11.13,10.86 9.14,12 7,12 C4.86,12 2.87,10.86 1.8,9 C0.73,7.14 0.73,4.86 1.8,3 C2.87,1.14 4.86,0 7,0 L7,3 C5.93,3 4.94,3.57 4.4,4.5 C3.86,5.43 3.86,6.57 4.4,7.5 C4.94,8.43 5.93,9 7,9 C8.07,9 9.06,8.43 9.6,7.5 C10.14,6.57 10.14,5.43 9.6,4.5 C9.06,3.57 8.07,3 7,3 L7,0 Z",
  fillOpacity: "0.002",
  fill: "#455A64"
}), /*#__PURE__*/React__default.createElement("path", {
  d: "M1,6 C1,3.86 2.14,1.87 4,0.8 C4.91,0.27 5.95,0 7,0 L7,3 C5.93,3 4.94,3.57 4.4,4.5 C4.14,4.96 4,5.47 4,6 L1,6 Z",
  fill: "#7B8998"
}))));

var YearOverYearLineIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("mask", {
  id: "mask-2",
  fill: "white"
}, /*#__PURE__*/React__default.createElement("rect", {
  id: "path-1",
  x: "0",
  y: "0",
  width: "16",
  height: "16"
})), /*#__PURE__*/React__default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("polyline", {
  stroke: "#7B8998",
  strokeWidth: "1.5",
  mask: "url(#mask-2)",
  points: "0 5 5 10 10 6 15 12"
}), /*#__PURE__*/React__default.createElement("polyline", {
  stroke: "#7B8998",
  strokeWidth: "1.5",
  mask: "url(#mask-2)",
  points: "0 10 5 2 10 12 15 4"
}))));

var YearOverYearColumnIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "#7B8998"
}, /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "14",
  y: "9",
  width: "2",
  height: "6"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "11",
  y: "2",
  width: "2",
  height: "13"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "3",
  y: "11",
  width: "2",
  height: "4"
}), /*#__PURE__*/React__default.createElement("rect", {
  x: "6",
  y: "9",
  width: "2",
  height: "6"
}))));

var SingleValueIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M3.85595703,11 L2.37060547,11 L2.37060547,6.27148438 L0.911621094,6.69775391 L0.911621094,5.57275391 L3.71972656,4.6015625 L3.85595703,4.6015625 L3.85595703,11 Z M10.25,11 L5.78515625,11 L5.78515625,10.0332031 L7.84179688,7.87109375 C8.34863535,7.29394243 8.60205078,6.83545092 8.60205078,6.49560547 C8.60205078,6.22021347 8.54199279,6.01074291 8.421875,5.8671875 C8.30175721,5.72363209 8.12744255,5.65185547 7.89892578,5.65185547 C7.67333872,5.65185547 7.49023508,5.74780177 7.34960938,5.93969727 C7.20898367,6.13159276 7.13867188,6.37109231 7.13867188,6.65820312 L5.65332031,6.65820312 C5.65332031,6.26562304 5.75146386,5.90307783 5.94775391,5.57055664 C6.14404395,5.23803545 6.41650216,4.97802828 6.76513672,4.79052734 C7.11377127,4.60302641 7.50341582,4.50927734 7.93408203,4.50927734 C8.62549174,4.50927734 9.15795712,4.66894372 9.53149414,4.98828125 C9.90503116,5.30761878 10.0917969,5.76611029 10.0917969,6.36376953 C10.0917969,6.61572392 10.0449223,6.86108279 9.95117188,7.09985352 C9.85742141,7.33862424 9.71167091,7.58911002 9.51391602,7.85131836 C9.31616112,8.1135267 8.99756079,8.46435327 8.55810547,8.90380859 L7.73193359,9.85742188 L10.25,9.85742188 L10.25,11 Z M12.3505859,7.18115234 L13.0493164,7.18115234 C13.6030301,7.18115234 13.8798828,6.91015896 13.8798828,6.36816406 C13.8798828,6.15722551 13.8139655,5.98510809 13.6821289,5.85180664 C13.5502923,5.71850519 13.364259,5.65185547 13.1240234,5.65185547 C12.9277334,5.65185547 12.7570808,5.7089838 12.6120605,5.82324219 C12.4670403,5.93750057 12.3945312,6.07958899 12.3945312,6.24951172 L10.9135742,6.24951172 C10.9135742,5.91259597 11.0073233,5.61230601 11.1948242,5.34863281 C11.3823252,5.08495962 11.6423323,4.87915113 11.9748535,4.73120117 C12.3073747,4.58325121 12.6728496,4.50927734 13.0712891,4.50927734 C13.7832067,4.50927734 14.3427714,4.67187337 14.75,4.99707031 C15.1572286,5.32226725 15.3608398,5.76904013 15.3608398,6.33740234 C15.3608398,6.61279435 15.2766122,6.87280151 15.1081543,7.11743164 C14.9396964,7.36206177 14.6943375,7.56054611 14.3720703,7.71289062 C14.7119158,7.83593812 14.9785147,8.02270383 15.171875,8.27319336 C15.3652353,8.52368289 15.4619141,8.83349425 15.4619141,9.20263672 C15.4619141,9.77392864 15.2421897,10.2309553 14.8027344,10.5737305 C14.3632791,10.9165056 13.7861364,11.0878906 13.0712891,11.0878906 C12.6523417,11.0878906 12.2634295,11.0080574 11.904541,10.8483887 C11.5456525,10.6887199 11.2739267,10.4675307 11.0893555,10.1848145 C10.9047842,9.9020982 10.8125,9.58056821 10.8125,9.22021484 L12.3022461,9.22021484 C12.3022461,9.41650489 12.3813469,9.58642506 12.5395508,9.72998047 C12.6977547,9.87353587 12.892577,9.9453125 13.1240234,9.9453125 C13.3847669,9.9453125 13.5927727,9.87280346 13.7480469,9.7277832 C13.9033211,9.58276295 13.980957,9.39746207 13.980957,9.171875 C13.980957,8.84960776 13.9003914,8.62109442 13.7392578,8.48632812 C13.5781242,8.35156183 13.3554702,8.28417969 13.0712891,8.28417969 L12.3505859,8.28417969 L12.3505859,7.18115234 Z",
  fill: "#7B8998",
  fillRule: "nonzero"
})));

var PivotTableIcon = /*#__PURE__*/React__default.createElement(SvgIcon, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#7B8998",
  points: "1 11 15 11 15 12 1 12"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#7B8998",
  points: "6 1 7 1 7 15 6 15"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#7B8998",
  points: "1 6 15 6 15 7 1 7"
}), /*#__PURE__*/React__default.createElement("rect", {
  stroke: "#7B8998",
  x: "0.5",
  y: "0.5",
  width: "15",
  height: "15"
}))));

const VIS_TYPE_COLUMN = 'COLUMN';
const VIS_TYPE_STACKED_COLUMN = 'STACKED_COLUMN';
const VIS_TYPE_BAR = 'BAR';
const VIS_TYPE_STACKED_BAR = 'STACKED_BAR';
const VIS_TYPE_LINE = 'LINE';
const VIS_TYPE_AREA = 'AREA';
const VIS_TYPE_PIE = 'PIE';
const VIS_TYPE_RADAR = 'RADAR';
const VIS_TYPE_GAUGE = 'GAUGE';
const VIS_TYPE_BUBBLE = 'BUBBLE';
const VIS_TYPE_YEAR_OVER_YEAR_LINE = 'YEAR_OVER_YEAR_LINE';
const VIS_TYPE_YEAR_OVER_YEAR_COLUMN = 'YEAR_OVER_YEAR_COLUMN';
const VIS_TYPE_SINGLE_VALUE = 'SINGLE_VALUE';
const VIS_TYPE_PIVOT_TABLE = 'PIVOT_TABLE';
const visTypeDisplayNames = {
  [VIS_TYPE_COLUMN]: i18n.t('Column'),
  [VIS_TYPE_STACKED_COLUMN]: i18n.t('Stacked column'),
  [VIS_TYPE_BAR]: i18n.t('Bar'),
  [VIS_TYPE_STACKED_BAR]: i18n.t('Stacked bar'),
  [VIS_TYPE_LINE]: i18n.t('Line'),
  [VIS_TYPE_AREA]: i18n.t('Area'),
  [VIS_TYPE_PIE]: i18n.t('Pie'),
  [VIS_TYPE_RADAR]: i18n.t('Radar'),
  [VIS_TYPE_GAUGE]: i18n.t('Gauge'),
  [VIS_TYPE_YEAR_OVER_YEAR_LINE]: i18n.t('Year over year (line)'),
  [VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: i18n.t('Year over year (column)'),
  [VIS_TYPE_SINGLE_VALUE]: i18n.t('Single value'),
  [VIS_TYPE_PIVOT_TABLE]: i18n.t('Pivot table')
};
const visTypeIcons = {
  [VIS_TYPE_BAR]: BarIcon,
  [VIS_TYPE_STACKED_BAR]: StackedBarIcon,
  [VIS_TYPE_COLUMN]: ColumnIcon,
  [VIS_TYPE_STACKED_COLUMN]: StackedColumnIcon,
  [VIS_TYPE_LINE]: LineIcon,
  [VIS_TYPE_AREA]: AreaIcon,
  [VIS_TYPE_PIE]: PieIcon,
  [VIS_TYPE_RADAR]: RadarIcon,
  [VIS_TYPE_GAUGE]: GaugeIcon,
  [VIS_TYPE_YEAR_OVER_YEAR_LINE]: YearOverYearLineIcon,
  [VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: YearOverYearColumnIcon,
  [VIS_TYPE_SINGLE_VALUE]: SingleValueIcon,
  [VIS_TYPE_PIVOT_TABLE]: PivotTableIcon
};
const getDisplayNameByVisType = visType => {
  const displayName = visTypeDisplayNames[visType];

  if (!displayName) {
    throw new Error("".concat(visType, " is not a valid visualization type"));
  }

  return displayName;
};
const stackedTypes = [VIS_TYPE_STACKED_COLUMN, VIS_TYPE_STACKED_BAR, VIS_TYPE_AREA];
const yearOverYearTypes = [VIS_TYPE_YEAR_OVER_YEAR_LINE, VIS_TYPE_YEAR_OVER_YEAR_COLUMN];
const dualAxisTypes = [VIS_TYPE_COLUMN, VIS_TYPE_BAR, VIS_TYPE_LINE, VIS_TYPE_AREA];
const defaultVisType = VIS_TYPE_COLUMN;
const isStacked = type => stackedTypes.includes(type);
const isYearOverYear = type => yearOverYearTypes.includes(type);
const isDualAxisType = type => dualAxisTypes.includes(type);
const isSingleValue = type => type === VIS_TYPE_SINGLE_VALUE;

const RULE_PROP_AVAILABLE_AXES = 'availableAxes',
      RULE_PROP_MAX_DIMS_PER_AXIS = 'maxNumberOfDimsPerAxis',
      RULE_PROP_MIN_DIMS_PER_AXIS = 'minNumberOfDimsPerAxis',
      RULE_PROP_MAX_ITEMS_PER_AXIS = 'maxNumberOfItemsPerAxis',
      RULE_PROP_DISALLOWED_DIMS = 'disallowedDims',
      RULE_PROP_LOCKED_DIMS = 'lockedDims';
const defaultRules = {
  [RULE_PROP_AVAILABLE_AXES]: [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1,
    [AXIS_ID_ROWS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1,
    [AXIS_ID_ROWS]: 1
  }
};
const pieRules = {
  [RULE_PROP_AVAILABLE_AXES]: [AXIS_ID_COLUMNS, AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1
  }
};
const singleValueRules = {
  [RULE_PROP_AVAILABLE_AXES]: [AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_MAX_ITEMS_PER_AXIS]: {
    [AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_LOCKED_DIMS]: {
    [DIMENSION_ID_DATA]: AXIS_ID_COLUMNS
  }
};
const yearOverYearRules = {
  [RULE_PROP_AVAILABLE_AXES]: [AXIS_ID_FILTERS],
  [RULE_PROP_DISALLOWED_DIMS]: [DIMENSION_ID_PERIOD]
};
const pivotTableRules = {
  [RULE_PROP_AVAILABLE_AXES]: [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS]
};
const visTypeToRules = {
  [VIS_TYPE_COLUMN]: defaultRules,
  [VIS_TYPE_STACKED_COLUMN]: defaultRules,
  [VIS_TYPE_BAR]: defaultRules,
  [VIS_TYPE_STACKED_BAR]: defaultRules,
  [VIS_TYPE_LINE]: defaultRules,
  [VIS_TYPE_AREA]: defaultRules,
  [VIS_TYPE_RADAR]: defaultRules,
  [VIS_TYPE_GAUGE]: singleValueRules,
  [VIS_TYPE_PIE]: pieRules,
  [VIS_TYPE_SINGLE_VALUE]: singleValueRules,
  [VIS_TYPE_YEAR_OVER_YEAR_LINE]: yearOverYearRules,
  [VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: yearOverYearRules,
  [VIS_TYPE_PIVOT_TABLE]: pivotTableRules
};

const getRulesByVisType = visType => {
  const rules = visTypeToRules[visType];

  if (!rules) {
    throw new Error("".concat(visType, " is not a known visualization type"));
  }

  return rules;
}; // Selectors


const getAvailableAxesByVisType = visType => getRulesByVisType(visType)[RULE_PROP_AVAILABLE_AXES] || [];
const getMaxNumberOfDimsPerAxisByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MAX_DIMS_PER_AXIS] || {};
const getMinNumberOfDimsPerAxisByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MIN_DIMS_PER_AXIS] || {};
const getMaxNumberOfItemsPerAxisByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MAX_ITEMS_PER_AXIS] || {};
const getDisallowedDimsByVisType = visType => getRulesByVisType(visType)[RULE_PROP_DISALLOWED_DIMS] || [];
const getLockedDimsByVisType = visType => getRulesByVisType(visType)[RULE_PROP_LOCKED_DIMS] || {}; // Test exports
const testResourceRules = [...new Set(Object.values(visTypeToRules))];

const getAxisMaxNumberOfItemsByVisType = (visType, axisId) => getMaxNumberOfItemsPerAxisByVisType(visType)[axisId];
const getAxisMaxNumberOfDimsByVisType = (visType, axisId) => getMaxNumberOfDimsPerAxisByVisType(visType)[axisId];
const getAxisMinNumberOfDimsByVisType = (visType, axisId) => getMinNumberOfDimsPerAxisByVisType(visType)[axisId];
const getAxisPerLockedDimByVisType = (visType, dimensionId) => getLockedDimsByVisType(visType)[dimensionId];
const getAllLockedDimIdsByVisType = visType => Object.keys(getLockedDimsByVisType(visType));

const hasAxisTooManyItemsByVisType = (visType, axisId, numberOfItems) => {
  const maxNumberOfItemsPerAxis = getAxisMaxNumberOfItemsByVisType(visType, axisId);
  return maxNumberOfItemsPerAxis ? numberOfItems > maxNumberOfItemsPerAxis : false;
};
const isDimensionLockedByVisType = (visType, dimensionId) => getAllLockedDimIdsByVisType(visType).includes(dimensionId);
const isAxisFullByVisType = (visType, axisId, axisDimensionsCount) => axisDimensionsCount >= getAxisMaxNumberOfDimsByVisType(visType, axisId);
const canDimensionBeAddedToAxisByVisType = (visType, axis, axisId) => {
  const axisIsFull = isAxisFullByVisType(visType, axisId, axis.length);
  const transferableDimension = getTransferableDimensionPerAxisByVisType(visType, axisId, axis); // 1 dimension allowed in axis
  // 1 dimension is already present and not locked
  // the dragged one can be added and will cause the old one to be moved to filters
  // what happens with max limit > 1, axis full and 1 or more locked dimensions?

  return !(axisIsFull && !transferableDimension);
};
const getTransferableDimensionPerAxisByVisType = (visType, axisId, axis) => {
  const lockedDimsByVisType = getLockedDimsByVisType(visType);
  const lockedDimIdsByAxis = Object.keys(lockedDimsByVisType).filter(dimId => lockedDimsByVisType[dimId] === axisId); // return the last "transferable" dimension, this needs to be adjusted
  // if we allow a defined max limit > 1 and the DND wants to drop the new
  // dimension in a specific position

  return axis.filter(dimId => !lockedDimIdsByAxis.includes(dimId)).pop();
};

const LAYOUT_TYPE_DEFAULT = 'LAYOUT_TYPE_DEFAULT';
const LAYOUT_TYPE_PIE = 'LAYOUT_TYPE_PIE';
const LAYOUT_TYPE_SINGLE_VALUE = 'LAYOUT_TYPE_SINGLE_VALUE';
const LAYOUT_TYPE_YEAR_OVER_YEAR = 'LAYOUT_TYPE_YEAR_OVER_YEAR';
const LAYOUT_TYPE_PIVOT_TABLE = 'LAYOUT_TYPE_PIVOT_TABLE';

const getAxisNamesByLayoutType = layoutType => {
  switch (layoutType) {
    case LAYOUT_TYPE_DEFAULT:
    case LAYOUT_TYPE_PIE:
    case LAYOUT_TYPE_YEAR_OVER_YEAR:
    default:
      return {
        [AXIS_ID_COLUMNS]: i18n.t('Series'),
        [AXIS_ID_ROWS]: i18n.t('Category'),
        [AXIS_ID_FILTERS]: i18n.t('Filter')
      };

    case LAYOUT_TYPE_PIVOT_TABLE:
      return {
        [AXIS_ID_COLUMNS]: i18n.t('Columns'),
        [AXIS_ID_ROWS]: i18n.t('Rows'),
        [AXIS_ID_FILTERS]: i18n.t('Filter')
      };
  }
};

const getAxisNameByLayoutType = (axisId, layoutType) => {
  const name = getAxisNamesByLayoutType(layoutType)[axisId];

  if (!name) {
    throw new Error("".concat(axisId, " is not a valid axis id"));
  }

  return name;
};
const getAxisName = axisId => getAxisNameByLayoutType(axisId, LAYOUT_TYPE_DEFAULT);

const visTypeToLayoutType = {
  [VIS_TYPE_COLUMN]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_STACKED_COLUMN]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_BAR]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_STACKED_BAR]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_LINE]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_AREA]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_PIE]: LAYOUT_TYPE_PIE,
  [VIS_TYPE_RADAR]: LAYOUT_TYPE_DEFAULT,
  [VIS_TYPE_GAUGE]: LAYOUT_TYPE_PIE,
  [VIS_TYPE_YEAR_OVER_YEAR_LINE]: LAYOUT_TYPE_YEAR_OVER_YEAR,
  [VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: LAYOUT_TYPE_YEAR_OVER_YEAR,
  [VIS_TYPE_SINGLE_VALUE]: LAYOUT_TYPE_PIE,
  [VIS_TYPE_PIVOT_TABLE]: LAYOUT_TYPE_PIVOT_TABLE
};
const getLayoutTypeByVisType = visType => visTypeToLayoutType[visType];

const getAxisItemLabel = (axisName, isDimensionInLayout) => isDimensionInLayout ? i18n.t('Move to {{axisName}}', {
  axisName
}) : i18n.t('Add to {{axisName}}', {
  axisName
});

const getRemoveMenuItem = onClick => /*#__PURE__*/React__default.createElement(MenuItem, {
  key: "remove-menu-item",
  onClick: onClick
}, i18n.t('Remove'));

const getDividerItem = key => /*#__PURE__*/React__default.createElement(Divider, {
  light: true,
  key: key
});

const getUnavailableLabel = visType => i18n.t('Not available for {{visualizationType}}', {
  visualizationType: getDisplayNameByVisType(visType)
});

const getDualAxisMenuItemLabel = (currentAxisId, visType, numberOfDimensionItems) => {
  let label;

  if (!isDualAxisType(visType)) {
    label = getUnavailableLabel(visType);
  } else if (numberOfDimensionItems < 2) {
    label = i18n.t('Requires 2 or more data items');
  } else if (currentAxisId !== AXIS_ID_COLUMNS) {
    label = i18n.t('Only available when data is in Series');
  }

  return label;
};

class DimensionMenu extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      submenuAnchorEl: null
    });
  }

  render() {
    const {
      dimensionId,
      currentAxisId,
      visType,
      numberOfDimensionItems,
      assignedCategoriesItemHandler,
      isAssignedCategoriesInLayout,
      dualAxisItemHandler,
      axisItemHandler,
      removeItemHandler,
      anchorEl,
      onClose,
      classes
    } = this.props;
    const menuItems = [];
    const isDimensionInLayout = !!currentAxisId; // add/move to axis item

    const availableAxisIds = getAvailableAxesByVisType(visType);
    const applicableAxisIds = availableAxisIds.filter(axisId => axisId !== currentAxisId);
    const assignedCategoriesAvailableDestinations = getAvailableAxesByVisType(visType).filter(axis => axis !== AXIS_ID_FILTERS);
    const assignedCategoriesItemLabel = isAssignedCategoriesInLayout ? i18n.t('Remove Assigned Categories') : i18n.t('Add Assigned Categories');

    const closeSubMenu = () => {
      this.setState({
        submenuAnchorEl: null
      });
    };

    const closeWholeMenu = () => {
      onClose();
      closeSubMenu();
    };

    const getDualAxisMenuItem = isDisabled => /*#__PURE__*/React__default.createElement(MenuItem, {
      key: "dual-axis-item-".concat(dimensionId),
      onClick: () => {
        dualAxisItemHandler();
        closeWholeMenu();
      },
      disabled: isDisabled
    }, /*#__PURE__*/React__default.createElement("div", null, i18n.t('Manage chart axes'))); // Create dual axis menu item


    if (dimensionId === DIMENSION_ID_DATA) {
      if (currentAxisId === AXIS_ID_COLUMNS && isDualAxisType(visType) && numberOfDimensionItems >= 2) {
        menuItems.push(getDualAxisMenuItem(false));
      } else {
        const label = getDualAxisMenuItemLabel(currentAxisId, visType, numberOfDimensionItems);
        menuItems.push( /*#__PURE__*/React__default.createElement(Tooltip, {
          key: "dual-axis-tooltip-".concat(dimensionId),
          title: label,
          "aria-label": "disabled",
          placement: "right-start",
          classes: classes
        }, /*#__PURE__*/React__default.createElement("div", null, getDualAxisMenuItem(true))));
      } // divider


      if (applicableAxisIds.length) {
        menuItems.push(getDividerItem('dual-axis-item-divider'));
      }
    } // Assigned categories


    if (dimensionId === DIMENSION_ID_DATA && assignedCategoriesItemHandler) {
      if (assignedCategoriesAvailableDestinations.length) {
        if (!isAssignedCategoriesInLayout) {
          menuItems.push( /*#__PURE__*/React__default.createElement(MenuItem, {
            key: "assigned-categories-item-".concat(dimensionId),
            onClick: event => this.setState({
              submenuAnchorEl: event.currentTarget
            })
          }, /*#__PURE__*/React__default.createElement("div", null, assignedCategoriesItemLabel), /*#__PURE__*/React__default.createElement(ArrowRightIcon, null)));
          menuItems.push( /*#__PURE__*/React__default.createElement(Menu, {
            key: "assigned-categories-sub-menu-".concat(dimensionId),
            open: Boolean(this.state.submenuAnchorEl),
            anchorEl: this.state.submenuAnchorEl,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            onClose: closeSubMenu,
            onExited: closeSubMenu
          }, assignedCategoriesAvailableDestinations.map(destination => /*#__PURE__*/React__default.createElement(MenuItem, {
            key: destination,
            onClick: () => {
              assignedCategoriesItemHandler(destination);
              closeWholeMenu();
            }
          }, getAxisItemLabel(getAxisNameByLayoutType(destination, getLayoutTypeByVisType(visType)))))));
        } else {
          menuItems.push( /*#__PURE__*/React__default.createElement(MenuItem, {
            key: "assigned-categories-item-".concat(dimensionId),
            onClick: () => {
              assignedCategoriesItemHandler();
              closeWholeMenu();
            }
          }, /*#__PURE__*/React__default.createElement("div", null, assignedCategoriesItemLabel)));
        }
      } else {
        menuItems.push( /*#__PURE__*/React__default.createElement(Tooltip, {
          key: "assigned-categories-item-".concat(dimensionId),
          title: getUnavailableLabel(visType),
          "aria-label": "disabled",
          placement: "right-start",
          classes: classes
        }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(MenuItem, {
          disabled: true
        }, /*#__PURE__*/React__default.createElement("div", null, assignedCategoriesItemLabel), /*#__PURE__*/React__default.createElement(ArrowRightIcon, null)))));
      }
    } // divider


    menuItems.length && menuItems.push(getDividerItem('assigned-categories-divider'));
    menuItems.push(...applicableAxisIds.map(axisId => /*#__PURE__*/React__default.createElement(MenuItem, {
      key: "".concat(dimensionId, "-to-").concat(axisId),
      onClick: () => {
        axisItemHandler({
          dimensionId,
          axisId,
          numberOfDimensionItems,
          requireItems: !getPredefinedDimensionProp(dimensionId, DIMENSION_PROP_NO_ITEMS),
          isDimensionInLayout
        });
        closeWholeMenu();
      }
    }, getAxisItemLabel(getAxisNameByLayoutType(axisId, getLayoutTypeByVisType(visType)), isDimensionInLayout)))); // remove item

    if (isDimensionInLayout) {
      // divider
      if (applicableAxisIds.length) {
        menuItems.push(getDividerItem('remove-item-divider'));
      }

      menuItems.push(getRemoveMenuItem(() => {
        removeItemHandler(dimensionId);
        closeWholeMenu();
      }));
    }

    return /*#__PURE__*/React__default.createElement(Menu, {
      id: dimensionId,
      anchorEl: anchorEl,
      open: Boolean(anchorEl),
      onClose: closeWholeMenu,
      onExited: closeWholeMenu,
      transitionDuration: {
        enter: 50,
        exit: 0
      },
      TransitionComponent: Zoom
    }, menuItems);
  }

}
DimensionMenu.propTypes = {
  axisItemHandler: PropTypes.func.isRequired,
  numberOfDimensionItems: PropTypes.number.isRequired,
  removeItemHandler: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
  assignedCategoriesItemHandler: PropTypes.func,
  classes: PropTypes.object,
  currentAxisId: PropTypes.string,
  dimensionId: PropTypes.string,
  dualAxisItemHandler: PropTypes.func,
  isAssignedCategoriesInLayout: PropTypes.bool,
  visType: PropTypes.string
};

const parseValue = valueString => {
  const parsedValue = parseFloat(valueString);

  if (isNaN(parsedValue)) {
    return valueString;
  }

  return parsedValue;
};

const SORT_ORDER_ASCENDING = 1;
const SORT_ORDER_DESCENDING = -1;
const CELL_TYPE_VALUE = 'value';
const CELL_TYPE_SUBTOTAL = 'subtotal';
const CELL_TYPE_TOTAL = 'total';
const AGGREGATE_TYPE_SUM = 'SUM';
const AGGREGATE_TYPE_AVERAGE = 'AVERAGE';
const AGGREGATE_TYPE_NA = 'N/A';
const VALUE_TYPE_TEXT = 'TEXT';
const VALUE_TYPE_NUMBER = 'NUMBER';
const NUMBER_TYPE_VALUE = 'VALUE';
const NUMBER_TYPE_ROW_PERCENTAGE = 'ROW_PERCENTAGE';
const NUMBER_TYPE_COLUMN_PERCENTAGE = 'COLUMN_PERCENTAGE';
const FONT_SIZE_OPTION_SMALL = 'SMALL';
const FONT_SIZE_SMALL = 10;
const FONT_SIZE_OPTION_NORMAL = 'NORMAL';
const FONT_SIZE_NORMAL = 11;
const FONT_SIZE_OPTION_LARGE = 'LARGE';
const FONT_SIZE_LARGE = 13;
const DISPLAY_DENSITY_OPTION_COMPACT = 'COMPACT';
const DISPLAY_DENSITY_PADDING_COMPACT = 4;
const DISPLAY_DENSITY_OPTION_NORMAL = 'NORMAL';
const DISPLAY_DENSITY_PADDING_NORMAL = 5;
const DISPLAY_DENSITY_OPTION_COMFORTABLE = 'COMFORTABLE';
const DISPLAY_DENSITY_PADDING_COMFORTABLE = 7;
const CLIPPED_CELL_MAX_WIDTH = 360;
const COLUMN_PARTITION_SIZE_PX = 1000;
const DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = 'DATA_ELEMENT_GROUP_SET';
const DIMENSION_TYPE_DATA = 'DATA_X';
const DIMENSION_TYPE_PERIOD = 'PERIOD';
const DIMENSION_TYPE_ORGUNIT = 'ORGANISATION_UNIT';

const trimTrailingZeros = stringValue => stringValue.replace(/\.?0+$/, '');

const defaultDecimalSeparator = '.';

const separateDigitGroups = (stringValue, decimalSeparator) => {
  const [integer, remainder] = stringValue.split('.');
  const groups = [];

  for (let i = integer.length; i > 0; i -= 3) {
    groups.unshift(integer.substring(i - 3, i));
  }

  if (remainder) {
    const trimmedRemainder = trimTrailingZeros(remainder);

    if (trimmedRemainder.length) {
      groups[groups.length - 1] += decimalSeparator + remainder;
    }
  }

  return groups;
};

const getSeparator = visualization => {
  switch (visualization.digitGroupSeparator) {
    case 'SPACE':
      return ' ';

    case 'COMMA':
      return ',';
    // TODO: Requires backend support, and decimalSeparator would need to be separately configurable
    // case 'PERIOD':
    //     return '.'

    case 'NONE':
    default:
      return '';
  }
};

const toFixedPrecisionString = (value, skipRounding) => {
  if (typeof value !== 'number') {
    // Values returned from the server should keep their string representation
    return value;
  }

  const precision = skipRounding ? 10 : value > -1 && value < 1 ? 2 : 1;
  return value.toFixed(precision);
};

const renderValue = (value, valueType, visualization) => {
  if (valueType !== VALUE_TYPE_NUMBER || value === undefined) {
    return value;
  }

  if (visualization.numberType === NUMBER_TYPE_ROW_PERCENTAGE || visualization.numberType === NUMBER_TYPE_COLUMN_PERCENTAGE) {
    return trimTrailingZeros(toFixedPrecisionString(value * 100, visualization.skipRounding)) + '%';
  }

  const stringValue = toFixedPrecisionString(value, visualization.skipRounding);
  const digitGroups = separateDigitGroups(stringValue, defaultDecimalSeparator);
  return digitGroups.join(getSeparator(visualization));
};

let canvas;

const getContext = fontSize => {
  if (!canvas) {
    canvas = document.createElement('canvas');
  }

  const ctx = canvas.getContext('2d');
  ctx.font = "".concat(fontSize, "px Roboto, Arial, sans-serif");
  return ctx;
};

const measureText = (text, fontSize = 11) => {
  const ctx = getContext(fontSize);
  const textMetrics = ctx.measureText(text);
  return textMetrics.width;
};

const dataFields = ['value', 'numerator', 'denominator', 'factor', 'multiplier', 'divisor'];
const defaultOptions = {
  hideEmptyColumns: false,
  hideEmptyRows: false,
  showRowTotals: false,
  showColumnTotals: false,
  showRowSubtotals: false,
  showColumnSubtotals: false
};

const isDxDimension = dimensionItem => [DIMENSION_TYPE_DATA, DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET].includes(dimensionItem.dimensionType);

const countFromDisaggregates = list => {
  let count = 1;
  list.forEach(x => {
    count *= x.items.length;
  });
  return count;
};

const addSize = list => {
  const reversedList = list.slice().reverse();
  reversedList.forEach((level, idx) => {
    // Start at the "leaf" disaggregate
    const lastLevel = reversedList[idx - 1];
    level.size = lastLevel ? lastLevel.count * lastLevel.size : 1;
  });
};

const listByDimension = list => list.reduce((all, item) => {
  all[item.dimension] = item;
  return all;
}, {});

const sortByHierarchy = items => {
  items.sort((a, b) => {
    if (!a.hierarchy || !b.hierarchy) {
      return 0;
    }

    return a.hierarchy.join('/').localeCompare(b.hierarchy.join('/'));
  });
};

const buildDimensionLookup = (visualization, metadata, headers) => {
  const rows = visualization.rows.map(row => ({
    dimension: row.dimension,
    meta: metadata.items[row.dimension],
    count: metadata.dimensions[row.dimension].length,
    itemIds: metadata.dimensions[row.dimension],
    items: metadata.dimensions[row.dimension].map(item => metadata.items[item]),
    isDxDimension: isDxDimension(metadata.items[row.dimension]),
    position: 'row'
  }));
  const columns = visualization.columns.map(column => ({
    dimension: column.dimension,
    meta: metadata.items[column.dimension],
    count: metadata.dimensions[column.dimension].length,
    itemIds: metadata.dimensions[column.dimension],
    items: metadata.dimensions[column.dimension].map(item => metadata.items[item]),
    isDxDimension: isDxDimension(metadata.items[column.dimension]),
    position: 'column'
  }));
  addSize(rows);
  addSize(columns);

  const allByDimension = _objectSpread2({}, listByDimension(rows), {}, listByDimension(columns));

  const headerDimensions = headers.map(header => allByDimension[header.name]);
  const rowHeaders = headerDimensions.map((_, idx) => idx).filter(idx => headerDimensions[idx] && headerDimensions[idx].position === 'row');
  const columnHeaders = headerDimensions.map((_, idx) => idx).filter(idx => headerDimensions[idx] && headerDimensions[idx].position === 'column');
  const dataHeaders = dataFields.reduce((out, field) => {
    out[field] = headers.findIndex(header => header.name === field);
    return out;
  }, {});
  const ouDimension = allByDimension[DIMENSION_ID_ORGUNIT];

  if (visualization.showHierarchy && metadata.ouNameHierarchy && ouDimension) {
    ouDimension.items.forEach(ou => {
      const hierarchy = metadata.ouNameHierarchy[ou.uid];

      if (hierarchy) {
        ou.hierarchy = hierarchy.split('/').filter(x => x.length);
      }
    });
    sortByHierarchy(ouDimension.items);
    ouDimension.itemIds = ouDimension.items.map(item => item.uid);
  }

  return {
    rows,
    columns,
    allByDimension,
    headerDimensions,
    rowHeaders,
    columnHeaders,
    dataHeaders
  };
};

const lookup = (dataRow, dimensionLookup, {
  doColumnSubtotals,
  doRowSubtotals
}) => {
  let row = 0;

  for (const headerIndex of dimensionLookup.rowHeaders) {
    const idx = dimensionLookup.headerDimensions[headerIndex].itemIds.indexOf(dataRow[headerIndex]);

    if (idx === -1) {
      return undefined;
    }

    const size = dimensionLookup.headerDimensions[headerIndex].size;
    row += idx * size;
  }

  if (doColumnSubtotals) {
    row += Math.floor(row / dimensionLookup.rows[0].size);
  }

  let column = 0;

  for (const headerIndex of dimensionLookup.columnHeaders) {
    const idx = dimensionLookup.headerDimensions[headerIndex].itemIds.indexOf(dataRow[headerIndex]);

    if (idx === -1) {
      return undefined;
    }

    const size = dimensionLookup.headerDimensions[headerIndex].size;
    column += idx * size;
  }

  if (doRowSubtotals) {
    column += Math.floor(column / dimensionLookup.columns[0].size);
  }

  return {
    column,
    row
  };
};

const applyTotalAggregationType = ({
  totalAggregationType,
  value,
  numerator,
  denominator,
  multiplier,
  divisor
}, overrideTotalAggregationType) => {
  switch (overrideTotalAggregationType || totalAggregationType) {
    case AGGREGATE_TYPE_NA:
      return 'N/A';

    case AGGREGATE_TYPE_AVERAGE:
      return (numerator || value) * multiplier / (denominator * divisor || 1);

    case AGGREGATE_TYPE_SUM:
    default:
      return value;
  }
};

class PivotTableEngine {
  constructor(visualization, data, legendSets) {
    _defineProperty(this, "visualization", void 0);

    _defineProperty(this, "rawData", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "legendSets", void 0);

    _defineProperty(this, "dimensionLookup", void 0);

    _defineProperty(this, "columnDepth", 0);

    _defineProperty(this, "rowDepth", 0);

    _defineProperty(this, "height", 0);

    _defineProperty(this, "width", 0);

    _defineProperty(this, "data", []);

    _defineProperty(this, "columnWidths", []);

    _defineProperty(this, "rowMap", []);

    _defineProperty(this, "columnMap", []);

    this.visualization = visualization;
    this.legendSets = (legendSets || []).reduce((sets, set) => {
      sets[set.id] = set;
      return sets;
    }, {});
    this.rawData = data;
    this.options = _objectSpread2({}, defaultOptions, {
      showColumnTotals: visualization.colTotals,
      showRowTotals: visualization.rowTotals,
      showColumnSubtotals: visualization.colSubTotals,
      showRowSubtotals: visualization.rowSubTotals,
      hideEmptyColumns: visualization.hideEmptyColumns,
      hideEmptyRows: visualization.hideEmptyRows,
      title: visualization.hideTitle ? undefined : visualization.title,
      subtitle: visualization.hideSubtitle ? undefined : visualization.subtitle
    });
    this.dimensionLookup = buildDimensionLookup(this.visualization, this.rawData.metaData, this.rawData.headers);
    const doColumnSubtotals = this.options.showColumnSubtotals && this.dimensionLookup.rows.length > 1;
    const singularRow = this.dimensionLookup.rows.length === 1 && this.dimensionLookup.rows[0].count === 1;
    const firstColumnIsSortable = !doColumnSubtotals && !singularRow;
    this.columnDepth = this.dimensionLookup.columns.length || (this.visualization.showDimensionLabels || firstColumnIsSortable ? 1 : 0);
    this.rowDepth = this.dimensionLookup.rows.length || (this.visualization.showDimensionLabels ? 1 : 0);
    this.buildMatrix();
  }

  getRaw({
    row,
    column
  }) {
    var _headers$find, _headers$find2;

    const cellType = this.getRawCellType({
      row,
      column
    });
    const dxDimension = this.getRawCellDxDimension({
      row,
      column
    });
    const headers = [...this.getRawRowHeader(row), ...this.getRawColumnHeader(column)];
    const peId = (_headers$find = headers.find(header => (header === null || header === void 0 ? void 0 : header.dimensionItemType) === DIMENSION_TYPE_PERIOD)) === null || _headers$find === void 0 ? void 0 : _headers$find.uid;
    const ouId = (_headers$find2 = headers.find(header => (header === null || header === void 0 ? void 0 : header.dimensionItemType) === DIMENSION_TYPE_ORGUNIT)) === null || _headers$find2 === void 0 ? void 0 : _headers$find2.uid;

    if (!this.data[row] || !this.data[row][column]) {
      return {
        cellType,
        empty: true,
        ouId,
        peId
      };
    }

    const dataRow = this.data[row][column];
    let rawValue = cellType === CELL_TYPE_VALUE ? dataRow[this.dimensionLookup.dataHeaders.value] : dataRow.value;
    let renderedValue = rawValue;
    const valueType = (dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) || VALUE_TYPE_TEXT;

    if (valueType === VALUE_TYPE_NUMBER) {
      rawValue = parseValue(rawValue);

      switch (this.visualization.numberType) {
        case NUMBER_TYPE_ROW_PERCENTAGE:
          renderedValue = rawValue / this.percentageTotals[row].value;
          break;

        case NUMBER_TYPE_COLUMN_PERCENTAGE:
          renderedValue = rawValue / this.percentageTotals[column].value;
          break;
      }
    }

    renderedValue = renderValue(renderedValue, valueType, this.visualization);
    return {
      cellType,
      empty: false,
      valueType,
      rawValue,
      renderedValue,
      dxDimension,
      ouId,
      peId
    };
  }

  get({
    row,
    column
  }) {
    const mappedRow = this.rowMap[row],
          mappedColumn = this.columnMap[column];

    if (!mappedRow && mappedRow !== 0 || !mappedColumn && mappedColumn !== 0) {
      return undefined;
    }

    return this.getRaw({
      row: mappedRow,
      column: mappedColumn
    });
  }

  getRawCellType({
    row,
    column
  }) {
    const isRowTotal = this.doRowTotals && column === this.dataWidth - 1;
    const isColumnTotal = this.doColumnTotals && row === this.dataHeight - 1;

    if (isRowTotal || isColumnTotal) {
      return CELL_TYPE_TOTAL;
    }

    const isRowSubtotal = this.doRowSubtotals && (column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0;
    const isColumnSubtotal = this.doColumnSubtotals && (row + 1) % (this.dimensionLookup.rows[0].size + 1) === 0;

    if (isRowSubtotal || isColumnSubtotal) {
      return CELL_TYPE_SUBTOTAL;
    }

    return CELL_TYPE_VALUE;
  }

  getCellType({
    row,
    column
  }) {
    row = this.rowMap[row];
    column = this.columnMap[column];
    return this.getRawCellType({
      row,
      column
    });
  }

  getDimensionLabel(rowLevel, columnLevel) {
    const lastRowLevel = this.rowDepth - 1;
    const lastColumnLevel = this.columnDepth - 1;

    if (rowLevel !== lastRowLevel && columnLevel !== lastColumnLevel) {
      return null;
    }

    if (rowLevel === lastRowLevel && this.dimensionLookup.rows[lastRowLevel] && columnLevel === lastColumnLevel && this.dimensionLookup.columns[lastColumnLevel]) {
      return "".concat(this.dimensionLookup.rows[lastRowLevel].meta.name, " / ").concat(this.dimensionLookup.columns[lastColumnLevel].meta.name);
    }

    if (lastRowLevel === -1) {
      return this.dimensionLookup.columns[columnLevel].meta.name;
    }

    if (lastColumnLevel === -1) {
      return this.dimensionLookup.rows[rowLevel].meta.name;
    }

    if (rowLevel === lastRowLevel && this.dimensionLookup.columns[columnLevel]) {
      return this.dimensionLookup.columns[columnLevel].meta.name;
    }

    if (columnLevel === lastColumnLevel && this.dimensionLookup.rows[rowLevel]) {
      return this.dimensionLookup.rows[rowLevel].meta.name;
    }
  }

  getCellDxDimension({
    row,
    column
  }) {
    return this.getRawCellDxDimension({
      row: this.rowMap[row],
      column: this.columnMap[column]
    });
  }

  getRawCellDxDimension({
    row,
    column
  }) {
    if (!this.data[row]) {
      return undefined;
    }

    const cellValue = this.data[row][column];

    if (!cellValue) {
      return undefined;
    }

    if (!Array.isArray(cellValue)) {
      // This is a total cell
      return {
        valueType: cellValue.valueType,
        totalAggregationType: cellValue.totalAggregationType,
        legendSet: undefined
      };
    }

    const rowHeaders = this.getRawRowHeader(row);
    const columnHeaders = this.getRawColumnHeader(column);
    const dxRowIndex = this.dimensionLookup.rows.findIndex(dim => dim.isDxDimension);

    if (rowHeaders.length && dxRowIndex !== -1) {
      return {
        valueType: rowHeaders[dxRowIndex].valueType,
        totalAggregationType: rowHeaders[dxRowIndex].totalAggregationType,
        legendSet: rowHeaders[dxRowIndex].legendSet
      };
    }

    const dxColumnIndex = this.dimensionLookup.columns.findIndex(dim => dim.isDxDimension);

    if (columnHeaders.length && dxColumnIndex !== -1) {
      return {
        valueType: columnHeaders[dxColumnIndex].valueType,
        totalAggregationType: columnHeaders[dxColumnIndex].totalAggregationType,
        legendSet: columnHeaders[dxColumnIndex].legendSet
      };
    } // Data is in Filter
    // TODO : This assumes the server ignores text types, we should confirm this is the case


    return {
      valueType: VALUE_TYPE_NUMBER,
      totalAggregationType: AGGREGATE_TYPE_SUM
    };
  }

  rowIsEmpty(row) {
    return !this.data[row] || this.data[row].length === 0;
  }

  columnIsEmpty(column) {
    return !this.columnWidths[column];
  }

  getRawColumnHeader(column) {
    if (this.doRowTotals && column === this.dataWidth - 1) {
      return times(this.columnDepth - 1, () => undefined).concat([{
        name: 'Total'
      }]);
    }

    if (this.doRowSubtotals) {
      if ((column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0) {
        return times(this.columnDepth - 1, () => undefined).concat([{
          name: 'Subtotal'
        }]);
      }

      column -= Math.floor(column / (this.dimensionLookup.columns[0].size + 1));
    }

    return this.dimensionLookup.columns.map(dimension => {
      const itemIndex = Math.floor(column / dimension.size) % dimension.count;
      return dimension.items[itemIndex];
    });
  }

  getColumnHeader(column) {
    return this.getRawColumnHeader(this.columnMap[column]);
  }

  getRawRowHeader(row) {
    if (this.doColumnTotals && row === this.dataHeight - 1) {
      return times(this.rowDepth - 1, () => undefined).concat([{
        name: 'Total'
      }]);
    }

    if (this.doColumnSubtotals) {
      if ((row + 1) % (this.dimensionLookup.rows[0].size + 1) === 0) {
        return times(this.rowDepth - 1, () => undefined).concat([{
          name: 'Subtotal'
        }]);
      }

      row -= Math.floor(row / (this.dimensionLookup.rows[0].size + 1));
    }

    return this.dimensionLookup.rows.map(dimension => {
      const itemIndex = Math.floor(row / dimension.size) % dimension.count;
      return dimension.items[itemIndex];
    });
  }

  getRowHeader(row) {
    return this.getRawRowHeader(this.rowMap[row]);
  }

  getDependantTotalCells({
    row,
    column
  }) {
    var _this$dimensionLookup, _this$dimensionLookup2;

    const rowSubtotalSize = ((_this$dimensionLookup = this.dimensionLookup.columns[0]) === null || _this$dimensionLookup === void 0 ? void 0 : _this$dimensionLookup.size) + 1;
    const rowSubtotal = rowSubtotalSize && this.doRowSubtotals && {
      row,
      column: Math.ceil((column + 1) / rowSubtotalSize) * rowSubtotalSize - 1,
      size: rowSubtotalSize - 1
    };
    const rowSubtotalColumnTotal = this.doRowSubtotals && this.doColumnTotals && {
      row: this.dataHeight - 1,
      column: rowSubtotal.column,
      size: this.rawDataHeight
    };
    const columnSubtotalSize = ((_this$dimensionLookup2 = this.dimensionLookup.rows[0]) === null || _this$dimensionLookup2 === void 0 ? void 0 : _this$dimensionLookup2.size) + 1;
    const columnSubtotal = columnSubtotalSize && this.doColumnSubtotals && {
      row: Math.ceil((row + 1) / columnSubtotalSize) * columnSubtotalSize - 1,
      column,
      size: columnSubtotalSize - 1
    };
    const columnSubtotalRowTotal = this.doColumnSubtotals && this.doRowTotals && {
      row: columnSubtotal.row,
      column: this.dataWidth - 1,
      size: this.rawDataWidth
    };
    const combinedSubtotal = rowSubtotalSize && columnSubtotalSize && this.doColumnSubtotals && this.doRowSubtotals && {
      row: columnSubtotal.row,
      column: rowSubtotal.column,
      size: columnSubtotalSize * rowSubtotalSize
    };
    const rowTotal = this.doRowTotals && {
      row,
      column: this.dataWidth - 1,
      size: this.rawDataWidth
    };
    const columnTotal = this.doColumnTotals && {
      row: this.dataHeight - 1,
      column,
      size: this.rawDataHeight
    };
    const combinedTotal = this.doColumnTotals && this.doRowTotals && {
      row: this.dataHeight - 1,
      column: this.dataWidth - 1,
      size: this.rawDataHeight * this.rawDataWidth
    };
    return {
      rowSubtotal,
      rowSubtotalColumnTotal,
      columnSubtotal,
      columnSubtotalRowTotal,
      rowTotal,
      columnTotal,
      combinedSubtotal,
      combinedTotal
    };
  }

  addCellValueToTotals(pos, dataRow) {
    const totals = this.getDependantTotalCells(pos);
    const dxDimension = this.getRawCellDxDimension(pos);
    Object.values(totals).forEach(totalItem => {
      if (!totalItem) return;
      this.data[totalItem.row] = this.data[totalItem.row] || [];
      this.data[totalItem.row][totalItem.column] = this.data[totalItem.row][totalItem.column] || {
        count: 0,
        totalCount: totalItem.size
      };
      const totalCell = this.data[totalItem.row][totalItem.column];
      const currentAggType = dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.totalAggregationType;
      const previousAggType = totalCell.totalAggregationType || currentAggType;

      if (previousAggType && currentAggType !== previousAggType) {
        totalCell.totalAggregationType = AGGREGATE_TYPE_NA;
      } else {
        totalCell.totalAggregationType = currentAggType;
      }

      const currentValueType = dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType;
      const previousValueType = totalCell.valueType;

      if (previousValueType && currentValueType !== previousValueType) {
        totalCell.valueType = AGGREGATE_TYPE_NA;
      } else {
        totalCell.valueType = currentValueType;
      }

      if ((dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) === VALUE_TYPE_NUMBER) {
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = parseValue(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            totalCell[field] = (totalCell[field] || 0) + value;
          }
        });
      }

      totalCell.count += 1;
    });

    if (this.visualization.numberType === NUMBER_TYPE_ROW_PERCENTAGE) {
      if (!this.percentageTotals[pos.row]) {
        this.percentageTotals[pos.row] = {
          count: 0,
          totalCount: this.rawDataWidth
        };
      }

      const percentageTotal = this.percentageTotals[pos.row];
      dataFields.forEach(field => {
        const headerIndex = this.dimensionLookup.dataHeaders[field];
        const value = parseValue(dataRow[headerIndex]);

        if (value && !isNaN(value)) {
          percentageTotal[field] = (percentageTotal[field] || 0) + value;
        }
      });

      if (totals.columnSubtotal) {
        if (!this.percentageTotals[totals.columnSubtotal.row]) {
          this.percentageTotals[totals.columnSubtotal.row] = {
            count: 0,
            totalCount: this.rawDataWidth
          };
        }

        const percentageTotal = this.percentageTotals[totals.columnSubtotal.row];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = parseValue(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            percentageTotal[field] = (percentageTotal[field] || 0) + value;
          }
        });
      }

      if (totals.columnTotal) {
        if (!this.percentageTotals[totals.columnTotal.row]) {
          this.percentageTotals[totals.columnTotal.row] = {
            count: 0,
            totalCount: this.rawDataWidth
          };
        }

        const percentageTotal = this.percentageTotals[totals.columnTotal.row];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = parseValue(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            percentageTotal[field] = (percentageTotal[field] || 0) + value;
          }
        });
      }
    }

    if (this.visualization.numberType === NUMBER_TYPE_COLUMN_PERCENTAGE) {
      if (!this.percentageTotals[pos.column]) {
        this.percentageTotals[pos.column] = {
          count: 0,
          totalCount: this.rawDataHeight
        };
      }

      const percentageTotal = this.percentageTotals[pos.column];
      dataFields.forEach(field => {
        const headerIndex = this.dimensionLookup.dataHeaders[field];
        const value = parseValue(dataRow[headerIndex]);

        if (value && !isNaN(value)) {
          percentageTotal[field] = (percentageTotal[field] || 0) + value;
        }
      });

      if (totals.rowSubtotal) {
        if (!this.percentageTotals[totals.rowSubtotal.column]) {
          this.percentageTotals[totals.rowSubtotal.column] = {
            count: 0,
            totalCount: this.rawDataHeight
          };
        }

        const percentageTotal = this.percentageTotals[totals.rowSubtotal.column];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = parseValue(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            percentageTotal[field] = (percentageTotal[field] || 0) + value;
          }
        });
      }

      if (totals.rowTotal) {
        if (!this.percentageTotals[totals.rowTotal.column]) {
          this.percentageTotals[totals.rowTotal.column] = {
            count: 0,
            totalCount: this.rawDataHeight
          };
        }

        const percentageTotal = this.percentageTotals[totals.rowTotal.column];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = parseValue(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            percentageTotal[field] = (percentageTotal[field] || 0) + value;
          }
        });
      }
    }
  }

  finalizeTotal({
    row,
    column
  }) {
    if (!this.data[row]) {
      return;
    }

    const totalCell = this.data[row][column];

    if (totalCell && totalCell.count) {
      totalCell.value = applyTotalAggregationType(totalCell, this.visualization.numberType !== NUMBER_TYPE_VALUE && AGGREGATE_TYPE_SUM);
      this.addCellForAdaptiveClipping({
        row,
        column
      }, renderValue(totalCell.value, totalCell.valueType, this.visualization));
    }
  }

  finalizeTotals() {
    var _this$dimensionLookup3, _this$dimensionLookup4;

    const columnSubtotalSize = ((_this$dimensionLookup3 = this.dimensionLookup.rows[0]) === null || _this$dimensionLookup3 === void 0 ? void 0 : _this$dimensionLookup3.size) + 1;
    const rowSubtotalSize = ((_this$dimensionLookup4 = this.dimensionLookup.columns[0]) === null || _this$dimensionLookup4 === void 0 ? void 0 : _this$dimensionLookup4.size) + 1;

    if (this.doRowSubtotals && rowSubtotalSize) {
      times(this.dimensionLookup.columns[0].count, n => (n + 1) * rowSubtotalSize - 1).forEach(column => {
        times(this.dataHeight - (this.doColumnTotals ? 1 : 0), n => n).forEach(row => {
          // skip combined subtotal cells
          if (!this.doColumnSubtotals || (row + 1) % columnSubtotalSize !== 0) {
            this.finalizeTotal({
              row,
              column
            });
          }
        });
      });
    }

    if (this.doColumnSubtotals && columnSubtotalSize) {
      times(this.dimensionLookup.rows[0].count, n => (n + 1) * columnSubtotalSize - 1).forEach(row => {
        times(this.dataWidth - (this.doRowTotals ? 1 : 0), n => n).forEach(column => {
          // skip combined subtotal cells
          if (!this.doRowSubtotals || (column + 1) % rowSubtotalSize !== 0) {
            this.finalizeTotal({
              row,
              column
            });
          }
        });
      });
    } // Combined subtotal cells


    if (this.doRowSubtotals && this.doColumnSubtotals && rowSubtotalSize && columnSubtotalSize) {
      times(this.dimensionLookup.rows[0].count, n => (n + 1) * columnSubtotalSize - 1).forEach(row => {
        times(this.dimensionLookup.columns[0].count, n => (n + 1) * rowSubtotalSize - 1).forEach(column => {
          this.finalizeTotal({
            row,
            column
          });
        });
      });
    }

    if (this.doRowTotals) {
      const column = this.dataWidth - 1;
      times(this.dataHeight - 1, n => n).forEach(row => {
        this.finalizeTotal({
          row,
          column
        });
      });
    }

    if (this.doColumnTotals) {
      const row = this.dataHeight - 1;
      times(this.dataWidth - 1, n => n).forEach(column => {
        this.finalizeTotal({
          row,
          column
        });
      });
    }

    if (this.doRowTotals && this.doColumnTotals) {
      this.finalizeTotal({
        row: this.dataHeight - 1,
        column: this.dataWidth - 1
      });
    }

    if (this.percentageTotals) {
      this.percentageTotals.forEach(item => {
        item.value = applyTotalAggregationType(item);
      });
    }
  }

  addCellForAdaptiveClipping({
    column
  }, renderedValue) {
    this.columnWidths[column] = Math.max(this.columnWidths[column] || 0, measureText(renderedValue, this.fontSize));
  }

  finalizeAdaptiveClipping() {
    this.dataPixelWidth = 0;
    this.rowHeaderPixelWidth = 0;
    let nextPartitionPx = 0;
    this.columnPartitions = [];

    const getColumnWidth = contentWidth => Math.min(CLIPPED_CELL_MAX_WIDTH, Math.ceil(contentWidth)) + this.cellPadding * 2 +
    /*border*/
    2;

    this.columnMap.forEach(column => {
      const header = this.getRawColumnHeader(column)[this.columnDepth - 1];
      const label = this.visualization.showHierarchy && (header === null || header === void 0 ? void 0 : header.hierarchy) ? header.hierarchy.join(' / ') : header === null || header === void 0 ? void 0 : header.name;

      if (label) {
        const headerSize = measureText(label, this.fontSize);
        this.columnWidths[column] = Math.max(this.columnWidths[column] || 0, headerSize + (this.isSortable(column) ? this.scrollIconBuffer : 0));
      }

      const colWidth = getColumnWidth(this.columnWidths[column]);
      this.columnWidths[column] = {
        pre: this.dataPixelWidth,
        width: colWidth
      };

      if (this.dataPixelWidth >= nextPartitionPx) {
        this.columnPartitions.push(column);
        nextPartitionPx += COLUMN_PARTITION_SIZE_PX;
      }

      this.dataPixelWidth += colWidth;
    });

    if (!this.dimensionLookup.rows.length && this.visualization.showDimensionLabels) {
      let maxWidth = 0;
      this.dimensionLookup.columns.forEach((_, columnLevel) => {
        const label = this.getDimensionLabel(0, columnLevel);

        if (label) {
          const headerSize = measureText(label, this.fontSize);
          maxWidth = Math.max(maxWidth, headerSize);
        }
      });
      const columnWidth = getColumnWidth(maxWidth);
      this.rowHeaderPixelWidth = columnWidth;
      this.rowHeaderWidths = [columnWidth];
    }

    this.rowHeaderWidths = this.dimensionLookup.rows.map((_, rowLevel) => {
      let maxWidth = 0;
      this.rowMap.forEach(rawColumn => {
        const header = this.getRawRowHeader(rawColumn)[rowLevel];
        const label = this.visualization.showHierarchy && (header === null || header === void 0 ? void 0 : header.hierarchy) ? header.hierarchy.join(' / ') : header === null || header === void 0 ? void 0 : header.name;

        if (label) {
          const headerSize = measureText(label, this.fontSize);
          maxWidth = Math.max(maxWidth, headerSize);
        }
      }, 0);

      if (this.visualization.showDimensionLabels) {
        this.dimensionLookup.columns.forEach((_, columnLevel) => {
          const label = this.getDimensionLabel(rowLevel, columnLevel);

          if (label) {
            const headerSize = measureText(label, this.fontSize);
            maxWidth = Math.max(maxWidth, headerSize);
          }
        });
      }

      const columnWidth = getColumnWidth(maxWidth);
      this.rowHeaderPixelWidth += columnWidth;
      return columnWidth;
    });
  }

  resetRowMap() {
    this.rowMap = this.options.hideEmptyRows ? times(this.dataHeight, n => n).filter(idx => !!this.data[idx]) : times(this.dataHeight, n => n);
  }

  resetColumnMap() {
    this.columnMap = this.options.hideEmptyColumns ? times(this.dataWidth, n => n).filter(idx => !!this.columnWidths[idx]) : times(this.dataWidth, n => n);
  }

  get cellPadding() {
    switch (this.visualization.displayDensity) {
      case DISPLAY_DENSITY_OPTION_COMPACT:
        return DISPLAY_DENSITY_PADDING_COMPACT;

      case DISPLAY_DENSITY_OPTION_COMFORTABLE:
        return DISPLAY_DENSITY_PADDING_COMFORTABLE;

      case DISPLAY_DENSITY_OPTION_NORMAL:
      default:
        return DISPLAY_DENSITY_PADDING_NORMAL;
    }
  }

  get fontSize() {
    switch (this.visualization.fontSize) {
      case FONT_SIZE_OPTION_SMALL:
        return FONT_SIZE_SMALL;

      case FONT_SIZE_OPTION_LARGE:
        return FONT_SIZE_LARGE;

      case FONT_SIZE_OPTION_NORMAL:
      default:
        return FONT_SIZE_NORMAL;
    }
  }

  get scrollIconBuffer() {
    switch (this.visualization.fontSize) {
      case FONT_SIZE_OPTION_SMALL:
        return 11;

      case FONT_SIZE_OPTION_LARGE:
        return 15;

      case FONT_SIZE_OPTION_NORMAL:
      default:
        return 13;
    }
  }

  buildMatrix() {
    this.data = [];
    this.columnWidths = [];
    this.dataHeight = this.rawDataHeight = countFromDisaggregates(this.dimensionLookup.rows);
    this.dataWidth = this.rawDataWidth = countFromDisaggregates(this.dimensionLookup.columns); // TODO: Check last row/col dimension for size===1, skip redundant sub-totals

    this.doRowSubtotals = this.options.showRowSubtotals && this.columnDepth > 1;
    this.doColumnSubtotals = this.options.showColumnSubtotals && this.rowDepth > 1;
    this.doRowTotals = this.options.showRowTotals && this.dataWidth > 1;
    this.doColumnTotals = this.options.showColumnTotals && this.dataHeight > 1;

    if (this.doRowSubtotals) {
      this.dataWidth += this.dimensionLookup.columns[0].count;
    }

    if (this.doColumnSubtotals) {
      this.dataHeight += this.dimensionLookup.rows[0].count;
    }

    if (this.doRowTotals) {
      this.dataWidth += 1;
    }

    if (this.doColumnTotals) {
      this.dataHeight += 1;
    } // TODO: Use total cell calculation, don't duplicate here


    if (this.visualization.numberType === NUMBER_TYPE_ROW_PERCENTAGE || this.visualization.numberType === NUMBER_TYPE_COLUMN_PERCENTAGE) {
      this.percentageTotals = [];
    }

    this.rawData.rows.forEach(dataRow => {
      const pos = lookup(dataRow, this.dimensionLookup, this);

      if (pos) {
        this.data[pos.row] = this.data[pos.row] || [];
        this.data[pos.row][pos.column] = dataRow;
        this.addCellValueToTotals(pos, dataRow);
      }
    });
    this.finalizeTotals();
    this.rawData.rows.forEach(dataRow => {
      const pos = lookup(dataRow, this.dimensionLookup, this);

      if (pos) {
        this.addCellForAdaptiveClipping(pos, this.getRaw(pos).renderedValue);
      }
    });
    this.resetRowMap();
    this.resetColumnMap();
    this.height = this.rowMap.length;
    this.width = this.columnMap.length;
    this.finalizeAdaptiveClipping();
  }

  getColumnType(column) {
    column = this.columnMap[column];

    if (!column && column !== 0) {
      return undefined;
    }

    if (this.doRowSubtotals && (column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0) {
      return CELL_TYPE_SUBTOTAL;
    }

    if (this.doRowTotals && column === this.dataWidth - 1) {
      return CELL_TYPE_TOTAL;
    }

    return CELL_TYPE_VALUE;
  }

  isSortable(column) {
    return this.dataHeight > 1 && !this.doColumnSubtotals && this.getColumnType(column) !== undefined;
  }

  sort(column, order) {
    if (order !== SORT_ORDER_ASCENDING && order !== SORT_ORDER_DESCENDING) {
      console.warn("Invalid sort order ".concat(order));
      return;
    }

    if (!this.isSortable(column)) {
      console.warn("Invalid sort column ".concat(column));
      return;
    }

    const mappedColumn = this.columnMap[column];
    this.rowMap.sort((rowA, rowB) => {
      if (this.doColumnTotals && rowA === this.dataHeight - 1) {
        return 1;
      }

      if (this.doColumnTotals && rowB === this.dataHeight - 1) {
        return -1;
      }

      const valueA = this.getRaw({
        row: rowA,
        column: mappedColumn
      });
      const valueB = this.getRaw({
        row: rowB,
        column: mappedColumn
      });

      if ((!valueA || valueA.empty) && (!valueB || valueB.empty)) {
        return 0;
      }

      if (!valueA || valueA.empty) {
        return -1 * order;
      }

      if (!valueB || valueB.empty) {
        return 1 * order;
      }

      if (valueA.valueType === VALUE_TYPE_NUMBER && valueB.valueType === VALUE_TYPE_NUMBER) {
        return (valueA.rawValue - valueB.rawValue) * order;
      }

      return valueA.renderedValue.localeCompare(valueB.renderedValue) * order;
    });
  }

  clearSort() {
    this.resetRowMap();
  }

}

const initialState = {
  width: 0,
  height: 0
};
const useParentSize = (elementRef, renderCounter, initialSize = initialState) => {
  const [size, setSize] = React.useState({
    width: initialSize.width || 0,
    height: initialSize.height || 0
  });
  React.useEffect(() => {
    const el = elementRef.current && elementRef.current.parentElement;
    if (!el) return;

    const onResize = () => {
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };

    onResize();

    if (renderCounter) {
      setSize(initialState);
    }

    const observer = new ResizeObserver(onResize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementRef, renderCounter]);
  return size;
};

const useScrollPosition = (containerRef, debounceWait = 10) => {
  const [scrollPosition, setScrollPosition] = React.useState({
    x: 0,
    y: 0
  });
  const onScroll = React.useCallback(debounce(() => {
    const scroll = {
      x: containerRef.current.scrollLeft,
      y: containerRef.current.scrollTop
    };
    setScrollPosition(scroll);
  }, debounceWait));
  React.useEffect(() => {
    const currentRef = containerRef.current;

    if (!currentRef) {
      return;
    }

    currentRef.addEventListener('scroll', onScroll);
    return () => {
      currentRef.removeEventListener('scroll', onScroll);
    };
  }, [containerRef, onScroll]);
  return scrollPosition;
};

const clipAxis = ({
  position,
  size,
  step,
  totalCount,
  headerCount
}) => {
  const floor = headerCount * step;
  const offset = position < floor ? floor - position : 0;
  const count = Math.min(totalCount, Math.ceil((size - offset) / step) + 1);
  position = Math.max(0, position - floor); // TODO: Support sticky headers

  const start = Math.min(totalCount - count, Math.floor(position / step));
  const pre = Math.max(start * step, 0);
  const post = (totalCount - (start + count)) * step;
  const indices = times(count, n => start + n);
  return {
    indices,
    pre,
    post
  };
};

const clipPartitionedAxis = ({
  partitionSize,
  partitions,
  axisMap,
  widthMap,
  viewportWidth,
  viewportPosition,
  totalWidth
}) => {
  const partition = Math.floor(viewportPosition / partitionSize);

  if (partitions[partition] === undefined) {
    return {
      indices: [0],
      pre: 0,
      post: 0
    };
  }

  let start = partitions[partition];

  while (start < axisMap.length && widthMap[axisMap[start]].pre < viewportPosition) {
    ++start;
  }

  start = start === 0 ? start : start - 1;
  const pre = widthMap[axisMap[start]].pre;
  const indices = [];
  let end = start;

  while (end < axisMap.length && widthMap[axisMap[end]].pre < viewportPosition + viewportWidth) {
    indices.push(end);
    ++end;
  }

  end = end === 0 ? end : end - 1;
  const post = totalWidth - (widthMap[axisMap[end]].pre + widthMap[axisMap[end]].width);
  return {
    indices,
    pre,
    post
  };
};

const useTableClipping = ({
  containerRef,
  width,
  height,
  engine,
  visualization
}) => {
  const scrollPosition = useScrollPosition(containerRef);
  const rows = React.useMemo(() => clipAxis({
    position: scrollPosition.y,
    size: height,
    step: engine.fontSize + engine.cellPadding * 2 + 2,
    totalCount: engine.height,
    headerCount: visualization.columns.length + (engine.options.title ? 1 : 0) + (engine.options.subtitle ? 1 : 0)
  }), [scrollPosition.y, height, engine.fontSize, engine.cellPadding, engine.height, engine.options.title, engine.options.subtitle, visualization.columns.length]);
  const columns = React.useMemo(() => {
    const viewportPosition = Math.max(0, scrollPosition.x - engine.rowHeaderPixelWidth);
    const viewportWidth = width - Math.max(engine.rowHeaderPixelWidth - scrollPosition.x, 0);
    return clipPartitionedAxis({
      partitionSize: COLUMN_PARTITION_SIZE_PX,
      partitions: engine.columnPartitions,
      axisMap: engine.columnMap,
      widthMap: engine.columnWidths,
      viewportWidth,
      viewportPosition,
      totalWidth: engine.dataPixelWidth
    });
  }, [scrollPosition.x, engine.rowHeaderPixelWidth, engine.columnPartitions, engine.columnMap, engine.columnWidths, engine.dataPixelWidth, width]);
  return {
    rows,
    columns,
    scrollPosition
  };
};

const PivotTableEngineContext = React.createContext(null);
const Provider = ({
  engine,
  children
}) => {
  return /*#__PURE__*/React__default.createElement(PivotTableEngineContext.Provider, {
    value: engine
  }, children);
};
Provider.propTypes = {
  engine: PropTypes.object.isRequired,
  children: PropTypes.node
};
const usePivotTableEngine = () => {
  return React.useContext(PivotTableEngineContext);
};

const table = ["div.pivot-table-container.jsx-3458923541{font-family:'Roboto',Arial,sans-serif;overflow:auto;color:".concat(uiCore.colors.grey900, ";}"), "table.jsx-3458923541{border-spacing:0;border-collapse:collapse;white-space:nowrap;overflow:hidden;box-sizing:border-box;text-align:center;}"];
table.__hash = "3458923541";
const cell = ["td.jsx-2951476454,th.jsx-2951476454{box-sizing:border-box;font-weight:normal;overflow:hidden;text-overflow:ellipsis;border:1px solid #b2b2b2;cursor:default;}", ".fontsize-SMALL.jsx-2951476454{font-size:".concat(FONT_SIZE_SMALL, "px;line-height:").concat(FONT_SIZE_SMALL, "px;}"), ".fontsize-NORMAL.jsx-2951476454{font-size:".concat(FONT_SIZE_NORMAL, "px;line-height:").concat(FONT_SIZE_NORMAL, "px;}"), ".fontsize-LARGE.jsx-2951476454{font-size:".concat(FONT_SIZE_LARGE, "px;line-height:").concat(FONT_SIZE_LARGE, "px;}"), ".displaydensity-COMPACT.jsx-2951476454{padding:".concat(DISPLAY_DENSITY_PADDING_COMPACT, "px;}"), ".displaydensity-NORMAL.jsx-2951476454{padding:".concat(DISPLAY_DENSITY_PADDING_NORMAL, "px;}"), ".displaydensity-COMFORTABLE.jsx-2951476454{padding:".concat(DISPLAY_DENSITY_PADDING_COMFORTABLE, "px;}"), ".column-header.jsx-2951476454{background-color:#dae6f8;}", "div.column-header-inner.jsx-2951476454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".title.jsx-2951476454{font-weight:bold;background-color:#cddaed;}", ".row-header.jsx-2951476454{background-color:#dae6f8;}", ".row-header-hierarchy.jsx-2951476454{text-align:left;}", ".empty-header.jsx-2951476454{background-color:#cddaed;}", ".total-header.jsx-2951476454{background-color:#bac6d8;}", ".value.jsx-2951476454{background-color:#ffffff;}", ".TEXT.jsx-2951476454{text-align:left;}", ".NUMBER.jsx-2951476454{text-align:right;}", ".clickable.jsx-2951476454{cursor:pointer;}", ".value.jsx-2951476454:hover{background-color:#f3f3f3;}", ".subtotal.jsx-2951476454{background-color:#f4f4f4;}", ".total.jsx-2951476454{background-color:#d8d8d8;}", ".column-header-label.jsx-2951476454{overflow:hidden;text-overflow:ellipsis;}"];
cell.__hash = "2951476454";
const sortIcon = [".fontsize-SMALL.jsx-2877616992{height:".concat(FONT_SIZE_SMALL, "px;margin-bottom:1px;margin-left:5px;}"), ".fontsize-NORMAL.jsx-2877616992{height:".concat(FONT_SIZE_NORMAL, "px;max-height:11px;margin-bottom:2px;margin-left:6px;}"), ".fontsize-LARGE.jsx-2877616992{height:".concat(FONT_SIZE_LARGE, "px;margin-bottom:2px;margin-left:7px;}")];
sortIcon.__hash = "2877616992";

const PivotTableContainer = React__default.forwardRef(({
  width,
  height,
  children
}, ref) => /*#__PURE__*/React__default.createElement("div", {
  style: {
    width,
    height
  },
  ref: ref,
  className: "jsx-".concat(table.__hash) + " " + "pivot-table-container"
}, /*#__PURE__*/React__default.createElement(_JSXStyle, {
  id: table.__hash
}, table), width === 0 || height === 0 ? null : /*#__PURE__*/React__default.createElement("table", {
  className: "jsx-".concat(table.__hash)
}, children)));
PivotTableContainer.displayName = 'PivotTableContainer';
PivotTableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

const PivotTableClippedAxis = ({
  axisClippingResult,
  EmptyComponent,
  ItemComponent
}) => [axisClippingResult.pre ? /*#__PURE__*/React__default.createElement(EmptyComponent, {
  key: "pre",
  size: axisClippingResult.pre
}) : null, axisClippingResult.indices.map(index => /*#__PURE__*/React__default.createElement(ItemComponent, {
  key: index,
  index: index
})), axisClippingResult.post ? /*#__PURE__*/React__default.createElement(EmptyComponent, {
  key: "post",
  size: axisClippingResult.post
}) : null];

const headerStacksAreEqual = (a, b, limit) => {
  for (let i = 0; i <= limit; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

const getHeaderForDisplay = ({
  start,
  count,
  index,
  dimensionLevel,
  getHeader,
  showHierarchy
}) => {
  const header = getHeader(index);
  const showHeader = index === start || !headerStacksAreEqual(header, getHeader(index - 1), dimensionLevel);

  if (!showHeader) {
    return null;
  }

  let span = 1;

  for (let i = index + 1; i < start + count; ++i) {
    if (!headerStacksAreEqual(getHeader(i), header, dimensionLevel)) {
      break;
    }

    ++span;
  }

  const currentHeader = header[dimensionLevel];
  const includesHierarchy = showHierarchy && (currentHeader === null || currentHeader === void 0 ? void 0 : currentHeader.hierarchy);
  const label = includesHierarchy ? currentHeader.hierarchy.join(' / ') : currentHeader === null || currentHeader === void 0 ? void 0 : currentHeader.name;
  return {
    span,
    label,
    includesHierarchy
  };
};

const PivotTableHeaderCell = ({
  axisClippingResult,
  index,
  level,
  getHeader,
  render,
  showHierarchy
}) => {
  const header = getHeaderForDisplay({
    start: axisClippingResult.indices[0],
    count: axisClippingResult.indices.length,
    index,
    dimensionLevel: level,
    getHeader,
    showHierarchy
  });
  return !header ? null : render(header);
};
PivotTableHeaderCell.propTypes = {
  axisClippingResult: PropTypes.object.isRequired,
  getHeader: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired,
  showHierarchy: PropTypes.bool.isRequired
};

const PivotTableCell = React__default.forwardRef((_ref, ref) => {
  let {
    classes,
    isColumnHeader,
    children,
    style = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["classes", "isColumnHeader", "children", "style"]);

  const engine = usePivotTableEngine();
  style.height = style.minHeight = style.maxHeight = style.height || engine.fontSize + engine.cellPadding * 2 + 2;
  const className = cx(classes, "fontsize-".concat(engine.visualization.fontSize), "displaydensity-".concat(engine.visualization.displayDensity));
  return isColumnHeader ? /*#__PURE__*/React__default.createElement("th", _extends({
    style: style
  }, props, {
    className: "jsx-".concat(cell.__hash) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: cell.__hash
  }, cell), children) : /*#__PURE__*/React__default.createElement("td", _extends({
    ref: ref,
    style: style
  }, props, {
    className: "jsx-".concat(cell.__hash) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: cell.__hash
  }, cell), children);
});
PivotTableCell.displayName = 'PivotTableCell';
PivotTableCell.defaultProps = {
  isColumnHeader: false
};
PivotTableCell.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  isColumnHeader: PropTypes.bool,
  style: PropTypes.object
};

const SortIconAscending = () => /*#__PURE__*/React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 10",
  height: "100%"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-3 -1)"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "12",
  height: "12"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#A0ADBA",
  points: "6 11 3 7 9 7"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#212934",
  points: "3 5 9 5 6 1"
})));

const SortIconDescending = () => /*#__PURE__*/React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 10",
  height: "100%"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-3 -1)"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "12",
  height: "12"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#212934",
  points: "6 11 3 7 9 7"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#A0ADBA",
  points: "3 5 9 5 6 1"
})));

const SortIconIdle = () => /*#__PURE__*/React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 10",
  height: "100%"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-3 -1)"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "12",
  height: "12"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#A0ADBA",
  points: "6 11 3 7 9 7"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#A0ADBA",
  points: "3 5 9 5 6 1"
})));

const PivotTableSortIcon = ({
  index,
  sortBy
}) => {
  const engine = usePivotTableEngine();
  const SortIcon = (sortBy === null || sortBy === void 0 ? void 0 : sortBy.column) === index ? sortBy.order === SORT_ORDER_ASCENDING ? SortIconAscending : SortIconDescending : SortIconIdle;
  return /*#__PURE__*/React__default.createElement("span", {
    className: "jsx-".concat(sortIcon.__hash) + " " + "fontsize-".concat(engine.visualization.fontSize)
  }, /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: sortIcon.__hash
  }, sortIcon), /*#__PURE__*/React__default.createElement(SortIcon, {
    className: "jsx-".concat(sortIcon.__hash)
  }));
};
PivotTableSortIcon.propTypes = {
  index: PropTypes.number.isRequired,
  sortBy: PropTypes.object
};

const PivotTableColumnHeaderCell = ({
  clippingResult,
  index,
  level,
  onSortByColumn,
  sortBy
}) => {
  var _engine$columnWidths$;

  const engine = usePivotTableEngine();
  const width = (_engine$columnWidths$ = engine.columnWidths[index]) === null || _engine$columnWidths$ === void 0 ? void 0 : _engine$columnWidths$.width;
  return /*#__PURE__*/React__default.createElement(PivotTableHeaderCell, {
    axisClippingResult: clippingResult.columns,
    index: index,
    level: level,
    getHeader: idx => engine.getColumnHeader(idx),
    showHierarchy: engine.visualization.showHierarchy,
    render: header => {
      const isSortable = level === engine.columnDepth - 1 && header.span === 1 && engine.isSortable(index);
      return /*#__PURE__*/React__default.createElement(PivotTableCell, {
        isColumnHeader: true,
        classes: header.label && header.label !== 'Total' && header.label !== 'Subtotal' // TODO: Actually look up the column type!
        ? 'column-header' : 'empty-header',
        colSpan: header.span,
        title: header.label,
        style: {
          cursor: isSortable ? 'pointer' : 'default',
          width,
          maxWidth: width,
          minWidth: width
        },
        onClick: isSortable ? () => onSortByColumn(index) : undefined
      }, /*#__PURE__*/React__default.createElement(_JSXStyle, {
        id: cell.__hash
      }, cell), /*#__PURE__*/React__default.createElement("div", {
        className: "jsx-".concat(cell.__hash) + " " + "column-header-inner"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "jsx-".concat(cell.__hash) + " " + "column-header-label"
      }, header.label), isSortable ? /*#__PURE__*/React__default.createElement(PivotTableSortIcon, {
        index: index,
        sortBy: sortBy
      }) : null));
    }
  });
};
PivotTableColumnHeaderCell.propTypes = {
  clippingResult: PropTypes.shape({
    columns: PropTypes.object.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  onSortByColumn: PropTypes.func.isRequired,
  sortBy: PropTypes.shape({
    column: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired
  })
};

const PivotTableDimensionLabelCell = ({
  rowLevel,
  columnLevel
}) => {
  const engine = usePivotTableEngine();
  const colCount = engine.rowDepth;
  const rowCount = engine.columnDepth;
  let colSpan = 1,
      rowSpan = 1,
      label;

  if (!engine.visualization.showDimensionLabels) {
    if (rowLevel > 0 || columnLevel > 0) {
      colSpan = rowSpan = 0;
    } else {
      colSpan = colCount;
      rowSpan = rowCount;
    }
  } else {
    label = engine.getDimensionLabel(rowLevel, columnLevel);

    if (!label) {
      if (rowLevel > 0 || columnLevel > 0) {
        colSpan = rowSpan = 0;
      } else {
        colSpan = colCount - 1;
        rowSpan = rowCount - 1;
      }
    }
  }

  if (!colSpan || !rowSpan) {
    return null;
  }

  const width = engine.rowHeaderWidths[rowLevel];
  return /*#__PURE__*/React__default.createElement(PivotTableCell, {
    classes: ['empty-header', 'column-header'],
    colSpan: colSpan,
    rowSpan: rowSpan,
    title: label,
    style: {
      width,
      maxWidth: width,
      minWidth: width
    }
  }, label);
};
PivotTableDimensionLabelCell.propTypes = {
  columnLevel: PropTypes.number.isRequired,
  rowLevel: PropTypes.number.isRequired
};

const PivotTableEmptyCell = React__default.forwardRef((_ref, ref) => {
  let props = _extends({}, _ref);

  return /*#__PURE__*/React__default.createElement(PivotTableCell, _extends({
    ref: ref
  }, props), /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: cell.__hash
  }, cell));
});
PivotTableEmptyCell.displayName = 'PivotTableEmptyCell';

const PivotTableColumnHeaders = ({
  clippingResult,
  onSortByColumn,
  sortBy
}) => {
  const engine = usePivotTableEngine();
  const columns = times(engine.columnDepth, x => x);
  const rows = times(engine.rowDepth, x => x);
  return columns.map(columnLevel => /*#__PURE__*/React__default.createElement("tr", {
    key: columnLevel
  }, rows.map(rowLevel => /*#__PURE__*/React__default.createElement(PivotTableDimensionLabelCell, {
    key: rowLevel,
    rowLevel: rowLevel,
    columnLevel: columnLevel
  })), /*#__PURE__*/React__default.createElement(PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: ({
      size
    }) => /*#__PURE__*/React__default.createElement(PivotTableEmptyCell, {
      classes: "column-header",
      style: {
        minWidth: size
      }
    }),
    ItemComponent: ({
      index
    }) => /*#__PURE__*/React__default.createElement(PivotTableColumnHeaderCell, {
      clippingResult: clippingResult,
      index: index,
      level: columnLevel,
      onSortByColumn: onSortByColumn,
      sortBy: sortBy
    })
  })));
};
PivotTableColumnHeaders.propTypes = {
  clippingResult: PropTypes.shape({
    columns: PropTypes.object.isRequired
  }).isRequired,
  onSortByColumn: PropTypes.func.isRequired,
  sortBy: PropTypes.shape({
    column: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired
  })
};

const PivotTableTitleRow = ({
  title,
  scrollPosition,
  containerWidth,
  totalWidth
}) => {
  const engine = usePivotTableEngine();
  const columnCount = engine.width + engine.rowDepth;
  const [position, setPosition] = React.useState(scrollPosition.x);
  React.useEffect(() => {
    setPosition(Math.max(0, Math.min(scrollPosition.x, totalWidth - containerWidth)));
  }, [containerWidth, scrollPosition.x, totalWidth]);
  return /*#__PURE__*/React__default.createElement("tr", {
    className: "jsx-".concat(cell.__hash)
  }, /*#__PURE__*/React__default.createElement(_JSXStyle, {
    id: cell.__hash
  }, cell), /*#__PURE__*/React__default.createElement(PivotTableCell, {
    classes: ['column-header', 'title'],
    colSpan: columnCount
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginLeft: position,
      maxWidth: containerWidth,
      textAlign: 'center'
    },
    className: "jsx-".concat(cell.__hash)
  }, title)));
};
PivotTableTitleRow.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  scrollPosition: PropTypes.shape({
    x: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  totalWidth: PropTypes.number.isRequired
};

const DIMENSION = {
  isValid: dimension => isObject(dimension)
}; // Props

const DIMENSION_PROP_ID = {
  name: 'dimension',
  defaultValue: '',
  required: true,
  isValid: prop => isString(prop)
};
const DIMENSION_PROP_ITEMS = {
  name: 'items',
  defaultValue: [],
  required: false,
  isValid: prop => Array.isArray(prop)
};
const DIMENSION_PROPS = [DIMENSION_PROP_ID, DIMENSION_PROP_ITEMS];

const dimensionIs = (dimension, dimensionId) => dimension[DIMENSION_PROP_ID.name] === dimensionId;

const dimensionIsEmpty = dimension => !(DIMENSION.isValid(dimension) && DIMENSION_PROP_ITEMS.isValid(dimension[DIMENSION_PROP_ITEMS.name]) && dimension[DIMENSION_PROP_ITEMS.name].length);

const dimensionIsValid = (dimension, {
  requireItems
} = {}) => {
  if (!DIMENSION.isValid(dimension)) {
    return false;
  }

  const requiredProps = DIMENSION_PROPS.filter(prop => prop.required);

  if (!requiredProps.every(prop => prop.isValid(dimension[prop.name]))) {
    return false;
  }

  if (requireItems === true && dimensionIsEmpty(dimension)) {
    return false;
  }

  return true;
};

const dimensionGetItems = dimension => dimensionIsValid(dimension, {
  requireItems: true
}) ? dimension[DIMENSION_PROP_ITEMS.name] : DIMENSION_PROP_ITEMS.defaultValue;

const getOuLevelAndGroupText = (filter, metaData) => {
  if (!dimensionIs(DIMENSION_ID_ORGUNIT)) {
    return '';
  }

  const items = dimensionGetItems(filter);
  const hasOuLevel = items.some(item => ouIdHelper.hasLevelPrefix(item.id));
  const hasOuGroup = items.some(item => ouIdHelper.hasGroupPrefix(item.id));
  const filterFragments = [];

  if (hasOuGroup) {
    filterFragments.push(getLevelAndGroupText(items, metaData, false));
  }

  if (hasOuLevel) {
    filterFragments.push(getLevelAndGroupText(items, metaData, true));
  }

  return filterFragments.join(' - ');
};

const getLevelAndGroupText = (items, metaData, isLevel) => {
  const getNameFromMetadata = id => metaData.items[id] ? metaData.items[id].name : id;

  const dynamicOuItems = items.filter(item => isLevel ? ouIdHelper.hasLevelPrefix(item.id) : ouIdHelper.hasGroupPrefix(item.id));
  const lastItem = dynamicOuItems.length > 1 ? dynamicOuItems.pop() : null;
  const dynamicOuNames = dynamicOuItems.map(item => getNameFromMetadata(ouIdHelper.removePrefix(item.id))).join(', ');
  let allDynamicOuNames;

  if (lastItem) {
    const lastOuName = getNameFromMetadata(ouIdHelper.removePrefix(lastItem.id));
    allDynamicOuNames = i18n.t('{{dynamicOuNames}} and {{lastOuName}}', {
      dynamicOuNames,
      lastOuName
    });
  } else {
    allDynamicOuNames = dynamicOuNames;
  }

  const staticOuNames = items.filter(item => !ouIdHelper.hasGroupPrefix(item.id) && !ouIdHelper.hasLevelPrefix(item.id)).map(item => getNameFromMetadata(item.id)).join(', ');
  let ouLevelAndGroupText = '';

  if (!staticOuNames) {
    if (isLevel) {
      ouLevelAndGroupText = i18n.t('{{allDynamicOuNames}} levels', {
        allDynamicOuNames
      });
    } else {
      ouLevelAndGroupText = i18n.t('{{allDynamicOuNames}} groups', {
        allDynamicOuNames
      });
    }
  } else {
    if (isLevel) {
      ouLevelAndGroupText = i18n.t('{{allDynamicOuNames}} levels in {{staticOuNames}}', {
        allDynamicOuNames,
        staticOuNames
      });
    } else {
      ouLevelAndGroupText = i18n.t('{{allDynamicOuNames}} groups in {{staticOuNames}}', {
        allDynamicOuNames,
        staticOuNames
      });
    }
  }

  return ouLevelAndGroupText;
};

function getFilterText (filters, metaData) {
  if (!Array.isArray(filters) || !filters.length) {
    return '';
  }

  const titleFragments = [];
  let i;
  let l;
  filters.forEach(filter => {
    const items = dimensionGetItems(filter);

    if (dimensionIs(filter, DIMENSION_ID_ORGUNIT) && items.some(({
      id
    }) => ouIdHelper.hasGroupPrefix(id) || ouIdHelper.hasLevelPrefix(id))) {
      titleFragments.push(getOuLevelAndGroupText(filter, metaData));
    } else {
      let filterItems = [];

      if (dimensionIs(filter, DIMENSION_ID_PERIOD)) {
        filterItems = items.map(({
          id
        }) => id);
      } else {
        filterItems = metaData.dimensions[filter.dimension];
      }

      if (Array.isArray(filterItems)) {
        l = filterItems.length;
        let id;
        const sectionParts = [];

        for (i = 0; i < l; i++) {
          id = filterItems[i]; // if the value is present in items take the name to show from there

          if (metaData.items[id]) {
            sectionParts.push(metaData.items[id].name);
          } // otherwise use the values directly
          // this is a temporary fix to avoid app crashing when using filters with data items in EV
          else {
              sectionParts.push(metaData.items[filter.dimension].name + ': ' + filterItems.join(', '));
              break;
            }
        }

        titleFragments.push(sectionParts.join(', '));
      }
    }
  });
  return titleFragments.join(' - ');
}

const PivotTableTitleRows = ({
  clippingResult,
  width
}) => {
  var _engine$visualization;

  const engine = usePivotTableEngine();
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, engine.options.title ? /*#__PURE__*/React__default.createElement(PivotTableTitleRow, {
    title: engine.options.title,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width,
    totalWidth: engine.dataPixelWidth + engine.rowHeaderPixelWidth
  }) : null, engine.options.subtitle ? /*#__PURE__*/React__default.createElement(PivotTableTitleRow, {
    title: engine.options.subtitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width,
    totalWidth: engine.dataPixelWidth + engine.rowHeaderPixelWidth
  }) : null, ((_engine$visualization = engine.visualization.filters) === null || _engine$visualization === void 0 ? void 0 : _engine$visualization.length) ? /*#__PURE__*/React__default.createElement(PivotTableTitleRow, {
    title: getFilterText(engine.visualization.filters, engine.rawData.metaData),
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width,
    totalWidth: engine.dataPixelWidth + engine.rowHeaderPixelWidth
  }) : null);
};
PivotTableTitleRows.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
};

const PivotTableHead = ({
  clippingResult,
  width,
  sortBy,
  onSortByColumn
}) => /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement(PivotTableTitleRows, {
  clippingResult: clippingResult,
  width: width
}), /*#__PURE__*/React__default.createElement(PivotTableColumnHeaders, {
  clippingResult: clippingResult,
  sortBy: sortBy,
  onSortByColumn: onSortByColumn
}));
PivotTableHead.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  onSortByColumn: PropTypes.func.isRequired,
  sortBy: PropTypes.object
};

const PivotTableEmptyRow = ({
  height,
  columns
}) => {
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React__default.createElement("tr", null, /*#__PURE__*/React__default.createElement(PivotTableCell, {
    colSpan: engine.rowDepth,
    style: {
      height
    },
    classes: "row-header"
  }), columns.map(i => /*#__PURE__*/React__default.createElement(PivotTableCell, {
    key: i
  })));
};
PivotTableEmptyRow.propTypes = {
  columns: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired
};

const PivotTableRowHeaderCell = ({
  clippingResult,
  rowIndex,
  rowLevel
}) => {
  const engine = usePivotTableEngine();
  const width = engine.rowHeaderWidths[rowLevel];
  return /*#__PURE__*/React__default.createElement(PivotTableHeaderCell, {
    axisClippingResult: clippingResult.rows,
    index: rowIndex,
    level: rowLevel,
    getHeader: idx => engine.getRowHeader(idx),
    showHierarchy: engine.visualization.showHierarchy,
    render: header => /*#__PURE__*/React__default.createElement(PivotTableCell, {
      classes: [header.label && header.label !== 'Total' && header.label !== 'Subtotal' ? 'row-header' : 'empty-header', header.includesHierarchy && 'row-header-hierarchy'],
      rowSpan: header.span,
      title: header.label,
      style: {
        width,
        maxWidth: width,
        minWidth: width
      }
    }, header.label)
  });
};
PivotTableRowHeaderCell.propTypes = {
  clippingResult: PropTypes.shape({
    rows: PropTypes.object.isRequired
  }).isRequired,
  rowIndex: PropTypes.number.isRequired,
  rowLevel: PropTypes.number.isRequired
};

const calculateColorBrightness = function calculateColorBrightness(rgb) {
  return Math.round((parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000);
};

const isHex = color => {
  return typeof color === 'string' && color.charAt(0) === '#';
};

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};

const isColorBright = color => {
  if (isHex(color)) {
    color = hexToRgb(color);
  }

  return calculateColorBrightness(color) > 125;
};

const LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = 'BY_DATA_ITEM';
const LEGEND_DISPLAY_STRATEGY_FIXED = 'FIXED';
const LEGEND_DISPLAY_STYLE_FILL = 'FILL';
const LEGEND_DISPLAY_STYLE_TEXT = 'TEXT';
const getColorByValueFromLegendSet = (legendSet, value) => {
  const legend = legendSet.legends.find(legend => value >= legend.startValue && value < legend.endValue // TODO: Confirm inclusive/exclusive bounds
  );
  return legend && legend.color;
};

const getLegendSet = (engine, dxDimension) => {
  let legendSetId;

  switch (engine.visualization.legendDisplayStrategy) {
    case LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM:
      if (dxDimension && dxDimension.legendSet) {
        legendSetId = dxDimension.legendSet;
      }

      break;

    case LEGEND_DISPLAY_STRATEGY_FIXED:
    default:
      legendSetId = engine.visualization.legendSet ? engine.visualization.legendSet.id : undefined;
      break;
  }

  return engine.legendSets[legendSetId];
};

const buildStyleObject = (legendColor, engine) => {
  const style = {};

  switch (engine.visualization.legendDisplayStyle) {
    case LEGEND_DISPLAY_STYLE_TEXT:
      style.color = legendColor;
      break;

    case LEGEND_DISPLAY_STYLE_FILL:
    default:
      style.backgroundColor = legendColor;

      if (isColorBright(legendColor)) {
        style.color = uiCore.colors.grey900;
      } else {
        style.color = uiCore.colors.white;
      }

      break;
  }

  return style;
};

const applyLegendSet = (value, dxDimension, engine) => {
  if (isNaN(value) || !engine.legendSets) {
    return {};
  }

  const legendSet = getLegendSet(engine, dxDimension);

  if (!legendSet) {
    return {};
  }

  const legendColor = getColorByValueFromLegendSet(legendSet, value);

  if (!legendColor) {
    return {};
  }

  return buildStyleObject(legendColor, engine);
};

const PivotTableValueCell = ({
  row,
  column,
  onToggleContextualMenu
}) => {
  var _cellContent$rendered;

  const engine = usePivotTableEngine();
  const cellRef = React.useRef(undefined);
  const cellContent = engine.get({
    row,
    column
  });
  const isClickable = onToggleContextualMenu && cellContent.cellType === CELL_TYPE_VALUE && cellContent.ouId;
  const classes = [cellContent.cellType, cellContent.valueType, isClickable && 'clickable'];

  const onClick = () => {
    onToggleContextualMenu(cellRef, cellContent);
  };

  if (!cellContent || cellContent.empty) {
    return /*#__PURE__*/React__default.createElement(PivotTableEmptyCell, {
      onClick: isClickable ? onClick : undefined,
      ref: cellRef,
      classes: [cellContent.cellType, isClickable && 'clickable']
    });
  } // TODO: Add support for 'INTEGER' type (requires server changes)


  const legendStyle = cellContent.cellType === CELL_TYPE_VALUE && cellContent.valueType === VALUE_TYPE_NUMBER ? applyLegendSet(cellContent.rawValue, cellContent.dxDimension, engine) : undefined;
  const width = engine.columnWidths[engine.columnMap[column]].width;

  const style = _objectSpread2({}, legendStyle, {
    width,
    minWidth: width,
    maxWidth: width
  });

  return /*#__PURE__*/React__default.createElement(PivotTableCell, {
    key: column,
    classes: classes,
    title: cellContent.renderedValue,
    style: style,
    onClick: isClickable ? onClick : undefined,
    ref: cellRef
  }, (_cellContent$rendered = cellContent.renderedValue) !== null && _cellContent$rendered !== void 0 ? _cellContent$rendered : null);
};
PivotTableValueCell.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  onToggleContextualMenu: PropTypes.func
};

const PivotTableRow = ({
  clippingResult,
  rowIndex,
  onToggleContextualMenu
}) => {
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React__default.createElement("tr", null, times(engine.rowDepth, x => x).map(rowLevel => /*#__PURE__*/React__default.createElement(PivotTableRowHeaderCell, {
    key: rowLevel,
    clippingResult: clippingResult,
    rowIndex: rowIndex,
    rowLevel: rowLevel
  })), /*#__PURE__*/React__default.createElement(PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: () => /*#__PURE__*/React__default.createElement(PivotTableEmptyCell, {
      classes: "value"
    }),
    ItemComponent: ({
      index: columnIndex
    }) => /*#__PURE__*/React__default.createElement(PivotTableValueCell, {
      row: rowIndex,
      column: columnIndex,
      onToggleContextualMenu: onToggleContextualMenu
    })
  }));
};
PivotTableRow.propTypes = {
  clippingResult: PropTypes.shape({
    columns: PropTypes.object.isRequired,
    rows: PropTypes.object.isRequired
  }).isRequired,
  rowIndex: PropTypes.number.isRequired,
  onToggleContextualMenu: PropTypes.func
};

const PivotTableBody = ({
  clippingResult,
  onToggleContextualMenu
}) => /*#__PURE__*/React__default.createElement("tbody", null, /*#__PURE__*/React__default.createElement(PivotTableClippedAxis, {
  axisClippingResult: clippingResult.rows,
  EmptyComponent: ({
    size
  }) => /*#__PURE__*/React__default.createElement(PivotTableEmptyRow, {
    height: size,
    columns: clippingResult.columns.indices
  }),
  ItemComponent: ({
    index
  }) => /*#__PURE__*/React__default.createElement(PivotTableRow, {
    key: index,
    clippingResult: clippingResult,
    rowIndex: index,
    onToggleContextualMenu: onToggleContextualMenu
  })
}));
PivotTableBody.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  onToggleContextualMenu: PropTypes.func
};

const useSortableColumns = engine => {
  const [sortBy, setSortBy] = React.useState(null);

  const onSortByColumn = column => {
    let order = SORT_ORDER_ASCENDING;

    if (sortBy && sortBy.column === column) {
      if (sortBy.order === SORT_ORDER_ASCENDING) {
        order = SORT_ORDER_DESCENDING;
      } else if (sortBy.order === SORT_ORDER_DESCENDING) {
        engine.clearSort();
        setSortBy(null);
        return;
      }
    }

    engine.sort(column, order);
    setSortBy({
      column,
      order
    }); // Force a re-render
  };

  return {
    sortBy,
    onSortByColumn
  };
};

const PivotTable = ({
  visualization,
  data,
  legendSets,
  renderCounter,
  onToggleContextualMenu
}) => {
  const containerRef = React.useRef(undefined);
  const {
    width,
    height
  } = useParentSize(containerRef, renderCounter);
  const engine = React.useMemo(() => new PivotTableEngine(visualization, data, legendSets), [visualization, data, legendSets]);
  const {
    sortBy,
    onSortByColumn
  } = useSortableColumns(engine);
  const clippingResult = useTableClipping({
    containerRef,
    width,
    height,
    engine,
    visualization
  });
  return /*#__PURE__*/React__default.createElement(Provider, {
    engine: engine
  }, /*#__PURE__*/React__default.createElement(PivotTableContainer, {
    ref: containerRef,
    width: width,
    height: height
  }, /*#__PURE__*/React__default.createElement(PivotTableHead, {
    clippingResult: clippingResult,
    width: width,
    sortBy: sortBy,
    onSortByColumn: onSortByColumn
  }), /*#__PURE__*/React__default.createElement(PivotTableBody, {
    clippingResult: clippingResult,
    onToggleContextualMenu: onToggleContextualMenu
  })));
};

PivotTable.propTypes = {
  data: PropTypes.object.isRequired,
  visualization: PropTypes.object.isRequired,
  legendSets: PropTypes.arrayOf(PropTypes.object),
  renderCounter: PropTypes.number,
  onToggleContextualMenu: PropTypes.func
};

const LAYOUT = {
  isValid: layout => isObject(layout)
};

const dimensionGetId = dimension => dimension[DIMENSION_PROP_ID.name];

const layoutFilterDimensions = (layout, dimensionIds) => {
  const idArray = Array.isArray(dimensionIds) ? dimensionIds : [dimensionIds];
  const filteredLayout = Object.assign({}, layout);
  DEFAULT_AXIS_IDS.forEach(axisId => {
    if (AXIS.isValid(filteredLayout[axisId])) {
      filteredLayout[axisId] = filteredLayout[axisId].filter(dimension => !idArray.includes(dimensionGetId(dimension)));
    }
  });
  return filteredLayout;
};

const layoutGetAllAxes = layout => [layout[AXIS_ID_COLUMNS], layout[AXIS_ID_ROWS], layout[AXIS_ID_FILTERS]];

const layoutGetAllDimensions = layout => layoutGetAllAxes(layout).reduce((allDimensions, axis) => {
  allDimensions.push(...axis);
  return allDimensions;
}, []);

const axisGetAllItems = axis => axis.reduce((allItems, dimension) => {
  allItems.push(...dimensionGetItems(dimension));
  return allItems;
}, []);

const layoutGetAllItems = layout => layoutGetAllAxes(layout).reduce((allItems, axis) => {
  allItems.push(...axisGetAllItems(axis));
  return allItems;
}, []);

const ITEM = {
  isValid: item => isObject(item)
}; // Props

const ITEM_PROP_ID = {
  name: 'id',
  defaultValue: '',
  required: true,
  isValid: prop => isString(prop)
};
const ITEM_PROPS = [ITEM_PROP_ID];

const itemGetId = item => ITEM_PROP_ID.isValid(item[ITEM_PROP_ID.name]) ? item[ITEM_PROP_ID.name] : ITEM_PROP_ID.defaultValue;

const layoutGetAllItemIds = layout => layoutGetAllItems(layout).map(item => itemGetId(item));

const axisGetDimensionIds = axis => AXIS.isValid(axis) ? axis.map(dimension => dimensionGetId(dimension)) : AXIS.defaultValue;

const layoutGetAxisIdDimensionIdsObject = layout => DEFAULT_AXIS_IDS.reduce((obj, axisId) => {
  if (AXIS.isValid(layout[axisId])) {
    obj[axisId] = axisGetDimensionIds(layout[axisId]);
  }

  return obj;
}, {});

const layoutGetDimension = (layout, dimensionId) => layoutGetAllDimensions(layout).find(dimension => dimensionIs(dimension, dimensionId));

const layoutGetDimensionItems = (layout, dimensionId) => dimensionGetItems(layoutGetDimension(layout, dimensionId));

const axisGetDimension = (axis, dimensionId) => AXIS.isValid(axis) && axis.find(dimension => dimensionIs(dimension, dimensionId));

const axisHasDimension = (axis, dimensionId) => Boolean(axisGetDimension(axis, dimensionId));

const layoutReplaceDimension = (layout, dimensionId, items) => {
  const axisId = DEFAULT_AXIS_IDS.find(a => axisHasDimension(layout[a], dimensionId));

  if (!axisId) {
    return Object.assign({}, layout);
  }

  const newAxisDimensions = layout[axisId].map(dimension => {
    if (dimensionIs(dimension, dimensionId)) {
      return Object.assign({}, dimension, {
        items
      });
    }

    return dimension;
  });
  return Object.assign({}, layout, {
    [axisId]: newAxisDimensions
  });
};

const dimensionGetItemIds = dimension => dimensionGetItems(dimension).map(item => itemGetId(item));

const layoutGetDimensionIdItemIdsObject = layout => layoutGetAllDimensions(layout).reduce((obj, dimension) => {
  obj[dimensionGetId(dimension)] = dimensionGetItemIds(dimension);
  return obj;
}, {});

const axisHasDataDimension = axis => axisHasDimension(axis, DIMENSION_ID_DATA);

const layoutHasDataDimension = layout => Boolean(layoutGetAllAxes(layout).find(axis => axisHasDataDimension(axis)));

const layoutHasDimension = (layout, dimensionId) => Boolean(layoutGetDimension(layout, dimensionId));

const layoutHasDynamicDimension = layout => {
  const fixedIds = Object.keys(getPredefinedDimensions());
  return Boolean(layoutGetAllDimensions(layout).find(dimension => !fixedIds.includes(dimensionGetId(dimension))));
};

const axisHasPeriodDimension = axis => axisHasDimension(axis, DIMENSION_ID_PERIOD);

const layoutHasPeriodDimension = layout => Boolean(layoutGetAllAxes(layout).find(axis => axisHasPeriodDimension(axis)));

const axisHasOuDimension = axis => axisHasDimension(axis, DIMENSION_ID_ORGUNIT);

const axisIsEmpty = axis => !axis.length;

const dimensionCreate = (dimensionId, itemIds = []) => ({
  [DIMENSION_PROP_ID.name]: dimensionId,
  [DIMENSION_PROP_ITEMS.name]: itemIds.map(id => ({
    id
  }))
});

const itemIsValid = item => {
  if (!ITEM.isValid(item)) {
    return false;
  }

  const requiredProps = ITEM_PROPS.filter(prop => prop.required);
  return requiredProps.every(prop => prop.isValid(item[prop.name]));
};

const MODULE = 'Data validator: ';

function getMessage(text) {
  return MODULE + text;
}

function validateHeader(header, error) {
  if (!isObject$1(header)) {
    error(getMessage('Header is not an object'));
  }

  if (header.meta) {
    if (!isString$1(header.name)) {
      error(getMessage('Header name is not a string'));
    }
  }
}

function validateRowValue(rowValue, error) {
  if (!isString$1(rowValue)) {
    error(getMessage('Row value is not a string'));
  }
}

function validateRow(row, headersLength, error) {
  if (!isArray(row)) {
    error(getMessage('Data row is not an array'));
  }

  if (row.length !== headersLength) {
    error(getMessage('Data row length is invalid'));
  }

  row.forEach(rowValue => validateRowValue(rowValue, error));
}

function dhis ({
  data,
  error,
  warning
}) {
  if (!isObject$1(data)) {
    error(getMessage('Data is not an object'));
  } // headers


  if (!isArray(data.headers)) {
    error(getMessage('Response headers is not an array'));
  }

  if (!data.headers.length > 1) {
    error(getMessage('At least two response headers required'));
  }

  data.headers.forEach(header => validateHeader(header, error)); // meta data

  if (!isObject$1(data.metaData)) {
    error(getMessage('Metadata is not an object'));
  }

  if (!isObject$1(data.metaData.items)) {
    error(getMessage('Metadata items is not an object'));
  }

  if (!isObject$1(data.metaData.dimensions)) {
    error(getMessage('Metadata dimensions is not an object'));
  } // data


  if (!isArray(data.rows)) {
    warning(getMessage('Data rows is not an array'));
  }

  if (!data.rows.length) {
    warning(getMessage('No data rows provided'));
  }

  data.rows.forEach(row => validateRow(row, data.headers.length, error));
  return data;
}

const noValidation = data => data;

var validators = {
  dhis,
  noValidation
};

function getYearOnYear (acc, seriesIds, categoryIds, idValueMap, metaData) {
  const serieData = [];
  let serieLabel;
  seriesIds.forEach(seriesId => {
    serieLabel = metaData.items[seriesId].name;
    categoryIds.forEach(categoryId => {
      const value = idValueMap.get("".concat(seriesId, "-").concat(categoryId)); // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie for highcharts

      serieData.push(value === undefined ? null : parseFloat(value));
    });
  });
  acc.push({
    name: serieLabel,
    data: serieData
  });
  return acc;
}

function getPie (acc, seriesIds, categoryIds, idValueMap, metaData) {
  seriesIds.forEach(seriesId => {
    const value = idValueMap.get(seriesId);

    if (value) {
      acc.push({
        name: metaData.items[seriesId].name,
        y: parseFloat(value)
      });
    }
  });
}

function getGauge (acc, seriesIds, categoryIds, idValueMap) {
  const seriesId = seriesIds[0];
  acc.push({
    data: [parseFloat(idValueMap.get(seriesId))]
  });
}

const VALUE_ID = 'value';

function arrayNullsOnly(array) {
  return arrayContains(array, null) && arrayUnique(array).length === 1;
}

function getHeaderIdIndexMap(headers) {
  const map = new Map();
  headers.forEach((header, index) => {
    map.set(header.name, index);
  });
  return map;
}

function getPrefixedId(row, header) {
  return (header.isPrefix ? header.name + '_' : '') + row[header.index];
}

function getIdValueMap(rows, seriesHeader, categoryHeader, valueIndex) {
  const map = new Map();
  let key;
  let value;
  rows.forEach(row => {
    key = [...(seriesHeader ? [getPrefixedId(row, seriesHeader)] : []), ...(categoryHeader ? [getPrefixedId(row, categoryHeader)] : [])].join('-');
    value = row[valueIndex];
    map.set(key, value);
  });
  return map;
}

function getDefault(acc, seriesIds, categoryIds, idValueMap, metaData) {
  seriesIds.forEach(seriesId => {
    const serieData = [];
    categoryIds.forEach(categoryId => {
      const value = idValueMap.get("".concat(seriesId, "-").concat(categoryId)); // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie
      // this is to keep the correct indexes for the values within the serie array

      serieData.push(value === undefined ? null : parseFloat(value));
    }); // if the whole serie has no data, do not return a list of null values
    // otherwise Highcharts thinks that data is available and does not show the "No data to display" message

    if (arrayNullsOnly(serieData)) {
      serieData.length = 0;
    }

    acc.push({
      id: seriesId,
      name: metaData.items[seriesId].name,
      data: serieData
    });
  });
  return acc;
}

function getSeriesFunction(type) {
  switch (type) {
    case VIS_TYPE_PIE:
      return getPie;

    case VIS_TYPE_GAUGE:
      return getGauge;

    case VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
    case VIS_TYPE_YEAR_OVER_YEAR_LINE:
      return getYearOnYear;

    default:
      return getDefault;
  }
}

function dhis_highcharts ({
  type,
  data,
  seriesId,
  categoryId
}) {
  const seriesFunction = getSeriesFunction(type);
  return data.reduce((acc, res) => {
    const headers = res.headers;
    const metaData = res.metaData;
    const rows = res.rows;
    const headerIdIndexMap = getHeaderIdIndexMap(headers);
    const seriesIndex = headerIdIndexMap.get(seriesId);
    const categoryIndex = headerIdIndexMap.get(categoryId);
    const valueIndex = headerIdIndexMap.get(VALUE_ID);
    const seriesHeader = headers[seriesIndex];
    const categoryHeader = headers[categoryIndex];
    const idValueMap = getIdValueMap(rows, seriesHeader, categoryHeader, valueIndex);
    const seriesIds = metaData.dimensions[seriesId];
    const categoryIds = metaData.dimensions[categoryId];
    seriesFunction(acc, seriesIds, categoryIds, idValueMap, metaData);
    return acc;
  }, []);
}

function getSingleValue (acc, seriesIds, categoryIds, idValueMap) {
  const seriesId = seriesIds[0];
  acc.push(idValueMap.get(seriesId));
}

const VALUE_ID$1 = 'value';

function getHeaderIdIndexMap$1(headers) {
  const map = new Map();
  headers.forEach((header, index) => {
    map.set(header.name, index);
  });
  return map;
}

function getPrefixedId$1(row, header) {
  return (header.isPrefix ? header.name + '_' : '') + row[header.index];
}

function getIdValueMap$1(rows, seriesHeader, categoryHeader, valueIndex) {
  const map = new Map();
  let key;
  let value;
  rows.forEach(row => {
    key = [...(seriesHeader ? [getPrefixedId$1(row, seriesHeader)] : []), ...(categoryHeader ? [getPrefixedId$1(row, categoryHeader)] : [])].join('-');
    value = row[valueIndex];
    map.set(key, value);
  });
  return map;
}

function getDefault$1(acc, seriesIds, categoryIds, idValueMap, metaData) {
  seriesIds.forEach(seriesId => {
    const serieData = [];
    categoryIds.forEach(categoryId => {
      const value = idValueMap.get("".concat(seriesId, "-").concat(categoryId)); // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie

      serieData.push(value === undefined ? null : parseFloat(value));
    });
    acc.push({
      id: seriesId,
      name: metaData.items[seriesId].name,
      data: serieData
    });
  });
  return acc;
}

function getValueFunction(type) {
  switch (type) {
    case VIS_TYPE_SINGLE_VALUE:
      return getSingleValue;

    default:
      return getDefault$1;
  }
}

function dhis_dhis ({
  type,
  data,
  seriesId,
  categoryId
}) {
  const valueFunction = getValueFunction(type);
  return data.reduce((acc, res) => {
    const headers = res.headers;
    const metaData = res.metaData;
    const rows = res.rows;
    const headerIdIndexMap = getHeaderIdIndexMap$1(headers);
    const seriesIndex = headerIdIndexMap.get(seriesId);
    const categoryIndex = headerIdIndexMap.get(categoryId);
    const valueIndex = headerIdIndexMap.get(VALUE_ID$1);
    const seriesHeader = headers[seriesIndex];
    const categoryHeader = headers[categoryIndex];
    const idValueMap = getIdValueMap$1(rows, seriesHeader, categoryHeader, valueIndex);
    const seriesIds = metaData.dimensions[seriesId];
    const categoryIds = metaData.dimensions[categoryId];
    valueFunction(acc, seriesIds, categoryIds, idValueMap, metaData);
    return acc;
  }, []);
}

var adapters = {
  dhis_highcharts,
  dhis_dhis
};

function Store ({
  data,
  inputFormat = 'dhis',
  outputFormat = 'highcharts',
  seriesId: initialSeriesId,
  categoryId: initialCategoryId,
  error,
  warning
}) {
  const _validator = validators[inputFormat] || validators.noValidation;

  const _adapter = adapters[inputFormat + '_' + outputFormat];

  if (_validator === validators.noValidation) {
    warning("Validation not supported for data input format \"".concat(inputFormat, "\""));
  }

  if (!_adapter) {
    error("Data tranformation from \"".concat(inputFormat, "\" to \"").concat(outputFormat, "\" is not supported"));
  }

  this.data = data;

  this.generateData = ({
    type,
    seriesId = initialSeriesId,
    categoryId = initialCategoryId
  }) => {
    return _adapter({
      type,
      data: data.map(d => _validator({
        data: d,
        error,
        warning
      })),
      seriesId,
      categoryId
    });
  };
}

function dhis$1 ({
  layout
}) {
  return layout;
}

const noValidation$1 = data => data;

var validators$1 = {
  dhis: dhis$1,
  noValidation: noValidation$1
};

function getType (type) {
  switch (type) {
    case VIS_TYPE_BAR:
    case VIS_TYPE_STACKED_BAR:
      return {
        type: 'bar'
      };

    case VIS_TYPE_LINE:
    case VIS_TYPE_YEAR_OVER_YEAR_LINE:
      return {
        type: 'line'
      };

    case VIS_TYPE_AREA:
      return {
        type: 'area'
      };

    case VIS_TYPE_PIE:
      return {
        type: 'pie'
      };

    case VIS_TYPE_RADAR:
      return {
        type: 'line',
        polar: true
      };

    case VIS_TYPE_GAUGE:
      return {
        type: 'solidgauge'
      };

    case VIS_TYPE_COLUMN:
    case VIS_TYPE_STACKED_COLUMN:
    case VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
    default:
      return {
        type: 'column'
      };
  }
}

const DEFAULT_CHART = {
  spacingTop: 20,
  style: {
    fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif'
  }
};
const DASHBOARD_CHART = {
  spacingTop: 0,
  spacingRight: 5,
  spacingBottom: 2,
  spacingLeft: 5
};
function getChart (layout, el, dashboard) {
  return Object.assign({}, getType(layout.type), {
    renderTo: el || layout.el
  }, DEFAULT_CHART, dashboard ? DASHBOARD_CHART : undefined);
}

const DEFAULT_AXIS_TITLE = {
  align: 'low',
  margin: 15,
  style: {
    color: '#222',
    textShadow: '0 0 #999',
    fontSize: '13px'
  }
};
function getAxisTitle (title) {
  return isString$1(title) ? Object.assign({}, DEFAULT_AXIS_TITLE, {
    text: title
  }) : {
    text: null
  };
}

function getCategories (metaData, layout) {
  const dimensionName = layout.rows[0].dimension;
  const dimensionIds = isArray(metaData.dimensions[dimensionName]) ? metaData.dimensions[dimensionName] : [];
  return dimensionIds.map(id => metaData.items[id].name);
}

function getYearOnYear$1 (store, layout, extraOptions) {
  let categories;

  if (extraOptions.xAxisLabels) {
    categories = extraOptions.xAxisLabels;
  } else {
    // look for the response with the longer list of periods.
    // in some cases (ie. weeks per year) responses might have a different number of periods in metadata
    const res = store.data.reduce((out, r) => {
      if (out) {
        if (r.metaData.dimensions.pe.length > out.metaData.dimensions.pe.length) {
          out = r;
        }
      } else {
        out = r;
      }

      return out;
    }, {});
    const metaData = res.metaData;
    categories = metaData.dimensions.pe.reduce((categories, periodId) => {
      // TODO use shortName or pass extra option to the request for getting short names in name prop
      categories.push(metaData.items[periodId].name);
      return categories;
    }, []);
  }

  return {
    categories
  };
}

function noAxis() {
  return null;
}

function getDefault$2(store, layout) {
  return objectClean({
    categories: getCategories(store.data[0].metaData, layout),
    title: getAxisTitle(layout.domainAxisLabel),
    labels: {
      style: {
        color: '#666',
        textShadow: '0 0 #ccc'
      }
    }
  });
}

function getXAxis (store, layout, extraOptions) {
  let xAxis;

  switch (layout.type) {
    case VIS_TYPE_PIE:
    case VIS_TYPE_GAUGE:
      xAxis = noAxis();
      break;

    case VIS_TYPE_YEAR_OVER_YEAR_LINE:
    case VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
      xAxis = getYearOnYear$1(store, layout, extraOptions);
      break;

    default:
      xAxis = getDefault$2(store, layout);
  }

  return xAxis;
}

const DEFAULT_MAX_VALUE = 100;
const DEFAULT_PLOT_LINE_STYLE = {
  zIndex: 5,
  width: 1,
  color: '#000'
};
const DEFAULT_TARGET_LINE_LABEL = i18n.t('Target');
const DEFAULT_BASE_LINE_LABEL = i18n.t('Base');

function getPlotLine(value, label) {
  return _objectSpread2({
    value
  }, DEFAULT_PLOT_LINE_STYLE, {}, label && {
    label: {
      text: "".concat(label, ": ").concat(value)
    }
  });
}

function getGauge$1 (layout, series, legendSet) {
  const plotLines = arrayClean([isNumber(layout.baseLineValue) ? getPlotLine(layout.baseLineValue, layout.baseLineLabel || DEFAULT_BASE_LINE_LABEL) : null, isNumber(layout.targetLineValue) ? getPlotLine(layout.targetLineValue, layout.targetLineLabel || DEFAULT_TARGET_LINE_LABEL) : null]);
  const fillColor = layout.legendDisplayStyle === LEGEND_DISPLAY_STYLE_FILL && legendSet ? getColorByValueFromLegendSet(legendSet, series[0].data) : undefined;
  return objectClean(_objectSpread2({
    min: isNumber(layout.rangeAxisMinValue) ? layout.rangeAxisMinValue : 0,
    max: isNumber(layout.rangeAxisMaxValue) ? layout.rangeAxisMaxValue : DEFAULT_MAX_VALUE,
    lineWidth: 0,
    minorTickInterval: null,
    tickLength: 0,
    tickAmount: 0,
    tickPositioner: function tickPositioner() {
      return [this.min, this.max];
    },
    minColor: fillColor,
    maxColor: fillColor,
    labels: {
      y: 18,
      style: {
        fontSize: '13px'
      }
    },
    title: {
      text: series[0].name
    }
  }, plotLines.length && {
    plotLines
  }));
}

const OPTIONAL_AXES_DIMENSIONAL_ITEM = 'dimensionalItem';
const OPTIONAL_AXES_AXIS = 'axis'; // returns:
// {
//     a: 1,
//     b: 1,
// }

function getIdAxisMap(optionalAxes) {
  return optionalAxes.reduce((map, item) => {
    map[item[OPTIONAL_AXES_DIMENSIONAL_ITEM]] = item[OPTIONAL_AXES_AXIS];
    return map;
  }, {});
}
function getFullIdAxisMap(optionalAxes, series) {
  const idAxisMap = getIdAxisMap(optionalAxes); // adds first axis ids to seriesAxisMap

  series.forEach(s => {
    if (!(s.id in idAxisMap)) {
      idAxisMap[s.id] = 0;
    }
  });
  return idAxisMap;
} // returns: true or false

function hasOptionalAxis(optionalAxes) {
  return Boolean(optionalAxes.length);
} // returns: true or false
// {
//     0: ['a', 'b'],
//     1: ['c'],
// }

function getAxisIdsMap(optionalAxes, series) {
  const fullIdAxisMap = getFullIdAxisMap(optionalAxes, series);
  return Object.entries(fullIdAxisMap).reduce((map, [id, axis]) => {
    if (!(axis in map)) {
      map[axis] = [];
    }

    map[axis].push(id);
    return map;
  }, {});
}

const DEFAULT_MIN_VALUE = 0;
const DEFAULT_GRIDLINE_COLOR = '#E1E1E1';
const DEFAULT_PLOTLINE = {
  color: '#000',
  width: 2,
  zIndex: 4
};
const DEFAULT_PLOTLINE_LABEL = {
  y: -7,
  style: {
    fontSize: 13,
    textShadow: '0 0 6px #FFF'
  }
};

function getMinValue(layout) {
  return isNumeric(layout.rangeAxisMinValue) ? layout.rangeAxisMinValue : DEFAULT_MIN_VALUE;
}

function getMaxValue(layout) {
  return isNumeric(layout.rangeAxisMaxValue) ? layout.rangeAxisMaxValue : undefined;
}

function getSteps(layout) {
  return isNumeric(layout.rangeAxisSteps) ? layout.rangeAxisSteps : undefined;
}

function getTargetLine(layout) {
  return isNumeric(layout.targetLineValue) ? Object.assign({}, DEFAULT_PLOTLINE, objectClean({
    value: layout.targetLineValue,
    label: isString$1(layout.targetLineLabel) ? Object.assign({}, DEFAULT_PLOTLINE_LABEL, {
      text: layout.targetLineLabel
    }) : undefined
  })) : undefined;
}

function getBaseLine(layout) {
  return isNumeric(layout.baseLineValue) ? Object.assign({}, DEFAULT_PLOTLINE, objectClean({
    value: layout.baseLineValue,
    label: isString$1(layout.baseLineLabel) ? Object.assign({}, DEFAULT_PLOTLINE_LABEL, {
      text: layout.baseLineLabel
    }) : undefined
  })) : undefined;
}

function getFormatter(layout) {
  return {
    formatter: function formatter() {
      return this.value.toFixed(layout.rangeAxisDecimals);
    }
  };
}

function getLabels(layout) {
  return isNumeric(layout.rangeAxisDecimals) ? getFormatter(layout) : undefined;
}

function getDualAxes(theme) {
  return [{
    title: {
      text: 'Axis 1',
      style: {
        color: theme[0].mainColor,
        'font-weight': 700
      }
    }
  }, {
    title: {
      text: 'Axis 2',
      style: {
        color: theme[1].mainColor,
        'font-weight': 700
      }
    },
    opposite: true
  }];
}

function getDefault$3(layout, extraOptions) {
  const axes = [];

  if (hasOptionalAxis(layout.optionalAxes)) {
    const dualAxes = getDualAxes(extraOptions.multiAxisTheme);
    axes.push(dualAxes[0], dualAxes[1]);
  } else {
    axes.push(objectClean({
      min: getMinValue(layout),
      max: getMaxValue(layout),
      tickAmount: getSteps(layout),
      title: getAxisTitle(layout.rangeAxisLabel),
      plotLines: arrayClean([getTargetLine(layout), getBaseLine(layout)]),
      gridLineColor: DEFAULT_GRIDLINE_COLOR,
      labels: getLabels(layout),
      // DHIS2-649: put first serie at the bottom of the stack
      // in this way the legend sequence matches the serie sequence
      reversedStacks: isStacked(layout.type) ? false : true
    }));
  }

  return axes;
}

function getYAxis (layout, series, extraOptions) {
  let yAxis;

  switch (layout.type) {
    case VIS_TYPE_GAUGE:
      yAxis = getGauge$1(layout, series, extraOptions.legendSets[0]);
      break;

    default:
      yAxis = getDefault$3(layout, extraOptions);
  }

  return yAxis;
}

function getCumulativeData (series) {
  let decimals = 0;
  let cumulativeValues = [];
  series.forEach(seriesObj => {
    cumulativeValues = seriesObj.data.reduce((accumulator, value, index) => {
      decimals = Math.max(decimals, numberDecimals(value));

      if (index > 0) {
        value += accumulator[index - 1];
      }

      accumulator.push(value);
      return accumulator;
    }, []); // round values to the largest number of decimals found in the serie
    // this is to avoid the floating-point problems in JavaScript
    // the condition in the return statement is because sometimes value can be null

    seriesObj.data = cumulativeValues.map(value => {
      return value ? parseFloat(value.toFixed(decimals)) : value;
    });
    decimals = 0;
  });
  return series;
}

function getPie$1 (series, store, layout, isStacked, colors) {
  return [{
    colorByPoint: true,
    allowPointSelect: true,
    cursor: 'pointer',
    data: series,
    colors: colors,
    dataLabels: {
      enabled: true,
      formatter: function formatter() {
        return '<span style="font-weight:normal">' + this.point.name + '</span><br/>' + this.y + '<span style="font-weight:normal"> (' + this.percentage.toFixed(1) + ' %)</span>';
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y}</b><br/>'
    }
  }];
}

const DEFAULT_FONT_SIZE = '28px';
function getGauge$2 (series, layout, legendSet) {
  return [{
    name: series[0].name,
    data: series[0].data,
    enableMouseTracking: false,
    dataLabels: {
      y: 0,
      borderWidth: 0,
      verticalAlign: 'bottom',
      style: {
        fontSize: DEFAULT_FONT_SIZE,
        color: layout.legendDisplayStyle === LEGEND_DISPLAY_STYLE_TEXT && legendSet ? getColorByValueFromLegendSet(legendSet, series[0].data) : undefined
      }
    }
  }];
}

function hex(c) {
  var s = '0123456789abcdef';
  var i = parseInt(c);

  if (i === 0 || isNaN(c)) {
    return '00';
  }

  i = Math.round(Math.min(Math.max(0, i), 255));
  return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
}
/* Convert an RGB triplet to a hex string */


function convertToHex(rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}
/* Remove '#' in color hex string */


function trim(s) {
  return s.charAt(0) === '#' ? s.substring(1, 7) : s;
}
/* Convert a hex string to an RGB triplet */


function convertToRGB(hex) {
  var color = [];
  color[0] = parseInt(trim(hex).substring(0, 2), 16);
  color[1] = parseInt(trim(hex).substring(2, 4), 16);
  color[2] = parseInt(trim(hex).substring(4, 6), 16);
  return color;
}

function generateColors(colorStart, colorEnd, colorCount, addHash) {
  // The beginning of your gradient
  var start = convertToRGB(colorStart); // The end of your gradient

  var end = convertToRGB(colorEnd); // The number of colors to compute

  var len = colorCount; //Alpha blending amount

  var alpha = 0.0;
  var saida = [];
  var i;

  for (i = 0; i < len; i++) {
    var c = [];
    alpha += 1.0 / len;
    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];
    saida.push((addHash ? '#' : '') + convertToHex(c));
  }

  return saida;
}

const DEFAULT_ANIMATION_DURATION = 200;
const HIGHCHARTS_TYPE_COLUMN = 'column';
const HIGHCHARTS_TYPE_BAR = 'bar';
const HIGHCHARTS_TYPE_PERCENT = 'percent';
const HIGHCHARTS_TYPE_NORMAL = 'normal';
const epiCurveTypes = [HIGHCHARTS_TYPE_COLUMN, HIGHCHARTS_TYPE_BAR];

function getAnimation(option, fallback) {
  return typeof option === 'number' ? option : fallback;
}

function getColor(colors, index) {
  return colors[index] || getColor(colors, index - colors.length);
}

function getIdColorMap(series, layout, extraOptions) {
  if (hasOptionalAxis(layout.optionalAxes)) {
    const axisIdsMap = getAxisIdsMap(layout.optionalAxes, series);
    const theme = extraOptions.multiAxisTheme;
    const colorsByAxis = Object.keys(axisIdsMap).reduce((map, axis) => {
      const numberOfIds = axisIdsMap[axis].length;
      map[axis] = generateColors(theme[axis].startColor, theme[axis].endColor, numberOfIds, true);
      return map;
    }, {});
    return Object.keys(colorsByAxis).reduce((map, axis) => {
      const colors = colorsByAxis[axis];
      const ids = axisIdsMap[axis];
      ids.forEach((id, index) => {
        map[id] = colors[index];
      });
      return map;
    }, {});
  } else {
    const colors = extraOptions.colors;
    return series.reduce((map, s, index) => {
      map[s.id] = getColor(colors, index);
      return map;
    }, {});
  }
}

function getDefault$4(series, layout, isStacked, extraOptions) {
  const fullIdAxisMap = getFullIdAxisMap(layout.optionalAxes, series);
  const idColorMap = getIdColorMap(series, layout, extraOptions);
  series.forEach((seriesObj, index) => {
    // show values
    if (layout.showValues || layout.showData) {
      seriesObj.dataLabels = {
        enabled: true
      };
    } // stacked


    if (isStacked) {
      // DHIS2-1060: stacked charts can optionally be shown as 100% stacked charts
      seriesObj.stacking = layout.percentStackedValues === true ? HIGHCHARTS_TYPE_PERCENT : HIGHCHARTS_TYPE_NORMAL;
    } // DHIS2-2101
    // show bar/column chart as EPI curve (basically remove spacing between bars/columns)


    if (layout.noSpaceBetweenColumns) {
      const seriesType = getType(layout.type).type;

      if (epiCurveTypes.includes(seriesType)) {
        seriesObj.pointPadding = 0;
        seriesObj.groupPadding = 0;
      }
    } // color


    seriesObj.color = isYearOverYear(layout.type) ? extraOptions.colors[index] : idColorMap[seriesObj.id]; // axis number

    seriesObj.yAxis = isDualAxisType(layout.type) ? fullIdAxisMap[seriesObj.id] : 0; // custom names for "year over year" series

    if (extraOptions.yearlySeries) {
      seriesObj.name = extraOptions.yearlySeries[index];
    }
  }); // DHIS2-701: use cumulative values

  if (layout.cumulativeValues === true) {
    series = getCumulativeData(series);
  }

  return series;
}

function getSeries (series, store, layout, isStacked, extraOptions) {
  switch (layout.type) {
    case VIS_TYPE_PIE:
      series = getPie$1(series, store, layout, isStacked, extraOptions.colors);
      break;

    case VIS_TYPE_GAUGE:
      series = getGauge$2(series, layout, extraOptions.legendSets[0]);
      break;

    default:
      series = getDefault$4(series, layout, isStacked, extraOptions);
  }

  series.forEach(seriesObj => {
    // animation
    seriesObj.animation = {
      duration: getAnimation(extraOptions.animation, DEFAULT_ANIMATION_DURATION)
    };
  });
  return series;
}

function getYearOverYearTitle (layout, metaData, dashboard) {
  const titleFragments = [];

  if (layout.columns && layout.columns.length && !dashboard) {
    titleFragments.push(getFilterText(layout.columns, metaData));
  }

  if (layout.filters && layout.filters.length && !dashboard) {
    titleFragments.push(getFilterText(layout.filters, metaData));
  }

  return titleFragments.length ? titleFragments.join(' - ') : null;
}

const DEFAULT_TITLE_STYLE = {
  margin: 30,
  y: 18,
  style: {
    color: '#111',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};
const DASHBOARD_TITLE_STYLE = {
  margin: 15,
  y: 12,
  style: {
    fontSize: '13px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

function getDefault$5(layout, metaData, dashboard) {
  // filters
  if (layout.filters && !dashboard) {
    return getFilterText(layout.filters, metaData);
  }

  return null;
}

function getTitle (layout, metaData, dashboard) {
  const title = {
    text: undefined
  };

  if (layout.hideTitle) {
    return title;
  }

  if (isString$1(layout.title) && layout.title.length) {
    title.text = layout.title;
  } else {
    switch (layout.type) {
      case VIS_TYPE_GAUGE:
      case VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        title.text = getYearOverYearTitle(layout, metaData, dashboard);
        break;

      default:
        title.text = getDefault$5(layout, metaData, dashboard);
        break;
    }
  }

  return Object.assign({}, DEFAULT_TITLE_STYLE, dashboard ? DASHBOARD_TITLE_STYLE : undefined, title);
}

const DEFAULT_SUBTITLE = {
  style: {
    // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '14px',
    color: '#555',
    textShadow: '0 0 #999'
  }
};
const DASHBOARD_SUBTITLE = {
  style: {
    // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '12px'
  }
};

function getDefault$6(layout, dashboard, filterTitle) {
  return {
    text: dashboard || isString$1(layout.title) ? filterTitle : undefined
  };
}

function getSubtitle (series, layout, metaData, dashboard) {
  let subtitle = {
    text: undefined
  };

  if (layout.hideSubtitle) {
    return null;
  } // DHIS2-578: allow for optional custom subtitle


  if (isString$1(layout.subtitle)) {
    subtitle.text = layout.subtitle;
  } else {
    const filterTitle = getFilterText(layout.filters, metaData);

    switch (layout.type) {
      case VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        subtitle.text = getYearOverYearTitle(layout, metaData, Boolean(!dashboard));
        break;

      default:
        subtitle = getDefault$6(layout, dashboard, filterTitle);
    }
  }

  return subtitle ? Object.assign({}, DEFAULT_SUBTITLE, dashboard ? DASHBOARD_SUBTITLE : undefined, subtitle) : subtitle;
}

const DEFAULT_ITEM_STYLE = {
  fontSize: '13px',
  fontWeight: 'normal'
};
const DASHBOARD_ITEM_STYLE = {
  fontSize: '11px',
  fontWeight: 500
};
const DEFAULT_LEGEND = {
  symbolWidth: 11,
  symbolHeight: 11,
  itemMarginBottom: 2
};
const DASHBOARD_LEGEND = {
  symbolPadding: 3,
  itemDistance: 10
};

function getItemStyle(dashboard) {
  return {
    itemStyle: Object.assign({}, DEFAULT_ITEM_STYLE, dashboard ? DASHBOARD_ITEM_STYLE : null)
  };
}

function getLegend(dashboard) {
  return Object.assign({}, DEFAULT_LEGEND, dashboard ? DASHBOARD_LEGEND : null);
}

function getLegend$1 (layout, dashboard) {
  return layout.hideLegend ? {
    enabled: false
  } : Object.assign({}, getLegend(dashboard), getItemStyle(dashboard));
}

const DEFAULT_PANE_SIZE = '100%';
function getGauge$3 () {
  return {
    center: ['50%', '85%'],
    size: DEFAULT_PANE_SIZE,
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: '#F1F1F1',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  };
}

function getPane (type) {
  switch (type) {
    case VIS_TYPE_GAUGE:
      return getGauge$3();

    default:
      return undefined;
  }
}

function getNoData () {
  return {
    style: {
      fontSize: '13px',
      fontWeight: 'normal'
    }
  };
}

function getStackedData (series, isZeroAsNull) {
  return series[0].data.map((value, index) => {
    return series.reduce((total, obj) => {
      return total + obj.data[index];
    }, 0);
  }).map(value => isZeroAsNull && value === 0 ? null : value);
}

const sortOrderMap = new Map([[-1, 'ASC'], [1, 'DESC']]);

function getIndexOrder(config, isStacked, direction) {
  const dataToBeSorted = isStacked ? getStackedData(config.series) : config.series[0].data.slice();
  const dataObjectsToBeSorted = dataToBeSorted.map((value, index) => ({
    index,
    value
  }));
  arraySort(dataObjectsToBeSorted, direction, 'value');
  return arrayPluck(dataObjectsToBeSorted, 'index');
}

function getSortedConfig(config, isStacked, direction) {
  const categories = config.xAxis.categories;
  const series = config.series;
  const indexOrder = getIndexOrder(config, isStacked, direction);
  const sortedConfig = Object.assign({}, config);
  sortedConfig.xAxis.categories = indexOrder.map(index => categories[index]);
  sortedConfig.series = series.map(seriesObj => _objectSpread2({}, seriesObj, {
    data: seriesObj.data.map((value, index) => seriesObj.data[indexOrder[index]])
  }));
  return sortedConfig;
}

function getSortedConfig$1 (config, layout, isStacked) {
  const direction = sortOrderMap.get(parseInt(layout.sortOrder));
  return getSortedConfig(config, isStacked, direction);
}

function arrayCleanUndefined(array) {
  return array.filter(item => item !== undefined);
}

function arrayNullsOnly$1(array) {
  return arrayContains(array, null) && arrayUnique(array).length === 1;
}

function getEmptySeriesIndexes(series) {
  const emptyIndexes = [];
  let seriesValues;
  series[0].data.forEach((value, index) => {
    seriesValues = [];
    series.forEach(seriesObj => {
      seriesValues.push(seriesObj.data[index]);
    });

    if (arrayNullsOnly$1(seriesValues)) {
      emptyIndexes.push(index);
    }
  });
  return emptyIndexes;
}

function getFirstLastValueIndexes(series) {
  let firstValueIndex = undefined;
  let lastValueIndex = 0;
  let data;
  let i;
  series.forEach(seriesObj => {
    // make a copy of the array so we can reverse it
    // without affecting the original
    data = seriesObj.data.slice();
    i = data.findIndex(value => value !== undefined);

    if (i > -1) {
      firstValueIndex = firstValueIndex !== undefined ? Math.min(firstValueIndex, i) : i;
    }

    i = data.reverse().findIndex(value => value !== undefined);

    if (i > -1) {
      lastValueIndex = Math.max(lastValueIndex, data.length - 1 - i);
    }
  });
  return {
    firstValueIndex,
    lastValueIndex
  };
}

function cleanData(data, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems) {
  let cleanedData;

  switch (hideEmptyRowItems) {
    case 'ALL':
      cleanedData = arrayCleanUndefined(data.map((value, index) => arrayContains(emptySeriesIndexes, index) ? undefined : value));
      break;

    case 'BEFORE_FIRST':
      cleanedData = data.slice(firstValueIndex);
      break;

    case 'AFTER_LAST':
      cleanedData = data.slice(0, lastValueIndex + 1);
      break;

    case 'BEFORE_FIRST_AFTER_LAST':
      cleanedData = data.slice(firstValueIndex, lastValueIndex + 1);
      break;

    default:
      cleanedData = data;
  }

  return cleanedData;
}

function getTrimmedXAxisObject(xAxis, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems) {
  return {
    xAxis: _objectSpread2({}, xAxis, {
      categories: cleanData(xAxis.categories, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems)
    })
  };
}

function getTrimmedSeriesObject(series, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems) {
  return {
    series: series.map(seriesObj => _objectSpread2({}, seriesObj, {
      data: cleanData(seriesObj.data, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems)
    }))
  };
}

function getTrimmedConfig (config, hideEmptyRowItems) {
  const emptySeriesIndexes = getEmptySeriesIndexes(config.series);
  const {
    firstValueIndex,
    lastValueIndex
  } = getFirstLastValueIndexes(config.series);
  return emptySeriesIndexes.length && config.xAxis && config.series ? Object.assign({}, config, getTrimmedXAxisObject(config.xAxis, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems), getTrimmedSeriesObject(config.series, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems)) : config;
}

const DEFAULT_TRENDLINE = {
  type: 'spline',
  name: 'Trend',
  dashStyle: 'solid',
  color: '#333',
  lineWidth: 1,
  marker: {
    enabled: false,
    symbol: 'circle',
    radius: 2
  }
};
const isRegressionIneligible = type => arrayContains([VIS_TYPE_GAUGE, VIS_TYPE_PIE], type);
function addTrendLines (regressionType, series, isStacked) {
  const newSeries = [];

  if (isStacked) {
    newSeries.push(...series, Object.assign({}, getRegressionObj(getStackedData(series), regressionType)));
  } else {
    series.forEach(seriesObj => {
      newSeries.push(seriesObj, Object.assign({}, getRegressionObj(seriesObj.data, regressionType), {
        name: seriesObj.name + ' (trend)',
        color: getDarkerColor(seriesObj.color)
      }));
    });
  }

  return newSeries;
}

function getDarkerColor(color) {
  return d3Color.rgb(color).darker(0.5).toString();
}

function getRegressionData(data) {
  return data.map((value, index) => {
    return [index, value];
  });
}

function getRegressionObj(data, regressionType) {
  // LINEAR:
  // - decimalPlaces (default = 2)
  // LOESS:
  // - loessSmooth (default = 25)
  // POLYNOMIAL:
  // - order (default = 2)
  // - extrapolate (default = 0)
  // - decimalPlaces (default = 2)
  let regression;
  const regressionTypeOptions = {};

  switch (regressionType) {
    case 'POLYNOMIAL':
      // polynomial(data, order, extrapolate)
      regression = polynomial(getRegressionData(data));
      break;

    case 'LOESS':
      // loess(data, smoothing)
      regression = loess(getRegressionData(data), 0.25);
      break;

    case 'LINEAR':
    default:
      // linear(data, decimalPlaces)
      regression = linear(getRegressionData(data));
      regressionTypeOptions.type = 'line';
      break;
  }

  return Object.assign({}, DEFAULT_TRENDLINE, regressionTypeOptions, {
    data: regression.points
  });
} // Code extracted from https://github.com/Tom-Alexander/regression-js/


function gaussianElimination(a, o) {
  let maxrow = 0,
      tmp = 0;
  const n = a.length - 1,
        x = new Array(o);

  for (let i = 0; i < n; i++) {
    maxrow = i;

    for (let j = i + 1; j < n; j++) {
      if (Math.abs(a[i][j]) > Math.abs(a[i][maxrow])) {
        maxrow = j;
      }
    }

    for (let k = i; k < n + 1; k++) {
      tmp = a[k][i];
      a[k][i] = a[k][maxrow];
      a[k][maxrow] = tmp;
    }

    for (let j = i + 1; j < n; j++) {
      for (let k = n; k >= i; k--) {
        a[k][j] -= a[k][i] * a[i][j] / a[i][i];
      }
    }
  }

  for (let j = n - 1; j >= 0; j--) {
    tmp = 0;

    for (let k = j + 1; k < n; k++) {
      tmp += a[k][j] * x[k];
    }

    x[j] = (a[n][j] - tmp) / a[j][j];
  }

  return x;
} // Code extracted from https://github.com/Tom-Alexander/regression-js/
// Human readable formulas:
//
//              N * Σ(XY) - Σ(X)
// intercept = ---------------------
//              N * Σ(X^2) - Σ(X)^2
//
// correlation = N * Σ(XY) - Σ(X) * Σ (Y) / √ (  N * Σ(X^2) - Σ(X) ) * ( N * Σ(Y^2) - Σ(Y)^2 ) ) )


function linear(data, decimalPlaces = 2) {
  const sum = [0, 0, 0, 0, 0],
        results = [];
  let N = data.length;

  for (let n = 0, len = data.length; n < len; n++) {
    if (data[n]['x'] != null) {
      data[n][0] = data[n].x;
      data[n][1] = data[n].y;
    }

    if (data[n][1] != null) {
      sum[0] += data[n][0]; // Σ(X)

      sum[1] += data[n][1]; // Σ(Y)

      sum[2] += data[n][0] * data[n][0]; // Σ(X^2)

      sum[3] += data[n][0] * data[n][1]; // Σ(XY)

      sum[4] += data[n][1] * data[n][1]; // Σ(Y^2)
    } else {
      N -= 1;
    }
  }

  const gradient = (N * sum[3] - sum[0] * sum[1]) / (N * sum[2] - sum[0] * sum[0]);
  const intercept = sum[1] / N - gradient * sum[0] / N; // let correlation = (N * sum[3] - sum[0] * sum[1]) / Math.sqrt((N * sum[2] - sum[0] * sum[0]) * (N * sum[4] - sum[1] * sum[1]));

  for (let i = 0, len = data.length; i < len; i++) {
    let coorY = data[i][0] * gradient + intercept;

    if (decimalPlaces) {
      coorY = parseFloat(coorY.toFixed(decimalPlaces));
    }

    const coordinate = [data[i][0], coorY];
    results.push(coordinate);
  }

  results.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });
  const string = 'y = ' + Math.round(gradient * 100) / 100 + 'x + ' + Math.round(intercept * 100) / 100;
  return {
    equation: [gradient, intercept],
    points: results,
    string: string
  };
} // Code extracted from https://github.com/Tom-Alexander/regression-js/


function polynomial(data, order = 2, extrapolate = 0, decimalPlaces = 2) {
  const lhs = [],
        rhs = [],
        results = [],
        k = order + 1;
  let a = 0,
      b = 0;

  for (let i = 0; i < k; i++) {
    for (let l = 0, len = data.length; l < len; l++) {
      if (data[l].x != null) {
        data[l][0] = data[l].x;
        data[l][1] = data[l].y;
      }

      if (data[l][1] != null) {
        a += Math.pow(data[l][0], i) * data[l][1];
      }
    }

    lhs.push(a);
    a = 0;
    const c = [];

    for (let j = 0; j < k; j++) {
      for (let l = 0, len = data.length; l < len; l++) {
        if (data[l][1]) {
          b += Math.pow(data[l][0], i + j);
        }
      }

      c.push(b);
      b = 0;
    }

    rhs.push(c);
  }

  rhs.push(lhs);
  const equation = gaussianElimination(rhs, k);
  const resultLength = data.length + extrapolate;
  const step = data[data.length - 1][0] - data[data.length - 2][0];

  for (let i = 0, len = resultLength; i < len; i++) {
    let answer = 0,
        x = 0;

    if (typeof data[i] !== 'undefined') {
      x = data[i][0];
    } else {
      x = data[data.length - 1][0] + (i - data.length) * step;
    }

    for (let w = 0; w < equation.length; w++) {
      answer += equation[w] * Math.pow(x, w);

      if (decimalPlaces) {
        answer = parseFloat(answer.toFixed(decimalPlaces));
      }
    }

    results.push([x, answer]);
  }

  results.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });
  let string = 'y = ';

  for (let i = equation.length - 1; i >= 0; i--) {
    if (i > 1) {
      string += Math.round(equation[i] * 100) / 100 + 'x^' + i + ' + ';
    } else if (i === 1) {
      string += Math.round(equation[i] * 100) / 100 + 'x + ';
    } else {
      string += Math.round(equation[i] * 100) / 100;
    }
  }

  return {
    equation: equation,
    points: results,
    string: string
  };
} // @author: Ignacio Vazquez
// Based on
// - http://commons.apache.org/proper/commons-math/download_math.cgi LoesInterpolator.java
// - https://gist.github.com/avibryant/1151823


function loess(data, bandwidth = 0.25) {
  const xval = data.map(pair => {
    return pair[0];
  });
  const distinctX = array_unique(xval);

  if (2 / distinctX.length > bandwidth) {
    bandwidth = Math.min(2 / distinctX.length, 1);
  }

  const yval = data.map(pair => {
    return pair[1];
  });

  function array_unique(values) {
    const o = {},
          l = values.length,
          r = [];

    for (let i = 0; i < l; i += 1) {
      o[values[i]] = values[i];
    }

    for (const i in o) {
      r.push(o[i]);
    }

    return r;
  }

  function tricube(x) {
    const tmp = 1 - x * x * x;
    return tmp * tmp * tmp;
  }

  const res = [];
  let left = 0;
  let right = Math.floor(bandwidth * xval.length) - 1;

  for (const i in xval) {
    const x = xval[i];

    if (i > 0) {
      if (right < xval.length - 1 && xval[right + 1] - xval[i] < xval[i] - xval[left]) {
        left++;
        right++;
      }
    }

    let edge;

    if (xval[i] - xval[left] > xval[right] - xval[i]) {
      edge = left;
    } else {
      edge = right;
    }

    const denom = Math.abs(1.0 / (xval[edge] - x));
    let sumWeights = 0;
    let sumX = 0,
        sumXSquared = 0,
        sumY = 0,
        sumXY = 0;
    let k = left;

    while (k <= right) {
      const xk = xval[k];
      const yk = yval[k];
      let dist;

      if (k < i) {
        dist = x - xk;
      } else {
        dist = xk - x;
      }

      const w = tricube(dist * denom);
      const xkw = xk * w;
      sumWeights += w;
      sumX += xkw;
      sumXSquared += xk * xkw;
      sumY += yk * w;
      sumXY += yk * xkw;
      k++;
    }

    const meanX = sumX / sumWeights;
    const meanY = sumY / sumWeights;
    const meanXY = sumXY / sumWeights;
    const meanXSquared = sumXSquared / sumWeights;
    let beta;

    if (meanXSquared === meanX * meanX) {
      beta = 0;
    } else {
      beta = (meanXY - meanX * meanY) / (meanXSquared - meanX * meanX);
    }

    const alpha = meanY - beta * meanX;
    res[i] = beta * x + alpha;
  }

  return {
    equation: '',
    points: xval.map((x, i) => {
      return [x, res[i]];
    }),
    string: ''
  };
}

const theme1 = '#a9be3b|#558cc0|#d34957|#ff9f3a|#968f8f|#b7409f|#ffda64|#4fbdae|#b78040|#676767|#6a33cf|#4a7833|#454545'.split('|');
const defaultMultiAxisTheme1 = {
  0: {
    startColor: '#6cb8ff',
    endColor: '#3f6a92',
    mainColor: '#558cc0'
  },
  1: {
    startColor: '#9e3640',
    endColor: '#ff5666',
    mainColor: '#d34957'
  }
};

const getTransformedLayout = layout => _objectSpread2({}, layout, {
  type: String(layout.type).toUpperCase(),
  rangeAxisLabel: layout.rangeAxisLabel || layout.rangeAxisTitle,
  domainAxisLabel: layout.domainAxisLabel || layout.domainAxisTitle,
  targetLineLabel: layout.targetLineLabel || layout.targetLineTitle,
  baseLineLabel: layout.baseLineLabel || layout.baseLineTitle,
  // DHIS2-6774: make sure optionalAxes is initialized as Array when switching
  // visualization type in dashboards app
  optionalAxes: layout.optionalAxes || []
});

const getTransformedExtraOptions = extraOptions => _objectSpread2({}, extraOptions, {
  multiAxisTheme: extraOptions.multiAxisTheme || defaultMultiAxisTheme1
});

function dhis_highcharts$1 ({
  store,
  layout,
  el,
  extraConfig,
  extraOptions
}) {
  const _layout = getTransformedLayout(layout);

  const _extraOptions = getTransformedExtraOptions(extraOptions);

  const series = store.generateData({
    type: _layout.type,
    seriesId: _layout.columns && _layout.columns.length ? _layout.columns[0].dimension : null,
    categoryId: _layout.rows && _layout.rows.length ? _layout.rows[0].dimension : null
  });
  const stacked = isStacked(_layout.type);
  let config = {
    // type etc
    chart: getChart(_layout, el, _extraOptions.dashboard),
    // title
    title: getTitle(_layout, store.data[0].metaData, _extraOptions.dashboard),
    // subtitle
    subtitle: getSubtitle(series, _layout, store.data[0].metaData, _extraOptions.dashboard),
    // x-axis
    xAxis: getXAxis(store, _layout, _extraOptions),
    // y-axis
    yAxis: getYAxis(_layout, series, _extraOptions),
    // series
    series: getSeries(series.slice(), store, _layout, stacked, _extraOptions),
    // legend
    legend: getLegend$1(_layout, _extraOptions.dashboard),
    // pane
    pane: getPane(_layout.type),
    // no data
    lang: {
      noData: _extraOptions.noData.text
    },
    noData: getNoData(),
    // credits
    credits: {
      enabled: false
    },
    // exporting
    exporting: {
      // disable exporting context menu
      enabled: false
    }
  }; // hide empty categories

  if (_layout.hideEmptyRowItems !== 'NONE') {
    config = getTrimmedConfig(config, _layout.hideEmptyRowItems);
  } // sorting


  if (_layout.sortOrder) {
    config = getSortedConfig$1(config, _layout, stacked);
  } // DHIS2-1243 add trend lines after sorting
  // trend line on pie and gauge does not make sense


  if (isString$1(_layout.regressionType) && _layout.regressionType !== 'NONE' && !isRegressionIneligible(_layout.type)) {
    config.series = addTrendLines(_layout.regressionType, config.series, stacked);
  } // force apply extra config


  Object.assign(config, extraConfig);
  return objectClean(config);
}

function getSingleValueTitle (layout, metaData) {
  if (layout.columns) {
    const firstItem = layout.columns[0].items[0];
    const column = Object.assign({}, layout.columns[0], {
      items: [firstItem]
    });
    return getFilterText([column], metaData);
  }

  return '';
}

function getDefault$7(layout, metaData, dashboard) {
  return layout.filters && !dashboard ? getFilterText(layout.filters, metaData) : '';
}

function getTitle$1 (layout, metaData, dashboard) {
  if (layout.hideTitle) {
    return '';
  }

  if (typeof layout.title === 'string' && layout.title.length) {
    return layout.title;
  } else {
    let title;

    switch (layout.type) {
      case VIS_TYPE_SINGLE_VALUE:
        title = getSingleValueTitle(layout, metaData);
        break;

      default:
        title = getDefault$7(layout, metaData, dashboard);
    }

    return title;
  }
}

function getSingleValueTitle$1 (layout, metaData) {
  return layout.filters ? getFilterText(layout.filters, metaData) : '';
}

function getDefault$8(layout, dashboard, metaData) {
  if (dashboard || typeof layout.title === 'string') {
    return getFilterText(layout.filters, metaData);
  }

  return '';
}

function getSubtitle$1 (layout, metaData, dashboard) {
  if (layout.hideSubtitle) {
    return '';
  }

  if (typeof layout.subtitle === 'string' && layout.subtitle.length) {
    return layout.subtitle;
  } else {
    let subtitle;

    switch (layout.type) {
      case VIS_TYPE_SINGLE_VALUE:
        subtitle = getSingleValueTitle$1(layout, metaData);
        break;

      default:
        subtitle = getDefault$8(layout, dashboard, metaData);
    }

    return subtitle;
  }
}

function dhis_dhis$1 ({
  store,
  layout,
  extraOptions
}) {
  const data = store.generateData({
    type: layout.type,
    seriesId: layout.columns && layout.columns.length ? layout.columns[0].dimension : null,
    categoryId: layout.rows && layout.rows.length ? layout.rows[0].dimension : null
  });
  const value = data[0] === undefined ? extraOptions.noData.text : data[0];
  const config = {
    value: value,
    title: getTitle$1(layout, store.data[0].metaData, extraOptions.dashboard),
    subtitle: getSubtitle$1(layout, store.data[0].metaData, extraOptions.dashboard)
  };
  return config;
}

var adapters$1 = {
  dhis_highcharts: dhis_highcharts$1,
  dhis_dhis: dhis_dhis$1
};

HM(H);
HSG(H);
HNDTD(H);
HE(H);
function highcharts (config, el) {
  if (config) {
    config.chart.renderTo = el || config.chart.renderTo;
    return new H.Chart(config);
  }
}

const svgNS = 'http://www.w3.org/2000/svg';

const generateValueSVG = (value, legendSet, y) => {
  const textSize = 300;
  const defaultFillColor = '#000000';
  const svgValue = document.createElementNS(svgNS, 'svg');
  svgValue.setAttribute('xmlns', svgNS);
  svgValue.setAttribute('viewBox', "0 -".concat(textSize + 50, " ").concat(textSize * 0.75 * value.length, " ").concat(textSize + 200));

  if (y) {
    svgValue.setAttribute('y', y);
  }

  const fillColor = legendSet ? getColorByValueFromLegendSet(legendSet, value) : defaultFillColor;
  const text = document.createElementNS(svgNS, 'text');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('font-size', textSize);
  text.setAttribute('font-weight', '300');
  text.setAttribute('letter-spacing', '-5');
  text.setAttribute('x', '50%');
  text.setAttribute('fill', fillColor);
  text.appendChild(document.createTextNode(value));
  svgValue.appendChild(text);
  return svgValue;
};

const generateDashboardItem = (config, legendSet) => {
  const container = document.createElement('div');
  container.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%');
  const titleStyle = 'font-size: 12px; color: #666;';
  const title = document.createElement('span');
  title.setAttribute('style', titleStyle);

  if (config.title) {
    title.appendChild(document.createTextNode(config.title));
    container.appendChild(title);
  }

  const subtitle = document.createElement('span');
  subtitle.setAttribute('style', titleStyle + ' margin-top: 4px');

  if (config.subtitle) {
    subtitle.appendChild(document.createTextNode(config.subtitle));
    container.appendChild(subtitle);
  }

  container.appendChild(generateValueSVG(config.value, legendSet));
  return container;
};

const generateDVItem = (config, legendSet, parentEl) => {
  const parentElBBox = parentEl.getBoundingClientRect();
  const width = parentElBBox.width;
  const height = parentElBBox.height;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('viewBox', "0 0 ".concat(width, " ").concat(height));
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  const title = document.createElementNS(svgNS, 'text');
  title.setAttribute('x', '50%');
  title.setAttribute('y', 28);
  title.setAttribute('text-anchor', 'middle');
  title.setAttribute('font-size', '18px');
  title.setAttribute('fill', '#111');

  if (config.title) {
    title.appendChild(document.createTextNode(config.title));
    svg.appendChild(title);
  }

  const subtitle = document.createElementNS(svgNS, 'text');
  subtitle.setAttribute('x', '50%');
  subtitle.setAttribute('y', 28);
  subtitle.setAttribute('dy', 22);
  subtitle.setAttribute('text-anchor', 'middle');
  subtitle.setAttribute('font-size', '14px');
  subtitle.setAttribute('fill', '#111');

  if (config.subtitle) {
    subtitle.appendChild(document.createTextNode(config.subtitle));
    svg.appendChild(subtitle);
  }

  svg.appendChild(generateValueSVG(config.value, legendSet, 20));
  return svg;
};

function getSingleValueGenerator (config, parentEl, {
  dashboard,
  legendSets
}) {
  const legendSet = legendSets[0];
  parentEl.style.overflow = 'hidden';
  parentEl.style.display = 'flex';
  parentEl.style.justifyContent = 'center';
  return dashboard ? generateDashboardItem(config, legendSet) : generateDVItem(config, legendSet, parentEl);
}

function dhis$2 (config, parentEl, extraOptions) {
  if (config) {
    const node = typeof parentEl === 'object' ? parentEl : typeof parentEl === 'string' ? document.querySelector(parentEl) : null;

    if (node) {
      if (node.lastChild) {
        node.removeChild(node.lastChild);
      }

      let content;

      switch (config.type) {
        case VIS_TYPE_SINGLE_VALUE:
          content = getSingleValueGenerator(config, node, extraOptions);
          break;

        default:
          content = getSingleValueGenerator(config, node, extraOptions);
      }

      node.appendChild(content);
      return node.innerHTML;
    }
  }
}

var generators = {
  highcharts,
  dhis: dhis$2
};

function Config ({
  store,
  layout,
  el,
  inputFormat = 'dhis',
  outputFormat = 'highcharts',
  extraLayout,
  extraOptions,
  onError,
  onWarning
}) {
  const _validator = validators$1[inputFormat] || validators$1.noValidation;

  const _adapter = adapters$1[inputFormat + '_' + outputFormat];
  const _generator = generators[outputFormat];

  if (_validator === validators$1.noValidation) {
    onWarning("No validation implementation for config input format \"".concat(inputFormat, "\""));
  }

  if (!_adapter) {
    onError("No config tranformation implementation for format \"".concat(inputFormat, "\" to format \"").concat(outputFormat, "\""));
  }

  if (!_generator) {
    onError("No visualization implementation for format ".concat(outputFormat));
  }

  this.getConfig = () => {
    const DEFAULT_EXTRA_OPTIONS = {
      colors: theme1,
      noData: {
        text: i18n.t('No data')
      }
    };
    return _adapter({
      layout: _validator({
        layout,
        onError,
        onWarning
      }),
      extraOptions: Object.assign({}, DEFAULT_EXTRA_OPTIONS, extraOptions),
      store,
      el,
      extraLayout
    });
  };

  this.createVisualization = () => _generator(this.getConfig(), el, extraOptions);
}

const defaultError = error => {
  throw new Error(error);
};

const defaultWarning = warning => {
  console.log(warning);
};

function createVisualization(data, layout, el, extraOptions, error = defaultError, warning = defaultWarning, outputFormat) {
  const _data = isArray(data) ? data : [data];

  const store = new Store({
    data: _data,
    error,
    warning,
    outputFormat
  });
  const config = new Config({
    store,
    layout,
    el,
    outputFormat,
    extraOptions,
    error,
    warning
  });
  return {
    store,
    config,
    visualization: config.createVisualization()
  };
}

exports.AXIS = AXIS;
exports.AXIS_ID_COLUMNS = AXIS_ID_COLUMNS;
exports.AXIS_ID_FILTERS = AXIS_ID_FILTERS;
exports.AXIS_ID_ROWS = AXIS_ID_ROWS;
exports.DEFAULT_AXIS_IDS = DEFAULT_AXIS_IDS;
exports.DIMENSION = DIMENSION;
exports.DIMENSION_ID_ASSIGNED_CATEGORIES = DIMENSION_ID_ASSIGNED_CATEGORIES;
exports.DIMENSION_ID_DATA = DIMENSION_ID_DATA;
exports.DIMENSION_ID_ORGUNIT = DIMENSION_ID_ORGUNIT;
exports.DIMENSION_ID_PERIOD = DIMENSION_ID_PERIOD;
exports.DIMENSION_PROPS = DIMENSION_PROPS;
exports.DIMENSION_PROP_ID = DIMENSION_PROP_ID;
exports.DIMENSION_PROP_ITEMS = DIMENSION_PROP_ITEMS;
exports.DIMENSION_PROP_NO_ITEMS = DIMENSION_PROP_NO_ITEMS;
exports.DataDimension = DataDimension;
exports.DimensionFilter = Filter$o;
exports.DimensionItem = DimensionItem;
exports.DimensionMenu = DimensionMenu;
exports.DimensionsPanel = DimensionsPanel;
exports.DynamicDimension = DynamicDimension;
exports.ITEM = ITEM;
exports.ITEM_PROPS = ITEM_PROPS;
exports.ITEM_PROP_ID = ITEM_PROP_ID;
exports.ItemSelector = ItemSelector;
exports.LAYOUT = LAYOUT;
exports.LAYOUT_TYPE_DEFAULT = LAYOUT_TYPE_DEFAULT;
exports.LAYOUT_TYPE_PIE = LAYOUT_TYPE_PIE;
exports.LAYOUT_TYPE_PIVOT_TABLE = LAYOUT_TYPE_PIVOT_TABLE;
exports.LAYOUT_TYPE_SINGLE_VALUE = LAYOUT_TYPE_SINGLE_VALUE;
exports.LAYOUT_TYPE_YEAR_OVER_YEAR = LAYOUT_TYPE_YEAR_OVER_YEAR;
exports.OrgUnitDimension = OrgUnitDimension;
exports.PeriodDimension = PeriodDimension;
exports.PivotTable = PivotTable;
exports.VIS_TYPE_AREA = VIS_TYPE_AREA;
exports.VIS_TYPE_BAR = VIS_TYPE_BAR;
exports.VIS_TYPE_BUBBLE = VIS_TYPE_BUBBLE;
exports.VIS_TYPE_COLUMN = VIS_TYPE_COLUMN;
exports.VIS_TYPE_GAUGE = VIS_TYPE_GAUGE;
exports.VIS_TYPE_LINE = VIS_TYPE_LINE;
exports.VIS_TYPE_PIE = VIS_TYPE_PIE;
exports.VIS_TYPE_PIVOT_TABLE = VIS_TYPE_PIVOT_TABLE;
exports.VIS_TYPE_RADAR = VIS_TYPE_RADAR;
exports.VIS_TYPE_SINGLE_VALUE = VIS_TYPE_SINGLE_VALUE;
exports.VIS_TYPE_STACKED_BAR = VIS_TYPE_STACKED_BAR;
exports.VIS_TYPE_STACKED_COLUMN = VIS_TYPE_STACKED_COLUMN;
exports.VIS_TYPE_YEAR_OVER_YEAR_COLUMN = VIS_TYPE_YEAR_OVER_YEAR_COLUMN;
exports.VIS_TYPE_YEAR_OVER_YEAR_LINE = VIS_TYPE_YEAR_OVER_YEAR_LINE;
exports.apiFetchDimensions = apiFetchDimensions;
exports.apiFetchRecommendedIds = apiFetchRecommendedIds;
exports.axisGetAllItems = axisGetAllItems;
exports.axisGetDimension = axisGetDimension;
exports.axisGetDimensionIds = axisGetDimensionIds;
exports.axisHasDataDimension = axisHasDataDimension;
exports.axisHasDimension = axisHasDimension;
exports.axisHasOuDimension = axisHasOuDimension;
exports.axisHasPeriodDimension = axisHasPeriodDimension;
exports.axisIsEmpty = axisIsEmpty;
exports.canDimensionBeAddedToAxis = canDimensionBeAddedToAxisByVisType;
exports.createVisualization = createVisualization;
exports.defaultVisType = defaultVisType;
exports.dimensionCreate = dimensionCreate;
exports.dimensionGetId = dimensionGetId;
exports.dimensionGetItemIds = dimensionGetItemIds;
exports.dimensionGetItems = dimensionGetItems;
exports.dimensionIs = dimensionIs;
exports.dimensionIsEmpty = dimensionIsEmpty;
exports.dimensionIsValid = dimensionIsValid;
exports.filterOutPredefinedDimensions = filterOutPredefinedDimensions;
exports.getAllLockedDimensionIds = getAllLockedDimIdsByVisType;
exports.getAvailableAxes = getAvailableAxesByVisType;
exports.getAxisMaxNumberOfDimensions = getAxisMaxNumberOfDimsByVisType;
exports.getAxisMaxNumberOfItems = getAxisMaxNumberOfItemsByVisType;
exports.getAxisMinNumberOfDimensions = getAxisMinNumberOfDimsByVisType;
exports.getAxisName = getAxisName;
exports.getAxisNameByLayoutType = getAxisNameByLayoutType;
exports.getAxisPerLockedDimension = getAxisPerLockedDimByVisType;
exports.getDimensionById = getDimensionById;
exports.getDisallowedDimensions = getDisallowedDimsByVisType;
exports.getDisplayNameByVisType = getDisplayNameByVisType;
exports.getDynamicDimensions = getDynamicDimensions;
exports.getFixedDimensions = getFixedDimensions;
exports.getLayoutTypeByVisType = getLayoutTypeByVisType;
exports.getPredefinedDimensionProp = getPredefinedDimensionProp;
exports.getPredefinedDimensions = getPredefinedDimensions;
exports.getTransferableDimension = getTransferableDimensionPerAxisByVisType;
exports.hasAxisTooManyItems = hasAxisTooManyItemsByVisType;
exports.isAxisFull = isAxisFullByVisType;
exports.isDimensionLocked = isDimensionLockedByVisType;
exports.isDualAxisType = isDualAxisType;
exports.isSingleValue = isSingleValue;
exports.isStacked = isStacked;
exports.isYearOverYear = isYearOverYear;
exports.itemGetId = itemGetId;
exports.itemIsValid = itemIsValid;
exports.layoutFilterDimensions = layoutFilterDimensions;
exports.layoutGetAllAxes = layoutGetAllAxes;
exports.layoutGetAllDimensions = layoutGetAllDimensions;
exports.layoutGetAllItemIds = layoutGetAllItemIds;
exports.layoutGetAllItems = layoutGetAllItems;
exports.layoutGetAxisIdDimensionIdsObject = layoutGetAxisIdDimensionIdsObject;
exports.layoutGetDimension = layoutGetDimension;
exports.layoutGetDimensionIdItemIdsObject = layoutGetDimensionIdItemIdsObject;
exports.layoutGetDimensionItems = layoutGetDimensionItems;
exports.layoutHasDataDimension = layoutHasDataDimension;
exports.layoutHasDimension = layoutHasDimension;
exports.layoutHasDynamicDimension = layoutHasDynamicDimension;
exports.layoutHasPeriodDimension = layoutHasPeriodDimension;
exports.layoutReplaceDimension = layoutReplaceDimension;
exports.ouIdHelper = ouIdHelper;
exports.visTypeDisplayNames = visTypeDisplayNames;
exports.visTypeIcons = visTypeIcons;
//# sourceMappingURL=lib.js.map
