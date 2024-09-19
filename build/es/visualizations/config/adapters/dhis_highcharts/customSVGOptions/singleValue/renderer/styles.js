const baseStyle = {
  value: {
    fontWeight: 300
  },
  subText: {}
};
const valueStyles = [{
  fontSize: 200,
  letterSpacing: -6
}, {
  fontSize: 182,
  letterSpacing: -5.5
}, {
  fontSize: 164,
  letterSpacing: -5
}, {
  fontSize: 146,
  letterSpacing: -4.5
}, {
  fontSize: 128,
  letterSpacing: -4
}, {
  fontSize: 110,
  letterSpacing: -3.5
}, {
  fontSize: 92,
  letterSpacing: -3
}, {
  fontSize: 74,
  letterSpacing: -2.5
}, {
  fontSize: 56,
  letterSpacing: -2
}, {
  fontSize: 38,
  letterSpacing: -1.5
}, {
  fontSize: 20,
  letterSpacing: -1
}];
const subTextStyles = [{
  fontSize: 67,
  letterSpacing: -2
}, {
  fontSize: 61,
  letterSpacing: -1.8
}, {
  fontSize: 55,
  letterSpacing: -1.6
}, {
  fontSize: 49,
  letterSpacing: -1.4
}, {
  fontSize: 43,
  letterSpacing: -1.2
}, {
  fontSize: 37,
  letterSpacing: -1
}, {
  fontSize: 31,
  letterSpacing: -0.8
}, {
  fontSize: 25,
  letterSpacing: -0.6
}, {
  fontSize: 19,
  letterSpacing: -0.4
}, {
  fontSize: 13,
  letterSpacing: 0.2
}, {
  fontSize: 7,
  letterSpacing: 0
}];
const spacings = [{
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 200
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 182
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 164
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 146
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 128
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 110
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 92
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 74
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 56
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 38
}, {
  valueTop: 8,
  subTextTop: 4,
  iconGap: 4,
  iconSize: 20
}];
export const MIN_SIDE_WHITESPACE = 4;
export class DynamicStyles {
  constructor() {
    this.currentIndex = 0;
  }
  getStyle() {
    return {
      value: {
        ...baseStyle.value,
        ...valueStyles[this.currentIndex]
      },
      subText: {
        ...baseStyle.subText,
        ...subTextStyles[this.currentIndex]
      },
      spacing: spacings[this.currentIndex]
    };
  }
  next() {
    if (this.currentIndex === valueStyles.length - 1) {
      throw new Error('No next available, already on the smallest style');
    } else {
      ++this.currentIndex;
    }
    return this.getStyle();
  }
  first() {
    this.currentIndex = 0;
    return this.getStyle();
  }
  hasNext() {
    return this.currentIndex < valueStyles.length - 1;
  }
}