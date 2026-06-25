import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

function Login(){

const navigate = useNavigate();

const { setUser } = useContext(AuthContext);

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading]=useState(false);

const handleLogin = async()=>{

try{
setLoading(true);
const res = await api.post(

"/auth/login",

{
email,
password
}

);


setUser(res.data);

navigate("/dashboard");


}

catch(error){

console.log(error);

alert("Invalid Credentials");

}

finally{
setLoading(false);
}
}


return(

<div className="min-h-screen flex justify-center items-center bg-slate-100">


<div className="bg-white p-8 rounded-2xl shadow-md w-96">


<h1 className="text-3xl font-bold">

FinTrack

</h1>


<p>

Welcome back

</p>

<input


placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border p-3 rounded-lg mt-5"


/>



<input

placeholder="Password"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border p-3 rounded-lg mt-3"

/>

<button


onClick={handleLogin}

disabled={loading}


className="bg-blue-600 w-full mt-5 p-3 rounded-lg text-white"


>


{

loading?"Logging in...":"Login"

}


</button>



</div>



</div>

)

}

export default Login;