import { IoMdHeartEmpty } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { ImCompass } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";

function HomePage() {
  return (
    <div className="flex bg-black text-white min-h-screen justify-center">
      {/* 左側主區域 */}
      <div className="w-full max-w-2xl mx-auto px-4">
        {/* 頂部 Stories 區域 */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-4">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="w-16 h-16 rounded-full border-2 border-pink-500 overflow-hidden">
                <img
                  src={`https://via.placeholder.com/150?text=Story+${index + 1}`}
                  alt={`Story ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs mt-2">User {index + 1}</p>
            </div>
          ))}
          {/* 向右滾動按鈕 */}
          <button className="ml-4  w-6 h-6 right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md z-10 flex justify-center items-center ">
            &rarr;
          </button>
        </div>

        {/* 貼文區域 */}
        <div className="space-y-6 w-full">
          {[...Array(5)].map((_, index) => (
            <div key={index} className=" rounded-lg p-4 mx-auto w-[75%]">
              {/* 貼文標題 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-semibold">user_{index + 1}</p>
                </div>
                <span className="text-gray-500">...</span>
              </div>

              {/* 貼文圖片 */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src={`https://via.placeholder.com/600x400?text=Post+${index + 1}`}
                  alt={`Post ${index + 1}`}
                  className="w-full "
                />
              </div>

              {/* 貼文互動區 */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4">
                  <button><IoMdHeartEmpty /></button>
                  <button><BiMessageRounded /></button>
                  <button><ImCompass /></button>
                </div>
                <button><CiBookmark /></button>
              </div>

              {/* 貼文描述 */}
              <p className="text-sm mt-4">
                <span className="font-semibold">user_{index + 1}:</span>{" "}
                This is a description for post {index + 1}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 右側邊欄 */}
      <div className="hidden lg:block w-80 px-4">
        {/* 用戶個人資訊 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">emma_lu</p>
            <p className="text-gray-500 text-sm">Emma Lu</p>
          </div>
        </div>

        {/* 推薦用戶 */}
        <div>
          <h2 className="text-sm font-semibold mb-4">為你推薦</h2>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={`https://via.placeholder.com/50?text=User+${index + 1}`}
                    alt={`User ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm">User {index + 1}</p>
              </div>
              <button className="text-blue-500 text-xs">追蹤</button>
            </div>
          ))}
        </div>

        {/* 底部版權 */}
        <div className="text-gray-500 text-xs mt-6">
          <p>關於・說明・API・工作機會</p>
          <p>隱私・條款・地點・Meta 認證</p>
          <p className="mt-4">&copy; 2024 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;