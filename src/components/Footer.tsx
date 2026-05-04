"use client";
import { config } from "@/config";
import { Rss, Home, ArrowUp } from "lucide-react";
import Link from "next/link";
import { FunctionComponent, useState, useEffect } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Footer: FunctionComponent = () => {

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
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © novedades corrientes {new Date().getFullYear()}
        </div>
        <div className="text-muted-foreground hidden lg:block">
          <Link
            target="_blank"
            href="https://www.corrientes.gob.ar"
          >
            <img className="scale-[40%]" src={resolvedTheme === "dark" ? "https://res.cloudinary.com/dm4wfkipp/image/upload/v1710788777/ctes-somos-todos_mlqdal_knuy5z.png" : "https://res.cloudinary.com/dm4wfkipp/image/upload/v1710108318/ctes-somos-todos_mlqdal.png"} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/">
            <Button variant="ghost" className="p-2">
              <Home className="w-4 h-4" />
            </Button>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
      <div className="text-xs text-muted-foreground lg:hidden">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
        >
          Hecho en Corrientes
        </Link>
      </div>
    </section>
  );
};
