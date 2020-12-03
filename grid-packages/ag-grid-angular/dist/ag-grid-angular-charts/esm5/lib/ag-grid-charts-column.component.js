import { __decorate, __metadata, __rest } from "tslib";
import { Component, ContentChildren, Input, QueryList } from "@angular/core";
var AgGridChartsColumn = /** @class */ (function () {
    function AgGridChartsColumn() {
    }
    AgGridChartsColumn_1 = AgGridChartsColumn;
    AgGridChartsColumn.prototype.hasChildColumns = function () {
        if (this.childColumns && this.childColumns.length > 0) {
            // necessary because of https://github.com/angular/angular/issues/10098
            return !(this.childColumns.length === 1 && this.childColumns.first === this);
        }
        return false;
    };
    AgGridChartsColumn.prototype.toColDef = function () {
        var colDef = this.createColDefFromGridColumn(this);
        if (this.hasChildColumns()) {
            colDef["children"] = this.getChildColDefs(this.childColumns);
        }
        return colDef;
    };
    AgGridChartsColumn.prototype.getChildColDefs = function (childColumns) {
        return childColumns
            // necessary because of https://github.com/angular/angular/issues/10098
            .filter(function (column) { return !column.hasChildColumns(); })
            .map(function (column) {
            return column.toColDef();
        });
    };
    ;
    AgGridChartsColumn.prototype.createColDefFromGridColumn = function (from) {
        var childColumns = from.childColumns, colDef = __rest(from, ["childColumns"]);
        return colDef;
    };
    ;
    var AgGridChartsColumn_1;
    __decorate([
        ContentChildren(AgGridChartsColumn_1),
        __metadata("design:type", QueryList)
    ], AgGridChartsColumn.prototype, "childColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "children", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "sortingOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "allowedAggFuncs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "menuTabs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellClassRules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "icons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerGroupComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerGroupComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerGroupComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellEditorFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellEditorParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pinnedRowCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pinnedRowCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "filterFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "filterParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "floatingFilterComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "floatingFilterComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "floatingFilterComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "tooltipComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "tooltipComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "tooltipComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "refData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "columnsMenuParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "columnGroupShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "toolPanelClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "groupId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "colId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "sort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "field", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "tooltipField", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerTooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "showRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "filter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialAggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "aggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellEditor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialPinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "chartDataType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "sortedAt", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "sortIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialSortIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "flex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialFlex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "width", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "minWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "maxWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "rowGroupIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialRowGroupIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pivotIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialPivotIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "dndSourceOnRowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "valueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "valueSetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "filterValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "keyCreator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pinnedRowCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "valueFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pinnedRowValueFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "valueParser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "comparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "equals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pivotComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressHeaderKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "colSpan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "rowSpan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "getQuickFilterText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "newValueHandler", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "onCellValueChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "onCellClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "onCellDoubleClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "onCellContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "rowDragText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "tooltipValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellRendererSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "cellEditorSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressCellFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressColumnsToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressFiltersToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "openByDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "marryChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "hide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialHide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "rowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "pivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "initialPivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "checkboxSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerCheckboxSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "headerCheckboxSelectionFilteredOnly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressMovable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "lockPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "lockVisible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "lockPinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "unSortIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressSizeToFit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressAutoSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "enableRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "enablePivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "enableValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "editable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "suppressNavigable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "enableCellChangeFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "rowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "dndSource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "autoHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "wrapText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "sortable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "resizable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "singleClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridChartsColumn.prototype, "floatingFilter", void 0);
    AgGridChartsColumn = AgGridChartsColumn_1 = __decorate([
        Component({
            selector: 'ag-grid-charts-column',
            template: ''
        })
    ], AgGridChartsColumn);
    return AgGridChartsColumn;
}());
export { AgGridChartsColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1jaGFydHMtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnLWdyaWQtYW5ndWxhci1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvYWctZ3JpZC1jaGFydHMtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU83RTtJQUFBO0lBc0tBLENBQUM7MkJBdEtZLGtCQUFrQjtJQUdwQiw0Q0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsdUVBQXVFO1lBQ3ZFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxxQ0FBUSxHQUFmO1FBQ0ksSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ2xCLE1BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTyw0Q0FBZSxHQUF2QixVQUF3QixZQUEyQztRQUMvRCxPQUFPLFlBQVk7WUFDZix1RUFBdUU7YUFDdEUsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQXpCLENBQXlCLENBQUM7YUFDM0MsR0FBRyxDQUFD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LEVBQUU7OzJEQUF5QjtJQUN4QjtRQUFSLEtBQUssRUFBRTs7d0RBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzs2REFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7O2lFQUErQjtJQUM5QjtRQUFSLEtBQUssRUFBRTs7cUVBQW1DO0lBQ2xDO1FBQVIsS0FBSyxFQUFFOzt1REFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7O3lEQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTs7MERBQXdCO0lBQ3ZCO1FBQVIsS0FBSyxFQUFFOzt3REFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7O3dEQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTs7eURBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOzsrREFBNkI7SUFDNUI7UUFBUixLQUFLLEVBQUU7OzhEQUE0QjtJQW5LM0Isa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO09BQ1csa0JBQWtCLENBc0s5QjtJQUFELHlCQUFDO0NBQUEsQUF0S0QsSUFzS0M7U0F0S1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb2xEZWYgfSBmcm9tIFwiYWctZ3JpZC1jb21tdW5pdHktY2hhcnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWctZ3JpZC1jaGFydHMtY29sdW1uJyxcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdHcmlkQ2hhcnRzQ29sdW1uIHtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oQWdHcmlkQ2hhcnRzQ29sdW1uKSBwdWJsaWMgY2hpbGRDb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ2hhcnRzQ29sdW1uPjtcclxuXHJcbiAgICBwdWJsaWMgaGFzQ2hpbGRDb2x1bW5zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ29sdW1ucyAmJiB0aGlzLmNoaWxkQ29sdW1ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwMDk4XHJcbiAgICAgICAgICAgIHJldHVybiAhKHRoaXMuY2hpbGRDb2x1bW5zLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmNoaWxkQ29sdW1ucy5maXJzdCA9PT0gdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9Db2xEZWYoKTogQ29sRGVmIHtcclxuICAgICAgICBsZXQgY29sRGVmOiBDb2xEZWYgPSB0aGlzLmNyZWF0ZUNvbERlZkZyb21HcmlkQ29sdW1uKHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNDaGlsZENvbHVtbnMoKSkge1xyXG4gICAgICAgICAgICAoPGFueT5jb2xEZWYpW1wiY2hpbGRyZW5cIl0gPSB0aGlzLmdldENoaWxkQ29sRGVmcyh0aGlzLmNoaWxkQ29sdW1ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xEZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGlsZENvbERlZnMoY2hpbGRDb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ2hhcnRzQ29sdW1uPikge1xyXG4gICAgICAgIHJldHVybiBjaGlsZENvbHVtbnNcclxuICAgICAgICAgICAgLy8gbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAwOThcclxuICAgICAgICAgICAgLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5oYXNDaGlsZENvbHVtbnMoKSlcclxuICAgICAgICAgICAgLm1hcCgoY29sdW1uOiBBZ0dyaWRDaGFydHNDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4udG9Db2xEZWYoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4oZnJvbTogQWdHcmlkQ2hhcnRzQ29sdW1uKTogQ29sRGVmIHtcclxuICAgICAgICBsZXQgeyBjaGlsZENvbHVtbnMsIC4uLmNvbERlZiB9ID0gZnJvbTtcclxuICAgICAgICByZXR1cm4gY29sRGVmO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbnB1dHMgLSBwcmV0dHkgbXVjaCBtb3N0IG9mIENvbERlZiwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mIHRlbXBsYXRlLCB0ZW1wbGF0ZVVybCBhbmQgaW50ZXJuYWwgb25seSBwcm9wZXJ0aWVzXHJcbiAgICAvLyBAU1RBUlRAXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hpbGRyZW46IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0aW5nT3JkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd2VkQWdnRnVuY3M6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtZW51VGFiczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxDbGFzc1J1bGVzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaWNvbnM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJHcm91cENvbXBvbmVudDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRQYXJhbXM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJQYXJhbXM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yRnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvclBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlckZyYW1ld29yazogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlclBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlckZyYW1ld29yazogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlclBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbXBvbmVudDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbXBvbmVudEZyYW1ld29yazogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbXBvbmVudFBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyQ29tcG9uZW50OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXJDb21wb25lbnRQYXJhbXM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudEZyYW1ld29yazogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBDb21wb25lbnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50UGFyYW1zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcENvbXBvbmVudEZyYW1ld29yazogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHJlZkRhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5zTWVudVBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlck5hbWU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5Hcm91cFNob3c6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDbGFzczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2xQYW5lbENsYXNzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyVmFsdWVHZXR0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFNvcnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHR5cGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwRmllbGQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJUb29sdGlwOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbENsYXNzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd1Jvd0dyb3VwOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbEFnZ0Z1bmM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhZ2dGdW5jOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxQaW5uZWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGFydERhdGFUeXBlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydGVkQXQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsU29ydEluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxleDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxGbGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsV2lkdGg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtaW5XaWR0aDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG1heFdpZHRoOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93R3JvdXBJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxSb3dHcm91cEluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxQaXZvdEluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZG5kU291cmNlT25Sb3dEcmFnOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVHZXR0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZVNldHRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlclZhbHVlR2V0dGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMga2V5Q3JlYXRvcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlckZyYW1ld29yazogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlRm9ybWF0dGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93VmFsdWVGb3JtYXR0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZVBhcnNlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbXBhcmF0b3I6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlcXVhbHM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdENvbXBhcmF0b3I6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0tleWJvYXJkRXZlbnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0hlYWRlcktleWJvYXJkRXZlbnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xTcGFuOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93U3BhbjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGdldFF1aWNrRmlsdGVyVGV4dDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG5ld1ZhbHVlSGFuZGxlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbFZhbHVlQ2hhbmdlZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbENsaWNrZWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkNlbGxEb3VibGVDbGlja2VkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsQ29udGV4dE1lbnU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnVGV4dDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBWYWx1ZUdldHRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlclNlbGVjdG9yOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvclNlbGVjdG9yOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NDZWxsRmxhc2g6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvbHVtbnNUb29sUGFuZWw6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpbHRlcnNUb29sUGFuZWw6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBvcGVuQnlEZWZhdWx0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFycnlDaGlsZHJlbjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhpZGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsSGlkZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFJvd0dyb3VwOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3Q6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsUGl2b3Q6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGVja2JveFNlbGVjdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNoZWNrYm94U2VsZWN0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25GaWx0ZXJlZE9ubHk6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmFibGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrUG9zaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrVmlzaWJsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvY2tQaW5uZWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB1blNvcnRJY29uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NTaXplVG9GaXQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0F1dG9TaXplOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlUm93R3JvdXA6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVQaXZvdDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVZhbHVlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Bhc3RlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NOYXZpZ2FibGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVDZWxsQ2hhbmdlRmxhc2g6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZG5kU291cmNlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b0hlaWdodDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHdyYXBUZXh0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydGFibGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemFibGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaW5nbGVDbGlja0VkaXQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlcjogYW55O1xyXG4gICAgLy8gQEVOREBcclxuXHJcbn1cclxuIl19