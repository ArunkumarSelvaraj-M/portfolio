import React from 'react'

function Network() {
  return (
    <>
        <section className='network'>
            <h1>Understanding Networking: A DevOps Perspective</h1>
            <h2>Introduction</h2>
            <p>In the world of DevOps, networking plays a critical role in ensuring seamless communication between applications, services, and infrastructure. Whether working with cloud platforms, on-premises data centers, or hybrid environments, a strong understanding of networking concepts is essential for deploying and managing scalable, secure, and high-performing applications.</p>
            <h3>Core Networking Concepts</h3>
            <ol>
                <li>
                    <h3>OSI and TCP/IP Models</h3>
                    <p>The OSI (Open Systems Interconnection) model provides a structured approach to networking with seven layers:</p>
                    <ul>
                        <li><strong>Physical</strong>Hardware, cables, and switches.</li>
                        <li><strong>Data Link</strong>MAC addresses, Ethernet.</li>
                        <li><strong>Network</strong>IP addressing, routing.</li>
                        <li><strong>Transport</strong>TCP, UDP, flow control.</li>
                        <li><strong>Session</strong>Connection establishment.</li>
                        <li><strong>Presentation</strong>Encryption, formatting.</li>
                        <li><strong>Application</strong> End-user protocols (HTTP, SSH, etc.).</li>
                    </ul>
                    <p>The TCP/IP model simplifies this into four layers: Network Access, Internet, Transport, and Application.</p>
                </li>
            </ol>
        </section>
    </>
  )
}

export default Network