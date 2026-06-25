import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Dashboard from '../pages/Dashboard/Dashboard';
import Expense from '../pages/Expense/Expense';
import ProtectedRoute from '../components/ProtectedRoute';
import SIP from '../pages/SIP/SIP';
import EMI from '../pages/EMI/EMI';
import Income from '../pages/Income/Income';
import Investment from '../pages/Investment/Investment';

function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/expenses" element={
 <ProtectedRoute>
   <Expense/>
 </ProtectedRoute>
 }/>

<Route path="/register" element={<Register/>}/>

<Route path="/dashboard" element={
 <ProtectedRoute>
   <Dashboard/>
 </ProtectedRoute>
 }/>
<Route

path="/sip"

element={

<ProtectedRoute>

<SIP/>

</ProtectedRoute>

}

/>
<Route
path="/income"
element={
<ProtectedRoute>
<Income/>
</ProtectedRoute>
}
/>


<Route
path="/emi"
element={
<ProtectedRoute>
<EMI/>
</ProtectedRoute>
}
/>

<Route

path="/investments"

element={

<ProtectedRoute>

<Investment/>

</ProtectedRoute>

}

/>
</Routes>


)

}


export default AppRoutes