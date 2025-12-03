import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { Provider } from "jotai";
import { MonitorIcon } from "lucide-react";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <AuthGuard>
      <OrganizationGuard>
        <Provider>
          {/* Mobile / small screens: dashboard is desktop-only */}
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
          {/* Desktop: full dashboard */}
          <div className="hidden md:contents">
            <SidebarProvider defaultOpen={defaultOpen}>
              <DashboardSidebar />
              <main className="flex flex-1 flex-col">{children}</main>
            </SidebarProvider>
          </div>
        </Provider>
      </OrganizationGuard>
    </AuthGuard>
  );
};
