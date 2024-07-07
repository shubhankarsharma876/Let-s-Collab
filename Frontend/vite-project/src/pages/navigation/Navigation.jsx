import { Button } from '@/components/ui/button'
import { Dialog, DialogHeader } from '@/components/ui/dialog'
import { DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateProjectForm from '../projects/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/redux/Store'
import { logout } from '@/redux/Auth/Action'

function Navigation() {
    const {auth} = useSelector(store=>store)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleLogout=()=>{
        dispatch(logout())
    }
    return (
        <div className='border-b py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p className='cursor-pointer' onClick={()=>navigate("/")}>Let's Collab</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Poject</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectForm />
                    </DialogContent>

                </Dialog>
                <Button variant="ghost" className="cursor-pointer" onClick={()=>navigate("/upgrade_plan")}>Upgrade</Button>
            </div>
            <h1 className="text-red-800">Subscription model is down due to API conflict... Soon will be live fully, Until enjoy using all features. Thank You!</h1>
            <div className='flex gap-3 items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" size="icon" className="rounded-full border-2 borser-grey-500">
                            <PersonIcon/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleLogout} >Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>{auth.user?.fullName}</p>
            </div>
        </div>
    )
}

export default Navigation