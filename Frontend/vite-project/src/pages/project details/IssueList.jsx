import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React, { useEffect } from 'react'
import IssueCard from './IssueCard'
import { DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIssues } from '@/redux/issues/Action'
import { useParams } from 'react-router-dom'

function IssueList({ title, status }) {
    const{id} = useParams();
    const dispatch = useDispatch()
    const {issue} = useSelector(store=>store)
    useEffect(()=>{
        dispatch(fetchIssues(id))
    },[id])
    return (
        <div>
            <Dialog>
                <Card className="w-full md:w-[300] lg:w-[310px]">
                    <CardHeader>
                        <CardTitle>
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-2'>
                            {/* Adding dummy array */}

                            {issue.issues.filter((issue=>issue.status==status)).map((item)=><IssueCard projectId={id} item={item} key={item.id} />)}
                        </div>
                    </CardContent>

                    <CardFooter>
                        <DialogTrigger>
                            <Button variant="outline" className="w-full gap-2flex items-center">
                                <PlusIcon/>
                                Create Issue</Button>
                        </DialogTrigger>
                        
                    </CardFooter>


                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Issue</DialogTitle>
                        <CreateIssueForm status={status}/>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IssueList