import React from "react";

interface AccountProps {
  logo: string;
  bank_name: string;
  amount: number;
}

const Account: React.FC<AccountProps> = ({ logo, bank_name, amount }) => {
  return (
    <div className="container w-full h-[4.4rem] p-2 rounded-md flex justify-start item-center gap-4 relative">
      {/* logo bank */}
      <div className="left-section img-section w-12 h-full flex justify-center items-center">
        <img src={logo} className="img w-10 h-10 object-cover " alt="" />
      </div>

      {/* details */}
      <div className="details h-full w-auto">
        <p className="name text-base text-darkGray font-bold capitalize">
          {bank_name}
        </p>
        <p className="money text-lg font-bold"> $ {amount}</p>
      </div>

      {/* do more details */}
      <div className="do-more h-full flex justify-center items-center absolute right-4 top-0 cursor-pointer ">
        <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
      </div>
    </div>
  );
};

export default Account;
