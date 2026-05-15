import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  Lock,
  Menu,
  MessageSquare,
  Play,
  Shield,
  Sparkles,
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

const STACK_CARDS = [
  {
    id: 'workflows',
    title: 'Architect Workflows',
    subtitle: 'Standardize intelligence through SOPs',
    desc: 'Standardize intelligence through SOPs and automated processes. Collaborate with agents to drive R&D, GTM, and operation workflows. Transform manual effort into repeatable organizational wisdom.',
    tag: 'SOP · Automation · Process-driven',
    color: '#5B5FE3',
    colorLight: '#F4F6FF',
    gradient: 'from-[#5B5FE3] to-[#787BEE]',
    icon: <Workflow size={28} className="text-white" />
  },
  {
    id: 'orchestrate',
    title: 'Orchestrate Agents',
    subtitle: 'Multi-agent, one unified fleet',
    desc: 'Integrate proprietary and third-party agents. Embed intelligence into workflow via AI nodes. Bridge business systems via MCP and CLI for a unified multi-agent fleet.',
    tag: 'MCP · CLI · Multi-agent',
    color: '#3EAB6E',
    colorLight: '#EDF7F0',
    gradient: 'from-[#3EAB6E] to-[#58C98A]',
    icon: <Bot size={28} className="text-white" />
  },
  {
    id: 'context',
    title: 'Unify Context',
    subtitle: 'One data layer, infinite clarity',
    desc: 'Ensure every agent operates with a unified data flow. Break down silos to support informed decision-making and task execution. Achieve true end-to-end automation with full visibility.',
    tag: 'Unified data · End-to-end visibility',
    color: '#F59E0B',
    colorLight: '#FFFBF0',
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
    icon: <Globe size={28} className="text-white" />
  }
]

const AgentCardIllustration = ({ card, isVisible }) => {
  if (card.id === 'workflows') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#F4F6FF] to-[#E8EBFF]" style={{ opacity: isVisible ? 1 : 0.4, transition: 'opacity 0.6s ease' }} />
        <svg viewBox="0 0 480 380" className="relative w-full max-w-[480px] h-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(0 20px 40px rgba(91,94,227,0.12))' }}>
          <defs>
            <linearGradient id="wf-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B5FE3" />
              <stop offset="100%" stopColor="#787BEE" />
            </linearGradient>
            <filter id="wf-shadow"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#5B5FE3" floodOpacity="0.15" /></filter>
          </defs>
          {[
            { x: 40, y: 30, w: 140, h: 56, label: 'Requirement\nIntake', done: true },
            { x: 40, y: 110, w: 140, h: 56, label: 'Scope &\nTriage', done: true },
            { x: 40, y: 190, w: 140, h: 56, label: 'Design\nReview', done: false },
            { x: 220, y: 80, w: 140, h: 56, label: 'Agent\nPlanning', done: true },
            { x: 220, y: 160, w: 140, h: 56, label: 'Auto\nExecution', done: false },
            { x: 300, y: 260, w: 140, h: 56, label: 'Quality\nGate', done: false },
            { x: 80, y: 280, w: 160, h: 56, label: 'Release &\nMonitor', done: false }
          ].map((node, i) => (
            <g key={i} filter="url(#wf-shadow)">
              <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="14" fill="white" stroke={node.done ? '#16A34A' : node.label === 'Agent\nPlanning' || node.label === 'Auto\nExecution' ? '#5B5FE3' : '#E2E4E9'} strokeWidth="2" />
              {node.done && <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="14" fill="#F0FDF4" />}
              {node.done ? (
                <>
                  <text x={node.x + node.w / 2} y={node.y + 22} textAnchor="middle" fill="#16A34A" fontSize="11" fontWeight="700">{node.label.split('\n')[0]}</text>
                  <text x={node.x + node.w / 2} y={node.y + 40} textAnchor="middle" fill="#16A34A" fontSize="11" fontWeight="700">{node.label.split('\n')[1]}</text>
                  <circle cx={node.x + node.w - 14} cy={node.y + 14} r="8" fill="#16A34A" />
                  <path d={`M${node.x + node.w - 18} ${node.y + 14} l3 4 l6 -7`} stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ) : (
                <>
                  <text x={node.x + node.w / 2} y={node.y + 22} textAnchor="middle" fill={node.label === 'Agent\nPlanning' || node.label === 'Auto\nExecution' ? '#5B5FE3' : '#646A73'} fontSize="11" fontWeight="700">{node.label.split('\n')[0]}</text>
                  <text x={node.x + node.w / 2} y={node.y + 40} textAnchor="middle" fill={node.label === 'Agent\nPlanning' || node.label === 'Auto\nExecution' ? '#5B5FE3' : '#646A73'} fontSize="11" fontWeight="700">{node.label.split('\n')[1]}</text>
                </>
              )}
            </g>
          ))}
          <line x1="110" y1="86" x2="110" y2="110" stroke="#16A34A" strokeWidth="2" markerEnd="url(#arrow-done)" />
          <line x1="110" y1="166" x2="110" y2="190" stroke={isVisible ? '#5B5FE3' : '#E2E4E9'} strokeWidth="2" strokeDasharray="6,3" />
          <path d="M180 58 C200 58, 200 108, 220 108" stroke="#16A34A" strokeWidth="2" fill="none" markerEnd="url(#arrow-done)" />
          <path d="M290 108 C310 108, 310 158, 220 158" stroke={isVisible ? '#5B5FE3' : '#E2E4E9'} strokeWidth="2" fill="none" strokeDasharray="6,3" />
          <path d="M180 188 C200 188, 200 288, 300 288" stroke={isVisible ? '#5B5FE3' : '#E2E4E9'} strokeWidth="2" fill="none" strokeDasharray="6,3" />
          <defs>
            <marker id="arrow-done" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="#16A34A" />
            </marker>
          </defs>
        </svg>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="h-1 rounded-full transition-all duration-700" style={{ width: i === 0 ? 32 : 18, backgroundColor: i === 0 ? '#5B5FE3' : '#E2E4E9' }} />
          ))}
        </div>
      </div>
    )
  }

  if (card.id === 'orchestrate') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#EDF7F0] to-[#D6F3E2]" style={{ opacity: isVisible ? 1 : 0.4, transition: 'opacity 0.6s ease' }} />
        <svg viewBox="0 0 480 380" className="relative w-full max-w-[480px] h-auto" style={{ filter: 'drop-shadow(0 20px 40px rgba(62,171,110,0.12))' }}>
          <defs>
            <linearGradient id="og-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3EAB6E" />
              <stop offset="100%" stopColor="#58C98A" />
            </linearGradient>
          </defs>
          <rect x="190" y="140" width="100" height="100" rx="24" fill="url(#og-grad)" filter="drop-shadow(0 12px 32px rgba(62,171,110,0.35))" />
          <text x="240" y="195" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">Meegle</text>
          {[
            { cx: 120, cy: 100, color: '#5B5FE3', label: 'Code Agent', delay: 0 },
            { cx: 360, cy: 100, color: '#F59E0B', label: 'Data Agent', delay: 0.3 },
            { cx: 90, cy: 280, color: '#8B5CF6', label: 'Doc Agent', delay: 0.6 },
            { cx: 390, cy: 280, color: '#EF4444', label: 'QA Agent', delay: 0.9 },
            { cx: 240, cy: 60, color: '#3B82F6', label: 'PM Agent', delay: 0.15 },
          ].map((agent, i) => (
            <g key={i}>
              <line
                x1={agent.cx} y1={agent.cy} x2="240" y2="190"
                stroke={agent.color} strokeWidth="2" strokeDasharray="4,4" opacity="0.5"
                className={isVisible ? 'animate-pulse' : ''}
              />
              <circle cx={agent.cx} cy={agent.cy} r="22" fill="white" stroke={agent.color} strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))" />
              <circle cx={agent.cx} cy={agent.cy} r="10" fill={agent.color} opacity="0.15" />
              <circle cx={agent.cx} cy={agent.cy} r="5" fill={agent.color} />
              <text x={agent.cx} y={agent.cy + 34} textAnchor="middle" fill="#646A73" fontSize="9" fontWeight="600">{agent.label}</text>
            </g>
          ))}
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0 240 190" to="360 240 190" dur="20s" repeatCount="indefinite" />
            <circle cx="280" cy="160" r="4" fill="#3EAB6E" opacity="0.6" />
            <circle cx="300" cy="180" r="3" fill="#58C98A" opacity="0.5" />
            <circle cx="260" cy="200" r="3.5" fill="#3EAB6E" opacity="0.5" />
            <circle cx="310" cy="150" r="2.5" fill="#58C98A" opacity="0.4" />
          </g>
        </svg>
      </div>
    )
  }

  if (card.id === 'context') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#FFFBF0] to-[#FFF3D6]" style={{ opacity: isVisible ? 1 : 0.4, transition: 'opacity 0.6s ease' }} />
        <svg viewBox="0 0 480 380" className="relative w-full max-w-[480px] h-auto" style={{ filter: 'drop-shadow(0 20px 40px rgba(245,158,11,0.12))' }}>
          <defs>
            <linearGradient id="uc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <filter id="uc-glow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          {[
            { x: 30, y: 50, w: 130, h: 50, icon: '📄', label: 'Documents', color: '#3B82F6' },
            { x: 30, y: 120, w: 130, h: 50, icon: '💬', label: 'Messages', color: '#8B5CF6' },
            { x: 30, y: 190, w: 130, h: 50, icon: '📊', label: 'Analytics', color: '#EF4444' },
            { x: 30, y: 260, w: 130, h: 50, icon: '📅', label: 'Calendar', color: '#3EAB6E' },
          ].map((src, i) => (
            <g key={i}>
              <rect x={src.x} y={src.y} width={src.w} height={src.h} rx="12" fill="white" stroke="#E2E4E9" strokeWidth="1.5" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))" />
              <text x={src.x + 16} y={src.y + 31} fontSize="16">{src.icon}</text>
              <text x={src.x + 46} y={src.y + 31} fill="#111827" fontSize="12" fontWeight="600">{src.label}</text>
              <line x1={src.x + src.w} y1={src.y + src.h / 2} x2="310" y2={src.y + src.h / 2} stroke={src.color} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.4" />
            </g>
          ))}
          <rect x="320" y="30" width="140" height="280" rx="20" fill="white" stroke="#E2E4E9" strokeWidth="1.5" filter="drop-shadow(0 8px 32px rgba(0,0,0,0.06))" />
          <rect x="320" y="30" width="140" height="48" rx="20" fill="url(#uc-grad)" />
          <text x="390" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Unified Context</text>
          {[
            { y: 95, label: 'Docs ingested', pct: 100 },
            { y: 145, label: 'Messages synced', pct: 100 },
            { y: 195, label: 'Reports parsed', pct: 88 },
            { y: 245, label: 'Events loaded', pct: 100 },
          ].map((item, i) => (
            <g key={i}>
              <text x="340" y={item.y} fill="#646A73" fontSize="10" fontWeight="500">{item.label}</text>
              <rect x="340" y={item.y + 6} width="100" height="6" rx="3" fill="#F3F4F6" />
              <rect x="340" y={item.y + 6} width={item.pct} height="6" rx="3" fill={item.pct === 100 ? '#16A34A' : '#F59E0B'} className="transition-all duration-1000" />
              <text x="448" y={item.y} textAnchor="end" fill={item.pct === 100 ? '#16A34A' : '#F59E0B'} fontSize="10" fontWeight="700">{item.pct}%</text>
            </g>
          ))}
          <circle cx="390" cy="330" r="12" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
          <path d="M384 330 l3 4 l6 -7" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="410" y="334" fill="#16A34A" fontSize="11" fontWeight="700">All agents synced</text>
        </svg>
      </div>
    )
  }

  return null
}

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




