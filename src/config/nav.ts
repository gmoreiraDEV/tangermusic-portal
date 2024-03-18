import { SidebarLink } from "@/components/SidebarItems";
import { Cog, HomeIcon, UserSquare2 } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Início", icon: HomeIcon },
  { href: "/account", title: "Conta", icon: UserSquare2 },
  { href: "/settings", title: "Configurações", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
