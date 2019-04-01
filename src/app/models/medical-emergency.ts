import { Patient } from './patient';
import { MedicalCenter } from './medical-center';

export class MedicalEmergency {
    constructor(
        public patient_id: number,
        public address: string,
        public coordLat: number,
        public coordLong: number,
        public id?: number,
        public doctor_id?: number,
        public medical_center_id?: number,
        public priority?: string,
        public state?: string,
        public photo?: string,
        public patient_description?: string,
        public doctor_description?: string,
        public patient?: Patient,
        public medicalCenter?: MedicalCenter,
        public createdAt?: Date,
        public updatedAt?: Date
    ) { }

}
