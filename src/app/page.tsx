import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex h-screen justify-center items-center bg-gradient-to-r from-slate-950 via-black to-teal-950">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <div className="text-2xl font-extrabold text-white font-mono">
            What can I help you with?
          </div>
          <div className="w-full">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}
