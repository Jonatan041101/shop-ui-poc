import Plus from "../assets/components/Plus";
import { IconName } from "./enum/icon-name-enum";
import { ISvgProps } from "./interfaces/icon-interface";

interface IIconProps {
  icon: IconName;
  svg: ISvgProps;
}
export default function Icon({ icon, svg }: IIconProps): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      {icon === IconName.PLUS && <Plus svg={svg} />}
    </div>
  );
}
