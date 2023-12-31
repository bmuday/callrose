"use client";
import {
  Avatar as Container,
  AvatarFallback,
  AvatarImage,
} from "@/app/(components)/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/(components)/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useDarkStore, useUserStore } from "@/app/(stores)";
import { fetchDirectus } from "@/app/(lib)/directus";
import { deleteCookie } from "@/app/(lib)/utils";

export default function Avatar() {
  const dark = useDarkStore((state) => state.dark);
  const setDark = useDarkStore((state) => state.changeMode);
  const setUser = useUserStore((state) => state.setUser);
  const setMember = useUserStore((state) => state.setMember);
  const setUserSession = useUserStore((state) => state.setUserSession);
  const refresh_token = useUserStore((state) => state.userSession)
    ?.refresh_token;

  const handleLogout = async () => {
    const endpoint = "/auth/logout";
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    options.method = "POST";
    if (refresh_token) options.body = JSON.stringify({ refresh_token });

    try {
      await fetchDirectus(endpoint, options);
      setPeer(null);
      setUser(null);
      setMember(null);
      setUserSession(null);
      deleteCookie("directus_refresh_token");
      // router.push("/login");
    } catch (error) {
      console.log("error", error);
    }

    // const logout = await res.json();
    // console.log("logout", logout);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Container>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Container>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>My account</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDark(!dark)}>
          {dark ? (
            <>
              <span className="mr-2">LightMode</span>
              <Sun />
            </>
          ) : (
            <>
              <span className="mr-2">DarkMode</span>
              <Moon />
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
