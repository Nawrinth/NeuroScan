import React from 'react';
import privacyImage from '../assets/privacy.png'
import webAccess from '../assets/web-access.png'
import accuracyImage from '../assets/accuracy.png'

const AboutUs = () => {
  return (
      <div className="flex flex-col items-center"  id="About" data-aos="fade-up">
      {/* Header Section */}
      <div className="text-center mt-32">
        <h2 className="text-4xl font-bold">
          How It <span className="underline font-medium underline-offset-8">Works</span>
        </h2>
        <p className="mt-2 text-gray-500 text-lg">
          Revolutionizing Brain Tumor Diagnosis with AI
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mt-16 gap-10 mb-20 items-center">
        {/* Image Section with Increased Height */}
        <div className="w-full lg:w-2/5 h-[550px] lg:h-[650px] bg-[url('./assets/brain-tumer.png')] bg-contain bg-no-repeat bg-center" />

        {/* Text Section with Min Height */}
        <div className="  w-full lg:w-3/5 flex flex-col items-center text-center lg:text-left min-h-[550px] px-20 ">
          <h2 className="text-3xl font-bold text-gray-700">Brain Disease Classifier</h2>
          <p className="mt-6 text-gray-700 max-w-xl">
            Brain Tumor Classifier is an AI-powered web application designed to assist medical professionals in detecting brain tumors from MRI scans. Using deep learning algorithms, it provides fast and accurate classifications, supporting early diagnosis, reducing human error, and enhancing decision-making in clinical settings, especially where expert radiologists may not be available.
          </p>

          {/* Grid Info Section */}
          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full justify-items-center text-center">
              <div>
                <p className="text-4xl font-medium text-gray-800">95%</p>
                <p>Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">24x7</p>
                <p>Accessibility</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">Fast</p>
                <p>Diagnosis</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">AI</p>
                <p>Assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='w-full py-15 px-6 sm:px-10 md:px-16 lg:px-24 bg-blue-100 ' data-aos="fade-up">
        <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl w-full lg:w-[75%] md:w-[85%] sm:w-[90%] mx-auto text-center'>Diagnose Smarter with AI-Powered Precision</h2>
        <p className='font-medium text-base sm:text-lg md:text-xl w-full sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto text-center mt-8 text-gray-700'>Your health is your most valuable asset—and early, accurate detection can make all the difference. Our advanced AI-powered brain tumor classification system is designed to analyze MRI scans in seconds, providing fast, precise, and reliable results. Whether you're a medical professional seeking diagnostic support or a patient looking for clarity, our tool empowers you to make confident, informed decisions with ease and peace of mind..</p>
        
        
        <div className='w-full mt-15 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-evenly items-center'>
          <div className=' w-3/4 sm:w-[30%] md:w-[20%] flex flex-col px-4 py-4 min-h-65 justify-between'>
              <div className='flex flex-row items-center'>
                <img src={privacyImage} className='h-20' alt="privacy" />
                {/* <p className='ml-2 font-semibold text-2xl text-gray-800'>Privacy</p> */}
              </div>
              <div className='font-medium text-[18px] text-gray-700  mt-5'>
                <p> Your MRI scans are processed safely in real time, <b> never stored or shared.</b> Your data remains fully private and confidential.</p>
              </div>
          </div>
          <div className=' w-3/4 sm:w-[30%] md:w-[20%] flex flex-col px-4 py-4 min-h-65 justify-between'>
          <div className='flex flex-row items-center'>
                <img src={webAccess} className='h-20' alt="privacy" />
                {/* <p className='ml-2 font-semibold text-2xl text-gray-800'>Privacy</p> */}
              </div>
              <div className='font-medium text-[18px] text-gray-700  mt-5'>
                <p> Use our tool directly from your browser <b>no downloads or installations</b> required. It's available anytime, anywhere you need it.</p>
              </div>

          </div>
          <div className=' w-3/4 sm:w-[30%] md:w-[20%] flex flex-col px-4 py-4 min-h-65 justify-between'>
              <div className='flex flex-row items-center'>
                    <img src={accuracyImage} className='h-20' alt="privacy" />
                    {/* <p className='ml-2 font-semibold text-2xl text-gray-800'>Privacy</p> */}
                  </div>
                  <div className='font-medium text-[18px] text-gray-700  mt-5'>
                    <p> Upload your MRI scan and receive accurate predictions<b> within seconds </b>no waiting, just fast, AI-powered insights.</p>
                  </div>

              </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
