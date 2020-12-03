import { __decorate, __extends, __metadata } from "tslib";
import { Injectable, NgZone } from "@angular/core";
import { VanillaFrameworkOverrides } from "ag-grid-community-charts";
var AngularFrameworkOverrides = /** @class */ (function (_super) {
    __extends(AngularFrameworkOverrides, _super);
    function AngularFrameworkOverrides(_ngZone) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        return _this;
    }
    AngularFrameworkOverrides.prototype.setTimeout = function (action, timeout) {
        this._ngZone.runOutsideAngular(function () {
            window.setTimeout(function () {
                action();
            }, timeout);
        });
    };
    AngularFrameworkOverrides.prototype.addEventListenerOutsideAngular = function (element, type, listener, useCapture) {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _super.prototype.addEventListenerOutsideAngular.call(_this, element, type, listener, useCapture);
        });
    };
    AngularFrameworkOverrides.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    AngularFrameworkOverrides = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgZone])
    ], AngularFrameworkOverrides);
    return AngularFrameworkOverrides;
}(VanillaFrameworkOverrides));
export { AngularFrameworkOverrides };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckZyYW1ld29ya092ZXJyaWRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnLWdyaWQtYW5ndWxhci1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhckZyYW1ld29ya092ZXJyaWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFHbkU7SUFBK0MsNkNBQXlCO0lBQ3BFLG1DQUFvQixPQUFlO1FBQW5DLFlBQ0ksaUJBQU8sU0FDVjtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFROztJQUVuQyxDQUFDO0lBRU0sOENBQVUsR0FBakIsVUFBa0IsTUFBVyxFQUFFLE9BQWE7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ2IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtFQUE4QixHQUE5QixVQUErQixPQUFvQixFQUFFLElBQVksRUFBRSxRQUE2QyxFQUFFLFVBQW9CO1FBQXRJLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixpQkFBTSw4QkFBOEIsYUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQWhCNEIsTUFBTTs7SUFEMUIseUJBQXlCO1FBRHJDLFVBQVUsRUFBRTt5Q0FFb0IsTUFBTTtPQUQxQix5QkFBeUIsQ0FrQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWxCRCxDQUErQyx5QkFBeUIsR0FrQnZFO1NBbEJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1ZhbmlsbGFGcmFtZXdvcmtPdmVycmlkZXN9IGZyb20gXCJhZy1ncmlkLWNvbW11bml0eS1jaGFydHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGcmFtZXdvcmtPdmVycmlkZXMgZXh0ZW5kcyBWYW5pbGxhRnJhbWV3b3JrT3ZlcnJpZGVzIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGltZW91dChhY3Rpb246IGFueSwgdGltZW91dD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyT3V0c2lkZUFuZ3VsYXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIgfCBFdmVudExpc3RlbmVyT2JqZWN0LCB1c2VDYXB0dXJlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXJPdXRzaWRlQW5ndWxhcihlbGVtZW50LCB0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19