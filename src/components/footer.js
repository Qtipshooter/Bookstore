import Link from "next/link";

export default async function Footer() {
  return (
    <div className="flex justify-between px-[10vw] py-4 bg-dark-bg text-dark-bg-text w-full border-t-3 border-blue-300 min-h-[10vh] text-center">
      <div className="h-auto m-auto flex flex-col">
        <Link className="text-4xl underline" href="/">Bookstore</Link>
        <Link className="hover:underline" href="/about">About Us</Link>
      </div>
      <div className="h-auto mx-auto flex flex-col">
        <div className="text-xl border-b-1 mb-2 px-2">Quick Searches</div>
        <Link className="hover:underline" href="/browse">Non-Fiction</Link>
        <Link className="hover:underline" href="/browse">Adventure</Link>
        <Link className="hover:underline" href="/browse">Children's</Link>
        <Link className="hover:underline" href="/browse">Romance</Link>
        <Link className="hover:underline" href="/browse">Sci-Fi</Link>
      </div>
      <div className="h-auto mx-auto flex flex-col">
        <div className="text-xl border-b-1 mb-2 px-2">Nav Links</div>
        <Link className="hover:underline" href="/account">Account</Link>
        <Link className="hover:underline" href="/browse">Browse</Link>
        <Link className="hover:underline" href="/cart">Cart</Link>
        <Link className="hover:underline" href="/orders">My Orders</Link>
      </div>
    </div>
  );
}