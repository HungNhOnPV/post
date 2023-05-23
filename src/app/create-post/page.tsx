'use client';

import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState('');

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className='mb-4' style={{ fontSize: 30 }}>Create post:</h1>
      <div className='ml-2'>
        <input
          value={content}
          onChange={(e) =>{
            setContent(e?.target?.value);
          }}
          name="content"
          style={{padding: 8, fontSize: 18, color: 'black'}}
        />
        <button
          className="ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => {
            alert('Your post success.')
          }}
        >
          Post
        </button>
      </div>
    </main>
  )
}
