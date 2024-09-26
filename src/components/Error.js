
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return (
     <div>
    <h1>oops there is error</h1>
    <h2>you are at eror page page</h2>
    <h3>{err.status}</h3>
   
    </div>
     );
 };
 export default Error;