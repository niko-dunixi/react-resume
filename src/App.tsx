import React from "react";
// import logo from './logo.svg';
import "./App.css";
import WorkExperience, {
  WorkExperiencePosition,
  WorkExperienceProps,
} from "./WorkExperience";
import Section from "./Section";
import selfie from "./images/profile.jpg";
import StyleControls from "./StyleControls";
import stringHash from "string-hash";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const workexp: Array<WorkExperienceProps> = [
  {
    employer: "American Family Insurance",
    positions: [
      {
        title: "Senior Software Engineer",
        start: new Date(2021, 3),
      },
    ],
    highlights: [
      "Operated a Center of Excellence in GCP",
      "Created standards for Web Application Development and CI/CD",
      "Introduced GoLang for Web Application Development and Developer Tooling",
      "Held GCP office hours for developers and business-users",
    ],
    summary: `Built backend microservices in GoLang, Typescript, and Python Flask in Kubernetes.
              Architected reusable CI/CD Gitlab Pipeline libraries to streamline developer
              experience and lower cognative overload. Released a developer portal based on
              Spotify Backstage and wrote custom components (React/Typescript) for engineer and
              business-user intake requests. Created a ODIC product (GoLang) to fill gap between GCP
              Identity Platform and Okta.`,
  },
  {
    employer: "Forcepoint LLC",
    positions: [
      {
        title: "Senior Software Engineer",
        start: new Date(2019, 8),
        end: new Date(2021, 3),
      },
    ],
    highlights: [
      "Delivered an AWS greenfield project to production",
      "Maintained and refactored legacy software into modern architectures",
      "Introduced GoLang for Web Application Development and Developer Tooling",
    ],
    summary: `Built microservices in Java (Dropwizard), C# (EmbedIO), and GoLang
            to EC2, ECS, and Kubernetes. I've developed both new technologies
            and triaged and improved legacy customer facing products. I've
            created AWS infrastructure with difficult business requirements
            without compromising AWS best practices or stability. I created
            efficient CI/CD reconciling both AWS CloudFormation and Hashicorp
            Terraform. I introduced GoLang to Forcepoint creating both consuming
            and producing web services that interfaced with other live services.`,
  },
  {
    employer: "Western Governors University",
    positions: [
      {
        title: "Senior Software Engineer",
        start: new Date(2018, 5),
        end: new Date(2019, 8),
      },
      {
        title: "Software Engineer II",
        start: new Date(2017, 1),
        end: new Date(2018, 5),
      },
    ],
    highlights: [
      "Migrated legacy JSP in Tomcat applications to SpringBoot in Docker",
      "Introduced GoLang for CI/CD and Devloper Tooling",
    ],
    summary: `Develop new student and employee facing Java (SpringBoot) APIs.
            Migrated legacy systems from old standards (6-7+ years legacy JSP
            Servlets) into more modern Cloud focused architectures (Docker-ized
            microservices on ECS Fargate). Developed the CI/CD process at WGU to
            build stacks that are delivered with CodeBuild and CloudFormation.
            Our processes enabled us to transition from dedicated servers within
            on-premise data-centers to Docker containers in Serverless Fargate
            Clusters in ECS.`,
  },
  {
    employer: "TEKSystems: Contracted to Krames Staywell",
    positions: [
      {
        title: "Software Development Engineer in Test (SDET)",
        start: new Date(2016, 5),
        end: new Date(2017, 1),
      }
    ],
    highlights: [
      "Increased automated test-coverage and improved software reliability",
      "Migrated proprietary test framework to open Selenium standards",
    ],
    summary: `Clients wanted to migrate their Web UI automation build in Telerik
              to Selenium. Developed a custom Selenium WebDriver to support tests
              written in Telerik enabling clients to maintain legacy test-suite and
              utilize the talent pool that is familiar with Selenium's features and
              standards.`,
  },
  {
    employer: "Overstock.com",
    positions: [
      {
        title: "Software Development Engineer in Test (SDET)",
        start: new Date(2015, 12),
        end: new Date(2016, 5),
      },
      {
        title: "Associate Performance Test Engineer",
        start: new Date(2013, 9),
        end: new Date(2015, 12),
      },
      {
        title: "Senior Fraud Analyst",
        start: new Date(2012, 4),
        end: new Date(2013, 9),
      },
    ],
    highlights: [
      "Worked into IT through call center",
      "Inherited and improved API performance testing framework",
      "Created unified UI automation testing framework",
    ],
    summary: `Started in the call-center and wrote automation to remove manual toil.
              Was hired into QA department and inherited a JMeter test suite that I
              improved with a developer-centric Web UI to schedule tests. Wrote a
              unified Selenium automation framework so teams could write tests across
              siloed business unit verticals.`,
  },
];

