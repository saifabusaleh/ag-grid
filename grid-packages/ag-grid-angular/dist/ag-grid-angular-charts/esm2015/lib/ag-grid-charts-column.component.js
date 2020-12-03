var AgGridChartsColumn_1;
import { __decorate, __metadata, __rest } from "tslib";
import { Component, ContentChildren, Input, QueryList } from "@angular/core";
let AgGridChartsColumn = AgGridChartsColumn_1 = class AgGridChartsColumn {
    hasChildColumns() {
        if (this.childColumns && this.childColumns.length > 0) {
            // necessary because of https://github.com/angular/angular/issues/10098
            return !(this.childColumns.length === 1 && this.childColumns.first === this);
        }
        return false;
    }
    toColDef() {
        let colDef = this.createColDefFromGridColumn(this);
        if (this.hasChildColumns()) {
            colDef["children"] = this.getChildColDefs(this.childColumns);
        }
        return colDef;
    }
    getChildColDefs(childColumns) {
        return childColumns
            // necessary because of https://github.com/angular/angular/issues/10098
            .filter(column => !column.hasChildColumns())
            .map((column) => {
            return column.toColDef();
        });
    }
    ;
    createColDefFromGridColumn(from) {
        let { childColumns } = from, colDef = __rest(from, ["childColumns"]);
        return colDef;
    }
    ;
};
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
export { AgGridChartsColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1jaGFydHMtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnLWdyaWQtYW5ndWxhci1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvYWctZ3JpZC1jaGFydHMtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0UsSUFBYSxrQkFBa0IsMEJBQS9CLE1BQWEsa0JBQWtCO0lBR3BCLGVBQWU7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCx1RUFBdUU7WUFDdkUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDbEIsTUFBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxZQUEyQztRQUMvRCxPQUFPLFlBQVk7WUFDZix1RUFBdUU7YUFDdEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDM0MsR0FBRyxDQUFDLENBQUMsTUFBMEIsRUFBRSxFQUFFO1lBQ2hDLE9B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LEVBQUU7O3VEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7b0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzt5REFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7OzZEQUErQjtBQUM5QjtJQUFSLEtBQUssRUFBRTs7aUVBQW1DO0FBQ2xDO0lBQVIsS0FBSyxFQUFFOzttREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7O3FEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTs7c0RBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOztvREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7O29EQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTs7cURBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOzsyREFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7OzBEQUE0QjtBQW5LM0Isa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFDO0dBQ1csa0JBQWtCLENBc0s5QjtTQXRLWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbERlZiB9IGZyb20gXCJhZy1ncmlkLWNvbW11bml0eS1jaGFydHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZy1ncmlkLWNoYXJ0cy1jb2x1bW4nLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ0dyaWRDaGFydHNDb2x1bW4ge1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihBZ0dyaWRDaGFydHNDb2x1bW4pIHB1YmxpYyBjaGlsZENvbHVtbnM6IFF1ZXJ5TGlzdDxBZ0dyaWRDaGFydHNDb2x1bW4+O1xyXG5cclxuICAgIHB1YmxpYyBoYXNDaGlsZENvbHVtbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRDb2x1bW5zICYmIHRoaXMuY2hpbGRDb2x1bW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAwOThcclxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5jaGlsZENvbHVtbnMubGVuZ3RoID09PSAxICYmIHRoaXMuY2hpbGRDb2x1bW5zLmZpcnN0ID09PSB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0NvbERlZigpOiBDb2xEZWYge1xyXG4gICAgICAgIGxldCBjb2xEZWY6IENvbERlZiA9IHRoaXMuY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4odGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc0NoaWxkQ29sdW1ucygpKSB7XHJcbiAgICAgICAgICAgICg8YW55PmNvbERlZilbXCJjaGlsZHJlblwiXSA9IHRoaXMuZ2V0Q2hpbGRDb2xEZWZzKHRoaXMuY2hpbGRDb2x1bW5zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbERlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoaWxkQ29sRGVmcyhjaGlsZENvbHVtbnM6IFF1ZXJ5TGlzdDxBZ0dyaWRDaGFydHNDb2x1bW4+KSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29sdW1uc1xyXG4gICAgICAgICAgICAvLyBuZWNlc3NhcnkgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDA5OFxyXG4gICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiAhY29sdW1uLmhhc0NoaWxkQ29sdW1ucygpKVxyXG4gICAgICAgICAgICAubWFwKChjb2x1bW46IEFnR3JpZENoYXJ0c0NvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi50b0NvbERlZigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2xEZWZGcm9tR3JpZENvbHVtbihmcm9tOiBBZ0dyaWRDaGFydHNDb2x1bW4pOiBDb2xEZWYge1xyXG4gICAgICAgIGxldCB7IGNoaWxkQ29sdW1ucywgLi4uY29sRGVmIH0gPSBmcm9tO1xyXG4gICAgICAgIHJldHVybiBjb2xEZWY7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlucHV0cyAtIHByZXR0eSBtdWNoIG1vc3Qgb2YgQ29sRGVmLCB3aXRoIHRoZSBleGNlcHRpb24gb2YgdGVtcGxhdGUsIHRlbXBsYXRlVXJsIGFuZCBpbnRlcm5hbCBvbmx5IHByb3BlcnRpZXNcclxuICAgIC8vIEBTVEFSVEBcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGlsZHJlbjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHNvcnRpbmdPcmRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGFsbG93ZWRBZ2dGdW5jczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG1lbnVUYWJzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbENsYXNzUnVsZXM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpY29uczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRGcmFtZXdvcms6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJHcm91cENvbXBvbmVudFBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlclBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3JGcmFtZXdvcms6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yUGFyYW1zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyRnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyUGFyYW1zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyRnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyUGFyYW1zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29tcG9uZW50OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29tcG9uZW50UGFyYW1zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXJDb21wb25lbnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudFBhcmFtczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcENvbXBvbmVudDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBDb21wb25lbnRQYXJhbXM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVmRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtbnNNZW51UGFyYW1zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyTmFtZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtbkdyb3VwU2hvdzogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNsYXNzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbFBhbmVsQ2xhc3M6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJWYWx1ZUdldHRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xJZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHNvcnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsU29ydDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZpZWxkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdHlwZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBGaWVsZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlclRvb2x0aXA6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsQ2xhc3M6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Um93R3JvdXA6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsQWdnRnVuYzogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGFnZ0Z1bmM6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFBpbm5lZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNoYXJ0RGF0YVR5cGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0ZWRBdDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHNvcnRJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxTb3J0SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmbGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbEZsZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxXaWR0aDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG1pbldpZHRoOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWF4V2lkdGg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dHcm91cEluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFJvd0dyb3VwSW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdEluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFBpdm90SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkbmRTb3VyY2VPblJvd0RyYWc6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZUdldHRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlU2V0dGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyVmFsdWVHZXR0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBrZXlDcmVhdG9yOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyRnJhbWV3b3JrOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVGb3JtYXR0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWRSb3dWYWx1ZUZvcm1hdHRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlUGFyc2VyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY29tcGFyYXRvcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGVxdWFsczogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Q29tcGFyYXRvcjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzS2V5Ym9hcmRFdmVudDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzSGVhZGVyS2V5Ym9hcmRFdmVudDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbFNwYW46IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dTcGFuOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0UXVpY2tGaWx0ZXJUZXh0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbmV3VmFsdWVIYW5kbGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsVmFsdWVDaGFuZ2VkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsQ2xpY2tlZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbERvdWJsZUNsaWNrZWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkNlbGxDb250ZXh0TWVudTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0RyYWdUZXh0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFZhbHVlR2V0dGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyU2VsZWN0b3I6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yU2VsZWN0b3I6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NlbGxGbGFzaDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uc1Rvb2xQYW5lbDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRmlsdGVyc1Rvb2xQYW5lbDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIG9wZW5CeURlZmF1bHQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXJyeUNoaWxkcmVuOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGlkZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxIaWRlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93R3JvdXA6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsUm93R3JvdXA6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxQaXZvdDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGNoZWNrYm94U2VsZWN0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDaGVja2JveFNlbGVjdGlvbkZpbHRlcmVkT25seTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTWVudTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTW92YWJsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvY2tQb3NpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGxvY2tWaXNpYmxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9ja1Bpbm5lZDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHVuU29ydEljb246IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1NpemVUb0ZpdDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQXV0b1NpemU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVSb3dHcm91cDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVBpdm90OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlVmFsdWU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlZGl0YWJsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUGFzdGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc05hdmlnYWJsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNlbGxDaGFuZ2VGbGFzaDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHJvd0RyYWc6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkbmRTb3VyY2U6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBhdXRvSGVpZ2h0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgd3JhcFRleHQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0YWJsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHJlc2l6YWJsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIHNpbmdsZUNsaWNrRWRpdDogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyOiBhbnk7XHJcbiAgICAvLyBARU5EQFxyXG5cclxufVxyXG4iXX0=