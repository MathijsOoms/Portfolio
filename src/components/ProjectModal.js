import React, { useEffect, useState } from "react";
import { Modal, Carousel } from "react-bootstrap";

export const ProjectModal = ({ show, handleClose, project, startIndex }) => {
  const [activeIndex, setActiveIndex] = useState(startIndex);

  useEffect(() => {
    setActiveIndex(startIndex);
  }, [startIndex, project]);

  if (!project) return null;

  const isStageProject = !!project.extraImages;

  const images = isStageProject
    ? project.extraImages.map(item => ({
        img: item.img,
        text: item.text,
      }))
    : project.images.map(item => ({
        img: item.img,
        text: item.description, // optioneel tonen in modal
      }));

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
        {project.extendedDescription && (
          <p>{project.extendedDescription}</p>
        )}

        <Carousel
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        >
          {images.map((item, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={`Slide ${idx}`}
              />

              {item.text && (
                <div className="mt-3 text-center">
                  <p>{item.text}</p>
                </div>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};