import { useNavigate } from "react-router-dom";

function PrivateComponentWrapper({ children }) {
  const user = document.cookie.includes("user");
    const navigate = useNavigate();
  
    if (!user) {
        navigate( "/login");
        return null;
        }
  
    return children;
}

export default PrivateComponentWrapper;
