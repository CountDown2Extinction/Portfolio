import React from 'react';
import './experience.css';
// import {GrStatusPlaceholder} from 'react-icons/gr';
import {AiFillHtml5} from 'react-icons/ai';
import {SiJavascript, SiCss3, SiRedux, SiTailwindcss, SiBootstrap, SiNodedotjs, SiNextdotjs,SiPostgresql} from 'react-icons/si';
import {FaServer} from 'react-icons/fa';

const Experience = () => {

  let frontend = [
    { 
      icon: AiFillHtml5,
      name:'HTML5',
      experience: "Intermediate"
    },
    { 
      icon: SiJavascript,
      name:'JavaScript ES6',
      experience: "Experienced"
    },
    { 
      icon: SiCss3,
      name:'CSS 3',
      experience: "Intermediate"
    },
    { 
      icon: SiRedux,
      name:'Redux',
      experience: "Basic"
    },
    { 
      icon: SiTailwindcss,
      name:'Tailwind',
      experience: "Basic"
    },
    { 
      icon: SiBootstrap,
      name:'Bootstrap',
      experience: "Basic"
    }
  ];

  const ListFrontendSkills = () => frontend.map((skill, index) => {
    return(
      <>
        <article key={index} className='experience_details'>
          <skill.icon className='experience_details_icon'/>
          <div>
            <h4>{skill.name}</h4>
            <small className='text-light'>{skill.experience}</small>
          </div>
        </article>
      </>
    )
  });
////////////////////////////////// end of frontend skills ////////////////////////////////////
  let BackEnd = [
    { 
      icon: SiNodedotjs,
      name:'Node.js',
      experience: "Intermediate"
    },
    { 
      icon: SiNextdotjs,
      name:'Next.js',
      experience: "Intermediate"
    },
    { 
      icon: SiNodedotjs,
      name:'Express.js',
      experience: "Intermediate"
    },
    { 
      icon: SiPostgresql,
      name:'PostgreSQL',
      experience: "Intermediate"
    },
    { 
      icon: FaServer,
      name:'RestFull Api Dev',
      experience: "Intermediate"
    }
  ];

  const ListBackEndSkills = () => BackEnd.map((skill, index) => {
    return(
      <>
        <article key={index} className='experience_details'>
          <skill.icon className='experience_details_icon'/>
          <div>
            <h4>{skill.name}</h4>
            <small className='text-light'>{skill.experience}</small>
          </div>

        </article>
      </>
    )
  });

////////////////////////////////// end of back end skills ////////////////////////////////////

let DeployingandTesting = [
  { 
    icon: AiFillHtml5,
    name:'Jest',
    experience: "Basic"
  },
  { 
    icon: SiJavascript,
    name:'Lighthouse',
    experience: "Basic"
  },
  { 
    icon: SiCss3,
    name:'Nodemon',
    experience: "Intermediate"
  },
  { 
    icon: SiRedux,
    name:'ThunderClient',
    experience: "Intermediate"
  },
  { 
    icon: SiTailwindcss,
    name:'Render',
    experience: "Basic"
  },
  { 
    icon: SiBootstrap,
    name:'Heroku',
    experience: "Basic"
  }
];

const ListTestingAndDeploying = () => DeployingandTesting.map((skill, index) => {
  return(
    <>
      <article  className='experience_details'>
        <skill.icon className='experience_details_icon'/>
        <div>
          <h4 key={index}>{skill.name}</h4>
          <small className='text-light'>{skill.experience}</small>
        </div>

      </article>
    </>
  )
});
////////////////////////////////// end of testing and deploying skills ////////////////////////////////////


let DevTools = [
  { 
    icon: AiFillHtml5,
    name:'Git',
    experience: "Intermediate"
  },
  { 
    icon: SiJavascript,
    name:'Vs Code',
    experience: "Intermediate"
  },
  { 
    icon: SiCss3,
    name:'Agile Methodology',
    experience: "Experienced"
  },
  { 
    icon: SiRedux,
    name:'Scrum Methodology',
    experience: "Experienced"
  },
];

const ListDevTools = () => DevTools.map((skill, index) => {
  return(
    <>
      <article key={index} className='experience_details'>
        <skill.icon className='experience_details_icon'/>
        <div>
          <h4>{skill.name}</h4>
          <small className='text-light'>{skill.experience}</small>
        </div>

      </article>
    </>
  )
});
  return (
    <section id='experience'>
      <h5 className='skills'>What Skills I have</h5>
      <h2 className='title'>My Experience</h2>

      <div className='containter experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <ListFrontendSkills />
          </div>
        </div>
              {/* end of frontend skills */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              <ListBackEndSkills />
            </div>
        </div>
              {/* end of backend skills */}
        <div className="experience_testing_deploying">
          <h3>Testing and Deploying</h3>
            <div className="experience_content">
              <ListTestingAndDeploying />
            </div>
        </div>
              {/* end of testing and deploying skills */}
              <div className="experience_testing_deploying">
          <h3>Devoloper Tools</h3>
            <div className="experience_content">
              <ListDevTools />
            </div>
        </div>
      </div>

    </section>
  )
}

export default Experience