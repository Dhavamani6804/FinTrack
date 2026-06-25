import DashboardLayout from "../../layouts/DashboardLayout";
import Card from '../../components/ui/Card';
import ExpensePieChart from '../../components/charts/ExpensePieChart';

import useExpenses from '../../hooks/useExpenses';
import useIncome from '../../hooks/useIncome';
import useInvestments from '../../hooks/useInvestments';

function Dashboard(){


const {expenses}=useExpenses();

const {incomes}=useIncome();

const {investments}=useInvestments();



const totalExpense = expenses.reduce(

(sum,e)=>sum+Number(e.amount),

0

);



const totalIncome = incomes.reduce(

(sum,i)=>sum+Number(i.amount),

0

);



const totalInvestment = investments.reduce(

(sum,i)=>sum+Number(i.amount),

0

);



const savings = totalIncome-totalExpense;



return(


<DashboardLayout>



<div className="mb-8">


<h1 className="text-3xl font-bold">

Dashboard

</h1>


<p className="text-gray-500">
Track your finances and investments efficiently
</p>



</div>




<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">



<Card

title="Income"

amount={totalIncome}

color="text-green-600"

/>



<Card

title="Expenses"

amount={totalExpense}

color="text-red-600"

/>


<Card

title="Investments"

amount={totalInvestment}

color="text-cyan-600"

/>

<Card

title="Savings"

amount={savings}

color="text-indigo-600"

/>



</div>




<ExpensePieChart

expenses={expenses}

/>



</DashboardLayout>



);

}


export default Dashboard;