'use client';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className='mb-4' style={{ fontSize: 30 }}>List page:</h1>
      <div className='ml-2'>
        <div>
          <button onClick={() => {
            router.push('create-post');
          }}>Football Fan</button>
        </div>
        <div>
          <button onClick={() => {
            router.push('create-post');
          }}>BLing Fan</button>
        </div>
        <div>
          <button onClick={() => {
            router.push('create-post');
          }}>MX</button>
        </div>
        <div>
          <button onClick={() => {
            router.push('create-post');
          }}>Page math</button>
        </div>
      </div>
    </main>
  )
}