const WORKFLOW_PLATFORMS = [
  { id: 'intake', label: 'Intake', color: '#5B5FE3', x: 6, y: 44, col: 0 },
  { id: 'scout', label: 'Scout', color: '#3EAB6E', x: 28, y: 16, col: 1, row: 'top' },
  { id: 'scope', label: 'Scope', color: '#F59E0B', x: 28, y: 44, col: 1, row: 'mid' },
  { id: 'spec',  label: 'Spec',  color: '#8B5CF6', x: 28, y: 72, col: 1, row: 'bot' },
  { id: 'build', label: 'Build', color: '#EC4899', x: 55, y: 44, col: 2 },
  { id: 'ship',  label: 'Ship',  color: '#06B6D4', x: 80, y: 44, col: 3 },
]

const AGENT_BENCH = [
  { id: 'qa', label: 'QA Agent', color: '#5B5FE3' },
  { id: 'code', label: 'Code Agent', color: '#3EAB6E' },
  { id: 'design', label: 'Design Agent', color: '#F59E0B' },
  { id: 'review', label: 'Review Agent', color: '#8B5CF6' },
  { id: 'deploy', label: 'Deploy Agent', color: '#EC4899' },
  { id: 'data', label: 'Data Agent', color: '#06B6D4' },
  { id: 'sec', label: 'Security Agent', color: '#EF4444' },
]

const PLAT_W = 150
const PLAT_H = 68
const PLAT_D = 16
const SCENE_W = 780
const MAIN_H = 350
const BENCH_H = 70

/* ---------- Bench character (small card) ---------- */
const BenchCard = ({ item, color, isAgent, isAssigned, isFlyingOut }) => (
  <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-400"
    style={{
      backgroundColor: isFlyingOut ? (color || '#5B5FE3') + '15' : isAssigned ? '#f3f4f6' : '#fafbfc',
      border: `1px solid ${isFlyingOut ? (color || '#5B5FE3') + '25' : isAssigned ? '#e5e7eb' : '#eff0f3'}`,
      opacity: isAssigned ? 0.45 : 1,
      transform: isFlyingOut ? 'translateY(-4px)' : 'none'
    }}>
    <svg viewBox="0 0 28 28" width="20" height="20">
      {isAgent ? (
        <>
          <circle cx="14" cy="8" r="6.5" fill={color || '#5B5FE3'} opacity="0.88" />
          <rect x="11.5" y="10.2" width="1.8" height="2.8" rx="0.9" fill={color || '#5B5FE3'} opacity="0.5" />
          <rect x="14.7" y="10.2" width="1.8" height="2.8" rx="0.9" fill={color || '#5B5FE3'} opacity="0.5" />
          <rect x="9" y="12.5" width="10" height="7" rx="3.5" fill={color || '#5B5FE3'} opacity="0.65" />
          <circle cx="12" cy="7" r="1" fill="white" />
          <circle cx="16" cy="7" r="1" fill="white" />
          <circle cx="12" cy="7" r="0.5" fill="#111" />
          <circle cx="16" cy="7" r="0.5" fill="#111" />
        </>
      ) : (
        <>
          <circle cx="14" cy="6" r="4.5" fill="#4b5563" opacity="0.75" />
          <path d="M6.5 16c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" fill="#4b5563" opacity="0.6" />
        </>
      )}
    </svg>
    <span className="text-[9px] font-semibold" style={{ color: isAssigned ? '#9ca3af' : '#4b5563' }}>
      {isAgent ? item.label : 'Human'}
    </span>
  </div>
)

