import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import FakeNavBar from "./../FakeNavBar/FakeNavBar";

export default function Profile() {
  return (
    <>
      <div className="col-md-9 g-4">
        <div className="row">
          <div className="col-md-12 ">
            <FakeNavBar className="position-fixed top-0"></FakeNavBar>
            <div className="card shadow  ">
              <div className="card-body">
                {/* <h5 className='card-title text-center'>Profile</h5> */}
                <div className="text-center">
                  <img
                    src="../images/avatar-04.png"
                    alt="Profile img .... "
                    className="rounded-circle text-center m-3"
                  />
                </div>
                <hr />
                <p className="p-2">
                  <strong>Name:</strong> John Doe
                </p>
                <hr />
                <p className="p-2">
                  <strong>Email:</strong> johndoe@example.com
                </p>
                <hr />
                <p className="p-2">
                  <strong>Phone:</strong> (123) 456-7890
                </p>
                <hr />
                <p className="p-2">
                  <strong>Date:</strong> February 22, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
