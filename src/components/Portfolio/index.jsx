import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
import Cube from "../Cube"

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'firebase-course'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    {/* github url */}
                                    {/* linkedin url */}
                                    {/*  */}
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.github_url)}
                                    ><FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                  /></button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.linkedIn_url)}
                                    ><FontAwesomeIcon
                                    icon={faLinkedin}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                  /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className=" portfolio-page container">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                
                <div>{renderPortfolio(portfolio)}</div>
                <div className="spinner-layout"><Cube/></div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;