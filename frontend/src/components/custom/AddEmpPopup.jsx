import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CREATE_EMPLOYEE } from "../../useFetch/useFetch";

const AddEmpPopup = ({ setAddEmp, setEditEmp, refetch }) => {
  // Popup btns
  const popupBtns = [
    {
      id: 1,
      title: "Admin",
    },
    {
      id: 2,
      title: "Manager",
    },
    {
      id: 3,
      title: "Base",
    },
  ];

  // close popup
  const closePopup = () => {
    setEditEmp ? setEditEmp(false) : null;
    setAddEmp ? setAddEmp(false) : null;
  };

  // select active btn
  const [activeBtn, setActiveBtn] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    securityLevel: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { firstName, lastName, email, password, securityLevel } = formData;
    const userData = {
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      securityLevel,
    };
    try {
      const response = await axios.post(`${CREATE_EMPLOYEE}`, userData);

      if (response.data.success) {
        toast.success("Register User!");
        setTimeout(() => {
          closePopup();
          refetch();
        }, 800);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="add_emp">
      <div className="formBox">
        {/* Heading */}
        <div className="heading">
          <p className="jakarta">Create New Employee</p>

          {/* Icon */}
          <svg
            onClick={closePopup}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M10.5807 19.4194L19.4196 10.5806"
              stroke="#84818A"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
            <path
              d="M10.5807 10.5806L19.4196 19.4194"
              stroke="#84818A"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* border */}
        <div
          className="horizontal_line"
          style={{ marginTop: "10px", marginBottom: "5px" }}
        ></div>

        {/* Box Header */}
        <div className="box_header">
          <h2 className="jakarta">Employee Detail</h2>
          <p className="jakarta">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
        </div>

        {/* form */}
        <form>
          {/* nameBox */}
          <div className="nameBox">
            {/* name */}
            <div className="box">
              <label htmlFor="name" className="jakarta">
                Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Marco"
                className="jakarta"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            {/* surname */}
            <div className="box">
              <label htmlFor="surname" className="jakarta">
                Surname
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Sciosy"
                className="jakarta"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* nameBox */}
          <div className="mailPass">
            {/* name */}
            <div className="box">
              <label htmlFor="name" className="jakarta">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@gmail.com"
                className="jakarta"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* surname */}
            <div className="box">
              <label htmlFor="surname" className="jakarta">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="1234passw"
                className="jakarta"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* border */}
          <div
            className="horizontal_line"
            style={{ marginBottom: "5px" }}
          ></div>

          {/* Buttons */}
          <div className="security_btns">
            <h2>Security Level</h2>

            <div className="btns">
              {popupBtns?.map((btn) => (
                <button
                  type="button" // Specify the type as "button" to prevent form submission
                  onClick={() =>
                    setFormData({ ...formData, securityLevel: btn.title })
                  }
                  key={btn.id}
                  className={`jakarta ${
                    btn.title === formData.securityLevel ? "active" : ""
                  }`}
                >
                  {btn.title}
                </button>
              ))}
            </div>
          </div>

          {/* border */}
          <div className="horizontal_line"></div>
        </form>
        {/* Submit Btns */}
        <div className="submit_btns">
          {/* cancel btn */}
          <button className="cancel jakarta" onClick={closePopup}>
            Delete
          </button>

          {/* submit btn */}
          <button
            type="submit"
            className="next jakarta"
            onClick={handleRegistration}
            disabled={submitting}
          >
            Next
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddEmpPopup;
