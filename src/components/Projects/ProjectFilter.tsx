interface ProjectFilterProps {
  tags: string[];
  selectedTag: string;
  onSelect: (tag: string) => void;
}

export default function ProjectFilter({
  tags,
  selectedTag,
  onSelect,
}: ProjectFilterProps) {
  return (
    <div className="projects__filter">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={`projects__filter-btn ${tag === selectedTag ? "active" : ""}`}
          aria-pressed={tag === selectedTag}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
