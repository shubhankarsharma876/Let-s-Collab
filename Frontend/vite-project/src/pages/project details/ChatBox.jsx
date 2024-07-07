import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { store } from '@/redux/Store'
import { fetchChatByProject, fetchChatMessage, sendMessage } from '@/redux/chat/Action'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ChatBox() {
  const { auth, chat } = useSelector(store => store)
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    console.log("message", message);
    dispatch(sendMessage({
      senderId: auth.user?.id,
      projectId: id,
      content: message
    }));
    setMessage("");

  }
  useEffect(() => {
    dispatch(fetchChatByProject(id))
  }, [])

  useEffect(() => {
    dispatch(fetchChatMessage(chat.chat?.id))
  }, [])

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }


  return (
    <div className='sticky'>
      <div className='border rounded-lg'>
        <h1 className='border-b p-5'>Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">

          {chat.messages?.map((item, index) => (item.sender.id !== auth.user.id ? <div className='flex gap-2 mb-2 justify-start' key={item}>
            <Avatar>
              <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
            </Avatar>
            <div className='space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-x1'>
              <p>{item.sender.fullName}</p>
              <p className='text-gray-300'>{item.content}</p>
            </div>
          </div> :
            <div className='flex gap-2 mb-2 justify-end' key={item}>

              <div className='space-y-2 py-2 px-5 border rounded-se-2xl rounded-x-x1'>
                <p>{item.sender.fullName}</p>
                <p className='text-gray-300'>{item.content}</p>
              </div>
              <Avatar>
                <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
              </Avatar>
            </div>))}

        </ScrollArea>
        <div className='relative p-0'>
          <Input
            value={message}
            onChange={handleMessageChange}
            placeholder="Type here..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
          />
          <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
            <PaperPlaneIcon />
          </Button>


        </div>

      </div>
    </div>
  )
}

export default ChatBox