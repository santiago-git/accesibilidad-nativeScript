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
var session_service_1 = require("./session.service");
var MedicalEmergencyService = /** @class */ (function () {
    function MedicalEmergencyService(http, serviceUrlService, sessionService) {
        this.http = http;
        this.serviceUrlService = serviceUrlService;
        this.sessionService = sessionService;
        this.urlServices = serviceUrlService.getUrlService().urlServices;
        this.patient = sessionService.getSession();
    }
    MedicalEmergencyService.prototype.save = function (medicalEmergency) {
        var _this = this;
        return this.http.post(this.urlServices + 'medical-emergency/save', medicalEmergency)
            .pipe(operators_1.take(1), operators_1.map(function (reqRes) {
            return _this.resolveResponse(reqRes);
        }));
    };
    MedicalEmergencyService.prototype.getByPatientId = function () {
        var _this = this;
        this.patient = this.sessionService.getSession();
        return this.http.get(this.urlServices + 'medical-emergency/getByPatientId/' + this.patient.id)
            .pipe(operators_1.take(1), operators_1.map(function (reqRes) {
            return _this.resolveResponse(reqRes);
        }));
    };
    MedicalEmergencyService.prototype.resolveResponse = function (reqRes) {
        if (!reqRes.successful) {
            console.error('PatientService', reqRes.message);
            throw new Error(reqRes.message);
        }
        return reqRes.result;
    };
    MedicalEmergencyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            service_url_service_1.ServiceUrlService,
            session_service_1.SessionService])
    ], MedicalEmergencyService);
    return MedicalEmergencyService;
}());
exports.MedicalEmergencyService = MedicalEmergencyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhbC1lbWVyZ2VuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lZGljYWwtZW1lcmdlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBQ2xELDZEQUEwRDtBQUcxRCw0Q0FBMkM7QUFDM0MscURBQW1EO0FBS25EO0lBS0UsaUNBQW9CLElBQWdCLEVBQzFCLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUZwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQ0FBSSxHQUFKLFVBQUssZ0JBQWtDO1FBQXZDLGlCQUtDO1FBSkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBa0MsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQzthQUNsSCxJQUFJLENBQUMsZ0JBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ3ZCLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELGdEQUFjLEdBQWQ7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzlILElBQUksQ0FBQyxnQkFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQUcsQ0FBQyxVQUFBLE1BQU07WUFDdkIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU8saURBQWUsR0FBdkIsVUFBMkIsTUFBd0I7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQWpDVSx1QkFBdUI7UUFIbkMsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBTTBCLGlCQUFVO1lBQ1AsdUNBQWlCO1lBQ3BCLGdDQUFjO09BUDdCLHVCQUF1QixDQW1DbkM7SUFBRCw4QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZXJ2aWNlVXJsU2VydmljZSB9IGZyb20gJy4vc2VydmljZS11cmwuc2VydmljZSc7XG5pbXBvcnQgeyBNZWRpY2FsRW1lcmdlbmN5LCBQYXRpZW50IH0gZnJvbSAnfi9hcHAvbW9kZWxzJztcbmltcG9ydCB7IFJlcXVlc3RSZXN1bHQgfSBmcm9tICd+L2FwcC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHRha2UsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpY2FsRW1lcmdlbmN5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSB1cmxTZXJ2aWNlczogc3RyaW5nO1xuICBwcml2YXRlIHBhdGllbnQ6IFBhdGllbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgc2VydmljZVVybFNlcnZpY2U6IFNlcnZpY2VVcmxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7XG4gICAgdGhpcy51cmxTZXJ2aWNlcyA9IHNlcnZpY2VVcmxTZXJ2aWNlLmdldFVybFNlcnZpY2UoKS51cmxTZXJ2aWNlcztcbiAgICB0aGlzLnBhdGllbnQgPSBzZXNzaW9uU2VydmljZS5nZXRTZXNzaW9uKCk7XG4gIH1cblxuICBzYXZlKG1lZGljYWxFbWVyZ2VuY3k6IE1lZGljYWxFbWVyZ2VuY3kpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UmVxdWVzdFJlc3VsdDxNZWRpY2FsRW1lcmdlbmN5Pj4odGhpcy51cmxTZXJ2aWNlcyArICdtZWRpY2FsLWVtZXJnZW5jeS9zYXZlJywgbWVkaWNhbEVtZXJnZW5jeSlcbiAgICAgIC5waXBlKHRha2UoMSksIG1hcChyZXFSZXMgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlUmVzcG9uc2UocmVxUmVzKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGdldEJ5UGF0aWVudElkKCkge1xuICAgIHRoaXMucGF0aWVudCA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0U2Vzc2lvbigpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlcXVlc3RSZXN1bHQ8TWVkaWNhbEVtZXJnZW5jeVtdPj4odGhpcy51cmxTZXJ2aWNlcyArICdtZWRpY2FsLWVtZXJnZW5jeS9nZXRCeVBhdGllbnRJZC8nICsgdGhpcy5wYXRpZW50LmlkKVxuICAgICAgLnBpcGUodGFrZSgxKSwgbWFwKHJlcVJlcyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVSZXNwb25zZShyZXFSZXMpO1xuICAgICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlUmVzcG9uc2U8VD4ocmVxUmVzOiBSZXF1ZXN0UmVzdWx0PFQ+KSB7XG4gICAgaWYgKCFyZXFSZXMuc3VjY2Vzc2Z1bCkge1xuICAgICAgY29uc29sZS5lcnJvcignUGF0aWVudFNlcnZpY2UnLCByZXFSZXMubWVzc2FnZSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVxUmVzLm1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxUmVzLnJlc3VsdDtcbiAgfVxuXG59XG4iXX0=