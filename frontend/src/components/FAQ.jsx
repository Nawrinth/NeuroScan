import React from 'react'

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center   w-full" id="FAQ" data-aos="">
        <div className="text-center mt-32">
            <h2 className="text-4xl font-bold">
            Frequently Asked <span className="underline font-medium underline-offset-8">Questions</span>
            </h2>
            <p className="mt-2 text-gray-500 text-lg">
                Got Questions? We’ve Got Answers
            </p>
        </div>

        <div className='flex flex-col items-center mt-5 w-full'>

            <div className='flex flex-row w-[70%] border-l-4 mt-10 border-l-blue-700 items-center  px-5 py-5 rounded-2xl bg-blue-50  shadow transition-transform hover:animate-elevate hover:shadow'>
                <div className='rounded-full  p-3 font-semibold text-white bg-blue-500 mr-10 text-2xl '>
                    Q
                </div>
                <div className=''>
                    <h2 className='text-2xl font-bold '> How accurate is the brain tumor classifier?</h2>
                    <p className='mt-2 text-gray-700'>Our classifier is trained on a labeled MRI dataset and achieves high accuracy in distinguishing between glioma, meningioma, pituitary tumors, and healthy scans. However, it is not a substitute for professional medical diagnosis.</p>
                </div>
            </div>

            <div className='flex flex-row w-[70%] border-l-4 mt-10 border-l-blue-700 items-center  px-5 py-5 rounded-2xl bg-blue-50  shadow transition-transform hover:animate-elevate hover:shadow'>
                <div className='rounded-full  p-3 font-semibold text-white bg-blue-500 mr-10 text-2xl'>
                    Q
                </div>
                <div>

                    <h2 className='text-2xl font-bold '> What types of tumors can it detect?</h2>
                    <p className='mt-2 text-gray-700'>The model currently classifies MRI images into four categories: <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<b>Glioma</b><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<b>Meningioma</b><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<b>Pituitary Tumor</b><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<b>No Tumor</b><br/>
                    </p>
                </div>
            </div>

            <div className='flex flex-row w-[70%] border-l-4 mt-10 border-l-blue-700 items-center  px-5 py-5 rounded-2xl bg-blue-50  shadow transition-transform hover:animate-elevate hover:shadow'>
                <div className='rounded-full  p-3 font-semibold text-white bg-blue-500 mr-10 text-2xl '>
                    Q
                </div>
                <div>

                    <h2 className='text-2xl font-bold '> 3. Is my uploaded MRI image stored?</h2>
                    <p className='mt-2 text-gray-700'>No. Your image is processed securely and temporarily for prediction only. We do not store or share any personal data or medical images.</p>
                </div>
            </div>


        </div>
        

    </div>
  )
}

export default FAQ