import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

function Investment(){

    const [mf,setMf]=useState('');
    const [stocks,setStocks]=useState('');
    const [gold,setGold]=useState('');
    const [ppf,setPpf]=useState('');

    const total =
        Number(mf)+
        Number(stocks)+
        Number(gold)+
        Number(ppf);


    return(

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">

                Investment Tracker

            </h1>


            <div className="bg-white p-6 rounded-2xl shadow max-w-xl">


                <input
                    placeholder="Mutual Funds"
                    value={mf}
                    onChange={(e)=>setMf(e.target.value)}
                    className="w-full border p-3 rounded-xl mb-4"
                />


                <input
                    placeholder="Stocks"
                    value={stocks}
                    onChange={(e)=>setStocks(e.target.value)}
                    className="w-full border p-3 rounded-xl mb-4"
                />


                <input
                    placeholder="Gold"
                    value={gold}
                    onChange={(e)=>setGold(e.target.value)}
                    className="w-full border p-3 rounded-xl mb-4"
                />


                <input
                    placeholder="PPF"
                    value={ppf}
                    onChange={(e)=>setPpf(e.target.value)}
                    className="w-full border p-3 rounded-xl"
                />


                <div className="mt-6">

                    <h2 className="text-2xl font-bold text-blue-600">

                        Total Portfolio

                    </h2>


                    <p className="text-3xl font-bold mt-2">

                        ₹ {total.toLocaleString()}

                    </p>

                </div>

            </div>


        </DashboardLayout>

    );

}

export default Investment;