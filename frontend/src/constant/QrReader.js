import React ,{useRef} from 'react'
// import { Html5Qrcode } from "html5-qrcode";
import {Html5Qrcode } from "html5-qrcode"

const QrReader = ({setName}) => {
    // const [qrCodeResult, setQrCodeResult] = useState("");
    // const [error, setError] = useState("");
    const qrCodeRegionId = "qr-reader";
    const scannerRef = useRef(null);
    
    console.log('started')
    const handleScan = () => {
      if (scannerRef.current) {
          const html5QrCode = new Html5Qrcode(qrCodeRegionId);
          console.log(html5QrCode);
  
          const startQrScanner = async () => {
              try {
                  await html5QrCode.start(
                      { facingMode: "environment" },
                      {
                          fps: 10,
                          qrbox: { width: 250, height: 250 },
                      },
                      async (decodedText) => {
                          setName(decodedText);
                          console.log("Scanned:", decodedText);
  
                          // Pause for 2 seconds before allowing the next scan
                          html5QrCode.pause();
                          setTimeout(() => {
                              html5QrCode.resume();
                          }, 2000);
                      }
                  );
              } catch (err) {
                  console.log(err);
              } finally {
                  console.log("Scan started");
              }
          };
  
          (() => startQrScanner())();
      }
  };
  
        

  
  return (
    <div>
      <h1>QR Code Scanner</h1>
      <button onClick={handleScan}>scan</button>
      <div ref={scannerRef} id={qrCodeRegionId} style={{ width: "300px", height: "300px" ,border: "2px solid black"}} />
        {/* <div>
          <h2>Scanned Result:</h2>
          <p>{qrCodeResult}</p>
        </div>
      
      
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div> */}
      
    </div>
  )
}

export default QrReader