import { Component } from '@angular/core';
import * as config from '../config.json';
import { Challenge } from '../models/config.model';
import { ChallengeService } from '../services/challenge.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    challenges: Challenge = JSON.parse(JSON.stringify(config.challenges));

    constructor(public challengeService: ChallengeService,
        private router: Router) { }

    onSelectChallenge(challenge: Challenge) {
        this.challengeService.selectedChallenge = challenge;
        this.router.navigate(['/lesson']);
    }
}