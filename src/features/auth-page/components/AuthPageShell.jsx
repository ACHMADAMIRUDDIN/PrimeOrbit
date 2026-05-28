import React from "react";
import { Link } from "react-router-dom";
import { Mail, LockKeyhole, Eye, ArrowRight, ChevronLeft } from "lucide-react";
import image from "../../../assets/image";

const pageContent = {
  login: {
    heroTitle: "Manage Shipments More Effectively.",
    heroDescription:
      "PrimeOrbit helps you monitor shipment status, expedition routes, and cargo fleets in real-time from a single operational dashboard.",
    formTitle: "Welcome Back",
    formDescription: "Sign in to your PrimeOrbit operational account",
    submitLabel: "Sign In to Dashboard",
    switchText: "Don't have an account?",
    switchLabel: "Register Now",
    switchPath: "/register",
    panelImage: image.containerStacks,
    fields: [
      {
        name: "email",
        label: "Work Email Address",
        placeholder: "operations@primeorbit.com",
        type: "email",
        autoComplete: "email",
        Icon: Mail,
      },
      {
        name: "password",
        label: "Password",
        placeholder: "********",
        type: "password",
        autoComplete: "current-password",
        Icon: LockKeyhole,
        isPassword: true,
      },
    ],
  },
  register: {
    heroTitle: "Start Tracking Fleets Easily.",
    heroDescription:
      "Join PrimeOrbit to optimize logistics management, inventory touchpoints, and your customers' shipment satisfaction.",
    formTitle: "Register New Account",
    formDescription: "Complete the details to create your PrimeOrbit workspace",
    submitLabel: "Create New Account",
    switchText: "Already have an account?",
    switchLabel: "Sign In Now",
    switchPath: "/login",
    panelImage: image.cargoShipAerial,
    fields: [
      {
        name: "email",
        label: "Company Email Address",
        placeholder: "team@primeorbit.com",
        type: "email",
        autoComplete: "email",
        Icon: Mail,
      },
      {
        name: "password",
        label: "Password",
        placeholder: "********",
        type: "password",
        autoComplete: "new-password",
        Icon: LockKeyhole,
        isPassword: true,
      },
    ],
  },
};

const AuthPageShell = ({ variant = "login" }) => {
  const config = pageContent[variant] ?? pageContent.login;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white font-sans">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <div className="absolute inset-0 lg:hidden">
        <img
          src={config.panelImage}
          alt="PrimeOrbit Logistics Network"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#20236a]/90 via-[#2a2a7c]/85 to-[#0f0f12]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Link
        to="/"
        className="group absolute left-4 top-4 z-30 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/20 active:scale-[0.98] md:left-6 md:top-6"
        style={{ animationDelay: "100ms" }}
      >
        <ChevronLeft
          size={14}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        <span>Back</span>
      </Link>

      <div className="hidden h-screen w-full lg:grid lg:grid-cols-[75fr_40fr]">
        <div className="relative flex h-screen flex-col justify-between overflow-hidden p-16">
          <div className="absolute inset-0">
            <img
              src={config.panelImage}
              alt="PrimeOrbit Logistics Network"
              className="h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#20236a]/90 via-[#2a2a7c]/85 to-[#0f0f12]/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="relative z-10">
            <div
              className="mt-8 flex items-center gap-3 animate-fade-in-left"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white p-2 shadow-md">
                <img
                  src={image.navbarLogo}
                  alt="PrimeOrbit"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[24px] font-bold leading-none tracking-tight text-white">
                  PrimeOrbit
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffdd80]">
                  LOGISTICS NETWORK
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-12">
            <h1
              className="animate-fade-in-left text-[48px] font-bold leading-[115%] tracking-[-0.02em] text-white"
              style={{ animationDelay: "450ms" }}
            >
              {config.heroTitle.split(" ").map((word, i) =>
                word === "More" ||
                word === "Effectively." ||
                word === "Easily." ? (
                  <span key={i} className="text-[#ffcd51]">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={i}> {word}</span>
                ),
              )}
            </h1>

            <p
              className="mt-4 max-w-[460px] animate-fade-in-left text-[16px] leading-[160%] text-white/80"
              style={{ animationDelay: "600ms" }}
            >
              {config.heroDescription}
            </p>
          </div>
        </div>

        <div className="flex h-screen flex-col items-center justify-center bg-[#f8fafc] p-8">
          <div className="w-full max-w-[420px] animate-fade-in-up rounded-[26px] border border-gray-100/80 bg-white p-6 shadow-[0px_20px_50px_rgba(15,23,42,0.04)] md:p-8">
            <AuthForm config={config} variant={variant} />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-screen w-full items-center justify-center px-4 py-16 lg:hidden">
        <div className="w-full max-w-[360px] animate-fade-in-up rounded-[24px] border border-white/25 bg-white/20 p-5 shadow-[0px_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <AuthForm config={config} variant={variant} isMobile />
        </div>
      </div>
    </div>
  );
};

