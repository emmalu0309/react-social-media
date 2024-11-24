import { Link } from "react-router-dom";
const Header = ({className}) => {
  const optionStyle = "p-4 hover:bg-gray-700 cursor-pointer";
  return (
    // <div className={`${className}flex flex-col items-center p-4 bg-black text-white`}>
    <div className={`${className} flex flex-col p-4 bg-black text-white h-full`}>
      <div className=" text-xl font-semibold mb-4">Instagram </div>
      <div className=" flex flex-col space-y-4">
        <div className={optionStyle}>首頁 </div>
        <div className={optionStyle}>搜尋 </div>
        <div className={optionStyle}>探索 </div>
        <div className={optionStyle}>連續短片 </div>
        <div className={optionStyle}>訊息 </div>
        <div className={optionStyle}>通知 </div>
        <div className={optionStyle}>建立 </div>
        <Link to="/profile" className={optionStyle}>
          個人檔案
        </Link>
      </div>
      <div className="p-4 mt-auto">更多 </div>
    </div>
  );
};

export default Header;
