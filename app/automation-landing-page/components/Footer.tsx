import { navLinks } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-white">Automations by Contetra</p>
          <p className="mt-2 text-sm text-violet-200">Powered by phinite.ai</p>
          <p className="mt-4 text-sm text-slate-400">
            AI automations built, monitored, and improved for your team.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
        <a className="text-sm font-semibold text-cyan-200 hover:underline" href="mailto:automations@contetra.com">
          automations@contetra.com
        </a>
      </div>
    </footer>
  );
}
