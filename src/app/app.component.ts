import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-App';
  toDoTask: Array<any> = [];

  addTaskHandler(task:any){
    this.toDoTask.push({name: task.name, difficulty: task.difficulty})
  }
  
}
