
import { ReactNode } from 'react';

export interface User {
  name: string;
  surname: string;
  collegiateId: string;
  attempts: number;
  isTestUser?: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface Module {
  id: number;
  title: string;
  summary: string;
  content: ReactNode;
  quiz: Question[];
}

export type AppScreen = 'login' | 'admin_login' | 'course' | 'certificate';

export type CourseState = 'reading' | 'quiz' | 'review';
