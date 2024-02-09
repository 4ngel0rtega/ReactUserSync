function MainContent() {
  return (
    <section className='w-full h-screen'>
      <div id='image-hero' className='h-full bg-fixed'>
        <div className='h-full bg-black/50 flex flex-col justify-center items-center'>
          <div className='text-center flex flex-col justify-center items-center gap-5'>
            <h2 className='drop-shadow-md text-6xl md:text-9xl font-bold text-sky-400 uppercase'>Bus<span className='text-amber-500'>track</span> </h2>
            <p className='text-3xl md:text-5xl font-thin text-white capitalize '>Una nueva era en la localización</p>
            <a href='#problem' className=' w-auto p-2 px-5 border border-lime-500 text-white text-xl uppercase transition-background hover:bg-lime-500 hover:font-semibold'>Conoce Más</a>
          </div>
        </div>
      </div>
    </section>

  )
}
export default MainContent;
