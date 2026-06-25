import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

function SIP() {

    const [amount, setAmount] = useState('');
    const [years, setYears] = useState('');
    const [rate, setRate] = useState('');



    const P = Number(amount);
    const Y = Number(years);
    const R = Number(rate);



    const months = Y * 12;



    // Groww Compatible Formula
    const annualRate = R / 100;


    const monthlyRate = annualRate

        ?

        Math.pow(

            1 + annualRate,

            1 / 12

        ) - 1

        :

        0;



    let maturity = 0;


    if (

        P > 0

        &&

        months > 0

        &&

        monthlyRate > 0

    ) {


        maturity =

            P *

            (

                (

                    Math.pow(

                        1 + monthlyRate,

                        months

                    )

                    - 1

                )

                /

                monthlyRate

            )

            *

            (

                1 + monthlyRate

            );

    }



    const invested = P * months;


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

                    onChange={(e) => setAmount(e.target.value)}

                    className="w-full border p-3 rounded-xl mb-4"

                />



                <input

                    type="number"

                    placeholder="Investment Period (Years)"

                    value={years}

                    onChange={(e) => setYears(e.target.value)}

                    className="w-full border p-3 rounded-xl mb-4"

                />




                <input

                    type="number"

                    placeholder="Expected Return (%)"

                    value={rate}

                    onChange={(e) => setRate(e.target.value)}

                    className="w-full border p-3 rounded-xl"

                />




                <div className="mt-8 space-y-4">



                    <div>

                        <p className="text-gray-500">

                            Total Investment

                        </p>


                        <h2 className="text-xl font-semibold">

                            ₹ {invested.toLocaleString()}

                        </h2>

                    </div>




                    <div>

                        <p className="text-gray-500">

                            Wealth Gained

                        </p>


                        <h2 className="text-xl font-semibold text-green-600">

                            ₹ {Math.round(

                                returns

                            ).toLocaleString()}

                        </h2>

                    </div>





                    <div>

                        <p className="text-gray-500">

                            Maturity Amount

                        </p>


                        <h2 className="text-3xl font-bold text-blue-600">

                            ₹ {Math.round(

                                maturity

                            ).toLocaleString()}

                        </h2>

                    </div>


                </div>


            </div>


        </DashboardLayout>

    );

}

export default SIP;