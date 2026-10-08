"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordCount = exports.mergeCounts = exports.isCounted = void 0;
/* A coverage's counts, by org unit id or group key (getGroupCountsKey):
 * `{ totals: { [level]: n }, sources: { [sourceId]: { byLevel: { [level]: n },
 * ancestors } } }`. A count query is keyed `[countsKey, what, level]`: `what`
 * is 'total' or a source id, `level` a level or 'ancestors'. A count missing
 * from the counts hasn't been fetched; 0 has. */

const recordCount = (counts, [countsKey, what, level], total) => {
  counts[countsKey] ??= {
    totals: {},
    sources: {}
  };
  const counted = counts[countsKey];
  if (what === 'total') {
    counted.totals[level] = total;
    return;
  }
  counted.sources[what] ??= {
    byLevel: {}
  };
  const source = counted.sources[what];

  // A group's ancestors are counted level by level, and add up
  if (level === 'ancestors') {
    var _source$ancestors;
    source.ancestors = ((_source$ancestors = source.ancestors) !== null && _source$ancestors !== void 0 ? _source$ancestors : 0) + total;
  } else {
    source.byLevel[level] = total;
  }
};

// Whether a count query is answered in `counts` already
exports.recordCount = recordCount;
const isCounted = (counts, [countsKey, what, level]) => {
  var _counted$sources, _source$byLevel;
  const counted = counts === null || counts === void 0 ? void 0 : counts[countsKey];
  if (what === 'total') {
    var _counted$totals;
    return (counted === null || counted === void 0 || (_counted$totals = counted.totals) === null || _counted$totals === void 0 ? void 0 : _counted$totals[level]) !== undefined;
  }
  const source = counted === null || counted === void 0 || (_counted$sources = counted.sources) === null || _counted$sources === void 0 ? void 0 : _counted$sources[what];
  return level === 'ancestors' ? (source === null || source === void 0 ? void 0 : source.ancestors) !== undefined : (source === null || source === void 0 || (_source$byLevel = source.byLevel) === null || _source$byLevel === void 0 ? void 0 : _source$byLevel[level]) !== undefined;
};
exports.isCounted = isCounted;
const mergeSources = (sources = {}, newSources = {}) => Object.fromEntries([...new Set([...Object.keys(sources), ...Object.keys(newSources)])].map(id => {
  var _sources$id, _newSources$id;
  return [id, {
    ...sources[id],
    ...newSources[id],
    byLevel: {
      ...((_sources$id = sources[id]) === null || _sources$id === void 0 ? void 0 : _sources$id.byLevel),
      ...((_newSources$id = newSources[id]) === null || _newSources$id === void 0 ? void 0 : _newSources$id.byLevel)
    }
  }];
}));

// The counts of both, the new ones last
const mergeCounts = (counts = {}, newCounts = {}) => Object.fromEntries([...new Set([...Object.keys(counts), ...Object.keys(newCounts)])].map(countsKey => {
  var _counts$countsKey, _newCounts$countsKey, _counts$countsKey2, _newCounts$countsKey2;
  return [countsKey, {
    totals: {
      ...((_counts$countsKey = counts[countsKey]) === null || _counts$countsKey === void 0 ? void 0 : _counts$countsKey.totals),
      ...((_newCounts$countsKey = newCounts[countsKey]) === null || _newCounts$countsKey === void 0 ? void 0 : _newCounts$countsKey.totals)
    },
    sources: mergeSources((_counts$countsKey2 = counts[countsKey]) === null || _counts$countsKey2 === void 0 ? void 0 : _counts$countsKey2.sources, (_newCounts$countsKey2 = newCounts[countsKey]) === null || _newCounts$countsKey2 === void 0 ? void 0 : _newCounts$countsKey2.sources)
  }];
}));
exports.mergeCounts = mergeCounts;