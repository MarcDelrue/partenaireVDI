import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';

declare var google;

@Component({
  selector: 'page-workshop',
  templateUrl: 'workshop.html'
})
export class WorkshopPage {
  @ViewChild("compo")
  public searchElementRef: ElementRef;
  constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}
  autocomplete : any;
  dateWorkshop: any;
  location: any;

  ngOnInit(){
    this.dateWorkshop = new Date().toISOString();
    setTimeout(()=>{
     this.initAutoComplete();
    }, 100)
  }

  initAutoComplete() {
  console.log(this.searchElementRef.nativeElement);
  this.mapsAPILoader.load().then(() => {
    this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
         types: ['(regions)'],
        componentRestrictions: {country: ["be", "fr"]}
       });
         this.autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
          this.location = this.autocomplete.getPlace().address_components[0].short_name;
         });
       });
     });
  }
}
