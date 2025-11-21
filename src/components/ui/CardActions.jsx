import { Badge } from "@/components/ui/badge";
import { FilePlus, Package, Truck, Upload } from "lucide-react";
import { Button } from "../ui/button";
const Actions = [
  {
    id: 1,
    title: "Create Order",
    icon: <FilePlus size={18} />,
    shortCut: "Ctrl + N",
  },
  {
    id: 2,
    title: "Add Product",
    icon: <Package size={18} />,
    shortCut: "Ctrl + P",
  },
  {
    id: 3,
    title: "Add Supplier",
    icon: <Truck size={18} />,
    shortCut: "Ctrl + K",
  },
  { id: 4, title: "Export", icon: <Upload size={18} />, shortCut: "Ctrl + S" },
];

function CardActions() {
  return (
    <div className="space-y-2">
      {Actions.map((action) => (
        <div
          key={action.id}
          className="flex items-center justify-between w-full"
        >
          <Button
            variant="gost"
            className="flex items-center gap-2 h-8 text-sm text-gray-500 font-medium hover:bg-gray-0 has-[>svg]:px-0"
          >
            {action.icon}
            {action.title}
          </Button>

          <Badge
            variant="outline"
            className="border border-gray-300 text-gray-500 text-xs px-2 py-px rounded-md"
          >
            {action.shortCut}
          </Badge>
        </div>
      ))}
    </div>
  );
}


export default CardActions;