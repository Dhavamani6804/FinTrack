import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

function EMI() {

const [loan,setLoan]=useState('');
const [rate,setRate]=useState('');
const [years,setYears]=useState('');

const r = rate/12/100;
const n = years*12;


const emi = r
?

loan*r*Math.pow(1+r,n)

/

(Math.pow(1+r,n)-1)

:

0;



const total = emi*n;

const interest = total-loan;



return(

<DashboardLayout>

<h1 className="text-3xl font-bold mb-6">

EMI Calculator

</h1>


<div className="bg-white p-6 rounded-2xl shadow max-w-xl">


<input

type="number"

placeholder="Loan Amount"

value={loan}

onChange={(e)=>setLoan(e.target.value)}

className="w-full border p-3 rounded-xl mb-4"

/>


<input

type="number"

placeholder="Interest Rate"

value={rate}

onChange={(e)=>setRate(e.target.value)}

className="w-full border p-3 rounded-xl mb-4"

/>



<input

type="number"

placeholder="Years"

value={years}

onChange={(e)=>setYears(e.target.value)}

className="w-full border p-3 rounded-xl"

/>



<div className="mt-6 space-y-3">


<h2>

Monthly EMI

₹ {Math.round(emi).toLocaleString()}

</h2>



<h2>

Interest Paid

₹ {Math.round(interest).toLocaleString()}

</h2>



<h2 className="text-2xl font-bold text-red-600">

Total Payment


₹ {Math.round(total).toLocaleString()}

</h2>



</div>


</div>

</DashboardLayout>

);

}

export default EMI;