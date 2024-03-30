interface IBubbleTittleProps {
  name: string;
  className: string;
}

export default function BubbleTittle({
  name,
  className,
}: IBubbleTittleProps): JSX.Element {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center justify-center rounded-md relative">
        <div className="h-4 bg-red w-4 bg-black rotate-45 rounded-[4px] absolute left-[-6px]"></div>
        <span className="text-white text-xs text-center bg-black p-2 rounded-md relative z-10">
          {name}
        </span>
      </div>
    </div>
  );
}
