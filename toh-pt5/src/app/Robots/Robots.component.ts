import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  Robot } from '../Robot';
import {  RobotsService } from '../Robots.service';


@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {
  robots: Robot[];

  constructor(private robotservice: RobotsService, private router: Router) { }

  ngOnInit() {
    this.robots = this.robotservice.getRobotFromDatabase()
  }

  setCurrentRobot(aRobot: Robot){
    this.robotservice.setCurrentRobot(aRobot)
    this.router.navigateByUrl("/detail")
  }
  
  addRobot(){
    this.robotservice.currentRobot = undefined;
    this.router.navigateByUrl("/detail")
  }

}
