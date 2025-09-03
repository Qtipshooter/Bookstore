import Link from "next/link";

export default async function Footer() {
  return (
    <div className="flex justify-between px-[10vw] py-4 bg-dark-bg text-dark-bg-text w-full border-t-3 border-blue-300 min-h-[10vh] text-center">
      <div className="h-auto m-auto flex flex-col">
        <div className="text-4xl underline">Bookstore</div>
        <Link className="hover:underline" href="/">About Us</Link>
      </div>
      <div className="h-auto mx-auto flex flex-col">
        <div className="text-xl border-b-1 mb-2">Quick Searches</div>
        <Link className="hover:underline" href="/">Non-Fiction</Link>
        <Link className="hover:underline" href="/">Adventure</Link>
        <Link className="hover:underline" href="/">Children's</Link>
        <Link className="hover:underline" href="/">Romance</Link>
        <Link className="hover:underline" href="/">Sci-Fi</Link>
      </div>
      <div className="h-auto mx-auto flex flex-col">
        <div className="text-xl border-b-1 mb-2">Nav Links</div>
        <Link className="hover:underline" href="/">Account</Link>
        <Link className="hover:underline" href="/">Browse</Link>
        <Link className="hover:underline" href="/">Cart</Link>
        <Link className="hover:underline" href="/">My Orders</Link>
      </div>
    </div>
  );
}