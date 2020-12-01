import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