/* ---------- Flying character (animated from bench to platform) ---------- */
const FlyingCharacter = ({ left, top, isAgent, agentColor, visible }) => (
  <div className="absolute transition-all pointer-events-none" style={{
    left, top,
    width: 28, height: 28,
    zIndex: 50,
    opacity: visible ? 1 : 0,
    transform: visible ? 'scale(1)' : 'scale(0.3)',
    transition: 'left 0.75s cubic-bezier(0.22, 0.08, 0.08, 1), top 0.75s cubic-bezier(0.22, 0.08, 0.08, 1), opacity 0.3s ease, transform 0.3s ease',
    filter: visible ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.12))' : 'none'
  }}>
    <svg viewBox="0 0 28 28" width="28" height="28">
      {isAgent ? (
        <>
          <circle cx="14" cy="8" r="6.5" fill={agentColor || '#5B5FE3'} opacity="0.9" />
          <rect x="11.5" y="10.2" width="1.8" height="2.8" rx="0.9" fill={agentColor || '#5B5FE3'} opacity="0.5" />
          <rect x="14.7" y="10.2" width="1.8" height="2.8" rx="0.9" fill={agentColor || '#5B5FE3'} opacity="0.5" />
          <rect x="9" y="12.5" width="10" height="7" rx="3.5" fill={agentColor || '#5B5FE3'} opacity="0.65" />
          <circle cx="12" cy="7" r="1" fill="white" />
          <circle cx="16" cy="7" r="1" fill="white" />
          <circle cx="12" cy="7" r="0.5" fill="#111" />
          <circle cx="16" cy="7" r="0.5" fill="#111" />
        </>
      ) : (
        <>
          <circle cx="14" cy="6" r="4.5" fill="#4b5563" opacity="0.85" />
          <path d="M6.5 16c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" fill="#4b5563" opacity="0.7" />
        </>
      )}
    </svg>
  </div>
)

