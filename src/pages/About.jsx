import React from "react";
import "../styles/About.css";
import libraryPhoto from "../assets/libraryPhoto.jpg";
function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about_content grid">
          <div className="about_img">
            <img src={libraryPhoto} alt="" />
          </div>
          <div className="about_text">
            <h2 className="about_title fs_26 ls_1">About Us</h2>
            <p className="fs_17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </p>
            <p className="fs_17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
