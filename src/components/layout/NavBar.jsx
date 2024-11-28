import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ImCompass2 } from "react-icons/im";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaFacebookMessenger } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { BiPulse } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";

const NavBar = ({ className }) => {
  const liStyle = " p-4 hover:bg-[#3c3c3c] rounded-xl flex items-center";
  const optionStyle =
    "p-3 hover:bg-[#3c3c3c] cursor-pointer flex items-center space-x-4 rounded-lg";
  const iconSize = "text-2xl";
  const divOptionStyle =" flex flex-col space-y-4";

  const moreButtonRef = useRef(null);
  const menuDropdownRef = useRef(null);

  useEffect(() => {
    const moreButton = moreButtonRef.current;
    const menuDropdown = menuDropdownRef.current;

    const handleToggleMenu = () => {
      menuDropdown.classList.toggle("hidden");
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        menuDropdown.classList.add("hidden");
      }
    };
    moreButton?.addEventListener("click", handleToggleMenu);
    document.addEventListener("click", handleClickOutside);

    return () => {
      moreButton.removeEventListener("click", handleToggleMenu);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${className} flex flex-col p-4 bg-black text-white h-full`}
    >
      <div
        className=" text-2xl font-semibold mb-4 p-4"
        style={{ fontFamily: "'Playwrite Australia Tasmania', cursive" }}
      >
        Instagram{" "}
      </div>
      <div className={divOptionStyle}>
        <Link to="MainContent" className={optionStyle}>
          <GoHome className={iconSize} />
          <span>首頁</span>
        </Link>
        <div className={optionStyle}>
          <FaSearch className={iconSize} />
          <span>搜尋</span>
        </div>
        <div className={optionStyle}>
          <ImCompass2 className={iconSize} />
          <span>探索</span>
        </div>
        <div className={optionStyle}>
          <TfiVideoClapper className={iconSize} />
          <span>連續短片</span>
        </div>
        <div className={divOptionStyle}>
          <Link to="message" className={optionStyle}>
            <FaFacebookMessenger className={iconSize} />
            <span>訊息</span>
          </Link>
        </div>
        <div className={optionStyle}>
          <FaRegHeart className={iconSize} />
          <span>通知</span>
        </div>
        <div className={optionStyle}>
          <MdOutlineAddBox className={iconSize} />
          <span>建立</span>
        </div>
        <Link to="profile" className={optionStyle}>
          個人檔案
        </Link>
      </div>
      <div className="menu-container mt-auto">
        <button
          ref={moreButtonRef}
          id="more-button"
          className={`p-4  ${optionStyle} `}
        >
          <BsList className={iconSize} />
          <span>更多</span>
        </button>
        <div
          ref={menuDropdownRef}
          id="menu-dropdown"
          className="menu hidden bg-[#262626] text-white p-6 rounded-xl absolute bottom-14 left-0 w-[120%] z-50"
        >
          <ul>
            <li className={liStyle}>
              <MdOutlineSettings />
              <span className="p-2">設定</span>
            </li>
            <li className={liStyle}>
              <BiPulse />
              <span className="p-2">你的動態</span>
            </li>
            <li className={liStyle}>
              <FaRegBookmark />
              <span className="p-2">我的珍藏</span>
            </li>
            <li className={liStyle}>
              <IoMoonOutline />
              <span className="p-2">切換外觀</span>
            </li>
            <li className={liStyle}>
              <TbMessageReport />
              <span className="p-2">回報問題</span>
            </li>
            <hr />
            <li className={liStyle}>切換帳號</li>
            <li className={liStyle}>
              <Link to="login">登出</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
