
import { FaTwitter } from "react-icons/fa";
import { FiHome, FiBell, FiBookmark, FiUser } from "react-icons/fi";
import {
  BiHash,
  BiEnvelope,
  BiListUl,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import {Inter} from 'next/font/google'
import FeedCard from "@/components/FeedCard";

const inter = Inter({
  subsets: ['latin'],
});

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
    <div className={inter.className}>
      <div className="h-screen w-screen grid grid-cols-12 px-56">
        <div className="col-span-3  pt-8">
          <div className="text-4xl w-fit h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-4 py-4">
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
        <div className="col-span-6 border-r-[1px]  border-l-[1px] border-">
          <FeedCard/>
        </div>
        <div className="col-span-3">sd</div>
      </div>
    </div>
  );
}
