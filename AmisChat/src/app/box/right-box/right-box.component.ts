import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-box',
  templateUrl: './right-box.component.html',
  styleUrls: ['./right-box.component.css']
})
export class RightBoxComponent implements OnInit {

  check = false;
  constructor() { }

  ngOnInit(): void {
  }
  showInfor(){
    this.check = !this.check;
  }

}
