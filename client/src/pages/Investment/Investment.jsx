import { useState, useEffect } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import api from '../../services/api';

function Investment() {

    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [investments, setInvestments] = useState([]);


    useEffect(() => {

        fetchInvestments();

    }, []);



    const fetchInvestments = async () => {

        try {

            const res = await api.get('/investments');

            setInvestments(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };



    const saveInvestment = async () => {

        if (!source || !amount) {

            alert('Please fill all fields');

            return;

        }


        try {


            await api.post(

                '/investments',

                {

                    source,

                    amount

                }

            );


            fetchInvestments();

            setSource('');

            setAmount('');

        }


        catch (err) {

            console.log(err);

        }


    };



    const deleteInvestment = async (id) => {


        try {


            await api.delete(

                `/investments/${id}`

            );


            fetchInvestments();


        }


        catch (err) {


            console.log(err);


        }


    };




    const totalPortfolio = investments.reduce(

        (sum, item) =>

            sum + item.amount,

        0

    );




    return (


        <DashboardLayout>


            <h1 className="text-3xl font-bold mb-6">

                Investment Tracker

            </h1>



            <div className="bg-white p-6 rounded-2xl shadow max-w-2xl">




                <select

                    value={source}

                    onChange={(e) => setSource(e.target.value)}

                    className="w-full border p-3 rounded-xl mb-4"

                >

                    <option value="">Select Investment</option>

                    <option value="Mutual Fund">

                        Mutual Fund

                    </option>

                    <option value="Stocks">

                        Stocks

                    </option>

                    <option value="Gold">

                        Gold

                    </option>

                    <option value="PPF">

                        PPF

                    </option>

                    <option value="FD">

                        FD

                    </option>

                    <option value="Crypto">

                        Crypto

                    </option>

                    <option value="Others">

                        Others

                    </option>


                </select>





                <input

                    type="number"

                    placeholder="Amount"

                    value={amount}

                    onChange={(e) => setAmount(e.target.value)}

                    className="w-full border p-3 rounded-xl mb-4"

                />





                <button


                    onClick={saveInvestment}


                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"

                >

                    Add Investment

                </button>




                <div className="mt-6">


                    <h2 className="text-xl font-bold">

                        Portfolio Value

                    </h2>



                    <p className="text-3xl font-bold text-blue-600 mt-2">

                        ₹ {totalPortfolio.toLocaleString()}

                    </p>


                </div>





                <div className="mt-8">



                    {

                        investments.length === 0

                            ?

                            (

                                <p className="text-gray-500">

                                    📈 No investments added

                                </p>

                            )

                            :

                            (

                                investments.map(item => (

                                    <div


                                        key={item._id}


                                        className="flex justify-between items-center border-b py-3"

                                    >



                                        <div>


                                            <h3 className="font-semibold">

                                                {item.source}

                                            </h3>



                                            <p>

                                                ₹ {item.amount.toLocaleString()}

                                            </p>



                                        </div>




                                        <button


                                            onClick={() => deleteInvestment(item._id)}


                                            className="text-red-600 hover:text-red-800"

                                        >

                                            Delete

                                        </button>




                                    </div>

                                ))

                            )

                    }



                </div>



            </div>



        </DashboardLayout>


    );


}


export default Investment;