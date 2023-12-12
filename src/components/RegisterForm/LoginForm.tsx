import { ChangeEvent } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { fromInputsList } from "../../data";
interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}
const RegisterForm = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  //** Handler
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  // ** Renders
  const renderFormInputList = fromInputsList.map((input, idx) => (
    <div style={{ display: "flex", alignItems: "center" }} key={idx}>
      <div className="input-wrapper" style={{ width: 1200 }}>
        <label htmlFor={input.id}>{input.label}:</label>
        <input
          type={input.type}
          name={input.name}
          id={input.id}
          value={userData[input.name]}
          onChange={onChangeHandler}
        />
      </div>
      <button>❌</button>
    </div>
  ));
  return (
    <div>
      {/* <h3 style={{ margin: 30 }}>Your email: {email}</h3> */}
      <form
        className="login-form"
        style={{ margin: 30 }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {renderFormInputList}
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
