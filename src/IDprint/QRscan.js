import React, { useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';

const QrScan= ()=> {
  const [qrText, setQrText] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = async (event) => {
    setError('');
    setQrText('');
    const file = event.target.files[0];
    if (!file) return;

    const codeReader = new BrowserQRCodeReader();

    try {
      const result = await codeReader.decodeFromImage(file);
      setQrText(result.getText()); // Set the extracted text from the QR code
    } catch (err) {
      setError('QR code not found or unreadable');
      console.log(err)
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>QR Code Scanner from Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {qrText && <p>QR Code Text: {qrText}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default QrScan;
