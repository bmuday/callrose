import Link from "next/link";
import Hero from "./(components)/Hero";
import Gallery from "./(components)/Gallery";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full">
      <Hero />
      <Gallery />
    </main>
  );
}
