function SingleCarousel({logo, title} : any) {
    return (
        <li className='flex bg-[#2d2e37] hover:text-black hover:cursor-pointer hover:bg-[#b8e299] px-5 py-3 rounded-3xl gap-2 items-center mx-1'><span className='h-[40px] w-[40px] rounded-full bg-white flex items-center'><img className='mx-auto block' src={logo} /></span><span className='text-xl'>{title}</span></li>
    )
  }
  
  export default SingleCarousel
  