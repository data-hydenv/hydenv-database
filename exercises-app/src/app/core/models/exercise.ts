export interface ExerciseBody {
    type: 'html' | 'markdown' | 'text';
    content?: string;
    url?: string;
}

export interface ExerciseSolution {
    type: 'sql' | 'literal';
    content: string;
    fallback?: string;
}

export interface Exercise {
    id: string;
    name: string;
    body: ExerciseBody;
    solution: ExerciseSolution;
    hint?: string;
}
