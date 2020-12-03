import {ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule} from '@angular/core';

import {AgGridChartsAngular} from './ag-grid-angular-charts.component';
import {AgGridChartsColumn} from './ag-grid-charts-column.component';

@NgModule({
    declarations: [AgGridChartsAngular, AgGridChartsColumn],
    imports: [],
    exports: [AgGridChartsAngular, AgGridChartsColumn]
})
export class AgGridChartsModule {
    static withComponents(components?: any): ModuleWithProviders<any> {
        return {
            ngModule: AgGridChartsModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ],
        };
    }

    static forRoot(components?: any): ModuleWithProviders<any> {
        return {
            ngModule: AgGridChartsModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ],
        };
    }

}
