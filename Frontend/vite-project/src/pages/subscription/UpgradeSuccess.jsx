import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card';
import { getUserSubscription, upgradeSubscription } from '@/redux/subscription/Action';
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function UpgradeSuccess() {
    const navigate = useNavigate();
    const {subscription}=useSelector(store=>store)

    const queryParams = new URLSearchParams(location.search)

    const paymentId = queryParams.get("payment_Id")
    const planType = queryParams.get("paymentType")
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(upgradeSubscription({planType}))
        dispatch(getUserSubscription())
    },[])
    return(
    <div className='flex justify-center'>
        <Card className="mt-20 space-y-5 flex flex-col items-center">
            <div className='flex items-center gap-4'>
                <CheckCircledIcon className='h-9 w-9 text-green-500'/>
                <p className='text-xl'>Plan upgraded successfully!!!</p>
            </div>
            <div className='space-y-3'>
                <p className='text-green-500'>start date:</p>
                <p className='text-red-500'>end date:</p>
                <p className=''>plan type:</p>
            </div>
            <Button onClick={()=>navigate("/")}>Go to home</Button>
        </Card>

    </div>
  )
}

export default UpgradeSuccess