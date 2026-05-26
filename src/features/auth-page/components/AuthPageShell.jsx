import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Check,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import image from '../../../assets/image';

const pageContent = {
  login: {
    heroEyebrow: 'Operations Access',
    heroTitle: 'Log in and keep every shipment in view.',
    heroDescription:
      'Access shipment visibility, live route intelligence, and customer updates from one focused workspace built for modern logistics teams.',
    formEyebrow: 'Member Login',
    formTitle: 'Welcome back to PrimeOrbit',
    formDescription:
      'Use your work credentials to review active orders, monitor delivery health, and keep your team aligned.',
    submitLabel: 'Login',
    switchText: "Don't have an account?",
    switchLabel: 'Register now',
    switchPath: '/register',
    panelTitle: 'Stay ahead of every route change.',
    panelPoints: [
      'Review live shipment status from a single dashboard.',
      'Watch route progress, delays, and customer delivery windows.',
      'Coordinate faster with a cleaner operational workflow.',
    ],
    summaryStat: '98.4%',
    summaryLabel: 'on-time delivery accuracy across active accounts',
    summaryChip: 'Secure access',
    panelImage: image.containerStacks,
    panelImageAlt: 'PrimeOrbit logistics operations',
    fields: [
      {
        name: 'email',
        label: 'Work Email',
        placeholder: 'operations@primeorbit.com',
        type: 'email',
        autoComplete: 'email',
        Icon: Mail,
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password',
        autoComplete: 'current-password',
        Icon: LockKeyhole,
      },
    ],
    helperMode: 'login',
    helperTitle: 'Need onboarding support?',
    helperText:
      'Our team can help set up account access and permission roles for your operation.',
  },
  register: {
    heroEyebrow: 'Account Setup',
    heroTitle: 'Create an account that fits your logistics workflow.',
    heroDescription:
      'Bring shipment tracking, customer communication, and operational reporting into one polished control layer for your team.',
    formEyebrow: 'Create Account',
    formTitle: 'Open your PrimeOrbit workspace',
    formDescription:
      'Register your company profile to get a cleaner way to manage routes, inventory touchpoints, and shipment updates.',
    submitLabel: 'Register',
    switchText: 'Already have an account?',
    switchLabel: 'Login here',
    switchPath: '/login',
    panelTitle: 'Start with a control tower that scales.',
    panelPoints: [
      'Set up teams around shipping, warehousing, and delivery.',
      'Centralize order visibility across multiple locations.',
      'Give clients a more polished and transparent experience.',
    ],
    summaryStat: '132+',
    summaryLabel: 'partner hubs already connected across active regions',
    summaryChip: 'Fast setup',
    panelImage: image.cargoShipAerial,
    panelImageAlt: 'PrimeOrbit shipping network',
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        placeholder: 'Johnathan Smith',
        type: 'text',
        autoComplete: 'name',
        Icon: UserRound,
      },
      {
        name: 'email',
        label: 'Company Email',
        placeholder: 'team@primeorbit.com',
        type: 'email',
        autoComplete: 'email',
        Icon: Mail,
      },
      {
        name: 'company',
        label: 'Company Name',
        placeholder: 'PrimeOrbit Logistics',
        type: 'text',
        autoComplete: 'organization',
        Icon: Building2,
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: 'Create a secure password',
        type: 'password',
        autoComplete: 'new-password',
        Icon: LockKeyhole,
      },
    ],
    helperMode: 'register',
    helperTitle: 'Designed for real logistics teams',
    helperText:
      'Your registration can be reviewed and aligned with business roles before wider team rollout.',
  },
};

const highlightStats = [
  { value: '24/7', label: 'shipment visibility with focused operational updates' },
  { value: '48h', label: 'faster response windows across delivery exceptions' },
  { value: '132+', label: 'connected partner hubs across routes and regions' },
];

