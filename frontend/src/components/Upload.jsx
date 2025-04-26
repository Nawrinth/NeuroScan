import React, { useEffect } from 'react'
import MyDropZone from './DropZone'

import { useState } from 'react'
import Result from './Result';



const Upload = () => {
  const [output , setOutput] = useState();
  
  return (
    <div>
      <div className='flex flex-col justify-end' id='Upload'>
        <div className="text-center mt-32">
          <h2 className="text-4xl font-bold">
            Upload <span className="underline font-medium underline-offset-8">MRI</span>
          </h2>
          <p className="mt-2 text-gray-500 text-lg">
            Quick, Secure, Accurate Results
          </p>
          <div className="mt-10  flex flex-col ">
            <MyDropZone onResult={setOutput}/>
          </div>
          <div id="Results" className='pt-20'>

          {
            output && 
            <Result result={output}></Result>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
