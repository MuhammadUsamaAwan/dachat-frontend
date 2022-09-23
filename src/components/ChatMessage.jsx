const ChatMessage = ({ name, date, message }) => {
  return (
    <div className='flex gap-2 items-start'>
      <div className='bg-bg-dark w-10 h-10 rounded-full grid place-content-center text-sm'>
        {name[0]}
      </div>
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <div className='text-base'>{name}</div>
          <div className='text-light text-xs'>{date}</div>
        </div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
