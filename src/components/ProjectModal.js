import React from "react";
import { Modal, Carousel } from "react-bootstrap";

export const ProjectModal = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="project-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Hoofdomschrijving */}
        <p>{project.extendedDescription}</p>
        
        {/* Carousel with extra images */}
        {project.extraImages && project.extraImages.length > 0 && (
          <Carousel>
            {project.extraImages.map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt={`Slide ${idx}`}
                />
                {/* Text below the image */}
                {item.text && (
                  <div className="mt-2 text-center">
                    <p>{item.text}</p>
                  </div>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Modal.Body>
    </Modal>
  );
};