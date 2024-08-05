import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent {
  isExpanded: boolean = false;

  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
    //Implement toogle functionality showing and hiding content
    }


  }