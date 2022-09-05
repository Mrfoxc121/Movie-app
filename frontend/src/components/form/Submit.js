import React from "react";

export default function Submit({ value }) {
  return (
    <div>
      <input
        type="submit"
        value={value}
        className="px-8 py-1 w-full bg-white text-lg hover:bg-opacity-70 rounded transition font-semibold"
      />
    </div>
  );
}
