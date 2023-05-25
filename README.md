




# Chiz-nn BOT-O-MAT

Thank you for Looking at my Bot-O-Mat program

I chose to use the Angular Framework to develop my application using JavaScript, HTML, and CSS. I enjoy building front-end applications and I chose this because it allowed me to visualize the process using angular's component style development. I structured the interface using components to enable each segment to work individually and i tried to keep the design as clean as possible.

## How to run and install Bot-O-Mat

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli)
* Use $ npm install . This script will install all the packages needed by angular 
* Run npm install -g @angular/cli
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.    
* The app will load onto your browser. You can now navigate to the robot page and build a robot
* Each robot has it's unique characterisitics and can be accessed by clicking the individual robot
* The dashboard page contains all robots initiated and there tasks can be run by clicking on robots
* Tasks disappear upon completion and after all tasks are finished, the robot is empty!
* * To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README


## Robot
Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks
Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types
```
{
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete
- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats
- Some customers want your robots to accomplish tasks that are not on your list, so they'd like for you to add the ability for users to create new kinds of tasks and have the robots complete them


## Authors
- Chiz Nnodu
