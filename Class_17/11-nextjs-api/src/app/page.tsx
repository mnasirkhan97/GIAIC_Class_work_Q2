import Image from "next/image";
import Auth from "./components/Auth";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Auth />
    </div>
  );
}
