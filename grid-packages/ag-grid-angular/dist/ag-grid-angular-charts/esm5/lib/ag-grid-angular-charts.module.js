import { __decorate } from "tslib";
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { AgGridChartsAngular } from './ag-grid-angular-charts.component';
import { AgGridChartsColumn } from './ag-grid-charts-column.component';
var AgGridChartsModule = /** @class */ (function () {
    function AgGridChartsModule() {
    }
    AgGridChartsModule_1 = AgGridChartsModule;
    AgGridChartsModule.withComponents = function (components) {
        return {
            ngModule: AgGridChartsModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    };
    AgGridChartsModule.forRoot = function (components) {
        return {
            ngModule: AgGridChartsModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    };
    var AgGridChartsModule_1;
    AgGridChartsModule = AgGridChartsModule_1 = __decorate([
        NgModule({
            declarations: [AgGridChartsAngular, AgGridChartsColumn],
            imports: [],
            exports: [AgGridChartsAngular, AgGridChartsColumn]
        })
    ], AgGridChartsModule);
    return AgGridChartsModule;
}());
export { AgGridChartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLWNoYXJ0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZy1ncmlkLWFuZ3VsYXItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2FnLWdyaWQtYW5ndWxhci1jaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsNEJBQTRCLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQU9yRTtJQUFBO0lBbUJBLENBQUM7MkJBbkJZLGtCQUFrQjtJQUNwQixpQ0FBYyxHQUFyQixVQUFzQixVQUFnQjtRQUNsQyxPQUFPO1lBQ0gsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO2FBQzdFO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFTSwwQkFBTyxHQUFkLFVBQWUsVUFBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSxvQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNQLEVBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQzthQUM3RTtTQUNKLENBQUM7SUFDTixDQUFDOztJQWpCUSxrQkFBa0I7UUFMOUIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7WUFDdkQsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQztTQUNyRCxDQUFDO09BQ1csa0JBQWtCLENBbUI5QjtJQUFELHlCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0FnR3JpZENoYXJ0c0FuZ3VsYXJ9IGZyb20gJy4vYWctZ3JpZC1hbmd1bGFyLWNoYXJ0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FnR3JpZENoYXJ0c0NvbHVtbn0gZnJvbSAnLi9hZy1ncmlkLWNoYXJ0cy1jb2x1bW4uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBZ0dyaWRDaGFydHNBbmd1bGFyLCBBZ0dyaWRDaGFydHNDb2x1bW5dLFxyXG4gICAgaW1wb3J0czogW10sXHJcbiAgICBleHBvcnRzOiBbQWdHcmlkQ2hhcnRzQW5ndWxhciwgQWdHcmlkQ2hhcnRzQ29sdW1uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdHcmlkQ2hhcnRzTW9kdWxlIHtcclxuICAgIHN0YXRpYyB3aXRoQ29tcG9uZW50cyhjb21wb25lbnRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQWdHcmlkQ2hhcnRzTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29tcG9uZW50cywgbXVsdGk6IHRydWV9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZm9yUm9vdChjb21wb25lbnRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQWdHcmlkQ2hhcnRzTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29tcG9uZW50cywgbXVsdGk6IHRydWV9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19