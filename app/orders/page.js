import { getServerSession } from "next-auth";
import Image from "next/image";
import LogoutButton from "../../components/login/LogoutButton";
import WebSocketComponent from "../../components/WebSocketComponent";
import { redirect } from "next/navigation";

export default async function Orders() {
  const session = await getServerSession();

  if(!session) {
    redirect('/')
  }
  console.log(session)

  const handleSignOut = async () => {
    await signOut()
  }
  
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-between">
          {session.user.image && (
          <div>
            <Image src= {session.user?.image} 
            alt="Avatar"
            width={150}
            height={150}
            /> 
            </div>
            )}
          <p>Hello, {session?.user?.name}</p>
          <p>Binance - USDT/BTC</p>
          <WebSocketComponent />
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}