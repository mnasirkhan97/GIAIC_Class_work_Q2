import Image from "next/image";

export default async function Home() {
  // const url = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const res = await url.json();
  // console.log("url => ", url);
  console.log("res => ", res);
  return (
    <main className=" items-center justify-between p-24">
      Book APIs
      {/* {
        <p>
          Id: {res[0].id} <br />
          Name: {res[0].name}
        </p>
      } */}
      {res.map((book: any) => {
        <div>
          <h1>Book :{book.name}</h1>
        </div>;
        // console.log("Book =>", book);
      })}
    </main>
  );
}