/* ---------- Isometric Platform (no character inside) ---------- */
const IsometricPlatform = ({ node, state, style }) => {
  const c = node.color
  const W = PLAT_W; const H = PLAT_H; const D = PLAT_D
  const hidden = state === 'hidden'
  const building = state === 'building'
  const built = state === 'built' || state === 'popping' || state === 'landing'
  const populated = state === 'populated'

  const alpha = hidden ? 0 : 1
  const scale = populated ? 1.03 : building ? 0.88 : 1

  return (
    <div className="absolute" style={{
      ...style, opacity: alpha,
      transform: `scale(${scale})`,
      transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)'
    }}>
      <div className="absolute rounded-xl" style={{
        left: -6, top: D + 6,
        width: W + 12, height: H + 4,
        backgroundColor: building ? c + '08' : '#00000008',
        filter: 'blur(10px)',
        opacity: hidden ? 0 : 1,
        transition: 'opacity 0.5s ease'
      }} />
      <svg viewBox={`0 0 ${W + D} ${H + D}`} width={W + D} height={H + D} style={{ display: 'block' }}>
        <path d={`M${W} ${H*0.2} L${W+D} ${0} L${W+D} ${H} L${W} ${H+H*0.2} Z`}
          fill={populated ? c + '90' : building ? c + '20' : '#dde1e7'}
          opacity={populated ? 0.18 : building ? 0.12 : 1} />
        <path d={`M${0} ${H} L${D*0.6} ${H+H*0.2} L${W+D} ${H+H*0.2} L${W} ${H} Z`}
          fill={populated ? c + '90' : building ? c + '15' : '#dde1e7'}
          opacity={populated ? 0.14 : building ? 0.08 : 1} />
        <defs>
          <linearGradient id={`tp-${node.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={populated ? c + '0D' : building ? c + '04' : '#ffffff'} />
            <stop offset="100%" stopColor={populated ? c + '06' : building ? c + '02' : '#f5f6f8'} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={W} height={H} rx="10" fill={`url(#tp-${node.id})`}
          stroke={populated ? c + '50' : building ? c + '25' : '#dee2e8'} strokeWidth={populated ? 1.6 : 0.8} />
        {building && (
          <g>
            <line x1="20" y1="0" x2="20" y2={H} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <line x1={W - 20} y1="0" x2={W - 20} y2={H} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <line x1="0" y1={H*0.3} x2={W} y2={H*0.3} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <line x1="0" y1={H*0.7} x2={W} y2={H*0.7} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <circle cx={W*0.7} cy={H*0.35} r="2" fill={c} opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="0.7s" repeatCount="indefinite" />
            </circle>
          </g>
        )}
        <text x={W/2} y={H/2+3} textAnchor="middle" dominantBaseline="central"
          fontWeight="680" fontSize="11.5" fontFamily="system-ui, sans-serif" letterSpacing="0.025em"
          fill={populated ? c : built ? c + '75' : building ? c + '35' : '#c2c8d2'}>
          {node.label}
        </text>
        {populated && (
          <g transform={`translate(${W-22}, 18)`}>
            <circle cx="0" cy="0" r="9" fill="#16A34A" opacity="0.12" />
            <path d="M-3 0L-1 3L4 -2" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          </g>
        )}
      </svg>

      {/* Characters on platform (fade in AFTER landing) */}
      {populated && (
        <div className="absolute inset-0 pointer-events-none" style={{ animation: 'fadeSlideUp 0.5s ease-out 0.2s both' }}>
          <div className="absolute" style={{ left: W * 0.32, top: H * 0.22, width: 28, height: 28 }}>
            <svg viewBox="0 0 28 28" width="28" height="28">
              <circle cx="14" cy="8" r="6.5" fill={node.agentColor || c} opacity="0.88" />
              <rect x="11.5" y="10.2" width="1.8" height="2.8" rx="0.9" fill={node.agentColor || c} opacity="0.5" />
              <rect x="14.7" y="10.2" width="1.8" height="2.8" rx="0.9" fill={node.agentColor || c} opacity="0.5" />
              <rect x="9" y="12.5" width="10" height="7" rx="3.5" fill={node.agentColor || c} opacity="0.65" />
              <circle cx="12" cy="7" r="1" fill="white" />
              <circle cx="16" cy="7" r="1" fill="white" />
              <circle cx="12" cy="7" r="0.5" fill="#111" />
              <circle cx="16" cy="7" r="0.5" fill="#111" />
            </svg>
          </div>
          <div className="absolute" style={{ left: W * 0.55, top: H * 0.18, width: 24, height: 28 }}>
            <svg viewBox="0 0 24 28" width="24" height="28">
              <circle cx="12" cy="5" r="4.5" fill="#4b5563" />
              <path d="M4.5 16c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" fill="#4b5563" opacity="0.75" />
            </svg>
          </div>
        </div>
      )}
      {populated && (
        <div className="absolute rounded-xl" style={{
          inset: -5, border: `2px solid ${c}25`, borderRadius: 14,
          pointerEvents: 'none', animation: 'scaleIn 1.5s ease-in-out infinite'
        }} />
      )}
    </div>
  )
}

/* ---------- Connector ---------- */
const ConnectorBridge = ({ from, to, color, state }) => {
  if (state === 'hidden') return null
  const active = state === 'active'
  const building = state === 'building'
  const built = state === 'built'
  const fx = from.x; const fy = from.y
  const tx = to.x; const ty = to.y
  const dx = tx - fx
  const cpf = 0.42
  const cp1x = fx + dx * cpf; const cp1y = fy
  const cp2x = tx - dx * cpf; const cp2y = ty
  const svgId = `bg-${from.id}-${to.id}`
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
      {active && (
        <defs>
          <linearGradient id={svgId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={from.color} stopOpacity="0.2" />
            <stop offset="50%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={to.color} stopOpacity="0.3" />
          </linearGradient>
        </defs>
      )}
      <path d={`M${fx} ${fy} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${tx} ${ty}`}
        fill="none" strokeLinecap="round"
        stroke={active ? `url(#${svgId})` : color + '22'}
        strokeWidth={active ? 2 : built ? 1.2 : 1}
        strokeDasharray={building ? '5 4' : 'none'}
        opacity={active ? 1 : built ? 0.45 : 0.3}>
        {building && <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.5s" repeatCount="indefinite" />}
      </path>
      <polygon points={`${tx-5},${ty-3.5} ${tx},${ty} ${tx-5},${ty+3.5}`}
        fill={active ? to.color : color + '30'} opacity={active ? 0.7 : built ? 0.35 : 0.2} />
    </svg>
  )
}

/* ---------- Workflow Board ---------- */
const WorkflowBoard = () => {
  const [buildPhase, setBuildPhase] = useState('building')
  const [step, setStep] = useState(0)
  const phaseRef = useRef('building')
  const stepRef = useRef(0)

  // Flying animation: { type:'agent'|'human', from:{x,y}, to:{x,y}, color }
  const [flyA, setFlyA] = useState(null)
  const flyRef = useRef(null)

  const totalPlatforms = WORKFLOW_PLATFORMS.length

  const advance = useCallback(() => {
    if (phaseRef.current === 'building') {
      if (stepRef.current >= totalPlatforms - 1) {
        phaseRef.current = 'populating'; stepRef.current = 0
        setBuildPhase('populating'); setStep(0)
        // trigger first flight
        setTimeout(() => triggerFlight(0), 200)
      } else {
        stepRef.current += 1; setStep(s => s + 1)
      }
    } else {
      if (stepRef.current >= totalPlatforms) return
      triggerFlight(stepRef.current)
    }
  }, [totalPlatforms])

  const triggerFlight = useCallback((targetStep) => {
    const benchBaseY = MAIN_H + 12
    const benchCardW = 90
    const benchStartX = 40
    const benchGap = 8

    const agent = AGENT_BENCH[targetStep % AGENT_BENCH.length]
    const plat = WORKFLOW_PLATFORMS[targetStep]
    const pos = { left: (plat.x / 100) * SCENE_W, top: (plat.y / 100) * MAIN_H }

    const benchAgentX = benchStartX + targetStep * (benchCardW + benchGap) + 8
    const benchHumanX = benchStartX + targetStep * (benchCardW + benchGap) + benchCardW + 8

    // Agent flies first
    setFlyA({ type: 'agent', fromX: benchAgentX, fromY: benchBaseY, toX: pos.left + PLAT_W * 0.32, toY: pos.top + PLAT_H * 0.22, color: agent.color, landed: false })

    // Human flies after 0.2s
    setTimeout(() => {
      setFlyA(prev => prev ? { ...prev, type: 'human', fromX: benchHumanX, fromY: benchBaseY + 4, toX: pos.left + PLAT_W * 0.55, toY: pos.top + PLAT_H * 0.18, color: '#4b5563', landed: false } : null)
    }, 250)

    // Land after flight duration
    setTimeout(() => {
      setFlyA(prev => prev ? { ...prev, landed: true } : null)
    }, 800)

    // Complete step
    setTimeout(() => {
      stepRef.current += 1; setStep(s => s + 1)
      setFlyA(null)
    }, 1000)
  }, [])

  useEffect(() => {
    if (buildPhase === 'populating' && step >= totalPlatforms) {
      const t = setTimeout(() => {
        phaseRef.current = 'building'; stepRef.current = 0
        setBuildPhase('building'); setStep(0)
        setFlyA(null)
      }, 2200)
      return () => clearTimeout(t)
    }
  }, [buildPhase, step, totalPlatforms])

  useEffect(() => {
    const dur = buildPhase === 'building' ? 550 : 50 // advance immediately triggers triggerFlight
    if (buildPhase === 'populating' && step >= totalPlatforms) return
    if (buildPhase === 'populating' && step > 0) {
      // Don't auto-advance; triggerFlight handles it
      return
    }
    const t = setTimeout(advance, dur)
    return () => clearTimeout(t)
  }, [step, buildPhase, advance, totalPlatforms])

  const positions = WORKFLOW_PLATFORMS.map(p => ({
    id: p.id,
    color: p.color,
    left: (p.x / 100) * SCENE_W,
    top: (p.y / 100) * MAIN_H,
    cx: (p.x / 100) * SCENE_W + PLAT_W / 2,
    cy: (p.y / 100) * MAIN_H + PLAT_H / 2,
  }))

  const buildOrder = WORKFLOW_PLATFORMS.map(p => p.id)
  const isBuilt = id => buildOrder.indexOf(id) < (buildPhase === 'building' ? step + 1 : totalPlatforms)

  const bridges = [
    { from: 'intake', to: 'scout' }, { from: 'intake', to: 'scope' }, { from: 'intake', to: 'spec' },
    { from: 'scout', to: 'build' }, { from: 'scope', to: 'build' }, { from: 'spec', to: 'build' },
    { from: 'build', to: 'ship' },
  ]

  const totalH = MAIN_H + BENCH_H

  return (
    <div className="relative w-full select-none" style={{ height: totalH }}>
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full pointer-events-none" style={{ height: MAIN_H, opacity: 0.045 }}>
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="0.6" fill="#5B5FE3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Bridges */}
      {bridges.map(({ from, to }) => {
        const fp = positions.find(p => p.id === from)
        const tp = positions.find(p => p.id === to)
        if (!fp || !tp) return null
        if (!isBuilt(from) || !isBuilt(to)) return null
        const toIdx = buildOrder.indexOf(to)
        const popStep = buildPhase === 'populating' ? step : -1
        const color = WORKFLOW_PLATFORMS.find(p => p.id === to).color
        let br = 'built'
        if (buildPhase === 'building' && toIdx === step + 1) br = 'building'
        if (buildPhase === 'populating' && toIdx === popStep) br = 'active'
        return <ConnectorBridge key={`br-${from}-${to}`}
          from={{ id: from, x: fp.cx, y: fp.cy, color: fp.color }}
          to={{ id: to, x: tp.cx, y: tp.cy, color: tp.color }} color={color} state={br} />
      })}

      {/* Platforms */}
      {WORKFLOW_PLATFORMS.map(plat => {
        const id = plat.id; const idx = buildOrder.indexOf(id)
        const popStep = buildPhase === 'populating' ? step : -1
        let state = 'hidden'
        if (buildPhase === 'building') {
          if (idx < step) state = 'built'
          else if (idx === step) state = 'building'
        } else {
          if (idx < popStep) state = 'populated'
          else if (idx === popStep) state = 'popping'
          else state = 'built'
        }
        const agent = AGENT_BENCH[idx % AGENT_BENCH.length]
        const pos = positions.find(p => p.id === id)
        return <IsometricPlatform key={id} node={{ id, label: plat.label, color: plat.color, agentColor: agent.color }}
          state={state} style={{ left: pos.left, top: pos.top }} />
      })}

      {/* Flying character */}
      {flyA && (
        <FlyingCharacter
          left={flyA.landed ? flyA.toX : flyA.fromX}
          top={flyA.landed ? flyA.toY : flyA.fromY}
          isAgent={flyA.type === 'agent'}
          agentColor={flyA.color}
          visible={true}
        />
      )}

      {/* Agent bench — bottom row */}
      <div className="absolute left-0 right-0 flex items-center justify-center" style={{ top: MAIN_H + 8, height: BENCH_H - 8 }}>
        <div className="rounded-2xl px-5 py-2 flex items-center gap-2.5"
          style={{ backgroundColor: '#f8f9fc', border: '1px solid #eef0f5', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
          <span className="text-[10px] font-semibold text-[#9ca3af] mr-1">Available</span>
          {AGENT_BENCH.map((a, i) => {
            const isAssigned = buildPhase === 'populating' && i < step
            const isFlyingOut = buildPhase === 'populating' && i === step
            return <BenchCard key={a.id} item={a} color={a.color} isAgent isAssigned={isAssigned} isFlyingOut={isFlyingOut} />
          })}
          <span className="text-[10px] text-[#d1d5db] mx-0.5">|</span>
          <BenchCard item={{ label: 'Human' }} color="#4b5563" isAgent={false}
            isAssigned={buildPhase === 'populating' && step > 0 ? buildPhase === 'populating' && step <= totalPlatforms : false}
            isFlyingOut={false} />
        </div>
      </div>

      {/* Status */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: BENCH_H - 12 }}>
        {buildPhase === 'building' && (
          <span className="text-[11px] font-semibold" style={{
            color: WORKFLOW_PLATFORMS[Math.min(step, totalPlatforms - 1)].color,
            animation: 'fadeSlideUp 0.5s ease-out'
          }}>
            Building the workflow, one platform at a time...
          </span>
        )}
        {buildPhase === 'populating' && step < totalPlatforms && (
          <span className="text-[11px] font-semibold" style={{
            color: AGENT_BENCH[step % AGENT_BENCH.length].color,
            animation: 'fadeSlideUp 0.5s ease-out'
          }}>
            Drag {AGENT_BENCH[step % AGENT_BENCH.length].label} onto {WORKFLOW_PLATFORMS[step].label}
          </span>
        )}
        {buildPhase === 'populating' && step >= totalPlatforms && (
          <span className="text-[11px] font-semibold text-[#3EAB6E]" style={{ animation: 'fadeSlideUp 0.5s ease-out' }}>
            Fully staffed. Architect. Ship. Scale with Agents.
          </span>
        )}
      </div>
    </div>
  )
}


/* ============ GAME VERSION — 2.5D Isometric Game Board ============ */

const GAME_PLAT_W = 138
const GAME_PLAT_H = 52
const GAME_SCENE_W = 780
const GAME_SCENE_H = 380
const GAME_PLAT_POS = [
  { id: 'intake', cx: 80,  cy: 190 },
  { id: 'scout',  cx: 240, cy: 100 },
  { id: 'scope',  cx: 240, cy: 190 },
  { id: 'spec',   cx: 240, cy: 280 },
  { id: 'build',  cx: 440, cy: 190 },
  { id: 'ship',   cx: 620, cy: 190 },
]

const GAME_BRIDGES = [
  { from: 'intake', to: 'scout' },
  { from: 'intake', to: 'scope' },
  { from: 'intake', to: 'spec' },
  { from: 'scout',  to: 'build' },
  { from: 'scope',  to: 'build' },
  { from: 'spec',   to: 'build' },
  { from: 'build',  to: 'ship' },
]

/* ----- Isometric Island Platform ----- */
const GameIsland = ({ node, state, agentColor, pos }) => {
  const c = node.color
  const W = GAME_PLAT_W; const H = GAME_PLAT_H
  const hidden = state === 'hidden'
  const building = state === 'building'
  const populated = state === 'populated' || state === 'landing'

  if (hidden) return null

  return (
    <div className="absolute" style={{
      left: pos.cx - W/2, top: pos.cy - H/2,
      width: W, height: H,
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      transform: building ? 'scale(0.85)' : populated ? 'scale(1.06)' : 'scale(1)',
      opacity: building ? 0.7 : 1
    }}>
      {/* Floating shadow */}
      <div className="absolute rounded-2xl" style={{
        left: -8, top: 16,
        width: W + 16, height: H - 4,
        backgroundColor: '#00000010',
        filter: 'blur(12px)',
        opacity: building ? 0.3 : populated ? 0.5 : 0.35
      }} />

      {/* Platform body */}
      <div className="absolute inset-0 rounded-xl" style={{
        background: populated
          ? `linear-gradient(135deg, ${c}14 0%, ${c}06 100%)`
          : building
            ? `linear-gradient(135deg, ${c}08 0%, ${c}02 100%)`
            : 'linear-gradient(135deg, #ffffff 0%, #f5f6f9 100%)',
        border: `1.5px solid ${populated ? c + '50' : building ? c + '30' : '#e2e5ea'}`,
        boxShadow: populated
          ? `0 0 24px ${c}18, 0 4px 16px ${c}0A`
          : building
            ? `0 0 12px ${c}10`
            : '0 2px 8px rgba(0,0,0,0.04)'
      }} />

      {/* Top rim highlight */}
      <div className="absolute top-0 left-3 right-3 h-[1.5px] rounded-full" style={{
        background: populated
          ? `linear-gradient(90deg, transparent, ${c}40, transparent)`
          : building
            ? `linear-gradient(90deg, transparent, ${c}15, transparent)`
            : 'transparent'
      }} />

      {/* Construction grid */}
      {building && (
        <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ opacity: 0.5 }}>
          <svg width={W} height={H} className="absolute inset-0">
            <line x1="30" y1="0" x2="30" y2={H} stroke={c + '15'} strokeWidth="0.4" strokeDasharray="4 8" />
            <line x1={W-30} y1="0" x2={W-30} y2={H} stroke={c + '15'} strokeWidth="0.4" strokeDasharray="4 8" />
            <line x1="0" y1={H/2} x2={W} y2={H/2} stroke={c + '15'} strokeWidth="0.4" strokeDasharray="4 8" />
          </svg>
          <div className="absolute" style={{ right: 22, top: H/2 - 5 }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: c + '60' }} />
          </div>
        </div>
      )}

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[12px] font-bold font-sans tracking-wide select-none"
          style={{
            color: populated ? c : building ? c + '60' : '#8f95a0',
            textShadow: populated ? `0 0 12px ${c}20` : 'none'
          }}>
          {node.label}
        </span>
      </div>

      {/* Characters on populated platforms */}
      {populated && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end" style={{ height: H + 18, pointerEvents: 'none' }}>
          {/* Agent sprite */}
          <div className="absolute animate-bob" style={{
            left: W * 0.22, bottom: 8,
            animation: 'bob 1.8s ease-in-out infinite'
          }}>
            <svg viewBox="0 0 32 32" width={26} height={26}>
              <defs>
                <radialGradient id={`glow-${node.id}`}>
                  <stop offset="0%" stopColor={agentColor || c} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={agentColor || c} stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="16" cy="20" r="10" fill={`url(#glow-${node.id})`} />
              <circle cx="16" cy="9" r="7" fill={agentColor || c} opacity="0.9" />
              <rect x="13" y="11.5" width="2" height="3.2" rx="1" fill={agentColor || c} opacity="0.55" />
              <rect x="17" y="11.5" width="2" height="3.2" rx="1" fill={agentColor || c} opacity="0.55" />
              <rect x="10.5" y="14" width="11" height="7.5" rx="3.5" fill={agentColor || c} opacity="0.7" />
              <circle cx="14" cy="8" r="1.2" fill="white" />
              <circle cx="18" cy="8" r="1.2" fill="white" />
              <circle cx="14" cy="8" r="0.6" fill="#1a1a2e" />
              <circle cx="18" cy="8" r="0.6" fill="#1a1a2e" />
            </svg>
          </div>

          {/* Human sprite */}
          <div className="absolute animate-bob" style={{
            right: W * 0.2, bottom: 8,
            animation: 'bob 1.8s ease-in-out 0.4s infinite'
          }}>
            <svg viewBox="0 0 24 28" width={20} height={24}>
              <circle cx="12" cy="6" r="5" fill="#4b5563" />
              <path d="M4 17c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#4b5563" opacity="0.75" />
              <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6v4H6Z" fill="#6b7280" opacity="0.5" />
            </svg>
          </div>
        </div>
      )}

      {/* Checkmark badge */}
      {populated && (
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#16A34A', boxShadow: '0 2px 8px rgba(22,163,74,0.3)' }}>
          <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
        </div>
      )}
    </div>
  )
}

