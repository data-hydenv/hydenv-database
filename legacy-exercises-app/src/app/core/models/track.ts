export interface ExerciseReference {
  id: string;
  mandatory: boolean;
  order: number;
}

export interface ExerciseSession {
  name: string;
  description?: string;
  exercises: ExerciseReference[];
}

export interface TrackOptions {
  login?: boolean;
  paidBackend?: boolean;
  storeResults: boolean;
  image?: {type: 'icon' | 'http' | 'img', src: string};
}

export interface Track {
  id?: string;
  name: string;
  description: string;
  admins?: string[];
  exercises: ExerciseReference[];
  sessions: ExerciseSession[];
  options?: TrackOptions;
}
