import React, { useState } from "react";
import IAMRole from "./IAMRole";
import AddManagedPolicies from "./AddManagedPolicies";
import CreateCUR from "./CreateCUR";
import { toast } from "react-toastify";
import { useAccounts } from "../../hooks/useAccounts";
import { useSelector } from "react-redux";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ARN: "",
    accountName: "",
    accountId: "",
  });


   const { role } = useSelector((state) => state.user); 
  const isRoleAdmin = role === "ADMIN"; 

  const {addAccount, loading} = useAccounts();

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
 
 
    if (!formData.ARN || !formData.accountName || !formData.accountId) {
      toast.error("Please fill all required fields");
       return false;
    }


    
    setStep(2);

  

 
  };


  const handleSubmit = async (formData)=>{
      
     await addAccount(formData);

     setStep(1);
          
  }

  return (
    <>
      {step === 1 && <IAMRole onNext={handleNext} formData ={formData} handleChange = {handleChange} isRoleAdmin={isRoleAdmin} />}
      {step === 2 && (
        <AddManagedPolicies
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && <CreateCUR onBack={() => setStep(2)}  handleSubmit={()=> handleSubmit(formData)} loading={loading}/>}
    </>
  );
};

export default Onboarding;
