import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import ServiceApi from '../api/ServiceApi';

const Home = () => {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [data, setData] = useState(null);
    const [qrCode, setQrCode] = useState(null);
    const [qrVisible, setQrVisible] = useState(false);
    const [error, setError] = useState(null); // State untuk menyimpan error

    const fetchQrCode = () => {
        try {
            const {data,error} = ServiceApi('http://localhost:3001/get-qr');
            if (error) {
                throw new Error('Failed to fetch QR Code: ' + error);
            }
            setQrCode(data.qr);
            setQrVisible(true);
            setError(null); // Reset error jika berhdasil
        } catch (err) {
            setError(err.message); // Simpan pesan error
            console.error(err);
        }
    };

    const cekData = async () => {
        const token = sessionStorage.getItem('token');
        try {
            const responses = await fetch('http://localhost:8000/api/cek-data', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    '_method': 'POST'
                }
            });

            if (!responses.ok) {
                throw new Error('Request failed with status ' + responses.status);
            }

            const data = await responses.json();
            setData(data);
            setError(null); // Reset error jika berhasil
        } catch (err) {
            setError(err.message); // Simpan pesan error
            console.error('Error:', err);
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
            setError(null); // Reset error jika berhasil
        } catch (err) {
            setError(err.message); // Simpan pesan error
            console.error(err);
        }
    };

    return (
        <div>
            <div className="container" style={{paddingTop:'85px'}}>
                <h2>WhatsApp Message Sender</h2>

                {/* Tombol untuk memunculkan QR code */}
                <button className="btn btn-primary mb-3" onClick={fetchQrCode}>
                    Munculkan QR Code
                </button>

                <button className='btn btn-success mb-3' onClick={cekData}>Cek Data</button>

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

                {data && (
                    <div className="mt-3">
                        <h5>Data:</h5>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}

                {error && (
                    <div className="mt-3 text-danger">
                        <h5>Error:</h5>
                        <pre>{error}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
