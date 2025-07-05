import {
  Plus,
  Share2,
  Upload,
  Download,
  Eye,
  Filter,
  SortAsc,
  ChevronRight,
  ChevronsRight,
  BetweenHorizonalEnd,
  Split,
} from "lucide-react";

export default function Toolbar() {
  return (
    <div className="w-full border-b px-4 py-2 flex justify-between items-center bg-white shadow-sm">
      {/* Left section */}
      <div className="flex gap-2 items-center text-sm">
        <span className="font-medium text-gray-700">
          Tool bar
          <ChevronsRight className="inline w-4 h-4 mr-1" />
        </span>
        <button
          onClick={() => console.log("Hide Fields clicked")}
          className="text-gray-600 hover:underline flex items-center gap-1"
        >
          <Eye className="w-4 h-4" />
          Hide fields
        </button>

        <button
          onClick={() => console.log("Sort clicked")}
          className="text-gray-600 hover:underline flex items-center gap-1"
        >
          <SortAsc className="w-4 h-4" />
          Sort
        </button>
        <button
          onClick={() => console.log("Filter clicked")}
          className="text-gray-600 hover:underline flex items-center gap-1"
        >
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button
          onClick={() => console.log("Cell View clicked")}
          className="text-gray-600 hover:underline flex items-center gap-1"
        >
          <BetweenHorizonalEnd className="w-4 h-4" />
          Cell view
        </button>
      </div>

      {/* Right section */}
      <div className="flex gap-3 items-center">
        <button
          style={{ border: "1px solid grey" }}
          onClick={() => console.log("Import clicked")}
          className="text-gray-600 hover:bg-gray-100 px-2 py-1 rounded flex items-center gap-1"
        >
          <Upload className="w-4 h-4" />
          Import
        </button>
        <button
          style={{ border: "1px solid grey" }}
          onClick={() => console.log("Export clicked")}
          className="text-gray-600 hover:bg-gray-100 px-2 py-1 rounded flex items-center gap-1"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
        <button
          style={{ border: "1px solid grey" }}
          onClick={() => console.log("Share clicked")}
          className="text-gray-600 hover:bg-gray-100 px-2 py-1 rounded flex items-center gap-1"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button
          onClick={() => console.log("New Action clicked")}
          className="bg-green-700 text-white text-sm font-medium px-3 py-1.5 rounded hover:bg-green-800 flex items-center gap-1"
          style={{ backgroundColor: "#4c6b50" }}
        >
          <Split className="w-4 h-4" />
          New Action
        </button>
      </div>
    </div>
  );
}
