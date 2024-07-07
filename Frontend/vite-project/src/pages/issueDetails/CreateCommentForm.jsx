import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createComment } from '@/redux/comment/Action';

import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

function CreateCommentForm({ issueId }) {
    const form = useForm({
        defaultValues: {
            content: "",

        }
    })
    const dispatch = useDispatch();



    const onSubmit = (data) => {
        console.log("Create project data", data);
        dispatch(createComment({content:data.content,issueId}))
    }
    return (
        <div>
            <Form {...form}>
                <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="content"
                        render={({ field }) => <FormItem>
                            <div className='flex gap-2'>
                                <div>
                                    <Avatar>
                                        <AvatarFallback>R</AvatarFallback>
                                    </Avatar>
                                </div>
                                <FormControl>
                                    <Input {...field}
                                        type="text"
                                        className="w-[20rem]"
                                        placeholder="Enter the comment" />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>}
                    />

                    <Button type="submit">
                        Save
                    </Button>


                </form>

            </Form>

        </div>
    )
}

export default CreateCommentForm