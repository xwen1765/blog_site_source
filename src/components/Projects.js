import React from "react";
import Project from "./Project";
import Translate from "@docusaurus/Translate";
const Projects = () => {
  const works = [
    {
      stack: ["Learning", "Attention", "Control"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate commodo arcu, laoreet viverra lorem imperdiet et. Phasellus aliquam ultricies dui, non suscipit metus aliquet in. Quisque varius lorem porta nulla rhoncus, gravida mollis mi interdum. Suspendisse congue lectus vitae nisl consectetur, sit amet placerat nisl ullamcorper. Praesent eget efficitur ex. Nullam consequat nisl non enim hendrerit, in bibendum sapien dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vitae sapien quis lorem lacinia bibendum. Pellentesque ut blandit augue. Ut sit amet ante eros. Aenean ut urna vitae libero placerat ornare. Praesent consequat eu nulla accumsan hendrerit. Fusce hendrerit orci leo, a rutrum metus tincidunt sed.",
      title: "Sequence Learning",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "https://cozyspace.haochenqi.com/",
      image: "img/website_imgs.001.png",
      index: 0,
    },

    {
      stack: ["Stimuli", "Cognitive Science"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate commodo arcu, laoreet viverra lorem imperdiet et. Phasellus aliquam ultricies dui, non suscipit metus aliquet in. Quisque varius lorem porta nulla rhoncus, gravida mollis mi interdum. Suspendisse congue lectus vitae nisl consectetur, sit amet placerat nisl ullamcorper. Praesent eget efficitur ex. Nullam consequat nisl non enim hendrerit, in bibendum sapien dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vitae sapien quis lorem lacinia bibendum. Pellentesque ut blandit augue. Ut sit amet ante eros. Aenean ut urna vitae libero placerat ornare. Praesent consequat eu nulla accumsan hendrerit. Fusce hendrerit orci leo, a rutrum metus tincidunt sed.",
      title: "Quaddle2.0: A 3D Multi-Dimentional Stimuli",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "https://recipe-app.haochenq.vercel.app/",
      image: "img/website_imgs.002.png",
      index: 1,
    },
    {
      stack: ["Consciousness", "ToC"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate commodo arcu, laoreet viverra lorem imperdiet et. Phasellus aliquam ultricies dui, non suscipit metus aliquet in. Quisque varius lorem porta nulla rhoncus, gravida mollis mi interdum. Suspendisse congue lectus vitae nisl consectetur, sit amet placerat nisl ullamcorper. Praesent eget efficitur ex. Nullam consequat nisl non enim hendrerit, in bibendum sapien dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vitae sapien quis lorem lacinia bibendum. Pellentesque ut blandit augue. Ut sit amet ante eros. Aenean ut urna vitae libero placerat ornare. Praesent consequat eu nulla accumsan hendrerit. Fusce hendrerit orci leo, a rutrum metus tincidunt sed.",
      title: "Investigating Integrated Information Theory (IIT)",
      github: "https://github.com/HaochenQ/DoneWithIt",
      url: "https://expo.io/@haochen/projects/DoneWithIt",
      image: "img/website_imgs.003.png",
      index: 2,
    },
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">
        <Translate>Recent Projects</Translate>
      </h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
