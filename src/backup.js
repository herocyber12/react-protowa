import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCode from 'qrcode.react';

function App() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [data, setData] = useState(null);
    const [qrCode, setQrCode] = useState(null);  // State untuk menyimpan QR code
    const [qrVisible, setQrVisible] = useState(false); // State untuk kontrol visibilitas QR code

    // Fungsi untuk memfetch QR code saat tombol ditekan
    const fetchQrCode = async () => {
        try {
            const res = await fetch('http://localhost:3001/get-qr');
            const data = await res.json();
            setQrCode(data.qr);
            setQrVisible(true); // Menampilkan QR code setelah data diterima
        } catch (err) {
            console.error(err);
        }
    };

    const sendMessage = async () => {
        try {
            const res = await fetch('http://localhost:3001/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ number, message })
            });
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-5">
            <h2>WhatsApp Message Sender</h2>

            {/* Tombol untuk memunculkan QR code */}
            <button className="btn btn-primary mb-3" onClick={fetchQrCode}>
                Munculkan QR Code
            </button>

            {/* Menampilkan QR Code hanya jika QR code tersedia dan qrVisible adalah true */}
            {qrCode && qrVisible && (
                <div className="mb-3">
                    <h5>Scan QR Code:</h5>
                    <QRCode value={qrCode} size={200} />
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">Nomor Tujuan</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nomor tujuan"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea
                    className="form-control"
                    placeholder="Masukkan pesan"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={sendMessage}>Kirim Pesan</button>
            {response && (
                <div className="mt-3">
                    <h5>Response:</h5>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
