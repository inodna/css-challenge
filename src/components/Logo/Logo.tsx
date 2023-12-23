import SiteLogo from "../../assets/logo.svg?react";

interface SiteLogoProps {
  className?: string;
}

export const Logo = ({ className }: SiteLogoProps) => {
  return (
    <a href="/" className={className}>
      <SiteLogo height={48} />
    </a>
  );
};
