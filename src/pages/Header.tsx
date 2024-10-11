import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "2rem" }}>
      <button onClick={() => navigate("/")}>Home Page</button>
      <button onClick={() => navigate("/todo")}>Todo Page</button>
    </div>
  );
};
export default Header;
