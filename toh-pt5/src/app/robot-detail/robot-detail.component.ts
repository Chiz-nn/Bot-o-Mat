import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormGroup, FormControl} from '@angular/forms';

import { Robot } from '../Robot';
import {RobotsService } from '../Robots.service';

@Component({
  selector: 'app-robot-detail',
  templateUrl: './robot-detail.component.html',
  styleUrls: [ './robot-detail.component.css' ]
})
export class RobotDetailComponent implements OnInit {
  RobotName: string;
  RobotidName: string;
  RobotdisplayName: string;
  RobotdisplayId: string;
  hasDetails: boolean = false;
  robot: Robot;
  

  idNames: string[] = [
   'Unipedal',
   'Bipedal',
   'Quadrupedal',
   'Arachnid',
   'Radial',
   'Aeronautical'
  ]


  constructor(
    private route: ActivatedRoute,
    private robotService: RobotsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.robot = this.robotService.getCurrentRobot()

    if (this.robot !== undefined){
      this.RobotdisplayId = this.robot.id
      this.RobotdisplayName = this.robot.name
      this.hasDetails= true;
  
    }
    

  }

  addnewRobot(): void {
    this.robot = this.robotService.addRobot({id:this.RobotidName, name: this.RobotName})
    this.goBack()


  }

  goBack(): void {
    this.location.back();
  }


}
