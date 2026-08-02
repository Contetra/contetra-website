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
    <Avatar role="img" aria-label={name} className={cn("size-16", className)}>
      {photo ? (
        <AvatarImage src={photo} alt="" />
      ) : (
        <AvatarFallback className="bg-gradient-to-br from-brand-blue to-brand-green font-heading text-base font-semibold text-white">
          {initials}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
