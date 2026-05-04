import { MonitorIcon } from "lucide-react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Mobile / small screens: admin app is desktop-only */}
      <div className="flex min-h-svh flex-col items-center justify-center gap-y-4 p-8 text-center md:hidden">
        <MonitorIcon className="size-10 text-muted-foreground" />
        <p className="font-medium text-lg">
          Admin dashboard only available on desktop
        </p>
        <p className="max-w-xs text-muted-foreground text-sm">
          Please open this page on a desktop device to access the admin
          dashboard.
        </p>
      </div>
      {/* Desktop: auth screens */}
      <div className="hidden h-full min-h-screen min-w-screen flex-col items-center justify-center md:flex">
        {children}
      </div>
    </>
  );
};
