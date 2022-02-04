import React from 'react';
import coverImage from "../../assets/me/my-image.JPG";

function About() {
  return (
    <section>
      <h1 id="about" style={{ textAlign: "center"}}>This is Me: Kosal Cheykim</h1>
      <div>
      <img src={coverImage} className="my-2" style={{alignItems:"center", width: "20%", marginLeft:"50px" }} alt="cover" />
      <div id="left" style={{float:"right", width:"70%", marginRight:"50px"}}><p>Hi, my name is Kosal Cheykim. I am currently studying full stack development at UC Berkley Extension. I hold a Bachelor of Science degree in Computer Science from Sonoma State University. Being self-employed, I have a strong background in daily management of the family businesses. My customer service skills are exceptional. I am a quick learner and is willing to go the extra mile to ensure customer’s satisfaction as well and handling any misunderstandings. My strong suit is my communication skills. I am a team player, but can handle tasks as an individual.  I have a motto for myself where “I give everything 100% so that I do not live to regret the outcome”. I apply this idea throughout my life. I hope to find a career as a full stack developer and continue to do what I love – coding.</p></div>
      </div>
    </section>
  );
}

export default About;