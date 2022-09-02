import QRcode from 'qrcode'
import { useState } from 'react'


function App() {
  const [url, setURL] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRcode = () =>{
    QRcode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#000000ff',
        light: '#ffffffff'
      }
    }, (err, url) =>{
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="app">
      <h1>GENERATE QR</h1>
      <input 
      type="text"
      placeholder="e.g. https://facebook.com" 
      value={url}
      onChange={(evt) => setURL(evt.target.value)}/>
      <button onClick={GenerateQRcode}>Generate</button>

      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App
