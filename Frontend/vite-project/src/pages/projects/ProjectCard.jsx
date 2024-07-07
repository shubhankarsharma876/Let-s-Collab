import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { deleteProject } from '@/redux/project/Action';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    

    const handleDelete = () => {
        console.log("Project with id:",item.id); // Ensure this logs the correct ID
        dispatch(deleteProject(item.id)); // Pass only the ID to the action
    };

    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h1 onClick={() => navigate(`/project/${item.id}`)} className='cursor-pointer font-bold text-lg'>
                                {item.name}
                            </h1>
                            <DotFilledIcon />
                            <p className='text-sm text-grey-400'>{item.category}</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button className="rounded-full" variant="ghost" size="icon">
                                        <DotsVerticalIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Update</DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className='text-gray-500 text-sm'>{item.description}</p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {item.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;
