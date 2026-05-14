import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code,
  Eye,
  FileText,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  ListChecks,
  Lock,
  Menu,
  Monitor,
  Package,
  Play,
  Rocket,
  Search,
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
  { value: 4.2, suffix: 'x', label: 'Faster project delivery', decimals: 1 },
  { value: 67, suffix: '%', label: 'Reduction in manual handoffs', decimals: 0 },
  { value: 99.9, suffix: '%', label: 'Enterprise uptime SLA', decimals: 1 }
]

const AGENT_CARDS = [
  {
    icon: <Workflow size={28} className="text-white" />,
    bg: 'from-[#5B5FE3] to-[#787BEE]',
    title: 'Architect Workflows',
    sub: 'Anchor AI to business processes',
    desc: 'Transform point-solution AI into scalable workflows. Every project becomes a template for organizational intelligence.',
    tag: 'MCP Server · CLI · API'
  },
  {
    icon: <Bot size={28} className="text-white" />,
    bg: 'from-[#3EAB6E] to-[#58C98A]',
    title: 'Orchestrate Agents',
    sub: 'Multi-agent, one platform',
    desc: 'Bridge proprietary agents and third-party models. Meegle coordinates them with shared context and automatic handoff.',
    tag: 'Auto-routing · Context-aware'
  },
  {
    icon: <Globe size={28} className="text-white" />,
    bg: 'from-[#F59E0B] to-[#FBBF24]',
    title: 'Global Context',
    sub: 'Every agent sees the full picture',
    desc: 'Slack messages, meeting notes, org charts, project timelines — unified enterprise data powers every AI decision.',
    tag: 'Unified data layer'
  },
  {
    icon: <Shield size={28} className="text-white" />,
    bg: 'from-[#8B5CF6] to-[#A78BFA]',
    title: 'Enterprise Governance',
    sub: 'Intelligence under control',
    desc: 'Role-based access, audit trails, and data residency ensure your AI operates within your security boundaries.',
    tag: 'SOC 2 · ISO 27001 · GDPR'
  }
]

const AI_TABS = [
  {
    id: 'planning',
    label: 'Smart Planning',
    icon: <GitBranch size={20} />,
    items: [
      { title: 'Sprint Planning', desc: 'AI analyzes velocity and backlog to auto-generate optimized sprints.' },
      { title: 'Resource Allocation', desc: 'Predictive models forecast capacity and suggest workload balancing.' },
      { title: 'Risk Detection', desc: 'Real-time bottleneck alerts before they escalate into blockers.' }
    ]
  },
  {
    id: 'execution',
    label: 'Intelligent Execution',
    icon: <Play size={20} />,
    items: [
      { title: 'Auto Classification', desc: 'Intelligent tagging of every task, ticket, and document.' },
      { title: 'Requirement Auditing', desc: 'AI reviews PRDs for completeness and cross-team consistency.' },
      { title: 'Health Monitoring', desc: 'Continuous pulse checks with executive-ready summaries.' }
    ]
  },
  {
    id: 'analytics',
    label: 'Deep Analytics',
    icon: <LineChart size={20} />,
    items: [
      { title: 'Progress Synthesis', desc: 'Automated charts and narrative summaries for stakeholders.' },
      { title: 'Trend Analysis', desc: 'Pattern recognition across sprints, teams, and quarters.' },
      { title: 'Custom Reports', desc: 'Natural language queries generate visual dashboards on demand.' }
    ]
  }
]

const AnimatedCounter = ({ target, suffix, decimals }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const steps = 40
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(current)
          }
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

