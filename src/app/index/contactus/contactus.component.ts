import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  options: any;

    overlays: any[];

    ngOnInit() {
        this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };
    }
}