const AuthPageShell = ({ variant = 'login' }) => {
  const config = pageContent[variant] ?? pageContent.login;

  return (
    <div className="min-h-screen bg-white font-sans text-[#121336] flex flex-col">
      <Navbar theme="dark" />

      <main className="flex-1">
        <section
          data-theme="dark"
          className="relative overflow-hidden bg-[#11131d] px-4 pb-[72px] pt-[146px] sm:px-6 md:pb-[88px] md:pt-[158px] lg:px-[68px]"
        >
          <div className="absolute inset-0">
            <img
              src={config.panelImage}
              alt=""
              className="h-full w-full object-cover opacity-[0.12]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,205,81,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(42,42,124,0.42),transparent_36%),linear-gradient(180deg,rgba(9,11,20,0.84),rgba(18,20,33,0.97))]" />
          </div>

          <div className="relative mx-auto grid max-w-[1320px] gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-between rounded-[32px] border border-white/12 bg-white/[0.08] p-[24px] text-white shadow-[0px_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-[18px] md:p-[32px] lg:min-h-[740px]">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-[14px] py-[8px] text-[12px] font-semibold uppercase tracking-[0.24em] text-[#ffdd80]">
                  {config.heroEyebrow}
                </span>

                <h1 className="mt-6 max-w-[700px] font-geist text-[42px] font-medium leading-[94%] tracking-[-0.05em] md:text-[58px] xl:text-[74px]">
                  {config.heroTitle}
                </h1>

                <p className="mt-6 max-w-[560px] text-[16px] leading-[155%] text-white/76 md:text-[19px]">
                  {config.heroDescription}
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {highlightStats.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-[24px] border border-white/10 bg-white/6 p-[18px] shadow-[0px_10px_28px_rgba(0,0,0,0.12)]"
                  >
                    <div className="text-[28px] font-medium leading-none text-[#ffdd80] md:text-[32px]">
                      {item.value}
                    </div>
                    <p className="mt-3 text-[13px] leading-[150%] text-white/68">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#14172a]/90">
                <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                  <div className="p-[24px] md:p-[30px]">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.26em] text-white/42">
                      PrimeOrbit Console
                    </span>

                    <p className="mt-4 max-w-[360px] text-[28px] font-medium leading-[110%] tracking-[-0.03em] text-white">
                      {config.panelTitle}
                    </p>

                    <div className="mt-6 flex flex-col gap-4 text-white/72">
                      {config.panelPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#ffcd51] text-[#11131d]">
                            <Check size={13} strokeWidth={2.8} />
                          </div>
                          <p className="text-[14px] leading-[150%]">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[220px] border-t border-white/10 md:border-l md:border-t-0">
                    <img
                      src={config.panelImage}
                      alt={config.panelImageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,20,33,0.18)_0%,rgba(18,20,33,0.72)_100%)]" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-black/25 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/88">
                      Real-time updates
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/14 bg-white/10 p-4 backdrop-blur-md">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                        Operations Summary
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div>
                          <div className="text-[28px] font-medium leading-none text-white">
                            {config.summaryStat}
                          </div>
                          <div className="mt-2 max-w-[220px] text-[13px] leading-[145%] text-white/68">
                            {config.summaryLabel}
                          </div>
                        </div>

                        <div className="rounded-full bg-[#ffcd51] px-3 py-2 text-[12px] font-semibold text-[#111318]">
                          {config.summaryChip}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#f6f7fb] p-[22px] text-[#121336] shadow-[0px_24px_80px_rgba(7,10,19,0.18)] md:p-[32px]">
              <div className="flex items-center gap-3 rounded-full bg-white p-[6px] shadow-[0px_10px_30px_rgba(15,23,42,0.08)]">
                <Link
                  to="/login"
                  className={`flex-1 rounded-full px-4 py-[14px] text-center text-[15px] font-semibold transition-all ${
                    variant === 'login'
                      ? 'bg-[#191919] text-white shadow-[0px_10px_25px_rgba(15,23,42,0.16)]'
                      : 'text-[#63697b] hover:bg-[#f4f6fb]'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`flex-1 rounded-full px-4 py-[14px] text-center text-[15px] font-semibold transition-all ${
                    variant === 'register'
                      ? 'bg-secondary text-white shadow-[0px_10px_25px_rgba(42,42,124,0.22)]'
                      : 'text-[#63697b] hover:bg-[#f4f6fb]'
                  }`}
                >
                  Register
                </Link>
              </div>

              <div className="mt-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7a8093]">
                  {config.formEyebrow}
                </p>

                <h2 className="mt-3 font-plusJakarta text-[34px] font-bold leading-[110%] tracking-[-0.04em] text-[#121336]">
                  {config.formTitle}
                </h2>

                <p className="mt-4 max-w-[480px] text-[15px] leading-[150%] text-[#5e6474]">
                  {config.formDescription}
                </p>
              </div>

              <form className="mt-8 flex flex-col gap-[18px]" onSubmit={(event) => event.preventDefault()}>
                {config.fields.map(({ name, label, placeholder, type, autoComplete, Icon }) => (
                  <label key={name} className="flex flex-col gap-[10px]">
                    <span className="text-[14px] font-semibold text-[#30364b]">{label}</span>

                    <div className="flex items-center gap-3 rounded-[18px] border border-[#e7e9f2] bg-white px-4 py-[15px] shadow-[0px_6px_20px_rgba(15,23,42,0.04)] transition-colors focus-within:border-secondary">
                      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#eef1ff] text-[#2a2a7c]">
                        <Icon size={18} />
                      </div>

                      <input
                        type={type}
                        name={name}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        className="w-full border-none bg-transparent text-[15px] text-[#121336] placeholder:text-[#9aa1b3] focus:outline-none"
                      />
                    </div>
                  </label>
                ))}

                {config.helperMode === 'login' ? (
                  <div className="flex flex-col gap-3 text-[14px] text-[#5e6474] sm:flex-row sm:items-center sm:justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#cfd4e3] text-secondary focus:ring-secondary"
                      />
                      <span>Keep me signed in</span>
                    </label>

                    <Link to="/contact" className="font-semibold text-secondary transition-colors hover:text-secondary/80">
                      Need help signing in?
                    </Link>
                  </div>
                ) : (
                  <p className="text-[13px] leading-[155%] text-[#5e6474]">
                    By creating an account, you agree that PrimeOrbit may review your registration
                    for workspace setup and business verification.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-[100px] bg-[#2a2a7c] px-6 py-[18px] text-[16px] font-semibold text-white transition-colors hover:bg-[#2a2a7c]/90"
                >
                  <span>{config.submitLabel}</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] bg-white p-5 shadow-[0px_10px_28px_rgba(15,23,42,0.06)]">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#eef1ff] text-secondary">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-[#121336]">
                    Protected workspace
                  </h3>
                  <p className="mt-2 text-[13px] leading-[150%] text-[#5e6474]">
                    Role-based access and cleaner account entry for your team operations.
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#eef0ff] p-5 shadow-[0px_10px_28px_rgba(15,23,42,0.04)]">
                  <p className="text-[17px] font-semibold tracking-tight text-[#121336]">
                    {config.helperTitle}
                  </p>
                  <p className="mt-2 text-[13px] leading-[150%] text-[#4f5568]">{config.helperText}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-secondary transition-colors hover:text-secondary/80"
                  >
                    Contact our team
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-center text-[14px] text-[#5e6474]">
                <span>{config.switchText} </span>
                <Link to={config.switchPath} className="font-semibold text-secondary transition-colors hover:text-secondary/80">
                  {config.switchLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthPageShell;
