"use client";

interface TabsProps {
  activeTab: "plan" | "saved";
  onChange: (tab: "plan" | "saved") => void;
}

export default function Tabs({ activeTab, onChange }: TabsProps) {
  return (
    <div className="font-inter flex h-[40px] items-center rounded-[8px] border border-[#292e36] bg-[#15181e] p-1">
      <button
        onClick={() => onChange("plan")}
        className={`h-[32px] rounded-md px-5 text-[11px] font-semibold transition ${
          activeTab === "plan"
            ? "bg-black text-[#c8ff00]"
            : "bg-transparent text-[#858b95] hover:text-white"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => onChange("saved")}
        className={`h-[32px] rounded-md px-5 text-[11px] font-semibold transition ${
          activeTab === "saved"
            ? "bg-black text-[#c8ff00]"
            : "bg-transparent text-[#858b95] hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
}