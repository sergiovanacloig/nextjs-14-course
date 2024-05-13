import { Header } from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  console.log('Executing...');
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