const WORKFLOW_NODES = [
  { id: 0, label: 'Intake', icon: <FileText size={14} />, row: 0, col: 0 },
  { id: 1, label: 'Scoping', icon: <Search size={14} />, row: 0, col: 1 },
  { id: 2, label: 'Design', icon: <Eye size={14} />, row: 0, col: 2 },
  { id: 3, label: 'Review', icon: <ListChecks size={14} />, row: 0, col: 3 },
  { id: 4, label: 'Prototype', icon: <Monitor size={14} />, row: 1, col: 3 },
  { id: 5, label: 'Develop', icon: <Code size={14} />, row: 1, col: 2 },
  { id: 6, label: 'Test', icon: <Play size={14} />, row: 1, col: 1 },
  { id: 7, label: 'QA', icon: <Shield size={14} />, row: 1, col: 0 },
  { id: 8, label: 'Staging', icon: <Package size={14} />, row: 2, col: 0 },
  { id: 9, label: 'Release', icon: <Rocket size={14} />, row: 2, col: 1 },
  { id: 10, label: 'Monitor', icon: <LineChart size={14} />, row: 2, col: 2 },
  { id: 11, label: 'Iterate', icon: <GitBranch size={14} />, row: 2, col: 3 }
]

const STAGE_CONFIG = {
  plan: { label: 'Plan', color: '#5B5FE3', bg: '#F4F6FF', duration: 2400 },
  build: { label: 'Build', color: '#3EAB6E', bg: '#EDF7F0', duration: 2800 },
  ship: { label: 'Ship', color: '#F59E0B', bg: '#FFFBF0', duration: 1600 }
}

const WorkflowNode = ({ node, state, stage, delay, x, y }) => {
  const isActive = state === 'active'
  const isShip = isActive && stage === 'ship'
  const isDone = state === 'done'
  const isWaiting = state === 'waiting'

  return (
    <div
      className="absolute transition-all duration-700 ease-out"
      style={{
        left: x,
        top: y,
        transform: isActive ? 'scale(1.25)' : isDone ? 'scale(0.85)' : 'scale(0.78)',
        opacity: isWaiting ? 0.35 : isDone ? 0.7 : 1,
        transitionDelay: `${delay}ms`,
        zIndex: isActive ? 20 : 1
      }}
    >
      <div
        className={`flex items-center gap-2 rounded-2xl border px-3.5 py-2 transition-all duration-700 ${
          isActive
            ? stage === 'ship'
              ? 'border-[#F59E0B]/40 bg-[#FFFBF0] shadow-[0_8px_30px_rgba(245,158,11,0.2)]'
              : stage === 'build'
              ? 'border-[#3EAB6E]/30 bg-[#EDF7F0] shadow-[0_8px_30px_rgba(62,171,110,0.18)]'
              : 'border-[#5B5FE3]/30 bg-[#F4F6FF] shadow-[0_8px_30px_rgba(91,94,227,0.22)]'
            : isDone
            ? 'border-[#D1D5DB]/30 bg-white'
            : 'border-[#E2E4E9]/20 bg-white'
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-lg transition-all duration-700 ${
            isActive ? 'w-8 h-8' : 'w-6 h-6'
          }`}
          style={{ backgroundColor: isActive ? STAGE_CONFIG[stage]?.bg || '#F4F6FF' : 'transparent' }}
        >
          <span style={{ color: isActive ? STAGE_CONFIG[stage]?.color : isDone ? '#16A34A' : '#D1D5DB' }}>
            {isDone ? <CheckCircle2 size={isActive ? 16 : 13} /> : node.icon}
          </span>
        </div>

        {isActive && (
          <>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#111827] leading-tight">{node.label}</span>
              <span className="text-[8px] font-semibold" style={{ color: STAGE_CONFIG[stage]?.color }}>
                {STAGE_CONFIG[stage]?.label}
              </span>
            </div>

            <div className="flex -space-x-1 ml-1">
              <div className="h-5 w-5 rounded-full border border-white bg-white flex items-center justify-center">
                <UserRound size={9} className="text-[#111827]" />
              </div>
              <div
                className="h-5 w-5 rounded-full border border-white flex items-center justify-center"
                style={{ backgroundColor: STAGE_CONFIG[stage]?.color || '#5B5FE3' }}
              >
                <Bot size={9} className="text-white" />
              </div>
            </div>
          </>
        )}

        {isDone && (
          <span className="text-[9px] font-semibold text-[#16A34A] leading-tight">{node.label}</span>
        )}

        {isWaiting && (
          <span className="text-[9px] font-medium text-[#D1D5DB] leading-tight">{node.label}</span>
        )}
      </div>

      {isShip && (
        <div
          className="absolute -inset-1 rounded-2xl pointer-events-none animate-pulse"
          style={{ backgroundColor: `${STAGE_CONFIG.ship.color}10` }}
        />
      )}
    </div>
  )
}

