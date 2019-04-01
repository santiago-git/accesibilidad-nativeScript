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
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var services_1 = require("~/app/services");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, routerExtensions, patientService, sessionService) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.patientService = patientService;
        this.sessionService = sessionService;
        this.isLoggingIn = true;
        this.credentials = {
            user: 'davidn@gmail.com',
            password: 'davidn@gmail.com'
        };
        this.processing = false;
        if (sessionService.getSession()) {
            this.routerExtensions.navigate(['/home'], { clearHistory: true });
        }
        this.page.actionBarHidden = true;
        // this.credentials = new Credentials();
        // this.credentials.user = "user@nativescript.org";
        // this.credentials.password = "password";
    }
    LoginComponent.prototype.toggleForm = function () {
        // this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        // console.log('redireccionar');
        // this.routerExtensions.navigate(['/home']);
        if (!this.credentials.user || !this.credentials.password) {
            this.alert('Por favor ingresa un usuario y contraseña.');
            return;
        }
        this.processing = true;
        this.patientService.login(this.credentials).subscribe(function (patient) {
            _this.sessionService.setLogin(patient);
            _this.processing = false;
        }, function (err) {
            _this.focusUser();
            _this.processing = false;
            alert(err);
        });
    };
    LoginComponent.prototype.focusUser = function () {
        this.user.nativeElement.focus();
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    LoginComponent.prototype.alert = function (message) {
        return alert({
            title: 'Accesibilidad móvil',
            okButtonText: 'Aceptar',
            message: message
        });
    };
    __decorate([
        core_1.ViewChild('user'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "user", void 0);
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild('confirmPassword'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "confirmPassword", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            services_1.PatientService,
            services_1.SessionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlFO0FBRWpFLHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsMkNBQWdFO0FBT2hFO0lBV0Usd0JBQW9CLElBQVUsRUFDcEIsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGNBQThCO1FBSHBCLFNBQUksR0FBSixJQUFJLENBQU07UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYnhDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO1FBQ0YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVNqQixJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyx3Q0FBd0M7UUFDeEMsbURBQW1EO1FBQ25ELDBDQUEwQztJQUM1QyxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNFLHdDQUF3QztJQUMxQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQWlCQztRQWhCQyxnQ0FBZ0M7UUFDaEMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUN6RCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUMzRCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0osS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sT0FBZTtRQUNuQixPQUFPLEtBQUssQ0FBQztZQUNYLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVEa0I7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQU8saUJBQVU7Z0RBQUM7SUFDYjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQUNkO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVOzJEQUFDO0lBVC9DLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FZMEIsV0FBSTtZQUNGLHlCQUFnQjtZQUNsQix5QkFBYztZQUNkLHlCQUFjO09BZDdCLGNBQWMsQ0FvRTFCO0lBQUQscUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDcmVkZW50aWFscyB9IGZyb20gJ34vYXBwL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UsIFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMgPSB7XG4gICAgdXNlcjogJ2RhdmlkbkBnbWFpbC5jb20nLFxuICAgIHBhc3N3b3JkOiAnZGF2aWRuQGdtYWlsLmNvbSdcbiAgfTtcbiAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd1c2VyJykgdXNlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGFzc3dvcmQnKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29uZmlybVBhc3N3b3JkJykgY29uZmlybVBhc3N3b3JkOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UpIHtcbiAgICBpZiAoc2Vzc2lvblNlcnZpY2UuZ2V0U2Vzc2lvbigpKSB7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgLy8gdGhpcy5jcmVkZW50aWFscyA9IG5ldyBDcmVkZW50aWFscygpO1xuICAgIC8vIHRoaXMuY3JlZGVudGlhbHMudXNlciA9IFwidXNlckBuYXRpdmVzY3JpcHQub3JnXCI7XG4gICAgLy8gdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcbiAgfVxuXG4gIHRvZ2dsZUZvcm0oKSB7XG4gICAgLy8gdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWRpcmVjY2lvbmFyJyk7XG4gICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgaWYgKCF0aGlzLmNyZWRlbnRpYWxzLnVzZXIgfHwgIXRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuYWxlcnQoJ1BvciBmYXZvciBpbmdyZXNhIHVuIHVzdWFyaW8geSBjb250cmFzZcOxYS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMucGF0aWVudFNlcnZpY2UubG9naW4odGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKHBhdGllbnQgPT4ge1xuICAgICAgdGhpcy5zZXNzaW9uU2VydmljZS5zZXRMb2dpbihwYXRpZW50KTtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIH0sIGVyciA9PiB7XG4gICAgICB0aGlzLmZvY3VzVXNlcigpO1xuICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9jdXNVc2VyKCkge1xuICAgIHRoaXMudXNlci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgIHRpdGxlOiAnQWNjZXNpYmlsaWRhZCBtw7N2aWwnLFxuICAgICAgb2tCdXR0b25UZXh0OiAnQWNlcHRhcicsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbn1cblxuIl19