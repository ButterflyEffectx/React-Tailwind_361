import React, { useState } from 'react'

function Nav() {

        const [ isMenuOpen, SetIsMenuOpen ] = useState(false);

        const toggleMenu = () => {
            SetIsMenuOpen(!isMenuOpen) // !false = true
        }


  return (
    <nav className='font-monobg-white border-gray-200 dark:bg-gray-900 p-4'>
        <div className="flex items-center justify-between">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://th.bing.com/th/id/R.362662f2d5a81f64df4f638b996db423?rik=BpTay%2ff1FBu5iw&riu=http%3a%2f%2fcsmju.jowave.com%2fnewimages%2fcsmju_logo.gif&ehk=kXHnKW%2bxkGiTukWTaH7uTmOEKWu5lgg6%2fp%2f88lezi60%3d&risl=&pid=ImgRaw&r=0" class="h-8" alt="CSMJU" />
                <div className="text-white text-2xl font-bold">CS Directory</div>
            </a>
            {/* Toggle burgur */}
            <div className="md:hidden">
                <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
                    <svg 
                        fill='none' 
                        stroke='currentColor' 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        strokeWidth={2}
                        viewBox='0 0 24 24'
                        className='w-6 h-6'
                    >
                        <path d='M4 6h16M4 12h16M4 18h16'> </path>


                    </svg>
                </button>
            </div>

            <form class=" flex hidden md:flex items-center max-w-lg mx-auto">   
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ค้นหาจากรหัสนักศึกษา" required />
                </div>
                <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
            </form>
            

        
            
            <ul className="hidden md:flex space-x-4">
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white'>About</a></li>
                <li><a href="#" className='text-white'>Contact</a></li>
            </ul>


        </div>

       {/* mobile nav */}
{isMenuOpen ? (
    <>
        <form className="flex md:hidden items-center max-w-lg my-4 mx-auto">   
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <input 
                    type="text" 
                    id="voice-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="ค้นหาจากรหัสนักศึกษา" 
                    required 
                />
            </div>
            <button 
                type="submit" 
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <svg 
                    className="w-4 h-4 mr-2" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 20 20"
                >
                    <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </button>
        </form>

        <ul className="flex flex-col md:hidden items-center">
            <li className="py-2"><a href="#" className="text-white">Home</a></li>
            <li className="py-2"><a href="#" className="text-white">About</a></li>
            <li className="py-2"><a href="#" className="text-white">Contact</a></li>
        </ul>
    </>
) : null}

        

    </nav>
  )
}

export default Nav