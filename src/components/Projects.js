import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import wachtzaal from "../assets/img/Stage/Wachtzaal/Startscherm.png";
import wachtzaal2 from "../assets/img/Stage/Wachtzaal/EAFDokters.png";
import wachtzaal3 from "../assets/img/Stage/Wachtzaal/Wachtzaal.png";
import wachtzaal4 from "../assets/img/Stage/Wachtzaal/GeenEAF.png";
import wachtzaal5 from "../assets/img/Stage/Wachtzaal/Balie.png";
import wachtzaal6 from "../assets/img/Stage/Wachtzaal/Inkom.png";
import wachtzaal7 from "../assets/img/Stage/Wachtzaal/Overzicht.png";
import wachtzaal8 from "../assets/img/Stage/Wachtzaal/PatiëntToevoegen.png";

import magazijn from "../assets/img/Stage/MagazijnEtiketten/Startscherm.png";
import magazijn2 from "../assets/img/Stage/MagazijnEtiketten/Voorbeeld.png";
import magazijn3 from "../assets/img/Stage/MagazijnEtiketten/Resultaat.png";

import keuken from "../assets/img/Stage/KeukenEtiketten/StartschermGevuld.png";
import keuken2 from "../assets/img/Stage/KeukenEtiketten/StartschermLeeg.png";
import keuken3 from "../assets/img/Stage/KeukenEtiketten/Voorbeeld.png";
import keuken4 from "../assets/img/Stage/KeukenEtiketten/Resultaat.png";

import kledij from "../assets/img/Stage/KledijUitleningen/Startscherm.png";
import kledij2 from "../assets/img/Stage/KledijUitleningen/NieuweUitlening.png";
import kledij3 from "../assets/img/Stage/KledijUitleningen/MeerdereKledingstukken.png";
import kledij4 from "../assets/img/Stage/KledijUitleningen/UitleningVerwijderen.png";
import kledij5 from "../assets/img/Stage/KledijUitleningen/VerwijderenBevestiging.png";

import badges from "../assets/img/Stage/BadgeUitleningen/BadgeUitlenen.png";
import badges2 from "../assets/img/Stage/BadgeUitleningen/Overzicht.png";
import badges3 from "../assets/img/Stage/BadgeUitleningen/OverzichtGeschiedenis.png";
import badges4 from "../assets/img/Stage/BadgeUitleningen/NieuweBadge.png";
import badges5 from "../assets/img/Stage/BadgeUitleningen/ScanBadge.png";
import badges6 from "../assets/img/Stage/BadgeUitleningen/UitleningStartscherm.png";
import badges7 from "../assets/img/Stage/BadgeUitleningen/UitleningSuccesvol.png";
import badges8 from "../assets/img/Stage/BadgeUitleningen/InleveringSuccesvol.png";

import deviceManager from "../assets/img/Stage/DeviceManager/SwitchPoort2.png";
import deviceManager2 from "../assets/img/Stage/DeviceManager/MACStartscherm.png";
import deviceManager3 from "../assets/img/Stage/DeviceManager/MACStartschermGevuld.png";
import deviceManager4 from "../assets/img/Stage/DeviceManager/MACConsole1.png";
import deviceManager5 from "../assets/img/Stage/DeviceManager/MACConsole2.png";
import deviceManager6 from "../assets/img/Stage/DeviceManager/SwitchPoort1.png";

