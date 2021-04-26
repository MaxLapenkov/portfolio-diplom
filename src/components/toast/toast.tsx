import React from 'react'
import { ToastContainer, ToastContainerProps } from 'react-toastify';

import './toast.scss';


const Toast = (props: ToastContainerProps) => {
    return (
        <ToastContainer {...props}/>
    )
}

export default Toast;