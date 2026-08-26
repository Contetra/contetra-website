import type { TeamMember } from "@/redux/api/commonApi";
import { InitialsAvatar } from "./InitialsAvatar";
import { Card, CardContent } from "@/components/ui/card";



function getInitials(name: string): string {
  const parts = name.replace(/^CA\s+/, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

export function TeamCard({ member }: { member: TeamMember }) {
  const photo = member.profile_picture_url
    ? `${process.env.NEXT_PUBLIC_CDN_URL}${member.profile_picture_url}`
    : null;

  return (
    <Card className="h-full rounded-2xl border border-border/70 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg">
      <CardContent className="flex h-full flex-col gap-3">
        <InitialsAvatar
          name={member.name}
          initials={getInitials(member.name)}
          photo={photo}
        />
        <div>
          <h3 className="font-heading text-sm font-semibold text-brand-blue">
            {member.name}
          </h3>
          {member.designation && (
            <p className="mt-1 text-xs leading-snug text-muted-foreground">
              {member.designation}
            </p>
          )}
          {member.department && (
            <p className="mt-1 text-xs font-medium leading-snug text-brand-green">
              {member.department}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
