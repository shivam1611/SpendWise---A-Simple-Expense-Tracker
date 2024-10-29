import Account from "../components/Account";

const Home = () => {
  return (
    <div className="container flex gap-4 bg-whiteFrost p-4 h-full justify-start items-center  ">
      {/* Left COntainer  */}
      <div className="left_section w-[28rem] h-full  p-4">
        {/* Profile Card  */}
        <div className="profile-card w-full h-fit flex justify-start items-center rounded-lg flex-col p-6 bg-white py-12 pt-12 ">
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
        <div className="add-neww mt-16 w-full h-20 bg-white flex justify-start items-center p-6 rounded-lg gap-6">
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
      <div className="right_section w-[72%]  h-full p-4  overflow-y-scroll flex flex-col justify-start items-start gap-4">
        {/* Search icon   */}
        <div className="search_section w-4/6 relative">
          <input
            className="w-full h-16 rounded-full text-black px-16 text-base shadow-lg shadow-lightGray"
            type="text"
            name=""
            id=""
            placeholder="Search Here.."
          />
          <i className="fa-solid fa-magnifying-glass absolute left-6 top-[1.19rem] text-2xl text-darkGray "></i>
        </div>

        {/* Account Information and cards   */}
        <div className="w-full h-[21rem] mt-6 p-6 rounded-lg bg-white flex justify-between items-center shadow-lg shadow-lightGray">
          <div className="account_info w-[45%] h-full flex flex-col justify-start items-start gap-10 p-4 ">
            <h1 className="title font-head text-black text-2xl font-bold">
              Account Information
            </h1>
            <div className="section flex flex-col justify-start items-start gap-4 w-full ">
              <div className="subsection w-full flex justify-between items-center ">
                <h1 className="property text-lg font-body text-darkGray font-bold">
                  A/C Number
                </h1>
                <p className="value text-lg font-bold text-black">
                  24560121213838
                </p>
              </div>
              <div className="subsection w-full flex justify-between items-center ">
                <h1 className="property text-lg font-body text-darkGray font-bold">
                  IFSC
                </h1>
                <p className="value text-lg font-bold text-black">
                  BARB0KOTDWA
                </p>
              </div>
              <div className="subsection w-full flex justify-between items-center ">
                <h1 className="property text-lg font-body text-darkGray font-bold">
                  Name
                </h1>
                <p className="value text-lg font-bold text-black">
                  Bank of Baroda
                </p>
              </div>
              <div className="subsection w-full flex justify-between items-center ">
                <h1 className="property text-lg font-body text-darkGray font-bold">
                  Type
                </h1>
                <p className="value text-lg font-bold text-black">
                  Savings Account
                </p>
              </div>
            </div>
          </div>
          <div className="cards_section w-[50%] h-full  p-4 flex flex-col justify-start items-start gap-6 ">
            <h1 className="title font-head text-black text-2xl font-bold">
              My Cards
            </h1>
            <div className="section flex justify-start items-start gap-8 w-full h-full">
              <div className="addbutton rounded-2xl bg-lightBlue h-16 w-16 flex justify-center items-center cursor-pointer hover:scale-105 transition-all">
                <i className=" text-3xl  text-primaryBlue fa-solid fa-plus"></i>
              </div>
              <div className="card w-[90%] h-full bg-blue-400  rounded-2xl relative">
                <img
                  src="/src/assets/visa.png"
                  className=" absolute w-12 right-8 top-4"
                  alt="Visa Card"
                />
                <div className="name-section absolute left-6 bottom-24 ">
                  <h1 className="name text-lg font-accent text-whiteFrost uppercase">
                    Pat Cummins
                  </h1>
                  <p className="value text-lg font-bold text-accent text-white">
                    3215-6546-9874-9845
                  </p>
                </div>
                <div className="section flex justify-between items-center absolute bottom-4 left-6">
                  <div className="validthrow">
                    <p className="text-base font-bold text-whiteFrost">
                      Valid thru
                    </p>
                    <p className="text-base text-white font-bold">20/12</p>
                  </div>
                </div>
                <div className="cvv absolute bottom-4 right-6">
                  <p className="text-base font-bold text-whiteFrost">CVV</p>
                  <p className="text-base text-white font-bold">544</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
