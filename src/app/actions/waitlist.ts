"use server";

import { supabase } from "@/lib/supabase-server";

type WaitlistData = {
  contactMethod: "email" | "phone";
  email: string | null;
  phone: string | null;
  purpose: "buscar" | "ofrecer" | "ambas";
  categories: string[];
};

type WaitlistResult = {
  success: boolean;
  error?: string;
  position?: number;
};

export async function getWaitlistCount(): Promise<number> {
  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Error fetching waitlist count:", error);
    return 0;
  }

  return count || 0;
}

export async function submitToWaitlist(data: WaitlistData): Promise<WaitlistResult> {
  const { contactMethod, email, phone, purpose, categories } = data;

  const { error: insertError } = await supabase
    .from("waitlist")
    .insert({
      contact_method: contactMethod,
      email: contactMethod === "email" ? email : null,
      phone: contactMethod === "phone" ? phone : null,
      purpose: purpose,
      categories: categories,
    });

  if (insertError) {
    if (insertError.code === "23505") {
      return { success: false, error: "Ya estás en la lista de espera." };
    }
    return { success: false, error: "Ocurrió un error. Por favor, intentá de nuevo." };
  }

  // Get waitlist position
  const { count } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  return { success: true, position: count || 1 };
}
