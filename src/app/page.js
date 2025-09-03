import BookTile from "@/components/book-tile";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <div className="min-h-[80vh] px-[10vw] bg-cover bg-center bg-white/60 bg-[url(/images/books.jpeg)] bg-blend-overlay bg-opacity-5 flex justify-evenly gap-6 flex-wrap">
        <div className="m-auto text-8xl">
          <div className="mt-[5vh]">Bookstore</div>
        </div>
        <div className="m-auto max-w-[40vw] flex flex-col gap-6 bg-linear-to-r to-secondary-bg/80 from-primary-bg/80 p-6 border-transparent rounded-4xl">
          <div className="indent-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis diam, posuere at fringilla nec, varius eu sapien. Phasellus elementum augue ut lectus rhoncus, aliquet volutpat enim consequat. Nulla quis feugiat tortor, sed viverra mi. Aliquam porta, elit sit amet congue vestibulum, tellus magna condimentum nulla, et egestas augue nisl mattis massa. Vivamus rhoncus, tortor eget aliquet vestibulum, quam est posuere nunc, sit amet euismod orci lorem ac augue. Suspendisse potenti. Vivamus in augue lectus. Nam placerat lacus tortor, sit amet scelerisque augue fringilla a. Pellentesque vitae sodales massa. Aliquam erat volutpat. Maecenas et pulvinar purus. Aenean eget hendrerit neque.</div>
          <div className="indent-8 text-justify">Aenean non posuere arcu. Ut hendrerit ligula quis justo luctus, sed ullamcorper ante euismod. Nam sed tellus nec neque pretium rutrum. Donec at ante elit. Pellentesque a augue leo. Pellentesque magna elit, vehicula et viverra vel, pretium dapibus felis. Morbi ac erat auctor, pharetra magna vitae, lacinia risus. Pellentesque et magna risus. Morbi id luctus leo, ut consectetur ante. Duis finibus tempus orci, a malesuada dui facilisis id. Nunc eu mi augue.</div>
        </div>
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
