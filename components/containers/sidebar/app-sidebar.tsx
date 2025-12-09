"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import Logo from "@/lib/logo";
import { items } from "@/lib/sidebar/menu-items";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user:
    | {
        id?: string | undefined;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
};

export function AppSidebar({ ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <a href="/dashboard" className="p-2">
          <Logo size={2} color="white" />
        </a>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items.navMain} />
        <NavSecondary items={items.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
