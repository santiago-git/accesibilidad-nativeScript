"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var service_url_service_1 = require("./service-url.service");
var PatientService = /** @class */ (function () {
    function PatientService(http, serviceUrlService) {
        this.http = http;
        this.serviceUrlService = serviceUrlService;
        this.urlServices = serviceUrlService.getUrlService().urlServices;
    }
    PatientService.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post(this.urlServices + 'patient/login', credentials).pipe(operators_1.take(1), operators_1.map(function (reqRes) {
            return _this.resolveResponse(reqRes);
        }));
    };
    PatientService.prototype.resolveResponse = function (reqRes) {
        if (!reqRes.successful) {
            console.error('PatientService', reqRes.message);
            throw new Error(reqRes.message);
        }
        return reqRes.result;
    };
    PatientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, service_url_service_1.ServiceUrlService])
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUVsRCw0Q0FBMkM7QUFDM0MsNkRBQTBEO0FBTTFEO0lBSUUsd0JBQW9CLElBQWdCLEVBQVUsaUJBQW9DO1FBQTlELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2hGLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQ25FLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sV0FBd0I7UUFBOUIsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF5QixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ3JILE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLHdDQUFlLEdBQXZCLFVBQTJCLE1BQXdCO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFwQlUsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLMEIsaUJBQVUsRUFBNkIsdUNBQWlCO09BSnZFLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDcmVkZW50aWFscywgUmVxdWVzdFJlc3VsdCB9IGZyb20gJ34vYXBwL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgdGFrZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VydmljZVVybFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UtdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJ34vYXBwL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhdGllbnRTZXJ2aWNlIHtcblxuICBwcml2YXRlIHVybFNlcnZpY2VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHNlcnZpY2VVcmxTZXJ2aWNlOiBTZXJ2aWNlVXJsU2VydmljZSkge1xuICAgIHRoaXMudXJsU2VydmljZXMgPSBzZXJ2aWNlVXJsU2VydmljZS5nZXRVcmxTZXJ2aWNlKCkudXJsU2VydmljZXM7XG4gIH1cblxuICBsb2dpbihjcmVkZW50aWFsczogQ3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmVxdWVzdFJlc3VsdDxQYXRpZW50Pj4odGhpcy51cmxTZXJ2aWNlcyArICdwYXRpZW50L2xvZ2luJywgY3JlZGVudGlhbHMpLnBpcGUodGFrZSgxKSwgbWFwKHJlcVJlcyA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZlUmVzcG9uc2UocmVxUmVzKTtcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVSZXNwb25zZTxUPihyZXFSZXM6IFJlcXVlc3RSZXN1bHQ8VD4pIHtcbiAgICBpZiAoIXJlcVJlcy5zdWNjZXNzZnVsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQYXRpZW50U2VydmljZScsIHJlcVJlcy5tZXNzYWdlKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXFSZXMubWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiByZXFSZXMucmVzdWx0O1xuICB9XG5cbn1cbiJdfQ==