import angular1 from "../assets/img/angular1.png";
import angular2 from "../assets/img/angular2.png";
import angular3 from "../assets/img/angular3.png";
import angular4 from "../assets/img/angular4.png";
import angular5 from "../assets/img/angular5.png";
import angular6 from "../assets/img/angular6.png";
import agro1 from "../assets/img/agro1.png";
import agro2 from "../assets/img/agro2.png";
import agro3 from "../assets/img/agro3.png";
import agro4 from "../assets/img/agro4.png";
import agro5 from "../assets/img/agro5.png";
import agro6 from "../assets/img/agro6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

    const projects1 = [
    {
      title: "Waiting Room App",
      description: "An app to automate patiënt flow for the lab",
      extendedDescription: "This project was developed for the Laboratory department of the hospital. The application automates patient registration for blood tests, reducing the workload at the reception desk and guiding patients efficiently through the process. It provides a clear overview of all patients in each phase of the workflow for laboratory staff, ensuring accurate tracking and management.",
      imgUrl: wachtzaal,
      extraImages: [
        {img: wachtzaal, text: "Clear instructions for patients visiting the lab, including material pickup, sample submission, and blood tests."},
        {img: wachtzaal2, text: "Electronic Request Form Found: Patient confirms their doctor from the list and is directed to the waiting room."},
        {img: wachtzaal3, text: "Waiting Room Screen: Shows patients can take a seat and wait for their turn."},
        {img: wachtzaal4, text: "No Electronic Request Form: Patient chooses if they have a paper form to continue registration."},
        {img: wachtzaal5, text: "Paper Form Absent: Patient instructed to go to the reception desk for further assistance."},
        {img: wachtzaal6, text: "Not Registered: Patient needs to register at the hospital entrance before proceeding."},
        {img: wachtzaal7, text: "Lab Staff Overview Screen: Real-time list of patients with current phases, allowing staff to update statuses manually."},
        {img: wachtzaal8, text: "Add Patient Popup: Staff can add a patient not yet in the system using the eID reader or manual input."},
      ]
    },
    {
      title: "Warehouse Labels App",
      description: "An app to print product labels for the warehouse",
      extendedDescription: "The Hospital Warehouse department needed a faster, error-free way to generate labels. This app allows staff to quickly create and print correct labels from SAP data, improving efficiency and reducing mistakes.",
      imgUrl: magazijn,
      extraImages: [
        {img: magazijn, text: "Enter the article number and cost center to generate a label quickly and easily."},
        {img: magazijn2, text: "Preview of the label showing supplier, description, quantity, and barcode."},
        {img: magazijn3, text: "The final printed label, ready for use, ensuring accuracy and consistency."}
      ]
    },
    {
      title: "Kitchen Labels App",
      description: "An app to print sandwich labels for the kitchen",
      extendedDescription: "The hospital kitchen needed a faster way to process sandwich orders and print labels. This application imports Excel orders and automatically generates correct labels, reducing errors and improving workflow during busy periods.",
      imgUrl: keuken,
      extraImages: [
        {img: keuken2, text: "Empty start screen where the user can import an Excel file with sandwich orders."},
        {img: keuken, text: "Imported Excel data displayed in a table, allowing selection of labels to print."},
        {img: keuken3, text: "Example layout of a sandwich label showing the order details."},
        {img: keuken4, text: "Final printed label, ready to be applied to the packaged sandwich."}
      ]
    },
    {
      title: "Clothing Rentals App",
      description: "An app to register clothing rentals",
      extendedDescription: "The hospital linen service needed a digital system to track clothing loans. This application registers issued and returned garments via barcode scanning, providing full transparency and reducing loss and misuse.",
      imgUrl: kledij,
      extraImages: [
        {img: kledij, text: "Overview screen showing all active clothing loans within the linen service."},
        {img: kledij2, text: "Screen for registering a new clothing loan by scanning a garment and employee badge."},
        {img: kledij3, text: "Warning message displayed when an employee already has multiple active clothing loans."},
        {img: kledij4, text: "Screen used to return clothing by scanning the garment barcode."},
        {img: kledij5, text: "Confirmation dialog to safely finalize the removal of a clothing loan."}
      ]
    },
    {
      title: "Badge Rentals App",
      description: "An app to register badge rentals",
      extendedDescription: "The hospital’s technical department needed a reliable system to manage the lending and return of access badges. This solution replaces manual registration with a centralized system, providing real-time insight, full traceability, and a fast workflow for both administrators and external workers.",
      imgUrl: badges,
      extraImages: [
        {img: badges2, text: "Overview of all badges that are currently checked out and actively in use."},
        {img: badges3, text: "Historical overview of completed badge loans for tracking and reporting purposes."},
        {img: badges4, text: "Configuration screen used to register and activate new access badges."},
        {img: badges5, text: "Scan dialog for quickly identifying and managing a badge using barcode input."},
        {img: badges6, text: "Touch-optimized start screen on a Zebra tablet for scanning access badges."},
        {img: badges, text: "Screen where external workers enter minimal information to start a new badge loan."},
        {img: badges7, text: "Confirmation message shown after a badge loan has been successfully registered."},
        {img: badges8, text: "Automatic confirmation displayed when a badge is scanned and returned."}
      ]
    },
    {
      title: "Device Manager App",
      description: "An app to update device data",
      extendedDescription: "The hospital’s IT department needed an automated solution to keep device and network configuration data up to date. This project replaces outdated Excel-based workflows with tools that import MAC addresses and retrieve switch port information via SSH, ensuring accurate and reliable network data.",
      imgUrl: deviceManager,
      extraImages: [
        {img: deviceManager2, text: "Initial screen of the MAC address updater with an empty data table."},
        {img: deviceManager3, text: "Excel data loaded and validated before updating the device database."},
        {img: deviceManager4, text: "Console application start screen designed for automated script execution."},
        {img: deviceManager5, text: "Successful completion of the MAC address update process."},
        {img: deviceManager6, text: "Console application for retrieving switch port information via SSH."},
        {img: deviceManager, text: "Network configuration data successfully collected and stored in the database."}
      ]
    },
  ];
  const projects2 = [
    {
      title: "Home Page",
      description: "Clean design with info about the festival",
      imgUrl: angular1,
    },
    {
      title: "Artists Page",
      description: "A list of all artists in the line-up of the festival",
      imgUrl: angular2,
    },
    {
      title: "Artist Details Page",
      description: "All details of the chosen artist",
      imgUrl: angular6,
    },
    {
      title: "Ticket Page",
      description: "All available tickets to attend the festival",
      imgUrl: angular3,
    },
    {
      title: "Stage Page",
      description: "All stages on the festival",
      imgUrl: angular4,
    },
    {
      title: "Admin Overview",
      description: "An overview of all statistics of the festival",
      imgUrl: angular5,
    },
  ];
  const projects3 = [
    {
      title: "Home Page",
      description: "A user friendly home page made for farmers",
      imgUrl: agro1,
    },
    {
      title: "Set Up Claim",
      description: "A page to fill in all info to set up a claim for damages",
      imgUrl: agro2,
    },
    {
      title: "Manage Claims",
      description: "Page to manage all created claims",
      imgUrl: agro3,
    },
    {
      title: "Manage Plots",
      description: "Page to manage all registered plots",
      imgUrl: agro4,
    },
    {
      title: "Register Plots",
      description: "Page to register plots for farmers",
      imgUrl: agro5,
    },
    {
      title: "Government Dashboard",
      description: "A dashboard for the government to review all claims",
      imgUrl: agro6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my studies in Application Development, I have worked on several projects that showcase my skills in C#, .NET, Angular and Java.<br></br>Each project has allowed me to deepen my understanding of software development, problem-solving, and user experience design.</p>
                <p>Below, you will find some of my most notable projects, ranging from web applications to full-stack solutions. These projects reflect my passion for creating efficient, scalable, and user-friendly applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Internship</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Angular Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 4.0</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Over the course of my 13-week internship at Ziekenhuis Geel, I worked on six distinct projects. Each project brought its own set of challenges, providing valuable opportunities to expand my technical and problem-solving abilities. This experience allowed me to gain hands-on knowledge in both software development and real-world workflow optimization within a hospital environment.</p>
                      <Row>
                        {projects1.map((project, index) => {
                          return (
                            <ProjectCard 
                              onClick={() => handleCardClick(project)} 
                              key={index}
                              {...project} 
                              />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This project I made with 4 fellow students. We used Angular for the front-end and Java for the back-end. The webapp is a festival website template and can be modified for every festival in the admin panel. The end user pages we made are the Home Page, Line-up, Tickets, Merchandise, Stages and Contact. In the admin panel all these data can be changed to fit different events.</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>With my team AgroShield we made this webapp and mobile app for company Vito in Angular front-end and FastAPI back-end. AgroShield is an innovative application that helps farmers manage their fields and file a claim. We made pages for 4 end users: Farmer, Consultant, Government and Admin. The biggest challenges were the map with all parcels in Flanders and using the EOplaza services from Vito to create graphs to use as evidence.</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>

      <ProjectModal
        show={showModal}
        handleClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  )
}