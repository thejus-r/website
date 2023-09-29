"use client";
// import HelloWorld from "./hello.mdx";

export default function Home() {
  return (
    <main className="w-fit mx-auto">
      <div className="border-2 mt-32 w-fit p-8 border-cyan-500 relative">
        <p className="text-stone-400 text-lg absolute -top-8 left-2">
          What am I?
        </p>
        <div className="w-4 h-4 bg-stone-100 border-2 border-cyan-500 absolute -top-2 -right-2"></div>
        <div className="w-4 h-4 bg-stone-100 border-2 border-cyan-500 absolute -bottom-2 -right-2"></div>
        <div className="w-4 h-4 bg-stone-100 border-2 border-cyan-500 absolute -top-2 -left-2"></div>
        <div className="w-4 h-4 bg-stone-100 border-2 border-cyan-500 absolute -bottom-2 -left-2"></div>
        <h1 className="text-8xl font-bold">Product Designer</h1>
      </div>
    </main>
  );
}

// <article className="prose prose-stone prose-invert">
//   <HelloWorld />
// </article>
