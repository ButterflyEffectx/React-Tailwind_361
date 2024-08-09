import React from 'react';
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import BodyIndex from './components/bodyindex'

function Profile() {

  return (
    <>
      <div className="min-h-screen dark:bg-gray-700">
        <Nav />
        

        <section class="bg-center bg-no-repeat bg-[url('https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/428395299_873721081215815_6431220037437957079_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cZdKM1g82CIQ7kNvgGzYwH6&_nc_ht=scontent.fbkk13-2.fna&oh=00_AYAtLL_1Da5dk0wuT8h816rWZBEHaSRDVYfbXuGqD1qk4A&oe=66BC0FB4')] bg-gray-700 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Computer Science</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">- MAEJO UNIVERSITY -</p>
            </div>
        </section>



        <div className='container text-white my-5 mx-auto'>
            <h1 className='flex justify-center text-3xl font-semibold mb-3'>รายละเอียดข้อมูล</h1>
        </div>

        <div class=" w-3/5 justify-center mx-auto my-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-7 rounded-t-lg" src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.6435-9/67521346_472102283639740_2057127547660926976_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_ohc=SO1CmzdZ1dcQ7kNvgGW0LUy&_nc_ht=scontent.fbkk8-4.fna&oh=00_AYBRr79S_HJhjz5PMQ-u9naej9R2LAZr-jun2tYImHiK9A&oe=66DDAAA4" alt="product image" />
            </a>
            <div class="flex flex-col text-center px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">พีระพัฒน์ มิคะนุช</h5>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">i_am_egoist@hotmail.com</h5>
            </div>
        </div>



        

        <section class=" bg-white dark:bg-gray-800">
        <div className='container text-white mx-auto'>
            <h1 className='flex justify-center text-3xl font-semibold pt-8'>รายละเอียดหลักสูตร</h1>
        </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8">
                <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                        </svg>
                        ฉบับล่าสุด
                    </a>
                    <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2"> เอกสาร มคอ. (2565) </h1>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"> หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ฉบับนี้เป็นหลักสูตรที่ปรับปรุง มาจากหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์พ.ศ. 2560 เพื่อใช้ในการจัด การศึกษาในสาขาวิชาวิทยาการคอมพิวเตอร์คณะวิทยาศาสตร์มหาวิทยาลัยแม่โจ้โดยคาดว่า จะเริ่มใช้ได้ตั้งแต่ปีการศึกษา พ.ศ. 2565 เป็นต้นไป </p>
                    <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Read more
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                            </svg>
                            ฉบับที่ 2
                        </a>
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"> เอกสาร มคอ. (2560) </h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">  หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ ฉบับนี้ เป็นหลักสูตรที่ ปรับปรุงมาจากหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ พ.ศ. 2555 เพื่อใช๎ใน การจัดการศึกษาในสาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแมํโจ๎ โดยคาดวํา จะเริ่มใช๎ได๎ตั้งแตํปีการศึกษา พ.ศ. 2560 เป็นต๎นไป  </p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </a>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                            </svg>
                            ฉบับที่ 1
                        </a>
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"> เอกสาร มคอ. สาขาวิชานวัตกรรมเทคโนโลยีดิจิทัล (2559) </h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"> หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชานวัตกรรมเทคโนโลยีดิจิทัล ฉบับนี้ เป็นหลักสูตร ใหม่ ได้พัฒนาขึ้นตามกรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ พ.ศ. 2552 ของส านัก คณะกรรมการการอุดมศึกษา กระทรวงศึกษาธิการ และปรับปรุงให้มีความทันสมัย เหมาะสม ถูกต้อง และเป็นไปตามพระราชบัญญัติว่าด้วยวิทยาศาสตร์ เทคโนโลยีและนวัตกรรมแห่งชาติ พ.ศ. 2551 รวมทั้งสอดคล้องกับพันธกิจของมหาวิทยาลัยแม่โจ้ ในการผลิตบัณฑิตที่มีคุณภาพ จริยธรรม มีความรู้ ความสามารถ ทางวิชาการและวิชาชีพ หลักสูตรฉบับนี้</p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>



        


        


        <Footer />
    </div>
    </>
  )
}

export default Profile