/* ----- Energy Bridge (game-style) ----- */
const GameBridge = ({ from, to, color, state }) => {
  if (state === 'hidden') return null
  const active = state === 'active'
  const building = state === 'building'
  const built = state === 'built'

  const dx = to.x - from.x; const dy = to.y - from.y
  const cpf = 0.4
  const cp1x = from.x + dx * cpf; const cp1y = from.y + dy * 0.1
  const cp2x = to.x - dx * cpf; const cp2y = to.y - dy * 0.1

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 1 }}>
      {/* Glow under-path */}
      {active && (
        <path d={`M${from.x} ${from.y} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`}
          fill="none" stroke={color + '10'} strokeWidth="8" strokeLinecap="round" filter="blur(4px)" />
      )}
      {/* Main path */}
      <path d={`M${from.x} ${from.y} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`}
        fill="none" strokeLinecap="round"
        stroke={active ? color + '80' : built ? color + '18' : color + '10'}
        strokeWidth={active ? 2.5 : built ? 1.5 : 1}
        strokeDasharray={building ? '4 4' : active ? 'none' : 'none'}
        opacity={active ? 1 : built ? 0.5 : 0.3}>
        {building && <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.5s" repeatCount="indefinite" />}
      </path>
      {/* Particle dots along active bridge */}
      {active && (
        <>
          <circle r="3" fill={color} opacity="0.8">
            <animateMotion dur="2s" repeatCount="indefinite"
              path={`M${from.x} ${from.y} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`} />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill={to.color} opacity="0.6">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.7s"
              path={`M${from.x} ${from.y} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`} />
          </circle>
        </>
      )}
      {/* Arrow */}
      <polygon points={`${to.x-5},${to.y-3.5} ${to.x},${to.y} ${to.x-5},${to.y+3.5}`}
        fill={active ? to.color : color + '25'} opacity={active ? 0.8 : built ? 0.4 : 0.2} />
    </svg>
  )
}

