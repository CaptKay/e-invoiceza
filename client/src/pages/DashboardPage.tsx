import { useMemo } from 'react';

import { useAppSelector } from '../hooks/useAppSelector';

export const DashboardPage = (): JSX.Element => {
  const metrics = useAppSelector((state) => state.metrics);
  const chartData = useMemo(
    () => [
      { name: 'Draft', value: metrics.draft },
      { name: 'Approved', value: metrics.approved },
      { name: 'Rejected', value: metrics.rejected }
    ],
    [metrics]
  );

  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-6">
        <header>
          <h1 className="text-3xl font-bold">Tenant Dashboard</h1>
          <p className="text-slate-600">
            Track invoice submissions and quickly identify statuses across EU sandboxes.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Total" value={metrics.totalInvoices} />
          <MetricCard label="Draft" value={metrics.draft} />
          <MetricCard label="Approved" value={metrics.approved} />
          <MetricCard label="Rejected" value={metrics.rejected} />
        </div>

        <section className="rounded-lg bg-white p-4 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">Status Breakdown</h2>
          <pre className="overflow-auto rounded bg-slate-100 p-4 text-sm">
            {JSON.stringify(chartData, null, 2)}
          </pre>
        </section>
      </section>
    </main>
  );
};

interface MetricCardProps {
  readonly label: string;
  readonly value: number;
}

const MetricCard = ({ label, value }: MetricCardProps): JSX.Element => (
  <article className="rounded-lg bg-white p-4 shadow-sm">
    <p className="text-sm font-medium text-slate-500">{label}</p>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
  </article>
);
