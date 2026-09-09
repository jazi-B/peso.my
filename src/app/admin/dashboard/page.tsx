'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

interface Order {
  id: number;
  name: string;
  contact: string;
  location: string;
  service: string;
  notes: string | null;
  status: string;
  createdAt: string;
}

interface ContactQuery {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'orders' | 'queries'>('orders');

  // Orders State
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Queries State
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [loadingQueries, setLoadingQueries] = useState(true);

  useEffect(() => {
    fetchOrders();
    fetchQueries();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders');
      if (res.status === 401) return router.push('/admin/login');
      const data = await res.json();
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      setOrders([]);
    } finally {
      setLoadingOrders(false);
    }
  };

  const fetchQueries = async () => {
    try {
      const res = await fetch('/api/contact');
      if (res.status === 401) return;
      const data = await res.json();
      if (Array.isArray(data)) {
        setQueries(data);
      } else {
        setQueries([]);
      }
    } catch (error) {
      setQueries([]);
    } finally {
      setLoadingQueries(false);
    }
  };

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
      }
    } catch (error) {
      console.error('Failed to update status');
    }
  };

  const deleteOrder = async (id: number) => {
    if (!confirm('Are you sure you want to delete this order?')) return;
    try {
      const res = await fetch(`/api/orders/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setOrders(orders.filter((o) => o.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete order');
    }
  };

  const deleteQuery = async (id: number) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setQueries(queries.filter((q) => q.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete query');
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.name.toLowerCase().includes(filter.toLowerCase()) ||
      order.contact.includes(filter) ||
      order.location.toLowerCase().includes(filter.toLowerCase()) ||
      order.service.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Done':
        return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      case 'Cancelled':
        return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-300 dark:border-red-800';
      default:
        return 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800';
    }
  };

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === 'Pending').length;
  const completedOrders = orders.filter((o) => o.status === 'Done').length;

  const serviceCounts: Record<string, number> = {};
  orders.forEach((o) => {
    serviceCounts[o.service] = (serviceCounts[o.service] || 0) + 1;
  });
  const topService = Object.entries(serviceCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-8">
      {/* Top Header & Logout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Central Dispatch Live
            </span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">
            Operations & Admin Portal
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              fetchOrders();
              fetchQueries();
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            <span>Refresh</span>
          </button>

          <button
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              router.push('/admin/login');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-red-50 dark:bg-red-950/60 hover:bg-red-100 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Total Bookings</span>
          <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">{totalOrders}</span>
          <span className="text-[11px] text-slate-400 mt-1">All time logged</span>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <span className="text-xs font-bold text-amber-500 uppercase">Pending Action</span>
          <span className="text-3xl sm:text-4xl font-black text-amber-500 mt-1">{pendingOrders}</span>
          <span className="text-[11px] text-slate-400 mt-1">Awaiting dispatch</span>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <span className="text-xs font-bold text-emerald-500 uppercase">Completed Jobs</span>
          <span className="text-3xl sm:text-4xl font-black text-emerald-500 mt-1">{completedOrders}</span>
          <span className="text-[11px] text-slate-400 mt-1">Successfully treated</span>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Top Request</span>
          <span className="text-lg font-bold text-slate-900 dark:text-white mt-2 truncate">{topService}</span>
          <span className="text-[11px] text-slate-400 mt-1">Most ordered pest service</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === 'orders'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Customer Orders ({orders.length})
        </button>

        <button
          onClick={() => setActiveTab('queries')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeTab === 'queries'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Inquiries / Messages ({queries.length})
        </button>
      </div>

      {/* ORDERS TAB */}
      {activeTab === 'orders' && (
        <div className="flex flex-col gap-4">
          {/* Filter Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-[240px]">
              <span className="material-symbols-outlined text-slate-400">search</span>
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search by customer name, phone, address, or service..."
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="p-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Orders Table */}
          <div className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-slate-400 text-sm">
                        No customer orders match your criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => {
                      const cleanPhone = order.contact.replace(/[^0-9]/g, '');
                      const whatsappMsg = encodeURIComponent(
                        `Hello ${order.name}! We have received your order (#${order.id}) for ${order.service} at Peso Pest Solutions. Our team is ready to dispatch.`
                      );

                      return (
                        <tr key={order.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="p-4 font-black text-emerald-600 dark:text-emerald-400">
                            #{order.id}
                          </td>
                          <td className="p-4">
                            <div className="font-bold text-slate-900 dark:text-white">{order.name}</div>
                            <div className="text-xs text-slate-500">{order.contact}</div>
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-slate-800 dark:text-slate-200">{order.service}</div>
                            {order.notes && (
                              <div className="text-[11px] text-slate-400 line-clamp-1 max-w-xs">{order.notes}</div>
                            )}
                          </td>
                          <td className="p-4 text-xs text-slate-600 dark:text-slate-300 max-w-[180px] truncate">
                            {order.location}
                          </td>
                          <td className="p-4 text-xs text-slate-400 whitespace-nowrap">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusBadge(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* WhatsApp Direct Message */}
                              <a
                                href={`https://wa.me/${cleanPhone}?text=${whatsappMsg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 transition-colors"
                                title="Message on WhatsApp"
                              >
                                <span className="material-symbols-outlined text-base">chat</span>
                              </a>

                              {/* Mark Done */}
                              {order.status !== 'Done' && (
                                <button
                                  onClick={() => updateStatus(order.id, 'Done')}
                                  className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 transition-colors"
                                  title="Mark as Completed"
                                >
                                  <span className="material-symbols-outlined text-base">check</span>
                                </button>
                              )}

                              {/* Cancel */}
                              {order.status !== 'Cancelled' && (
                                <button
                                  onClick={() => updateStatus(order.id, 'Cancelled')}
                                  className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 hover:bg-amber-100 transition-colors"
                                  title="Mark as Cancelled"
                                >
                                  <span className="material-symbols-outlined text-base">block</span>
                                </button>
                              )}

                              {/* Delete */}
                              <button
                                onClick={() => deleteOrder(order.id)}
                                className="p-2 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 hover:bg-red-100 transition-colors"
                                title="Delete Order"
                              >
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* QUERIES TAB */}
      {activeTab === 'queries' && (
        <div className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Message</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {queries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-400 text-sm">
                      No customer inquiries logged yet.
                    </td>
                  </tr>
                ) : (
                  queries.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 text-xs text-slate-400 whitespace-nowrap">
                        {new Date(q.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{q.name}</td>
                      <td className="p-4">
                        <a href={`mailto:${q.email}`} className="text-emerald-600 dark:text-emerald-400 text-xs hover:underline">
                          {q.email}
                        </a>
                      </td>
                      <td className="p-4 text-xs text-slate-600 dark:text-slate-300 max-w-md">{q.message}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => deleteQuery(q.id)}
                          className="p-2 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 hover:bg-red-100 transition-colors"
                          title="Delete Message"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
