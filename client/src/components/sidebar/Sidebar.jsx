import { NavLink } from 'react-router-dom';

import {
    FaHome,
    FaWallet,
    FaMoneyBill,
    FaChartLine,
    FaCalculator,
    FaBullseye,
    FaPiggyBank,
    FaSignOutAlt
} from 'react-icons/fa';

function Sidebar() {

    const menuItems = [

        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />
        },

        {
            name: "Expenses",
            path: "/expenses",
            icon: <FaWallet />
        },

        {
name:"Income",
path:"/income",
icon:<FaMoneyBill/>
},

        {
            name: "SIP",
            path: "/sip",
            icon: <FaChartLine />
        },

        {
            name: "EMI",
            path: "/emi",
            icon: <FaCalculator />
        },

        {
            name: "Investments",
            path: "/investments",
            icon: <FaChartLine />
        },

        {
            name: "Goals",
            path: "/goals",
            icon: <FaBullseye />
        },

        {
            name: "Budget",
            path: "/budget",
            icon: <FaPiggyBank />
        }

    ];


    return (

        <div className="w-64 h-screen bg-slate-900 text-white flex flex-col justify-between">

            {/* Logo Section */}

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

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;