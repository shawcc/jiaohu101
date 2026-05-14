import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  Lock,
  Menu,
  Play,
  Plus,
  Shield,
  Sparkles,
  UserRound,
  Workflow,
  X
} from 'lucide-react'

const NAV_LINKS = ['Product', 'Solutions', 'Pricing', 'Resources', 'Enterprise']

const LOGOS = [
  'ByteDance', 'Lark', 'Pico', 'CapCut', 'Lemon8',
  'TikTok', 'Volcengine', 'Douyin', 'OceanEngine', 'Feishu'
]

const METRICS = [
  { value: '4.2x', label: 'Faster project delivery' },
  { value: '67%', label: 'Reduction in manual handoffs' },
  { value: '99.9%', label: 'Enterprise uptime SLA' }
]

const AI_CAPABILITIES = [
  {
    icon: <GitBranch size={24} className="text-[#5B5FE3]" />,
    title: 'Smart Sprint Planning',
    desc: 'AI analyzes team velocity and backlog to auto-generate optimized sprint plans.'
  },
  {
    icon: <LineChart size={24} className="text-[#5B5FE3]" />,
    title: 'Proactive Risk Detection',
    desc: 'Real-time bottleneck identification and resource conflict alerts before they escalate.'
  },
  {
    icon: <Sparkles size={24} className="text-[#5B5FE3]" />,
    title: 'Semantic Requirement Auditing',
    desc: 'AI reviews PRDs for completeness, ambiguity, and cross-team consistency.'
  },
  {
    icon: <Layers size={24} className="text-[#5B5FE3]" />,
    title: 'Automated Taxonomy',
    desc: 'Intelligent classification and tagging of every task, ticket, and document.'
  },
  {
    icon: <CheckCircle2 size={24} className="text-[#5B5FE3]" />,
    title: 'Operational Health Monitoring',
    desc: 'Continuous pulse checks on project health with executive-ready summaries.'
  },
  {
    icon: <Play size={24} className="text-[#5B5FE3]" />,
    title: 'Predictive Resource Allocation',
    desc: 'Forecast team capacity and auto-suggest workload balancing across projects.'
  }
]

const AGENT_PILLARS = [
  {
    icon: <Workflow size={22} className="text-white" />,
    iconBg: 'bg-gradient-to-br from-[#5B5FE3] to-[#787BEE]',
    title: 'Architect Workflows',
    desc: 'Transform point-solution AI into scalable and automated workflows.'
  },
  {
    icon: <Bot size={22} className="text-white" />,
    iconBg: 'bg-gradient-to-br from-[#3EAB6E] to-[#58C98A]',
    title: 'Orchestrate Agents',
    desc: 'Bridge proprietary agents and third-party models through one open platform.'
  },
  {
    icon: <Globe size={22} className="text-white" />,
    iconBg: 'bg-gradient-to-br from-[#F59E0B] to-[#FBBF24]',
    title: 'Global Context',
    desc: 'Every agent operates with unified enterprise data — no intelligence silos.'
  }
]

const COMPLIANCE_ITEMS = [
  { label: 'SOC 2 Type II', icon: <Shield size={16} /> },
  { label: 'ISO 27001', icon: <Shield size={16} /> },
  { label: 'GDPR Compliant', icon: <Lock size={16} /> },
  { label: 'SSO & SAML', icon: <Lock size={16} /> },
  { label: 'Audit Logging', icon: <CheckCircle2 size={16} /> },
  { label: 'Data Residency', icon: <Globe size={16} /> }
]

