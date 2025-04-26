import React, { useEffect, useState } from 'react'

const Result = ({result}) => {
  const [output , setOutput] = useState("");

  useEffect(()=>setOutput(result),[result]);
  return (
    <div className='flex justify-center  w-full ' data-aos="zoom-in-right">
        <div className='w-[70%] text-left  rounded shadow-xl px-10 py-5 mb-10'>
            <h2 className='text-2xl font-bold'>🧬 MRI Scan Analysis Result</h2>
            <p className='mt-2 font-medium text-gray-700'> Your Uploaded MRI Scan has been successfully analyzes using our Deep Training Model </p>

            <div className='w-[100%] bg-green-100 mt-6 px-6 py-5 rounded-xl border-l-4 border-l-green-600 text-green-700 font-bold text-lg'>
                Predicted Tumor Type: &nbsp;&nbsp;<span className='underline underline-offset-4     '>{ output} </span>
            </div>
            <p className='mt-4 font-semibold  '>🤔 What does it mean ?&nbsp;</p>
            <p className='mt-1 text-gray-700'>The prediction is based on your MRI scan image. If the result indicates a tumor type such as
                <strong> Glioma</strong>, <strong>Meningioma</strong>, or <strong>Pituitary Tumor</strong>,
                we strongly recommend consulting a medical professional for a detailed diagnosis and treatment plan.
            </p>
            <p className='mt-2 text-gray-600 text-sm'>Note:AI results are for informational purposes only. Please consult a healthcare provider for a proper diagnosis.</p>


        </div>
    </div>
  )
}

export default Result