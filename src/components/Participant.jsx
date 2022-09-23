const Participant = ({ name }) => {
  return (
    <div className='flex items-center gap-2 text-light px-4 py-3 hover:text-white hover:bg-bg-dark cursor-pointer'>
      <div className='bg-bg-dark w-8 h-8 rounded-full grid place-content-center text-sm'>
        {name[0]}
      </div>
      <div className='text-base'>{name}</div>
    </div>
  )
}

export default Participant
