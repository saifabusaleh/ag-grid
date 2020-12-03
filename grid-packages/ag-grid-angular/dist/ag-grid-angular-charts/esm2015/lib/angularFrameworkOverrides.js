import { __decorate, __metadata } from "tslib";
import { Injectable, NgZone } from "@angular/core";
import { VanillaFrameworkOverrides } from "ag-grid-community-charts";
let AngularFrameworkOverrides = class AngularFrameworkOverrides extends VanillaFrameworkOverrides {
    constructor(_ngZone) {
        super();
        this._ngZone = _ngZone;
    }
    setTimeout(action, timeout) {
        this._ngZone.runOutsideAngular(() => {
            window.setTimeout(() => {
                action();
            }, timeout);
        });
    }
    addEventListenerOutsideAngular(element, type, listener, useCapture) {
        this._ngZone.runOutsideAngular(() => {
            super.addEventListenerOutsideAngular(element, type, listener, useCapture);
        });
    }
};
AngularFrameworkOverrides.ctorParameters = () => [
    { type: NgZone }
];
AngularFrameworkOverrides = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgZone])
], AngularFrameworkOverrides);
export { AngularFrameworkOverrides };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckZyYW1ld29ya092ZXJyaWRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnLWdyaWQtYW5ndWxhci1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhckZyYW1ld29ya092ZXJyaWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFHbkUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSx5QkFBeUI7SUFDcEUsWUFBb0IsT0FBZTtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQURRLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFbkMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxNQUFXLEVBQUUsT0FBYTtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDbkIsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQThCLENBQUMsT0FBb0IsRUFBRSxJQUFZLEVBQUUsUUFBNkMsRUFBRSxVQUFvQjtRQUNsSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNoQyxLQUFLLENBQUMsOEJBQThCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTs7WUFqQmdDLE1BQU07O0FBRDFCLHlCQUF5QjtJQURyQyxVQUFVLEVBQUU7cUNBRW9CLE1BQU07R0FEMUIseUJBQXlCLENBa0JyQztTQWxCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtWYW5pbGxhRnJhbWV3b3JrT3ZlcnJpZGVzfSBmcm9tIFwiYWctZ3JpZC1jb21tdW5pdHktY2hhcnRzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRnJhbWV3b3JrT3ZlcnJpZGVzIGV4dGVuZHMgVmFuaWxsYUZyYW1ld29ya092ZXJyaWRlcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRpbWVvdXQoYWN0aW9uOiBhbnksIHRpbWVvdXQ/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lck91dHNpZGVBbmd1bGFyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyIHwgRXZlbnRMaXN0ZW5lck9iamVjdCwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdXBlci5hZGRFdmVudExpc3RlbmVyT3V0c2lkZUFuZ3VsYXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==