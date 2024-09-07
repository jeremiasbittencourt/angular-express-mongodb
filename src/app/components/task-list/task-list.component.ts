import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule], 
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    completed: false,
    _id: '', 
  };

  tasks: Task[] = [];
  isCreatingNewTask: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onSubmit(): void {
    if (this.task._id) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.getTasks();
        this.resetTaskForm();
      });
    } else if (this.task.title) {
      this.taskService.createTask(this.task).subscribe(() => {
        this.getTasks();
        this.resetTaskForm();
      });
    }
  }

  editTask(task: Task): void {
    this.task = { ...task };
    this.isCreatingNewTask = true;
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasks();
    });
  }

  viewTasks(): void {
    this.isCreatingNewTask = false;
  }

  newTask(): void {
    this.resetTaskForm();
  }

  resetTaskForm(): void {
    this.task = {
      title: '',
      description: '',
      completed: false,
      _id: '',
    };
    this.isCreatingNewTask = false;
  }
}
