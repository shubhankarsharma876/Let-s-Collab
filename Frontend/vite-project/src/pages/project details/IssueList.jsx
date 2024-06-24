import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import IssueCard from './IssueCard'
import { DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'

function IssueList({ title, status }) {
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

                            {[1,1,1,1].map((item)=><IssueCard key={item} />)}
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
                        <CreateIssueForm/>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IssueList