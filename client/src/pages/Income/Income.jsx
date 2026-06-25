import { useState, useEffect } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import api from '../../services/api';

function Income() {

    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [incomes, setIncomes] = useState([]);


    useEffect(() => {

        fetchIncome();

    }, []);



    const fetchIncome = async () => {

        try {

            const res = await api.get('/income');

            setIncomes(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };




    const saveIncome = async () => {

        if (!source || !amount) {

            alert('Please fill all fields');

            return;

        }


        try {

            await api.post(

                '/income',

                {
                    source,
                    amount
                }

            );


            fetchIncome();

            setSource('');
            setAmount('');

        }


        catch (err) {

            console.log(err);

        }

    };




    const deleteIncome = async (id) => {


        try {


            await api.delete(

                `/income/${id}`

            );


            fetchIncome();


        }


        catch (err) {

            console.log(err);

        }


    };




    const totalIncome = incomes.reduce(

        (sum, item) =>

            sum + item.amount,

        0

    );




    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">

                Income

            </h1>



            <div className="bg-white p-6 rounded-2xl shadow max-w-2xl">


                {/* Source */}


                <select

                    value={source}

                    onChange={(e) => setSource(e.target.value)}

                    className="w-full border p-3 rounded-xl mb-4"

                >

                    <option value="">Select Source</option>

                    <option value="Salary">

                        Salary

                    </option>

                    <option value="Freelance">

                        Freelance

                    </option>

                    <option value="Passive">

                        Passive

                    </option>

                    <option value="Rental">

                        Rental

                    </option>

                    <option value="Dividends">

                        Dividends

                    </option>

                    <option value="Others">

                        Others

                    </option>

                </select>




                {/* Amount */}


                <input

                    type="number"

                    placeholder="Amount"

                    value={amount}

                    onChange={(e) => setAmount(e.target.value)}

                    className="w-full border p-3 rounded-xl mb-4"

                />




                {/* Button */}


                <button

                    onClick={saveIncome}

                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"

                >

                    Add Income

                </button>




                {/* Total */}


                <div className="mt-6">

                    <h2 className="text-xl font-bold">

                        Total Income

                    </h2>


                    <p className="text-3xl font-bold text-green-600 mt-2">

                        ₹ {totalIncome.toLocaleString()}

                    </p>

                </div>




                {/* Income List */}


                <div className="mt-8">


                    {

                        incomes.length === 0

                            ?

                            (

                                <p className="text-gray-500">

                                    No income added yet

                                </p>

                            )

                            :

                            (

                                incomes.map(item => (

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

                                            onClick={() => deleteIncome(item._id)}

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

export default Income;