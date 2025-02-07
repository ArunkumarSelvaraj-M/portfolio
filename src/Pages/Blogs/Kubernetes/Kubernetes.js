import React from 'react'
import "./Kubernetes.css"
import Architecture from "../../../Assets/Images/blogs/kubernetes-architecture.png";
import WorkerNode from "../../../Assets/Images/blogs/workerNode.png";
import Pod from "../../../Assets/Images/blogs/pod.png";

const Kubernetes = () => {
  return (
    <>
      <article className='kubernetes'>
        <header>
          <h1>Understanding Kubernetes</h1>
        </header>

        <section className='introduction'>
          <h2>Introduction</h2>
          <p>Kubernetes (K8s) is an open-source container orchestration platform that automates deployment,
            scaling, and management of containerized applications. It plays a crucial role in DevOps by
            enhancing scalability, reliability, and automation of modern applications.</p>
        </section>

        <section>
          <article>
            <h3>Why Kubernetes</h3>
            <p>Kubernetes, often referred to as K8s, is the leading container orchestration platform. Here’s why it’s worth your time:</p>
            <ul>
              <li><strong>Scalability:</strong> Automatically scale your applications based on demand.</li>
              <li><strong>Resilience:</strong> Ensure high availability with self-healing capabilities.</li>
              <li><strong>Flexibility:</strong> Deploy workloads across cloud providers, on-premises, or hybrid setups.</li>
              <li><strong>Cost-Effectiveness:</strong> Optimize resource utilization to save costs.</li>
            </ul>

            <p>As we step into an era of accelerated digital transformation, Kubernetes empowers businesses to adapt quickly and stay ahead of the competition.</p>
          </article>
        </section>

        <section>
          <h2>Cluster Architecture</h2>
          <section className='architecture'>
            <img src={Architecture} alt='architecture' />
            <article>
              <h3>What is the Kubernetes Control Plane</h3>
              <p>The Kubernetes Control Plane is the core component of Kubernetes, which is responsible for managing the cluster’s overall state and ensuring the desired state of resources is maintained. It orchestrates all operations in the cluster, from scheduling workloads to scaling applications and managing networking.</p>
              <p>For example, when you deploy a pod using kubectl, the control plane ensures that the pod is scheduled on a suitable node, maintains its lifecycle, and handles recovery in case of failures.</p>
              <h3>Key Components of the Control Plane:</h3>
              <ul>
                <li><strong>API Server:</strong> Serves as the entry point for all cluster operations, handling RESTful API requests.</li>
                <li><strong>etcd:</strong> A distributed key-value store that acts as the single source of truth for the cluster’s state and configuration.</li>
                <li><strong>Controller Manager:</strong> Manages control loops that monitor the desired state of resources (e.g., Deployments, ReplicaSets) and make adjustments to achieve that state.</li>
                <li><strong>Scheduler:</strong> Assigns pods to appropriate nodes based on resource requirements and constraints.</li>
                <li><strong>Cloud Controller Manager:</strong> Integrates with cloud providers to manage resources like load balancers, volumes, and networking.</li>
              </ul>
              <h3>Example</h3>
              <p>In a scenario where a node fails, the control plane components work together to maintain availability:</p>
              <ul>
                <li>The Controller Manager detects the failure and reschedules pods from the failed node to other healthy nodes.</li>
                <li>The Scheduler assigns the pods to appropriate nodes based on resource availability.</li>
              </ul>
            </article>
          </section>

          <section className='workerNode'>
            <article>
              <h3>Kubernetes Worker Node</h3>
              <p>A Worker Node is a machine in a Kubernetes cluster that runs the actual application workloads. It hosts the components necessary to execute and manage containers, ensuring that they meet the desired state defined by the control plane.</p>
              <p>When a pod is scheduled on a worker node, it is the worker node’s responsibility to run the pod’s containers, monitor their performance, and manage networking and storage.</p>
              <h3>Key Components of a Worker Node:</h3>
              <ol>
                <li>Kubelet:</li>
                <ul>
                  <li>The primary node agent that communicates with the control plane.</li>
                  <li>Ensures that the containers described in the pod specification are running and healthy.</li>
                  <li>Continuously monitors the pod’s status and reports back to the control plane.  </li>
                </ul>

                <li>Container Runtime:</li>
                <ul>
                  <li>Responsible for pulling container images and running containers.</li>
                  <li>Examples include Docker, containerd, or CRI-O.</li>
                </ul>

                <li>Kube Proxy:</li>
                <ul>
                  <li>Manages networking for the node, ensuring that services are reachable and load balancing is performed between pods.</li>
                  <li>Implements network rules to allow communication within the cluster.</li>
                </ul>

                <li>Node Components (optional, but often present):</li>
                <ul>
                  <li>Tools for monitoring (e.g., cAdvisor).</li>
                  <li>Logging agents (e.g., Fluentd).</li>
                </ul>

              </ol>
              <h3>Example:</h3>
              <p>In a scenario where a pod is scheduled on a worker node:</p>
              <ol>
                <li>The Kubelet receives the pod specification from the control plane and ensures the required containers are running.</li>
                <li>The Container Runtime pulls the necessary images and starts the containers.</li>
                <li>The Kube Proxy sets up networking rules to allow communication between this pod and other pods or services in the cluster.</li>
                <li>If the pod crashes, the Kubelet ensures it is restarted based on the pod’s restart policy.</li>
              </ol>
            </article>
            <img src={WorkerNode} alt='node' />
          </section>



          <article>
            <h3>Worker Node Responsibilities in Cluster Operations:</h3>
            <ul>
              <li>Hosting and running pods.</li>
              <li>Managing pod networking.</li>
              <li>Reporting status to the control plane.</li>
              <li>Scaling workloads as directed by the control plane.</li>
            </ul>
          </article>

        </section>

        <section>
          <h2>Pod</h2>
          <section className='pod'>
            <img src={Pod} alt='pod' />
            <div>
            <article>
              <h3>What is a Pod in Kubernetes?</h3>
              <p>A Pod in Kubernetes is the smallest deployable unit that represents a single instance of a running process in the cluster. It can contain one or more tightly coupled containers that share the same network namespace, storage, and specifications. Pods are the foundational building blocks of Kubernetes applications.</p>
              <p><strong>For example</strong>, if you are running a simple web server, you can deploy it as a Pod containing a single container running an Nginx image. In more complex scenarios, a Pod may contain multiple containers that need to work closely together, such as a logging sidecar container alongside a primary application container.</p>
            </article>

            <article>
              <h3>Pod Capabilities:</h3>
              <ol>
                <li><strong>Multiple Containers:</strong> Pods can host multiple containers that share storage and networking.</li>
                <li><strong>Resource Management:</strong> You can define CPU and memory requests/limits for containers within a Pod.</li>
                <li><strong>Networking:</strong> Each Pod gets a unique IP address, and all containers within a Pod communicate over localhost.</li>
                <li><strong>Volume Support:</strong> Pods can mount volumes, enabling data persistence or sharing between containers.</li>
                <li><strong>Lifecycle Management:</strong> Pods have configurable readiness, liveness, and startup probes for better lifecycle handling.</li>
              </ol>
              <h3>Example:</h3>
              <p>If you have a Node.js application that writes logs to a file and you need to ship those logs to an external system, you can deploy a Pod with two containers:</p>
              <ul>
                <li>One container running the Node.js application.</li>
                <li>Another container running a logging agent (e.g., Fluentd) as a sidecar.</li>
              </ul>
            </article>
            <article>
              <h3>Yaml Example</h3>

              <article>
                <p>Here’s a simple YAML for deploying a Pod:</p>
                <code>
                  apiVersion: v1
                  kind: Pod
                  metadata:
                  name: web-server
                  spec:
                  containers:
                  - name: nginx-container
                  image: nginx:latest
                  ports:
                  - containerPort: 80
                </code>
                <p>This Pod runs a single Nginx container that listens on port 80.</p>
              </article>

              <article>
                <h3>Real-World Usage:</h3>
                <p>In my previous role as a DevOps Engineer, I used Pods extensively for both simple and complex deployments. For example, I deployed a Python application in a Pod with a sidecar container running a custom metrics exporter. The Pod collected metrics from the application and sent them to Prometheus, ensuring visibility into application performance.</p>
              </article>

            </article>
            </div>
            
          </section>


        </section>



        <section>
          <h2>ReplicaSets</h2>
          <article>
            <h3>What is a ReplicaSet in Kubernetes?</h3>
            <p>A ReplicaSet in Kubernetes ensures that a specified number of identical pod replicas are running at any given time. It provides self-healing capabilities by maintaining the desired state of pods, replacing any that fail or are deleted unexpectedly.</p>
          </article>
          <article>
            <h4>For Example:</h4>
            <p>If you have a backend service and need three instances running for load balancing and high availability, you can define a ReplicaSet to manage those instances. The ReplicaSet ensures that exactly three pods are running. If a pod is deleted, the ReplicaSet immediately creates a new one to maintain the desired count.</p>
          </article>
          <article>
            <h4>ReplicaSet Capabilities:</h4>
            <ul>
              <li>Pod Scaling: Adjust the number of replicas to match workload requirements.</li>
              <li>Self-healing: Automatically replaces failed pods.</li>
              <li>Selector Matching: Ensures ReplicaSet only manages pods that match its selector labels.</li>
            </ul>
          </article>

          <article>
            <h4>In my previous role:</h4>
            <p>As a Senior DevOps Engineer, I used ReplicaSets to manage a Redis-based caching layer. We needed four Redis pods for one use case to ensure consistent high-traffic performance. The ReplicaSet maintained these pods across nodes in the cluster, ensuring availability even during node failures. Additionally, I used a combination of ReplicaSets and node affinity rules to optimize resource allocation, reducing latency for our cache-intensive operations.</p>
          </article>
          <article>
            <h4>Here’s a simple YAML for deploying a ReplicaSet:</h4>
            <code>
              apiVersion: apps/v1
              kind: ReplicaSet
              metadata:
              name: redis-replicaset
              spec:
              replicas: 4
              selector:
              matchLabels:
              app: redis
              template:
              metadata:
              labels:
              app: redis
              spec:
              containers:
              - name: redis
              image: redis:6.2
              ports:
              - containerPort: 6379
            </code>
          </article>
        </section>
      </article>
    </>
  )
}

export default Kubernetes