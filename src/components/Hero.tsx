import { ArrowUpRight, SocialIcon } from "@/components/Icons";
import { Portrait } from "@/components/Portrait";
import { hero, nav, socials } from "@/content/site";

export function Hero() {
  return (
    <section className="card hero" id="top" aria-labelledby="hero-title">
      <nav className="hero-nav" aria-label="Sections">
        <div className="hero-nav-links">
          {nav.map((item) => (
            <a key={item.href} className="hero-link" href={item.href}>
              {item.label}
              {item.count ? (
                <span className="count" aria-hidden="true">
                  [{item.count}]
                </span>
              ) : null}
            </a>
          ))}
        </div>

        <a className="btn btn-dark" href={hero.navCta.href}>
          <span>{hero.navCta.label}</span>
          <ArrowUpRight />
        </a>
      </nav>

      <h1 className="hero-name" id="hero-title">
        <svg
          viewBox="0 0 1000 100"
          role="img"
          aria-label={`${hero.firstName} ${hero.lastName}`}
        >
          <text
            x="500"
            y="94"
            textAnchor="middle"
            textLength="1000"
            lengthAdjust="spacing"
          >
            <tspan className="hn-hollow">{hero.firstName}</tspan>
            <tspan className="hn-solid" dx="42">
              {hero.lastName}
            </tspan>
          </text>
        </svg>
      </h1>

      <div className="hero-stage">
        <div className="hero-portrait">
          <Portrait />
        </div>

        <div className="hero-intro">
          <h2>{hero.role}</h2>
          <p>{hero.blurb}</p>
          <a className="btn btn-dark" href={hero.cta.href}>
            {hero.cta.label}
            <ArrowUpRight />
          </a>
        </div>

        <ul className="hero-socials" aria-label="Social profiles">
          {socials.map((social) => {
            const external = social.href.startsWith("http");

            return (
              <li key={social.id}>
                {social.href ? (
                  <a
                    className="pill-social"
                    href={social.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    <SocialIcon id={social.id} />
                    {social.label}
                  </a>
                ) : (
                  <span
                    className="pill-social pill-social--idle"
                    title={`${social.label} link coming soon`}
                  >
                    <SocialIcon id={social.id} />
                    {social.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
