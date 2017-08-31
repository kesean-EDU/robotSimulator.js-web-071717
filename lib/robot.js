'use strict';

class Robot {
  constructor() {
    this.bearing = 'north';
    this.coordinates = [0, 0]
  }

  orient(currentDirection){
    let directions = [ 'east', 'west', 'north', 'south' ];
    if (directions.includes(currentDirection)) {
      this.bearing = currentDirection;
    }else {
      throw(new Error("Invalid Robot Bearing"));
    }
  }

  turnRight(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }


  turnLeft(){
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'west':
        this.bearing = 'south'
        break;
    }
  }

  at(x,y){
    this.coordinates = [x, y];
  }

  advance(){
    debugger;

    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++;
        break;
      case 'east':
        this.coordinates[0]++;
        break;
      case 'south':
        this.coordinates[1]--;
        break;
      case 'west':
        this.coordinates[0]--;
        break;
    }
  }

  instructions(list){
    let instArray = [];
    let steps = list.split('')
    for (var i = 0; i < steps.length; i++) {
      switch (steps[i]) {
        case 'L':
          instArray.push("turnLeft");
          break;
        case 'R':
          instArray.push("turnRight");
          break;
        case 'A':
          instArray.push("advance");
          break;
      }
    }
    return instArray;
  }

  evaluate(list){
    let steps = list.split('');
    for (var i = 0; i < steps.length; i++) {
      switch (steps[i]) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
      }
    }
  }

  place(placement){
    this.coordinates[0] = placement['x'];
    this.coordinates[1] = placement['y'];
    this.bearing = placement['direction'];
  }

}
