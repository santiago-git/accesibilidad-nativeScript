import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { getCurrentLocation, Location } from 'nativescript-geolocation';
import * as geolocation from 'nativescript-geolocation';
import { Patient, MedicalEmergency, ClinicHistory, MedicalCenter } from '~/app/models';
import { SessionService, MedicalEmergencyService, ClinicHistoryService, MedicalCenterService } from '~/app/services';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tabSelectedIndex: number;
  public tabSelectedIndexResult: string;
  message = 'Aquí podras reportar una emergencia en caso de accidentalidad';
  session: Patient;
  processing = false;
  myLocation: Location;
  medicalEmergency: MedicalEmergency;
  @ViewChild('patient_description') patient_description: ElementRef;
  medicalCenters: MedicalCenter[];
  public clinicHistory: ClinicHistory[];

  public imageTaken: any;
  public saveToGallery: boolean = true;
  public keepAspectRatio: boolean = true;
  public width: number = 300;
  public height: number = 300;

  constructor(private sessionService: SessionService,
    private medicalEmergencyService: MedicalEmergencyService,
    private medicalCenterService: MedicalCenterService,
    private clinicHistoryService: ClinicHistoryService) {
    this.session = sessionService.getSession();
    this.medicalEmergency = new MedicalEmergency(this.session.id, '', 0, 0);
    this.getLocation();
    this.getClinicHistory();
    this.getMedicalCenters();
    // this.onTakePhoto();
    // this.enableLocation();
    this.tabSelectedIndex = 0;
  }

  ngOnInit(): void { }

  getMedicalCenters() {
    this.medicalCenterService.getAll().subscribe(list => {
      this.medicalCenters = list;
    });
  }

  getClinicHistory() {
    this.clinicHistoryService.get().subscribe(list => {
      this.clinicHistory = list;
    });
  }

  public onItemTap(args) {
    console.log("Item Tapped at cell index: " + args.index);
  }

  private enableLocation() {
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
  }

  private getLocation() {
    if (this.myLocation) {
      return Promise.resolve(this.myLocation);
    }

    return getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
      then(location => {
        if (location) {
          this.myLocation = location;
          return location;
        }
      });
  }

  createMedicalEmergency() {
    // validaciones
    if (!this.medicalEmergency.patient_description || this.medicalEmergency.patient_description.trim() === '') {
      this.alert('Debes ingresar una descipción válida');
      this.patient_description.nativeElement.focus();
      return;
    }

    this.processing = true;

    this.getLocation().then(coords => {

      this.medicalEmergency.coordLat = coords.latitude;
      this.medicalEmergency.coordLong = coords.longitude;

      this.medicalEmergencyService.save(this.medicalEmergency).subscribe(medicalEmergency => {
        this.tabSelectedIndex = 0;
        this.medicalEmergency = new MedicalEmergency(this.session.id, '', 0, 0);
        this.alert('La emergencia se ha reportado satisfactoriamente');
        this.processing = false;
      }, err => {
        this.processing = false;
        alert(err);
      });
    });
  }

  goBack() { }

  logout() {
    this.sessionService.logOut();
  }

  alert(message: string) {
    return alert({
      title: 'Accesibilidad móvil',
      okButtonText: 'Aceptar',
      message: message
    });
  }

  onTakePhoto() {
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
  }


  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    if (args.oldIndex !== -1) {
      const newIndex = args.newIndex;
      if (newIndex === 0) {
        this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
      } else if (newIndex === 1) {
        this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
      } else if (newIndex === 2) {
        this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
      }
      // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)

    }
  }

}
