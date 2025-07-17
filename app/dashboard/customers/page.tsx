import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage() {
  const customers = await fetchFilteredCustomers(''); // Obtener todos los clientes

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-2xl`}>Customers</h1>
      <ul className="space-y-2">
        {customers.map((customer) => (
          <li key={customer.id} className="rounded border p-4 shadow-sm">
            <p className="font-semibold">{customer.name}</p>
            <p className="text-sm text-gray-600">{customer.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