/* ----- Floating Particles ----- */
const Particles = () => {
  const particles = useRef(Array.from({ length: 18 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    dur: 3 + Math.random() * 4,
    delay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.25
  })))

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {particles.current.map((p, i) => (
        <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r={p.size} fill="#5B5FE3" opacity={p.opacity}>
          <animate attributeName="cy" values={`${p.y}%;${p.y - 8}%;${p.y}%`}
            dur={`${p.dur}s`} repeatCount="indefinite" begin={`${p.delay}s`} />
          <animate attributeName="opacity" values={`${p.opacity};${p.opacity * 0.3};${p.opacity}`}
            dur={`${p.dur}s`} repeatCount="indefinite" begin={`${p.delay}s`} />
        </circle>
      ))}
    </svg>
  )
}

/* ----- Terrain Grid ----- */
const TerrainGrid = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0, opacity: 0.06 }}>
    <defs>
      <radialGradient id="tg" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#5B5FE3" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#5B5FE3" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Horizontal grid lines with perspective */}
    {Array.from({ length: 12 }, (_, i) => {
      const yPct = 5 + i * 8
      const alpha = 1 - Math.abs(i - 5.5) / 8
      return (
        <line key={`h${i}`} x1="0%" y1={`${yPct}%`} x2="100%" y2={`${yPct}%`}
          stroke="#5B5FE3" strokeWidth="0.4" opacity={Math.max(0.1, alpha * 0.6)} />
      )
    })}
    {/* Vertical grid lines with perspective */}
    {Array.from({ length: 10 }, (_, i) => {
      const xPct = 5 + i * 10
      return (
        <line key={`v${i}`} x1={`${xPct}%`} y1="0%" x2={`${xPct}%`} y2="100%"
          stroke="#5B5FE3" strokeWidth="0.3" opacity="0.25" />
      )
    })}
  </svg>
)

/* ----- HUD Status Bar ----- */
const GameHUD = ({ phase, step, agent, platform }) => (
  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none" style={{ zIndex: 20 }}>
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
      style={{
        backgroundColor: 'rgba(10,10,20,0.75)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
      }}>
      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: agent?.color || '#5B5FE3' }} />
      <span className="text-[10px] font-semibold text-white/90 font-mono tracking-tight">
        {phase === 'building' ? (
          <>{'⚙'} STRUCTURING PIPELINE...</>
        ) : phase === 'populating' && step < WORKFLOW_PLATFORMS.length ? (
          <>{'↗'} DEPLOY {agent?.label?.toUpperCase()} → {platform?.label?.toUpperCase()}</>
        ) : (
          <>{'◆'} ALL SYSTEMS OPERATIONAL</>
        )}
      </span>
    </div>
  </div>
)

