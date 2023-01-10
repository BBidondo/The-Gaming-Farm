import React from 'react';
import "../About/about.css"

const team = [
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image: "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image:"https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
    {
        id: 1,
        name: "Name Lastname",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        image:"https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Free-PNG.png",
        linkedin: "www.linkedin.com",
        github: "www.github.com"
    },
]

export default function About(){
  return(
    <div className="cont">
      <h1>About</h1>
    <p>The Gaming Farm nace durante el proceso de proyecto final en el bootcamp de <a href="https://soyhenry.com" ><p>SoyHenry</p></a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    <h1>Developers</h1>
    <div className="cards">
    {
      team.map(el =>{
        return(
        <div>
          <div className="cardimomo">
            <img src={el.image} width="200" height="200" alt="profile-picture"/>
            <div className="card-body">
              <h5 >{el.name}</h5>
              <p >{el.description}</p>
              <div>
                <a href={el.linkedin}><img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" width="50" height="50" alt="linkedin" target="_blank"/></a>
                <a href={el.github}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" width="50" height="50" alt="github" target="_blank" /></a>
              </div>
            </div>
          </div>
        </div>
        )
      })
    }
    </div>
    </div>
  )
}