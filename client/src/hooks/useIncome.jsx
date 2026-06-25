import {useState,useEffect} from 'react';
import api from '../services/api';

function useIncome(){

const [incomes,setIncomes]=useState([]);
const [loading,setLoading]=useState(true);


useEffect(()=>{

fetchIncome();

},[]);


const fetchIncome=async()=>{

try{

const res=await api.get('/income');

setIncomes(res.data);

}

catch(err){

console.log(err);

}

finally{

setLoading(false);

}

};


return{

incomes,
loading

};

}

export default useIncome;