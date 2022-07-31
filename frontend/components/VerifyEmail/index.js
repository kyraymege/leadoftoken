import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { verifyEmailUrl } from '../../redux/apiCalls';
import { toast } from 'react-toastify';

const EmailVerify = ({param}) => {
    const [validUrl, setValidUrl] = useState(true);    

    useEffect(() => {
        console.log(param.id)
        console.log(param.token)
        verifyEmailUrl(param.id,param.token).then((res)=>{
            if(res){
                toast.success(res?.data?.message)
                
            }else{
                toast.error(res?.data?.message)
            }
        })
    }, [param]);

    return (
        <div>EmailVerify</div>
    )
}

export default EmailVerify