import { useState, useEffect } from "react";
import "./Projects.scss";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const ALL_TAG = "Alla";

// Alla unika teknik-taggar från projekten, med "Alla" först
const filterTags = [
  ALL_TAG,
  ...new Set(projects.flatMap((project) => project.tags)),
];

const filterProjects = (tag: string) =>
  tag === ALL_TAG
    ? projects
    : projects.filter((project) => project.tags.includes(tag));

// Karusellen loopar bara om det finns minst 3 projekt att visa
const canLoop = (count: number) => count >= 3;

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState(ALL_TAG);

  // Den filtrerade listan räknas fram vid varje rendering, inget eget state
  const filteredProjects = filterProjects(selectedTag);
  const count = filteredProjects.length;
  const loop = canLoop(count);
  const slides = loop
    ? [...filteredProjects, ...filteredProjects, ...filteredProjects]
    : filteredProjects;

  const [galleryIndex, setGalleryIndex] = useState<Record<number, number>>(
    {},
  );
  const changeGallery = (project: Project, dir: number) => {
    const total = project.gallery?.length ?? 1;
    setGalleryIndex((prev) => ({
      ...prev,
      [project.id]: ((prev[project.id] ?? 0) + dir + total) % total,
    }));
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [isAnimating, setIsAnimating] = useState(true);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.clientX);
    setIsAnimating(false);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
    if (Math.abs(diff) > 5) setHasDragged(true);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsAnimating(true);

    // Utan loop stannar karusellen på första och sista projektet
    const min = loop ? -Infinity : 0;
    const max = loop ? Infinity : count - 1;
    if (dragOffset > 50) setCurrentIndex((prev) => Math.max(prev - 1, min));
    else if (dragOffset < -50)
      setCurrentIndex((prev) => Math.min(prev + 1, max));

    setDragOffset(0);
    setTimeout(() => setHasDragged(false), 50);
  };

  const onTransitionEnd = () => {
    if (!loop) return;
    if (currentIndex <= 0 || currentIndex >= count * 2) {
      setIsAnimating(false);
      setCurrentIndex(count);
    }
  };

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex((loop ? count : 0) + index);
  };

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    // Börja om från första projektet i den nya listan
    const newCount = filterProjects(tag).length;
    setIsAnimating(false);
    setCurrentIndex(canLoop(newCount) ? newCount : 0);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const transformValue = `translateX(calc(${currentIndex} * (-100% / ${slides.length}) + ${dragOffset}px))`;

  return (
    <section className="projects" id="projects">
      {/* HEADER */}
      <div className="container">
        <div className="projects__header">
          <span className="section-label">PROJECTS</span>
          <div className="projects__header-top">
            <h2 className="section-title">Latest Works</h2>
            <a
              href="https://github.com/alexgeho"
              target="_blank"
              rel="noreferrer"
              className="projects__btn-view"
            >
              View GitHub
            </a>
          </div>
          <ProjectFilter
            tags={filterTags}
            selectedTag={selectedTag}
            onSelect={handleSelectTag}
          />
        </div>
      </div>
      {/*  HEADER END*/}

      {/* CAROUSEL container */}
      {/* Carousel Movement Logic */}
      <div
        className="projects__carousel-container"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="projects__carousel-track"
          style={{
            transform: transformValue,
            transition: isAnimating ? "transform 0.4s ease-out" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {/* RENDER OF CARDS */}

          {slides.map((project, index) => (
            <div className="project-slide" key={`${project.id}-${index}`}>
              <ProjectCard
                project={project}
                galleryIndex={galleryIndex[project.id] ?? 0}
                onChangeGallery={(dir) => changeGallery(project, dir)}
                onOpen={() => {
                  if (!hasDragged) openModal(project);
                }}
              />
            </div>
          ))}

          {/* RENDER OF CARDS END*/}
        </div>
      </div>

      {/* DOTS */}
      <div className="container">
        <div className="projects__dots">
          {filteredProjects.map((project, index) => (
            <button
              key={project.id}
              className={`dot ${index === currentIndex % count ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Opened Project / Modal window / popup  */}
      {selectedProject && (
        <div className="projects-modal-overlay" onClick={closeModal}>
          <div
            className="projects-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="projects-modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="projects-modal-content">
              {/* Main project image */}
              <div className="projects-modal-hero">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              {/* MAIN MODAL CONTENT */}
              <div className="projects-modal-layout">
                <div className="projects-modal-main-text">
                  <h2>{selectedProject.title}</h2>
                  <p className="main-desc">
                    {selectedProject.fullDescription?.map(
                      (paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ),
                    )}
                  </p>

                  <div className="detail-block">
                    <h4>Tech Stack</h4>
                    <p>{selectedProject.tags.join(", ")}</p>
                  </div>
                  {selectedProject.keyFeatures && (
                    <div className="detail-block">
                      <h4>Nyckelfunktioner</h4>
                      <p>{selectedProject.keyFeatures}</p>
                    </div>
                  )}
                  {selectedProject.challenges && (
                    <div className="detail-block">
                      <h4>Utmaningar & Lösningar</h4>
                      <p>{selectedProject.challenges}</p>
                    </div>
                  )}

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="projects-modal-link"
                    >
                      Visit Live Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
