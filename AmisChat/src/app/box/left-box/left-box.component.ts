import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})
export class LeftBoxComponent implements OnInit {
  arr = [
    { id: 1, name : 'Đỗ Xuân Dũng', avatar : '../../../assets/Avatar/1.jpg' , massage : 'mai có lịch họp' , time : '14:20' ,notRep: 0, status : false, role : 'receive'},
    { id: 2, name : 'Đỗ Dũng' ,avatar : '../../../assets/Avatar/2.jpg', massage : 'đi chơi ko' , time : '6:00' ,notRep: 10, status : false, role:'sent'},
    { id: 3, name : 'Xuân Dũng' ,avatar : '../../../assets/Avatar/3.jpg', massage : 'đi làm nhá' , time : 'T5' ,notRep: 0, status : true, role:'sent'},
    { id: 4, name : 'Dũng' ,avatar : '../../../assets/Avatar/4.jpg', massage : 'đá bóng ko' , time : 't6' ,notRep: 0, status : true, role:'receive' },
    { id: 5, name : 'Dũng Đỗ' ,avatar : '../../../assets/Avatar/5.jpg', massage : 'mai có lịch họp' , time : '15:20' ,notRep: 2, status : false, role:'receive' },
    { id: 6, name : 'Dũng Đỗ Xuân' ,avatar : '../../../assets/Avatar/1.jpg', massage : 'mai có lịch họp đấy nhá' , time : '13:20' ,notRep: 0, status : false, role:'sent' }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
