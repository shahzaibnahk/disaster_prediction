// components/ResultModal.jsx
import React from "react";

const ResultModal = ({ title, result, onClose }) => {
  console.log(result);
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <div className="bg-zinc-800 p-4 rounded text-white text-lg">
          {typeof result === "string" ? (
            <p className="text-white text-lg">{result}</p>
          ) : (
            Object.entries(result).map(([key, value]) => (
              <p key={key}>
                <strong className="capitalize">
                  {key.replace(/_/g, " ")}:
                </strong>{" "}
                {value}
              </p>
            ))
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
