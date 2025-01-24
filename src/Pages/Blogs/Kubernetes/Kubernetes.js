import React from 'react'
import "./Kubernetes.css"

const Kubernetes = () => {
  return (
    <>
        <article className="blog-container">
      <header>
        <h1 className="blog-title">Understanding Kubernetes: A DevOps Perspective</h1>
      </header>

      <section>
        <h2 className="section-title">Introduction</h2>
        <p className="blog-text">
          Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, 
          scaling, and management of containerized applications. It plays a crucial role in DevOps by 
          enhancing scalability, reliability, and automation of modern applications.
        </p>
      </section>

      <section>
        <h2 className="section-title">Core Kubernetes Concepts</h2>

        <article>
          <h3 className="subsection-title">Pods</h3>
          <p className="blog-text">The smallest deployable unit in Kubernetes, containing one or multiple containers sharing resources.</p>
        </article>

        <article>
          <h3 className="subsection-title">Nodes</h3>
          <p className="blog-text">Worker machines where containers run, managed by the Kubernetes control plane.</p>
        </article>

        <article>
          <h3 className="subsection-title">Master vs Worker Nodes</h3>
          <ul className="blog-list">
            <li><strong>Master Node:</strong> Manages the cluster and runs control plane components like API server, scheduler, controller manager, and etcd.</li>
            <li><strong>Worker Node:</strong> Runs containerized applications using Kubelet, Kube Proxy, and the container runtime.</li>
          </ul>
        </article>

        <article>
          <h3 className="subsection-title">Clusters</h3>
          <p className="blog-text">A group of nodes managed together to run applications efficiently.</p>
        </article>

        <article>
          <h3 className="subsection-title">Deployments</h3>
          <p className="blog-text">Ensures desired state management of applications, supporting rolling updates and rollback mechanisms.</p>
        </article>

        <article>
          <h3 className="subsection-title">Services</h3>
          <p className="blog-text">Provides stable networking for pods. Types: ClusterIP, NodePort, LoadBalancer, and ExternalName.</p>
        </article>
      </section>

      <section>
        <h2 className="section-title">Kubernetes Networking</h2>
        <article>
          <h3 className="subsection-title">Cluster Networking</h3>
          <p className="blog-text">Enables communication between pods and services, using Container Network Interface (CNI) plugins.</p>
        </article>

        <article>
          <h3 className="subsection-title">Ingress Controllers</h3>
          <p className="blog-text">Manages external access to services, supporting SSL termination, virtual hosting, and path-based routing.</p>
        </article>
      </section>

      <section>
        <h2 className="section-title">Kubernetes in Cloud Environments</h2>
        <article>
          <h3 className="subsection-title">Managed Kubernetes Services</h3>
          <p className="blog-text">Amazon EKS (AWS), Google GKE (GCP), and Azure AKS simplify Kubernetes deployment and management.</p>
        </article>
      </section>

      <section>
        <h2 className="section-title">Best Practices</h2>
        <ul className="blog-list">
          <li>Use Infrastructure as Code (IaC) for Kubernetes deployment (Terraform, Helm).</li>
          <li>Implement Role-Based Access Control (RBAC) for security.</li>
          <li>Monitor clusters with Prometheus and Grafana.</li>
          <li>Enable auto-scaling for better resource utilization.</li>
        </ul>
      </section>

      <footer className='footer'>
        <h2 className="section-title">Conclusion</h2>
        <p className="blog-text">
          Kubernetes is a powerful platform for managing containerized applications at scale. Understanding its core components 
          and best practices helps DevOps teams build resilient, secure, and scalable infrastructures.
        </p>
      </footer>
    </article>
    </>
  )
}

export default Kubernetes