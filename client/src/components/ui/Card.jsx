function Card({

title,
amount,
color

}){


return(

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">


<p className="text-gray-500 text-sm font-medium">

{title}

</p>



<h1 className={`text-3xl font-bold mt-3 ${color}`}>

₹ {Number(amount).toLocaleString()}

</h1>



</div>

)


}


export default Card;