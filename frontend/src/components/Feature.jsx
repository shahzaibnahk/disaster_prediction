import React from "react";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4">
      {icon}
      <h3 className="text-xl font-bricolage font-medium">{title}</h3>
      <p className="text-zinc-300">{description}</p>
    </div>
  );
};

export default Feature;
