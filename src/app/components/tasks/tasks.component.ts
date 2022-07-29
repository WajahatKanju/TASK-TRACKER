import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
   this._taskService.getTask().subscribe((tasks)=> this.tasks=tasks);
   
  }
  deleteTask(task: Task): void {
    console.log(`${task}`);
  }

}
