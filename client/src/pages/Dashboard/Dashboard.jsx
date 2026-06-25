import DashboardLayout from "../../layouts/DashboardLayout";
import Card from '../../components/ui/Card';
import ExpensePieChart from '../../components/charts/ExpensePieChart';

import useExpenses from '../../hooks/useExpenses';

function Dashboard(){

    const {expenses}=useExpenses();

    const totalExpense = expenses.reduce(

        (sum,e)=>sum+e.amount,

        0

    );

const income = savedIncome?.amount || 0;

const savings = income-totalExpense;


    return(

        <DashboardLayout>

            <div className="mb-8">

                <h1 className="text-3xl font-bold">

                    Dashboard

                </h1>

                <p className="text-gray-500">

                    Welcome back 👋

                </p>

            </div>



            <div className="grid grid-cols-4 gap-5 mb-8">

                <Card
                    title="Income"
                    amount={income}
                    color="text-green-600"
                />

                <Card
                    title="Expenses"
                    amount={totalExpense}
                    color="text-red-600"
                />

                <Card
                    title="Savings"
                    amount={savings}
                    color="text-indigo-600"
                />

                <Card
                    title="Transactions"
                    amount={expenses.length}
                    color="text-blue-600"
                />

                <Card

title="Investments"

amount={50000}

color="text-blue-600"

/>

            </div>




            <ExpensePieChart

                expenses={expenses}

            />




        </DashboardLayout>

    );

}

export default Dashboard;