const FlowNode = ({ label, icon, state, isLast }) => {
  const stateStyle = {
    active: 'border-[#5B5FE3] bg-white shadow-[0_8px_30px_rgba(91,94,227,0.18)] text-[#5B5FE3]',
    completed: 'border-[#D1D5F0] bg-[#F5F6FF] text-[#5B5FE3]',
    pending: 'border-[#E2E4E9] bg-white text-[#8F959E]'
  }

  const dotColor = {
    active: 'bg-[#5B5FE3]',
    completed: 'bg-[#5B5FE3]',
    pending: 'bg-[#D1D5DB]'
  }

  return (
    <div className="flex items-center">
      <div className={`relative flex flex-col items-center gap-2`}>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-700 ${stateStyle[state]}`}
        >
          {state === 'active' && (
            <div className="absolute -inset-1 rounded-xl bg-[#5B5FE3]/10 blur-lg" />
          )}
          <div className="relative">{icon}</div>
        </div>
        <span className={`text-[11px] font-semibold transition-colors duration-700 ${state === 'pending' ? 'text-[#8F959E]' : 'text-[#1F2329]'}`}>
          {label}
        </span>
      </div>
      {!isLast && (
        <div className="relative mx-1 mt-[-12px] h-0.5 w-8 bg-[#E2E4E9]">
          {(state === 'active' || state === 'completed') && (
            <div
              className={`handoff-beam absolute inset-y-0 left-0 h-0.5 w-4 bg-[#5B5FE3] rounded-full`}
            />
          )}
        </div>
      )}
    </div>
  )
}

