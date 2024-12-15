import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const url = await fetch("https://simple-books-api.glitch.me");
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const res = await url.json();
  console.log("res ==> :", res);

  //====> map
  res.map((item: any) => {
    console.log("Map item => :", item);
  });

  //====> For of loop
  for (const element of res) {
    console.log("for of element => :", element);
  }
  // ((item: any) => {
  //   console.log("for of item => :", item);
  // });
  return (
    <>
      {/* <h1>Books APIs</h1> */}
      {/* <p>{res.message}</p> */}
      {/* Static Data Rendering on Frontend */}
      {/* <p>ID :{res[0].id}</p>
      <p>Name :{res[0].name}</p>
      <p>Type :{res[0].type}</p>
      <p>Available :{res[0].available}</p> */}

      {/* Dynamic Data REndering on Frontend */}

      {/* {res.map((book: any) => {
        return (
          <div>
            <p>{book.id}</p>
            <h1>{book.name}</h1>
            <p>{book.type}</p>
            <p>{book.available}</p>
          </div>
        );
      })} */}

      {res.map((book: any) => (
        <div key={book.id} className="p-4 border-b">
          <Link href={`${book.id}`}>
            <a className="block">
              <h1 className="text-xl font-bold">{book.name}</h1>
              <p className="text-gray-500">{book.type}</p>
              <p>{book.available}</p>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}
