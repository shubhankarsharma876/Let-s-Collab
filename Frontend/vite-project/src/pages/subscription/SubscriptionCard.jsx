import { Button } from '@/components/ui/button'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React from 'react'

function SubscriptionCard({ data }) {
    return (
        <div className='rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-2xl card p-5 space-y-5 w-[18rem]'>
            <p>{data.planName}</p>
            <p>
                <span className='text-xl font-semibold'>${data.price}</span>
                <span>{data.planType}</span>
            </p>
            {data.planType == 'ANNUALLY' && <p className='text-green-500'>30% off</p>}

            <Button>
                {data.buttonName}
            </Button>

            <div>
                <div>
                    <CheckCircledIcon/>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionCard
