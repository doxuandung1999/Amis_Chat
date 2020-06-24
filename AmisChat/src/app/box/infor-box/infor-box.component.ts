import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infor-box',
  templateUrl: './infor-box.component.html',
  styleUrls: ['./infor-box.component.css']
})
export class InforBoxComponent implements OnInit {
  arrFileShared = [
    {id:1 , pdf : 'Nội dung hội nghị.pdf'},
    {id:2 , pdf : 'Test 2.pdf'},
    {id:3 , pdf : 'Test 3.pdf'},
    {id:4 , pdf : 'test 4.pdf'}
  ]
  arrImgShared = [
    {id:1 , img : '../../../assets/Avatar/2.jpg'},
    {id:2 , img : '../../../assets/Avatar/1.jpg'},
    {id:3 , img : '../../../assets/Avatar/3.jpg'},
    {id:4 , img : '../../../assets/Avatar/4.jpg'},
    {id:5 , img : '../../../assets/Avatar/5.jpg'},
  ]
  checkImg = false;
  checkFile = false;
  constructor() { }

  ngOnInit(): void {
  }

  showImg(){
    this.checkImg = !this.checkImg;
  }
  showFile(){
    this.checkFile = !this.checkFile;
  }


}
