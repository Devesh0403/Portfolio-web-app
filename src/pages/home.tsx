import React, { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Skills from "../components/Skills"
import { IoIosUndo } from "react-icons/io";



import "../pages/home.css"



 
const Home=()=>{

    const [page, setPage] = useState("home");

    function changePage(newPage){
        setPage(newPage);


    }
    const Services=[{
        title:"I focus heavily on UI/UX. I like to create visually appealing web apps that aligns with the brand goals and strategies",
        svg:"https://res.cloudinary.com/dqgrwjod2/image/upload/v1727121103/design_wqxdks.png",
        
    },{
        title:"I can help improve your engagement, through web apps that blend functionality with aesthetic appeal.",
        svg:'https://res.cloudinary.com/dqgrwjod2/image/upload/v1727121102/social-media_uryxmk.png',
        
    },{
        title:"I am actively seeking remote work and freelance opportunities to collaborate on innovative projects.",
        svg:'https://res.cloudinary.com/dqgrwjod2/image/upload/v1727161510/Task-bro_t8qr4t.png',
        
    }]
    



    return(
        <div className="bg-about">
            <a href="/"><div className="text-5xl inline-block m-[2rem] "><IoIosUndo/></div></a>

        


        
        <div className="flex flex-col  ">

            <div className=" flex md:flex-row flex-col-reverse   m-auto  justify-center gap-[3rem] items-center w-screen h-[75vh]   bg-home     ">
                <div className="text-center mr-[1rem]">
                <h2 className=" font-rubik text-xl">Hey! I'm</h2>
                <h1 className="font-rubik text-5xl md:text-7xl"> Devesh</h1>
                <h2 className="font-doodle text-2xl   ">Full Stack Developer</h2>
                

            </div>

            <div className="">
                <img src="https://res.cloudinary.com/dqgrwjod2/image/upload/v1727121102/photo_lwnqnj.jpg" alt="your"  className=" rounded-2xl w-[300px] h-[300px] border"/>
                <div className="mt-[2rem] flex flex-row justify-center gap-[2rem] text-4xl">

                <a href=""><FaLinkedin/></a>
                <a href="https://github.com/Devesh0403"><FaGithub/></a>
                <a href="https://x.com/Tuli2Tuli"><FaXTwitter/></a>
                <a href="https://medium.com/@deveshtuli02"><FaMediumM/></a>
                </div>



            </div>
            
            

        </div>

        <div>
</div>


        <Skills/>
    <h1 className=" mt-[5rem] font-bold font-rubik text-4xl inline-block m-auto">Services</h1>
   <div className="flex flex-col md:flex-row w-[60%] gap-[5rem] m-auto mt-[2rem]">

  {Services.map((service, index) => {
      return (
          <div key={index} className=" flex flex-col   gap-[2rem] md:gap-[3rem] items-center m-auto font-bold font-doodle">
        
          <img src={service.svg} className="h-[200px] w-[200px] " alt="" />
        <h1 className="font-bold text-center w-[300px]">{service.title}</h1>
        
      </div>
    );
})}
</div>
        </div>    
        </div>
    )

}
export default Home;