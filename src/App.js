import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [scanResult, setScanResult] = useState(null);
  
  useEffect(() => {

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        height: 500,
        width: 500
      },
      fps: 5,
    });

    const onSucces = (result) => {
      console.log(result);
      setScanResult(result);
      setTimeout(() => scanner.clear(), 1000); // Detener el escáner 1 segundo después
    };
    
  
    const onError = (err) => {
      // console.log('error :S');
      // console.warn(err);
    }

    scanner.render(onSucces, onError);
  
    
  
  }, []);
  
  return (
    <div className="App">
      <h1>QR Code Scanning in React</h1>
      {scanResult ? <p>{JSON.stringify(scanResult)}</p> : <div id="reader"></div>}
    </div>
  );
}

export default App;
