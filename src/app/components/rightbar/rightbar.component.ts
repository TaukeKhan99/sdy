import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {

  tasks= [
    {
      title: 'Describing objects and classes',
      icon: 'far fa-play-circle',
      isChecked: true
    },
    {
      title: 'UML graphical notation to describe classes',
      icon: 'far fa-play-circle',
      isChecked: true
    },
    {
      title: 'Constructors',
      icon: 'far fa-play-circle',
      isChecked: false
    },
    {
      title: 'Practice objects and classes',
      icon: 'fas fa-pencil-alt',
      isChecked: false
    },
  ]

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
