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
          name: "Freecodecamp Frontend Certificate",
          description: "This is a small portfolio that contains demos for various practice projects done while learning.Learnt about state management, memoization, responsive design, optimization, hooks and testing.",
          image: hos,
          previewLink: "https://hospital-coral-nine.vercel.app/",
          tools: 'React, Tailwind',
          githubLink: 'https://github.com/Faith136/hospital',
        },
        {
          name: "Mpesa Intergration sample",
          description: "Used safaricom sdk to implement this payment gateway.If you want to see it click the link below to see the code and the live demonstrations",
          image: mpesa,
          previewLink: "",
          tools: 'Node js,Express,Tailwindcss',
          githubLink: 'https://github.com/Faith136/nodeprac',
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
        <HTMLFlipBook width={600} height={700} showCover="true">
            <Page number={0}>
        <Cover coverImg={coverImgs} title="My Portfolio" subtitle="{Click here to open}" />
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
             <Cover coverImg={EndImg} title="React&Tailwind" subtitle="@2024" />
            </Page>


        </HTMLFlipBook>
    );
})

export default Book;