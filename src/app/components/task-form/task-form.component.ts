import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule], 
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    completed: false,
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.task.title) {
      this.taskService.createTask(this.task).subscribe(() => {
        this.task = {
          title: '',
          description: '',
          completed: false,
        };
      });
    }
  }
}
