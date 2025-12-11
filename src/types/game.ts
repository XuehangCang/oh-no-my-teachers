export interface Teacher {
  id: string;
  name: string;
  avatar: string; // Path to image
  subject: string;
  description: string;
  tags: string[];
  style: 'strict' | 'gentle' | 'humorous' | 'tsundere';
  greeting: string;
}

export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;
  isCorrect?: boolean; // For quiz questions
  feedback?: string; // Feedback after selection
}

export interface ScriptNode {
  id: string;
  type: 'dialogue' | 'quiz' | 'ending';
  speaker?: string; // 'Teacher' or 'Student' or 'Narrator'
  text: string; // Can be markdown
  expression?: string; // e.g., 'smile', 'angry', 'neutral'
  choices?: Choice[];
  next?: string; // ID of the next node if linear
  background?: string; // Optional background change
}

export interface GameState {
  currentTeacherId: string | null;
  currentNodeId: string | null;
  history: string[]; // List of visited node IDs
  affinity: Record<string, number>; // Teacher ID -> Affinity score
  unlockedTeachers: string[];
  completedCourses: string[];
}
