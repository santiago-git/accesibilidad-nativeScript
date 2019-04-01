"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./components/login/login.component");
var home_component_1 = require("./home/home.component");
var register_medical_emergency_component_1 = require("./home/register-medical-emergency/register-medical-emergency.component");
exports.routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', },
    { path: 'login', component: login_component_1.LoginComponent, },
    { path: 'home', component: home_component_1.HomeComponent, },
    { path: 'register-medical-center', component: register_medical_emergency_component_1.RegisterMedicalEmergencyComponent, },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzRUFBb0U7QUFDcEUsd0RBQXNEO0FBQ3RELCtIQUEySDtBQUU5RyxRQUFBLE1BQU0sR0FBVztJQUM1QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxHQUFHO0lBQ3RELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsR0FBRztJQUM3QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEdBQUc7SUFDM0MsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsU0FBUyxFQUFFLHdFQUFpQyxHQUFHO0NBTW5GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1lZGljYWxFbWVyZ2VuY3lDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvcmVnaXN0ZXItbWVkaWNhbC1lbWVyZ2VuY3kvcmVnaXN0ZXItbWVkaWNhbC1lbWVyZ2VuY3kuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcsIH0sXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgfSxcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgfSxcbiAgeyBwYXRoOiAncmVnaXN0ZXItbWVkaWNhbC1jZW50ZXInLCBjb21wb25lbnQ6IFJlZ2lzdGVyTWVkaWNhbEVtZXJnZW5jeUNvbXBvbmVudCwgfSxcbiAgLy8ge1xuICAvLyAgIHBhdGg6XG4gIC8vICAgICAnaG9tZScsXG4gIC8vICAgbG9hZENoaWxkcmVuOiAnLi9tb2R1bGVzL2hvbWUvaG9tZS5tb2R1bGUudG5zI0hvbWVNb2R1bGUnLFxuICAvLyB9XG5dO1xuIl19