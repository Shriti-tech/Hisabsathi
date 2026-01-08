import React from "react";
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

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
    className="p-2 bg-black text-white rounded-full flex items-center justify-center w-8 h-8 "
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-input font-outfit font-light text-sm md:text-base lg:text-lg"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="font-outfit bg-background w-full flex justify-center pt-8 md:pt-16 lg:pt-20 px-4 md:px-6 left-0 right-0 z-40 bottom-0 ">
      <div className="flex flex-col max-w-7xl bg-white shadow-sm mx-auto w-full py-6 md:py-10 lg:py-12 px-4 md:px-8 lg:px-12 border-2 border-inputBorder rounded-t-2xl md:rounded-t-3xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Logo and Social Section */}
          <div className="flex flex-col gap-4  lg:gap-3 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <p className="text-sm text-input md:hidden">
              © {new Date().getFullYear()} Hisaab Sathi. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <SocialLink
                href="https://www.instagram.com/hisaabsathi"
                icon={<Instagram className="w-4 h-4" />}
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/hisaabsathi"
                icon={<Facebook className="w-4 h-4" />}
                label="Facebook"
              />
              <SocialLink
                href="https://x.com/hisaabsathi"
                icon={<Twitter className="w-4 h-4" />}
                label="Twitter"
              />
              <SocialLink
                href="https://www.linkedin.com/company/hisaab-sathi"
                icon={<Linkedin className="w-4 h-4" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://youtube.com/@hisaabsathi"
                icon={<Youtube className="w-4 h-4" />}
                label="YouTube"
              />
            </div>
          </div>

          {/* Links Sections Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 lg:col-span-8">
            {/* Quick Links Section */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-semibold text-sm md:text-base lg:text-lg">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                <FooterLink href="/#features">Features</FooterLink>
                <FooterLink href="/">Pricing</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </div>
            </div>
            {/* Legal Section */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-semibold text-sm md:text-base  lg:text-lg">
                Legal
              </h4>
              <div className="flex flex-col gap-2 text-base md:text-sm">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/refund-policy">Refund Policy</FooterLink>
                <FooterLink href="/terms-of-service">
                  Terms of Service
                </FooterLink>
                <FooterLink href="/">Refer & Earn</FooterLink>
              </div>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="font-semibold text-sm md:text-base lg:text-lg">
                Explore
              </h4>
              <div className="flex flex-col gap-2">
                <FooterLink href="/">Product Updates</FooterLink>
                <FooterLink href="https://docs.google.com/forms/d/e/1FAIpQLSd3tZ8PRqxxXEBLcIBFROxgeUq_JAuzVXuNxDzHAwzh3dgtfQ/viewform?usp=dialog">
                  We are hiring
                </FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-borderColor mt-8 md:mt-12 mb-6 md:mb-8 hidden md:block"></div>
        <div className="text-center text-sm hidden md:block">
          <p>© {new Date().getFullYear()} Hisaab Sathi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
