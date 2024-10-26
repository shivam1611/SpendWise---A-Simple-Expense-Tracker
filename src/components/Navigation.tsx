import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation w-80 bg-black h-screen ">
      <div className="logo_section w-full h-32 flex justify-center items-center">
        <h2 className="text-3xl text-white font-head ">
          <span className="text-3xl text-primaryBlue font-extrabold font-head px-2">
            Spend
          </span>
          Wise
        </h2>
      </div>
      <ul className="navlist h-3/5 w-full flex justify-start items-center flex-col p-6  gap-6 mt-10">
        <NavLink
          className="w-full h-14 text-xl rounded-lg flex justify-start items-center p-8 gap-4 text-lightgray "
          to="/"
        >
          <i className=" text-2xl fa-solid fa-house"></i> Home
        </NavLink>
        <NavLink
          className="w-full h-14 text-xl rounded-lg flex justify-start items-center p-8 gap-4 text-lightgray  "
          to="/transactions"
        >
          <i className=" text-2xl fa-solid fa-right-left"></i> Transactions
        </NavLink>
        <NavLink
          to="/accounts"
          className="w-full h-14 text-xl rounded-lg flex justify-start  p-8 gap-4 items-center text-lightgray"
        >
          <i className=" text-2xl fa-solid fa-file-invoice"></i> Accounts
        </NavLink>
        <NavLink
          to="/expenses"
          className="w-full h-14 text-xl rounded-lg flex justify-start  p-8 gap-4 items-center text-lightgray"
        >
          <i className=" text-2xl fa-solid fa-wallet"></i> Expenses
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
