import { getInitials, TeamMember } from "@/data/team";
import { InitialsAvatar } from "./InitialsAvatar";
import { Card, CardContent } from "@/components/ui/card";



export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="h-full rounded-2xl border border-border/70 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg">
      <CardContent className="flex h-full flex-col items-center gap-3">
        <InitialsAvatar
          name={member.name}
          initials={member.initials || getInitials(member.name)}
          photo={member.photo}
        />
        <div>
          <h3 className="font-heading text-sm font-semibold text-brand-blue">
            {member.name}
          </h3>
          <p className="mt-1 text-xs leading-snug text-muted-foreground">
            {member.title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
