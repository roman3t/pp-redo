import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";
import { SidebarFooter } from "./SidebarFooter";

export function Sidebar() {
  return (
    <aside className="sticky top-[16px] h-[calc(100vh-32px)] w-[250px] border-r border-black/10 bg-white">
      <div className="flex h-full flex-col">
        <SidebarHeader />
        <SidebarNav />
        <SidebarFooter />
      </div>
    </aside>
  );
}
