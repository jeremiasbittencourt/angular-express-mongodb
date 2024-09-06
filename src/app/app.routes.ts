import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },  // Rota padrão redirecionando para /tasks
  { path: 'tasks', component: TaskListComponent },        // Rota para listar tarefas
  { path: 'tasks/new', component: TaskFormComponent },    // Rota para criar nova tarefa
  { path: 'tasks/edit/:id', component: TaskFormComponent }, // Rota para editar tarefa
  // Rota wildcard para 404 ou redirecionamento
  { path: '**', redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
