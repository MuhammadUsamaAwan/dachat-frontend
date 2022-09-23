import { useState } from 'react'
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
} from 'emoji-picker-react'
import ChatMessage from '../components/ChatMessage'
import Participant from '../components/Participant'
import { ReactComponent as EmojiIcon } from '../assets/emoji.svg'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [showEmojos, setShowEmojos] = useState(false)

  const onEmojiClick = emojiData => setMessage(prev => prev + emojiData.emoji)

  console.log(message)

  return (
    <main className='h-screen flex'>
      {/* side bar */}
      <aside className='bg-dark-4 flex-[1] overflow-auto'>
        {/* header */}
        <div className='p-3 flex justify-between items-center box-shadow'>
          <h3 className='text-base font-semibold'>Room Name</h3>
          <button className='btn-danger px-3 py-1'>Leave</button>
        </div>
        {/* participant */}
        <div className='my-4 space-y-1'>
          <h4 className='text-light uppercase text-xs px-4 mb-1'>
            Participants
          </h4>
          <Participant name='Usama Awan' />
          <Participant name='Sara Iftikhar' />
          <Participant name='Muhammad Jahanzeb' />
          <Participant name='Faiza Iftikhar' />
        </div>
      </aside>

      {/* main */}
      <section className='flex-[4] px-4 flex flex-col justify-between'>
        <div className='space-y-4 overflow-auto mt-auto'>
          {/* chat */}
          <ChatMessage
            name='Usama Awan 21'
            date='Today at 12:40pm'
            message='Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae excepturi eaque quo voluptatum ut quidem sint temporibus reprehenderit nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo quos eligendi omnis iste, aut atque beatae vero officiis minus?'
          />
        </div>
        {/* new message form */}
        <div className='my-2 relative'>
          <form>
            <input
              className='bg-bg-dark w-full text-base text-light px-4 py-2.5 outline-none rounded-sm'
              placeholder='New Message'
              autoFocus
              value={message}
              onChange={e => console.log(e)}
            />
            <div className='absolute right-4 top-1/2 -translate-y-1/2 text-light text-xs p-1 border-sm uppercase'>
              <EmojiIcon
                className='hover:text-white cursor-pointer'
                onClick={() => setShowEmojos(prev => !prev)}
              />
            </div>
          </form>
          <div className='absolute right-4 bottom-14'>
            {showEmojos && (
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                autoFocusSearch={false}
                theme={Theme.AUTO}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Chat
