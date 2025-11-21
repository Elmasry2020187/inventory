
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card-item";

import { Separator } from "../ui/separator";
import CardActions from "../cards/CardActions";

const items = [
  { name: "Macbook Pro" },
  { name: "Iphone 14 pro" },
  { name: "Zoom75" },
  { name: "Airpods Pro" },
  { name: "Samsung Galaxy Fold" },
  { name: "Samsung Odyssey" },
  { name: "Logitech Superlight" },
];

export default function RightSidebar() {
  return (
    <aside className="sticky top-12 bg-white border-l h-screen flex flex-col px-4 pt-5 space-y-6 ">
      <SidebarContainer cardTitle="Quick Actions">
        <CardActions />
      </SidebarContainer>
      <Separator />
      <SidebarContainer cardTitle="Fast Moving Items">
        <FastMovingItems />
      </SidebarContainer>
    </aside>
  );
}

function SidebarContainer({ cardTitle, children }) {
  return (
    <Card className="shadow-none border-0 gap-0 pb-2 pt-0">
      <CardHeader className="px-0 py-0 mb-2">
        <CardTitle className="text-lg font-semibold text-gray-900">
          {cardTitle}
        </CardTitle>
      </CardHeader>

      <CardContent className="py-0 px-3">{children}</CardContent>
    </Card>
  );
}

function FastMovingItems() {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <FastMovingItem key={item.name} name={item.name} />
      ))}
    </div>
  );
}

function FastMovingItem({ name }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <img
        src="https://loremflickr.com/400/400/product"
        alt={name}
        className=" size-8 rounded-md object-cover"
      />
      <p className="text-sm font-medium text-gray-800">{name}</p>
    </div>
  );
}
