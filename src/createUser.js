import React from 'react';


function CreateUser() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <lable for="name">User Name : </lable>
                    <input id="name" className="form-control" type="text">
                    </input>
                </div>
                <div className="col-lg-6">
                    <lable for="email">Email : </lable>
                    <input id="email" className="form-control" type="text">
                    </input>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <button className="btn btn-primary">Add User</button>
                </div>

            </div>
        </div>
    );
}

export default CreateUser;