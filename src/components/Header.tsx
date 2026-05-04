"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useState, useEffect } from "react";
import { useTheme } from "next-themes";



interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Inicio", href: "/" },
  { name: "acerca de", href: "/about" },
];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();




  return (
    <>
      <nav>
        <div className="hidden md:flex items-center">
          {menuItems.map((item) => (
            <div key={item.href} className="ml-4 md:ml-8">
              <a
                href={item.href}
                target={item.openInNewTab ? "_blank" : "_self"}
                className={cn(
                  "hover:text-gray-900",
                  pathname === item.href && "font-semibold"
                )}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size="24" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.openInNewTab ? "_blank" : "_self"}
                      className={cn(
                        "block py-2",
                        pathname === item.href && "font-semibold"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </>
  );
};



export const Header: FunctionComponent = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // When the component mounts on the client, update the state to indicate it is mounted
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Render nothing on the server
  if (!mounted) return null;



  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <Link href="/">
        <div >
          <img src={

            resolvedTheme === "dark"
              ? "https://res.cloudinary.com/dm4wfkipp/image/upload/v1739916804/Novedades_Corrientes-logo400x400-b_i64bfg.png"
              : "https://res.cloudinary.com/dm4wfkipp/image/upload/v1739916667/Novedades_Corrientes-logo400x400_nwgdim.png"
          } alt="" />
        </div>
      </Link>

      <Navigation />
    </section>
  );
};
