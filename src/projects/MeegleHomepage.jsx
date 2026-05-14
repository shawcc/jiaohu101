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
  Send,
  Shield,
  Sparkles,
  User,
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
  { id: 0, label: 'Intake', color: '#5B5FE3', x: 3, y: 50 },
  { id: 1, label: 'Scope', color: '#3EAB6E', x: 21, y: 42 },
  { id: 2, label: 'Design', color: '#F59E0B', x: 39, y: 56 },
  { id: 3, label: 'Review', color: '#8B5CF6', x: 57, y: 40 },
  { id: 4, label: 'Develop', color: '#EC4899', x: 75, y: 54 },
]

const AGENT_BENCH = [
  { id: 'qa', label: 'QA Agent', color: '#5B5FE3' },
  { id: 'code', label: 'Code Agent', color: '#3EAB6E' },
  { id: 'design', label: 'Design Agent', color: '#F59E0B' },
  { id: 'deploy', label: 'Deploy Agent', color: '#EC4899' },
  { id: 'review', label: 'Review Agent', color: '#8B5CF6' },
  { id: 'data', label: 'Data Agent', color: '#06B6D4' },
  { id: 'sec', label: 'Security Agent', color: '#EF4444' },
]


const IsometricPlatform = ({ node, state, agentColor, style, onBuilt }) => {
  const c = node.color
  const w = 120
  const h = 88
  const d = 14

  const isHidden = state === 'hidden'
  const isBuilding = state === 'building'
  const isBuilt = state === 'built'
  const isPopulated = state === 'populated'

  useEffect(() => {
    if (isBuilding && onBuilt) {
      const t = setTimeout(onBuilt, 500)
      return () => clearTimeout(t)
    }
  }, [isBuilding, onBuilt])

  const alpha = isHidden ? 0 : 1
  const scale = isPopulated ? 1.05 : isBuilt ? 1 : isBuilding ? 0.85 : 0
  const glow = isPopulated ? `0 0 40px ${c}40, 0 8px 30px ${c}20` : 'none'
  const charAlpha = isPopulated ? 1 : 0
  const charX = isPopulated ? 0 : -10

  return (
    <div
      className="absolute"
      style={{
        ...style,
        opacity: alpha,
        transform: `scale(${scale})`,
        transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)'
      }}
    >
      <div style={{ position: 'relative', width: w + d + 4, height: h + d + 4, filter: glow }}>
        <svg viewBox={`0 0 ${w + d + 4} ${h + d + 4}`} width={w + d + 4} height={h + d + 4} style={{ display: 'block' }}>
          <path
            d={`M${w} ${d} L${w + d} ${0} L${w + d} ${h} L${w} ${h + d} Z`}
            fill={isPopulated ? c + '28' : isBuilt || isBuilding ? c + '15' : '#e8eaed'}
            stroke={isPopulated ? c + '18' : '#e0e3e7'}
            strokeWidth="0.5"
          />
          <path
            d={`M${0} ${h} L${d} ${h + d} L${w + d} ${h + d} L${w} ${h} Z`}
            fill={isPopulated ? c + '20' : isBuilt || isBuilding ? c + '10' : '#e8eaed'}
            stroke={isPopulated ? c + '15' : '#e0e3e7'}
            strokeWidth="0.5"
          />
          <rect
            x="0" y="0" width={w} height={h}
            rx="12"
            fill={isPopulated ? c + '0F' : isBuilt || isBuilding ? c + '06' : '#f7f8fa'}
            stroke={isPopulated ? c + '50' : isBuilt || isBuilding ? c + '30' : '#e0e3e7'}
            strokeWidth={isPopulated ? 2 : 1.2}
          />

          {isBuilding && (
            <g>
              <line x1="20" y1="0" x2="20" y2={h} stroke={c + '08'} strokeWidth="0.3" strokeDasharray="3 6" />
              <line x1={w - 20} y1="0" x2={w - 20} y2={h} stroke={c + '08'} strokeWidth="0.3" strokeDasharray="3 6" />
              <line x1="0" y1="20" x2={w} y2="20" stroke={c + '08'} strokeWidth="0.3" strokeDasharray="3 6" />
              <line x1="0" y1={h - 20} x2={w} y2={h - 20} stroke={c + '08'} strokeWidth="0.3" strokeDasharray="3 6" />
            </g>
          )}

          <text x={w / 2} y={h / 2 + 4} textAnchor="middle" dominantBaseline="central"
            fontWeight="700" fontSize="11"
            fill={isPopulated ? c : isBuilt ? c + '80' : isBuilding ? c + '50' : '#c0c5ce'}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.02em"
          >
            {node.label}
          </text>

          <g transform={`translate(${w / 2 - 30 + charX}, ${h / 2 - 22})`} opacity={charAlpha}
            style={{ transition: 'opacity 0.6s ease-out 0.3s' }}>
            <circle cx="0" cy="0" r="7" fill={agentColor || c} opacity="0.85" />
            <rect x="-2.5" y="2.5" width="2" height="3.5" rx="1" fill={agentColor || c} opacity="0.5" />
            <rect x="1" y="2.5" width="2" height="3.5" rx="1" fill={agentColor || c} opacity="0.5" />
            <rect x="-5" y="5" width="10" height="7" rx="3.5" fill={agentColor || c} opacity="0.65" />
            <circle cx="-2" cy="-1" r="1" fill="white" />
            <circle cx="2" cy="-1" r="1" fill="white" />
            <circle cx="-2" cy="-1" r="0.5" fill="#111" />
            <circle cx="2" cy="-1" r="0.5" fill="#111" />
          </g>

          <g transform={`translate(${w / 2 + 16 + charX}, ${h / 2 - 20})`} opacity={charAlpha}
            style={{ transition: 'opacity 0.6s ease-out 0.45s' }}>
            <circle cx="0" cy="-4" r="4.5" fill={isPopulated ? '#374151' : '#9ca3af'} />
            <path d="M-5 5c0-2.8 2.2-5 5-5s5 2.2 5 5" fill={isPopulated ? '#374151' : '#9ca3af'} opacity="0.7" />
          </g>

          {isBuilding && (
            <g>
              <circle cx={w * 0.65} cy={h * 0.35} r="2" fill={c} opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="0.6s" repeatCount="indefinite" />
                <animate attributeName="r" values="2;3;2" dur="0.6s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>

        {isPopulated && (
          <div
            className="absolute rounded-xl animate-pulse"
            style={{
              inset: -4,
              border: `2px solid ${c}30`,
              borderRadius: 16,
              pointerEvents: 'none',
              animation: 'scaleIn 1.5s ease-in-out infinite'
            }}
          />
        )}
      </div>
    </div>
  )
}

const ConnectorBridge = ({ from, to, color, active = false, building = false }) => {
  const fx = from.left + from.width / 2
  const fy = from.top + from.height / 2
  const tx = to.left + to.width / 2
  const ty = to.top + to.height / 2
  const midX = (fx + tx) / 2
  const midY = Math.min(fy, ty) - 30

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {active && (
        <defs>
          <linearGradient id={`bga-${from.id}-${to.id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={to.color} stopOpacity="0.6" />
          </linearGradient>
        </defs>
      )}
      <path
        d={`M${fx} ${fy} Q${midX} ${midY} ${tx} ${ty}`}
        fill="none"
        stroke={active ? `url(#bga-${from.id}-${to.id})` : color + '40'}
        strokeWidth={active ? 2.5 : 1.5}
        strokeDasharray={building ? '6 3' : active ? 'none' : '4 4'}
        opacity={building ? 0.6 : active ? 1 : 0.5}
      >
        {building && (
          <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.6s" repeatCount="indefinite" />
        )}
      </path>
      <polygon
        points={`${tx - 6},${ty - 4} ${tx},${ty} ${tx - 6},${ty + 4}`}
        fill={active ? to.color : color + '50'}
        opacity={active ? 0.8 : 0.4}
      />
    </svg>
  )
}

const WorkflowBoard = () => {
  const [buildPhase, setBuildPhase] = useState('building')
  const [step, setStep] = useState(0)
  const phaseRef = useRef('building')
  const stepRef = useRef(0)

  const totalPlatforms = WORKFLOW_PLATFORMS.length

  const advance = useCallback(() => {
    if (phaseRef.current === 'building') {
      if (stepRef.current >= totalPlatforms - 1) {
        phaseRef.current = 'populating'
        stepRef.current = 0
        setBuildPhase('populating')
        setStep(0)
      } else {
        stepRef.current += 1
        setStep(s => s + 1)
      }
    } else {
      if (stepRef.current >= totalPlatforms) return
      stepRef.current += 1
      setStep(s => s + 1)
    }
  }, [totalPlatforms])

  useEffect(() => {
    if (buildPhase === 'populating' && step >= totalPlatforms) {
      const t = setTimeout(() => {
        phaseRef.current = 'building'
        stepRef.current = 0
        setBuildPhase('building')
        setStep(0)
      }, 2500)
      return () => clearTimeout(t)
    }
  }, [buildPhase, step, totalPlatforms])

  useEffect(() => {
    const dur = buildPhase === 'building' ? 650 : 750
    if (buildPhase === 'populating' && step >= totalPlatforms) return
    const t = setTimeout(advance, dur)
    return () => clearTimeout(t)
  }, [step, buildPhase, advance, totalPlatforms])

  const platW = 134
  const platH = 106
  const sceneW = 700
  const sceneH = 380

  const positions = WORKFLOW_PLATFORMS.map((p) => ({
    id: p.id,
    left: (p.x / 100) * sceneW,
    top: (p.y / 100) * (sceneH - 60) + 20,
    width: platW,
    height: platH,
    color: p.color
  }))

  const builtCount = buildPhase === 'building' ? step + 1 : totalPlatforms

  const getState = (i) => {
    if (buildPhase === 'building') {
      if (i < step) return 'built'
      if (i === step) return 'building'
      return 'hidden'
    }
    if (i < step) return 'populated'
    if (i === step) return 'built'
    return 'built'
  }

  return (
    <div className="relative w-full select-none" style={{ height: sceneH }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#5B5FE3" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {positions.map((pos, i) => {
        if (i >= positions.length - 1) return null
        const next = positions[i + 1]
        const builtSoFar = buildPhase === 'building' ? step + 1 : totalPlatforms
        if (i + 1 >= builtSoFar) return null
        const idxInPopulate = buildPhase === 'populating' ? step : -1
        const isActiveBridge = buildPhase === 'populating' && i + 1 === idxInPopulate
        const isBuildingBridge = buildPhase === 'building' && i + 1 === step + 1
        const color = WORKFLOW_PLATFORMS[i + 1].color
        return (
          <ConnectorBridge
            key={`bridge-${i}`}
            from={{ id: i, left: pos.left + 10, top: pos.top + 10, width: pos.width - 20, height: pos.height - 20, color: pos.color }}
            to={{ id: i + 1, left: next.left + 10, top: next.top + 10, width: next.width - 20, height: next.height - 20, color: next.color }}
            color={color}
            active={isActiveBridge}
            building={isBuildingBridge}
          />
        )
      })}

      {positions.map((pos, i) => {
        const state = getState(i)
        const agent = AGENT_BENCH[i % AGENT_BENCH.length]
        return (
          <IsometricPlatform
            key={pos.id}
            node={{ id: WORKFLOW_PLATFORMS[i].id, label: WORKFLOW_PLATFORMS[i].label, color: WORKFLOW_PLATFORMS[i].color }}
            state={state}
            agentColor={agent.color}
            style={{ left: pos.left, top: pos.top }}
          />
        )
      })}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {buildPhase === 'building' && (
          <span
            className="text-[11px] font-semibold"
            style={{ color: WORKFLOW_PLATFORMS[Math.min(step, totalPlatforms - 1)].color, animation: 'fadeSlideUp 0.5s ease-out' }}
          >
            Building the workflow pipeline... Step {step + 1}/{totalPlatforms}
          </span>
        )}
        {buildPhase === 'populating' && step < totalPlatforms && (
          <span
            className="text-[11px] font-semibold"
            style={{ color: AGENT_BENCH[step % AGENT_BENCH.length].color, animation: 'fadeSlideUp 0.5s ease-out' }}
          >
            Placing {AGENT_BENCH[step % AGENT_BENCH.length].label} + Human into {WORKFLOW_PLATFORMS[step].label}
          </span>
        )}
        {buildPhase === 'populating' && step >= totalPlatforms && (
          <span
            className="text-[11px] font-semibold text-[#3EAB6E]"
            style={{ animation: 'fadeSlideUp 0.5s ease-out' }}
          >
            Workflow pipeline active — Architect. Ship. Scale with Agents.
          </span>
        )}
      </div>
    </div>
  )
}

const CHAT_MESSAGES = [
  {
    id: 1,
    sender: 'user',
    text: 'What\'s the status of our Q3 product launch across all teams?',
    delay: 0,
    imageIndex: 0
  },
  {
    id: 2,
    sender: 'ai',
    text: 'Here\'s the cross-team status dashboard for Q3 launch.\n\n⏱ Sprint Progress: 76% complete\n👥 Resource Load: 82% allocated\n⚠ Risk Items: 3 detected (mitigated)\n\nEngineering is tracking ahead by 2 sprints. However, Design has a minor bottleneck — I recommend rebalancing resources.',
    delay: 1800,
    imageIndex: 1
  },
  {
    id: 3,
    sender: 'user',
    text: 'Can you draft a resource rebalancing plan for Design?',
    delay: 5000,
    imageIndex: 1
  },
  {
    id: 4,
    sender: 'ai',
    text: 'Sure! I\'ve analyzed team capacity and created a draft plan:\n\n📋 Rebalancing Recommendations:\n• Move 2 engineers from Platform to Design Review\n• Extend sprint scope by 3 days to absorb backlog\n• Auto-schedule stakeholder alignment for Thursday\n\nWould you like me to apply these changes to the active sprint?',
    delay: 7000,
    imageIndex: 2
  }
]

const AI_SCREENSHOTS = [
  { id: 0, label: 'Dashboard Overview', gradient: 'from-[#5B5FE3] to-[#787BEE]' },
  { id: 1, label: 'Project Status Detail', gradient: 'from-[#3EAB6E] to-[#58C98A]' },
  { id: 2, label: 'Resource Rebalancing', gradient: 'from-[#F59E0B] to-[#FBBF24]' }
]

const AIAssistantSection = () => {
  const [visibleMessages, setVisibleMessages] = useState([])
  const [typingMessageId, setTypingMessageId] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const sectionRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        CHAT_MESSAGES.forEach((msg) => {
          setTimeout(() => {
            setVisibleMessages(prev => {
              if (prev.includes(msg.id)) return prev
              return [...prev, msg.id]
            })
            setTypingMessageId(msg.id)
            if (msg.sender === 'ai') {
              setTimeout(() => {
                setActiveImageIndex(msg.imageIndex)
              }, 600)
            }
            const textLen = msg.text.length
            setTimeout(() => {
              setTypingMessageId(null)
            }, Math.min(textLen * 25, 2000))
          }, msg.delay)
        })
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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

          <p className="mt-5 text-[16px] leading-7 text-[#646A73] max-w-[560px]">
            Professional project management fundamentals, supercharged by AI. From project planning to resource allocation. Experience native intelligence, ready out-of-the-box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          {/* Left: Chat */}
          <div className="rounded-[28px] border border-black/[0.04] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.04)] overflow-hidden">
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-[#F3F4F6] bg-white">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
              </div>
              <div className="ml-3 flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#5B5FE3] to-[#787BEE] flex items-center justify-center shadow-[0_2px_8px_rgba(91,94,227,0.3)]">
                  <Sparkles size={12} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">Meegle AI</div>
                  <div className="text-[9px] text-[#16A34A] font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                    Online
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 space-y-3.5 min-h-[420px] bg-[#FBFCFD]">
              {visibleMessages.length === 0 && (
                <div className="flex items-center justify-center h-full text-[13px] text-[#B0B8C5]">
                  Waiting for conversation...
                </div>
              )}
              {CHAT_MESSAGES.map((msg) => {
                if (!visibleMessages.includes(msg.id)) return null
                const isTyping = typingMessageId === msg.id
                const isUser = msg.sender === 'user'

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 animate-fade-slide-up ${isUser ? 'justify-end' : ''}`}
                  >
                    {!isUser && (
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#5B5FE3] to-[#787BEE] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                        <Sparkles size={11} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] ${
                        isUser
                          ? 'bg-[#5B5FE3] text-white rounded-br-md'
                          : 'bg-white border border-[#EEF0F4] text-[#111827] rounded-bl-md shadow-sm'
                      }`}
                    >
                      <div className={`text-[10px] font-bold mb-1 ${isUser ? 'text-white/60' : 'text-[#8F959E]'}`}>
                        {isUser ? 'You' : 'Meegle AI'}
                      </div>
                      <div className={`text-[12px] leading-[1.65] whitespace-pre-line ${isUser ? 'text-white' : 'text-[#374151]'}`}>
                        {isTyping ? (
                          <span>
                            {msg.text.substring(0, Math.floor(msg.text.length * 0.65))}
                            <span className="inline-flex ml-0.5">
                              <span className="animate-pulse" style={{ animationDelay: '0ms' }}>.</span>
                              <span className="animate-pulse" style={{ animationDelay: '150ms' }}>.</span>
                              <span className="animate-pulse" style={{ animationDelay: '300ms' }}>.</span>
                            </span>
                          </span>
                        ) : (
                          msg.text
                        )}
                      </div>
                    </div>
                    {isUser && (
                      <div className="h-7 w-7 rounded-lg bg-[#F4F6F9] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User size={12} className="text-[#8F959E]" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="px-4 py-3.5 border-t border-[#F3F4F6] bg-white flex items-center gap-2.5">
              <input
                type="text"
                placeholder="Ask Meegle AI anything about your projects..."
                className="flex-1 bg-[#F4F6F9] rounded-xl px-3.5 py-2.5 text-[12px] text-[#111827] placeholder-[#B0B8C5] outline-none focus:ring-2 focus:ring-[#5B5FE3]/20 transition-all"
                readOnly
              />
              <button className="h-9 w-9 rounded-xl bg-[#5B5FE3] flex items-center justify-center hover:bg-[#4A4ED4] transition-all shadow-[0_2px_8px_rgba(91,94,227,0.3)] flex-shrink-0">
                <Send size={13} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right: Screenshot area */}
          <div className="relative">
            <div className="rounded-[28px] border border-black/[0.04] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[#F3F4F6] bg-white">
                <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
                <div className="flex-1 text-center">
                  <span className="text-[10px] font-semibold text-[#8F959E]">{AI_SCREENSHOTS[activeImageIndex]?.label || 'Dashboard'}</span>
                </div>
                <div className="w-10" />
              </div>

              <div className="relative min-h-[480px] bg-gradient-to-b from-[#FAFBFF] to-[#F4F6FF]">
                {AI_SCREENSHOTS.map((shot, idx) => (
                  <div
                    key={shot.id}
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: activeImageIndex === idx ? 1 : 0,
                      transform: `translateX(${activeImageIndex === idx ? 0 : idx > activeImageIndex ? 40 : -40}px)`,
                      pointerEvents: activeImageIndex === idx ? 'auto' : 'none'
                    }}
                  >
                    <div className={`w-full max-w-[360px] aspect-[4/3] rounded-2xl bg-gradient-to-br ${shot.gradient} opacity-10 mb-4`} />
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#EEF0F4] px-4 py-2.5 shadow-sm mb-3">
                        <div className={`h-5 w-5 rounded-md bg-gradient-to-br ${shot.gradient} shadow-sm`} />
                        <span className="text-[12px] font-bold text-[#8F959E]">{shot.label}</span>
                      </div>
                      <p className="text-[11px] text-[#B0B8C5]">Replace with product screenshot</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {AI_SCREENSHOTS.map((shot, idx) => (
                <button
                  key={shot.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: activeImageIndex === idx ? 24 : 8,
                    height: 8,
                    backgroundColor: activeImageIndex === idx ? '#5B5FE3' : '#D1D5DB'
                  }}
                />
              ))}
            </div>

            <div className="absolute -z-10 top-3 left-3 w-full h-full rounded-[28px] bg-[#5B5FE3]/[0.03] border border-[#5B5FE3]/[0.06]" />
          </div>
        </div>
      </div>
    </section>
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