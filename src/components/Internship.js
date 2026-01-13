import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import realisatie from "../assets/img/Stage/RealisatieDocumentMathijsOoms.pdf"
import projectPlan from "../assets/img/Stage/ProjectPlanMathijsOoms.pdf"
import reflectie from "../assets/img/Stage/ReflectieDocumentMathijsOoms.pdf"

export const Internship = () => {
  return (
    <section className="internship" id="internship">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
                  <h2>Internship — Ziekenhuis Geel</h2>
                  <p><strong>22 September – 19 December 2025</strong></p>

                  <h4>What I Did:</h4>
                  <p>
                    During my 13-week internship at Ziekenhuis Geel, I contributed to <strong>6 internal projects</strong> that improved hospital workflows. 
                    My work ranged from patient check-in systems, label printing, clothing and badge loan management, to network device automation.
                  </p>

                  <h4>How I Contributed:</h4>
                  <ul>
                    <li><strong>Technical Development:</strong> Built backend and frontend solutions, integrated hardware like eID readers and label printers, and automated manual workflows.</li>
                    <li><strong>Collaboration:</strong> Worked with different departments to understand their needs and deliver functional, user-friendly software.</li>
                  </ul>

                  <h4>About Ziekenhuis Geel:</h4>
                  <p>
                    Ziekenhuis Geel is a hospital that focuses on optimizing internal processes through technology. 
                    During my internship, I gained hands-on experience with <strong>C#, Windows Forms, ASP.NET, SQL Server</strong>, and practical integration of hardware devices in a hospital environment.
                  </p>

                  <p>
                    Curious about the projects? Check them out in the <a href="#projects" style={{ color: '#00c8ff', textDecoration: 'underline' }}>Projects tab</a> or documents below to see all 6 in detail!
                  </p>

                  <h4>Documents</h4>
                  <div>
                    <span className="tagline">
                      <a href={projectPlan} download="ProjectPlanMathijsOoms">Project Plan</a>
                    </span>
                    <span className="tagline">
                      <a href={realisatie} download="RealisatieMathijsOoms">Realization Document</a>
                    </span>
                    <span className="tagline">
                      <a href={reflectie} download="ReflectieMathijsOoms">Reflection</a>
                    </span>
                  </div>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};