const AuthForm = ({ config, variant, isMobile = false }) => {
  return (
    <>
      <div className="text-center lg:text-left">
        <div className="mb-5 flex items-center justify-center gap-2 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 p-1.5 shadow-sm backdrop-blur-md">
            <img
              src={image.navbarLogo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <span
            className={`text-[18px] font-bold ${
              isMobile ? "text-white" : "text-[#111827]"
            }`}
          >
            PrimeOrbit
          </span>
        </div>

        <h2
          className={`text-[23px] font-bold tracking-tight md:text-[27px] ${
            isMobile ? "text-white" : "text-[#111827]"
          }`}
        >
          {config.formTitle}
        </h2>

        <p
          className={`mt-1.5 text-[13px] leading-[150%] md:text-[14px] ${
            isMobile ? "text-white/75" : "text-gray-500"
          }`}
        >
          {config.formDescription}
        </p>
      </div>

      <form
        className={`${isMobile ? "mt-6 gap-3.5" : "mt-7 gap-4"} flex flex-col`}
        onSubmit={(e) => e.preventDefault()}
      >
        {config.fields.map(
          ({
            name,
            label,
            placeholder,
            type,
            autoComplete,
            Icon,
            isPassword,
          }) => (
            <div key={name} className="flex flex-col gap-1.5">
              <label
                className={`text-[12.5px] font-semibold md:text-[13px] ${
                  isMobile ? "text-white/90" : "text-gray-700"
                }`}
              >
                {label}
              </label>

              <div
                className={`flex items-center gap-3 rounded-[14px] px-4 py-3 transition-all md:py-3.5 ${
                  isMobile
                    ? "border border-white/20 bg-white/85 focus-within:border-white focus-within:bg-white focus-within:ring-2 focus-within:ring-white/20"
                    : "border border-gray-100 bg-[#f9fafb] focus-within:border-[#20236a] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#20236a]/10"
                }`}
              >
                <Icon size={17} className="shrink-0 text-gray-400" />

                <input
                  type={type}
                  name={name}
                  autoComplete={autoComplete}
                  placeholder={placeholder}
                  className="w-full border-none bg-transparent text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />

                {isPassword && (
                  <button
                    type="button"
                    className="text-gray-400 transition-colors hover:text-gray-600"
                  >
                    <Eye size={17} />
                  </button>
                )}
              </div>
            </div>
          ),
        )}

        {variant === "login" && (
          <div className="mt-1 flex items-center justify-between text-[13px]">
            <label
              className={`flex cursor-pointer items-center gap-2.5 font-medium ${
                isMobile ? "text-white/85" : "text-gray-600"
              }`}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded-md border-gray-300 text-[#20236a] focus:ring-[#20236a]"
              />
              <span>Remember Me</span>
            </label>
          </div>
        )}

        <button
          type="submit"
          className="group mt-3 flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#20236a] to-[#2a2a7c] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0px_8px_20px_rgba(32,35,106,0.25)] transition-all duration-300 hover:opacity-95 active:scale-[0.99]"
        >
          <span>{config.submitLabel}</span>
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>

      <div
        className={`${isMobile ? "mt-5" : "mt-7"} flex flex-col items-center gap-6`}
      >
        <div
          className={`text-center text-[13px] ${
            isMobile ? "text-white/75" : "text-gray-500"
          }`}
        >
          <span>{config.switchText} </span>

          <Link
            to={config.switchPath}
            className={`ml-1 inline-flex items-center justify-center rounded-xl px-3.5 py-1.5 font-semibold transition-colors ${
              isMobile
                ? "border border-white/25 bg-white/20 text-white hover:bg-white/30"
                : "border border-[#c5cdfa] bg-[#dde1f9] text-[#20236a] hover:bg-[#c5cdfa]"
            }`}
          >
            {config.switchLabel}
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthPageShell;
