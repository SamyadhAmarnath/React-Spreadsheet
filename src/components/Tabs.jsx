import { Ellipsis, Link2, Plus, RefreshCcw, Split } from "lucide-react";

export default function Tabs() {
  return (
    <div className="w-full bg-white-100 px-4 py-2 flex items-center justify-between border-b">
      <div className="flex gap-2">
        <button
          onClick={() => console.log("Financial Overview clicked")}
          className="bg-gray-100 text-sm px-3 py-1.5 rounded   text-gray-800 font-medium shadow-sm"
          style={{ textAlign: "left" }}
        >
          <Link2 className="w-4 h-4 inline mr-1 text-blue-500" />
          Q3 Financial Overview
          <RefreshCcw className="w-4 h-4 inline ml-1 text-red-500" />
        </button>
      </div>
      <button
        onClick={() => console.log("ABC clicked")}
        className="flex items-center justify-center border text-gray-600"
        style={{ backgroundColor: "#d3e0d5" }}
      >
        <Split className="w-4 h-4 mr-1" />
        ABC
        <Ellipsis className="w-4 h-4" />
      </button>
      <button
        onClick={() => console.log("Answer a question clicked")}
        className="flex items-center justify-center border  text-gray-600 hover:bg-gray-100"
        style={{ backgroundColor: "#dccffc" }}
      >
        <Split className="w-4 h-4 mr-1 text-white" />
        Answer a question
        <Ellipsis className="w-4 h-4" />
      </button>
      <button
        onClick={() => console.log("Extract clicked")}
        className="flex items-center justify-center border  text-gray-600 hover:bg-gray-100"
        style={{ backgroundColor: "#fac2af" }}
      >
        <Split className="w-4 h-4 mr-1 text-white" />
        Extract
        <Ellipsis className="w-4 h-4" />
      </button>
    </div>
  );
}
