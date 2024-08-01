class AnalyticsResponseHeader {
  constructor() {
    let header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      isPrefix: false,
      isCollect: false,
      index: undefined
    };
    Object.assign(this, header, options);
  }
  getIndex() {
    return this.index;
  }
  setIndex(value) {
    const index = +value;
    if (!Number.isNaN(index) && Number.isFinite(index)) {
      this.index = parseInt(index, 10);
    }
  }
}
export default AnalyticsResponseHeader;