import React from 'react'
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

const Links = () => {

   const links = [
     {
       id: 1,
       source: github,
       title : 'github',
       href : 'https://github.com/bsampath000',
     },
     {
       id: 2,
       source: linkedin,
       title: 'linkedin',
       href: 'https://www.linkedin.com/in/sampath-kumar-bb7492195'
     },
     {
       id: 3,
       source: email,
       title: 'email',
       href: 'bsampathkumar0507@gmail.com' 
     },
   ];

    return (
        <div className="links-container">
         {    links.map( (link) => {
               if(link.title === "email") {
                    return   <a key={link.id} href={`mailto:${link.href}`}>
                                <img src={link.source} alt={link.title}/>
                            </a>;
               } else {
                    return   <a key={link.id} href={link.href}>
                                <img src={link.source} alt={link.title}/>
                            </a>;
               }
         }
            )
         }
        </div>
    )
}

export default Links
