function Layout({children} : React.PropsWithChildren<any>) {
  return (
    <div className='max-w-[800px] mx-auto p-4'>
          {children}
     </div>
  )
}

export default Layout