const MeegleHomepage = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const heroRef = useRef(null)
  const [activeFlow, setActiveFlow] = useState(0)

  const flowNodes = [
    { label: 'Intake', icon: <Plus size={18} /> },
    { label: 'Plan', icon: <GitBranch size={18} /> },
    { label: 'Build', icon: <Layers size={18} /> },
    { label: 'Ship', icon: <Play size={18} /> }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % flowNodes.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [flowNodes.length])

  return (
    <div className="bg-white text-[#1F2329] font-sans overflow-x-hidden">
      <style>{`
        @keyframes handoffBeam {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(120px); opacity: 0; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(-18px); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91,94,227,.3); }
          50% { box-shadow: 0 0 0 16px rgba(91,94,227,0); }
        }
        @keyframes lineDraw {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .handoff-beam { animation: handoffBeam 1.8s linear infinite; }
        .float-particle { animation: floatUp 2.6s ease-out infinite; }
        .pulse-glow { animation: pulseGlow 2.4s ease-out infinite; }
        .line-draw { animation: lineDraw 1.2s ease-out forwards; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-[#F0F1F3]">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 font-black text-[22px] tracking-[-0.03em] text-[#1F2329]">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#mgl-grad-nav)" />
                <path d="M9 16L14 21L23 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="mgl-grad-nav" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#5B5FE3"/>
                    <stop offset="1" stopColor="#787BEE"/>
                  </linearGradient>
                </defs>
              </svg>
              Meegle
            </div>
            <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#646A73]">
              {NAV_LINKS.map((l) => (
                <a key={l} href="#" className="hover:text-[#1F2329] transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-[14px] font-semibold text-[#646A73] hover:text-[#1F2329] transition-colors">
              Sign In
            </button>
            <button className="rounded-lg bg-[#5B5FE3] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#4A4ED4] transition-all shadow-[0_4px_14px_rgba(91,94,227,.3)]">
              Get Started Free
            </button>
          </div>
          <button className="md:hidden p-2 text-[#1F2329]" onClick={() => setMobileMenu(true)}>
            <Menu size={24} />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 font-black text-[22px]">Meegle</div>
              <button onClick={() => setMobileMenu(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-6 text-[18px] font-semibold">
              {NAV_LINKS.map((l) => (
                <a key={l} href="#" onClick={() => setMobileMenu(false)}>{l}</a>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <button className="rounded-lg bg-[#5B5FE3] py-3 text-[16px] font-semibold text-white">
                Get Started Free
              </button>
              <button className="text-center text-[14px] font-semibold text-[#646A73]">Sign In</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F9F9FF] via-white to-white">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#5B5FE3]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#F59E0B]/4 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-[640px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E4EF] bg-white/80 px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] shadow-sm mb-6 backdrop-blur">
                <Sparkles size={14} />
                New: Multi-Agent Orchestration
              </div>

              <h1 className="text-[48px] md:text-[62px] leading-[1.04] font-black tracking-[-0.04em] text-[#111827]">
                Plan. Build. Ship.<br />
                <span className="bg-gradient-to-r from-[#5B5FE3] to-[#787BEE] bg-clip-text text-transparent">
                  Together with Agents.
                </span>
              </h1>

              <p className="mt-6 max-w-[540px] text-[17px] leading-8 text-[#5B6272]">
                Meegle unites your teams and AI agents on one platform. Transform every project into reusable organizational wisdom — anchored in your workflows, powered by multi-agent intelligence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-xl bg-[#5B5FE3] px-7 py-3.5 text-[15px] font-bold text-white hover:bg-[#4A4ED4] transition-all shadow-[0_8px_24px_rgba(91,94,227,.28)]">
                  Get Started Free
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-[#E2E4E9] bg-white px-5 py-3.5 text-[15px] font-semibold text-[#1F2329] hover:bg-[#F9FAFB] transition-all">
                  <Play size={16} className="text-[#5B5FE3]" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-[#EEF0F4] bg-white shadow-[0_24px_64px_rgba(15,23,42,0.08)] p-5 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[12px] text-[#8F959E] font-medium">Meegle — Project Flow</span>
                </div>

                <div className="rounded-2xl border border-[#F0F1F4] bg-[#FAFBFC] p-5">
                  <div className="flex items-center justify-center gap-2 mb-5">
                    {flowNodes.map((node, idx) => (
                      <FlowNode
                        key={node.label}
                        label={node.label}
                        icon={node.icon}
                        state={
                          idx < activeFlow ? 'completed' :
                          idx === activeFlow ? 'active' : 'pending'
                        }
                        isLast={idx === flowNodes.length - 1}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-3 text-[11px] mt-3">
                    <div className="flex items-center gap-1.5 rounded-full border border-[#E2E4E9] bg-white px-3 py-1.5">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#111827] text-white">
                        <UserRound size={8} />
                      </span>
                      <span className="font-medium text-[#1F2329]">PM confirmed</span>
                      <CheckCircle2 size={12} className="text-[#16A34A]" />
                    </div>
                    <ArrowRight size={14} className="text-[#8F959E]" />
                    <div className="flex items-center gap-1.5 rounded-full border border-[#D8DFFF] bg-[#F4F6FF] px-3 py-1.5">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#5B5FE3] text-white">
                        <Bot size={8} />
                      </span>
                      <span className="font-medium text-[#5B5FE3]">Agent routing</span>
                      <Sparkles size={12} className="text-[#5B5FE3]" />
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8EBF3] bg-white/70 p-3 flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#5B5FE3]/10 flex items-center justify-center">
                      <Bot size={12} className="text-[#5B5FE3]" />
                    </div>
                    <div className="text-[12px] text-[#646A73]">
                      <span className="font-semibold text-[#5B5FE3]">Flow Agent</span> prepared next sprint plan — waiting for review.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-4 py-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur">
                <div className="flex -space-x-2">
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Mia" alt="" />
                  <img className="h-8 w-8 rounded-full border-2 border-white" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex" alt="" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#5B5FE3] to-[#787BEE] flex items-center justify-center text-white">
                    <Bot size={14} />
                  </div>
                </div>
                <div className="text-[12px] font-semibold text-[#1F2329]">Human + Agent, 24/7</div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="text-[12px] uppercase tracking-[0.2em] text-[#8F959E] mb-5">Trusted by leading teams worldwide</div>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              {LOGOS.map((logo) => (
                <span key={logo} className="text-[15px] font-bold tracking-tight text-[#1F2329]">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-AGENT ORCHESTRATION */}
      <section className="py-24 md:py-32 bg-[#FBFBFE]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-5">
              <Bot size={14} />
              Multi-Agent Orchestration
            </div>
            <h2 className="text-[36px] md:text-[44px] leading-[1.12] font-black tracking-[-0.03em] text-[#111827]">
              One open platform.<br />Unlimited agents.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-[#646A73]">
              The future of enterprise AI is not a single model — it's multi-agent orchestration. Meegle connects your proprietary agents, third-party models, and business systems through MCP Server, CLI, and unified context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {AGENT_PILLARS.map((p) => (
              <div
                key={p.title}
                className="group rounded-[20px] border border-[#EEF0F4] bg-white p-8 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500"
              >
                <div className={`${p.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  {p.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#1F2329] mb-3">{p.title}</h3>
                <p className="text-[14px] leading-6 text-[#646A73]">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-[#EEF0F4] bg-white p-6 md:p-10 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <h3 className="text-[20px] font-bold text-[#1F2329]">Connected data landscape</h3>
              <div className="flex flex-wrap gap-2">
                {['Slack', 'Jira', 'GitHub', 'Figma', 'Zapier', 'Notion', 'Linear', 'MCP Server', 'CLI'].map((int) => (
                  <span key={int} className="rounded-full border border-[#E2E4E9] bg-white px-3 py-1 text-[11px] font-medium text-[#1F2329]">
                    {int}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {['Documents & IMs', 'Meeting notes & Decisions', 'Org structure & Scheduling', 'Cross-project relationships'].map((ctx) => (
                <div key={ctx} className="rounded-xl border border-[#F0F1F4] bg-[#FBFCFD] p-4">
                  <Globe size={16} className="text-[#5B5FE3] mb-2" />
                  <div className="text-[13px] font-semibold text-[#1F2329]">{ctx}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI-NATIVE CAPABILITIES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-4">
                <Play size={14} />
                AI-Native Project Management
              </div>
              <h2 className="text-[36px] md:text-[44px] leading-[1.12] font-black tracking-[-0.03em] text-[#111827]">
                Out-of-the-box intelligence.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-[#646A73]">
                Meegle delivers robust project management fundamentals supercharged by AI. Access instant efficiency improvements and deep analytics — without configuration.
              </p>
              <button className="mt-6 flex items-center gap-2 text-[15px] font-bold text-[#5B5FE3] hover:underline">
                Explore all capabilities <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {AI_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-[20px] border border-[#EEF0F4] bg-white p-6 hover:border-[#D8DFFF] hover:shadow-[0_16px_48px_rgba(91,94,227,0.08)] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F4F6FF] flex items-center justify-center mb-4 group-hover:bg-[#E8EBFF] transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1F2329] mb-2">{cap.title}</h3>
                  <p className="text-[13px] leading-6 text-[#646A73]">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="py-12 bg-gradient-to-r from-[#5B5FE3] to-[#787BEE] text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-[42px] font-black tracking-[-0.04em]">{m.value}</div>
                <div className="mt-2 text-[15px] font-medium text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-24 md:py-32 bg-[#FBFBFE]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-4 py-1.5 text-[12px] font-semibold text-[#D46B08] mb-5">
                <Shield size={14} />
                Enterprise-Ready Security
              </div>
              <h2 className="text-[36px] md:text-[44px] leading-[1.12] font-black tracking-[-0.03em] text-[#111827]">
                Compliance-ready.<br />Audit-ready.<br />Enterprise-ready.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-[#646A73] mb-8">
                Your workflows are your competitive advantage. Meegle secures organizational intelligence with strict data governance and global compliance frameworks.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {COMPLIANCE_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-xl border border-[#EEF0F4] bg-white px-4 py-3 text-[13px] font-semibold text-[#1F2329]">
                    <span className="text-[#16A34A]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#EEF0F4] bg-gradient-to-br from-[#1E1E2E] to-[#1B1E3A] p-8 text-white shadow-[0_24px_64px_rgba(15,23,42,0.16)]">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/40 mb-2">Live Monitor</div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-[13px] font-semibold">All systems operational</span>
              </div>

              <div className="space-y-4">
                {['Encryption at rest & in transit', 'Role-based access control', 'Full audit trail logging', 'Custom data residency'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                    <span className="text-[13px]">{item}</span>
                    <Shield size={14} className="text-[#16A34A]" />
                  </div>
                ))}
              </div>

              <div className="mt-6 text-[11px] text-white/40">
                Independently audited. Continuously monitored.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST PROOF */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[44px] leading-[1.12] font-black tracking-[-0.03em] text-[#111827]">
            Trusted by forward-thinking teams
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#646A73] max-w-[560px] mx-auto">
            Global leadership teams trust Meegle to operationalize their AI strategy and turn it into measurable productivity.
          </p>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 opacity-30">
            {LOGOS.map((logo) => (
              <div key={logo} className="rounded-xl border border-[#E2E4E9] bg-[#F9FAFB] px-4 py-6 text-center text-[14px] font-bold text-[#1F2329]">
                {logo}
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-[720px] mx-auto rounded-[24px] border border-[#EEF0F4] bg-[#FBFCFD] p-8">
            <div className="text-[14px] italic leading-7 text-[#646A73]">
              "Meegle transformed how we think about project management. The multi-agent orchestration isn't just a feature — it's a fundamentally new way to run an engineering organization."
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <img className="h-9 w-9 rounded-full" src="https://api.dicebear.com/9.x/avataaars/svg?seed=CTO" alt="" />
              <div className="text-left">
                <div className="text-[14px] font-bold text-[#1F2329]">VP of Engineering</div>
                <div className="text-[12px] text-[#8F959E]">Fortune 500 Technology Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#111827] text-white text-center relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#5B5FE3]/8 blur-3xl" />
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#F59E0B]/5 blur-3xl" />

        <div className="relative max-w-[720px] mx-auto px-6">
          <h2 className="text-[40px] md:text-[52px] leading-[1.08] font-black tracking-[-0.03em]">
            Define the next era of<br />
            <span className="bg-gradient-to-r from-[#878AEE] to-[#B0B2FF] bg-clip-text text-transparent">
              Organizational Intelligence.
            </span>
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-white/50 max-w-[480px] mx-auto">
            Start building with Agents today. No credit card required.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-xl bg-[#5B5FE3] px-8 py-4 text-[16px] font-bold text-white hover:bg-[#4A4ED4] transition-all shadow-[0_12px_32px_rgba(91,94,227,.36)]">
              Get Started Free
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-[16px] font-semibold text-white hover:bg-white/10 transition-all backdrop-blur">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A14] text-white border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center gap-2 font-black text-[20px] mb-4">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#mgl-grad-ft)" />
                  <path d="M9 16L14 21L23 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="mgl-grad-ft" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#5B5FE3"/>
                      <stop offset="1" stopColor="#787BEE"/>
                    </linearGradient>
                  </defs>
                </svg>
                Meegle
              </div>
              <p className="text-[13px] leading-6 text-white/40">
                AI-native project management for the next generation of teams.
              </p>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Integrations', 'AI Agents', 'Security', 'Changelog'] },
              { title: 'Solutions', links: ['Engineering', 'Product Ops', 'Enterprise', 'Startups', 'Remote Teams'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Blog', 'Community', 'Status'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact', 'Press', 'Legal'] }
            ].map((col) => (
              <div key={col.title}>
                <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-4">
                  {col.title}
                </div>
                <div className="space-y-3">
                  {col.links.map((l) => (
                    <a key={l} href="#" className="block text-[13px] text-white/50 hover:text-white/80 transition-colors">
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/30">
            <div>&copy; 2026 Meegle. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/50 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MeegleHomepage