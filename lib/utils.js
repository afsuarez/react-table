'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
exports.default = {
  get: get,
  set: set,
  takeRight: takeRight,
  last: last,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  makeTemplateComponent: makeTemplateComponent,
  groupBy: groupBy,
  isArray: isArray,
  splitProps: splitProps,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent
};


function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {}
  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];

  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;
  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }
    cursor = cursor[keyPart];
  }
  cursor[keyPart] = value;
  return obj;
}

function takeRight(arr, n) {
  var start = n > arr.length ? 0 : arr.length - n;
  return arr.slice(start);
}

function last(arr) {
  return arr[arr.length - 1];
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(n);
  }
  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i++) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);
      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    }
    // Use the row index for tie breakers
    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);
    if (r) {
      a.splice(i, 1);
      return true;
    }
    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }
      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'undefined') {
      return args[i];
    }
  }
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function makeTemplateComponent(compClass, displayName) {
  if (!displayName) {
    throw new Error('No displayName found for template component:', compClass);
  }
  var cmp = function cmp(props) {
    props.compClass = compClass;
    _react2.default.createElement(_index2.default, props);
  };
  cmp.displayName = displayName;
  return cmp;
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function isArray(a) {
  return Array.isArray(a);
}

// ########################################################################
// Non-exported Helpers
// ########################################################################

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i++) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function splitProps(_ref) {
  var className = _ref.className,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ['className', 'style']);

  return {
    className: className,
    style: style,
    rest: rest
  };
}

