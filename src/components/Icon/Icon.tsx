import spriteHref from "/src/assets/icons/sprite.svg";

const Icon = ({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) => (
  <svg width={size} height={size} className={className}>
    <use href={`${spriteHref}#${name}`} />
  </svg>
);

export default Icon;
