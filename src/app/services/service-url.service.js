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
var appSettings = require("tns-core-modules/application-settings");
var ServiceUrlService = /** @class */ (function () {
    function ServiceUrlService(http) {
        this.http = http;
        this.servicesUrl = {
            urlServices: 'https://accesibilidad-back-end.herokuapp.com/',
            urlSocket: 'https://accesibilidad-back-end.herokuapp.com/'
        };
    }
    ServiceUrlService.prototype.setUrlLS = function () {
        var urlService = appSettings.getString('urlService');
        // if (!urlService) {
        //   this.getUrlsFromAssets().subscribe(urls => {
        //     console.log(urls)
        //     appSettings.setString('urlService', urls.urlServices);
        //   })
        // }
    };
    ServiceUrlService.prototype.getUrlService = function () {
        return this.servicesUrl;
        // return appSettings.getString('urlService');
    };
    ServiceUrlService.prototype.getUrlsFromAssets = function () {
        return this.http.get('assets/config.json').pipe(operators_1.take(1));
    };
    ServiceUrlService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ServiceUrlService);
    return ServiceUrlService;
}());
exports.ServiceUrlService = ServiceUrlService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS11cmwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UtdXJsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELDRDQUFzQztBQUN0QyxtRUFBcUU7QUFLckU7SUFPRSwyQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUw1QixnQkFBVyxHQUFlO1lBQ2hDLFdBQVcsRUFBRSwrQ0FBK0M7WUFDNUQsU0FBUyxFQUFFLCtDQUErQztTQUMzRCxDQUFBO0lBRXVDLENBQUM7SUFFekMsb0NBQVEsR0FBUjtRQUNFLElBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQscUJBQXFCO1FBQ3JCLGlEQUFpRDtRQUNqRCx3QkFBd0I7UUFDeEIsNkRBQTZEO1FBQzdELE9BQU87UUFDUCxJQUFJO0lBQ04sQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEIsOENBQThDO0lBQ2hELENBQUM7SUFFTyw2Q0FBaUIsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBMUJVLGlCQUFpQjtRQUg3QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FRMEIsaUJBQVU7T0FQekIsaUJBQWlCLENBNEI3QjtJQUFELHdCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNlcnZpY2VVcmwgfSBmcm9tICd+L2FwcC9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlVXJsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzZXJ2aWNlc1VybDogU2VydmljZVVybCA9IHtcbiAgICB1cmxTZXJ2aWNlczogJ2h0dHBzOi8vYWNjZXNpYmlsaWRhZC1iYWNrLWVuZC5oZXJva3VhcHAuY29tLycsXG4gICAgdXJsU29ja2V0OiAnaHR0cHM6Ly9hY2Nlc2liaWxpZGFkLWJhY2stZW5kLmhlcm9rdWFwcC5jb20vJ1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBzZXRVcmxMUygpIHtcbiAgICBjb25zdCB1cmxTZXJ2aWNlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1cmxTZXJ2aWNlJyk7XG4gICAgLy8gaWYgKCF1cmxTZXJ2aWNlKSB7XG4gICAgLy8gICB0aGlzLmdldFVybHNGcm9tQXNzZXRzKCkuc3Vic2NyaWJlKHVybHMgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh1cmxzKVxuICAgIC8vICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ3VybFNlcnZpY2UnLCB1cmxzLnVybFNlcnZpY2VzKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0VXJsU2VydmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc1VybDtcbiAgICAvLyByZXR1cm4gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd1cmxTZXJ2aWNlJyk7XG4gIH1cblxuICBwcml2YXRlIGdldFVybHNGcm9tQXNzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFNlcnZpY2VVcmw+KCdhc3NldHMvY29uZmlnLmpzb24nKS5waXBlKHRha2UoMSkpO1xuICB9XG5cbn1cbiJdfQ==