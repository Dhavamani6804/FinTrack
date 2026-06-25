function Modal({

isOpen,
children

}){

if(!isOpen)return null;



return(


<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">



<div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">

{children}



</div>



</div>



);

}


export default Modal;