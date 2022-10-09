import React from "react";

// variant: "blue" | "black";
function Progress({ variant = "blue", current, total }) {
  return (
    <div className="w-full rounded-full bg-gray-200">
      <div
        className={`h-3 rounded-full bg-gradient-to-r ${
          variant === "blue"
            ? "from-[#185ADB]/30 to-[#185ADB]"
            : "from-dark/30 to-dark/80"
        }`}
        style={{
          width: `${(current * 100) / total}%`,
        }}></div>
    </div>
  );
}

export default Progress;
