import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent{
  @Input() toDoTask: any[] = [];

  goToProgress: Array<any> = [];
  doneTask: Array<any> = [];

  removeItemFromToDo(index:number){
    this.toDoTask.splice(index,1)
  }
  addGoToProgressTask(input: string,dif: string, index: number){
    this.goToProgress.push({name: input, difficulty: dif});
    this.toDoTask.splice(index,1)
  }
  progToToDo(input: string,dif: string, index: number){
    this.toDoTask.push({name: input, difficulty: dif});
    this.goToProgress.splice(index,1)
  }
  progToDone(input: string,dif: string, index: number){
    this.doneTask.push({name: input, difficulty: dif});
    this.goToProgress.splice(index,1)
  }
  doneToProgress(input: string,dif: string, index: number){
    this.goToProgress.push({name: input, difficulty: dif});
    this.doneTask.splice(index,1)
  }
  getClassOfdif(val: string){
    if(val == 'Easy'){
      return "green";
    }
     else if(val == 'Hard'){
      return "red";
    }
    else if(val == 'Medium'){
      return "blue";
    }
    else{
      return;
    }
  }
}
