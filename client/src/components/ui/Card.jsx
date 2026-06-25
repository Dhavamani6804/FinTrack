function Card({

title,
amount,
color

}){


return(

<div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition">


<p className="text-gray-500 text-sm">

{title}

</p>



<h1 className={`text-2xl md:text-3xl font-bold mt-2 ${color}`}>

₹ {Number(amount).toLocaleString()}

</h1>



</div>

)

}

export default Card;