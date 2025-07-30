import React, { useState } from "react";
const phoneNumber = import.meta.env.VITE_number;
function Chat() {
  const [hidden, setHidden] = useState("hidden");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text == "") return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div
        onClick={() => setHidden(hidden == "hidden" ? "visible" : "hidden")}
        className={`fixed inset-0 z-50  bg-gray-200 opacity-50   ${hidden}`}
      ></div>
      <div
        className={`z-50 fixed w-[70%] md:w-[30%] left-1/2 top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl shadow-black xl:p-0 ${hidden}`}
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Contact Directly
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message here.."
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-500 text-white border-2 bg-primary-600 hover:bg-blue-600 shadow-2xl focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <img
        onClick={() => setHidden(hidden == "hidden" ? "visible" : "hidden")}
        src="./public/chat-bot-icon.jpg"
        className="h-22 w-22 animate-bounce right-5 bottom-7 fixed md:bottom-10 md:right-8 cursor-pointer text-indigo-800 "
        alt="chat"
        placeholder="chat"
      />
    </>
  );
}

export default Chat;
