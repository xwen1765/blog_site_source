import React from "react";
import Project from "./Project";
import Translate from "@docusaurus/Translate";
const Projects = () => {
  const works = [
    {
      stack: ["Learning", "Attention", "Control"],
      description:
        "Sequence learning in the human and animal brain involves the ability to learn, pay attention, and control behavior based on the order of events or actions. This type of learning is important for a wide range of behaviors, such as language acquisition, motor skills, and navigation. Attention plays a critical role in sequence learning by selectively attending to the relevant aspects of the sequence, while inhibiting distractions. Control processes, such as inhibitory control, working memory, and cognitive flexibility, are necessary to coordinate and adjust behavior based on the sequence requirements. The mechanisms that underlie this type of learning can shed light on how the brain processes and stores information, how attention and control processes contribute to learning, and how learning can be disrupted or enhanced by various factors.        ",
      title: "Sequence Learning",
      url: "docs/SL",
      image: "img/website_imgs.001.png",
      index: 0,
    },

    {
      stack: ["Stimuli", "Cognitive Science"],
      description:
        "Quaddle2.0 is an open-source software program designed to help researchers in the field of cognitive science create and manipulate a wide range of stimuli for use in their studies. Developed using Blender, the popular 3D modeling software, Quaddle2.0 allows researchers to create complex, multi-dimensional stimuli that can be easily exported to a variety of file formats, including PNG and FBX. The program is designed to be intuitive and user-friendly, making it accessible even to researchers who may not have extensive experience with 3D modeling software. The program includes a wide range of features that allow users to manipulate and customize their stimuli, including the ability to adjust the shape, size, and color of objects, as well as the ability to add textures and other visual effects.  The program can be used with a variety of other research tools, including Unity, Psychopy, and Psychtoolbox, making it easy to integrate into existing research workflows. With over 1.5 billion potential stimuli variations, researchers can use Quaddle2.0 to create a wide range of different stimuli for use in their studies, including visual, auditory, and tactile stimuli. ",
      title: "Quaddle2.0: A 3D Multi-Dimentional Stimuli",
      github: "https://github.com/HaochenQ/React-Furniture-Store",
      url: "docs/SL",
      image: "img/website_imgs.002.png",
      index: 1,
    },
    {
      stack: ["Consciousness", "ToC"],
      description:
        "The Integrated Information Theory (IIT) is a leading theory of consciousness that posits that consciousness arises from the integration of information across multiple regions of the brain. According to IIT, the more information that is integrated, the higher the level of consciousness. This theory suggests that consciousness is not simply the result of brain activity, but rather the result of the way information is processed and integrated within the brain.  IT makes specific predictions about the neural mechanisms underlying consciousness and can be tested through experiments and neuroimaging studies. It has been instrumental in advancing our understanding of the nature of consciousness and the brain. It has provided a framework for thinking about the relationship between brain activity and conscious experience, and has inspired new avenues of research in this field.",
      title: "Investigating Integrated Information Theory (IIT)",
      github: "https://github.com/HaochenQ/DoneWithIt",
      url: "docs/IIT",
      image: "img/website_imgs.003.png",
      index: 2,
    },
    {
      stack: ["AI", "ChatGPT", "Neuroscience"],
      description:
        "",
      title: "Blog: How ChatGPT & other AI toolboxes can facilitate neuroscience research",
      url: "docs/IIT",
      image: "img/website_imgs.004.png",
      index: 3,
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
