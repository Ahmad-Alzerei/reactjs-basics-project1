import "./App.css";
import RegisterForm from "./components/RegisterForm/LoginForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import UserDetails from "./components/UserDetails";
function App() {
  const company: string = "AH_ZR";
  const aboutTxt = "About Us";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
  });

  return (
    <>
      <Navbar
        companyName={company}
        aboutTxt={aboutTxt}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <br />
      {isLoggedIn ? (
        <UserDetails user={userData} />
      ) : (
        <RegisterForm
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
