import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterInput = ({ value, placeholder, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    className="border w-[80%] text-gray-500 text-sm p-2 m-1"
  />
);

const PolicyInfo = ({ children }) => (
  <div className="text-xs w-[80%] mx-auto m-4 text-gray-500">{children}</div>
);

const Register = () => {
  const linkStyle="text-[#02376b]";
  return (
    <div className="text-center mt-5 ">
      <div className="border w-[30%] mx-auto border-gray-300">
        <div className="text-4xl m-10">Instagram</div>
        <div>註冊即可查看朋友的相片和影片。</div>
        <div className="flex w-[55%] mx-auto m-4 text-[#0095f6] hover:text-[#00386c]">
          <FaFacebookSquare className="text-2xl" />
          <span> &nbsp;&nbsp;用facebook帳戶登入</span>
        </div>
        <div className="flex items-center c mx-auto m-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">&nbsp;或&nbsp;</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <RegisterInput placeholder="手機號碼或電子郵件地址" />
        <RegisterInput placeholder="密碼" type="password" />
        <RegisterInput placeholder="全名" />
        <RegisterInput placeholder="用戶名稱" />
        <PolicyInfo>
          使用我們服務的用戶可能上傳了你的聯絡資料到 Instagram。
          <a className={linkStyle}>瞭解詳情</a>
        </PolicyInfo>

        <PolicyInfo>
          註冊即表示你同意我們的
          <a className={linkStyle}>服務政策</a>、<a className={linkStyle}>《隱私政策》</a>和
          <a className={linkStyle}>《Cookie 政策》</a>。
        </PolicyInfo>
        <button className="bg-[#67b5fa] w-[80%] rounded-lg p-1 text-white m-2 mb-10">
          註冊
        </button>
      </div>
      <div className="m-4 border border-gray-300 w-[30%] mx-auto p-5">
        <span>已經有帳號嗎？</span>
        <Link to="/login" className="text-[#0095f6]">
          登入
        </Link>
      </div>
    </div>
  );
};

export default Register;
