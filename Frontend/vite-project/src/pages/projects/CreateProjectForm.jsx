import { Form, FormField } from '@/components/ui/form'
import { Description } from '@radix-ui/react-dialog'
import React from 'react'
import { useForm } from 'react-hook-form'

function CreateProjectForm() {
    const form = useForm({
        defaultValues:{
            name:"",
            Description:"",
            category:"",
            tags:["javascript","react"]
        }
    })

    const onSubmit=(data)=>{
        console.log("Create project data",data);
    }
  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name="name"
                render=
                />
            </form>

        </Form>
    </div>
  )
}

export default CreateProjectForm