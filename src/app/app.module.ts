import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';
import { HomeComponent } from './home/home.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'disc', component: DisciplinaComponent},
    ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TimerService, DisciplinasService ],
})
export class AppModule { }
