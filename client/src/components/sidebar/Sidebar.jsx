import { NavLink,useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {
    FaHome,
    FaWallet,
    FaMoneyBill,
    FaChartLine,
    FaCalculator,
    FaSignOutAlt
} from 'react-icons/fa';


function Sidebar({

sidebarOpen,

setSidebarOpen

}) {
const menuItems = [

{
name:"Dashboard",
path:"/dashboard",
icon:<FaHome/>
},

{
name:"Expenses",
path:"/expenses",
icon:<FaWallet/>
},

{
name:"Income",
path:"/income",
icon:<FaMoneyBill/>
},

{
name:"Investments",
path:"/investments",
icon:<FaChartLine/>
},

{
name:"SIP",
path:"/sip",
icon:<FaChartLine/>
},

{
name:"EMI",
path:"/emi",
icon:<FaCalculator/>
}

];
    const navigate=useNavigate();


const {logout}=useContext(

AuthContext

);
const handleLogout = async()=>{
await logout();
setSidebarOpen(false);
navigate('/');
}


    return (

<div

className={`
fixed
lg:static
top-0
left-0
z-50
w-64
min-h-screen
bg-slate-900
text-white
flex
flex-col
justify-between
transform
transition-transform
duration-300
${
sidebarOpen
?
'translate-x-0'
:
'-translate-x-full'
}
lg:translate-x-0
`}
>            {/* Logo Section */}

            <div>

                <div className="p-6 border-b border-slate-800">

                    <h1 className="text-2xl font-bold">

                         FinTrack

                    </h1>

                    <p className="text-sm text-slate-400 mt-1">

                        Manage Your Money

                    </p>

                </div>



                {/* Navigation */}

                <nav className="mt-4 px-3 flex flex-col gap-2">

                    {

                        menuItems.map((item) => (

                            <NavLink
onClick={() => setSidebarOpen(false)}
                                key={item.name}

                                to={item.path}


                                className={({ isActive }) =>

                                    `flex items-center gap-4 p-3 rounded-xl transition-all duration-200

                                    ${

                                        isActive

                                            ? 'bg-blue-600 text-white shadow-md'

                                            : 'hover:bg-slate-800 text-slate-300'

                                    }`

                                }

                            >

                                <span className="text-lg">

                                    {item.icon}

                                </span>


                                <span>

                                    {item.name}

                                </span>


                            </NavLink>

                        ))

                    }

                </nav>

            </div>



            {/* Logout Section */}

            <div className="p-4 border-t border-slate-800">

                <button

                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-600 transition"

                    onClick={handleLogout}

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;