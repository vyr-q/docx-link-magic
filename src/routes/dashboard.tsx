import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogOut, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard" }] }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate({ to: "/auth", replace: true });
      else setEmail(session.user.email ?? null);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate({ to: "/auth", replace: true });
      } else {
        setEmail(data.session.user.email ?? null);
        setChecking(false);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (checking) {
    return <div className="flex min-h-screen items-center justify-center text-muted-foreground">Loading…</div>;
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-tight">Your App</span>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium hover:bg-accent"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-black/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">You're signed in</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Logged in as <span className="text-foreground">{email}</span>
          </p>
        </div>
      </main>
    </div>
  );
}
