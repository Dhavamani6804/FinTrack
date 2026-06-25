import {useState,useEffect} from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import api from '../../services/api';

function Income(){

const [income,setIncome]=useState('');
const [savedIncome,setSavedIncome]=useState(null);



useEffect(()=>{

fetchIncome();

},[]);



const fetchIncome=async()=>{


try{


const res=await api.get(

'/income'

);


setSavedIncome(

res.data

);


}


catch(err){

console.log(err);

}


};



const saveIncome=async()=>{


try{


await api.post(

'/income',

{

amount:income

}


);


fetchIncome();

setIncome('');


}


catch(err){

console.log(err);

}


};




return(

<DashboardLayout>



<h1 className="text-3xl font-bold mb-6">

Income


</h1>



<div className="bg-white p-6 rounded-2xl shadow max-w-lg">



<input


placeholder="Monthly Income"


value={income}


onChange={(e)=>setIncome(

e.target.value

)}


className="w-full border p-3 rounded-xl mb-4"


/>



<button


onClick={saveIncome}


className="bg-green-600 text-white px-5 py-3 rounded-xl"


>


Save


</button>



{

savedIncome


&&


<p className="mt-5 text-xl font-bold">


Current Income


₹ {


savedIncome.amount


}


</p>

}



</div>


</DashboardLayout>

);


}


export default Income;