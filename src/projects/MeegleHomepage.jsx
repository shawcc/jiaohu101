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
        <svg viewBox="0 0 600 420" className="relative w-full max-w-[600px] h-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(0 20px 40px rgba(91,94,227,0.10))' }}>
          <defs>
            <linearGradient id="wf-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B5FE3" />
              <stop offset="100%" stopColor="#787BEE" />
            </linearGradient>
            <marker id="wf-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="#5B5FE3" opacity="0.45" />
            </marker>
            <marker id="wf-arrow-dim" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="#DEE0E3" opacity="0.6" />
            </marker>
            <pattern id="wf-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 L 0 28" fill="none" stroke="#5B5FE3" strokeWidth="0.25" opacity="0.06" />
            </pattern>
            <filter id="wf-card-shadow">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#5B5FE3" floodOpacity="0.10" />
            </filter>
            <filter id="wf-active-glow">
              <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#5B5FE3" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Blueprint grid */}
          <rect x="0" y="0" width="600" height="420" rx="28" fill="url(#wf-grid)" />
          <rect x="0" y="0" width="600" height="420" rx="28" fill="none" stroke="#5B5FE3" strokeWidth="0.5" opacity="0.08" />

          {/* ======= Track 1: R&D (5 nodes) ======= */}
          <g>
            {[
              { x: 64, label: '需求', color: '#787BEE' },
              { x: 164, label: '方案', color: '#646BE6' },
              { x: 264, label: '开发', color: '#5B5FE3', active: true },
              { x: 364, label: '审查', color: '#646BE6' },
              { x: 464, label: '发布', color: '#787BEE' },
            ].map((node, i) => (
              <g key={`wf1-${i}`} filter={node.active ? 'url(#wf-active-glow)' : 'url(#wf-card-shadow)'}>
                <rect x={node.x} y="60" width="72" height="38" rx="10" fill="white"
                  stroke={node.active ? '#5B5FE3' : '#E8EBF0'} strokeWidth={node.active ? 2 : 1}
                  strokeDasharray={node.active ? '5,3' : 'none'} />
                <text x={node.x + 36} y="84" textAnchor="middle" fill={node.active ? '#5B5FE3' : '#646A73'} fontSize="13" fontWeight="700" fontFamily="system-ui,-apple-system,sans-serif">{node.label}</text>
                {node.active && (
                  <circle cx={node.x + 64} cy="70" r="5" fill="#5B5FE3" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Arrow between nodes */}
                {i < 4 && (
                  <line x1={node.x + 72} y1="79" x2={node.x + 100} y2="79" stroke="#5B5FE3" strokeOpacity="0.35" strokeWidth="2" markerEnd="url(#wf-arrow)" />
                )}
              </g>
            ))}
            {/* Track label */}
            <rect x="12" y="62" width="40" height="34" rx="8" fill="#F4F6FF" stroke="#E8EBFF" strokeWidth="1" />
            <text x="32" y="85" textAnchor="middle" fill="#5B5FE3" fontSize="10" fontWeight="700">R&D</text>
          </g>

          {/* ======= Track 2: GTM Marketing (4 nodes) ======= */}
          <g>
            {[
              { x: 90, label: '策略' },
              { x: 204, label: '执行', agent: true },
              { x: 318, label: '分析' },
              { x: 432, label: '迭代' },
            ].map((node, i) => (
              <g key={`wf2-${i}`} filter="url(#wf-card-shadow)">
                <rect x={node.x} y="172" width="78" height="42" rx="10" fill="white" stroke="#E8EBF0" strokeWidth="1" />
                <text x={node.x + 39} y="198" textAnchor="middle" fill="#646A73" fontSize="13" fontWeight="700" fontFamily="system-ui,-apple-system,sans-serif">{node.label}</text>
                {node.agent && (
                  <g transform={`translate(${node.x + 58}, 175)`}>
                    <rect x="0" y="0" width="24" height="14" rx="7" fill="#F4F6FF" stroke="#5B5FE3" strokeWidth="0.8" opacity="0.7" />
                    <text x="12" y="10.5" textAnchor="middle" fill="#5B5FE3" fontSize="8" fontWeight="700">🤖</text>
                  </g>
                )}
                {i < 3 && (
                  <line x1={node.x + 78} y1="193" x2={node.x + 114} y2="193" stroke="#5B5FE3" strokeOpacity="0.3" strokeWidth="2" markerEnd="url(#wf-arrow)" />
                )}
              </g>
            ))}
            {/* Track label */}
            <rect x="12" y="174" width="48" height="38" rx="8" fill="#F4F6FF" stroke="#E8EBFF" strokeWidth="1" />
            <text x="36" y="198" textAnchor="middle" fill="#5B5FE3" fontSize="10" fontWeight="700">GTM</text>
          </g>

          {/* ======= Track 3: Customer Support (4 nodes) ======= */}
          <g>
            {[
              { x: 92, label: '接单' },
              { x: 208, label: '分派' },
              { x: 324, label: '处理' },
              { x: 440, label: '闭环' },
            ].map((node, i) => (
              <g key={`wf3-${i}`} filter="url(#wf-card-shadow)">
                <rect x={node.x} y="288" width="68" height="38" rx="10" fill="white" stroke="#E8EBF0" strokeWidth="1" />
                <text x={node.x + 34} y="312" textAnchor="middle" fill="#646A73" fontSize="13" fontWeight="700" fontFamily="system-ui,-apple-system,sans-serif">{node.label}</text>
                {i < 3 && (
                  <line x1={node.x + 68} y1="307" x2={node.x + 116} y2="307" stroke="#5B5FE3" strokeOpacity="0.3" strokeWidth="2" markerEnd="url(#wf-arrow)" />
                )}
              </g>
            ))}
            <rect x="12" y="289" width="58" height="36" rx="8" fill="#F4F6FF" stroke="#E8EBFF" strokeWidth="1" />
            <text x="41" y="312" textAnchor="middle" fill="#5B5FE3" fontSize="10" fontWeight="700">Support</text>
          </g>

          {/* Bottom decorative label */}
          <rect x="200" y="360" width="200" height="30" rx="14" fill="white" stroke="#5B5FE3" strokeWidth="0.5" opacity="0.6" />
          <text x="300" y="380" textAnchor="middle" fill="#5B5FE3" fontSize="10" fontWeight="600" opacity="0.5" fontFamily="system-ui,-apple-system,sans-serif">各团队流程 · 有序发生</text>
        </svg>
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
  { id: 'intake', label: 'Intake', color: '#5B5FE3', x: 6, y: 48, col: 0 },
  { id: 'scout', label: 'Scout', color: '#3EAB6E', x: 28, y: 20, col: 1, row: 'top' },
  { id: 'scope', label: 'Scope', color: '#F59E0B', x: 28, y: 48, col: 1, row: 'mid' },
  { id: 'spec',  label: 'Spec',  color: '#8B5CF6', x: 28, y: 76, col: 1, row: 'bot' },
  { id: 'build', label: 'Build', color: '#EC4899', x: 55, y: 48, col: 2 },
  { id: 'ship',  label: 'Ship',  color: '#06B6D4', x: 80, y: 48, col: 3 },
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
const SCENE_W = 760
const SCENE_H = 440

const IsometricPlatform = ({ node, state, agentColor, style }) => {
  const c = node.color
  const W = PLAT_W; const H = PLAT_H; const D = PLAT_D
  const hidden = state === 'hidden'
  const building = state === 'building'
  const built = state === 'built' || state === 'popping'
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
        <path
          d={`M${W} ${H * 0.2} L${W + D} ${0} L${W + D} ${H} L${W} ${H + H * 0.2} Z`}
          fill={populated ? c + '90' : building ? c + '20' : '#dde1e7'}
          opacity={populated ? 0.18 : building ? 0.12 : 1}
        />
        <path
          d={`M${0} ${H} L${D * 0.6} ${H + H * 0.2} L${W + D} ${H + H * 0.2} L${W} ${H} Z`}
          fill={populated ? c + '90' : building ? c + '15' : '#dde1e7'}
          opacity={populated ? 0.14 : building ? 0.08 : 1}
        />
        <defs>
          <linearGradient id={`tp-${node.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={populated ? c + '0D' : building ? c + '04' : '#ffffff'} />
            <stop offset="100%" stopColor={populated ? c + '06' : building ? c + '02' : '#f5f6f8'} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={W} height={H} rx="10"
          fill={`url(#tp-${node.id})`}
          stroke={populated ? c + '50' : building ? c + '25' : '#dee2e8'}
          strokeWidth={populated ? 1.6 : 0.8} />

        {building && (
          <g>
            <line x1="20" y1="0" x2="20" y2={H} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <line x1={W - 20} y1="0" x2={W - 20} y2={H} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <line x1="0" y1={H * 0.3} x2={W} y2={H * 0.3} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <line x1="0" y1={H * 0.7} x2={W} y2={H * 0.7} stroke={c + '10'} strokeWidth="0.3" strokeDasharray="3 10" />
            <circle cx={W * 0.7} cy={H * 0.35} r="2" fill={c} opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="0.7s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        <text x={W / 2} y={H / 2 + 3} textAnchor="middle" dominantBaseline="central"
          fontWeight="680" fontSize="11.5" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.025em"
          fill={populated ? c : built ? c + '75' : building ? c + '35' : '#c2c8d2'}>
          {node.label}
        </text>

        {populated && (
          <g transform={`translate(${W - 22}, 18)`}>
            <circle cx="0" cy="0" r="9" fill="#16A34A" opacity="0.12" />
            <path d="M-3 0L-1 3L4 -2" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          </g>
        )}
      </svg>

      {populated && (
        <>
          <div className="absolute char-fly-in char-fly-in-a" style={{
            left: W * 0.32, top: H * 0.22,
            width: 28, height: 28,
            zIndex: 2, pointerEvents: 'none'
          }}>
            <svg viewBox="0 0 28 28" width="28" height="28">
              <circle cx="14" cy="8" r="6.5" fill={agentColor || c} opacity="0.88" />
              <rect x="11.5" y="10.2" width="1.8" height="2.8" rx="0.9" fill={agentColor || c} opacity="0.5" />
              <rect x="14.7" y="10.2" width="1.8" height="2.8" rx="0.9" fill={agentColor || c} opacity="0.5" />
              <rect x="9" y="12.5" width="10" height="7" rx="3.5" fill={agentColor || c} opacity="0.65" />
              <circle cx="12" cy="7" r="1" fill="white" />
              <circle cx="16" cy="7" r="1" fill="white" />
              <circle cx="12" cy="7" r="0.5" fill="#111" />
              <circle cx="16" cy="7" r="0.5" fill="#111" />
            </svg>
          </div>
          <div className="absolute char-fly-in char-fly-in-h" style={{
            left: W * 0.55, top: H * 0.18,
            width: 24, height: 28,
            zIndex: 2, pointerEvents: 'none'
          }}>
            <svg viewBox="0 0 24 28" width="24" height="28">
              <circle cx="12" cy="5" r="4.5" fill="#4b5563" />
              <path d="M4.5 16c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" fill="#4b5563" opacity="0.75" />
            </svg>
          </div>
        </>
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

const ConnectorBridge = ({ from, to, color, state }) => {
  if (state === 'hidden') return null
  const active = state === 'active'
  const building = state === 'building'
  const built = state === 'built'

  const fx = from.x; const fy = from.y
  const tx = to.x; const ty = to.y

  const dx = tx - fx
  const cpf = 0.42

  const cp1x = fx + dx * cpf
  const cp1y = fy
  const cp2x = tx - dx * cpf
  const cp2y = ty

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
      <path
        d={`M${fx} ${fy} C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${tx} ${ty}`}
        fill="none"
        stroke={active ? `url(#${svgId})` : color + '22'}
        strokeWidth={active ? 2 : built ? 1.2 : 1}
        strokeDasharray={building ? '5 4' : 'none'}
        opacity={active ? 1 : built ? 0.45 : 0.3}
        strokeLinecap="round"
      >
        {building && (
          <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.5s" repeatCount="indefinite" />
        )}
      </path>
      <polygon
        points={`${tx - 5},${ty - 3.5} ${tx},${ty} ${tx - 5},${ty + 3.5}`}
        fill={active ? to.color : color + '30'}
        opacity={active ? 0.7 : built ? 0.35 : 0.2} />
    </svg>
  )
}

const WorkflowBoard = () => {
  const [buildPhase, setBuildPhase] = useState('building')
  const [step, setStep] = useState(0)
  const phaseRef = useRef('building')
  const stepRef = useRef(0)
  const [popStamp, setPopStamp] = useState(0)

  const totalPlatforms = WORKFLOW_PLATFORMS.length

  const advance = useCallback(() => {
    if (phaseRef.current === 'building') {
      if (stepRef.current >= totalPlatforms - 1) {
        phaseRef.current = 'populating'; stepRef.current = 0
        setBuildPhase('populating'); setStep(0)
      } else {
        stepRef.current += 1; setStep(s => s + 1)
      }
    } else {
      if (stepRef.current >= totalPlatforms) return
      stepRef.current += 1; setStep(s => s + 1)
      setPopStamp(Date.now())
    }
  }, [totalPlatforms])

  useEffect(() => {
    if (buildPhase === 'populating' && step >= totalPlatforms) {
      const t = setTimeout(() => {
        phaseRef.current = 'building'; stepRef.current = 0
        setBuildPhase('building'); setStep(0)
      }, 2600)
      return () => clearTimeout(t)
    }
  }, [buildPhase, step, totalPlatforms])

  useEffect(() => {
    const dur = buildPhase === 'building' ? 550 : 850
    if (buildPhase === 'populating' && step >= totalPlatforms) return
    const t = setTimeout(advance, dur)
    return () => clearTimeout(t)
  }, [step, buildPhase, advance, totalPlatforms, popStamp])

  const positions = WORKFLOW_PLATFORMS.map(p => ({
    id: p.id,
    color: p.color,
    left: (p.x / 100) * SCENE_W,
    top: (p.y / 100) * SCENE_H,
    cx: (p.x / 100) * SCENE_W + PLAT_W / 2,
    cy: (p.y / 100) * SCENE_H + PLAT_H / 2,
  }))

  const buildOrder = WORKFLOW_PLATFORMS.map(p => p.id)
  const isBuilt = id => buildOrder.indexOf(id) < (buildPhase === 'building' ? step + 1 : totalPlatforms)

  const bridges = [
    { from: 'intake', to: 'scout' },
    { from: 'intake', to: 'scope' },
    { from: 'intake', to: 'spec' },
    { from: 'scout', to: 'build' },
    { from: 'scope', to: 'build' },
    { from: 'spec',  to: 'build' },
    { from: 'build', to: 'ship' },
  ]

  return (
    <div className="relative w-full select-none" style={{ height: SCENE_H + 20 }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.045 }}>
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="0.6" fill="#5B5FE3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {bridges.map(({ from, to }) => {
        const fp = positions.find(p => p.id === from)
        const tp = positions.find(p => p.id === to)
        if (!fp || !tp) return null
        if (!isBuilt(from) || !isBuilt(to)) return null
        const toIdx = buildOrder.indexOf(to)
        const popStep = buildPhase === 'populating' ? step : -1
        const color = WORKFLOW_PLATFORMS.find(p => p.id === to).color
        let brState = 'built'
        if (buildPhase === 'building' && toIdx === step + 1) brState = 'building'
        if (buildPhase === 'populating' && toIdx === popStep) brState = 'active'
        return (
          <ConnectorBridge
            key={`br-${from}-${to}`}
            from={{ id: from, x: fp.cx, y: fp.cy, color: fp.color }}
            to={{ id: to, x: tp.cx, y: tp.cy, color: tp.color }}
            color={color}
            state={brState}
          />
        )
      })}

      {WORKFLOW_PLATFORMS.map((plat) => {
        const id = plat.id
        const idx = buildOrder.indexOf(id)
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

        return (
          <IsometricPlatform
            key={id}
            node={{ id, label: plat.label, color: plat.color }}
            state={state}
            agentColor={agent.color}
            style={{ left: pos.left, top: pos.top }}
          />
        )
      })}

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
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
            {AGENT_BENCH[step % AGENT_BENCH.length].label} joins {WORKFLOW_PLATFORMS[step].label} with human oversight
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
  const [visibleBubbles, setVisibleBubbles] = useState([0])
  const [typingBubble, setTypingBubble] = useState(null)
  const sectionRef = useRef(null)
  const cycleRef = useRef(null)
  const started = useRef(false)
  const scenesRef = useRef(AI_ASSISTANT_SCENES)

  const selectScene = useCallback((idx) => {
    if (cycleRef.current) clearTimeout(cycleRef.current)
    if (!visibleBubbles.includes(idx)) {
      setVisibleBubbles(prev => [...prev, idx])
    }
    setActiveIdx(idx)
    setTypingBubble(idx)
    setTimeout(() => {
      setTypingBubble(null)
    }, 1800)
    return () => {}
  }, [visibleBubbles])

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
          selectScene(idx)
          step++
          cycleRef.current = setTimeout(play, 3500)
        }
        play()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (cycleRef.current) clearTimeout(cycleRef.current)
    }
  }, [selectScene])

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

        {/* Single canvas: product screenshot as background, chat overlay on left */}
        <div className="relative rounded-[28px] overflow-hidden border border-black/[0.04] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
          {/* Background images stack */}
          <div className="relative w-full" style={{ aspectRatio: '16 / 9', minHeight: 540 }}>
            {AI_ASSISTANT_SCENES.map((scene, idx) => (
              <div
                key={scene.id}
                className={"absolute inset-0 w-full h-full transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gradient-to-br " + scene.gradient}
                style={{
                  opacity: activeIdx === idx ? 0.06 : 0,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className={"h-16 w-16 rounded-2xl bg-gradient-to-br " + scene.gradient + " flex items-center justify-center shadow-lg"} style={{ opacity: 0.25 }}>
                    <span className="text-[28px]">{scene.icon}</span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#B0B8C5] mt-4">Replace with product screenshot</p>
                </div>
              </div>
            ))}

            {/* Floating chat bubbles overlay */}
            <div className="absolute left-6 md:left-10 top-8 bottom-8 flex flex-col justify-start gap-3 z-10 max-w-[360px] w-[44%] pointer-events-none">
              {AI_ASSISTANT_SCENES.map((scene, idx) => {
                if (!visibleBubbles.includes(idx)) return null
                const isActive = activeIdx === idx
                const isTyping = typingBubble === idx
                return (
                  <button
                    key={scene.id}
                    onClick={() => selectScene(idx)}
                    className="pointer-events-auto text-left focus:outline-none"
                  >
                    {/* User bubble */}
                    <div className="flex justify-end mb-1.5">
                      <div
                        className="rounded-2xl rounded-br-md px-3.5 py-2.5 transition-all duration-500"
                        style={{
                          backgroundColor: scene.color,
                          color: 'white',
                          transform: "scale(" + (isActive ? 1.02 : 1) + ")",
                          boxShadow: isActive
                            ? ("0 8px 32px " + scene.color + "40")
                            : "0 2px 8px rgba(0,0,0,0.06)"
                        }}
                      >
                        <div className="text-[10px] font-bold mb-0.5 text-white/50">You</div>
                        <div className="text-[12px] leading-[1.5] font-semibold max-w-[240px]">
                          {isTyping ? (
                            <span>{scene.label.substring(0, Math.max(4, Math.floor(scene.label.length * 0.55)))}<span className="inline-flex ml-0.5">...<span className="animate-pulse">.</span></span></span>
                          ) : scene.label}
                        </div>
                      </div>
                    </div>

                    {/* AI response bubble */}
                    <div
                      className="rounded-2xl rounded-bl-md px-3.5 py-2.5 transition-all duration-500 relative"
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid #EEF0F4',
                        transform: "scale(" + (isActive ? 1.02 : 1) + ")",
                        boxShadow: isActive
                          ? "0 8px 32px rgba(15,23,42,0.08)"
                          : "0 2px 8px rgba(0,0,0,0.04)"
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="h-4 w-4 rounded bg-gradient-to-br from-[#5B5FE3] to-[#787BEE] flex items-center justify-center">
                          <Sparkles size={9} className="text-white" />
                        </div>
                        <div className="text-[9px] font-bold text-[#8F959E]">Meegle AI</div>
                      </div>
                      <div className="text-[11px] leading-[1.6] text-[#374151]">
                        {isTyping ? (
                          <span>{scene.prompt.substring(0, Math.max(6, Math.floor(scene.prompt.length * 0.5)))}<span className="inline-flex ml-0.5">...<span className="animate-pulse">.</span></span></span>
                        ) : (
                          <span>
                            {scene.prompt}
                            {isActive && (
                              <span
                                className="absolute bottom-2 right-3 h-5 w-5 rounded-full flex items-center justify-center animate-pulse"
                                style={{ backgroundColor: scene.color + '20' }}
                              >
                                <span
                                  className="h-2 w-2 rounded-full"
                                  style={{ backgroundColor: scene.color }}
                                />
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Scene label badge */}
            <div
              className="absolute bottom-6 right-6 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.06] px-4 py-2 shadow-sm transition-all duration-500"
              style={{ opacity: typingBubble === null ? 1 : 0.6 }}
            >
              <div className={"h-5 w-5 rounded-full bg-gradient-to-br " + activeScene.gradient + " flex items-center justify-center"}>
                <span className="text-[9px]">{activeScene.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-[#111827]">{activeScene.label}</span>
            </div>
          </div>
        </div>

        {/* Scene dots */}
        <div className="flex justify-center gap-2 mt-5">
          {AI_ASSISTANT_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => selectScene(idx)}
              className="rounded-full transition-all duration-500"
              style={{
                width: activeIdx === idx ? 24 : 8,
                height: 8,
                backgroundColor: activeIdx === idx ? scene.color : '#D1D5DB',
                opacity: activeIdx === idx ? 1 : 0.45
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const MeegleHomepage = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeTab, setActiveTab] = useState('planning')
  const [cascadeVariant, setCascadeVariant] = useState('fullbleed')
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
        @keyframes charFlyIn {
          0% { transform: translate(60px, 40px) scale(0.15); opacity: 0; }
          45% { transform: translate(-6px, -4px) scale(1.08); opacity: 1; }
          65% { transform: translate(3px, 2px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); opacity: 1; }
        }
        @keyframes charFlyInFromLeft {
          0% { transform: translate(-50px, 35px) scale(0.15); opacity: 0; }
          45% { transform: translate(5px, -3px) scale(1.08); opacity: 1; }
          65% { transform: translate(-2px, 1px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); opacity: 1; }
        }
        .char-fly-in-a { animation: charFlyIn 0.7s cubic-bezier(0.22, 0.08, 0.08, 1) both; }
        .char-fly-in-h { animation: charFlyInFromLeft 0.75s cubic-bezier(0.22, 0.08, 0.08, 1) 0.1s both; }
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
        @keyframes hopJumpArc {
          0% { transform: translate(var(--hx0), var(--hy0)) scale(0.3); opacity: 0; }
          30% { opacity: 1; }
          60% { transform: translate(calc((var(--hx0) + var(--hx1)) / 2), calc(min(var(--hy0), var(--hy1)) - 40px)) scale(1.1); }
          100% { transform: translate(var(--hx1), var(--hy1)) scale(1); opacity: 1; }
        }
        @keyframes hopIdle {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-3px); }
          60% { transform: translateY(0); }
        }
        @keyframes hopJump {
          0% { transform: translateY(0) scale(0.7); opacity: 0; }
          40% { transform: translateY(-6px) scale(1.15); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes trailFade {
          0% { transform: scale(1) translateY(0); opacity: 0.5; }
          100% { transform: scale(0.3) translateY(-12px); opacity: 0; }
        }
        @keyframes shimmerSweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
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
              <GameWorkflowBoard />
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
        <div className="fixed top-20 right-6 z-[100] flex items-center gap-1.5 rounded-xl bg-white/90 backdrop-blur border border-[#E2E4E9] p-1 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
          <button
            onClick={() => setCascadeVariant('centered')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
              cascadeVariant === 'centered'
                ? 'bg-[#5B5FE3] text-white shadow-sm'
                : 'text-[#646A73] hover:text-[#111827] hover:bg-[#F4F6F9]'
            }`}
          >
            居中版
          </button>
          <button
            onClick={() => setCascadeVariant('fullbleed')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
              cascadeVariant === 'fullbleed'
                ? 'bg-[#5B5FE3] text-white shadow-sm'
                : 'text-[#646A73] hover:text-[#111827] hover:bg-[#F4F6F9]'
            }`}
          >
            顶天版
          </button>
        </div>

        {STACK_CARDS.map((card, idx) => (
          <section
            key={card.id}
            className={cascadeVariant === 'centered'
              ? 'sticky top-0 h-screen flex items-center justify-center overflow-hidden'
              : 'sticky top-0 h-screen overflow-hidden'
            }
            style={{
              zIndex: idx + 1,
              backgroundColor: idx === 0 ? '#FBFBFE' : idx === 1 ? '#F5F7FB' : '#F0F4FA',
            }}
          >
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: card.color + '06' }} />

            <div className={`relative w-full max-w-[1340px] mx-auto px-6 ${cascadeVariant === 'centered' ? 'py-10' : 'h-full'} ${cascadeVariant === 'centered' ? '' : 'grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center'}`}>
              {cascadeVariant === 'centered' && (
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
              )}

              {cascadeVariant === 'fullbleed' && (
                <>
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

                  <div className="relative h-full py-4 lg:py-6">
                    <div className="rounded-[32px] border border-black/[0.04] bg-white overflow-hidden h-full shadow-[0_16px_60px_rgba(15,23,42,0.04)]">
                      <AgentCardIllustration card={card} isVisible={true} />
                    </div>
                  </div>
                </>
              )}
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


/* ============ GAME VERSION — Flow Canvas with Agent Orchestration ============ */

const FLOW_BOARD_W = 680
const FLOW_BOARD_H = 400
const FLOW_NODE_W = 106
const FLOW_NODE_H = 64

const FLOW_NODES = [
  { id: 'collect', label: 'Collect', icon: '📥', color: '#5B5FE3', x: 22,  y: 168 },
  { id: 'analyze', label: 'Analyze', icon: '🔬', color: '#F59E0B', x: 154, y: 76 },
  { id: 'design',  label: 'Design',  icon: '🎨', color: '#8B5CF6', x: 154, y: 260 },
  { id: 'build',   label: 'Build',   icon: '⚡',  color: '#3EAB6E', x: 304, y: 168 },
  { id: 'review',  label: 'Review',  icon: '🔍', color: '#EC4899', x: 444, y: 168 },
  { id: 'deploy',  label: 'Deploy',  icon: '🚀', color: '#06B6D4', x: 582, y: 168 },
]

const FLOW_EDGES = [
  { from: 'collect', to: 'analyze' },
  { from: 'collect', to: 'design' },
  { from: 'analyze', to: 'build' },
  { from: 'design',  to: 'build' },
  { from: 'build',   to: 'review' },
  { from: 'review',  to: 'deploy' },
]

const AgentIcon = ({ color, size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <circle cx="12" cy="7" r="5.5" fill={color} opacity="0.9" />
    <rect x="10" y="8.8" width="1.5" height="2.2" rx="0.7" fill={color} opacity="0.5" />
    <rect x="12.5" y="8.8" width="1.5" height="2.2" rx="0.7" fill={color} opacity="0.5" />
    <rect x="7.5" y="10.5" width="9" height="6" rx="3" fill={color} opacity="0.65" />
    <circle cx="10.5" cy="6" r="0.8" fill="white" />
    <circle cx="13.5" cy="6" r="0.8" fill="white" />
    <circle cx="10.5" cy="6" r="0.4" fill="#111" />
    <circle cx="13.5" cy="6" r="0.4" fill="#111" />
  </svg>
)

const FlowNode = ({ node, state, agentColor }) => {
  const c = node.color
  const w = FLOW_NODE_W; const h = FLOW_NODE_H
  const hidden = state === 'hidden'
  const building = state === 'building'
  const assigning = state === 'assigning'
  const complete = state === 'complete'

  if (hidden) return null

  return (
    <div className="absolute" style={{
      left: node.x, top: node.y, width: w, height: h,
      transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
      transform: building ? 'translateY(36px) scale(0.82)' : assigning ? 'scale(1.08)' : 'translateY(0) scale(1)',
      opacity: building ? 0.55 : 1,
      zIndex: assigning ? 20 : complete ? 12 : 1,
    }}>
      <div style={{
        position: 'absolute', left: 8, top: h + 6, width: w - 16, height: 10,
        backgroundColor: c + (complete ? '22' : '0e'),
        borderRadius: '50%', filter: 'blur(8px)',
        opacity: building ? 0.1 : complete ? 0.45 : 0.22,
        transition: 'all 0.5s ease',
      }} />

      <div style={{
        position: 'absolute', inset: 0, borderRadius: 12,
        background: complete
          ? `linear-gradient(135deg, ${c}0c, #f0fdf4)`
          : building ? '#f9fafb' : '#ffffff',
        border: `1.5px solid ${complete ? '#10b981' : building ? '#e5e7eb' : '#e8ecf0'}`,
        boxShadow: complete
          ? `0 0 18px ${c}18, 0 2px 8px rgba(0,0,0,0.03)`
          : building ? '0 1px 3px rgba(0,0,0,0.02)' : '0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex', alignItems: 'center', gap: 10, padding: '0 12px',
        overflow: 'hidden', transition: 'all 0.5s ease',
      }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          backgroundColor: complete ? '#10b981' : building ? '#d1d5db' : c,
          borderRadius: '12px 0 0 12px', transition: 'background-color 0.5s ease',
        }} />

        <div style={{
          width: 34, height: 34, borderRadius: 9, flexShrink: 0,
          background: building ? '#f3f4f6' : `linear-gradient(135deg, ${c}14, ${c}06)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 15, transition: 'all 0.5s ease',
        }}>
          {node.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 11, fontWeight: 700,
            color: building ? '#9ca3af' : complete ? '#065f46' : '#1f2937',
            transition: 'color 0.4s ease', letterSpacing: '-0.01em',
          }}>
            {node.label}
          </div>
        </div>

        {complete && (
          <div style={{
            position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
            width: 20, height: 20, borderRadius: '50%', backgroundColor: '#10b981',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'bounceIn 0.5s cubic-bezier(0.16,1,0.3,1) both',
            boxShadow: '0 2px 6px rgba(16,185,129,0.3)',
          }}>
            <svg viewBox="0 0 10 10" width="9" height="9">
              <path d="M2 5l2 2L8 3" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}

        {building && (
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 12,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmerSweep 1.6s ease-in-out infinite',
          }} />
        )}
      </div>

      {assigning && (
        <div style={{
          position: 'absolute', top: -26, left: '50%', transform: 'translateX(-50%)',
          animation: 'bounceIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
        }}>
          <AgentIcon color={agentColor} size={22} />
        </div>
      )}
      {(state === 'populated' || complete) && !assigning && (
        <div style={{
          position: 'absolute', top: -18, right: -4,
          animation: 'bounceIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
        }}>
          <AgentIcon color={agentColor} size={17} />
        </div>
      )}
    </div>
  )
}

const FlowEdge = ({ fromNode, toNode, state }) => {
  if (state === 'hidden') return null
  const fcx = fromNode.x + FLOW_NODE_W / 2
  const fcy = fromNode.y + FLOW_NODE_H / 2
  const tcx = toNode.x + FLOW_NODE_W / 2
  const tcy = toNode.y + FLOW_NODE_H / 2

  const isHorizontal = Math.abs(fcy - tcy) < 10
  const active = state === 'active'
  const building = state === 'building'

  const pathD = isHorizontal
    ? `M ${fcx} ${fcy} L ${tcx} ${tcy}`
    : `M ${fcx} ${fcy} C ${(fcx+tcx)/2} ${fcy}, ${(fcx+tcx)/2} ${tcy}, ${tcx} ${tcy}`

  const color = active ? '#fbbf24' : building ? '#c4b5fd' : '#d1d5db'
  const markerId = `arrow-${fromNode.id}-${toNode.id}`

  return (
    <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible', zIndex: 0 }}>
      <defs>
        <marker id={markerId} viewBox="0 0 8 6" refX="8" refY="3" markerWidth="8" markerHeight="6" orient="auto">
          <path d="M0 0l8 3-8 3z" fill={color} opacity={active ? 0.9 : building ? 0.5 : 0.35} />
        </marker>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={active ? 2 : 1.2}
        strokeDasharray={building ? '6 4' : 'none'}
        opacity={active ? 1 : building ? 0.7 : 0.4}
        markerEnd={`url(#${markerId})`}
      />
      {building && (
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth={1.2}
          strokeDasharray="6 4"
          strokeDashoffset="0"
          opacity={0.4}
        >
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="0.6s" repeatCount="indefinite" />
        </path>
      )}
    </svg>
  )
}

const FlowJumper = ({ fromNode, toNode, color }) => {
  if (!fromNode || !toNode) return null
  const sx = fromNode.x + FLOW_NODE_W / 2 - 13
  const sy = fromNode.y - 22
  const ex = toNode.x + FLOW_NODE_W / 2 - 13
  const ey = toNode.y - 22

  return (
    <div className="absolute pointer-events-none" style={{
      zIndex: 30,
      animation: 'hopJumpArc 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      '--hx0': `${sx}px`, '--hy0': `${sy}px`,
      '--hx1': `${ex}px`, '--hy1': `${ey}px`,
    }}>
      <AgentIcon color={color} size={24} />
      <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: -6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            position: 'absolute', left: -4 + i * 3, top: -3 + i * 2,
            width: 3, height: 3, borderRadius: '50%',
            backgroundColor: color, opacity: 0.5 - i * 0.15,
            animation: `trailFade 0.5s ease-out ${i * 0.05}s both`,
          }} />
        ))}
      </div>
    </div>
  )
}

const GameWorkflowBoard = () => {
  const [phase, setPhase] = useState('building')
  const [step, setStep] = useState(0)
  const phaseRef = useRef('building')
  const stepRef = useRef(0)
  const [flyActive, setFlyActive] = useState(false)
  const [flyFrom, setFlyFrom] = useState(null)

  const total = FLOW_NODES.length
  const buildOrder = FLOW_NODES.map(n => n.id)

  const advance = useCallback(() => {
    const p = phaseRef.current
    const s = stepRef.current

    if (p === 'building') {
      if (s >= total - 1) {
        phaseRef.current = 'assigning'
        stepRef.current = 0
        setPhase('assigning')
        setStep(0)
        setTimeout(() => {
          setFlyActive(true)
          setTimeout(() => setFlyActive(false), 750)
        }, 400)
      } else {
        stepRef.current += 1
        setStep(v => v + 1)
      }
    } else if (p === 'assigning') {
      if (s >= total) return
      const prev = s > 0 ? FLOW_NODES[s - 1] : null
      setFlyFrom(prev)
      setFlyActive(true)
      setTimeout(() => {
        setFlyActive(false)
        stepRef.current += 1
        setStep(v => v + 1)
      }, 800)
    }
  }, [total])

  useEffect(() => {
    if (phase === 'assigning' && step >= total) {
      const t = setTimeout(() => {
        phaseRef.current = 'complete'
        setPhase('complete')
        setFlyActive(false)
        setFlyFrom(null)
        setTimeout(() => {
          phaseRef.current = 'building'
          stepRef.current = 0
          setPhase('building')
          setStep(0)
        }, 2800)
      }, 600)
      return () => clearTimeout(t)
    }
  }, [phase, step, total])

  useEffect(() => {
    const dur = phase === 'building' ? 600 : phase === 'assigning' ? 1400 : Infinity
    if (phase === 'complete') return
    if (phase === 'assigning' && step >= total) return
    const t = setTimeout(advance, dur)
    return () => clearTimeout(t)
  }, [step, phase, advance, total])

  const getEdgeState = (fromId, toId) => {
    const fi = buildOrder.indexOf(fromId)
    const ti = buildOrder.indexOf(toId)
    if (phase === 'building') {
      if (fi > step || ti > step) return 'hidden'
      if (ti === step + 1) return 'building'
      return 'built'
    }
    if (phase === 'assigning') {
      if (ti === step) return 'active'
      return 'built'
    }
    return 'built'
  }

  return (
    <div className="relative w-full select-none rounded-2xl overflow-hidden"
      style={{ height: FLOW_BOARD_H, backgroundColor: '#fafbfe' }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
        <defs>
          <pattern id="flowdots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="11" cy="11" r="0.8" fill="#5B5FE3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowdots)" />
      </svg>

      <div className="absolute left-0 right-0" style={{ top: FLOW_BOARD_H - 8, height: 8, background: 'linear-gradient(0deg, #f0f2f8 0%, transparent 100%)' }} />

      {FLOW_EDGES.map(({ from, to }) => {
        const fn = FLOW_NODES.find(n => n.id === from)
        const tn = FLOW_NODES.find(n => n.id === to)
        if (!fn || !tn) return null
        return <FlowEdge key={`fe-${from}-${to}`} fromNode={fn} toNode={tn} state={getEdgeState(from, to)} />
      })}

      {flyActive && phase === 'assigning' && step < total && (
        <FlowJumper
          fromNode={flyFrom || FLOW_NODES[0]}
          toNode={FLOW_NODES[step]}
          color={AGENT_BENCH[step % AGENT_BENCH.length].color}
        />
      )}

      {FLOW_NODES.map((node, idx) => {
        const id = node.id
        const bi = buildOrder.indexOf(id)

        let state = 'hidden'
        if (phase === 'building') {
          if (bi < step) state = 'built'
          else if (bi === step) state = 'building'
        } else if (phase === 'assigning') {
          if (bi < step) state = 'populated'
          else if (bi === step) state = flyActive ? 'assigning' : 'built'
          else state = 'built'
        } else if (phase === 'complete') {
          state = 'complete'
        }

        const agent = AGENT_BENCH[bi % AGENT_BENCH.length]
        return <FlowNode key={id} node={node} state={state} agentColor={agent.color} />
      })}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2" style={{ zIndex: 20 }}>
        {phase === 'building' && (
          <span className="text-[11px] font-semibold" style={{
            color: FLOW_NODES[Math.min(step, total - 1)].color,
            animation: 'fadeSlideUp 0.5s ease-out',
          }}>
            Building the workflow pipeline... {step + 1}/{total}
          </span>
        )}
        {phase === 'assigning' && step < total && (
          <span className="text-[11px] font-semibold" style={{
            color: AGENT_BENCH[step % AGENT_BENCH.length].color,
            animation: 'fadeSlideUp 0.5s ease-out',
          }}>
            {flyActive
              ? `${AGENT_BENCH[step % AGENT_BENCH.length].label} assigned to ${FLOW_NODES[step].label}`
              : '...'}
          </span>
        )}
        {phase === 'complete' && (
          <span className="text-[11px] font-semibold text-[#10b981]" style={{ animation: 'fadeSlideUp 0.5s ease-out' }}>
            All agents orchestrated — pipeline complete!
          </span>
        )}
      </div>
    </div>
  )
}

export default MeegleHomepage
