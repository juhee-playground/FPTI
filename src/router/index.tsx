import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const LandingPage = lazy(() => import('@/components/home/LandingPage'));
const QuizPage = lazy(() => import('@/components/quiz'));
const ResultPage = lazy(() => import('@/components/result'));

const renderLoader = () => <p>Loading...</p>;

export default function Router() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/result/:fpti' element={<ResultPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  );
}
