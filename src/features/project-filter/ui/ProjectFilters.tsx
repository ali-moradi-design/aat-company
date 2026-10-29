"use client";

import {
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/entities/project/model/types";
import { cn } from "@/shared/lib/cn";

/**
 * Category filter. The reference uses real checkboxes and lets several
 * categories be combined; the selection is "or" (show projects matching at
 * least one). An empty selection means "Show all".
 */
export function ProjectFilters({
  active,
  onChange,
}: {
  active: ProjectCategory[];
  onChange: (next: ProjectCategory[]) => void;
}) {
  const allActive = active.length === 0;

  const toggle = (category: ProjectCategory) => {
    const next = active.includes(category)
      ? active.filter((value) => value !== category)
      : [...active, category];
    onChange(next);
  };

  return (
    <form
      className="project-items__filters-list"
      role="group"
      aria-label="Filter projects by category"
      onSubmit={(event) => event.preventDefault()}
    >
      <p className="sr-only">
        Multiple categories are possible. Projects are shown that have at least
        one of the selected categories. Choose “Show all” to show every project.
      </p>

      <div
        className={cn(
          "project-items__filters-item project-items__filters-item--all",
          allActive && "is-active",
        )}
      >
        <label className="project-items__filter-label">
          <input
            type="checkbox"
            name="project-category"
            value=""
            checked={allActive}
            onChange={() => onChange([])}
            className="project-items__filter-input"
          />
          <span className="project-items__filter-text">Show all</span>
        </label>
      </div>

      {PROJECT_CATEGORIES.map((category) => (
        <div key={category} className="project-items__filters-item">
          <label className="project-items__filter-label">
            <input
              type="checkbox"
              name="project-category"
              value={category}
              checked={active.includes(category)}
              onChange={() => toggle(category)}
              className="project-items__filter-input"
            />
            <span className="project-items__filter-text">{category}</span>
          </label>
        </div>
      ))}
    </form>
  );
}
