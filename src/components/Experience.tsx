import { Reveal } from "@/components/Reveal";
import { achievements, education, journey } from "@/content/site";

function DeviceCluster() {
  return (
    <div className="device-cluster" aria-hidden="true">
      <div className="device">
        <span className="device-notch" />
        <div className="device-screen">
          <span className="device-bar" />
          <div className="device-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="device-bar" />
        </div>
      </div>

      <div className="device device--mid">
        <span className="device-notch" />
        <div className="device-screen device-screen--dark">
          <span className="device-bar" />
          <span className="device-accent" />
          <span className="device-bar" />
          <span className="device-bar" />
        </div>
      </div>

      <div className="device device--last">
        <span className="device-notch" />
        <div className="device-screen">
          <span className="device-tile" />
          <span className="device-bar" />
          <span className="device-bar" />
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="card night" id="journey" aria-labelledby="journey-title">
      <span className="section-ghost" aria-hidden="true">
        Journey
      </span>

      <DeviceCluster />

      <Reveal>
        <div className="section-head">
          <h2 id="journey-title">/ Academic Journey &amp; Activities</h2>
          <span className="meta">{journey.meta}</span>
        </div>
      </Reveal>

      <div className="exp-body">
        {journey.roles.map((role, index) => (
          <Reveal key={role.org} delay={index * 60}>
            <div className="exp-row">
              <div>
                <p className="exp-company">{role.org}</p>
                <p className="exp-role">{role.role}</p>
                <p className="exp-summary">{role.summary}</p>
              </div>
              <p className="exp-when">{role.period}</p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="journey-more">
            <div>
              <h3 className="journey-more-title">Education</h3>
              <p className="journey-school">{education.school}</p>
              <p className="journey-sub">
                {education.program} · {education.period}
              </p>
              <p className="journey-sub">GPA {education.gpa}</p>
            </div>

            <div>
              <h3 className="journey-more-title">Achievements</h3>
              <ul className="journey-awards">
                {achievements.map((item) => (
                  <li key={item.title}>
                    <span>{item.title}</span>
                    <span className="journey-award-year">{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
