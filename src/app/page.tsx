import Image from 'next/image'
import { RandomFox } from '../../components/RandomFox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world

      <RandomFox />
    </main>
  )
}
