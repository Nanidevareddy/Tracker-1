import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, Trophy } from 'lucide-react';
import { lessons } from '../../data/lessons';
import { useProgress } from '../../hooks/useProgress';

interface SidebarProps {
  currentLessonId?: string;
  onLessonChange: (lessonId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentLessonId,
  onLessonChange,
  isOpen,
  onToggle
}) => {
  const { getLessonProgress } = useProgress();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-emerald-100 text-emerald-800';
      case 'intermediate': return 'bg-orange-100 text-orange-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static 
          top-16 lg:top-0 bottom-0 left-0 
          w-80 bg-white border-r border-gray-200 
          z-50 lg:z-auto shadow-lg lg:shadow-none 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Learning Path</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Trophy className="h-4 w-4 text-orange-500" />
              <span>JavaScript Fundamentals</span>
            </div>
          </div>

          {/* Lesson List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-3">
              {lessons.map((lesson, index) => {
                const progress = getLessonProgress(lesson.id);
                const isActive = currentLessonId === lesson.id;
                const isCompleted = progress === 100;

                return (
                  <div
                    key={lesson.id}
                    className="transition-all"
                  >
                    <button
                      onClick={() => onLessonChange(lesson.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-primary-500 bg-primary-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-sm font-medium flex items-center justify-center">
                            {index + 1}
                          </span>
                          {isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                          {lesson.difficulty}
                        </span>
                      </div>

                      <h3 className="font-medium text-gray-900 mb-1">{lesson.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{lesson.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{lesson.estimatedTime}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-600">{progress}%</span>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-primary-500 to-emerald-500 p-4 rounded-lg text-white">
              <h3 className="font-medium mb-1">Keep Learning!</h3>
              <p className="text-sm opacity-90">You're making great progress on your programming journey.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
