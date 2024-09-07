import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Para gerenciar o roteamento
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { routes } from './app.routes'; // Importar as rotas de app.routes.ts
import { HttpClientModule } from '@angular/common/http'; // Para requisições HTTP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Usar as rotas importadas
    FormsModule, // Para [(ngModel)]
    HttpClientModule, // Para requisições HTTP ao backend
    BrowserAnimationsModule, // Necessário para animações
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
