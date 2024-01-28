import Image from "next/image";
import Cosmic from "./components/Cosmic/Cosmic";
import Classic from "./components/Classic/Classic";
import Atomic from "./components/Atomic/Atomic";
import "./globals.css";
export default function Home() {
  return (
    <main className=" flex px-4 w-full h-screen">
      <div className="w-full">
        <h1 className="text-2xl font-bold my-3">Latest Results</h1>
        <div className="flex flex-col gap-4">
          <Cosmic />
          <Classic />
          <Atomic />
        </div>
      </div>
    </main>
  );
}
