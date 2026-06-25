import { useState, useEffect } from 'react';
import api from '../../services/api';

function ExpenseForm({ expense, fetchExpenses, closeModal }) {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        notes: ""
    });


    useEffect(() => {

        if (expense) {

            setFormData({

                title: expense.title || "",

                amount: expense.amount || "",

                category: expense.category || "",

                date: expense.date
                    ? expense.date.split("T")[0]
                    : "",

                notes: expense.notes || ""

            });

        }

        else {

            setFormData({

                title: "",

                amount: "",

                category: "",

                date: "",

                notes: ""

            });

        }

    }, [expense]);



    const categories = [

        'Food',
        'Travel',
        'Shopping',
        'Rent',
        'Medical',
        'Bills',
        'Entertainment',
        'Education',
        'Others'

    ];



    const handleChange = (e) => {

        setFormData(prev => ({

            ...prev,

            [e.target.name]: e.target.value

        }));

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            if (expense) {


                await api.put(

                    `/expenses/${expense._id}`,

                    formData

                );

            }

            else {


                await api.post(

                    '/expenses',

                    formData

                );

            }


            await fetchExpenses();



            setFormData({

                title: "",

                amount: "",

                category: "",

                date: "",

                notes: ""

            });


            closeModal();

        }

        catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

        finally {

            setLoading(false);

        }

    };



    return (

        <form

            onSubmit={handleSubmit}

            className="space-y-4"

        >


            <input

                name="title"

                placeholder="Title"

                value={formData.title}

                onChange={handleChange}

                className="w-full border p-3 rounded-lg"

                required

            />



            <input

                name="amount"

                type="number"

                placeholder="Amount"

                value={formData.amount}

                onChange={handleChange}

                className="w-full border p-3 rounded-lg"

                required

            />




            <select

                name="category"

                value={formData.category}

                onChange={handleChange}

                className="w-full border p-3 rounded-lg"

                required

            >

                <option value="">

                    Select Category

                </option>


                {

                    categories.map(cat => (

                        <option

                            key={cat}

                            value={cat}

                        >

                            {cat}

                        </option>

                    ))

                }


            </select>




            <input

                type="date"

                name="date"

                value={formData.date}

                onChange={handleChange}

                className="w-full border p-3 rounded-lg"

            />





            <textarea

                name="notes"

                placeholder="Notes"

                value={formData.notes}

                onChange={handleChange}

                className="w-full border p-3 rounded-lg"

                rows="3"

            />





            <button

                disabled={loading}

                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-xl transition"

            >


                {

                    loading

                        ?

                        "Saving..."


                        :

                        expense

                            ?

                            "Update Expense"


                            :

                            "Add Expense"

                }


            </button>



        </form>

    );

}

export default ExpenseForm;