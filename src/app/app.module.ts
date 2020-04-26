import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import { ChallengeService } from './services/challenge.service';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LessonComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        ChallengeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
