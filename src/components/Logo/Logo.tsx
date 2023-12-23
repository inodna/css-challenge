import SiteLogo from "../../assets/logo.svg?react";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

interface SiteLogoProps {
  className?: string;
}

export const Logo = ({ className }: SiteLogoProps) => {
  return (
    <a href="/" className={className}>
      <SiteLogo height={48} />
      <VisuallyHidden>
        Lorem ipsum dolor sit amet consectetur adipis
      </VisuallyHidden>
    </a>
  );
};
