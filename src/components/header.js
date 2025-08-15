import Link from "next/link";

export default async function Header(){
  return(
    <div className="flex justify-between sticky top-0 h-[10vh] w-full border-b-3 bg-secondary-bg">
      <Link href="/" className="flex block h-full from-primary-bg bg-gradient-to-r pl-3">
        <div className="m-auto text-6xl">Bookstore</div>
      </Link>
      <Link href="/login" className="flex block mr-16">
        <div className="m-auto text-2xl p-2 border-2 rounded-lg underline">Signup/Sign In</div>
      </Link>
      
    </div>
  );
}