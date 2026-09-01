import "./Header.css"

function Header() {
  return (
    <>
      <header className='header px-[20px] py-[20px] fixed top-0 left-0 w-full z-[999]'>
        <div className="container ">
           <div className='flex justify-between  inner-blk px-[20px] py-[15px] rounded-[14px] items-center'>
            <div className='logo-blk'>
                <h2 className="text-white text-2xl">Convert<strong className="text-[#f2932b]">Case</strong></h2>
            </div>
            <div className='menu-blk'>
                <nav>
                    <ul className='flex gap-[20px] text-[#fff]'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
