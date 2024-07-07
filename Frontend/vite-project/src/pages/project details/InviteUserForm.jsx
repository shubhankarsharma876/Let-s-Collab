import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import {DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { inviteToProject } from '@/redux/project/Action'
import { useParams } from 'react-router-dom'


function InviteUserForm() {
  const form = useForm({
    defaultValues: {
        email: "",
        
    }
})
const dispatch = useDispatch();
const{id} = useParams()


const onSubmit = (data) => {
    console.log("Create project data", data);
    dispatch(inviteToProject({email:data.email,projectId:id}))
}
  return (
    <>
      <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="email"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="User Email..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />

                    <DialogClose>
                        
                        <Button type="submit" className="w-full mt-5">
                          Invite User
                          </Button>
                    </DialogClose>
                </form>

            </Form>
            </>
  )
}

export default InviteUserForm