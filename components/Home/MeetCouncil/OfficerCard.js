import Image from "next/image";

export default function OfficerCard({ name, role, photo }) {
  return (
    <div className="flex flex-col min-w-[25rem] w-[25rem]">
      <div className="relative w-full aspect-square bg-[#242424] border border-dashed border-[#8E8E8E] flex items-center justify-center mb-[1.2rem] overflow-hidden">
        {/* Corner alignment markers */}
        <div className="absolute top-[-1px] left-[-1px] w-[8px] h-[8px] bg-[#FF5154] z-10"></div>
        <div className="absolute top-[-1px] right-[-1px] w-[8px] h-[8px] bg-[#FF5154] z-10"></div>
        <div className="absolute bottom-[-1px] left-[-1px] w-[8px] h-[8px] bg-[#FF5154] z-10"></div>
        <div className="absolute bottom-[-1px] right-[-1px] w-[8px] h-[8px] bg-[#FF5154] z-10"></div>
        {photo && (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-col items-start gap-1">
        <h4 className="text-[1.4rem] font-semibold text-white leading-tight tracking-wide truncate w-full">
          {name}
        </h4>
        <p className="text-[#8C8C8C] text-[1rem] leading-relaxed font-normal truncate w-full">
          {role}
        </p>
      </div>
    </div>
  );
}
