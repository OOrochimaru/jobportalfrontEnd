import { Component, OnInit } from '@angular/core';
import { JOBS } from '../../mock-jobs';

@Component({
  selector: 'app-featuredjobs',
  templateUrl: './featuredjobs.component.html',
  styleUrls: ['./featuredjobs.component.css']
})
export class FeaturedjobsComponent implements OnInit {
jobs = JOBS;
  constructor() { }

  ngOnInit() {
  }

}
