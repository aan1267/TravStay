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

// so best he react-toastify (by default global hota he just wrap in main.js
// Har component me dobara wrap karne ki zarurat nahi.)
// + custom hook (avoid repeat code )
