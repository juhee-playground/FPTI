import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz Results',
  description: 'Check out your quiz results!',
};

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
