"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { WorkThumb } from "@/components/WorkThumbs";
import {
  projects,
  workFilters,
  type ProjectCategory,
  type Project,
} from "@/content/site";

type Filter = "all" | ProjectCategory;

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div
        className={`work-thumb${
          project.image?.fit === "contain" ? " work-thumb--contain" : ""
        }`}
      >
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 860px) 100vw, 760px"
            style={{
              objectFit: project.image.fit ?? "cover",
              objectPosition: project.image.position ?? "center",
            }}
          />
        ) : (
          <WorkThumb slug={project.slug} placeholder={project.placeholder} />
        )}
      </div>

      <div className="work-title-row">
        <h3 className="work-title">{project.title}</h3>
        {project.href ? (
          <ArrowUpRight className="work-card-arrow" />
        ) : null}
      </div>

      <p className="work-summary">{project.summary}</p>

      <div className="work-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  return (
    <section className="card work" id="work" aria-labelledby="work-title">
      <span className="section-ghost" aria-hidden="true">
        Projects
      </span>

      <Reveal>
        <div className="work-head">
          <h2 id="work-title">/ Projects</h2>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="work-toolbar">
          <div className="work-tabs" role="tablist" aria-label="Filter projects">
            {workFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`work-tab-${item.id}`}
                className="work-tab"
                aria-selected={filter === item.id}
                aria-controls="work-grid"
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="work-count" aria-live="polite">
            {String(visible.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>
      </Reveal>

      <div
        className="work-grid"
        id="work-grid"
        role="tabpanel"
        aria-labelledby={`work-tab-${filter}`}
      >
        {visible.length === 0 ? (
          <p className="work-empty">No projects in this category yet.</p>
        ) : (
          visible.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              {project.href ? (
                <a
                  className="work-card"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CardBody project={project} />
                </a>
              ) : (
                <div className="work-card work-card--static">
                  <CardBody project={project} />
                </div>
              )}
            </Reveal>
          ))
        )}
      </div>
    </section>
  );
}
