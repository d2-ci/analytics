"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.isRegressionIneligible = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _arrayContains = _interopRequireDefault(require("d2-utilizr/lib/arrayContains"));

var _d3Color = require("d3-color");

var _getStackedData = _interopRequireDefault(require("./getStackedData"));

var _visTypes = require("../../../../modules/visTypes");

var DEFAULT_TRENDLINE = {
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

var isRegressionIneligible = function isRegressionIneligible(type) {
  return (0, _arrayContains.default)([_visTypes.VIS_TYPE_GAUGE, _visTypes.VIS_TYPE_PIE], type);
};

exports.isRegressionIneligible = isRegressionIneligible;

function _default(regressionType, series, isStacked) {
  var newSeries = [];

  if (isStacked) {
    newSeries.push.apply(newSeries, (0, _toConsumableArray2.default)(series).concat([Object.assign({}, getRegressionObj((0, _getStackedData.default)(series), regressionType))]));
  } else {
    series.forEach(function (seriesObj) {
      newSeries.push(seriesObj, Object.assign({}, getRegressionObj(seriesObj.data, regressionType), {
        name: seriesObj.name + ' (trend)',
        color: getDarkerColor(seriesObj.color)
      }));
    });
  }

  return newSeries;
}

function getColor(colors, index) {
  return colors[index] || getColor(colors, index - colors.length);
}

function getDarkerColor(color) {
  return (0, _d3Color.rgb)(color).darker(0.5).toString();
}

function getRegressionData(data) {
  return data.map(function (value, index) {
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
  var regression;
  var regressionTypeOptions = {};

  switch (regressionType) {
    case 'LINEAR':
      // linear(data, decimalPlaces)
      regression = linear(getRegressionData(data));
      regressionTypeOptions.type = 'line';
      break;

    case 'POLYNOMIAL':
      // polynomial(data, order, extrapolate)
      regression = polynomial(getRegressionData(data));
      break;

    case 'LOESS':
      // loess(data, smoothing)
      regression = loess(getRegressionData(data), 0.25);
      break;
  }

  return Object.assign({}, DEFAULT_TRENDLINE, regressionTypeOptions, {
    data: regression.points
  });
} // Code extracted from https://github.com/Tom-Alexander/regression-js/


function gaussianElimination(a, o) {
  var maxrow = 0,
      tmp = 0,
      n = a.length - 1,
      x = new Array(o);

  for (var i = 0; i < n; i++) {
    maxrow = i;

    for (var j = i + 1; j < n; j++) {
      if (Math.abs(a[i][j]) > Math.abs(a[i][maxrow])) {
        maxrow = j;
      }
    }

    for (var k = i; k < n + 1; k++) {
      tmp = a[k][i];
      a[k][i] = a[k][maxrow];
      a[k][maxrow] = tmp;
    }

    for (var _j = i + 1; _j < n; _j++) {
      for (var _k = n; _k >= i; _k--) {
        a[_k][_j] -= a[_k][i] * a[i][_j] / a[i][i];
      }
    }
  }

  for (var _j2 = n - 1; _j2 >= 0; _j2--) {
    tmp = 0;

    for (var _k2 = _j2 + 1; _k2 < n; _k2++) {
      tmp += a[_k2][_j2] * x[_k2];
    }

    x[_j2] = (a[n][_j2] - tmp) / a[_j2][_j2];
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


function linear(data) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var sum = [0, 0, 0, 0, 0],
      results = [],
      N = data.length;

  for (var _n = 0, len = data.length; _n < len; _n++) {
    if (data[_n]['x'] != null) {
      data[_n][0] = data[_n].x;
      data[_n][1] = data[_n].y;
    }

    if (data[_n][1] != null) {
      sum[0] += data[_n][0]; // Σ(X)

      sum[1] += data[_n][1]; // Σ(Y)

      sum[2] += data[_n][0] * data[_n][0]; // Σ(X^2)

      sum[3] += data[_n][0] * data[_n][1]; // Σ(XY)

      sum[4] += data[_n][1] * data[_n][1]; // Σ(Y^2)
    } else {
      N -= 1;
    }
  }

  var gradient = (N * sum[3] - sum[0] * sum[1]) / (N * sum[2] - sum[0] * sum[0]);
  var intercept = sum[1] / N - gradient * sum[0] / N; // let correlation = (N * sum[3] - sum[0] * sum[1]) / Math.sqrt((N * sum[2] - sum[0] * sum[0]) * (N * sum[4] - sum[1] * sum[1]));

  for (var i = 0, _len = data.length; i < _len; i++) {
    var coorY = data[i][0] * gradient + intercept;

    if (decimalPlaces) {
      coorY = parseFloat(coorY.toFixed(decimalPlaces));
    }

    var coordinate = [data[i][0], coorY];
    results.push(coordinate);
  }

  results.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });
  var string = 'y = ' + Math.round(gradient * 100) / 100 + 'x + ' + Math.round(intercept * 100) / 100;
  return {
    equation: [gradient, intercept],
    points: results,
    string: string
  };
} // Code extracted from https://github.com/Tom-Alexander/regression-js/


function logarithmic(data) {
  var sum = [0, 0, 0, 0],
      results = [],
      mean = 0;

  for (var _n2 = 0, len = data.length; _n2 < len; _n2++) {
    if (data[_n2].x != null) {
      data[_n2][0] = data[_n2].x;
      data[_n2][1] = data[_n2].y;
    }

    if (data[_n2][1] != null) {
      sum[0] += Math.log(data[_n2][0]);
      sum[1] += data[_n2][1] * Math.log(data[_n2][0]);
      sum[2] += data[_n2][1];
      sum[3] += Math.pow(Math.log(data[_n2][0]), 2);
    }
  }

  var B = (n * sum[1] - sum[2] * sum[0]) / (n * sum[3] - sum[0] * sum[0]);
  var A = (sum[2] - B * sum[0]) / n;

  for (var i = 0, _len2 = data.length; i < _len2; i++) {
    var coordinate = [data[i][0], A + B * Math.log(data[i][0])];
    results.push(coordinate);
  }

  results.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });
  var string = 'y = ' + Math.round(A * 100) / 100 + ' + ' + Math.round(B * 100) / 100 + ' ln(x)';
  return {
    equation: [A, B],
    points: results,
    string: string
  };
} // Code extracted from https://github.com/Tom-Alexander/regression-js/


