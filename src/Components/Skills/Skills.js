import React from "react";
import "./Skills.css"; // Import the CSS file for styling

const skillsData = {
  "Programming and Database:": [
    { name: "Shell Script, Python, MySQL", percentage: 80 }
  ],
  "Operating System:": [
    { name: "Linux, Windows", percentage: 65 }
  ],
  "DevOps & Tools:": [
    { name: "JIRA, Confluence, Git, GitHub, Docker, Jenkins, GitHub Action, Kubernetes, Ansible, Terraform, SonarQube, Checkov, Nginx", percentage: 75 }

  ],
  "AWS:": [
    { name: "IAM, VPC, EC2, ECR, EKS, RDS, S3, Route53, CloudWatch", percentage: 90 }
  ],
  "GCP:": [
    { name: "IAM, VPC, Compute Engine, GCR, Cloud Run, GKE, Cloud Storage, Cloud SQL", percentage: 90 }
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="category-skill">
        {Object.keys(skillsData).map((category, index) => (
          <div key={index} className="category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skillsData[category].map((skill, i) => (
                <div key={i} className="skill">
                  
                   
                      <p>{skill.name}</p>
                   

                 
                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
