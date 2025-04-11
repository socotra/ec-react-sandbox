import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

export const Header = () => {
  return (
    <Card className="flex h-16 flex-row items-center rounded-none px-4">
      <span className="text-primary flex-1 font-extrabold">
        Socotra Enterprise Core
      </span>
      <ModeToggle />
    </Card>
  );
};
