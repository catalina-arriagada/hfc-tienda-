import Link from 'next/link';
import './page.module.css';
import Index from './Components/Index';

export default function Home() {
  return (
    <main>
      <Link href="/"><Index /></Link>
    </main>
  );
}
