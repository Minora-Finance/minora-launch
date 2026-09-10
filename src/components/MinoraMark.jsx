export default function MinoraMark({ width = 24, height = 22, className = '' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 90"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ color: 'var(--color-primary)', transform: 'skewX(-25deg)' }}
    >
      <polyline
        points="14,78 34,20 50,55 68,20 78,55"
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="78" cy="68" r="11" fill="none" stroke="currentColor" strokeWidth="14" />
    </svg>
  )
}
