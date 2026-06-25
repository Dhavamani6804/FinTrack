import { useState } from 'react';

import DashboardLayout from "../../layouts/DashboardLayout";

import useExpenses from '../../hooks/useExpenses';

import ExpenseTable from '../../components/expense/ExpenseTable';
import ExpenseForm from '../../components/expense/ExpenseForm';
import Modal from '../../components/ui/Modal';
import ExpensePieChart from '../../components/charts/ExpensePieChart';

function Expense() {

    const [showModal, setShowModal] = useState(false);
    const [selectedExpense,setSelectedExpense]=useState(null);
    const [search,setSearch]=useState('');
    const [category,setCategory]=useState('');
    const [month,setMonth]=useState('');
    const {
        expenses,
        loading,
        fetchExpenses,
        deleteExpense
    } = useExpenses();
const filteredExpenses = expenses.filter(expense=>{


const matchesSearch =

expense.title
.toLowerCase()
.includes(
search.toLowerCase()
);



const matchesCategory =


category

?

expense.category===category

:

true;




const matchesMonth =


month


?


new Date(expense.date)

.getMonth()


===


Number(month)


:


true;




return(


matchesSearch


&&


matchesCategory


&&


matchesMonth



);



});


    return (

        <DashboardLayout>

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Expenses

                    </h1>

                    <p className="text-gray-500 mt-1">

                        Track and manage your spending

                    </p>

                </div>


                <button

                    onClick={() => setShowModal(true)}

                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-xl shadow"

                >

                    + Add Expense

                </button>

            </div>
<div className="grid grid-cols-3 gap-4 mb-6">


<input


placeholder="Search Expenses"


value={search}


onChange={(e)=>setSearch(

e.target.value

)}


className="border p-3 rounded-xl"

/>



<select


value={category}


onChange={(e)=>setCategory(

e.target.value

)}

className="border p-3 rounded-xl"

>


<option value="">


All Categories


</option>



<option>

Food

</option>


<option>

Travel

</option>


<option>

Shopping

</option>


<option>

Rent

</option>


<option>

Medical

</option>


<option>

Bills

</option>



<option>

Entertainment

</option>



<option>

Education

</option>



<option>

Others

</option>



</select>





<select


value={month}


onChange={(e)=>setMonth(

e.target.value

)}

className="border p-3 rounded-xl"


>


<option value="">


All Months


</option>



{

Array.from(

{

length:12

}

).map(


(_,index)=>(


<option


key={index}

value={index}


>


{


new Date(

0,

index

).toLocaleString(

'default',

{

month:'long'

}


)


}



</option>



)



)


}



</select>



</div>
<div className="grid grid-cols-3 gap-4 mb-6">



<div className="bg-white p-5 rounded-xl shadow">


<h3>


Total Expense


</h3>



<p className="text-2xl font-bold">


₹ {


filteredExpenses.reduce(

(sum,e)=>


sum+e.amount,


0


)


}


</p>


</div>




<div className="bg-white p-5 rounded-xl shadow">


<h3>


Transactions


</h3>



<p className="text-2xl font-bold">


{


filteredExpenses.length


}


</p>



</div>





<div className="bg-white p-5 rounded-xl shadow">


<h3>


Categories


</h3>



<p className="text-2xl font-bold">


{


new Set(

filteredExpenses.map(

e=>e.category

)

).size


}



</p>



</div>



</div>

            {/* Expense Table */}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                {

                    loading ?

                        (

                            <div className="p-6 text-center">

                                Loading Expenses...

                            </div>

                        )

                        :

                        expenses.length === 0 ?

                            (

                                <div className="p-6 text-center text-gray-500">

                                    No expenses found

                                </div>

                            )

                            :

                            (

                              <ExpenseTable

expenses={filteredExpenses}
deleteExpense={deleteExpense}

setSelectedExpense={setSelectedExpense}

setShowModal={setShowModal}

/>

                            )

                }

            </div>

<div className="mt-6">


<ExpensePieChart


expenses={filteredExpenses}


/>


</div>

            {/* Add Expense Modal */}

            <Modal

                isOpen={showModal}

            >

                <div>

                    {/* Modal Header */}

                    <div className="flex justify-between items-center mb-5">

                        <h2 className="text-2xl font-semibold">

                            Add Expense

                        </h2>


                        <button

                            onClick={() => setShowModal(false)}

                            className="text-3xl leading-none hover:text-red-500"

                        >

                            &times;

                        </button>

                    </div>



                    {/* Expense Form */}

                    <ExpenseForm

expense={selectedExpense}

fetchExpenses={fetchExpenses}

closeModal={()=>{
setShowModal(false);
setSelectedExpense(null);
}}

/>

                </div>

            </Modal>

        </DashboardLayout>

    );

}

export default Expense;