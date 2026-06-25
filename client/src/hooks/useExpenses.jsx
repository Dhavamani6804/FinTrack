import { useEffect, useState } from 'react';
import api from '../services/api';

function useExpenses() {

    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchExpenses();

    }, []);




    const fetchExpenses = async () => {

        try {

            const res = await api.get('/expenses');

            setExpenses(res.data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };





    const deleteExpense = async (id) => {

        try {


            await api.delete(

                `/expenses/${id}`

            );


            fetchExpenses();

        }

        catch (err) {

            console.log(err);

        }

    };





    return {

        expenses,

        loading,

        fetchExpenses,

        deleteExpense

    };

}


export default useExpenses;