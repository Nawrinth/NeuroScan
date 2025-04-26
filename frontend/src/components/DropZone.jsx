import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadImage from '../assets/upload.jpg'

function MyDropZone({onResult}) {
  const [fileName, setFileName] = useState('')
  const [fileContent, setFileContent] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFailure, setShowFailure] = useState(false)
  const [file, setFile] = useState(null)
  const [loading , setLoading] = useState(false);
  const scrollToResult = () => {
    const element = document.getElementById('Results');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }}
  

  const handleUpload = async () => {
    setLoading(true);
    if (!file) {
      setShowFailure(true)
      setTimeout(() => setShowFailure(false), 3000)
      setLoading(false);
      return
    }

    const formData = new FormData()
    formData.append('image', file)

    try {
      const res = await fetch('https://neuroscan-97rn.onrender.com/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      console.log('Success:', data)
      onResult(data.result);
      setShowSuccess(true)
      
      setTimeout(() => setShowSuccess(false), 3000)
      setLoading(false);
      scrollToResult();
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed!')
      setLoading(false);
    }
  }

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      setShowFailure(true)
      setTimeout(() => setShowFailure(false), 3000)
      return
    }

    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('File reading was aborted')
      reader.onerror = () => console.log('File reading failed')
      reader.onload = () => {
        const binaryStr = reader.result
        setFileName(file.name)
        setFileContent(binaryStr)
        setFile(file)
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/bmp': [],
      'image/jpg': [],
      'application/dicom': [], // for .dcm files
    },
  })

  return (
    <div className="w-full flex flex-col items-center">
      {showSuccess && (
        <div className="fixed left-[50%] transform -translate-x-1/2 top-20 text-green-400 shadow-3xl px-6 py-3 rounded-md bg-white   transition-opacity duration-100" data-aos="zoom-in">
          ✔ File uploaded successfully
        </div>
      )}
      {showFailure && (
        <div className="fixed left-[50%] transform -translate-x-1/2 top-20 text-red-600 shadow-lg px-6 py-3 rounded-md bg-white transition-opacity duration-300"
        data-aos="zoom-in">
          ✖ Unsupported file type or upload failed!
        </div>
      )}

      <div
        {...getRootProps()}
        className="w-[70%] mt-6 h-100 flex flex-col items-center justify-center p-6 border-4 border-dashed border-gray-600 rounded-md text-center cursor-pointer transition-all duration-400 hover:border-black"
      >
        <input {...getInputProps()} />
        <img className="h-50" src={uploadImage} alt="" draggable="false" />
        <p className="text-gray-500 font-medium text-lg">
          Drag and drop the file or{' '}
          <span className="text-blue-500 hover:text-blue-600">Browse</span>
        </p>
        {fileName && (
          <p className="mt-4 text-gray-700">
            <strong>File Selected: </strong>
            {fileName}
          </p>
        )}
      </div>
      <div className='flex flex-row w-[70%] text-left font-light mt-1 ml-4 text-gray-600'>
        <p>File Supported: .jpg, .jpeg, .png</p>
      </div>

      <div className={"flex flex-row w-[70%] justify-end" + (loading ? "opacity-50" : "opacity-100")}>
        <button
          onClick={handleUpload}
          className={"px-6 cursor-pointer mt-8 py-3 w-40 h-13 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800  transition-all duration-500" + (loading ? "opacity-50 pointer-events-none" : "opacity-100") }
        >
          {loading ?
            <div className="flex justify-center items-center">
              <div className="w-5 h-5 border-3 border-gray-200 border-t-transparent rounded-full animate-spin" />
            </div>:"Upload MRI"
          }
        </button>
      </div>
    </div>
  )
}

export default MyDropZone
