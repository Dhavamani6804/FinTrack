import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

function SIP() {

    const [amount, setAmount] = useState('');
    const [years, setYears] = useState('');
    const [rate, setRate] = useState('');

    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const maturity = monthlyRate
        ? amount *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate)
        : 0;

    const invested = amount * months;
    const returns = maturity - invested;

    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">

                SIP Calculator

            </h1>

            <div className="bg-white p-6 rounded-2xl shadow max-w-xl">

                <input
                    type="number"
                    placeholder="Monthly SIP"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    className="w-full border p-3 rounded-xl mb-4"
                />

                <input
                    type="number"
                    placeholder="Years"
                    value={years}
                    onChange={(e)=>setYears(e.target.value)}
                    className="w-full border p-3 rounded-xl mb-4"
                />

                <input
                    type="number"
                    placeholder="Expected Return %"
                    value={rate}
                    onChange={(e)=>setRate(e.target.value)}
                    className="w-full border p-3 rounded-xl"
                />

                <div className="mt-6 space-y-3">

                    <h2>

                        Invested :
                        ₹ {invested.toLocaleString()}

                    </h2>


                    <h2>

                        Returns :
                        ₹ {Math.round(returns).toLocaleString()}

                    </h2>


                    <h2 className="text-2xl font-bold text-green-600">

                        Total :

                        ₹ {Math.round(maturity).toLocaleString()}

                    </h2>

                </div>

            </div>

        </DashboardLayout>

    );
}

export default SIP;