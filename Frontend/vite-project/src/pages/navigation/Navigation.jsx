import { Button } from '@/components/ui/button'
import { Dialog, DialogHeader } from '@/components/ui/dialog'
import { DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateProjectForm from '../projects/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'

function Navigation() {
    return (
        <div className='border-b py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p className='cursor-pointer'>Let's Collab</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Poject</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectForm />
                    </DialogContent>

                </Dialog>
                <Button variant="ghost">Upgrade</Button>
            </div>
            <div className='flex gap-3 items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" size="icon" className="rounded-full border-2 borser-grey-500">
                            <PersonIcon/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem >Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>Shubhankar Sharma</p>
            </div>
        </div>
    )
}

export default Navigation