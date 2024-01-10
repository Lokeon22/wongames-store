const Loading = () => (
  <div style={{ maxWidth: "15rem" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
    >
      <title>Loading...</title>
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="transparent"
        stroke="#fff"
        strokeWidth="8"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 150;150 150;150 0"
          keyTimes="0;0.5;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;0;-150"
          keyTimes="0;0.5;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="0.9rem"
      >
        Loading...
      </text>
    </svg>
  </div>
)

export default Loading
