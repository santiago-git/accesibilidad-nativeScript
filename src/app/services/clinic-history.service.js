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
var session_service_1 = require("./session.service");
var operators_1 = require("rxjs/operators");
var ClinicHistoryService = /** @class */ (function () {
    function ClinicHistoryService(http, serviceUrlService, sessionService) {
        this.http = http;
        this.serviceUrlService = serviceUrlService;
        this.sessionService = sessionService;
        this.urlServices = serviceUrlService.getUrlService().urlServices;
        this.patient = sessionService.getSession();
    }
    ClinicHistoryService.prototype.get = function () {
        var _this = this;
        return this.http.get(this.urlServices + 'clinic-history/getByPatientId/' + this.patient.id).pipe(operators_1.take(1), operators_1.map(function (reqRes) {
            return _this.resolveResponse(reqRes);
        }));
    };
    ClinicHistoryService.prototype.resolveResponse = function (reqRes) {
        if (!reqRes.successful) {
            console.error('PatientService', reqRes.message);
            throw new Error(reqRes.message);
        }
        return reqRes.result;
    };
    ClinicHistoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            service_url_service_1.ServiceUrlService,
            session_service_1.SessionService])
    ], ClinicHistoryService);
    return ClinicHistoryService;
}());
exports.ClinicHistoryService = ClinicHistoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpbmljLWhpc3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaW5pYy1oaXN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQWtEO0FBQ2xELDZEQUEwRDtBQUMxRCxxREFBbUQ7QUFDbkQsNENBQTJDO0FBTTNDO0lBS0UsOEJBQW9CLElBQWdCLEVBQzFCLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUZwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxrQ0FBRyxHQUFIO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBRyxDQUFDLFVBQUEsTUFBTTtZQUNsSixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTyw4Q0FBZSxHQUF2QixVQUEyQixNQUF3QjtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBeEJVLG9CQUFvQjtRQUhoQyxpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FNMEIsaUJBQVU7WUFDUCx1Q0FBaUI7WUFDcEIsZ0NBQWM7T0FQN0Isb0JBQW9CLENBeUJoQztJQUFELDJCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGF0aWVudCwgQ2xpbmljSGlzdG9yeSB9IGZyb20gJ34vYXBwL21vZGVscyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2VydmljZVVybFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UtdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXF1ZXN0UmVzdWx0IH0gZnJvbSAnfi9hcHAvaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENsaW5pY0hpc3RvcnlTZXJ2aWNlIHtcblxuICBwcml2YXRlIHVybFNlcnZpY2VzOiBzdHJpbmc7XG4gIHByaXZhdGUgcGF0aWVudDogUGF0aWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlVXJsU2VydmljZTogU2VydmljZVVybFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UpIHtcbiAgICB0aGlzLnVybFNlcnZpY2VzID0gc2VydmljZVVybFNlcnZpY2UuZ2V0VXJsU2VydmljZSgpLnVybFNlcnZpY2VzO1xuICAgIHRoaXMucGF0aWVudCA9IHNlc3Npb25TZXJ2aWNlLmdldFNlc3Npb24oKTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZXF1ZXN0UmVzdWx0PENsaW5pY0hpc3RvcnlbXT4+KHRoaXMudXJsU2VydmljZXMgKyAnY2xpbmljLWhpc3RvcnkvZ2V0QnlQYXRpZW50SWQvJyArIHRoaXMucGF0aWVudC5pZCkucGlwZSh0YWtlKDEpLCBtYXAocmVxUmVzID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmVSZXNwb25zZShyZXFSZXMpO1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVJlc3BvbnNlPFQ+KHJlcVJlczogUmVxdWVzdFJlc3VsdDxUPikge1xuICAgIGlmICghcmVxUmVzLnN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhdGllbnRTZXJ2aWNlJywgcmVxUmVzLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcVJlcy5tZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcVJlcy5yZXN1bHQ7XG4gIH1cbn1cbiJdfQ==