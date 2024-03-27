import WebSocketComponent from "../components/WebSocketComponent";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-between">
          <p>Binance - USDT/BTC</p>
          <WebSocketComponent />
        </div>
      </div>
    </main>
  );
}
