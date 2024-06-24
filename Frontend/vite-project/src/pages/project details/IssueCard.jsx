import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { AvatarFallback } from '@/components/ui/avatar'
import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons'
import React from 'react'
import UserList from './UserList'
import { useNavigate } from 'react-router-dom'

function IssueCard() {
  const navigate = useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2 ">
      <CardHeader className="py-0 pb-1">
        <div className='flex justify-between items-center'>
          <CardTitle className="cursor-pointer" onClick={()=>navigate("/project/3/issue/10")}>
            Create Navbar
          </CardTitle>


          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardHeader>
          <CardContent className="py-0">
            <div className='flex items-center justify-between'>
              <p>FBP-(1)</p>
              <DropdownMenu className="w-[30rem] border border-red-400">
                <DropdownMenuTrigger>
                  <Button className="bg-gray-900 hover:text-black text-white rounded-full" size="icon">
                    <Avatar>
                      <AvatarFallback>
                        <PersonIcon />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <UserList/>
                </DropdownMenuContent>

              </DropdownMenu>

            </div>
          </CardContent>
        </CardHeader>
      </CardHeader>
    </Card >
  )
}

export default IssueCard