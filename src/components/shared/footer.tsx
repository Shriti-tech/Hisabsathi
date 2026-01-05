import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "./logo";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9  bg-black  text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-background w-full flex justify-center pt-12 md:pt-20 px-4 font-outfit left-0 right-0 z-40 bottom-0">
      <div className="flex flex-col max-w-7xl bg-white shadow-sm mx-auto w-full py-8 md:py-12 px-6 md:px-12 border-2 border-inputBorder rounded-t-3xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6  ">
            <div className="flex items-center gap-3 ">
              <Logo />
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 ">
              <SocialLink
                href="#"
                icon={<Instagram size={18} />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<Facebook size={18} />}
                label="Facebook"
              />
              <SocialLink
                href="#"
                icon={<Twitter size={18} />}
                label="Twitter"
              />
              <SocialLink
                href="#"
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h4 className="">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/company">Company</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="">Legal</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/refund">Refund Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/refer-and-earn">Refer & Earn</FooterLink>
            </nav>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <h4 className="">Explore</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/blogs">Blogs</FooterLink>
              <FooterLink href="/updates">Product Updates</FooterLink>
              <FooterLink href="/careers">We are hiring</FooterLink>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 md:mt-12 mb-6 md:mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm ">
          <p>© {new Date().getFullYear()} Hisaab Sathi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
