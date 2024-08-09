import React from 'react'
import { Link } from 'react-router-dom'


function HeaderIndex() {
  return (


    <>
      <div className='container w-[90%] p-[20px] text-white border-gray-200 rounded-md dark:bg-gray-800 my-3 mx-auto drop-shadow-md'>
        <div className='float-left w-2/4 md:w-96 mr-3'>
          <img class="" src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.6435-9/62307899_1207224956124819_7431316938556440576_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_ohc=yqe0fYSZ1QwQ7kNvgExyLxi&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYC_sgA9cXh7VOPqkC_BCI-01ANnrYO_quob7Fqu_JAzeQ&oe=66DD4AF1"></img>
        </div>
        <p>สาขาวิชาวิทยาการคอมพิวเตอร์ ได้ดำเนินการเปิดสอนมาตั้งแต่ปีการศึกษา2536 เป็นสาขาวิชาแรกของคณะวิทยาศาสตร์ที่เริ่มจัดตั้งมาพร้อมกับคณะวิทยาศาสตร์ หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ ได้พัฒนาขึ้นเพื่อยกระดับกำลังคนให้เพิ่มขีดความสามารถด้านวิชาการและวิชาชีพในกลุ่มอุตสาหกรรมดิจิทัล ตอบสนองการเรียนรู้ในศตวรรษที่ 21 และกระแสการเปลี่ยนแปลงทางด้านเทคโนโลยีสารสนเทศ ซึ่งเป็นไปตามทิศทางการพัฒนาทางด้านเศรษฐกิจและสังคม โดยสร้างความเชี่ยวชาญและทักษะที่หลากหลายได้แก่ การพัฒนาระบบอย่างเต็มรูปแบบ (Full Stack Developer) วิทยาศาสตร์ข้อมูล (Data Scientist) การพัฒนาด้านปัญญาประดิษฐ์ (Artificial Intelligence Engineer) และการบริหารจัดการดูแลระบบเครือข่ายคอมพิวเตอร์ (System Administrator) อีกทั้งยังสามารถบูรณาการองค์ความรู้โดยเฉพาะอย่างยิ่งทางการเกษตร และวิทยาศาสตร์ประยุกต์</p>
      </div>

    
      <div className='container flex flex-col w-2/4 md:grid gap-4 grid-cols-2 text-center my-6 mx-auto'>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 29</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 28</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 27</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 26</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 25</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 24</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 23</button></Link>
          <Link to="/Direc" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><button type="button">รุ่นที่ 22</button></Link>
          
      </div>
      
    </>

    
  )
}

export default HeaderIndex