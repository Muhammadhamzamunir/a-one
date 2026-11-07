import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/constants/site";
export function Footer() {
  return (
    <footer className="bg-[#08131f] text-white">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_.8fr_1fr]">
        <div>
          <img
            src="/brand/a-one-logo.jpg"
            alt="A-One Maintenance Service logo"
            className="h-24 w-36 rounded-sm bg-white object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            HVAC, electrical, appliance and maintenance services for homes,
            workplaces and facilities across Lahore.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-extrabold text-white/70">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li>
              <Link className="focus-ring hover:text-brand-cyan" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="focus-ring hover:text-brand-cyan" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link
                className="focus-ring hover:text-brand-cyan"
                to="/buy-&-sale"
              >
                Pre-owned
              </Link>
            </li>
            <li>
              <Link className="focus-ring hover:text-brand-cyan" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="focus-ring hover:text-brand-cyan" to="/#brands">
                Brands
              </Link>
            </li>
            <li>
              <Link className="focus-ring hover:text-brand-cyan" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="focus-ring hover:text-brand-cyan" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-extrabold text-white/70">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-white/60">
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-brand-cyan" size={17} />
              {SITE.address}
            </li>
            <li>
              <a className="flex gap-3" href={SITE.phoneHref}>
                <Phone className="shrink-0 text-brand-cyan" size={17} />
                {SITE.phonePrimary}
              </a>
            </li>
            <li>
              <a className="flex gap-3 break-all" href={`mailto:${SITE.email}`}>
                <Mail className="shrink-0 text-brand-cyan" size={17} />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="container-shell flex flex-col gap-4 py-6 text-xs text-white/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} A-One Maintenance Service.</p>
          <div className="flex gap-5">
            <Link
              className="focus-ring hover:text-brand-cyan"
              to="/privacy-policy"
            >
              Privacy
            </Link>
            <Link className="focus-ring hover:text-brand-cyan" to="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
