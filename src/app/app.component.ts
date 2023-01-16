import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-App';
  toDoTask: Array<any> = [];
  goToProgress: Array<any> = [];
  doneTask: Array<any> = [];
  difficulty = ["Easy","Medium","Hard"];
  selectedValue = null;
  inputValue = '';

  addTask(input: string, dif :any){
    if(this.inputValue && this.selectedValue){
      this.toDoTask.push({name: input, difficulty: dif});
      this.inputValue = '';
    }
  }
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
