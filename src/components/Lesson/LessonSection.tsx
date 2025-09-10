import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { LessonSection as LessonSectionType } from '../../data/lessons';
import { useProgress } from '../../hooks/useProgress';

interface LessonSectionProps {
  section: LessonSectionType;
  lessonId: string;
  onComplete: () => void;
  onNext: () => void;
}

export const LessonSection: React.FC<LessonSectionProps> = ({
  section,
  lessonId,
  onComplete,
  onNext,
}) => {
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { updateProgress, getProgress } = useProgress();

  const handleSectionComplete = () => {
    if (!isCompleted) {
      setIsCompleted(true);
      updateProgress(lessonId, section.id);
      onComplete();
    }
  };

  const sectionCompleted = getProgress(lessonId, section.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 w-full"
    >
      <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/UrsmFxElp5k"
  frameBorder="0"
  allowFullScreen
  title="Intro Video"
/>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          {sectionCompleted ? (
            <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
          ) : (
            <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex-shrink-0" />
          )}
          {section.title && (
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
          )}
        </div>

        {section.hint && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHint(!showHint)}
            className="flex items-center space-x-2 px-3 py-2 text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors flex-shrink-0"
          >
            <Lightbulb className="h-4 w-4" />
            <span className="text-sm font-medium">
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </span>
          </motion.button>
        )}
      </div>

      {/* Hint */}
      {showHint && section.hint && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg"
        >
          <div className="flex items-start space-x-2">
            <Lightbulb className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-medium text-orange-800 mb-1">Hint:</p>
              <p className="text-orange-700 text-sm">{section.hint}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Section Text */}
{/*       {section.text && (
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700 font-medium">{section.text}</p>
        </div>
      )} */}
        {/* Section Text */}
{section.text && (
  <div
    className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 text-gray-700 font-medium"
    dangerouslySetInnerHTML={{ __html: section.text }}
  />
)}


      {/* Next Button */}
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            handleSectionComplete();
            onNext();
          }}
          className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium shadow-sm"
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Completion Message */}
      {isCompleted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg"
        >
          <div className="flex items-center space-x-2 text-emerald-800">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Section completed! Great work!</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
