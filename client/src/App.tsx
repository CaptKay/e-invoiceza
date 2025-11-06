import { NavLink, Outlet } from 'react-router-dom';

const navigationClass = ({ isActive }: { isActive: boolean }): string =>
  `rounded px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
  }`;

export const App = (): JSX.Element => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">e-invoiceza</div>
        <nav className="flex gap-2">
          <NavLink to="/dashboard" className={navigationClass}>
            Dashboard
          </NavLink>
          <NavLink to="/invoices" className={navigationClass}>
            Invoices
          </NavLink>
        </nav>
      </div>
    </header>
    <Outlet />
  </div>
);
