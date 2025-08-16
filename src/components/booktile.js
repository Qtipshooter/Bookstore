import Image from "next/image";

export default async function BookTile(props) {
  let title, img, price, genre, src, author;

  //direct assignments
  title = props.title;
  price = Number.parseFloat(props.price).toFixed(2);
  genre = props.genre;
  author = props.author;
  src = props.src ? props.src : `/images/bookcovers/missing.png`;
  img = <Image src={src} style={{ width: 'auto', height: '20rem' }}  width={0} height={0} alt={`Cover of "${title}"`}></Image>

  //tile construct
  return(
    <div className="flex flex-col items-center justify-between justify-items-center border-2 rounded-2xl p-2">
      {img}
      <div className="font-bold text-3xl max-w-80 h-full justify-self-stretch">{title}</div>
      <div className="w-full text-xl italic">{author}</div>
      <div className="w-full text-lg">{genre}</div>
      <div className="w-full flex justify-between">
        <div className="text-lg"><span className="text-xs align-super">$</span>{price}</div>
        <div className="border">button</div>
      </div>
    </div>
  );
}