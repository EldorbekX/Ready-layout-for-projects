import { useAuth } from "../states/auth";
import { useNavigate } from "react-router-dom";
const LoginP = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const data = { username: "abdulazizadmin", password: "12345" };
  return (
    <div>
      <h1>LoginP</h1>
      <button onClick={() => login(data, navigate)}>Login</button>
    </div>
  );
};

export default LoginP;
