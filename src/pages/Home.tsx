import Account from "../components/Account";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="container flex gap-4 bg-whiteFrost p-4 h-full justify-start items-center  ">
      {/* Left COntainer  */}
      <div className="left_section w-[28rem] h-full  p-4">
        {/* Profile Card  */}
        <div className="profile-card w-full h-fit flex justify-start items-center rounded-md flex-col p-6 bg-white py-12 pt-12 ">
          <div className="profile-img-section w-28 h-28 ">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZoRenSO5AH8O8q-zn3CfvGxBsSArwavvyw&s"
              alt=""
            />
          </div>
          <h1 className="name-section text-[1.3rem] font-bold text-black font-body mt-3">
            Pat Cummins
          </h1>
          <div className="balance balance-section mt-8  ">
            <p className="text-lg text-darkGray font-bold ">Total Balance</p>
            <h1 className="font-body text-3xl mt-2 text-black font-bold ">
              <span className="mt-6 font-body text-3xl font-bold text-primaryBlue pe-2">
                $
              </span>
              45000
            </h1>
          </div>
          <div className="accounts_section w-full flex flex-col justify-start items-center gap-2 mt-12 max-h-56 overflow-y-scroll">
            <Account
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSquouX3qJzp6uZwleCOtTBppHfDKlN6vDHg&s"
              bank_name="HDFC Bank"
              amount={550}
            />
            <Account
              logo="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
              bank_name="State Bank of India"
              amount={5530}
            />
            <Account
              logo="https://www.fintechfutures.com/files/2022/03/axis-bank-logo.jpg"
              bank_name="axis Bank"
              amount={4550}
            />
            <Account
              logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbuKeXwKCeoGLdIyqo9IgFIptmg88MZBypA&s"
              bank_name="bank of baroda"
              amount={550}
            />
          </div>
        </div>

        {/* add new account section  */}
        <div className="add-neww mt-16 w-full h-20 bg-white flex justify-start items-center p-6 rounded-md gap-6">
          <div className="left w-14 h-14 rounded-full bg-whiteFrost flex justify-center items-center shadow-md shadow-lightgray">
            <i className=" text-3xl  text-darkGray fa-solid fa-plus"></i>
          </div>
          <div className="text">
            <p className="text-lg text-darkGray  font-bold">
              Add a New Account
            </p>
            <p className="text-base capitalize text-lightgray font-bold">
              debit | Credit
            </p>
          </div>
        </div>
      </div>

      {/* right Container  */}
      <div className="right_section w-[72%]  h-full p-4  overflow-y-scroll">
        <div className="search_section w-4/6 relative">
          <input
            className="w-full h-16 rounded-full text-black px-16 text-base"
            type="text"
            name=""
            id=""
            placeholder="Search Here.."
          />
          <i className="fa-solid fa-magnifying-glass absolute left-6 top-[1.19rem] text-2xl text-darkGray "></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
