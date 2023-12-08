import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'events', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }