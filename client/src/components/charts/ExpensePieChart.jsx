import {

    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer

} from 'recharts';



function ExpensePieChart({ expenses }) {



    const data = Object.values(

        expenses.reduce((acc, expense) => {


            if (!acc[expense.category]) {


                acc[expense.category] = {


                    name: expense.category,

                    value: 0

                };

            }



            acc[expense.category].value += expense.amount;


            return acc;


        }, {})

    );




    const COLORS = [

        '#3b82f6',
        '#22c55e',
        '#f97316',
        '#e11d48',
        '#8b5cf6',
        '#facc15',
        '#06b6d4'

    ];



    return (


        <div className="bg-white rounded-2xl shadow p-5">


            <h2 className="text-xl font-semibold mb-5">

                Expense Distribution

            </h2>



            <ResponsiveContainer

                width="100%"

                height={350}

            >


                <PieChart>


                    <Pie


                        data={data}


                        cx="50%"


                        cy="50%"


                        outerRadius={120}


                        dataKey="value"


                        label


                    >



                        {

                            data.map((entry, index) => (

                                <Cell


                                    key={index}


                                    fill={

                                        COLORS[

                                        index % COLORS.length

                                        ]

                                    }


                                />

                            ))

                        }


                    </Pie>




                    <Tooltip />



                    <Legend />



                </PieChart>



            </ResponsiveContainer>


        </div>


    );


}



export default ExpensePieChart;