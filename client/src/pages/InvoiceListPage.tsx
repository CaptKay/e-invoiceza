import { useEffect } from 'react';

import { setInvoices, setLoading } from '../features/invoices/invoicesSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

export const InvoiceListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useAppSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(setLoading(true));
    // Placeholder data until API integration is implemented.
    const timeout = setTimeout(() => {
      dispatch(
        setInvoices([
          {
            id: 'inv-1000',
            invoiceNumber: 'INV-1000',
            status: 'draft',
            total: 1200,
            issuedOn: new Date().toISOString()
          }
        ])
      );
    }, 300);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Invoices</h1>
            <p className="text-slate-600">Review invoice drafts before submitting to EU sandboxes.</p>
          </div>
          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-500"
          >
            Create Invoice
          </button>
        </header>

        <section className="overflow-hidden rounded-lg bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Invoice #
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Total (€)
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Issued On
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {isLoading ? (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-500" colSpan={4}>
                    Loading invoices...
                  </td>
                </tr>
              ) : (
                items.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-4 py-4 text-sm font-medium text-slate-900">{invoice.invoiceNumber}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{invoice.status}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{invoice.total.toFixed(2)}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {new Date(invoice.issuedOn).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
};
