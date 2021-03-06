import React from "react";
import coverImage from "../../assets/images/me/my-image.JPG";

function About() {
  return (
    <section id="about" className="flex-row">
      <h2>Perserverance, Determination, & Focus</h2>
      <h4 id="quote">“You may encounter many defeats, but you must not be defeated. In fact, it may be 
        necessary to encounter the defeats, so you can know who you are, what you can rise from, how 
        you can still come out of it.” <br /> ― Maya Angelou
      </h4>
      <div id="sideByside">
        <div id="me-image">        
          <img id="me" src={coverImage} className="my-2" alt="potrait of Kosal Cheykim"/>
        </div>
        <div id="left">
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