function power(data) {
  var sum = [0, 0, 0, 0],
      results = [];

  for (var _n3 = 0, len = data.length; _n3 < len; _n3++) {
    if (data[_n3].x != null) {
      data[_n3][0] = data[_n3].x;
      data[_n3][1] = data[_n3].y;
    }

    if (data[_n3][1] != null) {
      sum[0] += Math.log(data[_n3][0]);
      sum[1] += Math.log(data[_n3][1]) * Math.log(data[_n3][0]);
      sum[2] += Math.log(data[_n3][1]);
      sum[3] += Math.pow(Math.log(data[_n3][0]), 2);
    }
  }

  var B = (n * sum[1] - sum[2] * sum[0]) / (n * sum[3] - sum[0] * sum[0]);
  var A = Math.pow(Math.E, (sum[2] - B * sum[0]) / n);

  for (var i = 0, _len3 = data.length; i < _len3; i++) {
    var coordinate = [data[i][0], A * Math.pow(data[i][0], B)];
    results.push(coordinate);
  }

  results.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });
  var string = 'y = ' + Math.round(A * 100) / 100 + 'x^' + Math.round(B * 100) / 100;
  return {
    equation: [A, B],
    points: results,
    string: string
  };
} // Code extracted from https://github.com/Tom-Alexander/regression-js/


