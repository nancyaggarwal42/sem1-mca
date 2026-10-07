import { useState } from "react";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Brain,
  Heart,
  Sprout,
  Sparkles,
  Flower2,
} from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign-in form submitted:", {
      email: formData.email,
      rememberMe: formData.rememberMe,
    });

    // Connect your backend login API here.
  };

  const handleGoogleSignIn = () => {
    // Connect Google OAuth here.
    console.log("Google sign-in clicked");
  };

  return (
    <main className="relative h-screen overflow-hidden bg-[#060B16] font-sans text-[#E5E7EB]">

      {/* Background image */}
      <div className="absolute inset-0">
         <img 
          src="/images/sunset_girls.png"
        alt="A girl peacefully watching the sunset over the mountains"
           className="h-full w-full object-cover object-center opacity-60"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B16] via-[#060B16]/90 to-[#060B16]/75" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B16]/90 via-transparent to-[#060B16]/40" />

        {/* Purple glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

        {/* Blue glow */}
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-2">

        {/* LEFT SECTION */}
        <section className="flex flex-col px-6 py-8 sm:px-10 md:px-16 lg:px-12 xl:px-20">

          {/* Logo */}
          <a href="/" className="flex w-fit items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center text-[#A78BFA]">
              <Flower2 size={42} strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Serenity{" "}
                <span className="text-[#A78BFA]">Steps</span>
              </h2>

              <p className="mt-1 text-xs tracking-[0.18em] text-[#94A3B8]">
                Heal · Grow · Be You
              </p>
            </div>
          </a>

          {/* Hero content */}
          <div className="my-auto py-14 lg:py-10">

            <p className="mb-5 flex items-center gap-2 text-sm font-medium tracking-wide text-[#A78BFA]">
              <Sparkles size={16} />
              YOUR JOURNEY STARTS HERE
            </p>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl xl:text-[52px]">
              A healthier mind
              <br />
              builds a{" "}
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent">
                brighter you
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#B8C4DA] sm:text-base">
              Take the first step towards your well-being.
              <br className="hidden sm:block" />
              We're here to support you, every step of the way.
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid max-w-xl grid-cols-3">

              {/* Detect */}
              <div className="border-r border-[#334155]/80 pr-3 sm:pr-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#17243B]/90 text-[#93B4FF]">
                  <Brain size={23} />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Detect
                </h3>

                <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#B8C4DA] sm:text-sm">
                  Understand what you're facing
                </p>
              </div>

              {/* Heal */}
              <div className="border-r border-[#334155]/80 px-3 sm:px-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#17243B]/90 text-[#67D8FF]">
                  <Heart size={23} />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Heal
                </h3>

                <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#B8C4DA] sm:text-sm">
                  Personalized recovery plans
                </p>
              </div>

              {/* Grow */}
              <div className="pl-3 sm:pl-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#17243B]/90 text-[#67D8FF]">
                  <Sprout size={23} />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Grow
                </h3>

                <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#B8C4DA] sm:text-sm">
                  A better, stronger you
                </p>
              </div>

            </div>
          </div>

          {/* Bottom message */}
          <p className="hidden pb-6 text-xs tracking-wide text-[#64748B] lg:block">
            Your well-being matters. Take it one day at a time.
          </p>
        </section>

        {/* RIGHT SECTION */}
        <section className="flex items-center justify-center px-5 pb-10 sm:px-10 lg:px-8 lg:py-12 xl:px-16">

          {/* Login card */}
          <div className="w-full max-w-[470px] rounded-[24px] border border-[#273449] bg-[#090E19]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9 md:p-10">

            {/* Card heading */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Welcome Back
                <Sparkles
                  size={23}
                  className="fill-[#8B5CF6]/20 text-[#A78BFA]"
                />
              </h2>

              <p className="mt-3 text-sm text-[#A9BBD9] sm:text-base">
                Sign in to continue your journey
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>

                <div className="flex h-[58px] items-center gap-4 rounded-2xl border border-[#303D52] bg-[#121925]/90 px-5 transition focus-within:border-[#8B5CF6] focus-within:ring-2 focus-within:ring-[#8B5CF6]/15">

                  <Mail
                    size={21}
                    className="shrink-0 text-[#A5B8FF]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-[#8492AB]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="flex h-[58px] items-center gap-4 rounded-2xl border border-[#303D52] bg-[#121925]/90 px-5 transition focus-within:border-[#8B5CF6] focus-within:ring-2 focus-within:ring-[#8B5CF6]/15">

                  <LockKeyhole
                    size={21}
                    className="shrink-0 text-[#A5B8FF]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-[#8492AB]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="shrink-0 text-[#94A3B8] transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me + forgot password */}
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">

                <label className="flex cursor-pointer items-center gap-3 text-sm text-[#B8C4DA]">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 cursor-pointer accent-[#8B5CF6]"
                  />

                  Remember me
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-[#A78BFA] transition hover:text-[#C4B5FD]"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3295FA] font-semibold text-white shadow-lg shadow-purple-500/10 transition duration-300 hover:scale-[1.01] hover:shadow-purple-500/25 active:scale-[0.99]"
              >
                Sign In

                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#293448]" />

              <span className="text-sm text-[#94A3B8]">
                or
              </span>

              <div className="h-px flex-1 bg-[#293448]" />
            </div>

            {/* Google button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-[58px] w-full items-center justify-center gap-4 rounded-full border border-[#667697] bg-transparent text-sm font-medium text-white transition hover:border-[#A78BFA] hover:bg-white/[0.03]"
            >
              {/* Google G icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  transform="translate(0 5)"
                />

                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  transform="translate(0 0)"
                />

                <path
                  fill="#FBBC05"
                  d="M10.53 28.59A14.4 14.4 0 0 1 9.77 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"
                  transform="translate(1 0)"
                />

                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  transform="translate(0 -1)"
                />
              </svg>

              Continue with Google
            </button>

            {/* Create account */}
            <p className="mt-8 text-center text-sm text-[#A9BBD9]">
              Don't have an account?{" "}

              <a
                href="/signup"
                className="font-semibold text-[#A78BFA] transition hover:text-[#C4B5FD]"
              >
                Create one
              </a>
            </p>

            {/* Card footer */}
            <div className="mt-12 flex flex-col items-center">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="h-px w-8 bg-[#334155]" />

                <p className="font-serif text-sm italic text-[#94A3B8]">
                  Small steps make big changes
                </p>

                <div className="h-px w-8 bg-[#334155]" />
              </div>

              <Heart
                size={13}
                className="mt-2 fill-[#8B5CF6] text-[#8B5CF6]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}