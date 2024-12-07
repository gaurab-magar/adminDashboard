import { toast } from 'react-toastify';

const ShowToast = (message , type = 'success') => {
  toast[type](message ,{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

export default ShowToast