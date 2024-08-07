import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

isOpen: boolean = false;

  ngOnInit(): void {
    this.isOpen = false;
  }

  openDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}
