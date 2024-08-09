import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = { first_name : 'Adrian', lastName : 'Joe' }
  const loggedIn = await getLoggedInUser();
  // if (!loggedIn) return redirect("/sign-in");
  console.log(loggedIn);
  
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="Logo" width={30} height={30} />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
