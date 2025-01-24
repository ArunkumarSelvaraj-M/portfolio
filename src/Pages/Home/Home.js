import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Nav from "../../Components/Nav/Nav";
import Card from "../../Components/Card/Card";
import Modal from "../../Components/Modal/Modal";
import Skills from "../../Components/Skills/Skills";
// about me images
import Arun from "../../Assets/Images/ArunkumarSelvaraj.jpg";
import Cicd from "../../Assets/Images/cicd.png"
import CI from "../../Assets/Images/cloud-infrastructure.png"
import Cloud from "../../Assets/Images/cloud.png"
import K8s from "../../Assets/Images/kubernetes.png"
import Monitoring from "../../Assets/Images/monitoring.png"
import Automation from "../../Assets/Images/automation.png"
// work images
import Autocloud from "../../Assets/Images/autocloud.png";
import Nalanbatters from "../../Assets/Images/nalabatters.png";
import Tiktik from "../../Assets/Images/tiktik.png";
import Airbuzz from "../../Assets/Images/Airbuzz.png";
import Tekfilo from "../../Assets/Images/tekfilo.png";
// blog images
import Network from "../../Assets/Images/network.png";
import "./Home.css"

function Home() {

    /* HOME */

    const words = ['CI/CD Automation', 'Cloud Infrastructure', 'AWS & GCP Expertise'];
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    function type() {
        // Current word
        const currentWord = words[wordIndex];
        // Determine the function to be performed
        const shouldDelete = isDeleting ? 1 : -1;
        // Create the new text
        setText(current => currentWord.substring(0, current.length - shouldDelete));
        // Determine if this word is complete
        if (!isDeleting && text === currentWord) {
            // Make a pause at the end
            setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            // Move to the next word
            setWordIndex((current) => (current + 1) % words.length);
        }
    }
    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? 100 : 200);
        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
        // Add dependencies to the dependency array
    }, [wordIndex, isDeleting, text]);

    /* DOWNLOAD CV */

    const onButtonClick = () => {
        const pdfUrl = "/ArunkumarSelvaraj.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ArunkumarSelvaraj.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    /* WORK CARD DATA */

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const workData = [
        {
            image: Autocloud,
            heading: "AutoCloud",
            paragraph: "This is a sample description for Card 1."
        },
        {
            image: Nalanbatters,
            heading: "Nalan Batters",
            paragraph: "This is a sample description for Card 2."
        },
        {
            image: Tiktik,
            heading: "Tik Tik",
            paragraph: "This is a sample description for Card 3."
        },
        {
            image: Airbuzz,
            heading: "Airbuzz",
            paragraph: "This is a sample description for Card 4."
        },
        {
            image: Tekfilo,
            heading: "Tekfilo",
            paragraph: "This is a sample description for Card 5."
        },
        {
            image: "https://via.placeholder.com/250x150",
            heading: "Labely",
            paragraph: "This is a sample description for Card 5."
        },
        {
            image: "https://via.placeholder.com/250x150",
            heading: "Jenkins (SAAS)",
            paragraph: "This is a sample description for Card 5."
        },
    ];

    const openModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    //   BLOG CARD

    const blogData = [
        {
            image: Network,
            heading: "Networking in DevOps",
            paragraph: "Networking is essential in DevOps for enabling communication between applications, services, and infrastructure. A strong understanding of networking helps in deploying secure and high-performing applications.",
            link: "/network"
        },
        {
            image: Network,
            heading: "Networking in DevOps",
            paragraph: "Networking is essential in DevOps for enabling communication between applications, services, and infrastructure. A strong understanding of networking helps in deploying secure and high-performing applications.",
            link: "/network"
        },
        {
            image: Network,
            heading: "Networking in DevOps",
            paragraph: "Networking is essential in DevOps for enabling communication between applications, services, and infrastructure. A strong understanding of networking helps in deploying secure and high-performing applications.",
            link: "/network"
        },
        {
            image: Network,
            heading: "Networking in DevOps",
            paragraph: "Networking is essential in DevOps for enabling communication between applications, services, and infrastructure. A strong understanding of networking helps in deploying secure and high-performing applications.",
            link: "/network"
        },
        {
            image: Network,
            heading: "Networking in DevOps",
            paragraph: "Networking is essential in DevOps for enabling communication between applications, services, and infrastructure. A strong understanding of networking helps in deploying secure and high-performing applications.",
            link: "/network"
        },
    ]



    return (
        <>
            <main>
                <Nav />
                <section className='home' id='home'>
                    <article>
                        <h2>Hi, I'M A DevOps Engineer</h2>

                        <div className='text'>
                            <h1>{text}</h1>
                        </div>

                        <p>based in Tamilnadu, India.</p>
                        <div className='anhor'>
                            <a href='#blogs'>View My Work</a>
                        </div>

                    </article>
                    <article className='circular--portrait'> <img src={Arun} alt='Arunkumar' /></article>
                </section>

                <section className='aboutMe' id="aboutMe">
                    <p className='head'><span className='headSpan'>About Me</span></p>
                    <h2 className='header'>Know Me More</h2>
                    <article className='summary'>

                        <p className='cont'><p>Hi, I'M <span>Arunkumar Selvaraj</span></p>I am a DevOps Engineer with 3+ years of experience in automating, optimizing, and securing cloud-based infrastructure. My expertise lies in CI/CD pipelines, containerization, orchestration, infrastructure as code (IaC), and cloud platforms like AWS and GCP. I have a strong background in implementing scalable and resilient architectures, ensuring high availability, and improving system reliability. Passionate about streamlining development workflows, I thrive on bridging the gap between development and operations to drive efficiency and innovation.</p>
                        <article>
                            <div className='year'>
                                <span className='circule'></span>
                                <p>3+</p>
                            </div>
                            <div className='exp'>
                                <p>Year Of <span>Experience</span></p>
                            </div>
                        </article>
                    </article>

                    <article className='info'>
                        <div>
                            <p>Name</p>
                            <h3>Arunkumar Selvaraj</h3>
                        </div>
                        <div>
                            <p>Email</p>
                            <h3><a href='mailto:arunkumarselvaraj.m@gmail.com'>arunkumarselvaraj.m@gmail.com</a></h3>
                        </div>
                        <div>
                            <p>Name</p>
                            <h3>Arunkumar Selvaraj</h3>
                        </div>
                        <div>
                            <p>From</p>
                            <h3>Thedavur, Salem.</h3>
                        </div>
                    </article>


                </section>

                <section className='whatIDo' id='whatIDo'>
                    <p className='head'><span className='headSpan'>What I Do?</span></p>
                    <h2 className='header'>How I can help your next project</h2>
                    <section>
                        <article>
                            <img src={Cicd} alt='Network' />
                            <h3>CI/CD Automation</h3>
                            <p>I design and implement continuous integration and continuous delivery pipelines to automate software delivery, ensuring faster and more reliable releases.</p>
                        </article>
                        <article>
                            <img src={CI} alt='cloud infrastructure' />
                            <h3>Infrastructure as Code (IaC)</h3>
                            <p>Using tools like Terraform, CloudFormation, and Ansible, I automate infrastructure provisioning, management, and scaling, ensuring consistency across environments.</p>
                        </article>
                        <article>
                            <img src={Cloud} alt='cloud computing' />
                            <h3>Cloud Infrastructure Management</h3>
                            <p>I leverage cloud platforms such as AWS and GCP to architect and manage cloud infrastructure, optimizing for cost, performance, and security.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <img src={K8s} alt='kubernetes' />
                            <h3>Containerization & Orchestration</h3>
                            <p>I design and deploy containerized applications using Docker and Kubernetes, enabling seamless scaling and orchestration across environments.</p>
                        </article>
                        <article>
                            <img src={Monitoring} alt='monitoring' />
                            <h3>Monitoring & Incident Response</h3>
                            <p>I set up monitoring and logging solutions to ensure high system availability, identify issues proactively, and streamline troubleshooting and incident response.</p>
                        </article>
                        <article>
                            <img src={Automation} alt='automation' />
                            <h3>Automation & Scripting</h3>
                            <p>I write custom automation scripts to reduce manual work and optimize operational tasks, using languages like Python, Shell, and Bash.</p>
                        </article>
                    </section>
                </section>

                <section className='resume' id='resume'>
                    <p className='head'><span className='headSpan'>Resume</span></p>
                    <h2 className='header'>A summary of My Resume</h2>
                    <section className='resumeCon'>
                        <motion.article
                            initial={{ opacity: 0, x: -250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
                        >
                            <h2>My Education</h2>
                            <div className="education">
                                <div>
                                    <h3>Master in Computer Application</h3>
                                    <p>Anna University / 2019 - 2021</p>
                                    <p>CGPA - 8.5</p>
                                    <hr />
                                </div>
                            </div>
                        </motion.article>
                        <motion.article
                            initial={{ opacity: 0, x: 250 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
                        >
                            <h2>My Experience</h2>
                            <div className='education'>
                                <div>
                                    <h3>DevOps Engineer</h3>
                                    <p>Cloud Garage / 2021 - current</p>
                                    <p>A technology-focused company providing cloud solutions</p>
                                    <hr />
                                </div>
                            </div>
                        </motion.article>

                    </section>

                    <section className='skills'>
                        <Skills />
                        <div className='cvbtn'>
                            <button onClick={onButtonClick}> Download CV</button>
                        </div>
                    </section>
                </section>

                <section className='work' id='work'>
                    <p className='head'><span className='headSpan'>Work</span></p>
                    <h2 className='header'>Some of my most recent Projects</h2>
                    <section className='workCards'>
                        {workData.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                heading={card.heading}
                                paragraph={card.paragraph}
                                onClick={() => openModal(card)} // Open modal on card click
                            />
                        ))}
                    </section>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        image={selectedCard?.image}
                        heading={selectedCard?.heading}
                        paragraph={selectedCard?.paragraph}
                    />
                </section>

                <section className='blogs' id='blogs'>
                    <p className='head'><span className='headSpan'>Blogs</span></p>
                    <h2 className='header'>Some of my most recent blogs</h2>
                    <section className='blogsCards'>
                        {blogData.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                heading={card.heading}
                                paragraph={card.paragraph}
                                link={card.link}
                                containerClass="blogsCards"
                            // onClick={() => openModal(card)} // Open modal on card click
                            />
                        ))}
                    </section>
                </section>
                <footer>
                    <section>
                        <article>
                            <h3>Contact Information</h3>
                            <p><span>Email: </span><a href='mailto:arunkumarsrlvaraj.m@gmail.com'>arunkumarsrlvaraj.m@gmail.com</a></p>
                            <p><span>Location: </span>Thedavur, Gangavalli, Salem</p>
                        </article>
                        <article>
                            <h3>Social Media</h3>
                            <p><span>LinkedIn: </span><a href='mailto:arunkumarsrlvaraj.m@gmail.com'>arunkumarsrlvaraj.m@gmail.com</a></p>
                            <p><span>GitHub: </span><a href='https://github.com/ArunkumarSelvaraj-M'>ArunkumarSelvaraj-M</a></p>
                        </article>
                    </section>
                    <p className='copyrigthts'>© 2025 Arunkumar Selvaraj. All Rights Reserved.</p>
                </footer>
            </main>
        </>
    )
}

export default Home