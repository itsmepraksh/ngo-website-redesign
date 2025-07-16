const ClippedImageSVG = ({
  clipImage,
  clipStyle = '',
  elemStyle = '',
  imageRotation = 0 // this controls internal image angle
}) => {
  return (
    <svg
      className={elemStyle}
      viewBox="0 0 143 134"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clipShape">
          <path d="M71.0363 133.671C32.0837 133.671 0.506334 102.094 0.506333 63.1411C0.506333 24.1885 32.0837 1.31288e-06 71.0363 8.48376e-07C109.989 3.8387e-07 142.18 7.52377 142.18 46.4764C142.18 85.4291 109.989 133.671 71.0363 133.671Z" />
        </clipPath>
      </defs>

      <g transform={`rotate(${imageRotation}, 71.5, 67)`}>
        <image
          href={clipImage}
          width="143"
          height="134"
          clipPath="url(#clipShape)"
          preserveAspectRatio="xMidYMid slice"
          className={clipStyle}
        />
      </g>
    </svg>
  );
};

export default ClippedImageSVG;
