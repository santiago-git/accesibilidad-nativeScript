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
var camera = require("nativescript-camera");
var image_source_1 = require("tns-core-modules/image-source");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(sessionService, medicalEmergencyService, medicalCenterService, clinicHistoryService) {
        this.sessionService = sessionService;
        this.medicalEmergencyService = medicalEmergencyService;
        this.medicalCenterService = medicalCenterService;
        this.clinicHistoryService = clinicHistoryService;
        this.message = 'Aquí podras reportar una emergencia en caso de accidentalidad';
        this.processing = false;
        this.session = this.sessionService.getSession();
        this.medicalEmergency = new models_1.MedicalEmergency(this.session.id, '', 0, 0);
        this.getLocation();
        // this.getClinicHistory();
        this.getMedicalCenters();
        this.getMedicalEmergencies();
        // this.onTakePhoto();
        // this.enableLocation();
        this.tabSelectedIndex = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // var socketIO = new SocketIO.SocketIO('https://accesibilidad-back-end.herokuapp.com/');
    };
    HomeComponent.prototype.takePicture = function () {
        var _this = this;
        camera.requestPermissions().then(function success() {
            console.log('acceso a camara');
            // permission request accepted or already granted 
            // ... call camera.takePicture here ...
        }, function failure() {
            // permission request rejected
            // ... tell the user ...
        });
        camera.takePicture({ saveToGallery: false, }).then(function (imageAsset) {
            console.log('Result is an image asset instance');
            // const image = new imageModule.Image();
            image_source_1.fromAsset(imageAsset).then(function (res) {
                var base64 = res.toBase64String('jpg', 10);
                _this.medicalEmergency.photo = 'data:image/png;base64,' + base64;
                // this.image = 'data:image/png;base64,' + base64;
                console.log(base64);
            });
            // imageAsset.getImageAsync(res => {
            //   console.log(res);
            // });
            // image.src = imageAsset;
        }).catch(function (err) {
            console.log('Error -> ' + err.message);
        });
    };
    HomeComponent.prototype.getMedicalCenters = function () {
        var _this = this;
        this.medicalCenterService.getAll().subscribe(function (list) {
            _this.medicalCenters = list;
        });
    };
    HomeComponent.prototype.getMedicalEmergencies = function () {
        var _this = this;
        this.processing = true;
        this.medicalEmergencyService.getByPatientId().subscribe(function (list) {
            _this.medicalEmergencies = list;
            _this.processing = false;
        });
    };
    HomeComponent.prototype.getClinicHistory = function () {
        var _this = this;
        this.clinicHistoryService.get().subscribe(function (list) {
            _this.clinicHistory = list;
        });
    };
    HomeComponent.prototype.onItemTap = function (args) {
        console.log('Item Tapped at cell index: ' + args.index);
    };
    HomeComponent.prototype.enableLocation = function () {
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
    HomeComponent.prototype.getLocation = function () {
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
    HomeComponent.prototype.createMedicalEmergency = function () {
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
                _this.tabSelectedIndex = 0;
                _this.medicalEmergency = new models_1.MedicalEmergency(_this.session.id, '', 0, 0);
                _this.alert('La emergencia se ha reportado satisfactoriamente');
                _this.processing = false;
                _this.getMedicalEmergencies();
            }, function (err) {
                _this.processing = false;
                alert(err);
            });
        });
    };
    HomeComponent.prototype.goBack = function () { };
    HomeComponent.prototype.logout = function () {
        this.sessionService.logOut();
    };
    HomeComponent.prototype.alert = function (message) {
        return alert({
            title: 'Accesibilidad móvil',
            okButtonText: 'Aceptar',
            message: message
        });
    };
    HomeComponent.prototype.onTakePhoto = function () {
        // let options = {
        //   width: this.width,
        //   height: this.height,
        //   keepAspectRatio: this.keepAspectRatio,
        //   saveToGallery: this.saveToGallery
        // };
        // takePicture(options)
        //   .then(imageAsset => {
        //     this.imageTaken = imageAsset;
        //     console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        //   }).catch(err => {
        //     console.log(err.message);
        //   });
    };
    HomeComponent.prototype.onSelectedIndexChanged = function (args) {
        if (args.oldIndex !== -1) {
            var newIndex = args.newIndex;
            if (newIndex === 0) {
                this.tabSelectedIndexResult = 'Profile Tab (tabSelectedIndex = 0 )';
            }
            else if (newIndex === 1) {
                this.tabSelectedIndexResult = 'Stats Tab (tabSelectedIndex = 1 )';
            }
            else if (newIndex === 2) {
                this.tabSelectedIndexResult = 'Settings Tab (tabSelectedIndex = 2 )';
            }
            // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
        }
    };
    __decorate([
        core_1.ViewChild('patient_description'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "patient_description", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [services_1.SessionService,
            services_1.MedicalEmergencyService,
            services_1.MedicalCenterService,
            services_1.ClinicHistoryService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5RTtBQUN6RSxxRUFBd0U7QUFDeEUsc0RBQXdEO0FBQ3hELHVDQUF1RjtBQUN2RiwyQ0FBcUg7QUFFckgsNENBQThDO0FBQzlDLDhEQUEwRDtBQVMxRDtJQWVFLHVCQUFvQixjQUE4QixFQUN4Qyx1QkFBZ0QsRUFDaEQsb0JBQTBDLEVBQzFDLG9CQUEwQztRQUhoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFkcEQsWUFBTyxHQUFHLCtEQUErRCxDQUFDO1FBRTFFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFjakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDRSx5RkFBeUY7SUFDM0YsQ0FBQztJQUdELG1DQUFXLEdBQVg7UUFBQSxpQkFnQ0M7UUE5QkMsTUFBTSxDQUFDLGtCQUFrQixF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QUF1QixJQUFtQztRQUN4RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQ0FBcUMsQ0FBQzthQUNyRTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxtQ0FBbUMsQ0FBQzthQUNuRTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQ0FBc0MsQ0FBQzthQUN0RTtZQUNELGtHQUFrRztTQUVuRztJQUNILENBQUM7SUEzTGlDO1FBQWpDLGdCQUFTLENBQUMscUJBQXFCLENBQUM7a0NBQXNCLGlCQUFVOzhEQUFDO0lBVHZELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBZ0JvQyx5QkFBYztZQUNmLGtDQUF1QjtZQUMxQiwrQkFBb0I7WUFDcEIsK0JBQW9CO09BbEJ6QyxhQUFhLENBc016QjtJQUFELG9CQUFDO0NBQUEsQUF0TUQsSUFzTUM7QUF0TVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRDdXJyZW50TG9jYXRpb24sIExvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gJ25hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvbic7XG5pbXBvcnQgeyBQYXRpZW50LCBNZWRpY2FsRW1lcmdlbmN5LCBDbGluaWNIaXN0b3J5LCBNZWRpY2FsQ2VudGVyIH0gZnJvbSAnfi9hcHAvbW9kZWxzJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlLCBNZWRpY2FsRW1lcmdlbmN5U2VydmljZSwgQ2xpbmljSGlzdG9yeVNlcnZpY2UsIE1lZGljYWxDZW50ZXJTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2VydmljZXMnO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3L3RhYi12aWV3JztcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IGZyb21Bc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlJztcbmltcG9ydCAqIGFzIFNvY2tldElPIGZyb20gJ25hdGl2ZXNjcmlwdC1zb2NrZXRpbyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXhSZXN1bHQ6IHN0cmluZztcbiAgbWVzc2FnZSA9ICdBcXXDrSBwb2RyYXMgcmVwb3J0YXIgdW5hIGVtZXJnZW5jaWEgZW4gY2FzbyBkZSBhY2NpZGVudGFsaWRhZCc7XG4gIHNlc3Npb246IFBhdGllbnQ7XG4gIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgbXlMb2NhdGlvbjogTG9jYXRpb247XG4gIG1lZGljYWxFbWVyZ2VuY3k6IE1lZGljYWxFbWVyZ2VuY3k7XG4gIEBWaWV3Q2hpbGQoJ3BhdGllbnRfZGVzY3JpcHRpb24nKSBwYXRpZW50X2Rlc2NyaXB0aW9uOiBFbGVtZW50UmVmO1xuICBtZWRpY2FsQ2VudGVyczogTWVkaWNhbENlbnRlcltdO1xuICBjbGluaWNIaXN0b3J5OiBDbGluaWNIaXN0b3J5W107XG4gIG1lZGljYWxFbWVyZ2VuY2llczogTWVkaWNhbEVtZXJnZW5jeVtdO1xuICBpbWFnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVkaWNhbEVtZXJnZW5jeVNlcnZpY2U6IE1lZGljYWxFbWVyZ2VuY3lTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVkaWNhbENlbnRlclNlcnZpY2U6IE1lZGljYWxDZW50ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2xpbmljSGlzdG9yeVNlcnZpY2U6IENsaW5pY0hpc3RvcnlTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnNlc3Npb24gPSB0aGlzLnNlc3Npb25TZXJ2aWNlLmdldFNlc3Npb24oKTtcbiAgICB0aGlzLm1lZGljYWxFbWVyZ2VuY3kgPSBuZXcgTWVkaWNhbEVtZXJnZW5jeSh0aGlzLnNlc3Npb24uaWQsICcnLCAwLCAwKTtcbiAgICB0aGlzLmdldExvY2F0aW9uKCk7XG4gICAgLy8gdGhpcy5nZXRDbGluaWNIaXN0b3J5KCk7XG4gICAgdGhpcy5nZXRNZWRpY2FsQ2VudGVycygpO1xuICAgIHRoaXMuZ2V0TWVkaWNhbEVtZXJnZW5jaWVzKCk7XG4gICAgLy8gdGhpcy5vblRha2VQaG90bygpO1xuICAgIC8vIHRoaXMuZW5hYmxlTG9jYXRpb24oKTtcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB2YXIgc29ja2V0SU8gPSBuZXcgU29ja2V0SU8uU29ja2V0SU8oJ2h0dHBzOi8vYWNjZXNpYmlsaWRhZC1iYWNrLWVuZC5oZXJva3VhcHAuY29tLycpO1xuICB9XG5cblxuICB0YWtlUGljdHVyZSgpIHtcblxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY2VzbyBhIGNhbWFyYScpO1xuXG4gICAgICAgIC8vIHBlcm1pc3Npb24gcmVxdWVzdCBhY2NlcHRlZCBvciBhbHJlYWR5IGdyYW50ZWQgXG4gICAgICAgIC8vIC4uLiBjYWxsIGNhbWVyYS50YWtlUGljdHVyZSBoZXJlIC4uLlxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUoKSB7XG4gICAgICAgIC8vIHBlcm1pc3Npb24gcmVxdWVzdCByZWplY3RlZFxuICAgICAgICAvLyAuLi4gdGVsbCB0aGUgdXNlciAuLi5cbiAgICAgIH1cbiAgICApO1xuXG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKHsgc2F2ZVRvR2FsbGVyeTogZmFsc2UsIH0pLnRoZW4oaW1hZ2VBc3NldCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnUmVzdWx0IGlzIGFuIGltYWdlIGFzc2V0IGluc3RhbmNlJyk7XG4gICAgICAvLyBjb25zdCBpbWFnZSA9IG5ldyBpbWFnZU1vZHVsZS5JbWFnZSgpO1xuICAgICAgZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gcmVzLnRvQmFzZTY0U3RyaW5nKCdqcGcnLCAxMCk7XG4gICAgICAgIHRoaXMubWVkaWNhbEVtZXJnZW5jeS5waG90byA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGJhc2U2NDtcbiAgICAgICAgLy8gdGhpcy5pbWFnZSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGJhc2U2NDtcbiAgICAgICAgY29uc29sZS5sb2coYmFzZTY0KTtcbiAgICAgIH0pO1xuICAgICAgLy8gaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKHJlcyA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAvLyB9KTtcblxuICAgICAgLy8gaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIC0+ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRNZWRpY2FsQ2VudGVycygpIHtcbiAgICB0aGlzLm1lZGljYWxDZW50ZXJTZXJ2aWNlLmdldEFsbCgpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMubWVkaWNhbENlbnRlcnMgPSBsaXN0O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TWVkaWNhbEVtZXJnZW5jaWVzKCkge1xuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgdGhpcy5tZWRpY2FsRW1lcmdlbmN5U2VydmljZS5nZXRCeVBhdGllbnRJZCgpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMubWVkaWNhbEVtZXJnZW5jaWVzID0gbGlzdDtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2xpbmljSGlzdG9yeSgpIHtcbiAgICB0aGlzLmNsaW5pY0hpc3RvcnlTZXJ2aWNlLmdldCgpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuY2xpbmljSGlzdG9yeSA9IGxpc3Q7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZygnSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogJyArIGFyZ3MuaW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVMb2NhdGlvbigpIHtcbiAgICBnZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKGZ1bmN0aW9uIChpc0VuYWJsZWQpIHtcbiAgICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldExvY2F0aW9uKCkge1xuICAgIGlmICh0aGlzLm15TG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5teUxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiAzLCB1cGRhdGVEaXN0YW5jZTogMTAsIG1heGltdW1BZ2U6IDIwMDAwLCB0aW1lb3V0OiAyMDAwMCB9KS5cbiAgICAgIHRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICB0aGlzLm15TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWVkaWNhbEVtZXJnZW5jeSgpIHtcbiAgICAvLyB2YWxpZGFjaW9uZXNcbiAgICBpZiAoIXRoaXMubWVkaWNhbEVtZXJnZW5jeS5wYXRpZW50X2Rlc2NyaXB0aW9uIHx8IHRoaXMubWVkaWNhbEVtZXJnZW5jeS5wYXRpZW50X2Rlc2NyaXB0aW9uLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRoaXMuYWxlcnQoJ0RlYmVzIGluZ3Jlc2FyIHVuYSBkZXNjaXBjacOzbiB2w6FsaWRhJyk7XG4gICAgICB0aGlzLnBhdGllbnRfZGVzY3JpcHRpb24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICB0aGlzLmdldExvY2F0aW9uKCkudGhlbihjb29yZHMgPT4ge1xuXG4gICAgICB0aGlzLm1lZGljYWxFbWVyZ2VuY3kuY29vcmRMYXQgPSBjb29yZHMubGF0aXR1ZGU7XG4gICAgICB0aGlzLm1lZGljYWxFbWVyZ2VuY3kuY29vcmRMb25nID0gY29vcmRzLmxvbmdpdHVkZTtcblxuICAgICAgdGhpcy5tZWRpY2FsRW1lcmdlbmN5U2VydmljZS5zYXZlKHRoaXMubWVkaWNhbEVtZXJnZW5jeSkuc3Vic2NyaWJlKG1lZGljYWxFbWVyZ2VuY3kgPT4ge1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLm1lZGljYWxFbWVyZ2VuY3kgPSBuZXcgTWVkaWNhbEVtZXJnZW5jeSh0aGlzLnNlc3Npb24uaWQsICcnLCAwLCAwKTtcbiAgICAgICAgdGhpcy5hbGVydCgnTGEgZW1lcmdlbmNpYSBzZSBoYSByZXBvcnRhZG8gc2F0aXNmYWN0b3JpYW1lbnRlJyk7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdldE1lZGljYWxFbWVyZ2VuY2llcygpO1xuICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIGFsZXJ0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdvQmFjaygpIHsgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLmxvZ091dCgpO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgIHRpdGxlOiAnQWNjZXNpYmlsaWRhZCBtw7N2aWwnLFxuICAgICAgb2tCdXR0b25UZXh0OiAnQWNlcHRhcicsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBvblRha2VQaG90bygpIHtcbiAgICAvLyBsZXQgb3B0aW9ucyA9IHtcbiAgICAvLyAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgIC8vICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAvLyAgIGtlZXBBc3BlY3RSYXRpbzogdGhpcy5rZWVwQXNwZWN0UmF0aW8sXG4gICAgLy8gICBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnlcbiAgICAvLyB9O1xuXG4gICAgLy8gdGFrZVBpY3R1cmUob3B0aW9ucylcbiAgICAvLyAgIC50aGVuKGltYWdlQXNzZXQgPT4ge1xuICAgIC8vICAgICB0aGlzLmltYWdlVGFrZW4gPSBpbWFnZUFzc2V0O1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNpemU6IFwiICsgaW1hZ2VBc3NldC5vcHRpb25zLndpZHRoICsgXCJ4XCIgKyBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0KTtcbiAgICAvLyAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAvLyAgIH0pO1xuICB9XG5cblxuICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgaWYgKGFyZ3Mub2xkSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IGFyZ3MubmV3SW5kZXg7XG4gICAgICBpZiAobmV3SW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gJ1Byb2ZpbGUgVGFiICh0YWJTZWxlY3RlZEluZGV4ID0gMCApJztcbiAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDEpIHtcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gJ1N0YXRzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDEgKSc7XG4gICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9ICdTZXR0aW5ncyBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAyICknO1xuICAgICAgfVxuICAgICAgLy8gYWxlcnQoYFNlbGVjdGVkIGluZGV4IGhhcyBjaGFuZ2VkICggT2xkIGluZGV4OiAke2FyZ3Mub2xkSW5kZXh9IE5ldyBpbmRleDogJHthcmdzLm5ld0luZGV4fSApYClcblxuICAgIH1cbiAgfVxuXG59XG4iXX0=