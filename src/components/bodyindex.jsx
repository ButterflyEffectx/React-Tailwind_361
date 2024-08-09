import React from 'react'

function BodyIndex() {
    return (
        <>
            <div className='container mx-auto text-white '>
                <hr className='mt-6 mb-3 border-gray-900 mx-auto'></hr>
                <h1 className='flex text-center justify-center text-2xl font-semibold mb-3'>Related posts</h1>


                {/* card */}
                <div className='flex flex-col items-center lg:flex-row gap-6 my-6 md:justify-center mx-auto'>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                        <a href="#" className="flex-shrink-0">
                            <img className="rounded-t-lg w-full h-48 object-cover" src="https://api3.csmju.com/images/news/posters/2023/09/poster-news-1694602101-1665772595.png" alt="" />
                        </a>
                        <div className="p-5 flex flex-col flex-grow">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ประกาศรับสมัครงานตำแหน่งงาน SOC Engineer (Security Operation Center)</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                        <a href="#" className="flex-shrink-0">
                            <img className="rounded-t-lg w-full h-48 object-cover" src="https://api3.csmju.com/images/news/posters/2023/06/poster-news-1685704286-584959803.jpg" alt="" />
                        </a>
                        <div className="p-5 flex flex-col flex-grow">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">บุคลากรและนักศึกษาหลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์ ร่วมทำกิจกรรม Big Cleaning day</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                        <a href="#" className="flex-shrink-0">
                            <img className="rounded-t-lg w-full h-48 object-cover" src="https://api3.csmju.com/images/news/posters/2023/08/poster-news-1692088125-1625191478.png" alt="" />
                        </a>
                        <div className="p-5 flex flex-col flex-grow">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">เปิดรับสมัครทุนการศึกษา สำหรับนักศึกษาสาขาวิชาวิทยาการคอมพิวเตอร์</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Repeat the above div for other cards */}
                </div>

            </div>
        </>

    )
}

export default BodyIndex