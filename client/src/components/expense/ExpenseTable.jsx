function ExpenseTable({
expenses,
deleteExpense,
setSelectedExpense,
setShowModal
}) {

    return (

        <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">
                            Title
                        </th>

                        <th className="text-left">
                            Category
                        </th>

                        <th className="text-left">
                            Amount
                        </th>

                        <th className="text-left">
                            Date
                        </th>

                        <th className="text-center">
                            Actions
                        </th>

                    </tr>

                </thead>


                <tbody>

                    {

                        expenses.map((expense) => (

                            <tr

                                key={expense._id}

                                className="border-t hover:bg-slate-50"

                            >

                                <td className="p-4">

                                    {expense.title}

                                </td>


                                <td>

                                    {expense.category}

                                </td>


                                <td className="font-semibold">

                                    ₹ {expense.amount}

                                </td>


                                <td>

                                    {

                                        new Date(

                                            expense.date

                                        ).toLocaleDateString()

                                    }

                                </td>


<td className="text-center">


<div className="flex justify-center gap-3">


<button


onClick={()=>{


setSelectedExpense(

expense

);


setShowModal(

true

);


}}


className="text-blue-600 hover:text-blue-800"


>


Edit


</button>



<button


onClick={()=>{


deleteExpense(

expense._id

)


}}


className="text-red-600 hover:text-red-800"


>


Delete


</button>



</div>



</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ExpenseTable;