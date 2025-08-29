import React, { useEffect, useMemo, useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import SearchModal from "./SearchModal";

import chatData from "../data/chats";
import { formatTimestamp } from "../utils/formatTimeStamp";

const Chatlist = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(chatData);
  }, []);

  const sortedChats = useMemo(() => {
    return [...chats].sort((a, b) => {
      const aTimestamp =
        a.lastMessageTimestamp.seconds +
        a.lastMessageTimestamp.nanoseconds / 1e9;
      const bTimestamp =
        b.lastMessageTimestamp.seconds +
        b.lastMessageTimestamp.nanoseconds / 1e9;

      return bTimestamp - aTimestamp;
    });
  }, [chats]);

  return (
    <section className="relative hidden lg:flex flex-col items-start justify-start bg-white h-[100vh] w-full md:w-[600px]">
      <header className="flex items-center justify-between w-full lg:border-b border-b-1 border-[#46424252] p-4 sticky md:static top-0 z-[100]">
        <main className="flex items-center gap-3">
          <img
            src="/default.jpg"
            className="size-[44px] object-cover rounded-full"
            alt=""
          />
          <span>
            <h3 className="p-0 font-semibold text-[#2a3d39] md:text-[17px]">
              User
            </h3>
            <p className="p-0 font-light text-[#2a3d39] text-[15px]">
              @user
            </p>
          </span>
        </main>
        <button className="bg-[#d9f2ed] size-[35px] p-2 flex items-center justify-center rounded-lg">
          <RiMore2Fill color="#01aa85" className="size-[28px]" />
        </button>
      </header>
      <div className="w-full mt-5 px-5">
        <header className="flex items-center justify-between">
          <h3 className="text-[16px]">
            Messages ({chats?.length || 0})
          </h3>
          <SearchModal />
        </header>
      </div>

      <main className="flex flex-col items-start mt-[1.5rem] pb-3 w-full overflow-y-auto">
        {sortedChats?.map((chat) => (
          <>
            {chat?.users
              ?.filter(
                (user) => user?.email !== "baxo@mailinator.com"
              )
              ?.map((u) => (
                <button
                  className="flex items-start justify-between w-full border-b border-gray-500/20 px-5 py-3"
                  key={chat?.uid}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={u.image}
                      className="size-[40px] rounded-full object-cover"
                      alt=""
                    />

                    <span>
                      <h2 className="p-0 font-semibold text-[#2a3d39] text-left text-[17px]">
                        {u.fullName || "User"}
                      </h2>
                      <p className="p-0 font-light text-[#2a3d39] text-left text-[14px]">
                        {chat.lastMessage}
                      </p>
                    </span>
                  </div>
                  <div>
                    <p className="p-0 font-regular text-gray-400 text-left text-[11px]">
                      {formatTimestamp(chat?.lastMessageTimestamp)}
                    </p>
                  </div>
                </button>
              ))}
          </>
        ))}
      </main>
    </section>
  );
};

export default Chatlist;
