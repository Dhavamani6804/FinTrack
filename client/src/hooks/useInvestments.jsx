import {useState,useEffect} from 'react';
import api from '../services/api';

function useInvestments(){

const [investments,setInvestments]=useState([]);
const [loading,setLoading]=useState(true);


useEffect(()=>{

fetchInvestments();

},[]);



const fetchInvestments=async()=>{


try{


const res=await api.get(

'/investments'

);


setInvestments(

res.data

);

}


catch(err){

console.log(err);

}

finally{

setLoading(false);

}

};



return{

investments,
loading

};

}


export default useInvestments;