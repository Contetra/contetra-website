"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutPage } from "../content";
import { TeamCard } from "./TeamCard";
import { TeamCardSkeleton } from "./TeamCardSkeleton";
import { useGetTeamQuery } from "@/redux/api/commonApi";

const SKELETON_COUNT = 10;

export function Team() {
  const { data, isLoading, isError } = useGetTeamQuery();
  const teamMembers = data?.response ?? [];

  return (
    <section className="bg-white">
      <div className="bg-brand-blue py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
              {aboutPage.team.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
              {aboutPage.team.heading}
            </h2>
          </ScrollReveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <TeamCardSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <p className="text-center text-sm text-muted-foreground">
            The team is temporarily unavailable.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.id} delay={(i % 5) * 0.06}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
