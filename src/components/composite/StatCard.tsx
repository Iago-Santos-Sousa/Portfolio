import type { Stat } from "@/types";

export function StatCard({ value, label, icon: Icon }: Stat) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-elevated p-4 sm:p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
        <Icon aria-hidden size={22} />
      </span>
      <div className="min-w-0">
        <p className="text-2xl font-extrabold tracking-tight text-brand">{value}</p>
        <p className="text-sm leading-snug text-muted">{label}</p>
      </div>
    </div>
  );
}
