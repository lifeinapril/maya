import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Auth() {
    const {token} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
                localStorage.setItem('account',token);
                navigate("/");
        }, []);
}
export default Auth;

