export interface Skill {
  id: number;
  name: string;
  description: string;
  avatar: string;
  levels: number;
  completed: boolean;
}

export interface SkillDetail {
  id: number;
  name: string;
  levels: number;
  questions: Question[];
}

interface Question {
  id: number;
  question: string;
  answer: string;
}