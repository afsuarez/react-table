'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateComponent = exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var TemplateComponent = exports.TemplateComponent = function (_React$Component) {
  _inherits(TemplateComponent, _React$Component);

  function TemplateComponent() {
    _classCallCheck(this, TemplateComponent);

    return _possibleConstructorReturn(this, (TemplateComponent.__proto__ || Object.getPrototypeOf(TemplateComponent)).apply(this, arguments));
  }

  _createClass(TemplateComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          compClass = _props.compClass,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['compClass', 'className', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(compClass, className) }, rest),
        children
      );
    }
  }]);

  return TemplateComponent;
}(_react2.default.Component);

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this2 = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this2.getResolvedState = _this2.getResolvedState.bind(_this2);
    _this2.getDataModel = _this2.getDataModel.bind(_this2);
    _this2.getSortedData = _this2.getSortedData.bind(_this2);
    _this2.fireFetchData = _this2.fireFetchData.bind(_this2);
    _this2.getPropOrState = _this2.getPropOrState.bind(_this2);
    _this2.getStateOrProp = _this2.getStateOrProp.bind(_this2);
    _this2.filterData = _this2.filterData.bind(_this2);
    _this2.sortData = _this2.sortData.bind(_this2);
    _this2.getMinRows = _this2.getMinRows.bind(_this2);
    _this2.onPageChange = _this2.onPageChange.bind(_this2);
    _this2.onPageSizeChange = _this2.onPageSizeChange.bind(_this2);
    _this2.sortColumn = _this2.sortColumn.bind(_this2);
    _this2.filterColumn = _this2.filterColumn.bind(_this2);
    _this2.resizeColumnStart = _this2.resizeColumnStart.bind(_this2);
    _this2.resizeColumnEnd = _this2.resizeColumnEnd.bind(_this2);
    _this2.resizeColumnMoving = _this2.resizeColumnMoving.bind(_this2);

    _this2.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this2;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        return [rows.map(function (row, i) {
          index++;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            ;
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth

        // Visual Components

      });var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this3));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this3));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this3));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this3));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: width + 'px',
          maxWidth: maxWidth + 'px'
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this3));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this3));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this3));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this3));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this3.resizeColumnStart(column, e, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this3.resizeColumnStart(column, e, true);
          }
        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            }),
            toggleSort: function toggleSort(e) {
              isSortable && _this3.sortColumn(column, e.shiftKey);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: 'rt-resizable-header-content' },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this3));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this3));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this3));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this3));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this3.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: ++rowIndex,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this3);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this3));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this3));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this3));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var interactionProps = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this3.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                interactionProps = {
                  onClick: onExpanderClick
                  // If pivoted, has no subRows, and does not have a subComponent, do not make expandable
                };if (cellInfo.pivoted) {
                  if (!cellInfo.subRows) {
                    if (!SubComponent) {
                      cellInfo.expandable = false;
                      interactionProps = {};
                    }
                  }
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent,
                _extends({
                  key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: width + 'px',
                    maxWidth: maxWidth + 'px'
                  })
                }, interactionProps, tdProps.rest, columnProps.rest),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this3);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this3));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this3));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this3));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this3);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this3));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this3));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this3));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this3));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this3));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this3.onPageChange,
          onPageSizeChange: _this3.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJUZW1wbGF0ZUNvbXBvbmVudCIsInByb3BzIiwiY29tcENsYXNzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXN0IiwiQ29tcG9uZW50IiwiUmVhY3RUYWJsZSIsImdldFJlc29sdmVkU3RhdGUiLCJiaW5kIiwiZ2V0RGF0YU1vZGVsIiwiZ2V0U29ydGVkRGF0YSIsImZpcmVGZXRjaERhdGEiLCJnZXRQcm9wT3JTdGF0ZSIsImdldFN0YXRlT3JQcm9wIiwiZmlsdGVyRGF0YSIsInNvcnREYXRhIiwiZ2V0TWluUm93cyIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJzb3J0Q29sdW1uIiwiZmlsdGVyQ29sdW1uIiwicmVzaXplQ29sdW1uU3RhcnQiLCJyZXNpemVDb2x1bW5FbmQiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJzdGF0ZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImRlZmF1bHRQYWdlU2l6ZSIsInNvcnRlZCIsImRlZmF1bHRTb3J0ZWQiLCJleHBhbmRlZCIsImRlZmF1bHRFeHBhbmRlZCIsImZpbHRlcmVkIiwiZGVmYXVsdEZpbHRlcmVkIiwicmVzaXplZCIsImRlZmF1bHRSZXNpemVkIiwiY3VycmVudGx5UmVzaXppbmciLCJza2lwTmV4dFNvcnQiLCJyZXNvbHZlZFN0YXRlIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJsb2FkaW5nIiwicGFnZXMiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiVGFibGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93TWluV2lkdGgiLCJzdW0iLCJyZXNpemVkQ29sdW1uIiwiZmluZCIsIngiLCJpZCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGgiLCJtaW5XaWR0aCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJzcGxpdFByb3BzIiwidW5kZWZpbmVkIiwidGhlYWRHcm91cFRyUHJvcHMiLCJtYWtlSGVhZGVyR3JvdXAiLCJjb2x1bW4iLCJyZXNpemVkVmFsdWUiLCJjb2wiLCJmbGV4IiwiY29sdW1ucyIsIm1heFdpZHRoIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiY2xhc3NlcyIsImhlYWRlckNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlclN0eWxlIiwiZmxleFN0eWxlcyIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVycyIsInRoZWFkUHJvcHMiLCJ0aGVhZFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwicmVzaXplZENvbCIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsImlzU29ydGFibGUiLCJkZXNjIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0ckdyb3VwUHJvcHMiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwicm9vdFByb3BzIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsIm1ha2VUYWJsZSIsInBhZ2luYXRpb24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFKQTs7O0FBTU8sSUFBTUEsd0VBQU47O0lBRU1DLGlCLFdBQUFBLGlCOzs7Ozs7Ozs7Ozs2QkFDRjtBQUFBLG1CQUMyQyxLQUFLQyxLQURoRDtBQUFBLFVBQ0RDLFNBREMsVUFDREEsU0FEQztBQUFBLFVBQ1VDLFNBRFYsVUFDVUEsU0FEVjtBQUFBLFVBQ3FCQyxRQURyQixVQUNxQkEsUUFEckI7QUFBQSxVQUNrQ0MsSUFEbEM7O0FBRVAsYUFDRTtBQUFBO0FBQUEsbUJBQUssV0FBVywwQkFBV0gsU0FBWCxFQUFzQkMsU0FBdEIsQ0FBaEIsSUFBc0RFLElBQXREO0FBQ0dEO0FBREgsT0FERjtBQUtEOzs7O0VBUm9DLGdCQUFNRSxTOztJQVd4QkMsVTs7O0FBR25CLHNCQUFhTixLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFdBQUtPLGdCQUFMLEdBQXdCLE9BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixRQUF4QjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsT0FBS0EsWUFBTCxDQUFrQkQsSUFBbEIsUUFBcEI7QUFDQSxXQUFLRSxhQUFMLEdBQXFCLE9BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLFFBQXJCO0FBQ0EsV0FBS0csYUFBTCxHQUFxQixPQUFLQSxhQUFMLENBQW1CSCxJQUFuQixRQUFyQjtBQUNBLFdBQUtJLGNBQUwsR0FBc0IsT0FBS0EsY0FBTCxDQUFvQkosSUFBcEIsUUFBdEI7QUFDQSxXQUFLSyxjQUFMLEdBQXNCLE9BQUtBLGNBQUwsQ0FBb0JMLElBQXBCLFFBQXRCO0FBQ0EsV0FBS00sVUFBTCxHQUFrQixPQUFLQSxVQUFMLENBQWdCTixJQUFoQixRQUFsQjtBQUNBLFdBQUtPLFFBQUwsR0FBZ0IsT0FB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QWo5QnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CeFAsVSxDQUNaMFAsWTtrQkFEWTFQLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJ1xuaW1wb3J0IE1ldGhvZHMgZnJvbSAnLi9tZXRob2RzJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHRQcm9wcydcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wc1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY29tcENsYXNzLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNvbXBDbGFzcywgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCByZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlKClcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgZ2V0UHJvcHMsXG4gICAgICBnZXRUYWJsZVByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyR3JvdXBQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckdyb3VwQ29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBjb25zdCBzdGFydFJvdyA9IHBhZ2VTaXplICogcGFnZVxuICAgIGNvbnN0IGVuZFJvdyA9IHN0YXJ0Um93ICsgcGFnZVNpemVcbiAgICBsZXQgcGFnZVJvd3MgPSBtYW51YWwgPyByZXNvbHZlZERhdGEgOiBzb3J0ZWREYXRhLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cpXG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZ2V0TWluUm93cygpXG4gICAgY29uc3QgcGFkUm93cyA9IF8ucmFuZ2UoTWF0aC5tYXgobWluUm93cyAtIHBhZ2VSb3dzLmxlbmd0aCwgMCkpXG5cbiAgICBjb25zdCBoYXNDb2x1bW5Gb290ZXIgPSBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5Gb290ZXIpXG4gICAgY29uc3QgaGFzRmlsdGVycyA9IGZpbHRlcmFibGUgfHwgYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuZmlsdGVyYWJsZSlcblxuICAgIGNvbnN0IHJlY3Vyc2VSb3dzVmlld0luZGV4ID0gKHJvd3MsIHBhdGggPSBbXSwgaW5kZXggPSAtMSkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgICAgLi4ucm93LFxuICAgICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLmNvbmNhdChbaV0pXG4gICAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgICA7W3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgICByb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLFxuICAgICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgICB9KSxcbiAgICAgICAgaW5kZXgsXG4gICAgICBdXG4gICAgfVxuICAgIDtbcGFnZVJvd3NdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgocGFnZVJvd3MpXG5cbiAgICBjb25zdCBjYW5QcmV2aW91cyA9IHBhZ2UgPiAwXG4gICAgY29uc3QgY2FuTmV4dCA9IHBhZ2UgKyAxIDwgcGFnZXNcblxuICAgIGNvbnN0IHJvd01pbldpZHRoID0gXy5zdW0oXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucy5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZWRDb2x1bW4gPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBkLmlkKSB8fCB7fVxuICAgICAgICByZXR1cm4gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbHVtbi52YWx1ZSwgZC53aWR0aCwgZC5taW5XaWR0aClcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgbGV0IHJvd0luZGV4ID0gLTFcblxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSB7XG4gICAgICAuLi5yZXNvbHZlZFN0YXRlLFxuICAgICAgc3RhcnRSb3csXG4gICAgICBlbmRSb3csXG4gICAgICBwYWdlUm93cyxcbiAgICAgIG1pblJvd3MsXG4gICAgICBwYWRSb3dzLFxuICAgICAgaGFzQ29sdW1uRm9vdGVyLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgICAgcm93TWluV2lkdGgsXG4gICAgfVxuXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZEdyb3VwUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkVmFsdWUgPSBjb2wgPT5cbiAgICAgICAgKHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbC5pZCkgfHwge30pLnZhbHVlXG4gICAgICBjb25zdCBmbGV4ID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChcbiAgICAgICAgICBjb2wgPT4gKGNvbC53aWR0aCB8fCByZXNpemVkVmFsdWUoY29sKSA/IDAgOiBjb2wubWluV2lkdGgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT5cbiAgICAgICAgICBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWluV2lkdGgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT5cbiAgICAgICAgICBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWF4V2lkdGgpXG4gICAgICAgIClcbiAgICAgIClcblxuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRHcm91cFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZsZXhTdHlsZXMgPSB7XG4gICAgICAgIGZsZXg6IGAke2ZsZXh9IDAgYXV0b2AsXG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgIG1heFdpZHRoOiBgJHttYXhXaWR0aH1weGAsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIC4uLmZsZXhTdHlsZXMsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGhcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZVxuICAgICAgICA/ICg8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoY29sdW1uLCBlLCB0cnVlKX1cbiAgICAgICAgICB7Li4ucmVzaXplclByb3BzfVxuICAgICAgICAvPilcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAncnQtcmVzaXphYmxlLWhlYWRlcicsXG4gICAgICAgICAgICBzb3J0ID8gKHNvcnQuZGVzYyA/ICctc29ydC1kZXNjJyA6ICctc29ydC1hc2MnKSA6ICcnLFxuICAgICAgICAgICAgaXNTb3J0YWJsZSAmJiAnLWN1cnNvci1wb2ludGVyJyxcbiAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcbiAgICAgICAgICAgIHBpdm90QnkgJiZcbiAgICAgICAgICAgICAgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSAmJlxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90J1xuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBgJHttYXhXaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgZS5zaGlmdEtleSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J0LXJlc2l6YWJsZS1oZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXNpemVyfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRGaWx0ZXJQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdlUm93ID0gKHJvdywgaSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgICBjb25zdCByb3dJbmZvID0ge1xuICAgICAgICBvcmlnaW5hbDogcm93W29yaWdpbmFsS2V5XSxcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6ICsrcm93SW5kZXgsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyR3JvdXBQcm9wcyA9IGdldFRyR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9IHsuLi50ckdyb3VwUHJvcHN9PlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICAgICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICAgICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgICAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5taW5XaWR0aFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgICAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgY29sdW1uLm1heFdpZHRoXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgICByZXNpemVkLFxuICAgICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25Qcm9wc1xuICAgICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlKG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwgZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY29sdW1uLkNlbGwsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHxcbiAgICAgICAgICAgICAgICAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5FeHBhbmRlciB8fCBFeHBhbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgICAgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcblxuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBNYWtlIGl0IGV4cGFuZGFibGUgYnkgZGVmdWFsdFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IG9uRXhwYW5kZXJDbGljayxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgcGl2b3RlZCwgaGFzIG5vIHN1YlJvd3MsIGFuZCBkb2VzIG5vdCBoYXZlIGEgc3ViQ29tcG9uZW50LCBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgICBpc0JyYW5jaCA9XG4gICAgICAgICAgICAgICAgICByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID5cbiAgICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIGtleT17aTIgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAgICFzaG93ICYmICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90J1xuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBgJHttYXhXaWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICAgIHtyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+XG4gICAgICAgICAgICAgIG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIHtTdWJDb21wb25lbnQgJiZcbiAgICAgICAgICAgICFyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIFN1YkNvbXBvbmVudChyb3dJbmZvKX1cbiAgICAgICAgPC9Uckdyb3VwQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRSb3cgPSAocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoXG4gICAgICAgIGZpbmFsU3RhdGUsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzXG4gICAgICApXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnQga2V5PXtpfSB7Li4udHJHcm91cFByb3BzfT5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGxldCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aFxuICAgICAgKVxuICAgICAgbGV0IGZsZXggPSB3aWR0aFxuICAgICAgbGV0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoXG4gICAgICApXG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICdoaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZm9vdENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dEZvb3RQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRGb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGhcbiAgICAgIClcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLnRGb290VGRQcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi5jb2x1bW5Gb290ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5Gb290ZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2luYXRpb25Db21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzb2x2ZWRTdGF0ZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgY2FuUHJldmlvdXM9e2NhblByZXZpb3VzfVxuICAgICAgICAgIGNhbk5leHQ9e2Nhbk5leHR9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cbiAgICAgICAgICBvblBhZ2VTaXplQ2hhbmdlPXt0aGlzLm9uUGFnZVNpemVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnBhZ2luYXRpb25Qcm9wcy5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0YWJsZVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IHJlc2l6ZXJQcm9wcyA9IGdldFJlc2l6ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIGNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdSZWFjdFRhYmxlJywgY2xhc3NOYW1lLCByb290UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAuLi5yb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Ub3BcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tdG9wJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nID8gJ3J0LXJlc2l6aW5nJyA6ICcnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgIHtwYWRSb3dzLm1hcChtYWtlUGFkUm93KX1cbiAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICB7aGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGx9XG4gICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b21cbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tYm90dG9tJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXBhZ2VSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PlxuICAgICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9XG4gICAgICAgICAgICA8L05vRGF0YUNvbXBvbmVudD59XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XG4gICAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=