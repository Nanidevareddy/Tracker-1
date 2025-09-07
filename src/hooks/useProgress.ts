import { useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { lessons } from '../data/lessons'; // <-- Use ES module import

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('ai-tutor-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const updateProgress = (lessonId: string, sectionId: string, completed: boolean = true) => {
    const newProgress: UserProgress = {
      userId: 'demo-user',
      lessonId,
      sectionId,
      completed,
      timestamp: new Date(),
    };

    const updatedProgress = [
      ...progress.filter(p => !(p.lessonId === lessonId && p.sectionId === sectionId)),
      newProgress,
    ];

    setProgress(updatedProgress);
    localStorage.setItem('ai-tutor-progress', JSON.stringify(updatedProgress));
  };

  const getProgress = (lessonId: string, sectionId: string): boolean => {
    return progress.some(p => p.lessonId === lessonId && p.sectionId === sectionId && p.completed);
  };

  const getLessonProgress = (lessonId: string): number => {
    const lesson = lessons.find((l: any) => l.id === lessonId); // <-- Use imported lessons
    if (!lesson) return 0;

    const completedSections = lesson.sections.filter((section: any) => 
      getProgress(lessonId, section.id)
    ).length;

    return Math.round((completedSections / lesson.sections.length) * 100);
  };

  return {
    progress,
    updateProgress,
    getProgress,
    getLessonProgress,
  };
};