const qualifications = [
  "AWS - Certified Developer Asc",
  "AWS - Certified Solutions Architect Asc",
  "CompTIA Project+",
  "Bachelor's of Science in Computer Science",
];

function App() {
  const experience = workexp.map((item) => {
    return <WorkExperience
      key={stringHash(item.employer)}
      employer={item.employer}
      positions={item.positions}
      highlights={item.highlights}
      summary={item.summary}
    />
  });
  const qualificationListItems = qualifications.map((item) => <li key={stringHash(item)}>{item}</li>);

  return (
    <>
      <StyleControls />
      <div className="resume-page">
        <header className="resume-header">
          <div className="resume-subject-container">
            <div className="resume-subject">Paul N Cook Baker</div>
            <div className="resume-contact-container">
              <a href="mailto:paul.nelson.baker@gmail.com">
                paul.nelson.baker@gmail.com
              </a>
              <a href="tel:801-613-0864">801-613-0864</a>
            </div>
            <div>Senior Software Engineer</div>
            <div>Computer Scientist</div>
            <div className="resume-socials">
              <a href="https://github.com/niko-dunixi" target="_blank"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/niko-dunixi" target="_blank"><AiFillLinkedin /></a>
            </div>
          </div>
          <img className="resume-subject-selfie" src={selfie}></img>
        </header>
        <div className="print-columns">
          <Section title="Profile">
            <p>
              Experienced Senior Software Engineer who achitects robust
              microservice architectures with an emphasis on quality,
              cost-effectiveness and availability. Has a passion for the "you
              build it, you own it" philosophy and believes all developers should
              incorporate DevOps and SRE based practices into their engineering
              pipelines.
            </p>
            <p>
              In his spare time Paul enjoys aerial dance fitness, kettlebell
              swings, and recently learned you can make as much Kombucha at home
              as you want and no one can legally stop you.
            </p>
          </Section>
          <Section title={"Qualifications"}>
            <ul className="qualifications capabilities">
              {qualificationListItems}
            </ul>
          </Section>
        </div>
        <Section title={"Skills and Experience"}>
          <div className="print-columns">
            <Section title={"Application Development"}>
              <ul className="capabilities">
                <li>Java SpringBoot</li>
                <li>.NET/C#</li>
                <li>GoLang</li>
                <li>React with Typescript</li>
                <li>Python Flask</li>
              </ul>
            </Section>
            <Section title="Data Management">
              <ul className="capabilities">
                <li>MySQL</li>
                <li>Postgres</li>
                <li>Amazon Aurora/CloudSQL</li>
                <li>DynamoDB</li>
              </ul>
            </Section>
            <Section title={"CI/CD"}>
              <ul className="capabilities">
                <li>Git</li>
                <li>Linux/Bash</li>
                <li>Docker</li>
                <li>Apache Maven</li>
                <li>Helm</li>
                <li>Kustomize</li>
                <li>Terraform</li>
                <li>AWS CloudFormation</li>
              </ul>
            </Section>
            <Section title={"Platforms"}>
              <ul className="capabilities">
                <li>GCP</li>
                <li>AWS</li>
                <li>Kubernetes</li>
              </ul>
            </Section>
          </div>
        </Section>
        <Section title={"Work History"} className="work-history">
          {experience}
        </Section>
      </div>
    </>
  );
}

export default App;
