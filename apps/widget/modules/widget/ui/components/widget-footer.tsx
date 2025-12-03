import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { useAtomValue, useSetAtom } from "jotai";
// import { useAtomValue, useSetAtom } from "jotai";
import { HomeIcon, InboxIcon } from "lucide-react";
import { screenAtom } from "../../atoms/widget-atoms";
// import { screenAtom } from "../../atoms/widget-atoms";

export const WidgetFooter = () => {
  const screen = useAtomValue(screenAtom);
  const setScreen = useSetAtom(screenAtom);

  const isSelection = screen === "selection";
  const isInbox = screen === "inbox";

  return (
    <footer className="flex items-center justify-between border-t bg-background">
      <Button
        className={cn(
          "h-14 flex-1 rounded-none text-muted-foreground",
          isSelection && "bg-muted text-primary"
        )}
        onClick={() => setScreen("selection")}
        variant="ghost"
      >
        <HomeIcon className="size-5" />
      </Button>
      <Button
        className={cn(
          "h-14 flex-1 rounded-none text-muted-foreground",
          isInbox && "bg-muted text-primary"
        )}
        onClick={() => setScreen("inbox")}
        variant="ghost"
      >
        <InboxIcon className="size-5" />
      </Button>
    </footer>
  );
};
