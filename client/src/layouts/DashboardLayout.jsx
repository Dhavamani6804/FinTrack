import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import Sidebar from "../components/sidebar/Sidebar";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="min-h-screen bg-slate-100 flex">


            {/* Mobile Overlay */}

            {

                sidebarOpen && (

                    <div

                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"

                        onClick={() => setSidebarOpen(false)}

                    />

                )

            }


            {/* Sidebar */}

            <Sidebar

                sidebarOpen={sidebarOpen}

                setSidebarOpen={setSidebarOpen}

            />


            {/* Main Content */}

            <main className="flex-1 overflow-x-hidden">


                {/* Mobile Header */}

                <div className="lg:hidden bg-white shadow p-4 flex items-center">


                    <button

                        onClick={() => setSidebarOpen(true)}

                        className="text-2xl"

                    >

                        <FaBars />

                    </button>


                    <h1 className="ml-4 text-xl font-bold">

                        FinTrack

                    </h1>

                </div>



                <div className="p-4 md:p-6">

                    {children}

                </div>


            </main>

        </div>

    );

}

export default DashboardLayout;