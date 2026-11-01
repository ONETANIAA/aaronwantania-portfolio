"use client";

import { useState } from "react";
import { ArrowUpRight, CloseIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/content/site";

function ServicePhone() {
  return (
    <div className="service-phone" aria-hidden="true">
      <div className="phone">
        <div className="phone-ui">
          <div className="p-nav">
            <span className="p-dot" />
            <span className="p-dot" />
            <span className="p-dot p-dot--on" />
          </div>
          <span className="p-title">What brings you here today?</span>
          <div className="p-row">
            <span className="p-chip" />
            <span className="p-chip" />
          </div>
          <div className="p-card p-card--accent">
            <span className="p-orb" />
          </div>
          <div className="p-row">
            <span className="p-chip" />
            <span className="p-chip" />
            <span className="p-chip" />
          </div>
          <div className="p-card" />
          <div className="p-row">
            <span className="p-chip" />
            <span className="p-chip" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [openId, setOpenId] = useState<string | null>(skills[0]?.id ?? null);

  return (
    <section className="service" id="skills" aria-labelledby="skills-title">
      <Reveal>
        <h2 className="service-title" id="skills-title">
          / Skills &amp; Toolbox
        </h2>
      </Reveal>

      <div className="service-list">
        {skills.map((skill, index) => {
          const isOpen = openId === skill.id;
          const panelId = `service-panel-${skill.id}`;

          return (
            <Reveal key={skill.id} delay={index * 70}>
              <div className="service-item" data-open={isOpen}>
                <div className="service-row" data-hidden={isOpen}>
                  <div>
                    <button
                      type="button"
                      className="service-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : skill.id)}
                    >
                      <span className="service-name">{skill.name}</span>
                      <ArrowUpRight className="service-arrow" />
                    </button>
                  </div>
                </div>

                <div
                  className="service-panel"
                  id={panelId}
                  data-open={isOpen}
                  inert={!isOpen}
                  aria-hidden={!isOpen}
                >
                  <div className="service-panel-inner">
                    <div className="service-panel-body">
                      <h3>{skill.name}</h3>
                      <p>{skill.blurb}</p>
                      <p className="service-tools">{skill.tools.join(" · ")}</p>
                      <ServicePhone />
                      <button
                        type="button"
                        className="service-close"
                        aria-label={`Close ${skill.name}`}
                        onClick={() => setOpenId(null)}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
