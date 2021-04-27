import React from 'react'
import { ToastContainer, ToastContainerProps } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './toast.scss'


const Toast = (props: ToastContainerProps) => {
    return (
        <ToastContainer 
            position="top-right"
            autoClose={3000}  
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        {...props}
        />
    )
}

export default Toast;