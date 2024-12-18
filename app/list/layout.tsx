import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Card list',
  description: 'FPTI Card List',
};

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
