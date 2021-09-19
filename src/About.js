import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://c7.uihere.com/files/255/44/978/avatar-icon-3d-character-icon-vector-material.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Created By:vijayalakshmi
            </p>
            <p>contains details about the user id ,title and body</p>
            <p>in this App you can post your comments,and view your comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;