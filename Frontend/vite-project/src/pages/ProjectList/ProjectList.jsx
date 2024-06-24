import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import ProjectCard from '../projects/ProjectCard'

export const tags = [
    "all", "react", "nextjs", "spring boot", "mysql", "mongodb", "python", "nodejs", "flask", "django"
];

function ProjectList() {
    const [keyword, setKeyword] = useState("");

    

    const handleFilterChange = (section, value) => {
        console.log(section, value);
    }

    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <>
            <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
                <section className='filter section'>
                    <Card className="p-5 sticky top-10">
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-x1 -tracking-wide'>Filters</p>
                            <Button variant="ghost" size='icon'>
                                <MixerHorizontalIcon />
                            </Button>

                        </div>
                        <CardContent className="mt-5">
                            <ScrollArea className="space-y-7 h-[70vh]">
                                <div>
                                    <h1 className='pb-3 text-gray-400 border-b'>
                                        Category
                                    </h1>
                                    <div className="pt-5">
                                        <RadioGroup className=' space-y-3 pt-5' defaultValue='all' onValueChange={(value) => handleFilterChange("category", value)}>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value='all' id="r1" />
                                                <Label htmlFor='r1'>All</Label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value='Fullstack' id="r2" />
                                                <Label htmlFor='r2'>FullStack</Label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <RadioGroupItem value='Frontend' id="r3" />
                                                <Label htmlFor='r3'>Frontend</Label>
                                            </div>
                                            <div className='flex items-center gap-2 pb-3'>
                                                <RadioGroupItem value='Backend' id="r4" />
                                                <Label htmlFor='"r4'>Backend</Label>
                                            </div>

                                        </RadioGroup>

                                    </div>
                                </div>

                                <div>
                                    <h1 className='pb-3 text-gray-400 border-b'>
                                        Tag
                                    </h1>
                                    <div className="pt-5">
                                        <RadioGroup className=' space-y-3 pt-5' defaultValue='all' onValueChange={(value) => handleFilterChange("tag", value)}>
                                            {tags.map((item) => <div key={item} className='flex items-center gap-2'>
                                                <RadioGroupItem value={item} id={`r1-${item}`} />
                                                <Label htmlFor={`r1-${item}`}>{item}</Label>
                                            </div>)}

                                        </RadioGroup>

                                    </div>
                                </div>

                            </ScrollArea>


                        </CardContent>

                    </Card>

                </section>
                <section className='projectListSection w-full lg:w-[48rem]'>
                    <div className='flex gap-2 items-center pb-5 justify-between'>
                        <div className='relative p-0 w-full'>
                            <Input onChange={handleSearchChange} placeholder="search project" className="40% px-9" />
                            <MagnifyingGlassIcon className='absolute top-3 left-4' />

                        </div>
                        
                        </div>
                        <div>
                            <div className='space-y-5 min-h-[74vh]'>

                                {
                                    keyword ? [1, 1, 1].map((item) => <ProjectCard key={item}/>) :
                                        [1, 1, 1, 1,1].map((item) => <ProjectCard key={item}/>)
                                }
                            </div>

                    </div>

                </section>

            </div>
        </>
    )
}

export default ProjectList