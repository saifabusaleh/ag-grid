import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ComponentUtil, Grid, Promise } from "ag-grid-community-charts";
import { AngularFrameworkOverrides } from "./angularFrameworkOverrides";
import { AngularFrameworkComponentWrapper } from "./angularFrameworkComponentWrapper";
import { AgGridChartsColumn } from "./ag-grid-charts-column.component";
let AgGridChartsAngular = class AgGridChartsAngular {
    constructor(elementDef, viewContainerRef, angularFrameworkOverrides, frameworkComponentWrapper, _componentFactoryResolver) {
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
    ngAfterViewInit() {
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
                .map((column) => {
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
        this._fullyReady.resolveNow(null, resolve => resolve);
    }
    ngOnChanges(changes) {
        if (this._initialised) {
            ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
        }
    }
    ngOnDestroy() {
        if (this._initialised) {
            // need to do this before the destroy, so we know not to emit any events
            // while tearing down the grid.
            this._destroyed = true;
            if (this.api) {
                this.api.destroy();
            }
        }
    }
    globalEventListener(eventType, event) {
        // if we are tearing down, don't emit angular events, as this causes
        // problems with the angular router
        if (this._destroyed) {
            return;
        }
        // generically look up the eventType
        let emitter = this[eventType];
        if (emitter) {
            if (eventType === 'gridReady') {
                // if the user is listening for gridReady, wait for ngAfterViewInit to fire first, then emit the
                // gridReady event
                this._fullyReady.then((result => {
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
    }
};
AgGridChartsAngular.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: AngularFrameworkOverrides },
    { type: AngularFrameworkComponentWrapper },
    { type: ComponentFactoryResolver }
];
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
export { AgGridChartsAngular };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZy1ncmlkLWFuZ3VsYXItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2FnLWdyaWQtYW5ndWxhci1jaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsYUFBYSxFQUNiLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBR0gsYUFBYSxFQUNiLElBQUksRUFLSixPQUFPLEVBRVYsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVl2RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWtCNUIsWUFBWSxVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMseUJBQW9ELEVBQ3BELHlCQUEyRCxFQUMzRCx5QkFBbUQ7UUFIbkQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBa0M7UUFDM0QsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQWxCdkQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUkzQiwwREFBMEQ7UUFDbEQsZ0JBQVcsR0FBcUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQW9HOUQsVUFBVTtRQUNNLGlC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OzhCQUFxQixZQUFZO3dEQUFnQztBQUNoRTtJQUFULE1BQU0sRUFBRTs4QkFBc0IsWUFBWTt5REFBZ0M7QUFDakU7SUFBVCxNQUFNLEVBQUU7OEJBQW9CLFlBQVk7dURBQWdDO0FBQy9EO0lBQVQsTUFBTSxFQUFFOzhCQUFzQixZQUFZO3lEQUFnQztBQUNqRTtJQUFULE1BQU0sRUFBRTs4QkFBcUMsWUFBWTt3RUFBZ0M7QUFDaEY7SUFBVCxNQUFNLEVBQUU7OEJBQWtDLFlBQVk7cUVBQWdDO0FBQzdFO0lBQVQsTUFBTSxFQUFFOzhCQUFrQyxZQUFZO3FFQUFnQztBQUM3RTtJQUFULE1BQU0sRUFBRTs4QkFBb0MsWUFBWTt1RUFBZ0M7QUFDL0U7SUFBVCxNQUFNLEVBQUU7OEJBQXVCLFlBQVk7MERBQWdDO0FBQ2xFO0lBQVQsTUFBTSxFQUFFOzhCQUFvQixZQUFZO3VEQUFnQztBQTNjaEUsbUJBQW1CO0lBVi9CLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUU7WUFDUCx5QkFBeUI7WUFDekIsZ0NBQWdDO1NBQ25DO1FBQ0QsNkVBQTZFO1FBQzdFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO0tBQ3hDLENBQUM7cUNBbUIwQixVQUFVO1FBQ0osZ0JBQWdCO1FBQ1AseUJBQXlCO1FBQ3pCLGdDQUFnQztRQUNoQyx3QkFBd0I7R0F0QnRELG1CQUFtQixDQTZjL0I7U0E3Y1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbERlZixcclxuICAgIENvbHVtbkFwaSxcclxuICAgIENvbXBvbmVudFV0aWwsXHJcbiAgICBHcmlkLFxyXG4gICAgR3JpZEFwaSxcclxuICAgIEdyaWRPcHRpb25zLFxyXG4gICAgR3JpZFBhcmFtcyxcclxuICAgIE1vZHVsZSxcclxuICAgIFByb21pc2UsXHJcbiAgICBfXHJcbn0gZnJvbSBcImFnLWdyaWQtY29tbXVuaXR5LWNoYXJ0c1wiO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhckZyYW1ld29ya092ZXJyaWRlcyB9IGZyb20gXCIuL2FuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXNcIjtcclxuaW1wb3J0IHsgQW5ndWxhckZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIgfSBmcm9tIFwiLi9hbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlclwiO1xyXG5pbXBvcnQgeyBBZ0dyaWRDaGFydHNDb2x1bW4gfSBmcm9tIFwiLi9hZy1ncmlkLWNoYXJ0cy1jb2x1bW4uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWctZ3JpZC1jaGFydHMtYW5ndWxhcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzLFxyXG4gICAgICAgIEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyXHJcbiAgICBdLFxyXG4gICAgLy8gdGVsbCBhbmd1bGFyIHdlIGRvbid0IHdhbnQgdmlldyBlbmNhcHN1bGF0aW9uLCB3ZSBkb24ndCB3YW50IGEgc2hhZG93IHJvb3RcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnR3JpZENoYXJ0c0FuZ3VsYXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAgIC8vIG5vdCBpbnRlbmRlZCBmb3IgdXNlciB0byBpbnRlcmFjdCB3aXRoLiBzbyBwdXR0aW5nIF8gaW4gc28gaWYgdXNlciBnZXRzIHJlZmVyZW5jZVxyXG4gICAgLy8gdG8gdGhpcyBvYmplY3QsIHRoZXkga2luZCdhIGtub3cgaXQncyBub3QgcGFydCBvZiB0aGUgYWdyZWVkIGludGVyZmFjZVxyXG4gICAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55O1xyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGlzZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2Rlc3Ryb3llZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZ3JpZFBhcmFtczogR3JpZFBhcmFtcztcclxuXHJcbiAgICAvLyBpbiBvcmRlciB0byBlbnN1cmUgZmlyaW5nIG9mIGdyaWRSZWFkeSBpcyBkZXRlcm1pbmlzdGljXHJcbiAgICBwcml2YXRlIF9mdWxseVJlYWR5OiBQcm9taXNlPGJvb2xlYW4+ID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG5cclxuICAgIC8vIG1ha2luZyB0aGVzZSBwdWJsaWMsIHNvIHRoZXkgYXJlIGFjY2Vzc2libGUgdG8gcGVvcGxlIHVzaW5nIHRoZSBuZzIgY29tcG9uZW50IHJlZmVyZW5jZXNcclxuICAgIHB1YmxpYyBhcGk6IEdyaWRBcGk7XHJcbiAgICBwdWJsaWMgY29sdW1uQXBpOiBDb2x1bW5BcGk7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihBZ0dyaWRDaGFydHNDb2x1bW4pIHB1YmxpYyBjb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ2hhcnRzQ29sdW1uPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50RGVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIGFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXM6IEFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMsXHJcbiAgICAgICAgcHJpdmF0ZSBmcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyOiBBbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlcixcclxuICAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG4gICAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbGVtZW50RGVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlci5zZXRWaWV3Q29udGFpbmVyUmVmKHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgICAgdGhpcy5mcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyLnNldENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcih0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyaWRPcHRpb25zID0gQ29tcG9uZW50VXRpbC5jb3B5QXR0cmlidXRlc1RvR3JpZE9wdGlvbnModGhpcy5ncmlkT3B0aW9ucywgdGhpcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgZ2xvYmFsRXZlbnRMaXN0ZW5lcjogdGhpcy5nbG9iYWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGZyYW1ld29ya092ZXJyaWRlczogdGhpcy5hbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzLFxyXG4gICAgICAgICAgICBwcm92aWRlZEJlYW5JbnN0YW5jZXM6IHtcclxuICAgICAgICAgICAgICAgIGZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXI6IHRoaXMuZnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2R1bGVzOiAodGhpcy5tb2R1bGVzIHx8IFtdKSBhcyBhbnlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuY29sdW1ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMuY29sdW1uRGVmcyA9IHRoaXMuY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgoY29sdW1uOiBBZ0dyaWRDaGFydHNDb2x1bW4pOiBDb2xEZWYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4udG9Db2xEZWYoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3IEdyaWQodGhpcy5fbmF0aXZlRWxlbWVudCwgdGhpcy5ncmlkT3B0aW9ucywgdGhpcy5ncmlkUGFyYW1zKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ3JpZE9wdGlvbnMuYXBpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpID0gdGhpcy5ncmlkT3B0aW9ucy5hcGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmlkT3B0aW9ucy5jb2x1bW5BcGkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5BcGkgPSB0aGlzLmdyaWRPcHRpb25zLmNvbHVtbkFwaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc29tZXRpbWVzLCBlc3BlY2lhbGx5IGluIGxhcmdlIGNsaWVudCBhcHBzIGdyaWRSZWFkeSBjYW4gZmlyZSBiZWZvcmUgbmdBZnRlclZpZXdJbml0XHJcbiAgICAgICAgLy8gdGhpcyB0aWVzIHRoZXNlIHRvZ2V0aGVyIHNvIHRoYXQgZ3JpZFJlYWR5IHdpbGwgYWx3YXlzIGZpcmUgYWZ0ZXIgYWdHcmlkQW5ndWxhcidzIG5nQWZ0ZXJWaWV3SW5pdFxyXG4gICAgICAgIC8vIHRoZSBhY3R1YWwgY29udGFpbmluZyBjb21wb25lbnQncyBuZ0FmdGVyVmlld0luaXQgd2lsbCBmaXJlIGp1c3QgYWZ0ZXIgYWdHcmlkQW5ndWxhcidzXHJcbiAgICAgICAgdGhpcy5fZnVsbHlSZWFkeS5yZXNvbHZlTm93KG51bGwsIHJlc29sdmUgPT4gcmVzb2x2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXNlZCkge1xyXG4gICAgICAgICAgICBDb21wb25lbnRVdGlsLnByb2Nlc3NPbkNoYW5nZShjaGFuZ2VzLCB0aGlzLmdyaWRPcHRpb25zLCB0aGlzLmFwaSwgdGhpcy5jb2x1bW5BcGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpc2VkKSB7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgdGhlIGRlc3Ryb3ksIHNvIHdlIGtub3cgbm90IHRvIGVtaXQgYW55IGV2ZW50c1xyXG4gICAgICAgICAgICAvLyB3aGlsZSB0ZWFyaW5nIGRvd24gdGhlIGdyaWQuXHJcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwaSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2xvYmFsRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IHN0cmluZywgZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIHdlIGFyZSB0ZWFyaW5nIGRvd24sIGRvbid0IGVtaXQgYW5ndWxhciBldmVudHMsIGFzIHRoaXMgY2F1c2VzXHJcbiAgICAgICAgLy8gcHJvYmxlbXMgd2l0aCB0aGUgYW5ndWxhciByb3V0ZXJcclxuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdlbmVyaWNhbGx5IGxvb2sgdXAgdGhlIGV2ZW50VHlwZVxyXG4gICAgICAgIGxldCBlbWl0dGVyID0gPEV2ZW50RW1pdHRlcjxhbnk+Pig8YW55PnRoaXMpW2V2ZW50VHlwZV07XHJcbiAgICAgICAgaWYgKGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2dyaWRSZWFkeScpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIGlzIGxpc3RlbmluZyBmb3IgZ3JpZFJlYWR5LCB3YWl0IGZvciBuZ0FmdGVyVmlld0luaXQgdG8gZmlyZSBmaXJzdCwgdGhlbiBlbWl0IHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gZ3JpZFJlYWR5IGV2ZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mdWxseVJlYWR5LnRoZW4oKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWctR3JpZC1hbmd1bGFyOiBjb3VsZCBub3QgZmluZCBFdmVudEVtaXR0ZXI6ICcgKyBldmVudFR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JpZE9wdGlvbnM6IEdyaWRPcHRpb25zO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vZHVsZXM6IE1vZHVsZVtdO1xyXG5cclxuICAgIC8vIEBTVEFSVEBcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGlnbmVkR3JpZHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5EZWZzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGV4Y2VsU3R5bGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFRvcFJvd0RhdGEgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkQm90dG9tUm93RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGFydFRoZW1lcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb21wb25lbnRzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZyYW1ld29ya0NvbXBvbmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93U3R5bGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29udGV4dCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhdXRvR3JvdXBDb2x1bW5EZWYgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9jYWxlVGV4dCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpY29ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhc291cmNlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNlcnZlclNpZGVEYXRhc291cmNlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZpZXdwb3J0RGF0YXNvdXJjZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJvd1JlbmRlcmVyUGFyYW1zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFnZ0Z1bmNzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlclBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0Q29sR3JvdXBEZWYgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdENvbERlZiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0RXhwb3J0UGFyYW1zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtblR5cGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0NsYXNzUnVsZXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsR3JpZE9wdGlvbnMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsQ2VsbFJlbmRlcmVyUGFyYW1zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdDZWxsUmVuZGVyZXJQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ092ZXJsYXlDb21wb25lbnRQYXJhbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbm9Sb3dzT3ZlcmxheUNvbXBvbmVudFBhcmFtcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwb3B1cFBhcmVudCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xSZXNpemVEZWZhdWx0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJlZHV4U3RvcmUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3RhdHVzQmFyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNpZGVCYXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hhcnRUaGVtZU92ZXJyaWRlcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DaGFydFRoZW1lcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0aW5nT3JkZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93Q2xhc3MgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93U2VsZWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG92ZXJsYXlMb2FkaW5nVGVtcGxhdGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheU5vUm93c1RlbXBsYXRlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHF1aWNrRmlsdGVyVGV4dCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dNb2RlbFR5cGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdFR5cGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZG9tTGF5b3V0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNsaXBib2FyZERlbGltaW5hdG9yIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwUGFuZWxTaG93IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG11bHRpU29ydEtleSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdENvbHVtbkdyb3VwVG90YWxzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Um93VG90YWxzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90UGFuZWxTaG93IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZpbGxIYW5kbGVEaXJlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93SGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRldGFpbFJvd0hlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dCdWZmZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sV2lkdGggOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVySGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSGVhZGVySGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyc0hlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdEhlYWRlckhlaWdodCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdEdyb3VwSGVhZGVySGVpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwRGVmYXVsdEV4cGFuZGVkIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1pbkNvbFdpZHRoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1heENvbFdpZHRoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHZpZXdwb3J0Um93TW9kZWxQYWdlU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2aWV3cG9ydFJvd01vZGVsQnVmZmVyU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhdXRvU2l6ZVBhZGRpbmcgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4QmxvY2tzSW5DYWNoZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhDb25jdXJyZW50RGF0YXNvdXJjZVJlcXVlc3RzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBTaG93RGVsYXkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2FjaGVPdmVyZmxvd1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvblBhZ2VTaXplIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNhY2hlQmxvY2tTaXplIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGluZmluaXRlSW5pdGlhbFJvd0NvdW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNjcm9sbGJhcldpZHRoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJhdGNoVXBkYXRlV2FpdE1pbGxpcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhc3luY1RyYW5zYWN0aW9uV2FpdE1pbGxpcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBibG9ja0xvYWREZWJvdW5jZU1pbGxpcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBrZWVwRGV0YWlsUm93c0NvdW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHVuZG9SZWRvQ2VsbEVkaXRpbmdMaW1pdCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRmxhc2hEZWxheSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRmFkZURlbGF5IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvY2FsZVRleHRGdW5jIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93SW5uZXJSZW5kZXJlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJvd0lubmVyUmVuZGVyZXJGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0ZUNvbXBvbmVudCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRlQ29tcG9uZW50RnJhbWV3b3JrIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwUm93UmVuZGVyZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dSZW5kZXJlckZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpc0V4dGVybmFsRmlsdGVyUHJlc2VudCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dIZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZG9lc0V4dGVybmFsRmlsdGVyUGFzcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dDbGFzcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dTdHlsZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dDbGFzc1J1bGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRyYXZlcnNlTm9kZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRDb250ZXh0TWVudUl0ZW1zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldE1haW5NZW51SXRlbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc1Jvd1Bvc3RDcmVhdGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0NlbGxGb3JDbGlwYm9hcmQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSb3dBZ2dOb2RlcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRSb3dOb2RlSWQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaXNGdWxsV2lkdGhDZWxsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZ1bGxXaWR0aENlbGxSZW5kZXJlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmdWxsV2lkdGhDZWxsUmVuZGVyZXJGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc1NlY29uZGFyeUNvbERlZiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzU2Vjb25kYXJ5Q29sR3JvdXBEZWYgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0QnVzaW5lc3NLZXlGb3JOb2RlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNlbmRUb0NsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBuYXZpZ2F0ZVRvTmV4dEhlYWRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJUb05leHRIZWFkZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbmF2aWdhdGVUb05leHRDZWxsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHRhYlRvTmV4dENlbGwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0RGV0YWlsUm93RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9jZXNzQ2VsbEZyb21DbGlwYm9hcmQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0RG9jdW1lbnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcG9zdFByb2Nlc3NQb3B1cCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRDaGlsZENvdW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldERhdGFQYXRoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvYWRpbmdDZWxsUmVuZGVyZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NlbGxSZW5kZXJlckZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nT3ZlcmxheUNvbXBvbmVudCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nT3ZlcmxheUNvbXBvbmVudEZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBub1Jvd3NPdmVybGF5Q29tcG9uZW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIG5vUm93c092ZXJsYXlDb21wb25lbnRGcmFtZXdvcmsgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGV0YWlsQ2VsbFJlbmRlcmVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRldGFpbENlbGxSZW5kZXJlckZyYW1ld29yayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0R3JvdXBTb3J0Q29tcGFyYXRvciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1Jvd01hc3RlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1Jvd1NlbGVjdGFibGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcG9zdFNvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcHJvY2Vzc0hlYWRlckZvckNsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uTnVtYmVyRm9ybWF0dGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NEYXRhRnJvbUNsaXBib2FyZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRTZXJ2ZXJTaWRlR3JvdXBLZXkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaXNTZXJ2ZXJTaWRlR3JvdXAgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NLZXlib2FyZEV2ZW50IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNyZWF0ZUNoYXJ0Q29udGFpbmVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHByb2Nlc3NDaGFydE9wdGlvbnMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0Q2hhcnRUb29sYmFySXRlbXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsbE9wZXJhdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01ha2VDb2x1bW5WaXNpYmxlQWZ0ZXJVbkdyb3VwIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93Q2xpY2tTZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDZWxsU2VsZWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzSG9yaXpvbnRhbFNjcm9sbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbHdheXNTaG93VmVydGljYWxTY3JvbGwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVidWcgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQnJvd3NlclRvb2x0aXBzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNlbGxFeHByZXNzaW9ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmd1bGFyQ29tcGlsZVJvd3MgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYW5ndWxhckNvbXBpbGVGaWx0ZXJzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwU3VwcHJlc3NBdXRvQ29sdW1uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwU2VsZWN0c0NoaWxkcmVuIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSW5jbHVkZUZvb3RlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cEluY2x1ZGVUb3RhbEZvb3RlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFVzZUVudGlyZVJvdyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFN1cHByZXNzQmxhbmtIZWFkZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNZW51SGlkZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jvd0Rlc2VsZWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHVuU29ydEljb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNdWx0aVNvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2luZ2xlQ2xpY2tFZGl0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTG9hZGluZ092ZXJsYXkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NOb1Jvd3NPdmVybGF5IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQXV0b1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2tpcEhlYWRlck9uQXV0b1NpemUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NQYXJlbnRzSW5Sb3dOb2RlcyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvbHVtbk1vdmVBbmltYXRpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNb3ZhYmxlQ29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpZWxkRG90Tm90YXRpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUmFuZ2VTZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUmFuZ2VIYW5kbGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlRmlsbEhhbmRsZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NsZWFyT25GaWxsUmVkdWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRlbHRhU29ydCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1RvdWNoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQXN5bmNFdmVudHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYWxsb3dDb250ZXh0TWVudVdpdGhDb250cm9sS2V5IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29udGV4dE1lbnUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVtZW1iZXJHcm91cFN0YXRlV2hlbk5ld0RhdGEgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbENoYW5nZUZsYXNoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRHJhZ0xlYXZlSGlkZXNDb2x1bW5zIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWlkZGxlQ2xpY2tTY3JvbGxzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUHJldmVudERlZmF1bHRPbk1vdXNlV2hlZWwgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDb3B5Um93c1RvQ2xpcGJvYXJkIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvcHlIZWFkZXJzVG9DbGlwYm9hcmQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RNb2RlIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQWdnRnVuY0luSGVhZGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uVmlydHVhbGlzYXRpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBZ2dBdFJvb3RMZXZlbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZvY3VzQWZ0ZXJSZWZyZXNoIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZ1bmN0aW9uc1Bhc3NpdmUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZnVuY3Rpb25zUmVhZE9ubHkgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZVJvd3MgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBTZWxlY3RzRmlsdGVyZWQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBSZW1vdmVTaW5nbGVDaGlsZHJlbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cFJlbW92ZUxvd2VzdFNpbmdsZUNoaWxkcmVuIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVJ0bCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NsaWNrRWRpdCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnTWFuYWdlZCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jvd0RyYWcgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNb3ZlV2hlblJvd0RyYWdnaW5nIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZU11bHRpUm93RHJhZ2dpbmcgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlR3JvdXBFZGl0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVtYmVkRnVsbFdpZHRoUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZXByZWNhdGVkRW1iZWRGdWxsV2lkdGhSb3dzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUGFnaW5hdGlvblBhbmVsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSGlkZU9wZW5QYXJlbnRzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwTXVsdGlBdXRvQ29sdW1uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBhZ2luYXRpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3RvcEVkaXRpbmdXaGVuR3JpZExvc2VzRm9jdXMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFnaW5hdGlvbkF1dG9QYWdlU2l6ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Njcm9sbE9uTmV3RGF0YSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwdXJnZUNsb3NlZFJvd05vZGVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNhY2hlUXVpY2tGaWx0ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGVsdGFSb3dEYXRhTW9kZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbnN1cmVEb21PcmRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhY2NlbnRlZFNvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDaGFuZ2VEZXRlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVDYWNoZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZUNhY2hlTmV2ZXJFeHBpcmVzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGFnZ3JlZ2F0ZU9ubHlDaGFuZ2VkQ29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0FuaW1hdGlvbkZyYW1lIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRXhjZWxFeHBvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDc3ZFeHBvcnQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdHJlZURhdGEgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFzdGVyRGV0YWlsIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTXVsdGlSYW5nZVNlbGVjdGlvbiA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbnRlck1vdmVzRG93bkFmdGVyRWRpdCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbnRlck1vdmVzRG93biA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Byb3BlcnR5TmFtZXNDaGVjayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dNdWx0aVNlbGVjdFdpdGhDbGljayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0VudGVycHJpc2VSZXNldE9uTmV3Q29sdW1ucyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVPbGRTZXRGaWx0ZXJNb2RlbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jvd0hvdmVySGlnaGxpZ2h0IDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUm93VHJhbnNmb3JtIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2xpcGJvYXJkUGFzdGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NMYXN0RW1wdHlMaW5lT25QYXN0ZSA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXJ2ZXJTaWRlU29ydGluZ0Fsd2F5c1Jlc2V0cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZWFjdE5leHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NTZXRDb2x1bW5TdGF0ZUV2ZW50cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvbHVtblN0YXRlRXZlbnRzIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNoYXJ0cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWx0YUNvbHVtbk1vZGUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNYWludGFpblVuc29ydGVkT3JkZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbFRleHRTZWxlY3Rpb24gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NCcm93c2VyUmVzaXplT2JzZXJ2ZXIgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNYXhSZW5kZXJlZFJvd1Jlc3RyaWN0aW9uIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGV4Y2x1ZGVDaGlsZHJlbldoZW5UcmVlRGF0YUZpbHRlcmluZyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwTW91c2VUcmFjayA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBrZWVwRGV0YWlsUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwYWdpbmF0ZUNoaWxkUm93cyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwcmV2ZW50RGVmYXVsdE9uQ29udGV4dE1lbnUgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdW5kb1JlZG9DZWxsRWRpdGluZyA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd0RyYWdGcm9tQ29sdW1uc1Rvb2xQYW5lbCA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbW11dGFibGVEYXRhIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGltbXV0YWJsZUNvbHVtbnMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RTdXBwcmVzc0F1dG9Db2x1bW4gOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NFeHBhbmRhYmxlUGl2b3RHcm91cHMgOiBhbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwbHlDb2x1bW5EZWZPcmRlciA6IGFueSA9IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWJvdW5jZVZlcnRpY2FsU2Nyb2xsYmFyIDogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgQElucHV0KCkgcHVibGljIGRldGFpbFJvd0F1dG9IZWlnaHQgOiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5FdmVyeXRoaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbmV3Q29sdW1uc0xvYWRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUGl2b3RNb2RlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUm93R3JvdXBDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBleHBhbmRPckNvbGxhcHNlQWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5QaXZvdENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGdyaWRDb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uVmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Nb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uVmlzaWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUGlubmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5Hcm91cE9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUmVzaXplZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZGlzcGxheWVkQ29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHZpcnR1YWxDb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93R3JvdXBPcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RhdGFDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEYXRhVXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcGlubmVkUm93RGF0YUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJhbmdlU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDcmVhdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFydFJhbmdlU2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRPcHRpb25zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnREZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHRvb2xQYW5lbFZpc2libGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbFVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHBhc3RlU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHBhc3RlRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWxsU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGZpbGxFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsRG91YmxlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbE1vdXNlRG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbENvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjZWxsVmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dWYWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxGb2N1c2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEtleURvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxLZXlQcmVzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbE1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbE1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJNb2RpZmllZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlsdGVyT3BlbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBzb3J0Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgdmlydHVhbFJvd1JlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RvdWJsZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGdyaWRSZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZ3JpZFNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyB2aWV3cG9ydENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHNjcm9sbGJhcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZmlyc3REYXRhUmVuZGVyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGRyYWdTdGFydGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcmFnU3RvcHBlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2hlY2tib3hDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dFZGl0aW5nU3RhcnRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgcm93RWRpdGluZ1N0b3BwZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNlbGxFZGl0aW5nU3RhcnRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2VsbEVkaXRpbmdTdG9wcGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBib2R5U2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBhbmltYXRpb25RdWV1ZUVtcHR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBoZWlnaHRTY2FsZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHBhZ2luYXRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb21wb25lbnRTdGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGJvZHlIZWlnaHRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBzY3JvbGxWaXNpYmlsaXR5Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uSG92ZXJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBmbGFzaENlbGxzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwYWdpbmF0aW9uUGl4ZWxPZmZzZXRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RyYWdNb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByb3dEcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHJvd0RyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHBvcHVwVG9Gcm9udDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uUm93R3JvdXBDaGFuZ2VSZXF1ZXN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjb2x1bW5QaXZvdENoYW5nZVJlcXVlc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGNvbHVtblZhbHVlQ2hhbmdlUmVxdWVzdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgY29sdW1uQWdnRnVuY0NoYW5nZVJlcXVlc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGtleWJvYXJkRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG1vdXNlRm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICAvLyBARU5EQFxyXG59XHJcblxyXG4iXX0=