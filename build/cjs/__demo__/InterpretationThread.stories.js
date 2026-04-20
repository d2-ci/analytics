"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithManyComments = exports.WithAFewComments = exports.NoComments = exports.Loading = exports.Error = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _DashboardInterpretationThread = require("../components/Interpretations/DashboardItemInterpretations/DashboardInterpretationThread.js");
var _InterpretationsProvider = require("../components/Interpretations/InterpretationsProvider/InterpretationsProvider.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: 'InterpretationThread'
};
const currentUser = {
  id: 'user001',
  name: 'Tom Wakiki',
  authorities: []
};
const makeInterpretation = overrides => ({
  id: 'interp-1',
  text: 'Interpretation text',
  created: '2026-04-10T14:22:00.000',
  likes: 0,
  createdBy: {
    id: 'user002',
    displayName: 'Amina Diallo'
  },
  comments: [],
  likedBy: [],
  access: {
    write: true,
    manage: false
  },
  ...overrides
});
const ThreadStory = ({
  interpretation,
  interpretationsResolver,
  children
}) => /*#__PURE__*/_react.default.createElement(_appRuntime.CustomDataProvider, {
  data: {
    interpretations: interpretationsResolver !== null && interpretationsResolver !== void 0 ? interpretationsResolver : (_type, query) => {
      if (query.id) {
        return interpretation;
      }
      return {
        interpretations: [interpretation]
      };
    }
  }
}, /*#__PURE__*/_react.default.createElement(_InterpretationsProvider.InterpretationsProvider, {
  currentUser: currentUser
}, children));
ThreadStory.propTypes = {
  children: _propTypes.default.node,
  interpretation: _propTypes.default.object,
  interpretationsResolver: _propTypes.default.func
};
const NoComments = () => {
  const interpretation = makeInterpretation({
    text: 'The ANC coverage rate has improved steadily across all districts this quarter, with the Eastern region showing the most significant gains.',
    likes: 2,
    likedBy: [{
      id: 'user001'
    }, {
      id: 'user003'
    }]
  });
  return /*#__PURE__*/_react.default.createElement(ThreadStory, {
    interpretation: interpretation
  }, /*#__PURE__*/_react.default.createElement(_DashboardInterpretationThread.DashboardInterpretationThread, {
    interpretationId: "interp-1",
    onClose: Function.prototype
  }));
};
exports.NoComments = NoComments;
NoComments.story = {
  name: 'No comments'
};
const WithAFewComments = () => {
  const interpretation = makeInterpretation({
    text: 'Immunization coverage for Penta 3 dropped below 80% in three districts last month. This needs urgent attention before the next reporting cycle.',
    likes: 5,
    likedBy: [{
      id: 'user001'
    }, {
      id: 'user003'
    }, {
      id: 'user004'
    }, {
      id: 'user005'
    }, {
      id: 'user006'
    }],
    comments: [{
      id: 'c1',
      text: 'I checked the district-level data and it looks like the drop is concentrated in two facilities that had staff turnover last month.',
      created: '2026-04-11T09:15:00.000',
      createdBy: {
        id: 'user003',
        displayName: 'James Okonkwo'
      }
    }, {
      id: 'c2',
      text: 'We should flag this for the regional review meeting next week.',
      created: '2026-04-11T11:42:00.000',
      createdBy: {
        id: 'user004',
        displayName: 'Dr. Fatou Mensah'
      }
    }, {
      id: 'c3',
      text: 'Agreed. I will prepare a summary of the affected facilities and share it before the meeting.',
      created: '2026-04-12T08:05:00.000',
      createdBy: {
        id: 'user001',
        displayName: 'Tom Wakiki'
      }
    }]
  });
  return /*#__PURE__*/_react.default.createElement(ThreadStory, {
    interpretation: interpretation
  }, /*#__PURE__*/_react.default.createElement(_DashboardInterpretationThread.DashboardInterpretationThread, {
    interpretationId: "interp-1",
    onClose: Function.prototype
  }));
};
exports.WithAFewComments = WithAFewComments;
WithAFewComments.story = {
  name: 'With a few comments'
};
const WithManyComments = () => {
  const interpretation = makeInterpretation({
    text: 'Disease surveillance data shows an unusual cluster of acute watery diarrhoea cases in the Ashanti region. The pattern warrants investigation by the rapid response team.',
    likes: 10,
    likedBy: [{
      id: 'user001'
    }, {
      id: 'user002'
    }, {
      id: 'user003'
    }, {
      id: 'user004'
    }, {
      id: 'user005'
    }, {
      id: 'user006'
    }, {
      id: 'user007'
    }, {
      id: 'user008'
    }, {
      id: 'user009'
    }, {
      id: 'user010'
    }],
    comments: [{
      id: 'c1',
      text: 'I noticed this trend last week. The cluster seems to be centred around the Kumasi metropolitan area.',
      created: '2026-04-10T15:30:00.000',
      createdBy: {
        id: 'user003',
        displayName: 'James Okonkwo'
      }
    }, {
      id: 'c2',
      text: 'Could this be linked to the water supply disruption reported two weeks ago? The timing fits.',
      created: '2026-04-10T16:12:00.000',
      createdBy: {
        id: 'user004',
        displayName: 'Dr. Fatou Mensah'
      }
    }, {
      id: 'c3',
      text: 'Good point. I have pulled the WASH indicators for those communities and there is a clear correlation with facilities reporting low water quality scores.',
      created: '2026-04-11T08:45:00.000',
      createdBy: {
        id: 'user005',
        displayName: 'Kwame Asante'
      }
    }, {
      id: 'c4',
      text: 'The rapid response team has been notified. They are planning field visits for Thursday and Friday this week.',
      created: '2026-04-11T10:20:00.000',
      createdBy: {
        id: 'user006',
        displayName: 'Grace Nkrumah'
      }
    }, {
      id: 'c5',
      text: 'We should also check neighbouring districts for any spillover. Brong-Ahafo and Eastern regions share water sources with some of the affected communities.',
      created: '2026-04-11T14:00:00.000',
      createdBy: {
        id: 'user001',
        displayName: 'Tom Wakiki'
      }
    }, {
      id: 'c6',
      text: 'Preliminary lab results from Komfo Anokye confirm Vibrio cholerae in 3 of the 8 samples. This needs to be escalated immediately.',
      created: '2026-04-12T07:30:00.000',
      createdBy: {
        id: 'user004',
        displayName: 'Dr. Fatou Mensah'
      }
    }, {
      id: 'c7',
      text: 'I have updated the weekly epidemiological bulletin to include this cluster. The national surveillance team has been copied.',
      created: '2026-04-12T09:55:00.000',
      createdBy: {
        id: 'user007',
        displayName: 'Samuel Owusu'
      }
    }, {
      id: 'c8',
      text: 'Stock levels of ORS and IV fluids at the affected facilities look adequate for now, but we should monitor daily given the trajectory.',
      created: '2026-04-12T13:10:00.000',
      createdBy: {
        id: 'user005',
        displayName: 'Kwame Asante'
      }
    }]
  });
  return /*#__PURE__*/_react.default.createElement(ThreadStory, {
    interpretation: interpretation
  }, /*#__PURE__*/_react.default.createElement(_DashboardInterpretationThread.DashboardInterpretationThread, {
    interpretationId: "interp-1",
    onClose: Function.prototype
  }));
};
exports.WithManyComments = WithManyComments;
WithManyComments.story = {
  name: 'With many comments'
};
const Loading = () => /*#__PURE__*/_react.default.createElement(ThreadStory, {
  interpretationsResolver: () => new Promise(() => {})
}, /*#__PURE__*/_react.default.createElement(_DashboardInterpretationThread.DashboardInterpretationThread, {
  interpretationId: "interp-1",
  onClose: Function.prototype
}));
exports.Loading = Loading;
Loading.story = {
  name: 'Loading'
};
const Error = () => /*#__PURE__*/_react.default.createElement(ThreadStory, {
  interpretationsResolver: () => Promise.reject(new Error('Network request failed while loading the interpretation'))
}, /*#__PURE__*/_react.default.createElement(_DashboardInterpretationThread.DashboardInterpretationThread, {
  interpretationId: "interp-1",
  onClose: Function.prototype
}));
exports.Error = Error;
Error.story = {
  name: 'Error'
};