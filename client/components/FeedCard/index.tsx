import Image from "next/image";
import React from "react";
import { FaRegHeart, FaRegComment, FaRetweet, } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-4 hover:bg-slate-800 transition-all cursor-pointer  ">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/190604571?v=4"
            alt="user image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>sebastian Andrews</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            similique est mollitia totam, quasi aspernatur dicta delectus, dolor
          </p>
          <div className="flex justify-between mt-5 text-xl items-center w-[80%]">
            <div>
              <FaRegComment />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <MdIosShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
