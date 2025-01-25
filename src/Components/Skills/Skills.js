import React from "react";
import "./Skills.css"; // Import the CSS file for styling

const skillsData = {
  "Programming and Database": [
    { name: "Shell Script", percentage: 80 },
    { name: "Python", percentage: 60 },
    { name: "MySQL", percentage: 70 }
  ],
  "Operating System": [
    { name: "Linux", percentage: 65 },
    { name: "Windows", percentage: 95 }
  ],
  "DevOps & Tools": [
    { name: "JIRA", percentage: 75 },
    { name: "Confluence", percentage: 75 },
    { name: "Git", percentage: 85 },
    { name: "GitHub", percentage: 75 },
    { name: "Docker", percentage: 75 },
    { name: "Jenkins", percentage: 75 },
    { name: "GitHub Action", percentage: 75 },
    { name: "Kubernetes", percentage: 75 },
    { name: "Ansible", percentage: 75 },
    { name: "Terraform", percentage: 75 },
    { name: "SonarQube", percentage: 75 },
    { name: "Checkov", percentage: 75 },
    { name: "Nginx", percentage: 75 },

  ],
  "AWS": [
    { name: "IAM", percentage: 90 },
    { name: "VPC", percentage: 80 },
    { name: "EC2", percentage: 70 },
    { name: "ECR", percentage: 85 },
    { name: "EKS", percentage: 85 },
    { name: "RDS", percentage: 85 },
    { name: "S3", percentage: 85 },
    { name: "Route53", percentage: 85 },
    { name: "CloudWatch", percentage: 85 }
  ],
  "GCP": [
    { name: "IAM", percentage: 90 },
    { name: "VPC", percentage: 80 },
    { name: "Compute Engine", percentage: 70 },
    { name: "GCR", percentage: 85 },
    { name: "Cloud Run", percentage: 85 },
    { name: "GKE", percentage: 85 },
    { name: "Cloud Storage", percentage: 85 },
    { name: "Cloud SQL", percentage: 85 }
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
                  
                    <ul>
                      <li>{skill.name}</li>
                    </ul>

                 
                 
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
