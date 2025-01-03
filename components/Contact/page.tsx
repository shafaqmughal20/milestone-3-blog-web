import React from 'react'

export default function page() {
  return (
    <div>
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
  <h1 className="text-2xl text-gray-800 font-bold text-center">Contact us</h1>
  <form className="mt-8 space-y-4">
    <input
      type="text"
      placeholder="Name"
      className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
    />
    <input
      type="text"
      placeholder="Subject"
      className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
    />
    <textarea
      placeholder="Message"
      rows={4}
      className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"
      defaultValue={""}
    />
    <button
      type="button"
      className="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none"
    >
      Send
    </button>
  </form>
</div>

    </div>
  )
}
