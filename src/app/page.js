import BookTile from "@/components/booktile";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-[80vh] bg-cover bg-center bg-white/60 bg-[url(/images/books.jpeg)] bg-blend-overlay bg-opacity-5 text-primary-bg-text text-center">
        Body
      </div>
      <div className="flex flex-col p-4">
        <div className="text-center h-16 text-3xl font-bold">Popular Books on Sale</div>
        <div className="flex justify-evenly flex-wrap">
          <BookTile src="/images/bookcovers/1.jpg" title="Oh, the Thinks You Can Think" author="Dr. Seuss" price="10" genre="Children's"></BookTile>
          <BookTile title="Book 2" author="Alice" price="10" genre="Adventure"></BookTile>
          <BookTile title="Book 3" author="Alice" price="15" genre="Fantasy"></BookTile>
          <BookTile title="Book 4" author="Jane" price="20" genre="Horror"></BookTile>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
