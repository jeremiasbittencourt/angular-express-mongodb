import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule], 
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

  tasks: Task[] = []; // Lista de tarefas
  isCreatingNewTask: boolean = false; // Controle de formulário ou listagem

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks(); // Carregar tarefas ao iniciar
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onSubmit(): void {
    if (this.task.title) {
      this.taskService.createTask(this.task).subscribe(() => {
        this.getTasks(); // Atualiza a lista após criar
        this.task = {
          title: '',
          description: '',
          completed: false,
        };
        this.isCreatingNewTask = false; // Volta para a listagem
      });
    }
  }

  // Editar tarefa
  editTask(task: Task): void {
    this.task = { ...task };
    this.isCreatingNewTask = true; // Mostra o formulário
  }

  // Excluir tarefa
  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasks(); // Atualiza a lista após excluir
    });
  }

  // Alternar para a lista de tarefas
  viewTasks(): void {
    this.isCreatingNewTask = false;
  }

  // Alternar para o formulário de nova tarefa
  newTask(): void {
    this.task = {
      title: '',
      description: '',
      completed: false,
    };
    this.isCreatingNewTask = true;
  }
}
