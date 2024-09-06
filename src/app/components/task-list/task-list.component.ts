import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task._id !== id);
    });
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe();
  }
}
