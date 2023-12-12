import "./index.scss";

const styles = {
  list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem",
    borderRadius: 10,
  },
};
interface IProps {
  companyName: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}
const Navbar = ({
  companyName,
  aboutTxt,
  isLoggedIn,
  setIsLoggedIn,
}: IProps) => {
  return (
    <nav>
      <ul className="navbar-list" style={{ ...styles.list }}>
        <li>
          <a href="/">{companyName}</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">{aboutTxt}</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <button
            id="ahmad"
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            {isLoggedIn ? "LOGOUT" : "LOGIN"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
