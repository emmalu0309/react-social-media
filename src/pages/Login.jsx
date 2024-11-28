import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LoginInput = ({ value, placeholder, type = "text" }) => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="border w-[80%] text-gray-500 text-sm p-2 m-1"
    />
  );
 
const Login = () => {
  return (
    <div className="text-center mt-20 ">
      <div className="border w-[30%] mx-auto border-gray-300">
        <div className="text-4xl m-10">Instagram</div>
        <LoginInput placeholder="手機號碼、用戶名稱或電子郵件地址" />
        <LoginInput placeholder="密碼" type="password" />
        <button className="bg-[#67b5fa] w-[80%] rounded-lg p-1 text-white m-2">
          登入
        </button>
        <div className="flex items-center w-[80%] mx-auto m-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">&nbsp;或&nbsp;</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex w-[55%] mx-auto m-4 text-[#0095f6] hover:text-[#00386c]">
          <FaFacebook className="text-2xl" />
          <span> &nbsp;&nbsp;用facebook帳戶登入</span>
        </div>
        <div className="m-5">
          <a className="">忘記密碼？</a>
        </div>
      </div>
      <div className="m-4 border border-gray-300 w-[30%] mx-auto p-5">
        <span>沒有帳號嗎？</span>
        <Link to="/register" className="text-[#0095f6]">註冊</Link>
        
      </div>
    </div>
  );
};

export default Login;
