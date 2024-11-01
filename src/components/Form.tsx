const Form = () => {
  return (
    <div className="form_scontainer bg-white w-80 h-80 ">
      <form action="#">
        <h1 className="text-center text-lg text-black">Create User</h1>
        <div className="row">
          <div className="col relative">
            <i className="fa-solid fa-user"></i>
            <input type="text" name="first_name" placeholder="First Name" />
          </div>
          <div className="col relative">
            <i className="fa-solid fa-user"></i>
            <input type="text" name="last_name" placeholder="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col relative">
            <i className="fa-solid fa-phone"></i>
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
        </div>
        <div className="row">
          <div className="col relative">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" name="phone" placeholder="Email Address" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
