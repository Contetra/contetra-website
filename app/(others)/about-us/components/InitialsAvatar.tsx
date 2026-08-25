import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface InitialsAvatarProps {
  name: string;
  initials: string;
  photo?: string | null;
  className?: string;
}

export function InitialsAvatar({ name, initials, photo, className }: InitialsAvatarProps) {
  return (
    <Avatar
      role="img"
      aria-label={name}
      className={cn("aspect-[498/562] size-auto w-full rounded-xl", className)}
    >
      {photo ? (
        <AvatarImage src={photo} alt="" className="aspect-auto object-cover object-top" />
      ) : (
        <AvatarFallback className="aspect-auto rounded-xl bg-gradient-to-br from-brand-blue to-brand-green font-heading text-xl font-semibold text-white">
          {initials}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