function compactObject(obj) {
  var newObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  return typeof Comp === 'function' ? Object.getPrototypeOf(Comp).isReactComponent ? _react2.default.createElement(Comp, params) : Comp(params) : fallback;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXQiLCJzZXQiLCJ0YWtlUmlnaHQiLCJsYXN0Iiwib3JkZXJCeSIsInJhbmdlIiwicmVtb3ZlIiwiY2xvbmUiLCJnZXRGaXJzdERlZmluZWQiLCJzdW0iLCJtYWtlVGVtcGxhdGVDb21wb25lbnQiLCJncm91cEJ5IiwiaXNBcnJheSIsInNwbGl0UHJvcHMiLCJjb21wYWN0T2JqZWN0IiwiaXNTb3J0aW5nRGVzYyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIm9iaiIsInBhdGgiLCJkZWYiLCJwYXRoT2JqIiwibWFrZVBhdGhBcnJheSIsInZhbCIsInJlZHVjZSIsImN1cnJlbnQiLCJwYXRoUGFydCIsImUiLCJ2YWx1ZSIsImtleXMiLCJrZXlQYXJ0IiwiY3Vyc29yIiwic2hpZnQiLCJsZW5ndGgiLCJhcnIiLCJuIiwic3RhcnQiLCJzbGljZSIsImkiLCJwdXNoIiwiZnVuY3MiLCJkaXJzIiwiaW5kZXhLZXkiLCJzb3J0Iiwicm93QSIsInJvd0IiLCJjb21wIiwiZGVzYyIsInNvcnRJbnQiLCJhIiwiYiIsImZpbHRlciIsIm8iLCJyIiwic3BsaWNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwia2V5IiwidG9TdHJpbmciLCJhcmdzIiwiY29tcENsYXNzIiwiZGlzcGxheU5hbWUiLCJFcnJvciIsImNtcCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsInhzIiwicnYiLCJ4IiwicmVzS2V5IiwiQXJyYXkiLCJmbGF0dGVuRGVlcCIsImpvaW4iLCJyZXBsYWNlIiwic3BsaXQiLCJuZXdBcnIiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlc3QiLCJuZXdPYmoiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImQiLCJhc2MiLCJDb21wIiwicGFyYW1zIiwiZmFsbGJhY2siLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImlzUmVhY3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FB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LE1BQWF3QixTQURiLElBRUEsT0FBT2hFLElBQUl3QyxHQUFKLENBQVAsS0FBb0IsV0FIdEIsRUFJRTtBQUNBc0IsYUFBT3RCLEdBQVAsSUFBY3hDLElBQUl3QyxHQUFKLENBQWQ7QUFDRDtBQUNGO0FBQ0QsU0FBT3NCLE1BQVA7QUFDRDs7QUFFRCxTQUFTaEUsYUFBVCxDQUF3Qm1FLENBQXhCLEVBQTJCO0FBQ3pCLFNBQU8sQ0FBQyxFQUFFQSxFQUFFeEMsSUFBRixLQUFXLE1BQVgsSUFBcUJ3QyxFQUFFcEMsSUFBRixLQUFXLElBQWhDLElBQXdDb0MsRUFBRUMsR0FBRixLQUFVLEtBQXBELENBQVI7QUFDRDs7QUFFRCxTQUFTbkUsa0JBQVQsQ0FBNkJvRSxJQUE3QixFQUFpRTtBQUFBLE1BQTlCQyxNQUE4Qix1RUFBckIsRUFBcUI7QUFBQSxNQUFqQkMsUUFBaUIsdUVBQU5GLElBQU07O0FBQy9ELFNBQU8sT0FBT0EsSUFBUCxLQUFnQixVQUFoQixHQUNIRyxPQUFPQyxjQUFQLENBQXNCSixJQUF0QixFQUE0QkssZ0JBQTVCLEdBQ0UsOEJBQUMsSUFBRCxFQUFVSixNQUFWLENBREYsR0FFRUQsS0FBS0MsTUFBTCxDQUhDLEdBSUhDLFFBSko7QUFLRCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgVGVtcGxhdGVDb21wb25lbnQgZnJvbSAnLi9pbmRleCdcbi8vXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgc2V0LFxuICB0YWtlUmlnaHQsXG4gIGxhc3QsXG4gIG9yZGVyQnksXG4gIHJhbmdlLFxuICByZW1vdmUsXG4gIGNsb25lLFxuICBnZXRGaXJzdERlZmluZWQsXG4gIHN1bSxcbiAgbWFrZVRlbXBsYXRlQ29tcG9uZW50LFxuICBncm91cEJ5LFxuICBpc0FycmF5LFxuICBzcGxpdFByb3BzLFxuICBjb21wYWN0T2JqZWN0LFxuICBpc1NvcnRpbmdEZXNjLFxuICBub3JtYWxpemVDb21wb25lbnQsXG59XG5cbmZ1bmN0aW9uIGdldCAob2JqLCBwYXRoLCBkZWYpIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG4gIGNvbnN0IHBhdGhPYmogPSBtYWtlUGF0aEFycmF5KHBhdGgpXG4gIGxldCB2YWxcbiAgdHJ5IHtcbiAgICB2YWwgPSBwYXRoT2JqLnJlZHVjZSgoY3VycmVudCwgcGF0aFBhcnQpID0+IGN1cnJlbnRbcGF0aFBhcnRdLCBvYmopXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyA/IHZhbCA6IGRlZlxufVxuXG5mdW5jdGlvbiBzZXQgKG9iaiA9IHt9LCBwYXRoLCB2YWx1ZSkge1xuICBjb25zdCBrZXlzID0gbWFrZVBhdGhBcnJheShwYXRoKVxuICBsZXQga2V5UGFydFxuICBsZXQgY3Vyc29yID0gb2JqXG4gIHdoaWxlICgoa2V5UGFydCA9IGtleXMuc2hpZnQoKSkgJiYga2V5cy5sZW5ndGgpIHtcbiAgICBpZiAoIWN1cnNvcltrZXlQYXJ0XSkge1xuICAgICAgY3Vyc29yW2tleVBhcnRdID0ge31cbiAgICB9XG4gICAgY3Vyc29yID0gY3Vyc29yW2tleVBhcnRdXG4gIH1cbiAgY3Vyc29yW2tleVBhcnRdID0gdmFsdWVcbiAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiB0YWtlUmlnaHQgKGFyciwgbikge1xuICBjb25zdCBzdGFydCA9IG4gPiBhcnIubGVuZ3RoID8gMCA6IGFyci5sZW5ndGggLSBuXG4gIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQpXG59XG5cbmZ1bmN0aW9uIGxhc3QgKGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXVxufVxuXG5mdW5jdGlvbiByYW5nZSAobikge1xuICBjb25zdCBhcnIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGFyci5wdXNoKG4pXG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBvcmRlckJ5IChhcnIsIGZ1bmNzLCBkaXJzLCBpbmRleEtleSkge1xuICByZXR1cm4gYXJyLnNvcnQoKHJvd0EsIHJvd0IpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb21wID0gZnVuY3NbaV1cbiAgICAgIGNvbnN0IGRlc2MgPSBkaXJzW2ldID09PSBmYWxzZSB8fCBkaXJzW2ldID09PSAnZGVzYydcbiAgICAgIGNvbnN0IHNvcnRJbnQgPSBjb21wKHJvd0EsIHJvd0IpXG4gICAgICBpZiAoc29ydEludCkge1xuICAgICAgICByZXR1cm4gZGVzYyA/IC1zb3J0SW50IDogc29ydEludFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBVc2UgdGhlIHJvdyBpbmRleCBmb3IgdGllIGJyZWFrZXJzXG4gICAgcmV0dXJuIGRpcnNbMF1cbiAgICAgID8gcm93QVtpbmRleEtleV0gLSByb3dCW2luZGV4S2V5XVxuICAgICAgOiByb3dCW2luZGV4S2V5XSAtIHJvd0FbaW5kZXhLZXldXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZSAoYSwgYikge1xuICByZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24gKG8sIGkpIHtcbiAgICB2YXIgciA9IGIobylcbiAgICBpZiAocikge1xuICAgICAgYS5zcGxpY2UoaSwgMSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxufVxuXG5mdW5jdGlvbiBjbG9uZSAoYSkge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoYSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICB9KVxuICAgIClcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3REZWZpbmVkICguLi5hcmdzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgYXJnc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBhcmdzW2ldXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN1bSAoYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEgKyBiXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIG1ha2VUZW1wbGF0ZUNvbXBvbmVudCAoY29tcENsYXNzLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIWRpc3BsYXlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkaXNwbGF5TmFtZSBmb3VuZCBmb3IgdGVtcGxhdGUgY29tcG9uZW50OicsIGNvbXBDbGFzcylcbiAgfVxuICBjb25zdCBjbXAgPSAocHJvcHMpID0+IHtcbiAgICBwcm9wcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3NcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRlbXBsYXRlQ29tcG9uZW50LCBwcm9wcylcbiAgfVxuICBjbXAuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZVxuICByZXR1cm4gY21wXG59XG5cbmZ1bmN0aW9uIGdyb3VwQnkgKHhzLCBrZXkpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZSgocnYsIHgsIGkpID0+IHtcbiAgICBjb25zdCByZXNLZXkgPSB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nID8ga2V5KHgsIGkpIDogeFtrZXldXG4gICAgcnZbcmVzS2V5XSA9IGlzQXJyYXkocnZbcmVzS2V5XSkgPyBydltyZXNLZXldIDogW11cbiAgICBydltyZXNLZXldLnB1c2goeClcbiAgICByZXR1cm4gcnZcbiAgfSwge30pXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKGEpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSlcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBOb24tZXhwb3J0ZWQgSGVscGVyc1xuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIG1ha2VQYXRoQXJyYXkgKG9iaikge1xuICByZXR1cm4gZmxhdHRlbkRlZXAob2JqKVxuICAgIC5qb2luKCcuJylcbiAgICAucmVwbGFjZSgvXFxbL2csICcuJylcbiAgICAucmVwbGFjZSgvXFxdL2csICcnKVxuICAgIC5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5EZWVwIChhcnIsIG5ld0FyciA9IFtdKSB7XG4gIGlmICghaXNBcnJheShhcnIpKSB7XG4gICAgbmV3QXJyLnB1c2goYXJyKVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmbGF0dGVuRGVlcChhcnJbaV0sIG5ld0FycilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0FyclxufVxuXG5mdW5jdGlvbiBzcGxpdFByb3BzICh7IGNsYXNzTmFtZSwgc3R5bGUsIC4uLnJlc3QgfSkge1xuICByZXR1cm4ge1xuICAgIGNsYXNzTmFtZSxcbiAgICBzdHlsZSxcbiAgICByZXN0LFxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhY3RPYmplY3QgKG9iaikge1xuICBjb25zdCBuZXdPYmogPSB7fVxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKFxuICAgICAgb2JqLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgIG9ialtrZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCdcbiAgICApIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld09ialxufVxuXG5mdW5jdGlvbiBpc1NvcnRpbmdEZXNjIChkKSB7XG4gIHJldHVybiAhIShkLnNvcnQgPT09ICdkZXNjJyB8fCBkLmRlc2MgPT09IHRydWUgfHwgZC5hc2MgPT09IGZhbHNlKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKENvbXAsIHBhcmFtcyA9IHt9LCBmYWxsYmFjayA9IENvbXApIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wID09PSAnZnVuY3Rpb24nXG4gICAgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcCkuaXNSZWFjdENvbXBvbmVudFxuICAgICAgPyA8Q29tcCB7Li4ucGFyYW1zfSAvPlxuICAgICAgOiBDb21wKHBhcmFtcylcbiAgICA6IGZhbGxiYWNrXG59XG4iXX0=