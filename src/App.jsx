import Toolbar from "./components/Toolbar";
import Tabs from "./components/Tabs";
import SpreadsheetTable from "./components/SpreadsheetTable";

export default function App() {
  return (
    <div className="bg-[#fafafa] min-h-screen w-full text-sm">
      <div className="max-w-[100vw] overflow-x-auto">
        <Toolbar />
        <Tabs />
        <SpreadsheetTable />
      </div>
    </div>
  );
}
