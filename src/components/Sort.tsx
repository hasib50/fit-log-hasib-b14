"use client";

interface SortProps {
  value: "default" | "duration" | "calories" | "rating";
  onChange: (
    value: "default" | "duration" | "calories" | "rating"
  ) => void;
}

export default function Sort({ value, onChange }: SortProps) {
  return (
    <div className="font-inter flex h-[34px] items-center rounded-lg border border-[#292e36] bg-[#12151a]">
      <select
  value={value}
  onChange={(event) =>
    onChange(
      event.target.value as
        | "default"
        | "duration"
        | "calories"
        | "rating"
    )
  }
  className="h-full cursor-pointer appearance-none bg-transparent pl-3 pr-8 text-[11px] text-[#d0d3d8] outline-none"
>
  <option value="default" className="bg-[#12151a] text-white">
    Default
  </option>
  <option value="duration" className="bg-[#12151a] text-white">
    Duration
  </option>
  <option value="calories" className="bg-[#12151a] text-white">
    Calories
  </option>
  <option value="rating" className="bg-[#12151a] text-white">
    Rating
  </option>
</select>

      <span className="pointer-events-none -ml-6 mr-3 text-[10px] text-[#858b95]">
        ⌄
      </span>
    </div>
  );
}