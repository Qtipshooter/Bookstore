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
        <div className="flex justify-evenly">
          <BookTile title="Book 1" img="" author="" price="" genre=""></BookTile>
          <BookTile title="Book 2" img="" author="" price="" genre=""></BookTile>
          <BookTile title="Book 3" img="" author="" price="" genre=""></BookTile>
          <BookTile title="Book 4" img="" author="" price="" genre=""></BookTile>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
