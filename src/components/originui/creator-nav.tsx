import { SparklesIcon, UploadIcon } from "lucide-react"

import AppToggle from "@/components/originui/app-toggle"
import TeamSwitcher from "@/components/originui/team-switcher"
import { Button } from "@/components/ui/button"

const teams = ["Acme Inc.", "Origin UI", "Junon"]

export default function CreatorNav() {
  return (
    <header className="border-b px-4 md:px-6 flex-1">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          <TeamSwitcher teams={teams} defaultTeam={teams[0] ?? "Acme Inc."} />
        </div>
        {/* Middle area */}
        <AppToggle />
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-sm max-sm:aspect-square max-sm:p-0"
          >
            <UploadIcon
              className="opacity-60 sm:-ms-1"
              size={16}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Export</span>
          </Button>
          <Button size="sm" className="text-sm max-sm:aspect-square max-sm:p-0">
            <SparklesIcon
              className="opacity-60 sm:-ms-1"
              size={16}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Upgrade</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
