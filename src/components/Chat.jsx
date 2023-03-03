import More from '../img/more.png'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext'
import { useContext } from 'react'

const Chat = () => {
  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={More} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat