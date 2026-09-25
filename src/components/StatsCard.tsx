interface StatsCardProps {
  label: string;
  value: string | number;
}

export default function StatsCard({
  label,
  value,
}: StatsCardProps) {
  return (
    <div className="relative px-6 py-6 sm:px-7">
      <p className="text-[11px] text-[#858b95]">
        {label}
      </p>

      <p
        className={`mt-2 text-[38px] font-black leading-none tracking-[-1px] ${
          label === "Exercises"
            ? "text-[#c8ff00]"
            : "text-white"
        }`}
      >
        {value}
      </p>

{/* Short m divider */}

      <span className="absolute right-0 top-1/2 hidden h-[42px] w-px -translate-y-1/2 bg-[#282d35] sm:block" />
    </div>
  );
}