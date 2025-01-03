// import { client } from '@/sanity/lib/client'
// import React from 'react'

// interface I {
//   name : string
//   body : string
// }

// export default async function page() {
//   let data:I [] = await client.fetch(`*[_type == 'blog']`)
//   console.log(data)
//   return (
//     <div className=' text-center justify-center px-4 py-2 font-serif'>
//       {
//         data.map((item) => (
//           <div>
//            <h2>{item.name}
//             <br />
//             <br />
//             {item.body}</h2>
//           </div>
          
//         ))
//       }
//     </div>
//   )
// }
import { client } from '@/sanity/lib/client';
import React from 'react';
import Comment from "@/app/Comment/page"

interface I {
  name: string;
  body: string;
}

export default async function Page() {
  const data: I[] = await client.fetch(`*[_type == 'blog']`);
  console.log(data);

  return (
    <div className='bg-gradient-to-r from-black to-teal-600 '>
       <div className="flex flex-col items-center px-4 py-6 space-y-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 border border-black shadow-black hover:scale-105 transition duration-300 ease-in-out"
        >
          <h2 className="text-xl font-serif text-gray-800 mb-2 text-center justify-center ">{item.name}</h2>
          <p className="text-gray-600 font-serif">{item.body}</p>
        </div>
      ))}
    </div>
    <Comment/>
    </div>
  );
}
