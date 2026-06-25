import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        checkAuth();
    }, []);


    const checkAuth = async () => {

        try {

            const res = await api.get("/auth/me");

            setUser(res.data);

        }
        catch(err){

            setUser(null);

        }

        finally{

            setLoading(false);

        }

    }
    const logout = async()=>{

try{

await api.post('/auth/logout');

setUser(null);

}

catch(err){

console.log(err);

}

}


    return(

       <AuthContext.Provider value={{

user,
setUser,
loading,
checkAuth,
logout

}}>

            {children}

        </AuthContext.Provider>

    );

}