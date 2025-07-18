'use client'

import ImagoIcon from "@/components/icons/imago-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useUser } from "@clerk/nextjs"
import InfoMenu from "@/components/originui/info-menu"
import NotificationMenu from "@/components/originui/notification-menu"
import UserMenu from "@/components/originui/user-menu"
import { navigationLinks } from "@/constants/routes"
import Link from "next/link"
import ThemeToggle from "@/app/_components/theme-toggle"
import GlobalSearch from "./global-search"

// Navigation links array to be used in both desktop and mobile menus
// const navigationLinks = [
//     { href: "#", label: "Home" },
//     {
//         label: "Features",
//         submenu: true,
//         type: "description",
//         items: [
//             {
//                 href: "#",
//                 label: "Components",
//                 description: "Browse all components in the library.",
//             },
//             {
//                 href: "#",
//                 label: "Documentation",
//                 description: "Learn how to use the library.",
//             },
//             {
//                 href: "#",
//                 label: "Templates",
//                 description: "Pre-built layouts for common use cases.",
//             },
//         ],
//     },
//     {
//         label: "Pricing",
//         submenu: true,
//         type: "simple",
//         items: [
//             { href: "#", label: "Product A" },
//             { href: "#", label: "Product B" },
//             { href: "#", label: "Product C" },
//             { href: "#", label: "Product D" },
//         ],
//     },
//     {
//         label: "About",
//         submenu: true,
//         type: "icon",
//         items: [
//             { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
//             { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
//             { href: "#", label: "About Us", icon: "InfoIcon" },
//         ],
//     },
// ]

export default function Navbar() {
    const { isSignedIn } = useUser()
    return (
        <header className="border-b w-full sticky px-6 top-0 z-50 bg-background max-w-[80rem]">
            <div className="flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                <div className="flex items-center gap-2">
                    {/* Mobile menu trigger */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="group size-8 md:hidden text-foreground"
                                variant="ghost"
                                size="icon"
                            >
                                <svg
                                    className="pointer-events-none"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 12L20 12"
                                        className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                    />
                                </svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-64 p-1 md:hidden">
                            <NavigationMenu className="max-w-none *:w-full">
                                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index} className="w-full">
                                            {link.submenu ? (
                                                <>
                                                    <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                                                        {link.label}
                                                    </div>
                                                    <ul>
                                                        {link.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <NavigationMenuLink
                                                                    href={item.href}
                                                                    className="py-1.5"
                                                                >
                                                                    {item.label}
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <NavigationMenuLink href={link.href} className="py-1.5">
                                                    {link.label}
                                                </NavigationMenuLink>
                                            )}
                                            {/* Add separator between different types of items */}

                                            {(() => {
                                                const nextLink = navigationLinks[index + 1]
                                                const currentLink = link;

                                                const shouldShowSeparator =
                                                    nextLink &&
                                                    (
                                                        (!currentLink.submenu && nextLink.submenu) ??
                                                        (currentLink.submenu && !nextLink.submenu) ??
                                                        (currentLink.submenu && nextLink.submenu && currentLink.type !== nextLink.type)
                                                    );

                                                return nextLink && !shouldShowSeparator ? (
                                                    <div
                                                        role="separator"
                                                        aria-orientation="horizontal"
                                                        className="bg-border -mx-1 my-1 h-px w-full"
                                                    />
                                                ) : null;

                                            })()}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>
                    {/* Main nav */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-primary hover:text-primary/90">
                            <ImagoIcon />
                        </a>
                        {/* Navigation menu */}
                        <NavigationMenu viewport={false} className="max-md:hidden">
                            <NavigationMenuList className="gap-2">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem key={index}>
                                        {link.submenu ? (
                                            <>
                                                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                                                    {link.label}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                                                    <ul
                                                        className={cn(
                                                            link.type === "description"
                                                                ? "min-w-64"
                                                                : "min-w-48"
                                                        )}
                                                    >
                                                        {link.items.map((item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <NavigationMenuLink
                                                                    href={item.href}
                                                                    className="py-1.5"
                                                                >
                                                                    {/* Display icon if present */}
                                                                    {link.type === "icon" && "icon" in item && (
                                                                        <div className="flex items-center gap-2">
                                                                            {item.icon !== null && (
                                                                                <item.icon
                                                                                    size={16}
                                                                                    className="text-foreground opacity-60"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            )}
                                                                            <span>{item.label}</span>
                                                                        </div>
                                                                    )}

                                                                    {/* Display label with description if present */}
                                                                    {link.type === "description" &&
                                                                        "description" in item ? (
                                                                        <div className="space-y-1">
                                                                            <div className="font-medium">
                                                                                {item.label}
                                                                            </div>
                                                                            <p className="text-muted-foreground line-clamp-2 text-xs">
                                                                                {item.description?.toString()}
                                                                            </p>
                                                                        </div>
                                                                    ) : (
                                                                        // Display simple label if not icon or description type
                                                                        !link.type ||
                                                                        (link.type !== "icon" &&
                                                                            link.type !== "description" && (
                                                                                <span>{item.label}</span>
                                                                            ))
                                                                    )}
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <NavigationMenuLink
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                                            >
                                                {link.label}
                                            </NavigationMenuLink>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <GlobalSearch/>
                    {
                        isSignedIn ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {/* Info menu */}
                                    <InfoMenu />
                                    {/* Notification */}
                                    <NotificationMenu />
                                </div>
                                {/* User menu */}
                                <UserMenu />
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                {/* <Button asChild variant="ghost" size="sm" className="text-sm">
                                    <Link href="/sign-in">Sign In</Link>
                                </Button> */}
                                <Button asChild size="sm" className="text-sm">
                                    <Link href="/sign-up">Get Started</Link>
                                </Button>
                            </div>
                        )
                    }
                </div>


            </div>
        </header>
    )
}
