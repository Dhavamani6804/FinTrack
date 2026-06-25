function Register(){

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


placeholder="Name"

className="w-full border p-3 rounded-lg mt-5"


/>


<input


placeholder="Email"

className="w-full border p-3 rounded-lg mt-5"


/>



<input


placeholder="Password"

type="password"

className="w-full border p-3 rounded-lg mt-3"


/>



<button

className="bg-blue-600 w-full mt-5 p-3 rounded-lg text-white"

>

Register


</button>



</div>



</div>

)

}


export default Register