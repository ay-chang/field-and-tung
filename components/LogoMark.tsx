export default function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <rect width="100" height="100" fill="#1a2d6b" />
      <polyline points="15,75 50,35 85,75" fill="none" stroke="#c4b48a" strokeWidth="12" strokeLinejoin="miter" />
      <polyline points="15,58 50,18 85,58" fill="none" stroke="#c4b48a" strokeWidth="12" strokeLinejoin="miter" />
    </svg>
  );
}
