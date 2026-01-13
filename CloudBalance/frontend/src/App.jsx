
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from 'react-toastify';

function App() {

  
  return (
    <>
     
      <AppRoutes />
       <ToastContainer
       autoClose={2000}   // default 2 seconds
  hideProgressBar={false}
  closeOnClick
  pauseOnHover/>
   
    </>
  );
}

export default App;
