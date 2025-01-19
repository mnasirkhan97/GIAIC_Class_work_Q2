import Image from "next/image";
import SimpleForm from "./components/SimpleForm";
import ExampleForm from "./components/ExampleForm";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <ExampleForm />
      {/* React Form Validation */}
      {/* <SimpleForm /> */}
    </div>
  );
}
