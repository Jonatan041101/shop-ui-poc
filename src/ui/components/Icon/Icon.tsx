import Plus from "../assets/Plus"
import { ISvgProps } from "./interfaces/icon-interface"

interface IIconProps{
    icon:IconName
    svg:ISvgProps
}
export default function Icon({icon,svg}:IIconProps):JSX.Element{
    return <>
    {icon === IconName.PLUS && <Plus svg={svg}/>}
    </>
}