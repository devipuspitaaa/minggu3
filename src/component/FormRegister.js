import React from 'react'

const Formregister = () => {
    return (
        <div style={{ marginTop: "100px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 class="text-center p-2">Form Register</h1>
                        <div className="card p-4">
                            <div className="card-body">
                                <h3 class="card-title text-center">Tugas Pertemuan Ketiga</h3>
                                <div className='form-group p-2'>
                                    <label>Nama</label>
                                    <input placeholder=" Masukkan nama" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Username</label>
                                    <input placeholder=" Masukkan username" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Email</label>
                                    <input placeholder=" Masukkan email" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Password</label>
                                    <input type="password" placeholder="Masukkan password" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Confirm Password</label>
                                    <input type="re-password" placeholder="Masukkan re-password" className="form-control"></input>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                        <label class="form-check-label" for="invalidCheck">
                                            Remember Me
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#" class="btn btn-success">Register</a>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#" class="btn btn-danger">Back to Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formregister;