import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from '../pages/Cover/Cover';
import coverImgs from '../assets/cover.webp'
import FirstPage from '../pages/FirstPage';
import Skills from '../pages/Skills';
import Services from '../pages/Service/Services';
import About from '../pages/About';
import Projects from '../pages/projects/Projects';
import Contac from '../pages/contacts/Contac';
import EndImg from '../assets/last-page.webp';
import Resume from '../pages/Resume';
import AoB from '../pages/AoB';
import resta from "../assets/resta.webp";
import zom from "../assets/zom.webp";
import hos from "../assets/hos.webp";
import mpesa from "../assets/mpesa.webp";
import ecom from "../assets/ecom.webp";
import promp from "../assets/promp.webp";



const Book = React.memo(function Book() {
    const ProjectData = [
        {
          name: "DopBrain",
          description: "A website that suggests activities to boost dopamine levels naturally, helping to enhance motivation, focus, and overall brain functions.Learnt about state management, memoization, responsive design, optimization, hooks and testing.",
          image: hos,
          previewLink: "dop-brain-75ao.vercel.app/",
          tools: 'Next.js, CSS modules, crud operations',
          githubLink: 'https://github.com/Faith136/DopBrain',
        },
        {
          name: "Blog App",
          description: "A full-stack style blog application built with Next.js that allows users to browse posts, view comments, authenticate, and manage cached data. It also includes offline handling and API integration. If you want to see it, click the link below to view the code and live demonstration.",
          image: mpesa,
          previewLink: "",
           tools: "Next.js, React, Redux Toolkit, Redux Saga, Tailwind CSS, DummyJSON",
          githubLink: 'https://github.com/Faith136/Blog-App',
        },
      ];
      const ProjectData2 = [
        {
          name: "Zomato clone",
          description: "Web app replicating the existing zomato app with an added feature like Mpesa intergration.",
          image: zom,
          previewLink: "https://zomato-clone1-dusky.vercel.app/",
          tools: 'React js,CSS,Google auth,Mpesa, Paypal,MongoDB,Node js.',
          githubLink: 'https://github.com/Faith136/Zomato-clone1',
        },
        {
          name: "Restaurant webapp",
          description: "My first react web app developed to help Bwibo restaurant register its online presence so they can get more customers through easily accessible services.",
          image: resta,
          previewLink: "https://bwibs.vercel.app/",
          tools: 'React js,Tailwindcss,Firebase',
          githubLink: 'https://github.com/Faith136/Bwibs',
        },
      ];
      const ProjectData3 = [
        {
          name: "3D RealEstate Web App",
          description: "Complete Responsive webapp in Next js and Tailwind CSS.Its main purpose is provide virtual experience of varios properties to the customers and property management functionalities to the owners.",
          image: promp,
          previewLink: "",
          tools: 'Next js,tailwindcss,Next auth,MongoDB,Node js',
          githubLink: 'https://github.com/Faith136/Promptopia', 
        },
        {
          name: "Ecommerce product Dashboard",
          description: "In this project i learnt ways of implimenting search, filter and sort methods",
          image: ecom,
          previewLink: "https://shoe-hub-psi.vercel.app/",
          tools: 'React js, tailwindcss',
          githubLink: 'https://github.com/Faith136/Shoe-Hub', 
        },
      ];
    return (
        <HTMLFlipBook
  size="stretch"
  minWidth={280}
  maxWidth={1000}
  minHeight={400}
  maxHeight={1533}
  width={550}       // still required as a base/aspect reference
  height={733}
  showCover={true}
  mobileScrollSupport={true}   // important — see below
  usePortrait={true}           // shows single page instead of spread on narrow screens
  className="flipbook"
   //disableFlipByClick={true}
>
            <Page number={0}>
        <Cover coverImg={coverImgs} title="FAITH MECHA's" title2="Portfolio" subtitle="{Click to open/close pages}" />
            </Page>

            <Page number={1}>
            <FirstPage />  
            </Page> 

            <Page number={2}>
            <Skills />  
            </Page>
            <Page number={3}>
            <Services />
            </Page>
            <Page number={4}>
            <About />  
            </Page>
            <Page number={5}>
            <Resume />
            </Page>
            <Page number={6}>
               <Projects ProjectData={ProjectData}/>
            </Page>
            <Page number={7}>
             <Projects ProjectData={ProjectData2}/>
            </Page>
            <Page number={8}>
             <Projects ProjectData={ProjectData3}/>
            </Page>
            <Page number={9}>
             <Contac />
            </Page>
            <Page number={10}>
             <AoB />
            </Page>
            <Page number={11}>
             <Cover coverImg={EndImg} title="My Portfolio" subtitle={`@${new Date().getFullYear()}`} />
            </Page>


        </HTMLFlipBook>
    );
})

export default Book;