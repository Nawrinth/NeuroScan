const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

const app = express();
app.use(cors());

const PORT = 5000;

// Multer memory storageu
const upload = multer({ storage: multer.memoryStorage() });

// Upload route → send image to FastAPI
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Convert buffer to form-data for FastAPI
    const formData = new FormData();
    formData.append('file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype
    });

    // Call FastAPI server
    const response = await axios.post(
      'http://localhost:8000/predict',
      formData,
      { headers: formData.getHeaders() }
    );

    // Send prediction back to frontend
    return res.json({
      message: 'Prediction successful',
      result: response.data.prediction,
      class_id: response.data.class_id,
      raw_output: response.data.raw_output
    });

  } catch (error) {
    console.error('Error contacting FastAPI:', error.message);
    return res.status(500).json({ error: 'FastAPI error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
