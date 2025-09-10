import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { lessons } from './data/lessons';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLessonId, setCurrentLessonId] = useState(lessons[0]?.id || '');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/qiSCMNBIP2g?start=6127";


  const currentLesson = lessons.find(lesson => lesson.id === currentLessonId);
  const currentSection = currentLesson?.sections[currentSectionIndex];

  const handleLessonChange = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentSectionIndex(0);
    setSidebarOpen(false);
  };

  const handleNextSection = () => {
    if (currentLesson && currentSectionIndex < currentLesson.sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      const currentLessonIndex = lessons.findIndex(l => l.id === currentLessonId);
      if (currentLessonIndex < lessons.length - 1) {
        const nextLesson = lessons[currentLessonIndex + 1];
        setCurrentLessonId(nextLesson.id);
        setCurrentSectionIndex(0);
      }
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    } else {
      const currentLessonIndex = lessons.findIndex(l => l.id === currentLessonId);
      if (currentLessonIndex > 0) {
        const prevLesson = lessons[currentLessonIndex - 1];
        setCurrentLessonId(prevLesson.id);
        setCurrentSectionIndex(prevLesson.sections.length - 1);
      }
    }
  };

  const canGoNext = currentLesson && (
    currentSectionIndex < currentLesson.sections.length - 1 ||
    lessons.findIndex(l => l.id === currentLessonId) < lessons.length - 1
  );

  const canGoPrevious = currentSectionIndex > 0 || 
    lessons.findIndex(l => l.id === currentLessonId) > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentLesson={currentLesson?.title} />

      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        {/* Sidebar toggle for mobile */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-20 left-4 z-50 p-3 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>

        {/* Sidebar */}
        <Sidebar
  currentLessonId={currentLessonId}
  onLessonChange={handleLessonChange}
  isOpen={sidebarOpen}
  onToggle={() => setSidebarOpen(!sidebarOpen)}
  className="w-80 h-full overflow-y-auto"
 />
       <>
      {/* The clickable link */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-600 underline cursor-pointer hover:text-blue-800"
      >
        Watch Python Intro Video
      </button>

      {/* Popup overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside iframe
          >
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close video"
            >
              &times;
            </button>
          </div>
        </div>
      )}


        {/* ✅ Main content - fixed: removed `lg:ml-80` */}
        <main className="flex-1 w-full h-full overflow-y-auto">
          <div className="w-full max-w-none mx-auto p-4 lg:p-8 pb-24">
            {currentLesson && currentSection ? (
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {currentLesson.title}
                      </h1>
                      <p className="text-gray-600 text-sm lg:text-base">{currentLesson.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="text-sm text-gray-500 mb-1 text-right">
                        Section {currentSectionIndex + 1} of {currentLesson.sections.length}
                      </div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${((currentSectionIndex + 1) / currentLesson.sections.length) * 100}%` 
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentSection.title}
                  </h2>
                  <p className="text-gray-600 mb-8">{currentSection.text}</p>
                </div>

                <div className="flex items-center justify-between pt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePreviousSection}
                    disabled={!canGoPrevious}
                    className="flex items-center space-x-2 px-4 lg:px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextSection}
                    disabled={!canGoNext}
                    className="flex items-center space-x-2 px-4 lg:px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to AI Tutor!
                </h2>
                <p className="text-gray-600 mb-8">
                  Select a lesson from the sidebar to start your programming journey.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
{/*     </div> */}
  );
}

export default App;
