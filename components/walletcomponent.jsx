"use client"
import Link from "next/link"
import { CardContent, CardTitle, CardHeader, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function WalletComponent() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="flex items-center h-14 px-4 border-b gap-4 lg:h-20 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Package2Icon className="h-6 w-6" />
          <Link className="text-lg font-semibold" href="#">
            Acme Exchange
          </Link>
        </div>
        <nav className="ml-auto hidden gap-4 lg:flex">
          <Link className="font-medium" href="#">
            Markets
          </Link>
          <Link className="font-medium" href="#">
            Orders
          </Link>
          <Link className="font-medium" href="#">
            Balances
          </Link>
          <Link className="font-medium" href="#">
            Account
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-8 lg:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
          <div className="grid gap-4">
            <div className="card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_2fr]">
                  <div className="flex flex-col items-start p-4 gap-2 md:items-center md:gap-4">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">Last Price</div>
                      <div className="text-2xl font-semibold">$56,234.56</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">24h Change</div>
                      <div className="text-green-500">+12.34%</div>
                    </div>
                  </div>
                  <div className="grid gap-4 p-4 md:grid-cols-[2fr_1fr]">
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">Bid</div>
                      <div className="ml-auto">$56,200.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">Ask</div>
                      <div className="ml-auto">$56,300.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">High</div>
                      <div className="ml-auto">$57,000.00</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">Low</div>
                      <div className="ml-auto">$55,000.00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="card">
              <CardHeader className="pb-0">
                <CardTitle>Order Book</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid gap-2 text-sm md:grid-cols-[1fr_1fr]">
                  <div className="grid grid-cols-[1fr_1fr] items-center gap-2 px-4">
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">+$25.00</div>
                      <div className="text-gray-500 dark:text-gray-400">0.001 BTC</div>
                    </div>
                    <div className="text-right">0.001 BTC</div>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] items-center gap-2 px-4">
                    <div className="flex items-center gap-2">
                      <div className="text-red-500">-$25.00</div>
                      <div className="text-gray-500 dark:text-gray-400">0.001 BTC</div>
                    </div>
                    <div className="text-right">0.001 BTC</div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
          <div className="card">
            <CardHeader>
              <CardTitle>Price</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CurvedlineChart className="w-full aspect-[2/1]" />
            </CardContent>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
          <div className="card">
            <CardHeader>
              <CardTitle>Buy BTC</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="flex flex-col gap-4 md:flex-row md:items-center md:gap-2 lg:gap-4">
                <div className="flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="buy-amount">
                    Amount (USD)
                  </Label>
                  <Input
                    className="w-full"
                    id="buy-amount"
                    min="0"
                    placeholder="Enter amount"
                    step="0.01"
                    type="number" />
                </div>
                <Button type="submit">Buy</Button>
              </form>
            </CardContent>
          </div>
          <div className="card">
            <CardHeader>
              <CardTitle>Sell BTC</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="flex flex-col gap-4 md:flex-row md:items-center md:gap-2 lg:gap-4">
                <div className="flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="sell-amount">
                    Amount (BTC)
                  </Label>
                  <Input
                    className="w-full"
                    id="sell-amount"
                    min="0"
                    placeholder="Enter amount"
                    step="0.0001"
                    type="number" />
                </div>
                <Button type="submit">Sell</Button>
              </form>
            </CardContent>
          </div>
        </div>
      </main>
      <aside className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div>USD Balance</div>
              <div>BTC Balance</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Open Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 text-sm">
              <div>No open orders</div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function CurvedlineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}
