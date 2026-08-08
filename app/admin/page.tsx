"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Lock, 
  Search, 
  Phone, 
  MessageSquare, 
  Trash2, 
  RefreshCw, 
  LogOut, 
  Calendar, 
  Users, 
  Home as HomeIcon,
  Layers,
  Inbox,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Enquiry {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
}

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [roomFilter, setRoomFilter] = useState("All Rooms");

  // Check login state in session storage on mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("addyainn_admin_auth");
    if (sessionAuth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch enquiries from Supabase
  const fetchEnquiries = async () => {
    if (!supabase) {
      setError("Database credentials are not configured in Vercel settings.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      setEnquiries(data || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load enquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchEnquiries();
    }
  }, [isLoggedIn]);

  // Handle Admin Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "addyainn2026") {
      setIsLoggedIn(true);
      setLoginError("");
      sessionStorage.setItem("addyainn_admin_auth", "true");
    } else {
      setLoginError("Invalid password. Please try again.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    sessionStorage.removeItem("addyainn_admin_auth");
  };

  // Handle Delete/Archive
  const handleDelete = async (id: number) => {
    if (!supabase) return;
    if (!confirm("Are you sure you want to delete/archive this booking request?")) return;
    
    try {
      const { error } = await supabase
        .from("enquiries")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
      alert("Failed to delete record: " + err.message);
    }
  };

  // Format Date for humans (e.g., Aug 8, 2026)
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  // Pre-fill WhatsApp message link
  const getWhatsAppLink = (phone: string, name: string, checkIn: string, roomType: string) => {
    let cleanPhone = phone.replace(/\D/g, ""); // Remove non-digits
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone; // Default to India prefix if 10 digits
    }
    const text = `Hello ${name}, this is the Front Desk at Aadya Inn Tirupati. We received your booking request for the ${roomType} (Check-in: ${checkIn}). We would like to confirm your reservation details.`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  // Filtered enquiries based on search and select dropdowns
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.phone.includes(searchQuery) ||
      (item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRoom = roomFilter === "All Rooms" || item.roomType.toLowerCase().includes(roomFilter.toLowerCase().split(" ")[0]);
    return matchesSearch && matchesRoom;
  });

  // Calculate quick summary metrics
  const totalCount = enquiries.length;
  const queenCount = enquiries.filter(e => e.roomType.toLowerCase().includes("queen")).length;
  const kingCount = enquiries.filter(e => e.roomType.toLowerCase().includes("king")).length;
  const suiteCount = enquiries.filter(e => e.roomType.toLowerCase().includes("suite")).length;

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans flex flex-col selection:bg-temple-gold/30 selection:text-white">
      {/* HEADER BAR */}
      <header className="border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between glass-panel sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Aadya Inn Logo" className="w-8 h-8 object-contain" />
          <span className="font-display font-semibold tracking-widest text-temple-gold text-sm sm:text-base">
            AADYA INN <span className="text-white/50 text-xs font-sans tracking-normal ml-1">ADMIN</span>
          </span>
        </div>
        {isLoggedIn && (
          <button 
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/30 hover:bg-red-500 hover:text-charcoal border border-red-500/20 text-red-400 font-semibold text-xs tracking-wider uppercase transition-all duration-300"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            /* SCENE 1: PASSWORD LOGIN SCREEN */
            <motion.div 
              key="login"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md"
            >
              <div className="glass-panel-heavy p-8 rounded-2xl border border-temple-gold/25 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-radial from-temple-gold/10 to-transparent pointer-events-none" />
                
                <div className="text-center space-y-2">
                  <div className="p-3.5 rounded-full bg-temple-gold/10 border border-temple-gold/25 flex items-center justify-center w-fit mx-auto">
                    <Lock className="w-6 h-6 text-temple-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white tracking-wide">
                    Staff Portal
                  </h2>
                  <p className="text-xs text-ivory-white/50">
                    Enter the access password to manage hotel bookings.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-2 font-medium">
                      Access Password
                    </label>
                    <input 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full glass-input px-4 py-3 rounded-lg text-sm text-center tracking-widest font-bold"
                    />
                  </div>
                  
                  {loginError && (
                    <p className="text-red-400 text-xs text-center font-medium">
                      {loginError}
                    </p>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3 bg-temple-gold hover:bg-temple-gold-hover text-charcoal font-bold rounded-xl text-sm tracking-wider uppercase transition-colors shadow-lg shadow-temple-gold/10"
                  >
                    Enter Dashboard
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* SCENE 2: STAFF ADMIN DASHBOARD */
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full space-y-8"
            >
              {/* SUMMARY CARDS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Total Enquiries</span>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-white">{totalCount}</span>
                    <Layers className="w-5 h-5 text-temple-gold/60" />
                  </div>
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Queen Rooms</span>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-temple-gold">{queenCount}</span>
                    <HomeIcon className="w-5 h-5 text-white/30" />
                  </div>
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">King Rooms</span>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-temple-gold">{kingCount}</span>
                    <HomeIcon className="w-5 h-5 text-white/30" />
                  </div>
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold block">Suite Rooms</span>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display font-bold text-temple-gold">{suiteCount}</span>
                    <HomeIcon className="w-5 h-5 text-white/30" />
                  </div>
                </div>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center bg-white/[0.02] border border-white/5 p-4.5 rounded-2xl glass-panel">
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, phone or email..."
                    className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-sm"
                  />
                </div>
                
                <div className="flex gap-3 w-full md:w-auto items-center justify-end">
                  <select 
                    value={roomFilter}
                    onChange={(e) => setRoomFilter(e.target.value)}
                    className="glass-input px-4 py-2.5 rounded-xl text-sm bg-charcoal w-full md:w-48 cursor-pointer"
                  >
                    <option>All Rooms</option>
                    <option>Queen Room</option>
                    <option>King Room</option>
                    <option>Suite Room</option>
                  </select>

                  <button 
                    onClick={fetchEnquiries}
                    disabled={loading}
                    className="p-2.5 bg-white/5 hover:bg-temple-gold hover:text-charcoal border border-white/10 hover:border-temple-gold text-white rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-55 shrink-0"
                    title="Refresh data"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {/* DATABASE STATUS ALERTS */}
              {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* ENQUIRIES TABLE / GRID VIEW */}
              <div className="w-full">
                {loading && enquiries.length === 0 ? (
                  /* Loading Placeholder */
                  <div className="text-center py-20 space-y-3">
                    <RefreshCw className="w-8 h-8 text-temple-gold animate-spin mx-auto" />
                    <p className="text-sm text-ivory-white/40 uppercase tracking-widest">Loading bookings...</p>
                  </div>
                ) : filteredEnquiries.length === 0 ? (
                  /* Empty state */
                  <div className="glass-panel p-16 rounded-2xl text-center border border-white/5 flex flex-col items-center justify-center space-y-4">
                    <Inbox className="w-12 h-12 text-white/20" />
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">No booking requests found</h3>
                      <p className="text-xs text-ivory-white/50 max-w-xs mx-auto">
                        There are no guest requests matching your search query or room filter.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Desktop Table Layout */
                  <div className="overflow-x-auto w-full glass-panel rounded-2xl border border-white/5 shadow-xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/50">Guest / Contact</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/50">Check-in / Check-out</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/50">Room / Guests</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/50">Received</th>
                          <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/50 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredEnquiries.map((enquiry) => (
                          <tr 
                            key={enquiry.id}
                            className="border-b border-white/5 hover:bg-white/[0.01] transition-colors"
                          >
                            {/* Contact Column */}
                            <td className="px-6 py-5.5 space-y-1.5">
                              <h4 className="font-semibold text-white tracking-wide">{enquiry.name}</h4>
                              <div className="flex flex-col gap-0.5 text-xs text-ivory-white/60">
                                <span>📞 {enquiry.phone}</span>
                                {enquiry.email && enquiry.email !== "no-email@example.com" && (
                                  <span>✉️ {enquiry.email}</span>
                                )}
                              </div>
                            </td>

                            {/* Dates Column */}
                            <td className="px-6 py-5.5">
                              <div className="flex items-center gap-2.5 text-sm">
                                <span className="font-semibold text-white">{formatDate(enquiry.checkIn)}</span>
                                <span className="text-white/30 text-xs">➔</span>
                                <span className="font-semibold text-white">{formatDate(enquiry.checkOut)}</span>
                              </div>
                              <div className="text-[10px] text-ivory-white/40 uppercase tracking-widest mt-1 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {Math.max(1, Math.ceil((new Date(enquiry.checkOut).getTime() - new Date(enquiry.checkIn).getTime()) / (1000 * 60 * 60 * 24)))} Nights Stay
                              </div>
                            </td>

                            {/* Room Info Column */}
                            <td className="px-6 py-5.5 space-y-1">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold text-temple-gold bg-temple-gold/10 border border-temple-gold/25">
                                {enquiry.roomType}
                              </span>
                              <div className="text-xs text-ivory-white/50 flex items-center gap-1 pl-1">
                                <Users className="w-3.5 h-3.5 text-white/30" /> {enquiry.guests} guests
                              </div>
                            </td>

                            {/* Received Date Column */}
                            <td className="px-6 py-5.5 text-xs text-ivory-white/50">
                              {formatDate(enquiry.created_at)}
                              <span className="block text-[10px] text-white/30 mt-0.5">
                                {new Date(enquiry.created_at).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
                              </span>
                            </td>

                            {/* Actions Column */}
                            <td className="px-6 py-5.5 text-right">
                              <div className="flex gap-2 justify-end">
                                <a 
                                  href={`tel:${enquiry.phone}`}
                                  className="p-2 bg-white/5 hover:bg-temple-gold hover:text-charcoal border border-white/10 hover:border-temple-gold text-white rounded-lg flex items-center justify-center transition-all duration-300"
                                  title="Call Guest"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>
                                <a 
                                  href={getWhatsAppLink(enquiry.phone, enquiry.name, enquiry.checkIn, enquiry.roomType)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-emerald-600/10 hover:bg-emerald-600 hover:text-white border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center transition-all duration-300"
                                  title="Message on WhatsApp"
                                >
                                  <MessageSquare className="w-4 h-4 fill-emerald-500/10" />
                                </a>
                                <button 
                                  onClick={() => handleDelete(enquiry.id)}
                                  className="p-2 bg-red-500/10 hover:bg-red-500 hover:text-charcoal border border-red-500/20 text-red-400 rounded-lg flex items-center justify-center transition-all duration-300"
                                  title="Archive / Complete request"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
