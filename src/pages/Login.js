import React,{useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const cekLogin = async (e) => {
        // const csrfToken = await ambilCsrf
        e.preventDefault();
        try{
            const response = await fetch('http://127.0.0.1:8000/api/login',{
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password}),
                credentials:'include'
            });
            if(response.ok)
            {   
                const data = await response.json();
                sessionStorage.setItem('token',data.access_token);
                window.location.href="/home";

            }
        }catch (err){
            console.log(err);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="text-start">Login</h3>
                                {}
                                <form className="row mt-4">
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Masukan Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Masukan Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={cekLogin}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

