import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-30 bg-gray-100 text-center text-gray-700 border-t border-gray-300 py-6 px-4">
      <h4 className="text-2xl font-bold mb-3">🧠 Brain Tumor Classifier</h4>
      <p className="text-sm font-medium mb-4">
        Empowering early detection through AI-powered MRI scan analysis.
      </p>

      <div className="flex justify-center space-x-6 mb-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
      </div>

      <p className="text-xs text-gray-500 mb-2">
        ⚠️ This tool is for informational purposes only and does not substitute professional medical advice.
      </p>

      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Brain Tumor Classifier. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer