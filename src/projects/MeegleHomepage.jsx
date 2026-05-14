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

const WORKFLOW_NODES = [
  { id: 0, label: 'Intake' },
  { id: 1, label: 'Scope' },
  { id: 2, label: 'Design' },
  { id: 3, label: 'Review' },
  { id: 4, label: 'Develop' },
  { id: 5, label: 'Test' },
  { id: 6, label: 'Release' }
]

const STAGE_CONFIG = {
  idle: { label: 'Empty', color: '#D1D5DB', bg: '#F3F4F6' },
  targeting: { label: 'Targeting', color: '#F59E0B', bg: '#FFFBF0' },
  placing: { label: 'Placing', color: '#5B5FE3', bg: '#F4F6FF' },
  working: { label: 'Working', color: '#3EAB6E', bg: '#EDF7F0' },
  done: { label: 'Done', color: '#16A34A', bg: '#F0FDF4' }
}

const AGENT_BENCH = [
  { id: 'qa', label: 'QA Agent', color: '#5B5FE3' },
  { id: 'code', label: 'Code Agent', color: '#3EAB6E' },
  { id: 'design', label: 'Design Agent', color: '#F59E0B' },
  { id: 'deploy', label: 'Deploy Agent', color: '#EC4899' },
  { id: 'review', label: 'Review Agent', color: '#8B5CF6' },
  { id: 'data', label: 'Data Agent', color: '#06B6D4' },
  { id: 'sec', label: 'Security Agent', color: '#EF4444' },
]

const TinyAgent = ({ color, size = 20, flying = false }) => (
  <div
    className="transition-all duration-500"
    style={{
      width: size,
      height: size,
      filter: flying ? `drop-shadow(0 0 10px ${color}60)` : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
    }}
  >
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <defs>
        <linearGradient id={`ta-${color?.replace('#','')}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="12" r="9" fill={`url(#ta-${color?.replace('#','')})`} />
      <rect x="15" y="16" width="4" height="5" rx="2" fill={color} opacity="0.5" />
      <rect x="21" y="16" width="4" height="5" rx="2" fill={color} opacity="0.5" />
      <rect x="11" y="20" width="18" height="11" rx="5" fill={`url(#ta-${color?.replace('#','')})`} />
      <circle cx="17" cy="12" r="1.5" fill="white" />
      <circle cx="23" cy="12" r="1.5" fill="white" />
      <circle cx="17" cy="12" r="0.8" fill="#111" />
      <circle cx="23" cy="12" r="0.8" fill="#111" />
    </svg>
  </div>
)

const WorkflowBoard = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [phase, setPhase] = useState('targeting')
  const phaseRef = useRef('targeting')

  const advance = useCallback(() => {
    if (phaseRef.current === 'targeting') { phaseRef.current = 'flying'; setPhase('flying') }
    else if (phaseRef.current === 'flying') { phaseRef.current = 'placed'; setPhase('placed') }
    else if (phaseRef.current === 'placed') { phaseRef.current = 'working'; setPhase('working') }
    else if (phaseRef.current === 'working') { phaseRef.current = 'done'; setPhase('done') }
    else if (phaseRef.current === 'done') {
      setActiveIdx(p => (p + 1) % WORKFLOW_NODES.length)
      phaseRef.current = 'targeting'
      setPhase('targeting')
    }
  }, [])

  useEffect(() => {
    const durations = { targeting: 800, flying: 600, placed: 400, working: 1600, done: 1000 }
    const t = setTimeout(advance, durations[phase] || 1000)
    return () => clearTimeout(t)
  }, [phase, activeIdx, advance])

  const currentAgent = AGENT_BENCH[activeIdx % AGENT_BENCH.length]
  const nodeGap = 20
  const nodeW = 80
  const slotW = 72
  const slotH = 44

  return (
    <div className="relative w-full select-none">
      <div className="relative" style={{ perspective: '800px', height: 400 }}>
        <div className="absolute inset-x-0 flex justify-center" style={{ top: 24 }}>
          <div
            className="rounded-3xl"
            style={{
              width: WORKFLOW_NODES.length * (slotW + nodeGap) + 80,
              height: 240,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,246,250,0.6) 100%)',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.02)',
              transform: 'rotateX(55deg) rotateZ(-5deg)'
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 flex items-center justify-center"
          style={{
            transform: 'rotateX(55deg) rotateZ(-5deg)',
            top: 60,
            gap: nodeGap,
            pointerEvents: 'none'
          }}
        >
          {WORKFLOW_NODES.map((node, idx) => {
            const isActive = idx === activeIdx
            const isDone = idx < activeIdx
            const slotPhase = isActive ? phase : isDone ? 'done' : 'idle'
            const cfg = STAGE_CONFIG[slotPhase]

            return (
              <div key={node.id} className="relative flex flex-col items-center" style={{ width: slotW }}>
                <div
                  className="rounded-xl border-2 flex items-center justify-center transition-all duration-500"
                  style={{
                    width: slotW,
                    height: slotH,
                    backgroundColor: slotPhase === 'idle' ? '#F9FAFB' : cfg.bg,
                    borderColor: cfg.color + (slotPhase === 'idle' ? '30' : ''),
                    borderStyle: slotPhase === 'idle' ? 'dashed' : 'solid',
                    boxShadow: isActive && slotPhase !== 'idle' ? `0 8px 32px ${cfg.color}20` : 'none',
                    transform: isActive && (slotPhase === 'placed' || slotPhase === 'working') ? 'translateY(-4px)' : 'none'
                  }}
                >
                  {slotPhase === 'idle' && (
                    <span className="text-[9px] font-semibold text-[#C0C5CE]">{node.label}</span>
                  )}
                  {slotPhase === 'targeting' && (
                    <span className="text-[9px] font-bold" style={{ color: cfg.color }}>→ {node.label}</span>
                  )}
                  {slotPhase === 'flying' && (
                    <div className="animate-bounce">
                      <TinyAgent color={currentAgent.color} size={18} flying />
                    </div>
                  )}
                  {(slotPhase === 'placed' || slotPhase === 'working') && (
                    <div className="flex items-center gap-2">
                      <TinyAgent color={currentAgent.color} size={20} />
                      <div className="flex flex-col">
                        <span className="text-[8px] font-extrabold text-[#111827] leading-tight">{node.label}</span>
                        <span className="text-[7px] font-semibold" style={{ color: cfg.color }}>
                          {slotPhase === 'placed' ? 'Activated' : 'Working...'}
                        </span>
                      </div>
                      {slotPhase === 'working' && (
                        <div className="w-12 h-1 rounded-full bg-gray-100 overflow-hidden">
                          <div className="h-full rounded-full animate-pulse" style={{ backgroundColor: cfg.color, width: '70%' }} />
                        </div>
                      )}
                    </div>
                  )}
                  {slotPhase === 'done' && (
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-[#16A34A]" />
                      <span className="text-[9px] font-bold text-[#16A34A]">{node.label}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <svg className="absolute w-full h-full pointer-events-none" style={{ top: 0, left: 0, overflow: 'visible' }}>
          {WORKFLOW_NODES.map((_, idx) => {
            if (idx >= WORKFLOW_NODES.length - 1) return null
            const cx = `calc(50% - ${(WORKFLOW_NODES.length * (slotW + nodeGap)) / 2}px + ${idx * (slotW + nodeGap) + slotW / 2}px)`
            const nx = `calc(50% - ${(WORKFLOW_NODES.length * (slotW + nodeGap)) / 2}px + ${(idx + 1) * (slotW + nodeGap) + slotW / 2}px)`
            const isPast = idx < activeIdx
            return (
              <g key={idx}>
                <line
                  x1={0} y1={0} x2={0} y2={0}
                  style={{ display: 'none' }}
                />
              </g>
            )
          })}
        </svg>

        <div
          className="absolute inset-x-0 flex justify-center gap-2"
          style={{ bottom: 70 }}
        >
          {AGENT_BENCH.map((agent, idx) => {
            const assignedIdx = idx % WORKFLOW_NODES.length
            const isAssigned = assignedIdx <= activeIdx
            const isFlying = assignedIdx === activeIdx && (phase === 'flying' || phase === 'placed' || phase === 'working')

            return (
              <div
                key={agent.id}
                className="rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 transition-all duration-500"
                style={{
                  backgroundColor: isAssigned ? agent.color + '10' : '#F3F4F6',
                  border: `1px solid ${isAssigned ? agent.color + '20' : '#E5E7EB'}`,
                  opacity: isAssigned && !isFlying ? 0.5 : 1
                }}
              >
                <TinyAgent color={agent.color} size={16} />
                <span
                  className="text-[9px] font-semibold"
                  style={{ color: isAssigned ? agent.color : '#9CA3AF' }}
                >
                  {agent.label}
                </span>
                {isAssigned && !isFlying && <CheckCircle2 size={10} className="text-[#16A34A]" />}
              </div>
            )
          })}
        </div>

        {phase === 'flying' && (
          <div
            className="absolute font-bold text-[11px]"
            style={{
              left: '50%',
              top: 90,
              transform: 'translateX(-50%)',
              color: currentAgent.color,
              animation: 'fadeSlideUp 0.6s ease-out'
            }}
          >
            Placing {currentAgent.label} into {WORKFLOW_NODES[activeIdx].label}...
          </div>
        )}
        {phase === 'working' && (
          <div
            className="absolute font-bold text-[11px]"
            style={{
              left: '50%',
              top: 90,
              transform: 'translateX(-50%)',
              color: '#3EAB6E',
              animation: 'fadeSlideUp 0.6s ease-out'
            }}
          >
            Architecting automated workflow...
          </div>
        )}
      </div>
    </div>
  )
}

const MeegleHomepage = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [stackActive, setStackActive] = useState(0)
  const [activeTab, setActiveTab] = useState('planning')
  const heroRef = useRef(null)
  const stackSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const el = stackSectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      if (sectionTop > viewportHeight || sectionTop < -sectionHeight) return

      const progress = Math.max(0, (-sectionTop) / (sectionHeight - viewportHeight))
      const idx = Math.min(STACK_CARDS.length - 1, Math.floor(progress * STACK_CARDS.length))
      setStackActive(idx)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white text-[#1F2329] font-sans overflow-x-hidden">
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

            <div className="animate-scale-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              <WorkflowBoard />
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

      {/* MULTI-AGENT — Sticky Stack Cards */}
      <section ref={stackSectionRef} className="relative bg-[#FBFBFE]" style={{ height: `${STACK_CARDS.length * 100 + 100}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5B5FE3]/[0.03] blur-[100px]" />

          <div className="relative flex-1 w-full max-w-[1340px] mx-auto px-6 flex flex-col justify-center">
            <div className="mb-10 max-w-[600px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-5">
                <Bot size={14} /> Multi-Agent Orchestration
              </div>
              <h2 className="text-[48px] md:text-[56px] leading-[1.06] font-black tracking-[-0.05em] text-[#0A0A14]">
                One open platform.<br />Unlimited agents.
              </h2>
            </div>

            <div className="relative flex-1">
              {STACK_CARDS.map((card, idx) => (
                <div
                  key={card.id}
                  className="absolute inset-0 rounded-[36px] border border-black/[0.04] bg-white overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    zIndex: STACK_CARDS.length - idx,
                    transform: `translateY(${Math.max(0, (stackActive === idx ? 0 : stackActive > idx ? -16 : 16))}px) scale(${stackActive === idx ? 1 : 0.97})`,
                    opacity: Math.abs(stackActive - idx) <= 1 ? 1 : 0,
                    pointerEvents: stackActive === idx ? 'auto' : 'none',
                    boxShadow: stackActive === idx
                      ? `0 24px 80px ${card.color}12, 0 8px 24px rgba(0,0,0,0.06)`
                      : `0 1px 3px rgba(0,0,0,0.04)`
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] h-full">
                    <div className="flex flex-col justify-center px-8 lg:px-14 py-10">
                      <div className={`bg-gradient-to-br ${card.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        {card.icon}
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8F959E] mb-2">{card.subtitle}</div>
                      <h3 className="text-[28px] lg:text-[36px] font-black text-[#111827] mb-4 leading-[1.1]">{card.title}</h3>
                      <p className="text-[14px] leading-7 text-[#646A73] mb-5 max-w-[420px]">{card.desc}</p>
                      <span className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold w-fit" style={{ backgroundColor: card.colorLight, color: card.color }}>
                        {card.tag}
                      </span>
                    </div>

                    <div className="relative flex items-center justify-center p-4 lg:p-8">
                      <AgentCardIllustration card={card} isVisible={stackActive === idx} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-50">
            {STACK_CARDS.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setStackActive(idx)}
                className="rounded-full transition-all duration-500"
                style={{
                  width: stackActive === idx ? 32 : 10,
                  height: 10,
                  backgroundColor: stackActive === idx ? card.color : '#D1D5DB'
                }}
              />
            ))}
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