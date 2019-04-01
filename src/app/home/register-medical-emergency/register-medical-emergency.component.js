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
var nativescript_geolocation_1 = require("nativescript-geolocation");
var geolocation = require("nativescript-geolocation");
var models_1 = require("~/app/models");
var services_1 = require("~/app/services");
var RegisterMedicalEmergencyComponent = /** @class */ (function () {
    function RegisterMedicalEmergencyComponent(sessionService, medicalEmergencyService) {
        this.sessionService = sessionService;
        this.medicalEmergencyService = medicalEmergencyService;
        this.message = 'Aquí podras reportar una emergencia en caso de accidentalidad';
        this.processing = false;
        this.session = sessionService.getSession();
        this.medicalEmergency = new models_1.MedicalEmergency(this.session.id, '', 0, 0);
        this.getLocation();
        // this.enableLocation();
    }
    RegisterMedicalEmergencyComponent.prototype.ngOnInit = function () { };
    RegisterMedicalEmergencyComponent.prototype.enableLocation = function () {
        geolocation.isEnabled().then(function (isEnabled) {
            if (!isEnabled) {
                geolocation.enableLocationRequest().then(function () {
                }, function (e) {
                    console.log('Error: ' + (e.message || e));
                });
            }
            this.getLocation();
        }, function (e) {
            console.log('Error: ' + (e.message || e));
        });
    };
    RegisterMedicalEmergencyComponent.prototype.getLocation = function () {
        var _this = this;
        if (this.myLocation) {
            return Promise.resolve(this.myLocation);
        }
        return nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
            then(function (location) {
            if (location) {
                _this.myLocation = location;
                return location;
            }
        });
    };
    RegisterMedicalEmergencyComponent.prototype.createMedicalEmergency = function () {
        var _this = this;
        // validaciones
        if (!this.medicalEmergency.patient_description || this.medicalEmergency.patient_description.trim() === '') {
            this.alert('Debes ingresar una descipción válida');
            this.patient_description.nativeElement.focus();
            return;
        }
        this.processing = true;
        this.getLocation().then(function (coords) {
            _this.medicalEmergency.coordLat = coords.latitude;
            _this.medicalEmergency.coordLong = coords.longitude;
            _this.medicalEmergencyService.save(_this.medicalEmergency).subscribe(function (medicalEmergency) {
                _this.alert('La emergencia se ha reportado satisfactoriamente');
                _this.processing = false;
            }, function (err) {
                _this.processing = false;
                alert(err);
            });
        });
    };
    RegisterMedicalEmergencyComponent.prototype.goBack = function () { };
    RegisterMedicalEmergencyComponent.prototype.logout = function () {
        this.sessionService.logOut();
    };
    RegisterMedicalEmergencyComponent.prototype.alert = function (message) {
        return alert({
            title: 'Accesibilidad móvil',
            okButtonText: 'Aceptar',
            message: message
        });
    };
    __decorate([
        core_1.ViewChild('patient_description'),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterMedicalEmergencyComponent.prototype, "patient_description", void 0);
    RegisterMedicalEmergencyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register-medical-emergency',
            templateUrl: './register-medical-emergency.component.html',
            styleUrls: ['./register-medical-emergency.component.scss']
        }),
        __metadata("design:paramtypes", [services_1.SessionService,
            services_1.MedicalEmergencyService])
    ], RegisterMedicalEmergencyComponent);
    return RegisterMedicalEmergencyComponent;
}());
exports.RegisterMedicalEmergencyComponent = RegisterMedicalEmergencyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItbWVkaWNhbC1lbWVyZ2VuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXItbWVkaWNhbC1lbWVyZ2VuY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlFO0FBQ3pFLHFFQUF3RTtBQUN4RSxzREFBd0Q7QUFDeEQsdUNBQXlEO0FBQ3pELDJDQUF5RTtBQVF6RTtJQVNFLDJDQUFvQixjQUE4QixFQUN4Qyx1QkFBZ0Q7UUFEdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFSMUQsWUFBTyxHQUFHLCtEQUErRCxDQUFDO1FBRTFFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFPakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkseUJBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIseUJBQXlCO0lBQzNCLENBQUM7SUFFRCxvREFBUSxHQUFSLGNBQW1CLENBQUM7SUFFWiwwREFBYyxHQUF0QjtRQUNFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxTQUFTO1lBQzlDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxDQUFDLEVBQUUsVUFBVSxDQUFDO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0Qs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Q0FBQSxBQXJGRCxJQXFGQztBQXJGWSw4RUFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRDdXJyZW50TG9jYXRpb24sIExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG5pbXBvcnQgeyBQYXRpZW50LCBNZWRpY2FsRW1lcmdlbmN5IH0gZnJvbSAnfi9hcHAvbW9kZWxzJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlLCBNZWRpY2FsRW1lcmdlbmN5U2VydmljZSB9IGZyb20gJ34vYXBwL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlZ2lzdGVyLW1lZGljYWwtZW1lcmdlbmN5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLW1lZGljYWwtZW1lcmdlbmN5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXItbWVkaWNhbC1lbWVyZ2VuY3kuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3Rlck1lZGljYWxFbWVyZ2VuY3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1lc3NhZ2UgPSAnQXF1w60gcG9kcmFzIHJlcG9ydGFyIHVuYSBlbWVyZ2VuY2lhIGVuIGNhc28gZGUgYWNjaWRlbnRhbGlkYWQnO1xuICBzZXNzaW9uOiBQYXRpZW50O1xuICBwcm9jZXNzaW5nID0gZmFsc2U7XG4gIG15TG9jYXRpb246IExvY2F0aW9uO1xuICBtZWRpY2FsRW1lcmdlbmN5OiBNZWRpY2FsRW1lcmdlbmN5O1xuICBAVmlld0NoaWxkKCdwYXRpZW50X2Rlc2NyaXB0aW9uJykgcGF0aWVudF9kZXNjcmlwdGlvbjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb25TZXJ2aWNlOiBTZXNzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1lZGljYWxFbWVyZ2VuY3lTZXJ2aWNlOiBNZWRpY2FsRW1lcmdlbmN5U2VydmljZSkge1xuICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb25TZXJ2aWNlLmdldFNlc3Npb24oKTtcbiAgICB0aGlzLm1lZGljYWxFbWVyZ2VuY3kgPSBuZXcgTWVkaWNhbEVtZXJnZW5jeSh0aGlzLnNlc3Npb24uaWQsICcnLCAwLCAwKTtcbiAgICB0aGlzLmdldExvY2F0aW9uKCk7XG4gICAgLy8gdGhpcy5lbmFibGVMb2NhdGlvbigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBwcml2YXRlIGVuYWJsZUxvY2F0aW9uKCkge1xuICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24gKGlzRW5hYmxlZCkge1xuICAgICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TG9jYXRpb24oKSB7XG4gICAgaWYgKHRoaXMubXlMb2NhdGlvbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm15TG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IDMsIHVwZGF0ZURpc3RhbmNlOiAxMCwgbWF4aW11bUFnZTogMjAwMDAsIHRpbWVvdXQ6IDIwMDAwIH0pLlxuICAgICAgdGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgIHRoaXMubXlMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVNZWRpY2FsRW1lcmdlbmN5KCkge1xuICAgIC8vIHZhbGlkYWNpb25lc1xuICAgIGlmICghdGhpcy5tZWRpY2FsRW1lcmdlbmN5LnBhdGllbnRfZGVzY3JpcHRpb24gfHwgdGhpcy5tZWRpY2FsRW1lcmdlbmN5LnBhdGllbnRfZGVzY3JpcHRpb24udHJpbSgpID09PSAnJykge1xuICAgICAgdGhpcy5hbGVydCgnRGViZXMgaW5ncmVzYXIgdW5hIGRlc2NpcGNpw7NuIHbDoWxpZGEnKTtcbiAgICAgIHRoaXMucGF0aWVudF9kZXNjcmlwdGlvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuZ2V0TG9jYXRpb24oKS50aGVuKGNvb3JkcyA9PiB7XG5cbiAgICAgIHRoaXMubWVkaWNhbEVtZXJnZW5jeS5jb29yZExhdCA9IGNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgIHRoaXMubWVkaWNhbEVtZXJnZW5jeS5jb29yZExvbmcgPSBjb29yZHMubG9uZ2l0dWRlO1xuXG4gICAgICB0aGlzLm1lZGljYWxFbWVyZ2VuY3lTZXJ2aWNlLnNhdmUodGhpcy5tZWRpY2FsRW1lcmdlbmN5KS5zdWJzY3JpYmUobWVkaWNhbEVtZXJnZW5jeSA9PiB7XG4gICAgICAgIHRoaXMuYWxlcnQoJ0xhIGVtZXJnZW5jaWEgc2UgaGEgcmVwb3J0YWRvIHNhdGlzZmFjdG9yaWFtZW50ZScpO1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICBhbGVydChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnb0JhY2soKSB7IH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5zZXNzaW9uU2VydmljZS5sb2dPdXQoKTtcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICB0aXRsZTogJ0FjY2VzaWJpbGlkYWQgbcOzdmlsJyxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ0FjZXB0YXInLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9XG59XG4iXX0=