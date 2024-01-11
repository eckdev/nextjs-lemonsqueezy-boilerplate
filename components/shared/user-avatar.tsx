import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

export function UserAvatar({ ...props }: AvatarProps) {
  return (
    <Avatar {...props}>
        <AvatarFallback>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
    </Avatar>
  )
}
