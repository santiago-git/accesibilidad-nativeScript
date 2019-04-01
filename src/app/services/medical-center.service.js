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
var service_url_service_1 = require("./service-url.service");
var operators_1 = require("rxjs/operators");
var MedicalCenterService = /** @class */ (function () {
    function MedicalCenterService(http, serviceUrlService) {
        this.http = http;
        this.serviceUrlService = serviceUrlService;
        this.urlServices = serviceUrlService.getUrlService().urlServices;
    }
    MedicalCenterService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.urlServices + 'medical-center/getall').pipe(operators_1.take(1), operators_1.map(function (reqRes) {
            return _this.resolveResponse(reqRes);
        }));
    };
    MedicalCenterService.prototype.resolveResponse = function (reqRes) {
        if (!reqRes.successful) {
            console.error('PatientService', reqRes.message);
            throw new Error(reqRes.message);
        }
        return reqRes.result;
    };
    MedicalCenterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, service_url_service_1.ServiceUrlService])
    ], MedicalCenterService);
    return MedicalCenterService;
}());
exports.MedicalCenterService = MedicalCenterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhbC1jZW50ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lZGljYWwtY2VudGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBQ2xELDZEQUEwRDtBQUcxRCw0Q0FBMkM7QUFLM0M7SUFJRSw4QkFBb0IsSUFBZ0IsRUFBVSxpQkFBb0M7UUFBOUQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDaEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDbkUsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlDLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ3ZILE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLDhDQUFlLEdBQXZCLFVBQTJCLE1BQXdCO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFwQlUsb0JBQW9CO1FBSGhDLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUswQixpQkFBVSxFQUE2Qix1Q0FBaUI7T0FKdkUsb0JBQW9CLENBcUJoQztJQUFELDJCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNlcnZpY2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlLXVybC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcXVlc3RSZXN1bHQgfSBmcm9tICd+L2FwcC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE1lZGljYWxDZW50ZXIgfSBmcm9tICd+L2FwcC9tb2RlbHMnO1xuaW1wb3J0IHsgdGFrZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpY2FsQ2VudGVyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSB1cmxTZXJ2aWNlczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzZXJ2aWNlVXJsU2VydmljZTogU2VydmljZVVybFNlcnZpY2UpIHtcbiAgICB0aGlzLnVybFNlcnZpY2VzID0gc2VydmljZVVybFNlcnZpY2UuZ2V0VXJsU2VydmljZSgpLnVybFNlcnZpY2VzO1xuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlcXVlc3RSZXN1bHQ8TWVkaWNhbENlbnRlcltdPj4odGhpcy51cmxTZXJ2aWNlcyArICdtZWRpY2FsLWNlbnRlci9nZXRhbGwnKS5waXBlKHRha2UoMSksIG1hcChyZXFSZXMgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZVJlc3BvbnNlKHJlcVJlcyk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlUmVzcG9uc2U8VD4ocmVxUmVzOiBSZXF1ZXN0UmVzdWx0PFQ+KSB7XG4gICAgaWYgKCFyZXFSZXMuc3VjY2Vzc2Z1bCkge1xuICAgICAgY29uc29sZS5lcnJvcignUGF0aWVudFNlcnZpY2UnLCByZXFSZXMubWVzc2FnZSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVxUmVzLm1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxUmVzLnJlc3VsdDtcbiAgfVxufVxuIl19