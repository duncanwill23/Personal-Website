import React from "react";
import './contact.css';

export default function Contact() {
    return(
        <div className="contact">
            <h1 className="contactHeader">
                Contact Me
            </h1>
            <p className="contactText">
                Email: wjduncan@iu.edu
            </p>
            <p className="contactText">
                Phone: (708) 308 - 0347
            </p>
            <a className="contactText" 
            href="https://www.linkedin.com/in/william-duncan23/"
            target="_blank"
            >
                LinkedIn
            </a>
        </div>
    )
}