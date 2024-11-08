import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz page',
  description: 'Your quiz results page description',
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
