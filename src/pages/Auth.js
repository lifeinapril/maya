
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Auth() {
    const {token} = useParams();
    useEffect(() => {
            localStorage.setItem('account',token);
      }, []);
}
export default Auth;
