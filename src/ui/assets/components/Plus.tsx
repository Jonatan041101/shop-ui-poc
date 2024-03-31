import { ISvgProps } from "../../Icon/interfaces/icon-interface";

interface IPlusProps {
  svg: ISvgProps;
}

export default function Plus({ svg }: IPlusProps) {
  return (
    <svg
      width={svg.width}
      height={svg.height}
      viewBox="0 0 24 24"
      fill={"red"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V21"
        stroke={svg.fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12L21 12"
        stroke={svg.fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
