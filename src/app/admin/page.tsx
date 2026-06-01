"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Search, Download, RefreshCw, Users, TrendingUp, Clock, CheckCircle,
  ChevronLeft, ChevronRight, Edit2, X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || "";

interface Lead {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  pan: string;
  gender: string;
  employmentType: string;
  salary: number;
  desiredAmount: number;
  city: string;
  status: string;
  notes: string;
  source: string;
  createdAt: string;
}

const STATUS_OPTIONS = ["new", "contacted", "qualified", "converted", "lost"] as const;
type Status = (typeof STATUS_OPTIONS)[number];

const STATUS_COLORS: Record<Status, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  qualified: "bg-purple-100 text-purple-700",
  converted: "bg-green-100 text-green-700",
  lost: "bg-red-100 text-red-700",
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [editLead, setEditLead] = useState<Lead | null>(null);
  const [editStatus, setEditStatus] = useState<Status>("new");
  const [editNotes, setEditNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const fetchLeads = useCallback(async (pg = 1, q = "", st = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(pg), limit: "20" });
      if (q) params.set("search", q);
      if (st) params.set("status", st);
      const res = await fetch(`/api/admin/leads?${params}`, {
        headers: { "x-admin-secret": ADMIN_SECRET || secret },
      });
      if (res.status === 401) { setAuthenticated(false); return; }
      const data = await res.json();
      setLeads(data.leads || []);
      setTotal(data.total || 0);
      setPages(data.pages || 1);
    } finally {
      setLoading(false);
    }
  }, [secret]);

  useEffect(() => {
    if (!authenticated) return;
    const t = setTimeout(() => fetchLeads(page, search, statusFilter), 300);
    return () => clearTimeout(t);
  }, [authenticated, page, search, statusFilter, fetchLeads]);

  const handleAuth = () => {
    if (!secret.trim()) { setAuthError("Enter the admin secret"); return; }
    setAuthenticated(true);
    setAuthError("");
  };

  const handleExport = () => {
    const params = new URLSearchParams({ export: "csv" });
    if (search) params.set("search", search);
    if (statusFilter) params.set("status", statusFilter);
    const url = `/api/admin/leads?${params}`;
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("x-admin-secret", ADMIN_SECRET || secret);
    // Open URL with fetch for download
    fetch(url, { headers: { "x-admin-secret": ADMIN_SECRET || secret } })
      .then((r) => r.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `leads-${Date.now()}.csv`;
        link.click();
      });
  };

  const openEdit = (lead: Lead) => {
    setEditLead(lead);
    setEditStatus(lead.status as Status);
    setEditNotes(lead.notes || "");
  };

  const saveEdit = async () => {
    if (!editLead) return;
    setSaving(true);
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": ADMIN_SECRET || secret,
      },
      body: JSON.stringify({ id: editLead._id, status: editStatus, notes: editNotes }),
    });
    setSaving(false);
    setEditLead(null);
    fetchLeads(page, search, statusFilter);
  };

  // Auth screen
  if (!authenticated) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <span className="text-3xl font-black text-[#E53935]">Mera Loan</span>
            <p className="text-gray-500 text-sm mt-1">Admin Dashboard</p>
          </div>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Admin Secret"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAuth()}
              className="h-12 rounded-xl border-2"
            />
            {authError && <p className="text-red-500 text-xs">{authError}</p>}
            <Button onClick={handleAuth} className="w-full gradient-brand border-0 text-white h-12 rounded-xl font-bold">
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const statsCards = [
    { label: "Total Leads", value: total, icon: Users, color: "bg-blue-50 text-blue-600" },
    { label: "New Today", value: leads.filter((l) => l.status === "new").length, icon: Clock, color: "bg-yellow-50 text-yellow-600" },
    { label: "Qualified", value: leads.filter((l) => l.status === "qualified").length, icon: TrendingUp, color: "bg-purple-50 text-purple-600" },
    { label: "Converted", value: leads.filter((l) => l.status === "converted").length, icon: CheckCircle, color: "bg-green-50 text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-[#E53935]">Mera Loan</span>
          <span className="text-gray-400 text-sm">Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleExport} variant="outline" size="sm" className="gap-2 rounded-xl border-gray-200">
            <Download className="h-4 w-4" /> Export CSV
          </Button>
          <Button onClick={() => fetchLeads(page, search, statusFilter)} variant="outline" size="sm" className="rounded-xl border-gray-200">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {statsCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center`}>
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-black text-gray-900">{card.value}</p>
                <p className="text-gray-500 text-xs">{card.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, mobile, city..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-10 h-10 rounded-xl border-gray-200"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => { setStatusFilter(""); setPage(1); }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  statusFilter === "" ? "gradient-brand text-white border-0 shadow-sm" : "border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                All
              </button>
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => { setStatusFilter(s); setPage(1); }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${
                    statusFilter === s ? "gradient-brand text-white border-0 shadow-sm" : "border border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-[#F8FAFC]">
                  {["Name", "Contact", "PAN", "Employment", "Salary", "Desired Amt", "City", "Status", "Date", "Actions"].map((h) => (
                    <th key={h} className="text-left text-gray-500 font-semibold py-4 px-4 whitespace-nowrap text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={10} className="text-center py-12 text-gray-400">Loading...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={10} className="text-center py-12 text-gray-400">No leads found.</td></tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="border-b border-gray-50 hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900 whitespace-nowrap">
                        {lead.firstName} {lead.lastName}
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-700">{lead.mobile}</div>
                        <div className="text-gray-400 text-xs">{lead.email}</div>
                      </td>
                      <td className="py-4 px-4 font-mono text-gray-600 text-xs">{lead.pan}</td>
                      <td className="py-4 px-4 text-gray-600">{lead.employmentType}</td>
                      <td className="py-4 px-4 text-gray-700 whitespace-nowrap">
                        ₹{(lead.salary / 1000).toFixed(0)}K
                      </td>
                      <td className="py-4 px-4 text-gray-700 whitespace-nowrap">
                        ₹{(lead.desiredAmount / 100000).toFixed(1)}L
                      </td>
                      <td className="py-4 px-4 text-gray-600">{lead.city}</td>
                      <td className="py-4 px-4">
                        <Badge className={`${STATUS_COLORS[lead.status as Status] || "bg-gray-100 text-gray-600"} border-0 font-semibold capitalize`}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-gray-500 whitespace-nowrap text-xs">
                        {format(new Date(lead.createdAt), "dd MMM yy")}
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => openEdit(lead)}
                          className="text-[#E53935] hover:text-red-700 transition-colors p-1"
                          aria-label="Edit lead"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-4 border-t border-gray-100">
            <span className="text-gray-500 text-sm">
              {total} total leads
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-[#E53935] hover:text-[#E53935] disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-gray-700 px-2">
                Page {page} of {pages}
              </span>
              <button
                disabled={page === pages}
                onClick={() => setPage((p) => p + 1)}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-[#E53935] hover:text-[#E53935] disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {editLead && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-7 relative">
            <button onClick={() => setEditLead(null)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-black text-gray-900 mb-5">
              Update Lead: {editLead.firstName} {editLead.lastName}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Status</label>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setEditStatus(s)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all border-2 ${
                        editStatus === s ? "border-[#E53935] bg-red-50 text-[#E53935]" : "border-gray-200 text-gray-500"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Notes</label>
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border-2 border-gray-200 p-3 text-sm focus:border-[#E53935] outline-none resize-none"
                  placeholder="Add notes about this lead..."
                  maxLength={2000}
                />
              </div>
              <Button
                onClick={saveEdit}
                disabled={saving}
                className="w-full gradient-brand border-0 text-white font-bold h-12 rounded-xl"
              >
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
