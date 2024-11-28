import { useRef } from "react";
import { IoSettingsOutline } from "react-icons/io5";

function ProfilePage() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="flex items-center p-10 border pl-[10%]">
        <div className="w-30 h-30 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-[10%]">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">username</h1>
            <button className="px-4 py-1 bg-[#3c3c3c] text-white text-sm font-medium rounded-md">
              編輯個人檔案
            </button>
            <button className="px-4 py-1 bg-[#3c3c3c] text-white text-sm font-medium rounded-md">
              查看典藏
            </button>
            <button className="px-4 py-1 bg-[#3c3c3c] text-white text-sm font-medium rounded-md">
            <IoSettingsOutline />
            </button>
          </div>
          <div className="flex gap-6 mt-4 text-sm">
            <span>
              <strong>10</strong> posts
            </span>
            <span>
              <strong>150</strong> followers
            </span>
            <span>
              <strong>200</strong> following</span>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Full Name</p>
            <p className="text-gray-600 text-sm">This is a bio description.</p>
          </div>
        </div>
      </header>

      {/* Highlights Section */}
      <section className="relative mt-6 bg-white py-4 px-6">
        <h2 className="text-md font-semibold">Story Highlights</h2>
        <div className="relative">
          {/* 左箭頭按鈕 */}
          <button
            onClick={scrollLeft}
            className="absolute w-6 h-6 left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md z-10 flex justify-center items-center "
          >
            &larr;
          </button>

          {/* 滾動內容區域 */}
          <div
            ref={scrollRef}
            className="flex gap-[8%] mt-4 overflow-x-auto no-scrollbar  "
          >
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden">
                  <img
                    src={`https://via.placeholder.com/150?text=Highlight+${index + 1}`}
                    alt={`Highlight ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm mt-2 text-gray-700">Highlight {index + 1}</p>
              </div>
            ))}
          </div>

          {/* 右箭頭按鈕 */}
          <button
            onClick={scrollRight}
            className="absolute w-6 h-6 right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md z-10 flex justify-center items-center "
          >
            &rarr;
          </button>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="flex justify-around bg-white border-t border-b mt-6 text-sm">
        <div className="flex items-center gap-1 py-2 cursor-pointer text-black font-semibold">
          <span>Posts</span>
        </div>
        <div className="flex items-center gap-1 py-2 cursor-pointer text-gray-500">
          <span>Reels</span>
        </div>
        <div className="flex items-center gap-1 py-2 cursor-pointer text-gray-500">
          <span>Tagged</span>
        </div>
      </div>

      {/* Content Grid */}
      <section className="grid grid-cols-3 gap-2 mt-6 p-2">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-300 rounded-md overflow-hidden"
          >
            <img
              src={`https://via.placeholder.com/150?text=Post+${index + 1}`}
              alt={`Post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProfilePage;