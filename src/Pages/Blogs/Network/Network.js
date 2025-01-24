import React from 'react'
import "./Network.css"

const Network = () => {
  return (
    <>
        <article className="blog-container">
      <header>
        <h1 className="blog-title">Understanding Networking: A DevOps Perspective</h1>
      </header>
      
      <section>
        <h2 className="section-title">Introduction</h2>
        <p className="blog-text">
        Networking is essential in DevOps for enabling communication between applications, services, and infrastructure. A strong understanding of networking helps in deploying secure and high-performing applications.
        </p>
      </section>

      <section>
        <h2 className="section-title">Core Networking Concepts</h2>
        
        <article>
          <h3 className="subsection-title">Networking Models</h3>
          <ul className="blog-list">
            <li><strong>OSI Model:</strong> Seven layers defining data communication.</li>
            <li><strong>TCP/IP Model:</strong> Simplified four-layer model used in the internet.</li>
          </ul>
        </article>
        
        <article>
          <h3 className="subsection-title">IP Addressing & Subnetting</h3>
          <p className="blog-text">IPv4 and IPv6 allow device communication. Subnetting helps manage networks efficiently.</p>
        </article>
        
        <article>
          <h3 className="subsection-title">DNS (Domain Name System)</h3>
          <p className="blog-text">Converts domain names into IP addresses.</p>
        </article>
        
        <article>
          <h3 className="subsection-title">Firewalls and Security Groups</h3>
          <p className="blog-text">Control network traffic and enhance security.</p>
        </article>
        
        <article>
          <h3 className="subsection-title">Load Balancing</h3>
          <p className="blog-text">Distributes traffic across multiple servers to improve reliability.</p>
        </article>
      </section>

      <section>
        <h2 className="section-title">Networking in Cloud Environments</h2>
        
        <article>
          <h3 className="subsection-title">VPC (Virtual Private Cloud)</h3>
          <p className="blog-text">Creates isolated network environments in the cloud.</p>
        </article>
        
        <article>
          <h3 className="subsection-title">VPN & Direct Connect</h3>
          <p className="blog-text">Secure connections between cloud and on-premises environments.</p>
        </article>
        
        <article>
          <h3 className="subsection-title">Service Mesh & API Gateway</h3>
          <ul className="blog-list">
            <li><strong>Service Mesh:</strong> Manages service communication.</li>
            <li><strong>API Gateway:</strong> Controls API traffic and security.</li>
          </ul>
        </article>
      </section>

      <section>
        <h2 className="section-title">Best Practices</h2>
        <ul className="blog-list">
          <li>Automate configurations using Terraform.</li>
          <li>Monitor networks with Prometheus and Grafana.</li>
          <li>Apply security best practices to control access.</li>
          <li>Enable logging for traffic analysis.</li>
        </ul>
      </section>
      
      <footer className='footer'>
        <h2 className="section-title">Conclusion</h2>
        <p className="blog-text">
          Networking is a crucial skill in DevOps. Understanding core concepts and implementing 
          best practices helps in building secure, scalable, and high-performance infrastructures.
        </p>
      </footer>
    </article>
    </>
  )
}

export default Network