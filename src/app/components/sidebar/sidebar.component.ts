import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = [
    {
      image: './assets/images/Vector.png',
      link: '/map',
      isChoosen: false,
    },
    {
      image: './assets/images/Book.png',
      link: '/course',
      isChoosen: false,
    },
    {
      image: './assets/images/Cup.png',
      link: '',
      isChoosen: false,
    },
    {
      image: './assets/images/Segment.png',
      link: '',
      isChoosen: false,
    },
    {
      image: './assets/images/Settings.png',
      link: '',
      isChoosen: false,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  choosen(i) {
    for(let i=0; i<this.menu.length; i++){
      this.menu[i].isChoosen = false;
    }
    this.menu[i].isChoosen = true;
  }

}
