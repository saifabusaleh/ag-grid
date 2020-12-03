import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ComponentUtil, Grid, Promise } from "ag-grid-community-charts";
import { AngularFrameworkOverrides } from "./angularFrameworkOverrides";
import { AngularFrameworkComponentWrapper } from "./angularFrameworkComponentWrapper";
import { AgGridChartsColumn } from "./ag-grid-charts-column.component";
var AgGridChartsAngular = /** @class */ (function () {
    function AgGridChartsAngular(elementDef, viewContainerRef, angularFrameworkOverrides, frameworkComponentWrapper, _componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.angularFrameworkOverrides = angularFrameworkOverrides;
        this.frameworkComponentWrapper = frameworkComponentWrapper;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._initialised = false;
        this._destroyed = false;
        // in order to ensure firing of gridReady is deterministic
        this._fullyReady = Promise.resolve(true);
        // @START@
        this.alignedGrids = undefined;
        this.rowData = undefined;
        this.columnDefs = undefined;
        this.excelStyles = undefined;
        this.pinnedTopRowData = undefined;
        this.pinnedBottomRowData = undefined;
        this.chartThemes = undefined;
        this.components = undefined;
        this.frameworkComponents = undefined;
        this.rowStyle = undefined;
        this.context = undefined;
        this.autoGroupColumnDef = undefined;
        this.localeText = undefined;
        this.icons = undefined;
        this.datasource = undefined;
        this.serverSideDatasource = undefined;
        this.viewportDatasource = undefined;
        this.groupRowRendererParams = undefined;
        this.aggFuncs = undefined;
        this.fullWidthCellRendererParams = undefined;
        this.defaultColGroupDef = undefined;
        this.defaultColDef = undefined;
        this.defaultExportParams = undefined;
        this.columnTypes = undefined;
        this.rowClassRules = undefined;
        this.detailGridOptions = undefined;
        this.detailCellRendererParams = undefined;
        this.loadingCellRendererParams = undefined;
        this.loadingOverlayComponentParams = undefined;
        this.noRowsOverlayComponentParams = undefined;
        this.popupParent = undefined;
        this.colResizeDefault = undefined;
        this.reduxStore = undefined;
        this.statusBar = undefined;
        this.sideBar = undefined;
        this.chartThemeOverrides = undefined;
        this.customChartThemes = undefined;
        this.sortingOrder = undefined;
        this.rowClass = undefined;
        this.rowSelection = undefined;
        this.overlayLoadingTemplate = undefined;
        this.overlayNoRowsTemplate = undefined;
        this.quickFilterText = undefined;
        this.rowModelType = undefined;
        this.editType = undefined;
        this.domLayout = undefined;
        this.clipboardDeliminator = undefined;
        this.rowGroupPanelShow = undefined;
        this.multiSortKey = undefined;
        this.pivotColumnGroupTotals = undefined;
        this.pivotRowTotals = undefined;
        this.pivotPanelShow = undefined;
        this.fillHandleDirection = undefined;
        this.rowHeight = undefined;
        this.detailRowHeight = undefined;
        this.rowBuffer = undefined;
        this.colWidth = undefined;
        this.headerHeight = undefined;
        this.groupHeaderHeight = undefined;
        this.floatingFiltersHeight = undefined;
        this.pivotHeaderHeight = undefined;
        this.pivotGroupHeaderHeight = undefined;
        this.groupDefaultExpanded = undefined;
        this.minColWidth = undefined;
        this.maxColWidth = undefined;
        this.viewportRowModelPageSize = undefined;
        this.viewportRowModelBufferSize = undefined;
        this.autoSizePadding = undefined;
        this.maxBlocksInCache = undefined;
        this.maxConcurrentDatasourceRequests = undefined;
        this.tooltipShowDelay = undefined;
        this.cacheOverflowSize = undefined;
        this.paginationPageSize = undefined;
        this.cacheBlockSize = undefined;
        this.infiniteInitialRowCount = undefined;
        this.scrollbarWidth = undefined;
        this.batchUpdateWaitMillis = undefined;
        this.asyncTransactionWaitMillis = undefined;
        this.blockLoadDebounceMillis = undefined;
        this.keepDetailRowsCount = undefined;
        this.undoRedoCellEditingLimit = undefined;
        this.cellFlashDelay = undefined;
        this.cellFadeDelay = undefined;
        this.localeTextFunc = undefined;
        this.groupRowInnerRenderer = undefined;
        this.groupRowInnerRendererFramework = undefined;
        this.dateComponent = undefined;
        this.dateComponentFramework = undefined;
        this.groupRowRenderer = undefined;
        this.groupRowRendererFramework = undefined;
        this.isExternalFilterPresent = undefined;
        this.getRowHeight = undefined;
        this.doesExternalFilterPass = undefined;
        this.getRowClass = undefined;
        this.getRowStyle = undefined;
        this.getRowClassRules = undefined;
        this.traverseNode = undefined;
        this.getContextMenuItems = undefined;
        this.getMainMenuItems = undefined;
        this.processRowPostCreate = undefined;
        this.processCellForClipboard = undefined;
        this.groupRowAggNodes = undefined;
        this.getRowNodeId = undefined;
        this.isFullWidthCell = undefined;
        this.fullWidthCellRenderer = undefined;
        this.fullWidthCellRendererFramework = undefined;
        this.processSecondaryColDef = undefined;
        this.processSecondaryColGroupDef = undefined;
        this.getBusinessKeyForNode = undefined;
        this.sendToClipboard = undefined;
        this.navigateToNextHeader = undefined;
        this.tabToNextHeader = undefined;
        this.navigateToNextCell = undefined;
        this.tabToNextCell = undefined;
        this.getDetailRowData = undefined;
        this.processCellFromClipboard = undefined;
        this.getDocument = undefined;
        this.postProcessPopup = undefined;
        this.getChildCount = undefined;
        this.getDataPath = undefined;
        this.loadingCellRenderer = undefined;
        this.loadingCellRendererFramework = undefined;
        this.loadingOverlayComponent = undefined;
        this.loadingOverlayComponentFramework = undefined;
        this.noRowsOverlayComponent = undefined;
        this.noRowsOverlayComponentFramework = undefined;
        this.detailCellRenderer = undefined;
        this.detailCellRendererFramework = undefined;
        this.defaultGroupSortComparator = undefined;
        this.isRowMaster = undefined;
        this.isRowSelectable = undefined;
        this.postSort = undefined;
        this.processHeaderForClipboard = undefined;
        this.paginationNumberFormatter = undefined;
        this.processDataFromClipboard = undefined;
        this.getServerSideGroupKey = undefined;
        this.isServerSideGroup = undefined;
        this.suppressKeyboardEvent = undefined;
        this.createChartContainer = undefined;
        this.processChartOptions = undefined;
        this.getChartToolbarItems = undefined;
        this.fillOperation = undefined;
        this.suppressMakeColumnVisibleAfterUnGroup = undefined;
        this.suppressRowClickSelection = undefined;
        this.suppressCellSelection = undefined;
        this.suppressHorizontalScroll = undefined;
        this.alwaysShowVerticalScroll = undefined;
        this.debug = undefined;
        this.enableBrowserTooltips = undefined;
        this.enableCellExpressions = undefined;
        this.angularCompileRows = undefined;
        this.angularCompileFilters = undefined;
        this.groupSuppressAutoColumn = undefined;
        this.groupSelectsChildren = undefined;
        this.groupIncludeFooter = undefined;
        this.groupIncludeTotalFooter = undefined;
        this.groupUseEntireRow = undefined;
        this.groupSuppressBlankHeader = undefined;
        this.suppressMenuHide = undefined;
        this.suppressRowDeselection = undefined;
        this.unSortIcon = undefined;
        this.suppressMultiSort = undefined;
        this.singleClickEdit = undefined;
        this.suppressLoadingOverlay = undefined;
        this.suppressNoRowsOverlay = undefined;
        this.suppressAutoSize = undefined;
        this.skipHeaderOnAutoSize = undefined;
        this.suppressParentsInRowNodes = undefined;
        this.suppressColumnMoveAnimation = undefined;
        this.suppressMovableColumns = undefined;
        this.suppressFieldDotNotation = undefined;
        this.enableRangeSelection = undefined;
        this.enableRangeHandle = undefined;
        this.enableFillHandle = undefined;
        this.suppressClearOnFillReduction = undefined;
        this.deltaSort = undefined;
        this.suppressTouch = undefined;
        this.suppressAsyncEvents = undefined;
        this.allowContextMenuWithControlKey = undefined;
        this.suppressContextMenu = undefined;
        this.rememberGroupStateWhenNewData = undefined;
        this.enableCellChangeFlash = undefined;
        this.suppressDragLeaveHidesColumns = undefined;
        this.suppressMiddleClickScrolls = undefined;
        this.suppressPreventDefaultOnMouseWheel = undefined;
        this.suppressCopyRowsToClipboard = undefined;
        this.copyHeadersToClipboard = undefined;
        this.pivotMode = undefined;
        this.suppressAggFuncInHeader = undefined;
        this.suppressColumnVirtualisation = undefined;
        this.suppressAggAtRootLevel = undefined;
        this.suppressFocusAfterRefresh = undefined;
        this.functionsPassive = undefined;
        this.functionsReadOnly = undefined;
        this.animateRows = undefined;
        this.groupSelectsFiltered = undefined;
        this.groupRemoveSingleChildren = undefined;
        this.groupRemoveLowestSingleChildren = undefined;
        this.enableRtl = undefined;
        this.suppressClickEdit = undefined;
        this.rowDragManaged = undefined;
        this.suppressRowDrag = undefined;
        this.suppressMoveWhenRowDragging = undefined;
        this.enableMultiRowDragging = undefined;
        this.enableGroupEdit = undefined;
        this.embedFullWidthRows = undefined;
        this.deprecatedEmbedFullWidthRows = undefined;
        this.suppressPaginationPanel = undefined;
        this.floatingFilter = undefined;
        this.groupHideOpenParents = undefined;
        this.groupMultiAutoColumn = undefined;
        this.pagination = undefined;
        this.stopEditingWhenGridLosesFocus = undefined;
        this.paginationAutoPageSize = undefined;
        this.suppressScrollOnNewData = undefined;
        this.purgeClosedRowNodes = undefined;
        this.cacheQuickFilter = undefined;
        this.deltaRowDataMode = undefined;
        this.ensureDomOrder = undefined;
        this.accentedSort = undefined;
        this.suppressChangeDetection = undefined;
        this.valueCache = undefined;
        this.valueCacheNeverExpires = undefined;
        this.aggregateOnlyChangedColumns = undefined;
        this.suppressAnimationFrame = undefined;
        this.suppressExcelExport = undefined;
        this.suppressCsvExport = undefined;
        this.treeData = undefined;
        this.masterDetail = undefined;
        this.suppressMultiRangeSelection = undefined;
        this.enterMovesDownAfterEdit = undefined;
        this.enterMovesDown = undefined;
        this.suppressPropertyNamesCheck = undefined;
        this.rowMultiSelectWithClick = undefined;
        this.suppressEnterpriseResetOnNewColumns = undefined;
        this.enableOldSetFilterModel = undefined;
        this.suppressRowHoverHighlight = undefined;
        this.suppressRowTransform = undefined;
        this.suppressClipboardPaste = undefined;
        this.suppressLastEmptyLineOnPaste = undefined;
        this.serverSideSortingAlwaysResets = undefined;
        this.reactNext = undefined;
        this.suppressSetColumnStateEvents = undefined;
        this.suppressColumnStateEvents = undefined;
        this.enableCharts = undefined;
        this.deltaColumnMode = undefined;
        this.suppressMaintainUnsortedOrder = undefined;
        this.enableCellTextSelection = undefined;
        this.suppressBrowserResizeObserver = undefined;
        this.suppressMaxRenderedRowRestriction = undefined;
        this.excludeChildrenWhenTreeDataFiltering = undefined;
        this.tooltipMouseTrack = undefined;
        this.keepDetailRows = undefined;
        this.paginateChildRows = undefined;
        this.preventDefaultOnContextMenu = undefined;
        this.undoRedoCellEditing = undefined;
        this.allowDragFromColumnsToolPanel = undefined;
        this.immutableData = undefined;
        this.immutableColumns = undefined;
        this.pivotSuppressAutoColumn = undefined;
        this.suppressExpandablePivotGroups = undefined;
        this.applyColumnDefOrder = undefined;
        this.debounceVerticalScrollbar = undefined;
        this.detailRowAutoHeight = undefined;
        this.columnEverythingChanged = new EventEmitter();
        this.newColumnsLoaded = new EventEmitter();
        this.columnPivotModeChanged = new EventEmitter();
        this.columnRowGroupChanged = new EventEmitter();
        this.expandOrCollapseAll = new EventEmitter();
        this.columnPivotChanged = new EventEmitter();
        this.gridColumnsChanged = new EventEmitter();
        this.columnValueChanged = new EventEmitter();
        this.columnMoved = new EventEmitter();
        this.columnVisible = new EventEmitter();
        this.columnPinned = new EventEmitter();
        this.columnGroupOpened = new EventEmitter();
        this.columnResized = new EventEmitter();
        this.displayedColumnsChanged = new EventEmitter();
        this.virtualColumnsChanged = new EventEmitter();
        this.rowGroupOpened = new EventEmitter();
        this.rowDataChanged = new EventEmitter();
        this.rowDataUpdated = new EventEmitter();
        this.pinnedRowDataChanged = new EventEmitter();
        this.rangeSelectionChanged = new EventEmitter();
        this.chartCreated = new EventEmitter();
        this.chartRangeSelectionChanged = new EventEmitter();
        this.chartOptionsChanged = new EventEmitter();
        this.chartDestroyed = new EventEmitter();
        this.toolPanelVisibleChanged = new EventEmitter();
        this.modelUpdated = new EventEmitter();
        this.pasteStart = new EventEmitter();
        this.pasteEnd = new EventEmitter();
        this.fillStart = new EventEmitter();
        this.fillEnd = new EventEmitter();
        this.cellClicked = new EventEmitter();
        this.cellDoubleClicked = new EventEmitter();
        this.cellMouseDown = new EventEmitter();
        this.cellContextMenu = new EventEmitter();
        this.cellValueChanged = new EventEmitter();
        this.rowValueChanged = new EventEmitter();
        this.cellFocused = new EventEmitter();
        this.rowSelected = new EventEmitter();
        this.selectionChanged = new EventEmitter();
        this.cellKeyDown = new EventEmitter();
        this.cellKeyPress = new EventEmitter();
        this.cellMouseOver = new EventEmitter();
        this.cellMouseOut = new EventEmitter();
        this.filterChanged = new EventEmitter();
        this.filterModified = new EventEmitter();
        this.filterOpened = new EventEmitter();
        this.sortChanged = new EventEmitter();
        this.virtualRowRemoved = new EventEmitter();
        this.rowClicked = new EventEmitter();
        this.rowDoubleClicked = new EventEmitter();
        this.gridReady = new EventEmitter();
        this.gridSizeChanged = new EventEmitter();
        this.viewportChanged = new EventEmitter();
        this.scrollbarWidthChanged = new EventEmitter();
        this.firstDataRendered = new EventEmitter();
        this.dragStarted = new EventEmitter();
        this.dragStopped = new EventEmitter();
        this.checkboxChanged = new EventEmitter();
        this.rowEditingStarted = new EventEmitter();
        this.rowEditingStopped = new EventEmitter();
        this.cellEditingStarted = new EventEmitter();
        this.cellEditingStopped = new EventEmitter();
        this.bodyScroll = new EventEmitter();
        this.animationQueueEmpty = new EventEmitter();
        this.heightScaleChanged = new EventEmitter();
        this.paginationChanged = new EventEmitter();
        this.componentStateChanged = new EventEmitter();
        this.bodyHeightChanged = new EventEmitter();
        this.displayedColumnsWidthChanged = new EventEmitter();
        this.scrollVisibilityChanged = new EventEmitter();
        this.columnHoverChanged = new EventEmitter();
        this.flashCells = new EventEmitter();
        this.paginationPixelOffsetChanged = new EventEmitter();
        this.rowDragEnter = new EventEmitter();
        this.rowDragMove = new EventEmitter();
        this.rowDragLeave = new EventEmitter();
        this.rowDragEnd = new EventEmitter();
        this.popupToFront = new EventEmitter();
        this.columnRowGroupChangeRequest = new EventEmitter();
        this.columnPivotChangeRequest = new EventEmitter();
        this.columnValueChangeRequest = new EventEmitter();
        this.columnAggFuncChangeRequest = new EventEmitter();
        this.keyboardFocus = new EventEmitter();
        this.mouseFocus = new EventEmitter();
        this._nativeElement = elementDef.nativeElement;
        this.frameworkComponentWrapper.setViewContainerRef(this.viewContainerRef);
        this.frameworkComponentWrapper.setComponentFactoryResolver(this._componentFactoryResolver);
    }
    AgGridChartsAngular.prototype.ngAfterViewInit = function () {
        this.gridOptions = ComponentUtil.copyAttributesToGridOptions(this.gridOptions, this, true);
        this.gridParams = {
            globalEventListener: this.globalEventListener.bind(this),
            frameworkOverrides: this.angularFrameworkOverrides,
            providedBeanInstances: {
                frameworkComponentWrapper: this.frameworkComponentWrapper
            },
            modules: (this.modules || [])
        };
        if (this.columns && this.columns.length > 0) {
            this.gridOptions.columnDefs = this.columns
                .map(function (column) {
                return column.toColDef();
            });
        }
        new Grid(this._nativeElement, this.gridOptions, this.gridParams);
        if (this.gridOptions.api) {
            this.api = this.gridOptions.api;
        }
        if (this.gridOptions.columnApi) {
            this.columnApi = this.gridOptions.columnApi;
        }
        this._initialised = true;
        // sometimes, especially in large client apps gridReady can fire before ngAfterViewInit
        // this ties these together so that gridReady will always fire after agGridAngular's ngAfterViewInit
        // the actual containing component's ngAfterViewInit will fire just after agGridAngular's
        this._fullyReady.resolveNow(null, function (resolve) { return resolve; });
    };
    AgGridChartsAngular.prototype.ngOnChanges = function (changes) {
        if (this._initialised) {
            ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
        }
    };
    AgGridChartsAngular.prototype.ngOnDestroy = function () {
        if (this._initialised) {
            // need to do this before the destroy, so we know not to emit any events
            // while tearing down the grid.
            this._destroyed = true;
            if (this.api) {
                this.api.destroy();
            }
        }
    };
    AgGridChartsAngular.prototype.globalEventListener = function (eventType, event) {
        // if we are tearing down, don't emit angular events, as this causes
        // problems with the angular router
        if (this._destroyed) {
            return;
        }
        // generically look up the eventType
        var emitter = this[eventType];
        if (emitter) {
            if (eventType === 'gridReady') {
                // if the user is listening for gridReady, wait for ngAfterViewInit to fire first, then emit the
                // gridReady event
                this._fullyReady.then((function (result) {
                    emitter.emit(event);
                }));
            }
            else {
                emitter.emit(event);
            }
        }
        else {
            console.log('ag-Grid-angular: could not find EventEmitter: ' + eventType);
        }
    };
    AgGridChartsAngular.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: AngularFrameworkOverrides },
        { type: AngularFrameworkComponentWrapper },
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        ContentChildren(AgGridChartsColumn),
        __metadata("design:type", QueryList)
    ], AgGridChartsAngular.prototype, "columns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "gridOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridChartsAngular.prototype, "modules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "alignedGrids", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "columnDefs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "excelStyles", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pinnedTopRowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pinnedBottomRowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "chartThemes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "components", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "frameworkComponents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "context", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "autoGroupColumnDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "localeText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "icons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "datasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "serverSideDatasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "viewportDatasource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRowRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "aggFuncs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "fullWidthCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "defaultColGroupDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "defaultColDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "defaultExportParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "columnTypes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowClassRules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "detailGridOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "detailCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "loadingCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "loadingOverlayComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "noRowsOverlayComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "popupParent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "colResizeDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "reduxStore", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "statusBar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "sideBar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "chartThemeOverrides", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "customChartThemes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "sortingOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "overlayLoadingTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "overlayNoRowsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "quickFilterText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowModelType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "editType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "domLayout", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "clipboardDeliminator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowGroupPanelShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "multiSortKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotColumnGroupTotals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotRowTotals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotPanelShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "fillHandleDirection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "detailRowHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowBuffer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "colWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "headerHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "floatingFiltersHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotGroupHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupDefaultExpanded", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "minColWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "maxColWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "viewportRowModelPageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "viewportRowModelBufferSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "autoSizePadding", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "maxBlocksInCache", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "maxConcurrentDatasourceRequests", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "tooltipShowDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "cacheOverflowSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "paginationPageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "cacheBlockSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "infiniteInitialRowCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "scrollbarWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "batchUpdateWaitMillis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "asyncTransactionWaitMillis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "blockLoadDebounceMillis", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "keepDetailRowsCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "undoRedoCellEditingLimit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "cellFlashDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "cellFadeDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "localeTextFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRowInnerRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRowInnerRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "dateComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "dateComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRowRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRowRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "isExternalFilterPresent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getRowHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "doesExternalFilterPass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getRowClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getRowStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getRowClassRules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "traverseNode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getContextMenuItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getMainMenuItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processRowPostCreate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processCellForClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRowAggNodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getRowNodeId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "isFullWidthCell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "fullWidthCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "fullWidthCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processSecondaryColDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processSecondaryColGroupDef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getBusinessKeyForNode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "sendToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "navigateToNextHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "tabToNextHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "navigateToNextCell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "tabToNextCell", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getDetailRowData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processCellFromClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getDocument", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "postProcessPopup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getChildCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getDataPath", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "loadingCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "loadingCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "loadingOverlayComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "loadingOverlayComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "noRowsOverlayComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "noRowsOverlayComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "detailCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "detailCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "defaultGroupSortComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "isRowMaster", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "isRowSelectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "postSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processHeaderForClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "paginationNumberFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processDataFromClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getServerSideGroupKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "isServerSideGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "createChartContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "processChartOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "getChartToolbarItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "fillOperation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMakeColumnVisibleAfterUnGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressRowClickSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressCellSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressHorizontalScroll", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "alwaysShowVerticalScroll", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "debug", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableBrowserTooltips", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableCellExpressions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "angularCompileRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "angularCompileFilters", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupSuppressAutoColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupSelectsChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupIncludeFooter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupIncludeTotalFooter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupUseEntireRow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupSuppressBlankHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMenuHide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressRowDeselection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "unSortIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMultiSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "singleClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressLoadingOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressNoRowsOverlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressAutoSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "skipHeaderOnAutoSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressParentsInRowNodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressColumnMoveAnimation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMovableColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressFieldDotNotation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableRangeSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableRangeHandle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableFillHandle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressClearOnFillReduction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "deltaSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressTouch", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressAsyncEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "allowContextMenuWithControlKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rememberGroupStateWhenNewData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableCellChangeFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressDragLeaveHidesColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMiddleClickScrolls", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressPreventDefaultOnMouseWheel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressCopyRowsToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "copyHeadersToClipboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressAggFuncInHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressColumnVirtualisation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressAggAtRootLevel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressFocusAfterRefresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "functionsPassive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "functionsReadOnly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "animateRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupSelectsFiltered", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRemoveSingleChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupRemoveLowestSingleChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableRtl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowDragManaged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressRowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMoveWhenRowDragging", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableMultiRowDragging", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableGroupEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "embedFullWidthRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "deprecatedEmbedFullWidthRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressPaginationPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "floatingFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupHideOpenParents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "groupMultiAutoColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pagination", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "stopEditingWhenGridLosesFocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "paginationAutoPageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressScrollOnNewData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "purgeClosedRowNodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "cacheQuickFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "deltaRowDataMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "ensureDomOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "accentedSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressChangeDetection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "valueCache", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "valueCacheNeverExpires", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "aggregateOnlyChangedColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressAnimationFrame", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressExcelExport", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressCsvExport", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "treeData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "masterDetail", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMultiRangeSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enterMovesDownAfterEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enterMovesDown", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressPropertyNamesCheck", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "rowMultiSelectWithClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressEnterpriseResetOnNewColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableOldSetFilterModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressRowHoverHighlight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressRowTransform", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressClipboardPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressLastEmptyLineOnPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "serverSideSortingAlwaysResets", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "reactNext", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressSetColumnStateEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressColumnStateEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableCharts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "deltaColumnMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMaintainUnsortedOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "enableCellTextSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressBrowserResizeObserver", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressMaxRenderedRowRestriction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "excludeChildrenWhenTreeDataFiltering", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "tooltipMouseTrack", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "keepDetailRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "paginateChildRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "preventDefaultOnContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "undoRedoCellEditing", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "allowDragFromColumnsToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "immutableData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "immutableColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "pivotSuppressAutoColumn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "suppressExpandablePivotGroups", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "applyColumnDefOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "debounceVerticalScrollbar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsAngular.prototype, "detailRowAutoHeight", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnEverythingChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "newColumnsLoaded", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnPivotModeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnRowGroupChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "expandOrCollapseAll", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnPivotChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "gridColumnsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnMoved", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnVisible", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnPinned", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnGroupOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnResized", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "displayedColumnsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "virtualColumnsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowGroupOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDataChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDataUpdated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "pinnedRowDataChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rangeSelectionChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "chartCreated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "chartRangeSelectionChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "chartOptionsChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "chartDestroyed", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "toolPanelVisibleChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "modelUpdated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "pasteStart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "pasteEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "fillStart", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "fillEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellDoubleClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellMouseDown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellContextMenu", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellFocused", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowSelected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "selectionChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellKeyDown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellKeyPress", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellMouseOver", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellMouseOut", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "filterChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "filterModified", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "filterOpened", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "sortChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "virtualRowRemoved", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDoubleClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "gridReady", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "gridSizeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "viewportChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "scrollbarWidthChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "firstDataRendered", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "dragStarted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "dragStopped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "checkboxChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowEditingStarted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowEditingStopped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellEditingStarted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "cellEditingStopped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "bodyScroll", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "animationQueueEmpty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "heightScaleChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "paginationChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "componentStateChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "bodyHeightChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "displayedColumnsWidthChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "scrollVisibilityChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnHoverChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "flashCells", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "paginationPixelOffsetChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDragEnter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDragMove", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDragLeave", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "rowDragEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "popupToFront", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnRowGroupChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnPivotChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnValueChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "columnAggFuncChangeRequest", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "keyboardFocus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AgGridChartsAngular.prototype, "mouseFocus", void 0);
    AgGridChartsAngular = __decorate([
        Component({
            selector: 'ag-grid-charts-angular',
            template: '',
            providers: [
                AngularFrameworkOverrides,
                AngularFrameworkComponentWrapper
            ],
            // tell angular we don't want view encapsulation, we don't want a shadow root
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ElementRef,
            ViewContainerRef,
            AngularFrameworkOverrides,
            AngularFrameworkComponentWrapper,
            ComponentFactoryResolver])
    ], AgGridChartsAngular);
    return AgGridChartsAngular;
}());
export { AgGridChartsAngular };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZy1ncmlkLWFuZ3VsYXItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2FnLWdyaWQtYW5ndWxhci1jaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsYUFBYSxFQUNiLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBR0gsYUFBYSxFQUNiLElBQUksRUFLSixPQUFPLEVBRVYsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVl2RTtJQWtCSSw2QkFBWSxVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMseUJBQW9ELEVBQ3BELHlCQUEyRCxFQUMzRCx5QkFBbUQ7UUFIbkQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBa0M7UUFDM0QsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWxCdkQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUkzQiwwREFBMEQ7UUFDbEQsZ0JBQVcsR0FBcUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQW9HOUQsVUFBVTtRQUNNLGlCQUFZLEdBQVMsU0FBUyxDQUFDO1FBQy9CLFlBQU8s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NERBQWdDO0lBQ2hFO1FBQVQsTUFBTSxFQUFFO2tDQUFzQixZQUFZOzZEQUFnQztJQUNqRTtRQUFULE1BQU0sRUFBRTtrQ0FBb0IsWUFBWTsyREFBZ0M7SUFDL0Q7UUFBVCxNQUFNLEVBQUU7a0NBQXNCLFlBQVk7NkRBQWdDO0lBQ2pFO1FBQVQsTUFBTSxFQUFFO2tDQUFxQyxZQUFZOzRFQUFnQztJQUNoRjtRQUFULE1BQU0sRUFBRTtrQ0FBa0MsWUFBWTt5RUFBZ0M7SUFDN0U7UUFBVCxNQUFNLEVBQUU7a0NBQWtDLFlBQVk7eUVBQWdDO0lBQzdFO1FBQVQsTUFBTSxFQUFFO2tDQUFvQyxZQUFZOzJFQUFnQztJQUMvRTtRQUFULE1BQU0sRUFBRTtrQ0FBdUIsWUFBWTs4REFBZ0M7SUFDbEU7UUFBVCxNQUFNLEVBQUU7a0NBQW9CLFlBQVk7MkRBQWdDO0lBM2NoRSxtQkFBbUI7UUFWL0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRTtnQkFDUCx5QkFBeUI7Z0JBQ3pCLGdDQUFnQzthQUNuQztZQUNELDZFQUE2RTtZQUM3RSxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDO3lDQW1CMEIsVUFBVTtZQUNKLGdCQUFnQjtZQUNQLHlCQUF5QjtZQUN6QixnQ0FBZ0M7WUFDaEMsd0JBQXdCO09BdEJ0RCxtQkFBbUIsQ0E2Yy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdjRCxJQTZjQztTQTdjWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29sRGVmLFxyXG4gICAgQ29sdW1uQXBpLFxyXG4gICAgQ29tcG9uZW50VXRpbCxcclxuICAgIEdyaWQsXHJcbiAgICBHcmlkQXBpLFxyXG4gICAgR3JpZE9wdGlvbnMsXHJcbiAgICBHcmlkUGFyYW1zLFxyXG4gICAgTW9kdWxlLFxyXG4gICAgUHJvbWlzZSxcclxuICAgIF9cclxufSBmcm9tIFwiYWctZ3JpZC1jb21tdW5pdHktY2hhcnRzXCI7XHJcblxyXG5pbXBvcnQgeyBBbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzIH0gZnJvbSBcIi4vYW5ndWxhckZyYW1ld29ya092ZXJyaWRlc1wiO1xyXG5pbXBvcnQgeyBBbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlciB9IGZyb20gXCIuL2FuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyXCI7XHJcbmltcG9ydCB7IEFnR3JpZENoYXJ0c0NvbHVtbiB9IGZyb20gXCIuL2FnLWdyaWQtY2hhcnRzLWNvbHVtbi5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZy1ncmlkLWNoYXJ0cy1hbmd1bGFyJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMsXHJcbiAgICAgICAgQW5ndWxhckZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXJcclxuICAgIF0sXHJcbiAgICAvLyB0ZWxsIGFuZ3VsYXIgd2UgZG9uJ3Qgd2FudCB2aWV3IGVuY2Fwc3VsYXRpb24sIHdlIGRvbid0IHdhbnQgYSBzaGFkb3cgcm9vdFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdHcmlkQ2hhcnRzQW5ndWxhciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgLy8gbm90IGludGVuZGVkIGZvciB1c2VyIHRvIGludGVyYWN0IHdpdGguIHNvIHB1dHRpbmcgXyBpbiBzbyBpZiB1c2VyIGdldHMgcmVmZXJlbmNlXHJcbiAgICAvLyB0byB0aGlzIG9iamVjdCwgdGhleSBraW5kJ2Ega25vdyBpdCdzIG5vdCBwYXJ0IG9mIHRoZSBhZ3JlZWQgaW50ZXJmYWNlXHJcbiAgICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBhbnk7XHJcbiAgICBwcml2YXRlIF9pbml0aWFsaXNlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBncmlkUGFyYW1zOiBHcmlkUGFyYW1zO1xyXG5cclxuICAgIC8vIGluIG9yZGVyIHRvIGVuc3VyZSBmaXJpbmcgb2YgZ3JpZFJlYWR5IGlzIGRldGVybWluaXN0aWNcclxuICAgIHByaXZhdGUgX2Z1bGx5UmVhZHk6IFByb21pc2U8Ym9vbGVhbj4gPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcblxyXG4gICAgLy8gbWFraW5nIHRoZXNlIHB1YmxpYywgc28gdGhleSBhcmUgYWNjZXNzaWJsZSB0byBwZW9wbGUgdXNpbmcgdGhlIG5nMiBjb21wb25lbnQgcmVmZXJlbmNlc1xyXG4gICAgcHVibGljIGFwaTogR3JpZEFwaTtcclxuICAgIHB1YmxpYyBjb2x1bW5BcGk6IENvbHVtbkFwaTtcclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKEFnR3JpZENoYXJ0c0NvbHVtbikgcHVibGljIGNvbHVtbnM6IFF1ZXJ5TGlzdDxBZ0dyaWRDaGFydHNDb2x1bW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnREZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgYW5ndWxhckZyYW1ld29ya092ZXJyaWRlczogQW5ndWxhckZyYW1ld29ya092ZXJyaWRlcyxcclxuICAgICAgICBwcml2YXRlIGZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXI6IEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnREZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyLnNldFZpZXdDb250YWluZXJSZWYodGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgICB0aGlzLmZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIuc2V0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMgPSBDb21wb25lbnRVdGlsLmNvcHlBdHRyaWJ1dGVzVG9HcmlkT3B0aW9ucyh0aGlzLmdyaWRPcHRpb25zLCB0aGlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBnbG9iYWxFdmVudExpc3RlbmVyOiB0aGlzLmdsb2JhbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZnJhbWV3b3JrT3ZlcnJpZGVzOiB0aGlzLmFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMsXHJcbiAgICAgICAgICAgIHByb3ZpZGVkQmVhbkluc3RhbmNlczoge1xyXG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlcjogdGhpcy5mcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZHVsZXM6ICh0aGlzLm1vZHVsZXMgfHwgW10pIGFzIGFueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnMgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkT3B0aW9ucy5jb2x1bW5EZWZzID0gdGhpcy5jb2x1bW5zXHJcbiAgICAgICAgICAgICAgICAubWFwKChjb2x1bW46IEFnR3JpZENoYXJ0c0NvbHVtbik6IENvbERlZiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi50b0NvbERlZigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgR3JpZCh0aGlzLl9uYXRpdmVFbGVtZW50LCB0aGlzLmdyaWRPcHRpb25zLCB0aGlzLmdyaWRQYXJhbXMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmlkT3B0aW9ucy5hcGkpIHtcclxuICAgICAgICAgICAgdGhpcy5hcGkgPSB0aGlzLmdyaWRPcHRpb25zLmFwaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdyaWRPcHRpb25zLmNvbHVtbkFwaSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkFwaSA9IHRoaXMuZ3JpZE9wdGlvbnMuY29sdW1uQXBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBzb21ldGltZXMsIGVzcGVjaWFsbHkgaW4gbGFyZ2UgY2xpZW50IGFwcHMgZ3JpZFJlYWR5IGNhbiBmaXJlIGJlZm9yZSBuZ0FmdGVyVmlld0luaXRcclxuICAgICAgICAvLyB0aGlzIHRpZXMgdGhlc2UgdG9nZXRoZXIgc28gdGhhdCBncmlkUmVhZHkgd2lsbCBhbHdheXMgZmlyZSBhZnRlciBhZ0dyaWRBbmd1bGFyJ3MgbmdBZnRlclZpZXdJbml0XHJcbiAgICAgICAgLy8gdGhlIGFjdHVhbCBjb250YWluaW5nIGNvbXBvbmVudCdzIG5nQWZ0ZXJWaWV3SW5pdCB3aWxsIGZpcmUganVzdCBhZnRlciBhZ0dyaWRBbmd1bGFyJ3NcclxuICAgICAgICB0aGlzLl9mdWxseVJlYWR5LnJlc29sdmVOb3cobnVsbCwgcmVzb2x2ZSA9PiByZXNvbHZlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpc2VkKSB7XHJcbiAgICAgICAgICAgIENvbXBvbmVudFV0aWwucHJvY2Vzc09uQ2hhbmdlKGNoYW5nZXMsIHRoaXMuZ3JpZE9wdGlvbnMsIHRoaXMuYXBpLCB0aGlzLmNvbHVtbkFwaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHtcclxuICAgICAgICAgICAgLy8gbmVlZCB0byBkbyB0aGlzIGJlZm9yZSB0aGUgZGVzdHJveSwgc28gd2Uga25vdyBub3QgdG8gZW1pdCBhbnkgZXZlbnRzXHJcbiAgICAgICAgICAgIC8vIHdoaWxlIHRlYXJpbmcgZG93biB0aGUgZ3JpZC5cclxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnbG9iYWxFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogc3RyaW5nLCBldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgd2UgYXJlIHRlYXJpbmcgZG93biwgZG9uJ3QgZW1pdCBhbmd1bGFyIGV2ZW50cywgYXMgdGhpcyBjYXVzZXNcclxuICAgICAgICAvLyBwcm9ibGVtcyB3aXRoIHRoZSBhbmd1bGFyIHJvdXRlclxyXG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2VuZXJpY2FsbHkgbG9vayB1cCB0aGUgZXZlbnRUeXBlXHJcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSA8RXZlbnRFbWl0dGVyPGFueT4+KDxhbnk+dGhpcylbZXZlbnRUeXBlXTtcclxuICAgICAgICBpZiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnZ3JpZFJlYWR5Jykge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVzZXIgaXMgbGlzdGVuaW5nIGZvciBncmlkUmVhZHksIHdhaXQgZm9yIG5nQWZ0ZXJWaWV3SW5pdCB0byBmaXJlIGZpcnN0LCB0aGVuIGVtaXQgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyBncmlkUmVhZHkgZXZlbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGx5UmVhZHkudGhlbigocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZy1HcmlkLWFuZ3VsYXI6IGNvdWxkIG5vdCBmaW5kIEV2ZW50RW1pdHRlcjogJyArIGV2ZW50VHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncmlkT3B0aW9uczogR3JpZE9wdGlvbnM7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbW9kdWxlczogTW9kdWxlW107XHJcblxyXG4gICAgLy8gQFNUQVJUQFxyXG4gICAgQElucHV0KCkgcHVibGljIGFsaWduZWRHcmlkcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtbkRlZnMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZXhjZWxTdHlsZXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkVG9wUm93RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWRCb3R0b21Sb3dEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNoYXJ0VGhlbWVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbXBvbmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZnJhbWV3b3JrQ29tcG9uZW50cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dTdHlsZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb250ZXh0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGF1dG9Hcm91cENvbHVtbkRlZiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NhbGVUZXh0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGljb25zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRhdGFzb3VyY2UgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VydmVyU2lkZURhdGFzb3VyY2UgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmlld3BvcnREYXRhc291cmNlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93UmVuZGVyZXJQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYWdnRnVuY3MgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVsbFdpZHRoQ2VsbFJlbmRlcmVyUGFyYW1zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRDb2xHcm91cERlZiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0Q29sRGVmIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRFeHBvcnRQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sdW1uVHlwZXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93Q2xhc3NSdWxlcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXRhaWxHcmlkT3B0aW9ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXRhaWxDZWxsUmVuZGVyZXJQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlclBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nT3ZlcmxheUNvbXBvbmVudFBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub1Jvd3NPdmVybGF5Q29tcG9uZW50UGFyYW1zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBvcHVwUGFyZW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbFJlc2l6ZURlZmF1bHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVkdXhTdG9yZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdGF0dXNCYXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2lkZUJhciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGFydFRoZW1lT3ZlcnJpZGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1c3RvbUNoYXJ0VGhlbWVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNvcnRpbmdPcmRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dDbGFzcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dTZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheUxvYWRpbmdUZW1wbGF0ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBvdmVybGF5Tm9Sb3dzVGVtcGxhdGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcXVpY2tGaWx0ZXJUZXh0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd01vZGVsVHlwZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlZGl0VHlwZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkb21MYXlvdXQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2xpcGJvYXJkRGVsaW1pbmF0b3IgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93R3JvdXBQYW5lbFNob3cgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbXVsdGlTb3J0S2V5IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Q29sdW1uR3JvdXBUb3RhbHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RSb3dUb3RhbHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RQYW5lbFNob3cgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsbEhhbmRsZURpcmVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsUm93SGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0J1ZmZlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xXaWR0aCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBIZWFkZXJIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXJzSGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90SGVhZGVySGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90R3JvdXBIZWFkZXJIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBEZWZhdWx0RXhwYW5kZWQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWluQ29sV2lkdGggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4Q29sV2lkdGggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmlld3BvcnRSb3dNb2RlbFBhZ2VTaXplIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZpZXdwb3J0Um93TW9kZWxCdWZmZXJTaXplIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGF1dG9TaXplUGFkZGluZyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhCbG9ja3NJbkNhY2hlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1heENvbmN1cnJlbnREYXRhc291cmNlUmVxdWVzdHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFNob3dEZWxheSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjYWNoZU92ZXJmbG93U2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uUGFnZVNpemUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2FjaGVCbG9ja1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5maW5pdGVJbml0aWFsUm93Q291bnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2Nyb2xsYmFyV2lkdGggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYmF0Y2hVcGRhdGVXYWl0TWlsbGlzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFzeW5jVHJhbnNhY3Rpb25XYWl0TWlsbGlzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJsb2NrTG9hZERlYm91bmNlTWlsbGlzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGtlZXBEZXRhaWxSb3dzQ291bnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdW5kb1JlZG9DZWxsRWRpdGluZ0xpbWl0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxGbGFzaERlbGF5IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxGYWRlRGVsYXkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9jYWxlVGV4dEZ1bmMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dJbm5lclJlbmRlcmVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93SW5uZXJSZW5kZXJlckZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRlQ29tcG9uZW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRhdGVDb21wb25lbnRGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dSZW5kZXJlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJvd1JlbmRlcmVyRnJhbWV3b3JrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGlzRXh0ZXJuYWxGaWx0ZXJQcmVzZW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd0hlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkb2VzRXh0ZXJuYWxGaWx0ZXJQYXNzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd0NsYXNzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd1N0eWxlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd0NsYXNzUnVsZXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdHJhdmVyc2VOb2RlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldENvbnRleHRNZW51SXRlbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0TWFpbk1lbnVJdGVtcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzUm93UG9zdENyZWF0ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzQ2VsbEZvckNsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJvd0FnZ05vZGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFJvd05vZGVJZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpc0Z1bGxXaWR0aENlbGwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVsbFdpZHRoQ2VsbFJlbmRlcmVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlckZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzU2Vjb25kYXJ5Q29sRGVmIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NTZWNvbmRhcnlDb2xHcm91cERlZiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRCdXNpbmVzc0tleUZvck5vZGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2VuZFRvQ2xpcGJvYXJkIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG5hdmlnYXRlVG9OZXh0SGVhZGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRhYlRvTmV4dEhlYWRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBuYXZpZ2F0ZVRvTmV4dENlbGwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdGFiVG9OZXh0Q2VsbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXREZXRhaWxSb3dEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NDZWxsRnJvbUNsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXREb2N1bWVudCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwb3N0UHJvY2Vzc1BvcHVwIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldENoaWxkQ291bnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0RGF0YVBhdGggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nQ2VsbFJlbmRlcmVyRnJhbWV3b3JrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdPdmVybGF5Q29tcG9uZW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdPdmVybGF5Q29tcG9uZW50RnJhbWV3b3JrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG5vUm93c092ZXJsYXlDb21wb25lbnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbm9Sb3dzT3ZlcmxheUNvbXBvbmVudEZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXRhaWxDZWxsUmVuZGVyZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsQ2VsbFJlbmRlcmVyRnJhbWV3b3JrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlZmF1bHRHcm91cFNvcnRDb21wYXJhdG9yIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGlzUm93TWFzdGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGlzUm93U2VsZWN0YWJsZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwb3N0U29ydCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzSGVhZGVyRm9yQ2xpcGJvYXJkIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb25OdW1iZXJGb3JtYXR0ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0RhdGFGcm9tQ2xpcGJvYXJkIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFNlcnZlclNpZGVHcm91cEtleSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1NlcnZlclNpZGVHcm91cCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0tleWJvYXJkRXZlbnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY3JlYXRlQ2hhcnRDb250YWluZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0NoYXJ0T3B0aW9ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRDaGFydFRvb2xiYXJJdGVtcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWxsT3BlcmF0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWFrZUNvbHVtblZpc2libGVBZnRlclVuR3JvdXAgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NSb3dDbGlja1NlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NlbGxTZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NIb3Jpem9udGFsU2Nyb2xsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFsd2F5c1Nob3dWZXJ0aWNhbFNjcm9sbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWJ1ZyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVCcm93c2VyVG9vbHRpcHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbEV4cHJlc3Npb25zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFuZ3VsYXJDb21waWxlUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmd1bGFyQ29tcGlsZUZpbHRlcnMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBTdXBwcmVzc0F1dG9Db2x1bW4gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBTZWxlY3RzQ2hpbGRyZW4gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJbmNsdWRlRm9vdGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSW5jbHVkZVRvdGFsRm9vdGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwVXNlRW50aXJlUm93IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwU3VwcHJlc3NCbGFua0hlYWRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnVIaWRlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93RGVzZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdW5Tb3J0SWNvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc011bHRpU29ydCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaW5nbGVDbGlja0VkaXQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NMb2FkaW5nT3ZlcmxheSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc05vUm93c092ZXJsYXkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBdXRvU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBza2lwSGVhZGVyT25BdXRvU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1BhcmVudHNJblJvd05vZGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uTW92ZUFuaW1hdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmFibGVDb2x1bW5zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRmllbGREb3ROb3RhdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVSYW5nZVNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVSYW5nZUhhbmRsZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVGaWxsSGFuZGxlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2xlYXJPbkZpbGxSZWR1Y3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVsdGFTb3J0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzVG91Y2ggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBc3luY0V2ZW50cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd0NvbnRleHRNZW51V2l0aENvbnRyb2xLZXkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb250ZXh0TWVudSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZW1lbWJlckdyb3VwU3RhdGVXaGVuTmV3RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVDZWxsQ2hhbmdlRmxhc2ggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NEcmFnTGVhdmVIaWRlc0NvbHVtbnMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNaWRkbGVDbGlja1Njcm9sbHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NQcmV2ZW50RGVmYXVsdE9uTW91c2VXaGVlbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvcHlSb3dzVG9DbGlwYm9hcmQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29weUhlYWRlcnNUb0NsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdE1vZGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBZ2dGdW5jSW5IZWFkZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb2x1bW5WaXJ0dWFsaXNhdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FnZ0F0Um9vdExldmVsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRm9jdXNBZnRlclJlZnJlc2ggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVuY3Rpb25zUGFzc2l2ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmdW5jdGlvbnNSZWFkT25seSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmltYXRlUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFNlbGVjdHNGaWx0ZXJlZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJlbW92ZVNpbmdsZUNoaWxkcmVuIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUmVtb3ZlTG93ZXN0U2luZ2xlQ2hpbGRyZW4gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUnRsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2xpY2tFZGl0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0RyYWdNYW5hZ2VkIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93RHJhZyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmVXaGVuUm93RHJhZ2dpbmcgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlTXVsdGlSb3dEcmFnZ2luZyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVHcm91cEVkaXQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW1iZWRGdWxsV2lkdGhSb3dzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlcHJlY2F0ZWRFbWJlZEZ1bGxXaWR0aFJvd3MgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NQYWdpbmF0aW9uUGFuZWwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBIaWRlT3BlblBhcmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBNdWx0aUF1dG9Db2x1bW4gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdG9wRWRpdGluZ1doZW5HcmlkTG9zZXNGb2N1cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uQXV0b1BhZ2VTaXplIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzU2Nyb2xsT25OZXdEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHB1cmdlQ2xvc2VkUm93Tm9kZXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2FjaGVRdWlja0ZpbHRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWx0YVJvd0RhdGFNb2RlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuc3VyZURvbU9yZGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFjY2VudGVkU29ydCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NoYW5nZURldGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZUNhY2hlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlQ2FjaGVOZXZlckV4cGlyZXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYWdncmVnYXRlT25seUNoYW5nZWRDb2x1bW5zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQW5pbWF0aW9uRnJhbWUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NFeGNlbEV4cG9ydCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NzdkV4cG9ydCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0cmVlRGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXN0ZXJEZXRhaWwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNdWx0aVJhbmdlU2VsZWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVudGVyTW92ZXNEb3duQWZ0ZXJFZGl0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVudGVyTW92ZXNEb3duIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUHJvcGVydHlOYW1lc0NoZWNrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd011bHRpU2VsZWN0V2l0aENsaWNrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRW50ZXJwcmlzZVJlc2V0T25OZXdDb2x1bW5zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZU9sZFNldEZpbHRlck1vZGVsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93SG92ZXJIaWdobGlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NSb3dUcmFuc2Zvcm0gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDbGlwYm9hcmRQYXN0ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0xhc3RFbXB0eUxpbmVPblBhc3RlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNlcnZlclNpZGVTb3J0aW5nQWx3YXlzUmVzZXRzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJlYWN0TmV4dCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1NldENvbHVtblN0YXRlRXZlbnRzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uU3RhdGVFdmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2hhcnRzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlbHRhQ29sdW1uTW9kZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01haW50YWluVW5zb3J0ZWRPcmRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVDZWxsVGV4dFNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0Jyb3dzZXJSZXNpemVPYnNlcnZlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01heFJlbmRlcmVkUm93UmVzdHJpY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZXhjbHVkZUNoaWxkcmVuV2hlblRyZWVEYXRhRmlsdGVyaW5nIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBNb3VzZVRyYWNrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGtlZXBEZXRhaWxSb3dzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRlQ2hpbGRSb3dzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnREZWZhdWx0T25Db250ZXh0TWVudSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB1bmRvUmVkb0NlbGxFZGl0aW5nIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFsbG93RHJhZ0Zyb21Db2x1bW5zVG9vbFBhbmVsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGltbXV0YWJsZURhdGEgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW1tdXRhYmxlQ29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdFN1cHByZXNzQXV0b0NvbHVtbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0V4cGFuZGFibGVQaXZvdEdyb3VwcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhcHBseUNvbHVtbkRlZk9yZGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlYm91bmNlVmVydGljYWxTY3JvbGxiYXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsUm93QXV0b0hlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtbkV2ZXJ5dGhpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZXdDb2x1bW5zTG9hZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5QaXZvdE1vZGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Sb3dHcm91cENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGV4cGFuZE9yQ29sbGFwc2VBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblBpdm90Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZ3JpZENvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5WYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtbk1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5WaXNpYmxlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5QaW5uZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtbkdyb3VwT3BlbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5SZXNpemVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgdmlydHVhbENvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dHcm91cE9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RGF0YUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RhdGFVcGRhdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwaW5uZWRSb3dEYXRhQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcmFuZ2VTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0UmFuZ2VTZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydE9wdGlvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydERlc3Ryb3llZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgdG9vbFBhbmVsVmlzaWJsZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG1vZGVsVXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcGFzdGVTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcGFzdGVFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbGxTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlsbEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxEb3VibGVDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsTW91c2VEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd1ZhbHVlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEZvY3VzZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsS2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEtleVByZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbHRlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbHRlck1vZGlmaWVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJPcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHNvcnRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyB2aXJ0dWFsUm93UmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RG91YmxlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZ3JpZFJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBncmlkU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHZpZXdwb3J0Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2Nyb2xsYmFyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaXJzdERhdGFSZW5kZXJlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ1N0YXJ0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGRyYWdTdG9wcGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGVja2JveENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0VkaXRpbmdTdGFydGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dFZGl0aW5nU3RvcHBlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEVkaXRpbmdTdGFydGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRWRpdGluZ1N0b3BwZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGJvZHlTY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGFuaW1hdGlvblF1ZXVlRW1wdHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGhlaWdodFNjYWxlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcGFnaW5hdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbXBvbmVudFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgYm9keUhlaWdodENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGRpc3BsYXllZENvbHVtbnNXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHNjcm9sbFZpc2liaWxpdHlDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Ib3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGZsYXNoQ2VsbHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHBhZ2luYXRpb25QaXhlbE9mZnNldENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RyYWdFbnRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RHJhZ01vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcG9wdXBUb0Zyb250OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Sb3dHcm91cENoYW5nZVJlcXVlc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblBpdm90Q2hhbmdlUmVxdWVzdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uVmFsdWVDaGFuZ2VSZXF1ZXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5BZ2dGdW5jQ2hhbmdlUmVxdWVzdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMga2V5Ym9hcmRGb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbW91c2VGb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIC8vIEBFTkRAXHJcbn1cclxuXHJcbiJdfQ==