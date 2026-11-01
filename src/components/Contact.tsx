import { ArrowUpRight, SocialIcon } from "@/components/Icons";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { activeSocials, contact } from "@/content/site";

export function Contact() {
  return (
    <section
      className="card contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner">
        <Reveal>
          <p className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {contact.label}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <h2 id="contact-title">{contact.headline}</h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="contact-blurb">{contact.blurb}</p>
        </Reveal>

        <Reveal delay={170}>
          <a className="btn btn-dark" href={`mailto:${contact.email}`}>
            {contact.cta}
            <ArrowUpRight />
          </a>
        </Reveal>

        <Reveal delay={220} className="contact-strip-reveal">
          <div className="contact-strip">
            <span className="author-chip">
              <span className="avatar">
                <Portrait variant="avatar" />
              </span>
              Aaron Wantania
            </span>

            <div className="contact-socials">
              {activeSocials.map((social) => {
                const external = social.href.startsWith("http");
                return (
                  <a
                    key={social.id}
                    className="pill-social"
                    href={social.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    <SocialIcon id={social.id} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
