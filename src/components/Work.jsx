import { useMemo, useState } from "react";
import ProjectModal from "./ProjectModal";
import MaskedTitle from "./MaskedTitle";

import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import S5 from "../assets/S5.png";

import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
import A5 from "../assets/A5.png";

import M1 from "../assets/M1.png";

import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";
import B4 from "../assets/B4.png";
import B5 from "../assets/B5.png";

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        bgClass: "bg-3",
        shortTitle: "Sepsis AI Risk Prediction",
        category: "FULL STACK Web Application • AI Model • MongoDB Altas",
        tagline: "Sepsis AI Risk Prediction",
        description:
          "A full-stack sepsis prediction and monitoring platform that helps clinicians assess patient risk using key clinical measurements. Built with a React and Vite frontend, an Express and MongoDB backend, and a Python machine learning API, with patient dashboards, risk predictions, and doctor consultation features.",
        problem:
          "Sepsis can worsen rapidly, and recognizing it early is difficult when clinicians need to assess multiple patient measurements and records.",
        solution:
          "This project provides a web platform that uses patient vital signs and lab values to predict sepsis risk, display results, and support ongoing patient monitoring and doctor consultations.",
        techStack: [
          "React 19",
          "Vite",
          "Tailwind CSS",
          "Redux Toolkit",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Python",
          "FastAPI",
          "Machine Learning",
        ],
        features: [
          "Sepsis risk prediction from patient vitals and lab values",
          "Patient dashboards and medical records",
          "Prediction results and history",
          "Alerts and patient monitoring",
          "Doctor consultation features",
          "User authentication",
        ],
        architectureFlow: [
          {
            step: "01",
            title: "Web Client",
            tech: "React • Vite",
            desc: "Patient and clinician interface for entering data, viewing risk predictions, and monitoring records",
          },
          {
            step: "02",
            title: "Application API",
            tech: "Node.js • Express",
            desc: "Handles authentication, patient records, and communication between the frontend and data services",
          },
          {
            step: "03",
            title: "Prediction Service",
            tech: "Python • FastAPI • Machine Learning",
            desc: "Evaluates patient vital signs and lab values to return a sepsis risk prediction",
          },
          {
            step: "04",
            title: "Patient Data Store",
            tech: "MongoDB • Mongoose",
            desc: "Stores user and patient information for dashboards, records, and prediction workflows",
          },
        ],
        architectureDetails: [
          {
            title: "Full-Stack Clinical Workflow",
            desc: "Connects the React frontend to an Express API and MongoDB database to support patient records and monitoring features.",
          },
          {
            title: "Machine Learning Risk Prediction",
            desc: "Sends selected vital signs and lab measurements to a Python prediction service that returns a sepsis risk result.",
          },
          {
            title: "Patient and Doctor Features",
            desc: "Provides dashboards, prediction results, patient history, alerts, and doctor consultation features in one application.",
          },
        ],
        metrics: [
          { label: "Frontend", value: "React • Vite" },
          { label: "Backend", value: "Node.js • Express" },
          { label: "Prediction API", value: "Python • FastAPI" },
          { label: "Database", value: "MongoDB" },
        ],
        title: "Early Sepsis AI Risk Prediction",
        images: [S1, S2, S3, S4, S5],
        githubUrl:
          "https://github.com/risham-soni/sepsis-AI-risk-prediction-mern",
        liveDemoUrl: "https://sepsis-hazel.vercel.app/login",
        exploreUrl: "https://sepsis-hazel.vercel.app/login",
      },
      {
        bgClass: "bg-1",
        shortTitle: "AI-Powered Placement Preparation Assistant",
        category: "FULL STACK • RAG-MODEL • PostgreSQL",
        tagline: "RAG Based Preparation Assistant",
        description:
          "An AI-powered placement preparation platform that helps students practice company-specific interviews using Retrieval-Augmented Generation (RAG). Designed a multi-service architecture with React, Express, FastAPI, PostgreSQL, and Qdrant, combining semantic search, OCR-enabled PDF uploads, and source-cited answers grounded in verified preparation materials.",
        problem:
          "Students often prepare for placement interviews using scattered, generic resources. It’s difficult to find reliable, company-specific guidance or get answers grounded in verified materials.",
        solution:
          "An AI-powered placement preparation assistant that uses RAG to search interview guides, syllabi, and uploaded PDFs, then provides contextual answers with page citations. It supports company-specific queries, private document uploads, and saved chat history.",
        techStack: [
          "React",
          "Vite",
          "Node.js",
          "Express.js",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Qdrant",
          "Sentence Transformers",
          "Gemini API",
          "PyMuPDF",
          "Tesseract OCR",
          "LangChain",
          "JWT",
          "bcryptjs",
        ],
        features: [
          "Company-specific interview preparation",
          "Source-cited, context-grounded answers",
          "Upload and search placement PDFs",
          "OCR support for scanned documents",
          "Secure accounts and private document spaces",
          "Persistent, searchable chat history",
        ],
        architectureFlow: [
          {
            step: "01",
            title: "Interactive Client",
            tech: "React • Vite",
            desc: "Responsive chat interface for company-focused questions, document uploads, and cited answers",
          },
          {
            step: "02",
            title: "Application Backend",
            tech: "Node.js • Express • PostgreSQL",
            desc: "Handles authentication, chat history, user records, and document upload requests",
          },
          {
            step: "03",
            title: "Document Ingestion",
            tech: "PyMuPDF • Tesseract • LangChain",
            desc: "Extracts text from digital and scanned PDFs, then splits content into searchable chunks",
          },
          {
            step: "04",
            title: "Grounded AI Retrieval",
            tech: "FastAPI • Sentence Transformers • Qdrant • Gemini",
            desc: "Finds relevant document passages and generates answers with source and page citations",
          },
        ],
        architectureDetails: [
          {
            title: "Context-Grounded Answers",
            desc: "Uses semantic search over indexed placement materials to provide answers tied to retrieved sources.",
          },
          {
            title: "PDF Ingestion with OCR",
            desc: "Processes uploaded placement guides and brochures, including scanned PDFs, for personalized search.",
          },
          {
            title: "Private Document Retrieval",
            desc: "Separates user-uploaded materials so each student can search their own documents alongside shared resources.",
          },
        ],
        metrics: [
          { label: "Vector Dimensions", value: "384" },
          { label: "Retrieval Method", value: "Semantic Search" },
          { label: "Source Citations", value: "Page-Level" },
          { label: "Document Support", value: "PDF + OCR" },
        ],
        title: "AI-Powered Placement Preparation Assistant",
        images: [A1, A2, A3, A4, A5],
        githubUrl:
          "https://github.com/risham-soni/AI-Powered-Placement-Preparation-Assistant",
        liveDemoUrl:
          "https://ai-powered-placement-preparation-assistant-c3903we45.vercel.app/",
        exploreUrl:
          "https://ai-powered-placement-preparation-assistant-c3903we45.vercel.app/",
      },
      {
        bgClass: "bg-2",
        shortTitle: "MPLADS Sentinel",
        category:
          "Data Science  •  Isolation Forest model  •  REACT  •  PostgreSQL",
        tagline: "MPLADS Fund Utilization Anomaly Detection System",
        description:
          "MPLADS Sentinel is an AI-powered monitoring platform for projects funded through the Member of Parliament Local Area Development Scheme (MPLADS). It analyzes project, expenditure, contractor, and progress data to flag potential issues such as cost overruns, delays, suspicious tender patterns, and projects that may need closer review.",
        problem:
          "MPLADS funds many local development projects across India, making it difficult for officials to monitor spending, project progress, contractors, and completed work. Delays, inflated costs, suspicious tender patterns, and projects that exist only on paper can go unnoticed when oversight relies on manual reviews.",
        solution:
          "MPLADS Sentinel is a monitoring and early-warning platform that analyzes project and expenditure data to highlight cases that may need attention. It provides risk scores and forecasts, flags unusual contractor or tender patterns, tracks project milestones, and supports audit follow-ups. District officials can also review geotagged photos to help verify completed assets. Role-based dashboards tailor the information to ministry, state, MP, district, and auditor users.",
        techStack: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Python",
          "scikit-learn",
          "Isolation Forest",
          "JWT",
        ],

        features: [
          "AI-assisted project anomaly detection",
          "Explainable project risk scoring",
          "Early-warning scores for ongoing works",
          "Cost and expenditure anomaly flagging",
          "Contractor concentration and collusion analysis",
          "Project delay and milestone monitoring",
          "Geotagged photo verification for completed works",
          "Audit case management and follow-up workflows",
          "Role-based dashboards for five administrative tiers",
          "Conversational assistant for scheme and project queries",
        ],
        architectureFlow: [
          {
            step: "01",
            title: "Administrative Data",
            tech: "MPLADS CSV Data • PostgreSQL",
            desc: "Project, sanction, expenditure, completion, and contractor records provide the data for monitoring and analysis.",
          },
          {
            step: "02",
            title: "ML Risk Analysis",
            tech: "Python • scikit-learn",
            desc: "Data pipelines prepare project features; Isolation Forest models flag unusual patterns, while a Random Forest model produces early-warning risk scores.",
          },
          {
            step: "03",
            title: "API and Governance Services",
            tech: "Node.js • Express • Prisma",
            desc: "REST APIs provide role-protected access to project details, analytics, verification queues, predictions, and audit workflows.",
          },
          {
            step: "04",
            title: "Role-Based Dashboard",
            tech: "React • Vite • Tailwind CSS",
            desc: "Users review national and local project risks, investigate flagged works, verify evidence, and record follow-up actions.",
          },
        ],
        architectureDetails: [
          {
            title: "Anomaly Detection",
            desc: "Isolation Forest models analyze cost, evidence, disbursement, vendor concentration, and project progress features to identify unusual works for review.",
          },
          {
            title: "Early-Warning Risk Scores",
            desc: "A Random Forest Classifier trained on completed-work outcomes estimates which ongoing projects resemble historically flagged works.",
          },
          {
            title: "Role-Based Governance",
            desc: "JWT authentication and role-based access control tailor dashboards and workflows for ministry, state, MP, district, and auditor users.",
          },
          {
            title: "Ground Verification",
            desc: "District authorities can review geotagged photographic evidence for completed works as part of verification workflows.",
          },
        ],
        metrics: [
          { label: "Administrative Tiers", value: "5" },
          { label: "Anomaly Model", value: "Isolation Forest" },
          { label: "Early-Warning Model", value: "Random Forest" },
          { label: "Project Data Scale", value: "38,000+ projects*" },
        ],

        title: "MPLADS Fund Utilization Anomaly Detection System",
        images: [M1],
        githubUrl: "https://github.com/risham-soni/mplads-",
        liveDemoUrl: "https://sih-2026-one.vercel.app/login",
        exploreUrl: "https://sih-2026-one.vercel.app/login",
      },
      {
        bgClass: "bg-3",
        shortTitle: "Full Stack BookMyStay",
        category: "MERN FULL STACK • REST-API • MongoDB Altas",
        tagline: "BookMyStay",
        description:
          "BookMyStay is a full-stack accommodation discovery and booking app. Guests can browse and filter stays, view listing details, and leave star-rated reviews. Signed-in hosts can create, edit, and delete listings, with images stored through Cloudinary or linked by URL.",
        problem:
          "Travelers need an easy way to discover and compare places to stay, while property hosts need a simple way to publish and manage listings. BookMyStay brings both sides together in one web app.",
        solution:
          "Users can browse and filter accommodation listings, view details, and leave reviews. Hosts can create, edit, and delete listings. The app supports login, protected host actions, and listing images via Cloudinary or direct URLs.",
        techStack: [
          "React 18",
          "Bootstrap 5",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT",
          "Joi",
          "Cloudinary",
        ],
        features: [
          "Browse and filter accommodation listings",
          "View listing details and images",
          "Create, edit, and delete listings",
          "Submit star-rated reviews and comments",
          "User signup and login with protected host actions",
          "Upload listing images through Cloudinary or use image URLs",
        ],

        architectureFlow: [
          {
            step: "01",
            title: "Web Client",
            tech: "React 18 • Vite",
            desc: "Responsive interface for discovering stays, viewing listing details, and managing host actions",
          },
          {
            step: "02",
            title: "Application API",
            tech: "Node.js • Express",
            desc: "Provides REST endpoints for authentication, listings, and reviews, with validation and access controls",
          },
          {
            step: "03",
            title: "Media Storage",
            tech: "Cloudinary",
            desc: "Stores uploaded listing images and makes them available to the application",
          },
          {
            step: "04",
            title: "Database",
            tech: "MongoDB • Mongoose",
            desc: "Stores listing, review, and user data for the booking platform",
          },
        ],

        architectureDetails: [
          {
            title: "Accommodation Discovery",
            desc: "Connects a React frontend to an Express API so users can browse, filter, and view accommodation listings.",
          },
          {
            title: "Host Listing Management",
            desc: "Authenticated hosts can create, edit, and delete listings, with request data validated by Joi.",
          },
          {
            title: "Reviews and Images",
            desc: "Users can submit star-rated reviews, while listing images can be uploaded to Cloudinary or provided as URLs.",
          },
        ],

        metrics: [
          { label: "Frontend", value: "React • Vite" },
          { label: "Backend", value: "Node.js • Express" },
          { label: "Database", value: "MongoDB • Mongoose" },
          { label: "Image Storage", value: "Cloudinary" },
        ],
        title: "BookMyStay",
        images: [B2, B3, B4, B5],
        githubUrl:
          "https://github.com/risham-soni/BookMyStay-MERN",
        liveDemoUrl: "https://book-my-stay-mern-3e6g.vercel.app/",
        exploreUrl: "https://book-my-stay-mern-3e6g.vercel.app/",
      },
    ],
    [],
  );

  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="work-header">
        <MaskedTitle number="2." text="Featured Work" />
        <div className="divider" />
      </div>

      <div className="work-grid">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                setActiveProjectIndex(index);
            }}
            aria-label={`Open project: ${proj.title}`}
          >
            <div className={`project-bg ${proj.bgClass}`} />
            <div className="project-overlay" />
            <div className="project-info">
              <p className="font-mono project-category text-gray uppercase">
                {proj.category}
              </p>
              <h3 className="project-title uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={activeProjectIndex !== null}
        onClose={() => setActiveProjectIndex(null)}
        project={activeProject}
      />
    </section>
  );
}
