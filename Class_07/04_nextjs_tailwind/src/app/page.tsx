export default function Home() {
  return (
    <>
      <div className="flex justify-between bg-gray-400 p-5 text-pretty">
        <div className="pl-4">Logo</div>
        <div>
          <ul className="flex space-x-5">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex space-x-2 pr-8">
          <button className="border">Login</button>
          <button className="border">Sign up</button>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold p-5">Hello</h1>
      <p className="text-pretty p-5 bg-cyan-800 text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam.
      </p> */}
    </>
  );
}
