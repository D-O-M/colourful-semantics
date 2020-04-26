export interface Config {
    lessons: Lesson[];
}

export interface Lesson {
    name: string;
    challenges: Challenge[];
}

export interface Challenge {
    image: string;
    sections: {
        who: ChallengeSection;
        doing: ChallengeSection;
        what: ChallengeSection;
        where: ChallengeSection;
    }
}

export interface ChallengeSection {
    options: ChallengeOption[];
}

export interface ChallengeOption {
    label: string;
    image: string;
    correct: boolean;
}