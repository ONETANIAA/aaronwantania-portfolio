import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Year } from "@/components/Year";
import { activeSocials, nav } from "@/content/site";

export default function Home() {
  return (
    <main className="shell">
      <Hero />
      <Experience />
      <Services />
      <Work />
      <Contact />

      <footer className="colophon">
        <div className="colophon-id">
          <span className="colophon-name">Aaron Laurens Misael Wantania</span>
          <span>Information Systems Student — UMN</span>
        </div>

        <nav className="colophon-nav" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="colophon-end">
          <span>
            © <Year /> Aaron Wantania
          </span>
          <div className="colophon-socials">
            {activeSocials.map((social) => {
              const external = social.href.startsWith("http");
              return (
                <a
                  key={social.id}
                  href={social.href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}
