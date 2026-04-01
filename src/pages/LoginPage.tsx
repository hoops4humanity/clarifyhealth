import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageMeta from "@/components/PageMeta";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate("/my-notes");
    }
  };

  return (
    <>
      <PageMeta title="Log In | Clarify Health" description="Log in to access your doctor visit notes and health journal." canonical="/login" />
      <main className="min-h-screen flex items-center justify-center px-6 pt-20 pb-24">
        <div className="w-full max-w-[400px]">
          <h1
            className="text-[32px] font-medium mb-2"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.5px" }}
          >
            {t("auth.login")}
          </h1>
          <p className="text-muted-foreground text-[14px] mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("auth.loginSub")}
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-[13px]">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-[13px]">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            {error && (
              <p className="text-destructive text-[13px]">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {loading ? "..." : t("auth.login")}
            </Button>
          </form>

          <p className="mt-6 text-center text-[13px] text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("auth.noAccount")}{" "}
            <Link to="/signup" className="text-primary hover:underline font-medium">
              {t("auth.signup")}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
