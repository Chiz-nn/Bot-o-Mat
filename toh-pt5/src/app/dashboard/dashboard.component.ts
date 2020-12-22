import { Component, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Robot, Task, Tasks } from '../Robot';
import { RobotsService } from '../Robots.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  robots: Robot[] = [];
  taskStatus = []
  taskIndicator = 0;
  isCompleted : boolean = false;

  constructor(private robotService: RobotsService) { }

  ngOnInit() {
    this.robots = this.robotService.getRobotFromDatabase()
    this.taskStatus = [
      'not complete',
    ]
    
  }

 // create function to start tasks
 startTasks(aRobotName: string) {
  let clickedRobot: Robot = this.getRobotByName(aRobotName)
  let robotTasks : Task[] = clickedRobot.task
  for (let task of robotTasks) {
      setTimeout( ()=> {
          clickedRobot.task.shift()
      }, task.eta)
  }
  this.isCompleted = true
}
getRobotByName(arobotName: string) {
  let robotToReturn : Robot;
  for (let robot of this.robots) {
      if(robot.name === arobotName) {
        robotToReturn = robot; 
        break;    
      }
  
  }

  return robotToReturn

}

}