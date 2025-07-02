import Image, { ImageProps } from "next/image";

interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

const LOGO = {
  src: "/img/Group1.png",
  alt: "RiskFi Logo",
  width: 60,
  height: 60,
} as const;

export const Logo = ({
  className = '',
  ...props
}: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        priority
        {...props}
      />
    </div>
  );
};

export default Logo;
