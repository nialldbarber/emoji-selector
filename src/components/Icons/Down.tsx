type DownIconProps = {
  className?: string
  onClick: () => void
}

const DownIcon = ({ className, onClick }: DownIconProps) => (
  <div className={className} onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
)

export default DownIcon
