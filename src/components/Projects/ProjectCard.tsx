import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  galleryIndex: number;
  onChangeGallery: (dir: number) => void;
  onOpen: () => void;
}

export default function ProjectCard({
  project,
  galleryIndex,
  onChangeGallery,
  onOpen,
}: ProjectCardProps) {
  return (
    <div className="project-banner-card">
      <div className="project-banner-card__info">
        {/* Project img */}
        <div className="project-img">
          {project.phone ? (
            <img
              src={project.phone}
              alt={project.title}
              className="project-img__phone"
              draggable={false}
            />
          ) : (
            <div className="laptop">
              <div className="laptop__screen">
                <img
                  src={
                    project.gallery
                      ? project.gallery[galleryIndex]
                      : project.image
                  }
                  alt={project.title}
                  draggable={false}
                />
              </div>
              <div className="laptop__base" aria-hidden />
            </div>
          )}
          {project.gallery && (
            <>
              <button
                className="project-img__arrow project-img__arrow--prev"
                aria-label="Föregående bild"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => onChangeGallery(-1)}
              >
                ‹
              </button>
              <button
                className="project-img__arrow project-img__arrow--next"
                aria-label="Nästa bild"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => onChangeGallery(1)}
              >
                ›
              </button>
              <div className="project-img__dots" aria-hidden>
                {project.gallery.map((_, i) => (
                  <span
                    key={i}
                    className={
                      i === galleryIndex
                        ? "active"
                        : ""
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="project-banner-card__content">
          {/* Title, description and button below */}
          <h3 className="project-banner-card__title">
            {project.title}
          </h3>
          <p className="project-banner-card__desc">
            {project.description}
          </p>
          <ul className="project-banner-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-banner-card__links">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
          </div>
          <button
            onClick={onOpen}
          className="project-banner-card__btn-black"
          >
            Läs mer
          </button>
        </div>
      </div>
    </div>
  );
}
