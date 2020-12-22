import { Injectable } from '@angular/core';
import { Robot, Tasks, Task } from './Robot';
import { ROBOTS } from './mock-robots';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class RobotsService {

  ListofRobot: Robot[];
  currentRobot: Robot;
  tracker = [];
  filteredTasks = [];
  i = 0;
  randomNumber
  
 

  constructor(private messageService: MessageService) { 
    this.ListofRobot = [];
  }

  getRobotFromDatabase(){
    if (this.ListofRobot === undefined){
      this.ListofRobot = ROBOTS;
    }
    return this.ListofRobot

  }

  addRobot(newRobot: Robot){
    newRobot.task = this.getTasks()
    this.ListofRobot.push(newRobot)
    this.currentRobot = undefined;
    return newRobot

  }

  getCurrentRobot(){
    return this.currentRobot;
  }

  setCurrentRobot(ThisRobot: Robot){
    this.currentRobot = ThisRobot;

  }

  getTasks(){
    this.filteredTasks = [];
    this.i = 0;
    while (this.i < 5) {
      this.randomNumber = Math.floor(Math.random() * 10);
      while (this.tracker.includes(this.randomNumber)){
        this.randomNumber = Math.floor(Math.random() * 10)
      }
      this.tracker.push(this.randomNumber)
      this.filteredTasks.push(Tasks[this.randomNumber])
      this.i ++
    }
    this.tracker = []
    return this.filteredTasks;
    
  }






}
