const Login = () => {
  return (
    <main className='grid place-content-center min-h-screen'>
      <form className='bg-dark-3 p-10 rounded sm:w-[36rem] w-fit'>
        <h3 className='text-2xl font-bold text-center mb-5'>
          Welcome To Dachat!
        </h3>
        <div className='grid mb-4'>
          <label
            htmlFor='username'
            className='text-light uppercase text-xs mb-2'
          >
            Username
          </label>
          <input
            id='username'
            className='h-10 px-2.5 bg-dark-5 outline-none rounded-sm'
            autoFocus
          />
        </div>
        <div className='grid mb-4'>
          <label htmlFor='room' className='text-light uppercase text-xs mb-2'>
            Room
          </label>
          <input
            id='room'
            className='h-10 px-2.5 bg-dark-5 outline-none rounded-sm'
          />
        </div>
        <div className='grid'>
          <button className='btn-primary h-10'>Join Room</button>
        </div>
      </form>
    </main>
  )
}

export default Login
