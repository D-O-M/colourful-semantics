import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: 'lesson',
    component: LessonComponent
},
{
    path: '',
    component: HomeComponent
},
{
    path: '**',
    component: HomeComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
