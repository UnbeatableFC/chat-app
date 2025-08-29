import React from "react";

const Chatbox = () => {
  return (
    <section className="flex flex-col items-start justify-start h-screen w-full background-image">
      <header className="borber-b border-gray-400 w-full h-[70px] md:h-fit p-4 bg-white">
        <main className="flex items-center gap-3">
          <span>
            <img
              src="/default.jpg"
              className="size-11 object-cover rounded-full"
              alt=""
            />
          </span>
          <span>
            <h3 className="font-semibold text-[#2a3d39] text-lg">User</h3>
            <p className="font-light text-[#2a3d39] text-sm">@user</p>
          </span>
        </main>
      </header>

      <main className="relative h-[100vh] w-full flex flex-col justify-between">
        <section className="px-3 pt-5 pb-20 lg:pb-10">
          <div className="overflow-auto h-[80vh]" >
            <div className="flex flex-col items-end">
              <span className="flex gap-3">
                <div className="h-auto">
                  <div>
                    <h4>Hey Buddy</h4>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Chatbox;
