
import { FaTwitter } from "react-icons/fa";
import { FiHome, FiBell, FiBookmark, FiUser } from "react-icons/fi";
import {
  BiHash,
  BiEnvelope,
  BiListUl,
  BiDotsHorizontalRounded,
} from "react-icons/bi";

import FeedCard from "@/components/FeedCard";



interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <FiHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <FiBell />,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <FiBookmark />,
  },
  {
    title: "Lists",
    icon: <BiListUl />,
  },
  {
    title: "Profile",
    icon: <FiUser />,
  },
  {
    title: "More",
    icon: <BiDotsHorizontalRounded />,
  },
];

export default function Home() {
  return (
    <div >
      <div className="h-screen w-screen grid grid-cols-12 px-56">
        <div className="col-span-3  pt-1 ml-8">
          <div className="text-2xl w-fit h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-4 text-xl font-semibold pr-4 py-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex w-fit  justify-start items-center gap-4 hover:bg-gray-800 rounded-full py-2 px-4 mt-2 cursor-pointer "
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1DA1F2] py-4 w-full rounded-full font-semibold  text-lg">Tweet</button>

            </div>

          </div>
        </div>
        <div className="col-span-5 border h-screen overflow-scroll border-gray-600 ">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3">sd</div>
      </div>
    </div>
  );
}
