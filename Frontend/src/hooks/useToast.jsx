import {toast} from "react-toastify";

const useToast = ()=>{
  const options = {
      position : "top-right",
      autoClose : 5000,
      closeOnClick : true,
  }


const toastSuccess = (msg) =>{
    toast.success(msg,options);
}

const toastError = (msg) =>{
    toast.error(msg,options);
}

return {toastSuccess,toastError}
}

export default useToast