/* ----- Main Game Board ----- */
const GameWorkflowBoard = () => {
  const [buildPhase, setBuildPhase] = useState('building')
  const [step, setStep] = useState(0)
  const phaseRef = useRef('building')
  const stepRef = useRef(0)
  const [flyActive, setFlyActive] = useState(false)

  const totalPlatforms = WORKFLOW_PLATFORMS.length

  const advance = useCallback(() => {
    if (phaseRef.current === 'building') {
      if (stepRef.current >= totalPlatforms - 1) {
        phaseRef.current = 'populating'; stepRef.current = 0
        setBuildPhase('populating'); setStep(0)
        setTimeout(() => { setFlyActive(true); setTimeout(() => setFlyActive(false), 900) }, 300)
      } else {
        stepRef.current += 1; setStep(s => s + 1)
      }
    } else {
      if (stepRef.current >= totalPlatforms) return
      setFlyActive(true)
      setTimeout(() => {
        stepRef.current += 1; setStep(s => s + 1)
        setTimeout(() => setFlyActive(false), 200)
      }, 900)
    }
  }, [totalPlatforms])

  useEffect(() => {
    if (buildPhase === 'populating' && step >= totalPlatforms) {
      const t = setTimeout(() => {
        phaseRef.current = 'building'; stepRef.current = 0
        setBuildPhase('building'); setStep(0); setFlyActive(false)
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [buildPhase, step, totalPlatforms])

  useEffect(() => {
    const dur = buildPhase === 'building' ? 500 : 1200
    if (buildPhase === 'populating' && step >= totalPlatforms) return
    const t = setTimeout(advance, dur)
    return () => clearTimeout(t)
  }, [step, buildPhase, advance, totalPlatforms])

  const buildOrder = WORKFLOW_PLATFORMS.map(p => p.id)
  const isBuiltFn = id => buildOrder.indexOf(id) < (buildPhase === 'building' ? step + 1 : totalPlatforms)

  const currentAgent = AGENT_BENCH[Math.min(step, totalPlatforms - 1) % AGENT_BENCH.length]
  const currentPlat = WORKFLOW_PLATFORMS[Math.min(step, totalPlatforms - 1)]

  return (
    <div className="relative w-full select-none" style={{ height: GAME_SCENE_H }}>
      {/* Dark ambient overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(91,94,227,0.03) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(120,123,238,0.02) 0%, transparent 60%)'
      }} />

      {/* Background terrain */}
      <TerrainGrid />

      {/* Floating particles */}
      <Particles />

      {/* Energy Bridges */}
      {GAME_BRIDGES.map(({ from, to }) => {
        const fp = GAME_PLAT_POS.find(p => p.id === from)
        const tp = GAME_PLAT_POS.find(p => p.id === to)
        if (!isBuiltFn(from) || !isBuiltFn(to)) return null
        const toIdx = buildOrder.indexOf(to)
        const popStep = buildPhase === 'populating' ? step : -1
        const color = WORKFLOW_PLATFORMS.find(p => p.id === to).color
        let brState = 'built'
        if (buildPhase === 'building' && toIdx === step + 1) brState = 'building'
        if (buildPhase === 'populating' && toIdx === popStep) brState = 'active'
        return (
          <GameBridge key={`gb-${from}-${to}`}
            from={{ x: fp.cx, y: fp.cy, id: from }}
            to={{ x: tp.cx, y: tp.cy, id: to }}
            color={color} state={brState} />
        )
      })}

      {/* Flying character (game-style: tiny sprite along bridge path) */}
      {flyActive && buildPhase === 'populating' && step < totalPlatforms && (() => {
        const plat = GAME_PLAT_POS[step]
        // Fly from bench area (bottom-center) to platform center
        const startX = GAME_SCENE_W / 2
        const startY = GAME_SCENE_H - 30
        const endX = plat.cx
        const endY = plat.cy - 16
        const flyStyle = {
            left: startX, top: startY,
            zIndex: 30,
            transform: 'translate(-50%, -50%)',
            animation: `flyToPlatform 0.8s cubic-bezier(0.22, 0.08, 0.08, 1) forwards`,
            '--fly-ex': `${endX}px`,
            '--fly-ey': `${endY}px`,
            '--fly-sx': `${startX}px`,
            '--fly-sy': `${startY}px`,
          }
          return (
          <div className="absolute pointer-events-none" style={flyStyle}>
            <div style={{ animation: 'bob 0.3s ease-in-out infinite' }}>
              <svg viewBox="0 0 32 32" width={30} height={30}>
                <circle cx="16" cy="20" r="10" fill={currentAgent.color + '20'} />
                <circle cx="16" cy="9" r="7" fill={currentAgent.color} opacity="0.9" />
                <rect x="13" y="11.5" width="2" height="3.2" rx="1" fill={currentAgent.color} opacity="0.55" />
                <rect x="17" y="11.5" width="2" height="3.2" rx="1" fill={currentAgent.color} opacity="0.55" />
                <rect x="10.5" y="14" width="11" height="7.5" rx="3.5" fill={currentAgent.color} opacity="0.7" />
                <circle cx="14" cy="8" r="1.2" fill="white" />
                <circle cx="18" cy="8" r="1.2" fill="white" />
                <circle cx="14" cy="8" r="0.6" fill="#1a1a2e" />
                <circle cx="18" cy="8" r="0.6" fill="#1a1a2e" />
              </svg>
            </div>
            {/* Trail */}
            <div className="absolute top-1/2 -translate-y-1/2" style={{ right: '100%', width: 40, height: 2 }}>
              <div style={{
                width: '100%', height: '100%',
                background: `linear-gradient(90deg, transparent, ${currentAgent.color}80)`,
                borderRadius: 1
              }} />
            </div>
          </div>
        )
      })()}

      {/* Platforms */}
      {WORKFLOW_PLATFORMS.map((plat, i) => {
        const id = plat.id
        const idx = buildOrder.indexOf(id)
        const pos = GAME_PLAT_POS[i]
        const popStep = buildPhase === 'populating' ? step : -1

        let state = 'hidden'
        if (buildPhase === 'building') {
          if (idx < step) state = 'built'
          else if (idx === step) state = 'building'
        } else {
          if (idx < popStep) state = 'populated'
          else if (idx === popStep) state = 'landing'
          else state = 'built'
        }

        const agent = AGENT_BENCH[idx % AGENT_BENCH.length]
        return (
          <GameIsland key={id}
            node={{ id, label: plat.label, color: plat.color }}
            state={state}
            agentColor={agent.color}
            pos={pos} />
        )
      })}

      {/* HUD */}
      <GameHUD phase={buildPhase} step={step} agent={currentAgent} platform={currentPlat} />
    </div>
  )
}

const AI_ASSISTANT_SCENES = [
  {
    id: 'sprint-planning',
    label: 'Smart sprint planning',
    prompt: 'Plan my next sprint based on team velocity and backlog',
    desc: 'AI analyzes velocity and backlog to auto-generate optimized sprints',
    icon: '📋',
    color: '#5B5FE3',
    gradient: 'from-[#5B5FE3] to-[#787BEE]'
  },
  {
    id: 'risk-detection',
    label: 'Proactive risk & bottleneck detection',
    prompt: 'Scan all projects for risks and bottlenecks',
    desc: 'Real-time bottleneck alerts before they escalate into blockers',
    icon: '⚠️',
    color: '#EF4444',
    gradient: 'from-[#EF4444] to-[#F87171]'
  },
  {
    id: 'health-monitoring',
    label: 'Operational health monitoring',
    prompt: 'Run an operational health check across all teams',
    desc: 'Continuous pulse checks with executive-ready summaries',
    icon: '💚',
    color: '#3EAB6E',
    gradient: 'from-[#3EAB6E] to-[#58C98A]'
  },
  {
    id: 'progress-synthesis',
    label: 'Executive progress synthesis',
    prompt: 'Generate an executive progress report for Q3',
    desc: 'Automated charts and narrative summaries for stakeholders',
    icon: '📊',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6] to-[#A78BFA]'
  },
  {
    id: 'charts-generation',
    label: 'Automated charts generation',
    prompt: 'Create visual dashboards from the latest project data',
    desc: 'Natural language queries generate visual dashboards on demand',
    icon: '📈',
    color: '#F59E0B',
    gradient: 'from-[#F59E0B] to-[#FBBF24]'
  },
  {
    id: 'requirement-auditing',
    label: 'Semantic requirement auditing',
    prompt: 'Audit all PRDs for completeness and consistency',
    desc: 'AI reviews PRDs for completeness and cross-team consistency',
    icon: '🔍',
    color: '#06B6D4',
    gradient: 'from-[#06B6D4] to-[#22D3EE]'
  },
  {
    id: 'resource-allocation',
    label: 'Predictive resource allocation',
    prompt: 'Rebalance team resources based on capacity forecasts',
    desc: 'Predictive models forecast capacity and suggest workload balancing',
    icon: '👥',
    color: '#EC4899',
    gradient: 'from-[#EC4899] to-[#F472B6]'
  },
  {
    id: 'taxonomy-classification',
    label: 'Automated taxonomy & classification',
    prompt: 'Auto-tag all tasks and documents with smart taxonomy',
    desc: 'Intelligent tagging of every task, ticket, and document',
    icon: '🏷️',
    color: '#6366F1',
    gradient: 'from-[#6366F1] to-[#818CF8]'
  }
]

const AIAssistantSection = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [typedPrompt, setTypedPrompt] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const sectionRef = useRef(null)
  const cycleRef = useRef(null)
  const started = useRef(false)
  const scenesRef = useRef(AI_ASSISTANT_SCENES)

  const runScene = useCallback((idx) => {
    if (cycleRef.current) clearTimeout(cycleRef.current)
    const scene = scenesRef.current[idx]
    setActiveIdx(idx)
    setShowResult(false)
    setIsTyping(true)
    setTypedPrompt('')
    let ci = 0
    const full = scene.prompt
    const iv = setInterval(() => {
      ci++
      setTypedPrompt(full.substring(0, ci))
      if (ci >= full.length) {
        clearInterval(iv)
        setIsTyping(false)
        setTimeout(() => setShowResult(true), 400)
      }
    }, 45)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let step = 0
        const total = scenesRef.current.length
        const play = () => {
          const idx = step % total
          runScene(idx)
          step++
          cycleRef.current = setTimeout(play, 4000)
        }
        play()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (cycleRef.current) clearTimeout(cycleRef.current)
    }
  }, [runScene])

  const activeScene = AI_ASSISTANT_SCENES[activeIdx]

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 bg-[#FAFBFF] overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#5B5FE3]/[0.02] blur-[120px]" />
      <div className="absolute bottom-[-5%] left-[-8%] w-[500px] h-[500px] rounded-full bg-[#3EAB6E]/[0.02] blur-[100px]" />

      <div className="relative max-w-[1340px] mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#D8DFFF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-6 shadow-sm">
            <MessageSquare size={14} />
            AI-Native Project Intelligence
          </div>
          <h2 className="text-[40px] md:text-[52px] leading-[1.04] font-black tracking-[-0.05em] text-[#0A0A14]">
            Professional Standards.
            <br />
            <span className="bg-gradient-to-r from-[#5B5FE3] via-[#787BEE] to-[#A78BFA] bg-clip-text text-transparent gradient-shift">
              AI-Native Power.
            </span>
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-[#646A73] max-w-[600px]">
            Professional project management fundamentals, supercharged by AI. From project planning to resource allocation. Experience native intelligence, ready out-of-the-box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-start">
          <div className="rounded-[24px] border border-[#EEF0F4] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.04)] overflow-hidden">
            <div className="p-5 md:p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#5B5FE3] to-[#787BEE] flex items-center justify-center">
                  <Sparkles size={13} className="text-white" />
                </div>
                <span className="text-[13px] font-bold text-[#111827]">Meegle AI</span>
              </div>
              <p className="text-[14px] text-[#8F959E] mb-5">Hi, what are we working on today?</p>

              <div className="relative mb-5">
                <div className="flex items-center gap-3 rounded-xl border-2 border-[#E8EBF0] bg-[#FAFBFF] px-4 py-3.5 transition-all focus-within:border-[#5B5FE3]/40 focus-within:shadow-[0_0_0_4px_rgba(91,94,227,0.06)]">
                  <Sparkles size={16} className="text-[#5B5FE3] flex-shrink-0" />
                  <span className="flex-1 text-[14px] text-[#111827] font-medium min-h-[22px] select-none">
                    {typedPrompt || 'Ask AI to plan, analyze, or optimize...'}
                    {isTyping && (
                      <span className="inline-block w-[2px] h-[17px] bg-[#5B5FE3] ml-0.5 align-middle animate-pulse" />
                    )}
                  </span>
                  <button className="h-8 w-8 rounded-lg bg-[#5B5FE3] flex items-center justify-center flex-shrink-0" style={{ opacity: showResult ? 1 : 0 }}>
                    <ArrowRight size={13} className="text-white" />
                  </button>
                </div>

                {showResult && (
                  <div
                    className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300"
                    style={{
                      backgroundColor: activeScene.color + '08',
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: activeScene.color + '20'
                    }}
                  >
                    <div className={"h-7 w-7 rounded-lg bg-gradient-to-br " + activeScene.gradient + " flex items-center justify-center flex-shrink-0 shadow-sm"}>
                      <span className="text-[12px]">{activeScene.icon}</span>
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#111827]">{activeScene.label}</div>
                      <div className="text-[11px] text-[#8F959E]">{activeScene.desc}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {AI_ASSISTANT_SCENES.map((scene, idx) => (
                  <button
                    key={scene.id}
                    onClick={() => runScene(idx)}
                    className={"flex items-center gap-2 rounded-xl border px-3 py-2 text-[12px] font-semibold transition-all duration-300 " + (activeIdx === idx ? 'text-white shadow-md' : 'bg-white border-[#EEF0F4] text-[#646A73] hover:border-[#D8DFFF] hover:text-[#111827] hover:shadow-sm')}
                    style={activeIdx === idx ? { backgroundColor: scene.color, borderColor: scene.color } : {}}
                  >
                    <span className="text-[14px] leading-none">{scene.icon}</span>
                    {scene.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {AI_ASSISTANT_SCENES.map((scene, idx) => (
              <div
                key={scene.id}
                className="rounded-[24px] overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] border border-black/[0.04] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.06)]"
                style={{
                  position: activeIdx === idx && showResult ? 'relative' : 'absolute',
                  inset: activeIdx === idx && showResult ? 'auto' : 0,
                  opacity: activeIdx === idx && showResult ? 1 : 0,
                  transform: "scale(" + (activeIdx === idx && showResult ? 1 : 0.97) + ")",
                  pointerEvents: activeIdx === idx && showResult ? 'auto' : 'none',
                  zIndex: activeIdx === idx && showResult ? 1 : 0
                }}
              >
                <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#F3F4F6]">
                  <div className={"h-7 w-7 rounded-lg bg-gradient-to-br " + scene.gradient + " flex items-center justify-center shadow-sm"}>
                    <span className="text-[13px]">{scene.icon}</span>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#111827]">{scene.label}</div>
                    <div className="text-[10px] text-[#8F959E] truncate max-w-[260px]">{scene.prompt.substring(0, 48)}...</div>
                  </div>
                </div>
                <div className={"w-full aspect-[16/10] bg-gradient-to-br " + scene.gradient + " flex items-center justify-center"} style={{ opacity: 0.06 }}>
                  <div className="text-center">
                    <div className={"h-16 w-16 rounded-2xl bg-gradient-to-br " + scene.gradient + " flex items-center justify-center mx-auto mb-4 shadow-lg"} style={{ opacity: 0.3 }}>
                      <span className="text-[28px]">{scene.icon}</span>
                    </div>
                    <p className="text-[12px] font-semibold text-[#B0B8C5]">Replace with product screenshot</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const MeegleHomepage = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeTab, setActiveTab] = useState('planning')
  const [boardVersion, setBoardVersion] = useState('game')
  const heroRef = useRef(null)

  return (
    <div className="bg-white text-[#1F2329] font-sans" style={{ overflowX: 'clip', overflowY: 'visible' }}>
      <style>{`
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

        @keyframes flyToPlatform {
          from { left: var(--fly-sx); top: var(--fly-sy); opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
          60% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
          100% { left: var(--fly-ex); top: var(--fly-ey); opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bob { animation: bob 1.8s ease-in-out infinite; }
        .pulse-ring {
          animation: pulseRing 2.4s ease-out infinite;
        }
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

      {/* HERO */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[#FAFBFF] via-white to-white overflow-hidden">
        <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] rounded-full bg-[#5B5FE3]/[0.015] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#F59E0B]/[0.008] blur-[80px]" />

        <div className="relative w-full max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center">
            <div className="animate-fade-slide-up order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5B5FE3]/15 bg-white/80 backdrop-blur px-4 py-2 text-[12px] font-semibold text-[#5B5FE3] shadow-sm mb-6">
                <Sparkles size={14} />
                Introducing Multi-Agent Orchestration
              </div>

              <h1 className="text-[40px] md:text-[56px] leading-[1.0] font-black tracking-[-0.05em] text-[#0A0A14]">
                Architect. Ship.
                <br />
                <span className="bg-gradient-to-r from-[#5B5FE3] via-[#787BEE] to-[#A78BFA] bg-clip-text text-transparent gradient-shift">
                  Scale&nbsp;Wisdom with Agents.
                </span>
              </h1>

              <p className="mt-6 max-w-[460px] text-[16px] leading-7 text-[#5B6272]">
                Architect business processes into living workflows. Ship results with unprecedented velocity. Scale wisdom by institutionalizing AI best practices across your enterprise.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="group rounded-2xl bg-[#0A0A14] px-8 py-4 text-[15px] font-bold text-white hover:bg-[#1A1A2E] transition-all shadow-[0_8px_30px_rgba(10,10,20,.2)]">
                  Get Started Free
                  <ArrowRight size={15} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group flex items-center gap-2.5 rounded-2xl border border-[#E2E4E9] bg-white px-6 py-4 text-[15px] font-semibold text-[#111827] hover:bg-[#F9FAFB] transition-all">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F6FF] text-[#5B5FE3] group-hover:scale-110 transition-transform">
                    <Play size={13} fill="#5B5FE3" />
                  </span>
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-4 mr-2">
              <div className="inline-flex rounded-lg bg-[#f1f3f7] p-0.5">
                <button onClick={() => setBoardVersion('game')} className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition-all ${boardVersion === 'game' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#8f959e] hover:text-[#5B5FE3]'}`}>⚔ Game View</button>
                <button onClick={() => setBoardVersion('classic')} className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition-all ${boardVersion === 'classic' ? 'bg-white text-[#111827] shadow-sm' : 'text-[#8f959e] hover:text-[#5B5FE3]'}`}>⊞ Classic</button>
              </div>
            </div>

            <div className="animate-scale-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              {boardVersion === 'classic' ? <WorkflowBoard /> : <GameWorkflowBoard />}
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8F959E] mb-6">Trusted by leading teams worldwide</div>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-[0.22]">
              {LOGOS.map(logo => (
                <span key={logo} className="text-[16px] font-bold tracking-tight text-[#111827]">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-AGENT — Cascade Stacking */}
      <div className="relative" style={{ height: `${(STACK_CARDS.length + 1) * 100}vh` }}>
        {STACK_CARDS.map((card, idx) => (
          <section
            key={card.id}
            className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
            style={{
              zIndex: idx + 1,
              backgroundColor: idx === 0 ? '#FBFBFE' : idx === 1 ? '#F5F7FB' : '#F0F4FA',
            }}
          >
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: card.color + '06' }} />

            <div className="relative w-full max-w-[1340px] mx-auto px-6 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
                <div className="animate-fade-slide-up">
                  <div className={`bg-gradient-to-br ${card.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    {card.icon}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8F959E] mb-2">{card.subtitle}</div>
                  <h3 className="text-[32px] md:text-[44px] font-black text-[#0A0A14] mb-4 leading-[1.08] tracking-[-0.04em]">{card.title}</h3>
                  <p className="text-[16px] leading-7 text-[#646A73] mb-5 max-w-[480px]">{card.desc}</p>
                  <span className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold w-fit" style={{ backgroundColor: card.colorLight, color: card.color }}>
                    {card.tag}
                  </span>
                </div>

                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[440px]">
                  <div className="rounded-[32px] border border-black/[0.04] bg-white overflow-hidden h-full shadow-[0_16px_60px_rgba(15,23,42,0.04)]">
                    <AgentCardIllustration card={card} isVisible={true} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

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

      {/* AI ASSISTANT — Animated Chat Interface */}
      <AIAssistantSection />

      {/* METRICS STRIP — Animated Counters */}
      <section className="relative py-20 overflow-hidden bg-[#0A0A14]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B5FE3]/10 via-transparent to-[#787BEE]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#5B5FE3]/5 blur-[150px]" />

        <div className="relative max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center">
            {METRICS.map((m) => (
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