function Modal({ isOpen, children }) {

    if (!isOpen) return null;


    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-2xl w-[450px] shadow-xl">

                {children}

            </div>

        </div>

    );

}

export default Modal;