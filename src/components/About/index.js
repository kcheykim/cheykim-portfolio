import React from "react";
import coverImage from "../../assets/images/me/my-image.JPG";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <h3 id="quote-header">Perserverance, Determination, & Focus</h3>
      <h4 id="quote">“You may encounter many defeats, but you must not be defeated. In fact, it may be 
        necessary to encounter the defeats, so you can know who you are, what you can rise from, how 
        you can still come out of it.” <br /> ― Maya Angelou
      </h4>
      <div>
        <img src={coverImage} className="my-2" style={{ alignItems: "center", width: "10%", marginLeft: "5%" }} alt="cover" />
        <div id="left" style={{ float: "right", width: "70%", marginRight: "10%" }}>
          <p>Hi, my name is Kosal Cheykim. I am currently studying Full Stack Development at UC Berkley Extension.
            I hold both an Associate Degree of Art and Science from Santa Rosa Junior College.
            I also hold a Bachelor of Science degree in Computer Science with Mathematic Minor from Sonoma State University.
            Being self-employed, I have a strong background in daily management of the family business.
            My customer service skills are exceptional. I am a quick learner and is willing to go the extra mile
            to ensure customer’s satisfaction as well as resolving issues. My strong suit is my communication skills.
            I am a team player, but I have no problem tackling projects on my own.  I have a motto for myself where
            “I will give everything 100% so when I look into the mirror, I can be proud of the face that is looking back at me."
            I apply this idea throughout my life and this is my reason to return back to my passion for coding.
            I hope to find a career as a full stack developer and continue coding.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;