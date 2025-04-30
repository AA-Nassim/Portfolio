import React from 'react';


const ButtonIcon = (props) => {

    const handleClick = () => {
        window.open(props.link)
    }

    return (
        <button className={`w-14 h-14 ${props.invert ? "invert" : ""}`} onClick={handleClick}>
            <img src={props.icon}></img>
        </button>
    )
}


const Footer = () => {
    return ( 
        <section className='h-auto w-full'>
            <footer className='w-full h-full relative'>
                
                <img src='./assets/FooterAnimation.gif' className='w-full h-full -z-[5] absolute bottom-0  opacity-[0.25]'></img>

                <div className='h-full w-full 
                c-space md:pt-[10%] sm:pt-[20%] pt-[30%] 
                flex flex-col '> 
                    
                    <p className='font-generalsans text-center font-black text-white
                    text-3xl'>
                        Looking forward to working with you ! 
                    </p>
                    
                    <p className='pt-5
                    font-generalsans text-center  text-white
                    text-2xl'>
                        Don't hesitate to reach out. 
                    </p>
                    
                    <div className='pt-10 pb-5 flex justify-center gap-10'>
                        <ButtonIcon icon='./assets/LogoMail.png' link='mailto:aa.nassim.ddr@gmail.com' invert/>
                        <ButtonIcon icon='./assets/LogoLinkedIn.png' link='https://www.linkedin.com/in/nassim-ahmed-ali-896392220' invert/>
                        <ButtonIcon icon='./assets/LogoGithub.png' link='https://www.github.com/AA-Nassim' invert/>
                    </div>

                    <hr className=" self-center w-[50%] h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

                    <p className='py-5 text-white opacity-[.7] text-center text-sm'>
                        This Website was made by me. You can find the source code on my Github. 
                        <br />
                        Special thanks to Silvercrow101 and Alexa Kruckenberg for the 3D models. 
                    </p>
                </div>

            </footer>          
        </section>
        
     );
}
 
export default Footer;