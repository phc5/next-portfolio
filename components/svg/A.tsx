export default function A({ svgPrimaryColor, svgSecondaryColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      enableBackground="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
    >
      <g>
        <g>
          <circle cx="256" cy="256" fill={svgPrimaryColor} r="256" />
        </g>
        <path
          d="m502.688 324.608-205.308-205.308-169.14 273.4 119.14 119.14c2.863.095 5.734.16 8.62.16 117.618 0 216.697-79.326 246.688-187.392z"
          fill={svgSecondaryColor}
        />
        <path
          d="m297.38 119.3h-82.76l-86.38 273.4h60.83l20.5-64.9h92.86l20.5 64.9h60.83zm-69.49 150.5 28.11-88.96 28.11 88.96z"
          fill="#f8fffb"
        />
        <path
          d="m297.38 119.3h-41.38v61.54l28.11 88.96h-28.11v58h46.43l20.5 64.9h60.83z"
          fill="#d8d8d8"
        />
      </g>
    </svg>
  );
}