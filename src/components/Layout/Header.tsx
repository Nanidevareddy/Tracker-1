import React from 'react';
import { Book, Brain, Code } from 'lucide-react';

interface HeaderProps {
  currentLesson?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentLesson }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI Tutor</h1>
                <p className="text-xs text-gray-500">Interactive Programming Learning</p>
              </div>
            </div>
            
            {currentLesson && (
              <div className="hidden md:flex items-center space-x-2 ml-8">
                <Book className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{currentLesson}</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
              <Code className="h-4 w-4" />
              <span>Learning JavaScript</span>
            </div>
            
            <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-medium text-sm">AI</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};