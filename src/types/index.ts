export interface UserProgress {
  userId: string;
  lessonId: string;
  sectionId: string;
  completed: boolean;
  timestamp: Date;
}

export interface CodeExecutionResult {
  output: string;
  error?: string;
  executionTime?: number;
}

export interface AIResponse {
  message: string;
  type: 'explanation' | 'hint' | 'encouragement' | 'correction';
  suggestedCode?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'question' | 'code_help' | 'explanation';
}