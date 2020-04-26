import { Injectable } from "@angular/core";
import { Challenge } from '../models/config.model';

@Injectable()
export class ChallengeService {
    selectedChallenge: Challenge = null;
}