import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchModal = () => {
  return (
    <div>
      <button className="bg-[#d9f2ed] size-[35px] p-2 flex items-center justify-center rounded-lg">
        <RiSearchLine color="#01aa85" className="size-[18px]" />
      </button>
    </div>
  );
};

export default SearchModal;