function polynomial(data) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var extrapolate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var decimalPlaces = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  var lhs = [],
      rhs = [],
      results = [],
      a = 0,
      b = 0,
      k = order + 1;

  for (var i = 0; i < k; i++) {
    for (var l = 0, len = data.length; l < len; l++) {
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
    var c = [];

    for (var j = 0; j < k; j++) {
      for (var _l = 0, _len4 = data.length; _l < _len4; _l++) {
        if (data[_l][1]) {
          b += Math.pow(data[_l][0], i + j);
        }
      }

      c.push(b);
      b = 0;
    }

    rhs.push(c);
  }

  rhs.push(lhs);
  var equation = gaussianElimination(rhs, k);
  var resultLength = data.length + extrapolate;
  var step = data[data.length - 1][0] - data[data.length - 2][0];

  for (var _i = 0, _len5 = resultLength; _i < _len5; _i++) {
    var answer = 0,
        x = 0;

    if (typeof data[_i] !== 'undefined') {
      x = data[_i][0];
    } else {
      x = data[data.length - 1][0] + (_i - data.length) * step;
    }

    for (var w = 0; w < equation.length; w++) {
      answer += equation[w] * Math.pow(x, w);

      if (decimalPlaces) {
        answer = parseFloat(answer.toFixed(decimalPlaces));
      }
    }

    results.push([x, answer]);
  }

  results.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });
  var string = 'y = ';

  for (var _i2 = equation.length - 1; _i2 >= 0; _i2--) {
    if (_i2 > 1) {
      string += Math.round(equation[_i2] * 100) / 100 + 'x^' + _i2 + ' + ';
    } else if (_i2 == 1) {
      string += Math.round(equation[_i2] * 100) / 100 + 'x' + ' + ';
    } else {
      string += Math.round(equation[_i2] * 100) / 100;
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


function loess(data) {
  var bandwidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  var xval = data.map(function (pair) {
    return pair[0];
  });
  var distinctX = array_unique(xval);

  if (2 / distinctX.length > bandwidth) {
    bandwidth = Math.min(2 / distinctX.length, 1);
  }

  var yval = data.map(function (pair) {
    return pair[1];
  });

  function array_unique(values) {
    var o = {},
        i,
        l = values.length,
        r = [];

    for (i = 0; i < l; i += 1) {
      o[values[i]] = values[i];
    }

    for (i in o) {
      r.push(o[i]);
    }

    return r;
  }

  function tricube(x) {
    var tmp = 1 - x * x * x;
    return tmp * tmp * tmp;
  }

  var res = [];
  var left = 0;
  var right = Math.floor(bandwidth * xval.length) - 1;

  for (var i in xval) {
    var x = xval[i];

    if (i > 0) {
      if (right < xval.length - 1 && xval[right + 1] - xval[i] < xval[i] - xval[left]) {
        left++;
        right++;
      }
    }

    var edge = void 0;

    if (xval[i] - xval[left] > xval[right] - xval[i]) {
      edge = left;
    } else {
      edge = right;
    }

    var denom = Math.abs(1.0 / (xval[edge] - x));
    var sumWeights = 0;
    var sumX = 0,
        sumXSquared = 0,
        sumY = 0,
        sumXY = 0;
    var k = left;

    while (k <= right) {
      var xk = xval[k];
      var yk = yval[k];
      var dist = void 0;

      if (k < i) {
        dist = x - xk;
      } else {
        dist = xk - x;
      }

      var w = tricube(dist * denom);
      var xkw = xk * w;
      sumWeights += w;
      sumX += xkw;
      sumXSquared += xk * xkw;
      sumY += yk * w;
      sumXY += yk * xkw;
      k++;
    }

    var meanX = sumX / sumWeights;
    var meanY = sumY / sumWeights;
    var meanXY = sumXY / sumWeights;
    var meanXSquared = sumXSquared / sumWeights;
    var beta = void 0;

    if (meanXSquared == meanX * meanX) {
      beta = 0;
    } else {
      beta = (meanXY - meanX * meanY) / (meanXSquared - meanX * meanX);
    }

    var alpha = meanY - beta * meanX;
    res[i] = beta * x + alpha;
  }

  return {
    equation: '',
    points: xval.map(function (x, i) {
      return [x, res[i]];
    }),
    string: ''
  };
}