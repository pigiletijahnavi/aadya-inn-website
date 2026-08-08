import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Initialize Supabase client if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  message?: string;
}

/**
 * Submits a booking enquiry.
 * Falls back to localStorage if Supabase credentials are not set.
 */
export async function submitEnquiry(data: EnquiryData) {
  if (supabase) {
    const { data: result, error } = await supabase
      .from("enquiries")
      .insert([data])
      .select();
    
    if (error) {
      throw error;
    }
    return result;
  } else {
    // Local Mock Fallback: Log and save to localStorage
    console.warn("Supabase credentials not configured. Saving enquiry to localStorage locally.");
    
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const localEnquiries = JSON.parse(localStorage.getItem("addyainn_enquiries") || "[]");
    const newEnquiry = {
      ...data,
      id: Math.floor(Math.random() * 1000000),
      createdAt: new Date().toISOString(),
    };
    localEnquiries.push(newEnquiry);
    localStorage.setItem("addyainn_enquiries", JSON.stringify(localEnquiries));
    
    return [newEnquiry];
  }
}
