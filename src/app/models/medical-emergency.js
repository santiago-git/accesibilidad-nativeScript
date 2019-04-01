"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MedicalEmergency = /** @class */ (function () {
    function MedicalEmergency(patient_id, address, coordLat, coordLong, id, doctor_id, medical_center_id, priority, state, photo, patient_description, doctor_description, patient, medicalCenter, createdAt, updatedAt) {
        this.patient_id = patient_id;
        this.address = address;
        this.coordLat = coordLat;
        this.coordLong = coordLong;
        this.id = id;
        this.doctor_id = doctor_id;
        this.medical_center_id = medical_center_id;
        this.priority = priority;
        this.state = state;
        this.photo = photo;
        this.patient_description = patient_description;
        this.doctor_description = doctor_description;
        this.patient = patient;
        this.medicalCenter = medicalCenter;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    return MedicalEmergency;
}());
exports.MedicalEmergency = MedicalEmergency;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhbC1lbWVyZ2VuY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZWRpY2FsLWVtZXJnZW5jeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQ0ksMEJBQ1csVUFBa0IsRUFDbEIsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLFNBQWlCLEVBQ2pCLEVBQVcsRUFDWCxTQUFrQixFQUNsQixpQkFBMEIsRUFDMUIsUUFBaUIsRUFDakIsS0FBYyxFQUNkLEtBQWMsRUFDZCxtQkFBNEIsRUFDNUIsa0JBQTJCLEVBQzNCLE9BQWlCLEVBQ2pCLGFBQTZCLEVBQzdCLFNBQWdCLEVBQ2hCLFNBQWdCO1FBZmhCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixPQUFFLEdBQUYsRUFBRSxDQUFTO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUztRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBTztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFPO0lBQ3ZCLENBQUM7SUFFVCx1QkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJy4vcGF0aWVudCc7XG5pbXBvcnQgeyBNZWRpY2FsQ2VudGVyIH0gZnJvbSAnLi9tZWRpY2FsLWNlbnRlcic7XG5cbmV4cG9ydCBjbGFzcyBNZWRpY2FsRW1lcmdlbmN5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHBhdGllbnRfaWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNvb3JkTGF0OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBjb29yZExvbmc6IG51bWJlcixcbiAgICAgICAgcHVibGljIGlkPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgZG9jdG9yX2lkPzogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbWVkaWNhbF9jZW50ZXJfaWQ/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBwcmlvcml0eT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIHN0YXRlPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcGhvdG8/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBwYXRpZW50X2Rlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZG9jdG9yX2Rlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcGF0aWVudD86IFBhdGllbnQsXG4gICAgICAgIHB1YmxpYyBtZWRpY2FsQ2VudGVyPzogTWVkaWNhbENlbnRlcixcbiAgICAgICAgcHVibGljIGNyZWF0ZWRBdD86IERhdGUsXG4gICAgICAgIHB1YmxpYyB1cGRhdGVkQXQ/OiBEYXRlXG4gICAgKSB7IH1cblxufVxuIl19