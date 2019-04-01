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
var appSettings = require("tns-core-modules/application-settings");
var nativescript_angular_1 = require("nativescript-angular");
var SessionService = /** @class */ (function () {
    function SessionService(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    SessionService.prototype.isUserLoggedIn = function () {
        var sessionString = appSettings.getString('session');
        return sessionString && sessionString !== '';
    };
    SessionService.prototype.setSession = function (patient) {
        if (patient) {
            try {
                var sessionString = JSON.stringify(patient);
                appSettings.setString('session', sessionString);
            }
            catch (error) {
                console.log('SessionService', 'No se pudo guardar el usuario');
            }
        }
    };
    SessionService.prototype.getSession = function () {
        var sessionString = appSettings.getString('session');
        if (sessionString) {
            try {
                return JSON.parse(sessionString);
            }
            catch (error) {
                console.log('SessionService', 'No se pudo obtener el usuario');
                return null;
            }
        }
        return null;
    };
    SessionService.prototype.setLogin = function (patient) {
        if (patient) {
            try {
                var sessionString = JSON.stringify(patient);
                appSettings.setString('session', sessionString);
                if (appSettings.getString('session')) {
                    this.routerExtensions.navigate(['/home'], { clearHistory: true });
                }
            }
            catch (error) {
                console.log('SessionService', 'No se pudo realizar login de paciente');
            }
        }
    };
    SessionService.prototype.logOut = function () {
        appSettings.remove('session');
        this.routerExtensions.navigate(['/login'], { clearHistory: true, preserveFragment: false });
    };
    SessionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFxRTtBQUVyRSw2REFBd0Q7QUFLeEQ7SUFFRSx3QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELHVDQUFjLEdBQWQ7UUFDRSxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sYUFBYSxJQUFJLGFBQWEsS0FBSyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN6QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUk7Z0JBQ0YsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDakQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLCtCQUErQixDQUFDLENBQUE7YUFDL0Q7U0FDRjtJQUNILENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJO2dCQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNsQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsK0JBQStCLENBQUMsQ0FBQTtnQkFDOUQsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLE9BQWdCO1FBQ3ZCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSTtnQkFDRixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFaEQsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDbkU7YUFFRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsdUNBQXVDLENBQUMsQ0FBQzthQUN4RTtTQUNGO0lBQ0gsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBcERVLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR3NDLHVDQUFnQjtPQUYzQyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICd+L2FwcC9tb2RlbHMnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2Vzc2lvblN0cmluZyA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnc2Vzc2lvbicpO1xuICAgIHJldHVybiBzZXNzaW9uU3RyaW5nICYmIHNlc3Npb25TdHJpbmcgIT09ICcnO1xuICB9XG5cbiAgc2V0U2Vzc2lvbihwYXRpZW50OiBQYXRpZW50KSB7XG4gICAgaWYgKHBhdGllbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXRpZW50KTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdzZXNzaW9uJywgc2Vzc2lvblN0cmluZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvblNlcnZpY2UnLCAnTm8gc2UgcHVkbyBndWFyZGFyIGVsIHVzdWFyaW8nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlc3Npb24oKTogUGF0aWVudCB7XG4gICAgY29uc3Qgc2Vzc2lvblN0cmluZyA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnc2Vzc2lvbicpO1xuICAgIGlmIChzZXNzaW9uU3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RyaW5nKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uU2VydmljZScsICdObyBzZSBwdWRvIG9idGVuZXIgZWwgdXN1YXJpbycpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldExvZ2luKHBhdGllbnQ6IFBhdGllbnQpIHtcbiAgICBpZiAocGF0aWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhdGllbnQpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ3Nlc3Npb24nLCBzZXNzaW9uU3RyaW5nKTtcblxuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdzZXNzaW9uJykpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvblNlcnZpY2UnLCAnTm8gc2UgcHVkbyByZWFsaXphciBsb2dpbiBkZSBwYWNpZW50ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvZ091dCgpIHtcbiAgICBhcHBTZXR0aW5ncy5yZW1vdmUoJ3Nlc3Npb24nKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbG9naW4nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUsIHByZXNlcnZlRnJhZ21lbnQ6IGZhbHNlIH0pO1xuICB9XG5cbn1cbiJdfQ==