const FlowBeam = ({ x1, y1, x2, y2, active, color }) => {
  if (!active) return null

  const dx = x2 - x1
  const dy = y2 - y1
  const length = Math.sqrt(dx * dx + dy * dy)
  const angle = Math.atan2(dy, dx) * (180 / Math.PI)

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x1,
        top: y1,
        width: length,
        height: 2,
        transformOrigin: 'left center',
        transform: `rotate(${angle}deg)`,
        overflow: 'hidden'
      }}
    >
      <div
        className="absolute inset-y-0 w-12 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}60, ${color}, transparent)`,
          animation: 'flowParticle 0.8s linear infinite'
        }}
      />
    </div>
  )
}

const WorkflowBackground = () => {
  const [activeNodeId, setActiveNodeId] = useState(0)
  const [stage, setStage] = useState('plan')
  const [flowIndex, setFlowIndex] = useState(0)
  const totalNodes = WORKFLOW_NODES.length

  const colSpacing = 120
  const rowSpacing = 84
  const startX = 40
  const startY = 30

  const getNodePos = useCallback((node) => {
    const x = startX + node.col * colSpacing
    const y = startY + node.row * rowSpacing
    return { x, y }
  }, [])

  useEffect(() => {
    let timeout

    const advanceStage = () => {
      setStage(prev => {
        if (prev === 'plan') return 'build'
        if (prev === 'build') return 'ship'
        if (prev === 'ship') {
          setActiveNodeId(prevId => {
            const next = (prevId + 1) % totalNodes
            return next
          })
          return 'plan'
        }
        return prev
      })
    }

    const duration = stage === 'plan' ? 2400 : stage === 'build' ? 2800 : 1600
    timeout = setTimeout(advanceStage, duration)

    return () => clearTimeout(timeout)
  }, [stage, activeNodeId, totalNodes])

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowIndex(prev => (prev + 1) % 8)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {WORKFLOW_NODES.map((node, idx) => {
        const { x, y } = getNodePos(node)

        let state = 'waiting'
        if (idx < activeNodeId || (activeNodeId === 0 && idx === totalNodes - 1 && stage === 'ship')) {
          state = 'done'
        } else if (idx === activeNodeId) {
          state = 'active'
        }

        return (
          <WorkflowNode
            key={node.id}
            node={node}
            state={state}
            stage={state === 'active' ? stage : 'plan'}
            delay={0}
            x={x + 16}
            y={y + 16}
          />
        )
      })}

      {WORKFLOW_NODES.map((node, idx) => {
        if (idx >= totalNodes - 1) return null
        const next = WORKFLOW_NODES[idx + 1]
        const from = getNodePos(node)
        const to = getNodePos(next)
        const isActiveEdge = idx === activeNodeId - 1 || (activeNodeId === 0 && idx === totalNodes - 2)

        return (
          <FlowBeam
            key={`edge-${idx}`}
            x1={from.x + 64}
            y1={from.y + 32}
            x2={to.x + 64}
            y2={to.y + 32}
            active={true}
            color={isActiveEdge ? STAGE_CONFIG.ship.color : '#E2E4E9'}
          />
        )
      })}
    </div>
  )
}

