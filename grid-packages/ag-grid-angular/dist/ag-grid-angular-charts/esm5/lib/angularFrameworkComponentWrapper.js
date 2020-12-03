import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { BaseComponentWrapper } from 'ag-grid-community-charts';
var AngularFrameworkComponentWrapper = /** @class */ (function (_super) {
    __extends(AngularFrameworkComponentWrapper, _super);
    function AngularFrameworkComponentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AngularFrameworkComponentWrapper.prototype.setViewContainerRef = function (viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    };
    AngularFrameworkComponentWrapper.prototype.setComponentFactoryResolver = function (componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    };
    AngularFrameworkComponentWrapper.prototype.createWrapper = function (OriginalConstructor) {
        var that = this;
        var DynamicAgNg2Component = /** @class */ (function (_super) {
            __extends(DynamicAgNg2Component, _super);
            function DynamicAgNg2Component() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DynamicAgNg2Component.prototype.init = function (params) {
                _super.prototype.init.call(this, params);
                this._componentRef.changeDetectorRef.detectChanges();
            };
            DynamicAgNg2Component.prototype.createComponent = function () {
                return that.createComponent(OriginalConstructor);
            };
            DynamicAgNg2Component.prototype.hasMethod = function (name) {
                return wrapper.getFrameworkComponentInstance()[name] != null;
            };
            DynamicAgNg2Component.prototype.callMethod = function (name, args) {
                var componentRef = this.getFrameworkComponentInstance();
                return wrapper.getFrameworkComponentInstance()[name].apply(componentRef, args);
            };
            DynamicAgNg2Component.prototype.addMethod = function (name, callback) {
                wrapper[name] = callback;
            };
            return DynamicAgNg2Component;
        }(BaseGuiComponent));
        var wrapper = new DynamicAgNg2Component();
        return wrapper;
    };
    AngularFrameworkComponentWrapper.prototype.createComponent = function (componentType) {
        // used to cache the factory, but this a) caused issues when used with either webpack/angularcli with --prod
        // but more significantly, the underlying implementation of resolveComponentFactory uses a map too, so us
        // caching the factory here yields no performance benefits
        var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        return this.viewContainerRef.createComponent(factory);
    };
    AngularFrameworkComponentWrapper = __decorate([
        Injectable()
    ], AngularFrameworkComponentWrapper);
    return AngularFrameworkComponentWrapper;
}(BaseComponentWrapper));
export { AngularFrameworkComponentWrapper };
var BaseGuiComponent = /** @class */ (function () {
    function BaseGuiComponent() {
    }
    BaseGuiComponent.prototype.init = function (params) {
        this._params = params;
        this._componentRef = this.createComponent();
        this._agAwareComponent = this._componentRef.instance;
        this._frameworkComponentInstance = this._componentRef.instance;
        this._eGui = this._componentRef.location.nativeElement;
        this._agAwareComponent.agInit(this._params);
    };
    BaseGuiComponent.prototype.getGui = function () {
        return this._eGui;
    };
    BaseGuiComponent.prototype.destroy = function () {
        if (this._componentRef) {
            this._componentRef.destroy();
        }
    };
    BaseGuiComponent.prototype.getFrameworkComponentInstance = function () {
        return this._frameworkComponentInstance;
    };
    return BaseGuiComponent;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZy1ncmlkLWFuZ3VsYXItY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXlDLFVBQVUsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFDLG9CQUFvQixFQUErQyxNQUFNLDBCQUEwQixDQUFDO0FBSTVHO0lBQXNELG9EQUF1QztJQUE3Rjs7SUFtREEsQ0FBQztJQS9DVSw4REFBbUIsR0FBMUIsVUFBMkIsZ0JBQWtDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBRU0sc0VBQTJCLEdBQWxDLFVBQW1DLHdCQUFrRDtRQUNqRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7SUFDN0QsQ0FBQztJQUVELHdEQUFhLEdBQWIsVUFBYyxtQkFBbUM7UUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCO1lBQW9DLHlDQUFnRDtZQUFwRjs7WUF1QkEsQ0FBQztZQXRCRyxvQ0FBSSxHQUFKLFVBQUssTUFBVztnQkFDWixpQkFBTSxJQUFJLFlBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekQsQ0FBQztZQUVTLCtDQUFlLEdBQXpCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFFRCx5Q0FBUyxHQUFULFVBQVUsSUFBWTtnQkFDbEIsT0FBTyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDakUsQ0FBQztZQUVELDBDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBZ0I7Z0JBQ3JDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO2dCQUMxRCxPQUFPLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFbEYsQ0FBQztZQUVELHlDQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsUUFBa0I7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUE7WUFDNUIsQ0FBQztZQUNMLDRCQUFDO1FBQUQsQ0FBQyxBQXZCRCxDQUFvQyxnQkFBZ0IsR0F1Qm5EO1FBRUQsSUFBSSxPQUFPLEdBQTBCLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUNqRSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sMERBQWUsR0FBdEIsVUFBMEIsYUFBMEM7UUFDaEUsNEdBQTRHO1FBQzVHLHlHQUF5RztRQUN6RywwREFBMEQ7UUFDMUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBbERRLGdDQUFnQztRQUQ1QyxVQUFVLEVBQUU7T0FDQSxnQ0FBZ0MsQ0FtRDVDO0lBQUQsdUNBQUM7Q0FBQSxBQW5ERCxDQUFzRCxvQkFBb0IsR0FtRHpFO1NBbkRZLGdDQUFnQztBQXFEN0M7SUFBQTtJQWlDQSxDQUFDO0lBMUJhLCtCQUFJLEdBQWQsVUFBZSxNQUFTO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFTSx3REFBNkIsR0FBcEM7UUFDSSxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUM1QyxDQUFDO0lBR0wsdUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCYXNlQ29tcG9uZW50V3JhcHBlciwgRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlciwgV3JhcGFibGVJbnRlcmZhY2V9IGZyb20gJ2FnLWdyaWQtY29tbXVuaXR5LWNoYXJ0cyc7XHJcbmltcG9ydCB7QWdGcmFtZXdvcmtDb21wb25lbnR9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdyYXBwZXI8V3JhcGFibGVJbnRlcmZhY2U+IGltcGxlbWVudHMgRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlciB7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICAgIHB1YmxpYyBzZXRWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYgPSB2aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXcmFwcGVyKE9yaWdpbmFsQ29uc3RydWN0b3I6IHsgbmV3KCk6IGFueSB9KTogV3JhcGFibGVJbnRlcmZhY2Uge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY2xhc3MgRHluYW1pY0FnTmcyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUd1aUNvbXBvbmVudDxhbnksIEFnRnJhbWV3b3JrQ29tcG9uZW50PGFueT4+IGltcGxlbWVudHMgV3JhcGFibGVJbnRlcmZhY2Uge1xyXG4gICAgICAgICAgICBpbml0KHBhcmFtczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5pbml0KHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxBZ0ZyYW1ld29ya0NvbXBvbmVudDxhbnk+PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5jcmVhdGVDb21wb25lbnQoT3JpZ2luYWxDb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhc01ldGhvZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmdldEZyYW1ld29ya0NvbXBvbmVudEluc3RhbmNlKClbbmFtZV0gIT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FsbE1ldGhvZChuYW1lOiBzdHJpbmcsIGFyZ3M6IElBcmd1bWVudHMpOiB2b2lkIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0RnJhbWV3b3JrQ29tcG9uZW50SW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmdldEZyYW1ld29ya0NvbXBvbmVudEluc3RhbmNlKClbbmFtZV0uYXBwbHkoY29tcG9uZW50UmVmLCBhcmdzKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkTWV0aG9kKG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyW25hbWVdID0gY2FsbGJhY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdyYXBwZXI6IER5bmFtaWNBZ05nMkNvbXBvbmVudCA9IG5ldyBEeW5hbWljQWdOZzJDb21wb25lbnQoKTtcclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudFR5cGU6IHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogVDsgfSk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICAgICAgLy8gdXNlZCB0byBjYWNoZSB0aGUgZmFjdG9yeSwgYnV0IHRoaXMgYSkgY2F1c2VkIGlzc3VlcyB3aGVuIHVzZWQgd2l0aCBlaXRoZXIgd2VicGFjay9hbmd1bGFyY2xpIHdpdGggLS1wcm9kXHJcbiAgICAgICAgLy8gYnV0IG1vcmUgc2lnbmlmaWNhbnRseSwgdGhlIHVuZGVybHlpbmcgaW1wbGVtZW50YXRpb24gb2YgcmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkgdXNlcyBhIG1hcCB0b28sIHNvIHVzXHJcbiAgICAgICAgLy8gY2FjaGluZyB0aGUgZmFjdG9yeSBoZXJlIHlpZWxkcyBubyBwZXJmb3JtYW5jZSBiZW5lZml0c1xyXG4gICAgICAgIGxldCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFic3RyYWN0IGNsYXNzIEJhc2VHdWlDb21wb25lbnQ8UCwgVCBleHRlbmRzIEFnRnJhbWV3b3JrQ29tcG9uZW50PFA+PiB7XHJcbiAgICBwcm90ZWN0ZWQgX3BhcmFtczogUDtcclxuICAgIHByb3RlY3RlZCBfZUd1aTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xyXG4gICAgcHJvdGVjdGVkIF9hZ0F3YXJlQ29tcG9uZW50OiBUO1xyXG4gICAgcHJvdGVjdGVkIF9mcmFtZXdvcmtDb21wb25lbnRJbnN0YW5jZTogYW55OyAgLy8gdGhlIHVzZXJzIGNvbXBvbmVudCAtIGZvciBhY2Nlc3NpbmcgbWV0aG9kcyB0aGV5IGNyZWF0ZVxyXG5cclxuICAgIHByb3RlY3RlZCBpbml0KHBhcmFtczogUCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB0aGlzLl9hZ0F3YXJlQ29tcG9uZW50ID0gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1ld29ya0NvbXBvbmVudEluc3RhbmNlID0gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuX2VHdWkgPSB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fYWdBd2FyZUNvbXBvbmVudC5hZ0luaXQodGhpcy5fcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R3VpKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZUd1aTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGcmFtZXdvcmtDb21wb25lbnRJbnN0YW5jZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mcmFtZXdvcmtDb21wb25lbnRJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxUPjtcclxufVxyXG4iXX0=