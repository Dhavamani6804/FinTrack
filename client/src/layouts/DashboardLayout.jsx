import Sidebar from "../components/sidebar/Sidebar";


function DashboardLayout({children}){


return(


<div className="flex bg-slate-100">


<Sidebar/>


<div className="flex-1 p-6">


{children}


</div>


</div>



)


}

export default DashboardLayout