const MeegleHomepage = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('planning')
  const heroRef = useRef(null)
  const carouselRef = useRef(null)

  const slidePrev = useCallback(() => {
    setCarouselIndex(prev => Math.max(0, prev - 1))
  }, [])

  const slideNext = useCallback(() => {
    setCarouselIndex(prev => Math.min(AGENT_CARDS.length - 1, prev + 1))
  }, [])

  const maxIndex = AGENT_CARDS.length - 1

  return (
    <div className="bg-white text-[#1F2329] font-sans overflow-x-hidden">
      <style>{`
        @keyframes flowParticle {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(calc(100% + 60px)); opacity: 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeSlideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91,94,227,.3); }
          50% { box-shadow: 0 0 0 20px rgba(91,94,227,0); }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .pulse-ring {
          animation: pulseRing 2.4s ease-out infinite;
        }
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .carousel-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .carousel-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]">
        <div className="max-w-[1340px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2.5 font-black text-[22px] tracking-[-0.04em] text-[#111827]">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
                <rect width="34" height="34" rx="9" fill="url(#mg-nav)" />
                <path d="M9 17L14 22L24 13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="mg-nav" x1="0" y1="0" x2="34" y2="34">
                    <stop stopColor="#5B5FE3"/><stop offset="1" stopColor="#787BEE"/>
                  </linearGradient>
                </defs>
              </svg>
              Meegle
            </div>
            <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#5B6272]">
              {NAV_LINKS.map((l) => (
                <a key={l} href="#" className="hover:text-[#111827] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#5B5FE3] after:transition-all hover:after:w-full">{l}</a>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[14px] font-semibold text-[#5B6272] hover:text-[#111827] transition-colors">Sign In</button>
            <button className="rounded-xl bg-[#5B5FE3] px-5 py-2.5 text-[14px] font-bold text-white hover:bg-[#4A4ED4] transition-all shadow-[0_4px_16px_rgba(91,94,227,.28)] pulse-ring">
              Get Started Free
            </button>
          </div>
          <button className="lg:hidden p-2 text-[#111827]" onClick={() => setMobileMenu(true)}>
            <Menu size={22} />
          </button>
        </div>
        {mobileMenu && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
            <div className="flex justify-between items-center mb-10">
              <div className="font-black text-[22px]">Meegle</div>
              <button onClick={() => setMobileMenu(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-6 text-[20px] font-semibold">
              {NAV_LINKS.map(l => <a key={l} href="#" onClick={() => setMobileMenu(false)}>{l}</a>)}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <button className="rounded-xl bg-[#5B5FE3] py-3.5 text-[16px] font-bold text-white">Get Started Free</button>
              <button className="text-center text-[14px] font-semibold text-[#646A73]">Sign In</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO — Workflow Background */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#F8F9FC]">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #5B5FE3 1px, transparent 1px), radial-gradient(circle at 75% 75%, #787BEE 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#5B5FE3]/[0.025] blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#F59E0B]/[0.02] blur-[100px]" />

        <WorkflowBackground />

        <div className="relative z-10 flex flex-col justify-center min-h-screen w-full max-w-[1340px] mx-auto px-6 pt-32 pb-24">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5B5FE3]/15 bg-white/70 px-4 py-2 text-[12px] font-semibold text-[#5B5FE3] shadow-sm mb-8 backdrop-blur animate-fade-slide-up">
              <Sparkles size={14} />
              Introducing Multi-Agent Orchestration
            </div>

            <h1 className="text-[54px] md:text-[80px] leading-[0.92] font-black tracking-[-0.05em] text-[#0A0A14] animate-fade-slide-up" style={{ animationDelay: '0.1s' }}>
              Plan. Build. Ship.
              <br />
              <span className="bg-gradient-to-r from-[#5B5FE3] via-[#787BEE] to-[#A78BFA] bg-clip-text text-transparent gradient-shift">
                Together with Agents.
              </span>
            </h1>

            <p className="mt-8 max-w-[560px] text-[18px] leading-8 text-[#5B6272] animate-fade-slide-up" style={{ animationDelay: '0.25s' }}>
              Meegle unites your teams and AI agents on one platform.
              Transform every project into reusable organizational wisdom.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-slide-up" style={{ animationDelay: '0.35s' }}>
              <button className="group rounded-2xl bg-[#0A0A14] px-8 py-4 text-[16px] font-bold text-white hover:bg-[#1A1A2E] transition-all shadow-[0_8px_30px_rgba(10,10,20,.2)]">
                Get Started Free
                <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-2.5 rounded-2xl border border-[#E2E4E9] bg-white/80 backdrop-blur px-6 py-4 text-[16px] font-semibold text-[#111827] hover:bg-white transition-all">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F6FF] text-[#5B5FE3] group-hover:scale-110 transition-transform">
                  <Play size={14} fill="#5B5FE3" />
                </span>
                Watch Demo 2 min
              </button>
            </div>
          </div>

          <div className="mt-20 text-center animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8F959E] mb-6">Trusted by leading teams worldwide</div>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-[0.22]">
              {LOGOS.map(logo => (
                <span key={logo} className="text-[16px] font-bold tracking-tight text-[#111827]">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-AGENT — Horizontal Carousel */}
      <section className="relative py-32 md:py-44 bg-[#FBFBFE] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5B5FE3]/[0.03] blur-[100px]" />

        <div className="max-w-[1340px] mx-auto px-6">
          <div className="mb-16 max-w-[600px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-5">
              <Bot size={14} /> Multi-Agent Orchestration
            </div>
            <h2 className="text-[48px] md:text-[56px] leading-[1.06] font-black tracking-[-0.05em] text-[#0A0A14]">
              One open platform.<br />Unlimited agents.
            </h2>
          </div>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto carousel-scroll snap-x snap-mandatory pb-4"
            >
              {AGENT_CARDS.map((card, idx) => (
                <div
                  key={card.title}
                  className={`flex-shrink-0 w-[340px] md:w-[380px] snap-center rounded-[28px] border border-black/[0.04] bg-white p-8 shadow-[0_12px_48px_rgba(15,23,42,0.04)] transition-all duration-500 ${
                    idx === carouselIndex ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-60'
                  }`}
                  style={{ transitionDelay: `${idx * 0.05}s` }}
                >
                  <div className={`bg-gradient-to-br ${card.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    {card.icon}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8F959E] mb-2">{card.sub}</div>
                  <h3 className="text-[22px] font-black text-[#111827] mb-3">{card.title}</h3>
                  <p className="text-[14px] leading-7 text-[#646A73] mb-5">{card.desc}</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F4F6FF] px-3 py-1.5 text-[11px] font-semibold text-[#5B5FE3]">
                    {card.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {AGENT_CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === carouselIndex ? 'w-8 bg-[#5B5FE3]' : 'w-1.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={slidePrev}
                  disabled={carouselIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E4E9] bg-white disabled:opacity-30 hover:bg-[#F9FAFB] transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={slideNext}
                  disabled={carouselIndex === maxIndex}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E4E9] bg-white disabled:opacity-30 hover:bg-[#F9FAFB] transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI CAPABILITIES — Tab Switching */}
      <section className="relative py-32 md:py-44 bg-white">
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="max-w-[600px] mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-5">
              <Sparkles size={14} /> AI-Native Capabilities
            </div>
            <h2 className="text-[48px] md:text-[56px] leading-[1.06] font-black tracking-[-0.05em] text-[#0A0A14]">
              Out-of-the-box intelligence.
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-[#646A73]">
              No configuration needed. AI is embedded into every project workflow, ready from day one.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-12 p-1 rounded-2xl bg-[#F4F6F9] w-fit">
            {AI_TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)]'
                    : 'text-[#8F959E] hover:text-[#646A73]'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-[#5B5FE3]' : ''}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-500">
            {AI_TABS.find(t => t.id === activeTab)?.items.map((item, idx) => (
              <div
                key={item.title}
                className="group rounded-[24px] border border-black/[0.04] bg-[#FAFBFC] p-7 hover:bg-white hover:border-[#D8DFFF] hover:shadow-[0_20px_60px_rgba(91,94,227,0.06)] transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#F4F6FF] flex items-center justify-center mb-5 group-hover:bg-[#E8EBFF] transition-colors">
                  <Layers size={20} className="text-[#5B5FE3]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[13px] leading-6 text-[#646A73]">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[13px] font-bold text-[#5B5FE3] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS STRIP — Animated Counters */}
      <section className="relative py-20 overflow-hidden bg-[#0A0A14]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B5FE3]/10 via-transparent to-[#787BEE]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#5B5FE3]/5 blur-[150px]" />

        <div className="relative max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center">
            {METRICS.map((m, idx) => (
              <div key={m.label} className="space-y-3">
                <div className="text-[56px] md:text-[72px] font-black tracking-[-0.06em] text-white tabular-nums">
                  <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <div className="text-[16px] font-medium text-white/50">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 flex items-center gap-2.5 text-[13px] text-white/40">
              <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
              Independently verified by third-party auditors
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY — Parallax layers */}
      <section className="relative py-32 md:py-44 bg-[#FBFBFE] overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#F59E0B]/[0.02] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#5B5FE3]/[0.03] blur-[120px]" />

        <div className="relative max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-16 lg:gap-24 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-4 py-1.5 text-[12px] font-semibold text-[#D46B08] mb-5">
                <Shield size={14} /> Enterprise-Ready
              </div>
              <h2 className="text-[48px] md:text-[56px] leading-[1.06] font-black tracking-[-0.05em] text-[#0A0A14]">
                Compliance-ready.<br />Audit-ready.<br />Enterprise-ready.
              </h2>
              <p className="mt-5 text-[17px] leading-7 text-[#646A73] max-w-[500px]">
                Your workflows are your competitive advantage. Meegle secures organizational intelligence with strict data governance and global compliance frameworks.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  { label: 'SOC 2 Type II', icon: <Shield size={16} /> },
                  { label: 'ISO 27001', icon: <Shield size={16} /> },
                  { label: 'GDPR Compliant', icon: <Lock size={16} /> },
                  { label: 'SSO & SAML', icon: <Lock size={16} /> },
                  { label: 'Audit Logging', icon: <CheckCircle2 size={16} /> },
                  { label: 'Data Residency', icon: <Globe size={16} /> }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 rounded-xl border border-[#EEF0F4] bg-white px-4 py-3.5 text-[13px] font-semibold text-[#111827] hover:border-[#D8DFFF] transition-all">
                    <span className="text-[#16A34A]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-black/[0.04] bg-gradient-to-br from-[#0F0F1A] via-[#15152E] to-[#0F0F1A] p-8 text-white shadow-[0_32px_80px_rgba(15,23,42,0.12)]">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-1.5">Live Monitor</div>
                    <div className="flex items-center gap-2 text-[14px] font-bold">
                      <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
                      All systems operational
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-[#5B5FE3]/10 flex items-center justify-center">
                    <Shield size={22} className="text-[#5B5FE3]" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Encryption at rest & in transit', pct: 100 },
                    { label: 'Role-based access control', pct: 100 },
                    { label: 'Full audit trail logging', pct: 100 },
                    { label: 'Custom data residency', pct: 86 }
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/[0.03] border border-white/[0.05] px-4 py-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-medium text-white/60">{item.label}</span>
                        <span className="text-[11px] font-bold text-[#5B5FE3]">{item.pct}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#5B5FE3] to-[#787BEE] transition-all duration-1000"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-[10px] text-white/20 tracking-[0.12em] uppercase">
                  Independently audited · Continuously monitored
                </div>
              </div>

              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-[32px] bg-[#5B5FE3]/5 border border-[#5B5FE3]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-[1340px] mx-auto px-6 text-center">
          <h2 className="text-[48px] md:text-[56px] leading-[1.06] font-black tracking-[-0.05em] text-[#0A0A14]">
            Trusted by<br />forward-thinking teams
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[#646A73] max-w-[520px] mx-auto">
            Global leadership teams operationalize their AI strategy with Meegle.
          </p>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 opacity-[0.18]">
            {LOGOS.map(logo => (
              <div key={logo} className="rounded-xl border border-[#E2E4E9] px-4 py-7 text-center text-[14px] font-bold text-[#111827]">
                {logo}
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-[700px] mx-auto rounded-[28px] border border-black/[0.03] bg-[#FBFCFD] p-10">
            <div className="text-[16px] leading-8 text-[#5B6272] italic">
              "Meegle transformed how we think about project management. Multi-agent orchestration isn't just a feature — it's a fundamentally new way to run an engineering organization."
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img className="h-10 w-10 rounded-full ring-2 ring-white shadow-sm" src="https://api.dicebear.com/9.x/avataaars/svg?seed=EngVP" alt="" />
              <div className="text-left">
                <div className="text-[15px] font-bold text-[#111827]">VP of Engineering</div>
                <div className="text-[12px] text-[#8F959E]">Fortune 500 Technology Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 md:py-56 text-center overflow-hidden bg-[#0A0A14]">
        <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-[#5B5FE3]/[0.04] blur-[180px]" />
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#787BEE]/[0.03] blur-[180px]" />

        <div className="relative max-w-[800px] mx-auto px-6">
          <h2 className="text-[48px] md:text-[64px] leading-[1.04] font-black tracking-[-0.05em] text-white">
            Define the next era of
            <br />
            <span className="bg-gradient-to-r from-[#878AEE] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent gradient-shift">
              Organizational Intelligence.
            </span>
          </h2>
          <p className="mt-6 text-[18px] leading-7 text-white/35 max-w-[480px] mx-auto">
            Start building with Agents today. No credit card required.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button className="group rounded-2xl bg-white px-10 py-4.5 text-[16px] font-bold text-[#0A0A14] hover:bg-[#F4F4F6] transition-all shadow-[0_16px_48px_rgba(91,94,227,.24)]">
              Get Started Free
              <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] px-10 py-4.5 text-[16px] font-bold text-white hover:bg-white/[0.04] transition-all backdrop-blur">
              Talk to Sales
              <ArrowUpRight size={16} className="inline ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050510] text-white border-t border-white/[0.04]">
        <div className="max-w-[1340px] mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div>
              <div className="flex items-center gap-2.5 font-black text-[20px] mb-4">
                <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
                  <rect width="34" height="34" rx="9" fill="url(#mg-ft)" />
                  <path d="M9 17L14 22L24 13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="mg-ft" x1="0" y1="0" x2="34" y2="34">
                      <stop stopColor="#5B5FE3"/><stop offset="1" stopColor="#787BEE"/>
                    </linearGradient>
                  </defs>
                </svg>
                Meegle
              </div>
              <p className="text-[13px] leading-6 text-white/25">AI-native project management for the next generation.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Integrations', 'AI Agents', 'Security', 'Changelog'] },
              { title: 'Solutions', links: ['Engineering', 'Product Ops', 'Enterprise', 'Startups', 'Remote'] },
              { title: 'Resources', links: ['Docs', 'API', 'Blog', 'Community', 'Status'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact', 'Press', 'Legal'] }
            ].map(col => (
              <div key={col.title}>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">{col.title}</div>
                <div className="space-y-3.5">
                  {col.links.map(l => (
                    <a key={l} href="#" className="block text-[13px] text-white/35 hover:text-white/70 transition-colors">{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/20">
            <div>&copy; 2026 Meegle. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/40 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MeegleHomepage