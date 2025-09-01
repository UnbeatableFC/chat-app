import React, { useEffect, useMemo, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import messageData from "../data/messageData";
import { formatTimestamp } from "../utils/formatTimeStamp";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const scrollref = useRef(null);

  const senderEmail = "baxo@mailinator.com";

  useEffect(() => {
    setMessages(messageData);
  }, []);

  useEffect(() => {
    if (scrollref.current) {
      scrollref.current.scrollTop = scrollref.current.scrollHeight;
    }
  }, [messages]);

  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => {
      const aTimestamp =
        a.timestamp.seconds + a.timestamp.nanoseconds / 1e9;
      const bTimestamp =
        b.timestamp.seconds + b.timestamp.nanoseconds / 1e9;

      return aTimestamp - bTimestamp;
    });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: senderEmail,
      text: messageText,
      timestamp: {
        seconds: Math.floor(Date.now() / 1000),
        nanoseconds: 0,
      },
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");
  };

  return (
    <section className="flex flex-col items-start justify-start h-screen w-full background-image">
      <header className="borber-b border-gray-400 w-full h-[82px] md:h-fit p-4 bg-white">
        <main className="flex items-center gap-3">
          <span>
            <img
              src="/default.jpg"
              className="size-11 object-cover rounded-full"
              alt=""
            />
          </span>
          <span>
            <h3 className="font-semibold text-[#2a3d39] text-lg">
              User
            </h3>
            <p className="font-light text-[#2a3d39] text-sm">@user</p>
          </span>
        </main>
      </header>

      <main className="relative custom-scrollbar h-[100vh] w-full flex flex-col justify-between">
        <section className="px-3 pt-5 pb-20 lg:pb-10">
          <div ref={scrollref} className="custom-scrollbar h-[80vh]">
            {sortedMessages?.map((msg, idx) => (
              <>
                {msg?.sender === senderEmail ? (
                  <div className="flex flex-col items-end w-full">
                    <span className="flex gap-3">
                      <div className="h-auto">
                        <div className="flex items-center bg-white justify-center p-6 rounded-lg shadow-sm">
                          <h4 className="font-medium text-[17px] text-gray-800 w-full break-words">
                            {msg.text}
                          </h4>
                        </div>
                        <p className="text-gray-400/50 text-xs mt-3">
                          {formatTimestamp(msg?.timestamp)}
                        </p>
                      </div>
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-start w-full">
                    <span className="flex gap-3 w-[40%] h-auto items-start ms-3">
                      <img
                        src="/default.jpg"
                        className="size-11 object-cover rounded-full"
                        alt=""
                      />

                      <div className="flex flex-col items-start w-full">
                        <div className="flex items-center bg-white justify-center p-6 rounded-lg shadow-sm">
                          <h4>{msg?.text}</h4>
                        </div>
                        <p className="text-gray-400/50 text-xs mt-3">
                          {formatTimestamp(msg?.timestamp)}
                        </p>
                      </div>
                    </span>
                  </div>
                )}
              </>
            ))}
          </div>
        </section>
        <div className="sticky lg:bottom-0 bottom-[60px] h-fit w-[96%] mx-auto">
          <form
            className="flex items-center bg-white h-[45px] shadow-lg w-full px-2 rounded-lg relative"
            onSubmit={handleSendMessage}
          >
            <input
              type="text"
              placeholder="Write your message"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="h-full text-[#2a3d39] outline-none text-[16px] pl-3 pr-[50px] rounded-lg w-full"
              name=""
              id=""
            />
            <button
              type="submit"
              className="absolute flex items-center justify-center right-3 p-2 rounded-full bg-[#d9f2ed] hover:bg-[#c8eae3]"
            >
              <RiSendPlaneFill color="#01aa85" />
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Chatbox;
