import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Challenge, ChallengeOption } from '../models/config.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {

    challenge: Challenge = this.challengeService.selectedChallenge;
    answers: { 
        who?: ChallengeOption;
        doing?: ChallengeOption;
        what?: ChallengeOption;
        where?: ChallengeOption;
    } = {};

    markAnswers = false;

    constructor(private challengeService: ChallengeService, private router: Router) { }

    selectAnswer(category: 'who' | 'doing' | 'what' | 'where', answer: ChallengeOption) {
        this.answers[category] = answer;
        this.markAnswers = false;
    }

    onClickBack() {
        this.challengeService.selectedChallenge = null;
        this.router.navigate(['/']);
    }

    onClickCheckAnswers() {
        if (this.answers.who && this.answers.doing && this.answers.what && this.answers.where) {
            this.markAnswers = true;
        }
    }
}
