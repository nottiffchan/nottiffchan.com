import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { bgCol: "#E8BEC5", title: 'the good stuff', desc: 'e-commerce platform with authentication and payment features', imgPath: '../../assets/projects/tgs-thumbnail.png' },
    { bgCol: '#D9E7DA', title: 'vibing.', desc: "created for Hack&Roll 2021: app utilising Spotify's recommendation algorithm to  create personalized playlists", imgPath: '../../assets/projects/vibing-thumbnail.png' },
    { bgCol: "#E7D0AB", title: 'redesigning rescalelab', desc: 'self-initiated proposal for a redesign of my company’s website', imgPath: '../../assets/projects/rsl-thumbnail.png' },
    { bgCol: "#E6C5E8", title: 'berry', desc: 'tile-format shopping list mobile app to ease grocery shopping.', imgPath: '../../assets/projects/berry-thumbnail.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
