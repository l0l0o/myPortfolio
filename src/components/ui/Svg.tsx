export default function Svg({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <picture className={className}>
      <img src={src} alt={alt} width={width} height={height} />
    </picture>
  );
}
