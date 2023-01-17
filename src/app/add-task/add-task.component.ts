import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent{
  difficulty = ["Easy","Medium","Hard"];
  selectedValue = null;
  inputValue = '';

  @Output() taskAdd = new EventEmitter()
  

  addTask(input: string, dif :any){
    if(this.inputValue && this.selectedValue){
      this.taskAdd.emit({name: input, difficulty: dif});
      this.inputValue = '';
    }
  }
}
