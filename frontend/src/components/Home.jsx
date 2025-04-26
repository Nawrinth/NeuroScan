import React from 'react'

const Home = () => {
  return (
    <div id="Home" className="w-full h-full mt-[180px] flex flex-col items-center " data-aos="fade-up">
        <div className='z-[-10] w-[30%] bg-blue-200 fixed left-[-20px] h-15 rounded-4xl' data-aos = "slide-right" ></div>
        <div className='z-[-10] w-[40%] bg-blue-200 fixed top-20 left-[-20px] rounded-4xl h-15' data-aos = "slide-right"></div>
        
        
        <div className='z-[-10] w-[40%] bg-blue-200 fixed top-40 right-0 rounded-l-4xl h-15' data-aos = "slide-left"></div>
        <div className='z-[-10] w-[30%] bg-blue-200 fixed top-60 right-0 h-15 rounded-l-4xl' data-aos = "slide-left"></div>

    {/* <div className='h-[80vh] mx-5 mt-[120px] rounded-2xl border'></div> */}
        <div className="flex flex-col items-center">
            <p className="text-md tracking-wider text-2xl text-gray-500">Brain Tumor Classifier</p>
            <div></div>
            <h1 className='text-4xl mt-4 font-bold text-gray-700 leading-normal'>
                AI-Powered <span className='text-blue-600'>Brain Tumor Detection </span>for Faster 
            </h1>  
            <div className='flex flex-row'>
                <h1 className='text-4xl mt-1 font-bold text-gray-700'>
                    and More{" "}
                </h1>
                <div>

                <h1 className='text-4xl ml-2 mt-1 font-bold text-gray-700
                                overflow-hidden whitespace-nowrap
                                border-r-4 border-blue-600 pr-2 w-fit
                                animate-typing '>
                    Accurate Diagnoses
                </h1>
                </div>
            </div>

                            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-4 mx-auto">
                <p className="text-xl font-semibold text-gray-500 text-center mt-4">
                Empowering healthcare professionals with cutting-edge AI technology to detect brain tumors early, improve accuracy, and accelerate life-saving decisions.
                </p>
            </div>

            <div className="mt-10 hover:animate-myCustomAnimation">
                <a  href="#Upload" className="px-8 py-4 bg-blue-500 text-white rounded-xl transition cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Get Started
                </a>
            </div>
        </div>
    </div>




  )
}

export default Home