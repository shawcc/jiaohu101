import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Globe,
  Lock,
  Menu,
  MessageSquare,
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

const CONTROL_PILLARS = [
  {
    title: 'Full Visibility',
    desc: 'Track every agent action, decision, and output in real time. Nothing your AI does ever happens in the dark.',
    icon: <Eye size={16} />
  },
  {
    title: 'Granular Permissions',
    desc: 'Define exactly what each agent can see, touch, and execute. Read, write, or create — nothing beyond what you explicitly allow.',
    icon: <Lock size={16} />
  },
  {
    title: 'Human in the Loop',
    desc: 'Simulate before you activate. Validate every agent action before it goes live and keep humans in command at every critical step.',
    icon: <CheckCircle2 size={16} />
  },
  {
    title: 'Data Sovereignty',
    desc: 'Your data never trains AI models. Your content stays yours. What happens in your workspace stays in your workspace.',
    icon: <Shield size={16} />
  }
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

const AgentCardIllustration = ({ card, isVisible, illustrationVariant = 'v2' }) => {
  const [waterfallOffset, setWaterfallOffset] = useState(0)
  const [activeAgentLane, setActiveAgentLane] = useState(null)
  const xiaoAAgent = {
    name: '小A',
    role: 'Workflow actor',
    origin: 'Create',
    action: 'Join workflow with context',
    desc: '小A first appears inside a SOP workflow, then takes a seat in the agent fleet, and finally carries its context package into the data layer.',
    color: '#5B5FE3',
    initials: 'A',
    story: true,
  }

  useEffect(() => {
    if (card.id !== 'workflows' || illustrationVariant !== 'v5') return undefined

    const handleWheel = (event) => {
      const delta = Math.max(-140, Math.min(140, event.deltaY))
      setWaterfallOffset((value) => value + delta * 0.42)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [card.id, illustrationVariant])

  if (card.id === 'workflows') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {illustrationVariant !== 'v5' && (
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#F4F6FF] to-[#E8EBFF]" style={{ opacity: isVisible ? 1 : 0.4, transition: 'opacity 0.6s ease' }} />
        )}
        {illustrationVariant === 'v2' && (
        <svg viewBox="0 0 600 420" className="relative w-full max-w-[600px] h-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(0 20px 40px rgba(91,94,227,0.10))' }}>
          <defs>
            <linearGradient id="wf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D0E23" />
              <stop offset="50%" stopColor="#131530" />
              <stop offset="100%" stopColor="#101223" />
            </linearGradient>
            <radialGradient id="wf-aura1" cx="25%" cy="20%" r="55%">
              <stop offset="0%" stopColor="#5B5FE3" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#5B5FE3" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wf-aura2" cx="75%" cy="70%" r="45%">
              <stop offset="0%" stopColor="#787BEE" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#787BEE" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wf-aura3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="wf-line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5B5FE3" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#5B5FE3" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#5B5FE3" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="wf-line2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#787BEE" stopOpacity="0.12" />
              <stop offset="40%" stopColor="#787BEE" stopOpacity="0.50" />
              <stop offset="100%" stopColor="#787BEE" stopOpacity="0.20" />
            </linearGradient>
            <linearGradient id="wf-line3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.10" />
              <stop offset="30%" stopColor="#A78BFA" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="wf-node" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E3060" />
              <stop offset="100%" stopColor="#1E204A" />
            </linearGradient>
            <linearGradient id="wf-node-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A4CD0" />
              <stop offset="100%" stopColor="#5B5FE3" />
            </linearGradient>
            <linearGradient id="wf-node-agent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#353880" />
              <stop offset="100%" stopColor="#292C70" />
            </linearGradient>
            <filter id="wf-glow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="wf-soft-shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
            </filter>
            <pattern id="wf-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.4" fill="#FFFFFF" opacity="0.035" />
            </pattern>
            <marker id="wf-marker" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#5B5FE3" opacity="0.5" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="600" height="420" rx="24" fill="url(#wf-bg)" />
          <rect width="600" height="420" rx="24" fill="url(#wf-aura1)" />
          <rect width="600" height="420" rx="24" fill="url(#wf-aura2)" />
          <rect width="600" height="420" rx="24" fill="url(#wf-aura3)" />
          <rect width="600" height="420" rx="24" fill="url(#wf-dots)" />

          {/* Blueprint inner border */}
          <rect x="14" y="14" width="572" height="392" rx="18" fill="none" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="0.5" />
          <rect x="20" y="20" width="560" height="380" rx="14" fill="none" stroke="#FFFFFF" strokeOpacity="0.025" strokeWidth="0.3" />

          {/* Corner guides */}
          {[[30,30],[570,30],[30,390],[570,390]].map(([cx, cy]) => (
            <g key={`c-${cx}`} opacity="0.06">
              <line x1={cx} y1={cy} x2={cx + 24} y2={cy} stroke="#FFFFFF" strokeWidth="0.6" />
              <line x1={cx} y1={cy} x2={cx} y2={cy + 24} stroke="#FFFFFF" strokeWidth="0.6" />
            </g>
          ))}

          {/* ===== Flow 1: R&D — Upper arc ===== */}
          <g>
            {/* Connecting curves */}
            <path d="M130 84 C170 70, 210 70, 250 82" fill="none" stroke="url(#wf-line1)" strokeWidth="2" strokeDasharray="4,6" />
            <path d="M250 82 C290 94, 310 94, 350 82" fill="none" stroke="url(#wf-line1)" strokeWidth="2" />
            <path d="M350 82 C390 70, 430 70, 470 84" fill="none" stroke="url(#wf-line1)" strokeWidth="2" strokeDasharray="4,6" />
            <line x1="470" y1="84" x2="518" y2="84" stroke="url(#wf-line1)" strokeWidth="1.5" strokeDasharray="3,8" />

            {/* Nodes */}
            {[
              { x: 90, w: 72, label: '需求' },
              { x: 212, w: 72, label: '方案' },
              { x: 340, w: 84, label: '开发', active: true },
              { x: 420, w: 72, label: '审查' },
              { x: 494, w: 72, label: '发布' },
            ].map((n) => (
              <g key={`wf1-${n.label}`} filter="url(#wf-soft-shadow)">
                {n.active && (
                  <rect x={n.x - 5} y="63" width={n.w + 10} height="38" rx="12" fill="none" stroke="#5B5FE3" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="5,4">
                    <animate attributeName="strokeOpacity" values="0.35;0.1;0.35" dur="2s" repeatCount="indefinite" />
                  </rect>
                )}
                <rect x={n.x} y="68" width={n.w} height={n.active ? 32 : 28} rx={n.active ? 16 : 10}
                  fill={n.active ? 'url(#wf-node-active)' : 'url(#wf-node)'}
                  stroke={n.active ? '#5B5FE3' : '#FFFFFF'} strokeWidth={n.active ? 1.2 : 0.4} strokeOpacity={n.active ? 0.6 : 0.08} />
                <text x={n.x + n.w / 2} y={n.label === '开发' ? 88 : 87} textAnchor="middle"
                  fill={n.active ? '#E8EAFF' : '#8F92B0'} fontSize={n.active ? 13 : 11.5} fontWeight={n.active ? '700' : '600'}
                  fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.5">{n.label}</text>
                {n.active && (
                  <>
                    <circle cx={n.x + n.w - 6} cy="76" r="4" fill="#A78BFA" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={n.x + n.w - 6} cy="76" r="2.5" fill="#FFFFFF" opacity="0.9" />
                  </>
                )}
              </g>
            ))}

            {/* Stream labels */}
            <rect x="22" y="68" width="48" height="26" rx="8" fill="#5B5FE3" opacity="0.1" />
            <text x="46" y="86" textAnchor="middle" fill="#5B5FE3" fontSize="9.5" fontWeight="600" opacity="0.5">R&D</text>
          </g>

          {/* ===== Flow 2: GTM — Center ===== */}
          <g>
            {/* Connecting curves */}
            <path d="M175 190 C230 178, 280 168, 330 180" fill="none" stroke="url(#wf-line2)" strokeWidth="2" />
            <path d="M330 180 C380 168, 420 168, 460 183" fill="none" stroke="url(#wf-line2)" strokeWidth="2" strokeDasharray="4,7" />
            <line x1="460" y1="183" x2="510" y2="183" fill="none" stroke="url(#wf-line2)" strokeWidth="1.5" strokeDasharray="3,5" />

            {/* Nodes */}
            {[
              { x: 120, w: 80, label: '策略' },
              { x: 276, w: 88, label: '执行', agent: true },
              { x: 372, w: 72, label: '监控' },
              { x: 470, w: 72, label: '迭代' },
            ].map((n) => (
              <g key={`wf2-${n.label}`} filter="url(#wf-soft-shadow)">
                {n.agent && (
                  <rect x={n.x - 3} y="166" width={n.w + 6} height="42" rx="12" fill="none" stroke="#787BEE" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3,3" />
                )}
                <rect x={n.x} y="172" width={n.w} height={n.agent ? 32 : 28} rx={n.agent ? 16 : 10}
                  fill={n.agent ? 'url(#wf-node-agent)' : 'url(#wf-node)'}
                  stroke={n.agent ? '#787BEE' : '#FFFFFF'} strokeWidth={n.agent ? 1 : 0.4} strokeOpacity={n.agent ? 0.5 : 0.08} />
                <text x={n.x + n.w / 2} y={n.agent ? 193 : 191} textAnchor="middle"
                  fill={n.agent ? '#C8CCFF' : '#8F92B0'} fontSize={n.agent ? 13 : 11.5} fontWeight={n.agent ? '700' : '600'}
                  fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.5">{n.label}</text>
                {n.agent && (
                  <rect x={n.x + n.w - 22} y="175" width="18" height="14" rx="7" fill="#5B5FE3" opacity="0.25" />
                )}
              </g>
            ))}

            {/* Small agent badge */}
            <g transform="translate(295, 164)">
              <rect x="0" y="0" width="20" height="12" rx="6" fill="#5B5FE3" opacity="0.15" />
              <text x="10" y="9" textAnchor="middle" fontSize="7">🤖</text>
            </g>

            <rect x="22" y="172" width="54" height="26" rx="8" fill="#787BEE" opacity="0.1" />
            <text x="49" y="190" textAnchor="middle" fill="#787BEE" fontSize="9.5" fontWeight="600" opacity="0.5">GTM</text>
          </g>

          {/* ===== Flow 3: Support — Lower ===== */}
          <g>
            {/* Connecting curves */}
            <path d="M170 290 C215 278, 255 278, 295 288" fill="none" stroke="url(#wf-line3)" strokeWidth="1.8" strokeDasharray="5,7" />
            <path d="M295 288 C345 298, 375 298, 420 288" fill="none" stroke="url(#wf-line3)" strokeWidth="1.8" />
            <line x1="420" y1="288" x2="472" y2="288" fill="none" stroke="url(#wf-line3)" strokeWidth="1.5" />

            {/* Nodes */}
            {[
              { x: 108, w: 76, label: '接单' },
              { x: 250, w: 84, label: '诊断' },
              { x: 368, w: 72, label: '处理' },
              { x: 474, w: 78, label: '闭环' },
            ].map((n) => (
              <g key={`wf3-${n.label}`} filter="url(#wf-soft-shadow)">
                <rect x={n.x} y="272" width={n.w} height={28} rx={10}
                  fill="url(#wf-node)"
                  stroke="#FFFFFF" strokeWidth="0.4" strokeOpacity="0.06" />
                <text x={n.x + n.w / 2} y="291" textAnchor="middle"
                  fill="#8F92B0" fontSize={11.5} fontWeight="600"
                  fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.5">{n.label}</text>
              </g>
            ))}

            <rect x="22" y="272" width="62" height="26" rx="8" fill="#A78BFA" opacity="0.1" />
            <text x="53" y="290" textAnchor="middle" fill="#A78BFA" fontSize="9.5" fontWeight="600" opacity="0.5">Support</text>
          </g>

          {/* Decorative particles */}
          {[
            [45, 105], [188, 128], [505, 130], [82, 235], [395, 235], [548, 240],
            [168, 345], [305, 348], [520, 350], [350, 130], [220, 220], [480, 210],
          ].map(([px, py], i) => (
            <circle key={`p-${i}`} cx={px} cy={py} r={i % 3 === 0 ? 2 : 1.2}
              fill="#FFFFFF" opacity={0.06 + (i % 3) * 0.02}>
              <animate attributeName="opacity" values={`${0.06 + (i % 3) * 0.02};${0.02 + (i % 3) * 0.01};${0.06 + (i % 3) * 0.02}`} dur={`${2.5 + (i % 3) * 0.8}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Bottom annotation */}
          <g opacity="0.3">
            <line x1="180" y1="378" x2="420" y2="378" stroke="#5B5FE3" strokeWidth="0.5" strokeOpacity="0.15" />
            <circle cx="300" cy="378" r="2" fill="#5B5FE3" strokeOpacity="0.3" />
            <text x="300" y="370" textAnchor="middle" fill="#5B5FE3" fontSize="9" fontWeight="600" opacity="0.4" fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="1">BUILD · DEPLOY · SCALE</text>
          </g>
        </svg>
        )}
{illustrationVariant === 'v3' && (
          <svg viewBox="0 0 720 480" className="relative w-full max-w-[720px] h-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(0 20px 40px rgba(91,94,227,0.10))' }}>
            <defs>
              <radialGradient id="v3-aura1" cx="20%" cy="15%" r="60%">
                <stop offset="0%" stopColor="#5B5FE3" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#5B5FE3" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="v3-aura2" cx="75%" cy="55%" r="50%">
                <stop offset="0%" stopColor="#787BEE" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#787BEE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="v3-aura3" cx="45%" cy="80%" r="45%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="v3-accent" cx="85%" cy="30%" r="40%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
              </radialGradient>
              <filter id="v3-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="v3-shadow">
                <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000" floodOpacity="0.25" />
              </filter>
              <filter id="v3-glow-strong">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <radialGradient id="v3-node-purple" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#3C3ED8" />
                <stop offset="100%" stopColor="#1E1F4A" />
              </radialGradient>
              <radialGradient id="v3-node-blue" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#5558E8" />
                <stop offset="100%" stopColor="#252760" />
              </radialGradient>
              <radialGradient id="v3-node-lavender" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#7B6FF0" />
                <stop offset="100%" stopColor="#2D2868" />
              </radialGradient>
              <radialGradient id="v3-node-teal" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#2DD4A0" />
                <stop offset="100%" stopColor="#0F2D28" />
              </radialGradient>
              <radialGradient id="v3-node-amber" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#E8A040" />
                <stop offset="100%" stopColor="#2D1E10" />
              </radialGradient>
              <radialGradient id="v3-node-active" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#6B6FF0" />
                <stop offset="100%" stopColor="#3C3ED8" />
              </radialGradient>
              <pattern id="v3-dots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.3" fill="#FFFFFF" opacity="0.04" />
              </pattern>
            </defs>

            {/* Background */}
            <rect width="720" height="480" rx="20" fill="#0C0E21" />
            <rect width="720" height="480" rx="20" fill="url(#v3-aura1)" />
            <rect width="720" height="480" rx="20" fill="url(#v3-aura2)" />
            <rect width="720" height="480" rx="20" fill="url(#v3-aura3)" />
            <rect width="720" height="480" rx="20" fill="url(#v3-accent)" />
            <rect width="720" height="480" rx="20" fill="url(#v3-dots)" />

            {/* Blueprint framing */}
            <rect x="14" y="14" width="692" height="452" rx="14" fill="none" stroke="#FFFFFF" strokeOpacity="0.03" strokeWidth="0.5" />
            {[[24,24],[696,24],[24,456],[696,456]].map(([cx, cy]) => (
              <g key={`v3c-${cx}`} opacity="0.05">
                <line x1={cx} y1={cy} x2={cx + 18} y2={cy} stroke="#FFFFFF" strokeWidth="0.5" />
                <line x1={cx} y1={cy} x2={cx} y2={cy + 18} stroke="#FFFFFF" strokeWidth="0.5" />
              </g>
            ))}

            {/* ===== CONNECTION PATHS (rendered first, below nodes) ===== */}
            <g fill="none" strokeWidth="1.5">
              {/* Purple zone (Product/R&D) connections */}
              <path d="M83,54 C103,48 123,48 140,52" stroke="#5B5FE3" strokeOpacity="0.35" strokeWidth="2" />
              <path d="M83,54 C103,54 123,66 145,80" stroke="#5B5FE3" strokeOpacity="0.25" strokeWidth="1.5" />
              <path d="M83,54 C103,54 123,78 155,110" stroke="#5B5FE3" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="5,5" />

              <path d="M188,52 C208,52 220,62 233,80" stroke="#5B5FE3" strokeOpacity="0.3" strokeWidth="1.5" />
              <path d="M188,52 C208,52 225,80 245,110" stroke="#5B5FE3" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />

              <path d="M140,130 C155,130 170,110 185,108" stroke="#5B5FE3" strokeOpacity="0.3" strokeWidth="1.8" />
              <path d="M185,108 C200,108 215,130 233,130" stroke="#5B5FE3" strokeOpacity="0.35" strokeWidth="1.5" />
              <path d="M185,108 C200,108 215,170 233,180" stroke="#5B5FE3" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />

              <path d="M140,130 C135,145 115,155 90,158" stroke="#5B5FE3" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3,5" />

              <path d="M233,130 C248,130 265,110 260,108" stroke="#5B5FE3" strokeOpacity="0.3" strokeWidth="1.8" />
              <path d="M290,108 C310,108 325,170 323,180" stroke="#5B5FE3" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />

              {/* Blue-Purple zone (Growth/Marketing) connections */}
              <path d="M455,44 C475,44 490,70 500,95" stroke="#787BEE" strokeOpacity="0.3" strokeWidth="1.8" />
              <path d="M455,44 C470,44 460,70 448,95" stroke="#787BEE" strokeOpacity="0.25" strokeWidth="1.5" />
              <path d="M455,44 C480,44 510,70 522,95" stroke="#787BEE" strokeOpacity="0.25" strokeWidth="1.5" />
              <path d="M455,44 C490,44 545,55 560,45" stroke="#787BEE" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />

              <path d="M500,145 C500,155 478,175 455,175" stroke="#787BEE" strokeOpacity="0.3" strokeWidth="1.8" />
              <path d="M522,145 C522,155 548,175 568,165" stroke="#787BEE" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />
              <path d="M448,145 C435,155 415,175 395,175" stroke="#787BEE" strokeOpacity="0.25" strokeWidth="1.5" />

              <path d="M455,225 C465,245 485,265 500,270" stroke="#787BEE" strokeOpacity="0.25" strokeWidth="1.5" />
              <path d="M568,225 C555,245 540,255 520,255" stroke="#787BEE" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />

              {/* Lavender zone (Customer Ops) connections */}
              <path d="M345,320 C360,320 380,295 395,295" stroke="#A78BFA" strokeOpacity="0.3" strokeWidth="1.8" />
              <path d="M345,320 C345,335 330,360 310,375" stroke="#A78BFA" strokeOpacity="0.25" strokeWidth="1.5" />
              <path d="M345,320 C365,320 385,360 395,375" stroke="#A78BFA" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4,6" />

              <path d="M450,345 C460,355 470,370 468,385" stroke="#A78BFA" strokeOpacity="0.25" strokeWidth="1.5" />

              {/* Teal accent (Data/Analytics) cross-connections */}
              <path d="M295,108 C320,100 360,120 390,130" stroke="#34D399" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="3,7" />
              <path d="M390,130 C430,140 470,115 500,95" stroke="#34D399" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="3,7" />
              <path d="M390,130 C390,170 370,220 350,280" stroke="#34D399" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="3,7" />
              <path d="M500,95 C520,110 530,210 500,230" stroke="#34D399" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="3,7" />

              {/* Amber accent (Compliance/Security) scattered checkpoints */}
              <path d="M188,52 C185,80 175,110 160,140" stroke="#F59E0B" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2,8" />
              <path d="M500,230 C480,250 460,270 450,345" stroke="#F59E0B" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2,8" />
            </g>

            {/* ===== NODES ===== */}
            <g fontFamily="system-ui,-apple-system,sans-serif">

              {/* ---- Purple Zone: Product & Engineering (10 nodes) ---- */}
              {[
                { x: 48, y: 36, w: 70, h: 32, label: '需求', size: 'md', group: 'purple' },
                { x: 150, y: 36, w: 76, h: 32, label: '产品方案', size: 'md', group: 'purple' },
                { x: 104, y: 80, w: 72, h: 28, label: '前端', size: 'sm', group: 'purple' },
                { x: 186, y: 80, w: 62, h: 28, label: '后端', size: 'sm', group: 'purple' },
                { x: 134, y: 120, w: 56, h: 24, label: '设计', size: 'xs', group: 'purple' },
                { x: 204, y: 100, w: 62, h: 28, label: '移动端', size: 'sm', group: 'purple' },
                { x: 88, y: 150, w: 56, h: 24, label: 'QA', size: 'xs', group: 'purple' },
                { x: 165, y: 150, w: 72, h: 28, label: '联调测试', size: 'sm', group: 'purple' },
                { x: 140, y: 190, w: 70, h: 32, label: '部署', size: 'md', group: 'purple' },
                { x: 240, y: 150, w: 56, h: 24, label: '监控', size: 'xs', group: 'purple' },
              ].map((n) => (
                <g key={`p-${n.label}`} filter="url(#v3-shadow)">
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={n.h / 2} fill={n.label === '联调测试' ? 'url(#v3-node-active)' : 'url(#v3-node-purple)'}
                    stroke={n.label === '联调测试' ? '#5B5FE3' : '#FFFFFF'} strokeWidth={n.label === '联调测试' ? 1.2 : 0.3} strokeOpacity={n.label === '联调测试' ? 0.6 : 0.06} />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 1} textAnchor="middle"
                    fill={n.label === '联调测试' ? '#E8EAFF' : '#9295C0'} fontSize={n.size === 'xs' ? 9.5 : 10.5} fontWeight="700" letterSpacing="0.4">{n.label}</text>
                  {n.label === '联调测试' && (
                    <g filter="url(#v3-glow-strong)">
                      <circle cx={n.x + n.w - 4} cy={n.y + 8} r="3" fill="#A78BFA" opacity="0.5">
                        <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  )}
                </g>
              ))}

              {/* ---- Blue-Purple Zone: Growth & Marketing (9 nodes) ---- */}
              {[
                { x: 410, y: 28, w: 90, h: 32, label: 'Campaign 策略', size: 'md', group: 'blue' },
                { x: 460, y: 80, w: 80, h: 28, label: '多渠道分发', size: 'sm', group: 'blue' },
                { x: 360, y: 80, w: 74, h: 28, label: '内容制作', size: 'sm', group: 'blue' },
                { x: 410, y: 130, w: 90, h: 32, label: '执行编排', size: 'md', group: 'blue', agent: true },
                { x: 525, y: 80, w: 56, h: 28, label: '投放', size: 'sm', group: 'blue' },
                { x: 550, y: 35, w: 56, h: 24, label: '活动', size: 'xs', group: 'blue' },
                { x: 350, y: 165, w: 62, h: 28, label: 'A/B 测试', size: 'sm', group: 'blue' },
                { x: 420, y: 210, w: 80, h: 32, label: '数据回收', size: 'md', group: 'blue' },
                { x: 555, y: 150, w: 56, h: 24, label: '报表', size: 'xs', group: 'blue' },
              ].map((n) => (
                <g key={`b-${n.label}`} filter="url(#v3-shadow)">
                  {n.agent && (
                    <rect x={n.x - 4} y={n.y - 4} width={n.w + 8} height={n.h + 8} rx={n.h / 2 + 4} fill="none" stroke="#787BEE" strokeWidth="1.2" strokeOpacity="0.25" strokeDasharray="4,3">
                      <animate attributeName="strokeOpacity" values="0.25;0.08;0.25" dur="2.5s" repeatCount="indefinite" />
                    </rect>
                  )}
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={n.h / 2} fill={n.agent ? 'url(#v3-node-blue)' : n.group === 'blue' ? 'url(#v3-node-blue)' : 'url(#v3-node-purple)'}
                    stroke={n.agent ? '#787BEE' : '#FFFFFF'} strokeWidth={n.agent ? 1 : 0.3} strokeOpacity={n.agent ? 0.5 : 0.06} />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 1} textAnchor="middle"
                    fill={n.agent ? '#C8CCFF' : '#9295C0'} fontSize={n.size === 'xs' ? 9.5 : 10.5} fontWeight="700" letterSpacing="0.4">{n.label}</text>
                  {n.agent && (
                    <rect x={n.x + n.w - 20} y={n.y + 3} width="16" height="12" rx="6" fill="#787BEE" opacity="0.2" />
                  )}
                </g>
              ))}

              {/* ---- Lavender Zone: Customer Operations (7 nodes) ---- */}
              {[
                { x: 295, y: 310, w: 100, h: 34, label: '工单接入', size: 'lg', group: 'lavender' },
                { x: 250, y: 365, w: 56, h: 24, label: 'P0 紧急', size: 'xs', group: 'lavender' },
                { x: 350, y: 360, w: 62, h: 28, label: '标准分派', size: 'sm', group: 'lavender' },
                { x: 410, y: 350, w: 56, h: 24, label: '低优先', size: 'xs', group: 'lavender' },
                { x: 335, y: 405, w: 74, h: 32, label: '智能处理', size: 'md', group: 'lavender' },
                { x: 270, y: 400, w: 56, h: 24, label: '升级', size: 'xs', group: 'lavender' },
                { x: 420, y: 408, w: 70, h: 32, label: '闭环验证', size: 'md', group: 'lavender' },
              ].map((n) => (
                <g key={`l-${n.label}`} filter="url(#v3-shadow)">
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={n.h / 2} fill="url(#v3-node-lavender)"
                    stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.06" />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 1} textAnchor="middle"
                    fill="#A095D0" fontSize={n.size === 'xs' ? 9.5 : n.size === 'lg' ? 11.5 : 10.5} fontWeight="700" letterSpacing="0.4">{n.label}</text>
                </g>
              ))}

              {/* ---- Teal Zone: Data & Analytics (4 nodes, cross-cutting) ---- */}
              {[
                { x: 340, y: 125, w: 68, h: 32, label: '数据看板', size: 'md', group: 'teal' },
                { x: 440, y: 265, w: 56, h: 24, label: '洞察', size: 'xs', group: 'teal' },
                { x: 525, y: 255, w: 56, h: 24, label: '预警', size: 'xs', group: 'teal' },
                { x: 210, y: 255, w: 68, h: 28, label: '分析引擎', size: 'sm', group: 'teal' },
              ].map((n) => (
                <g key={`t-${n.label}`} filter="url(#v3-shadow)">
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={n.h / 2} fill="url(#v3-node-teal)"
                    stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.06" />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 1} textAnchor="middle"
                    fill="#5FD8A8" fontSize={n.size === 'xs' ? 9.5 : 10.5} fontWeight="700" letterSpacing="0.4">{n.label}</text>
                </g>
              ))}

              {/* ---- Amber Zone: Security & Compliance (3 scattered nodes) ---- */}
              {[
                { x: 265, y: 52, w: 62, h: 28, label: '合规审查', size: 'sm', group: 'amber' },
                { x: 445, y: 310, w: 62, h: 28, label: '安全审计', size: 'sm', group: 'amber' },
                { x: 560, y: 310, w: 74, h: 28, label: '权限管控', size: 'sm', group: 'amber' },
              ].map((n) => (
                <g key={`a-${n.label}`} filter="url(#v3-shadow)">
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={n.h / 2} fill="url(#v3-node-amber)"
                    stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.06" />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 1} textAnchor="middle"
                    fill="#D0A860" fontSize="10.5" fontWeight="700" letterSpacing="0.4">{n.label}</text>
                </g>
              ))}

              {/* ---- Additional rich nodes for density ---- */}
              {[
                { x: 50, y: 250, w: 62, h: 28, label: '代码仓库', size: 'sm', group: 'purple' },
                { x: 65, y: 320, w: 56, h: 24, label: 'CI/CD', size: 'xs', group: 'purple' },
                { x: 20, y: 380, w: 56, h: 24, label: '文档', size: 'xs', group: 'purple' },
                { x: 140, y: 340, w: 56, h: 24, label: 'API', size: 'xs', group: 'purple' },
                { x: 580, y: 195, w: 56, h: 24, label: '外部', size: 'xs', group: 'blue' },
                { x: 610, y: 235, w: 56, h: 24, label: 'Webhook', size: 'xs', group: 'blue' },
                { x: 490, y: 380, w: 68, h: 28, label: '归档', size: 'sm', group: 'lavender' },
                { x: 180, y: 370, w: 56, h: 24, label: '日志', size: 'xs', group: 'teal' },
                { x: 605, y: 380, w: 56, h: 24, label: '导出', size: 'xs', group: 'teal' },
              ].map((n) => (
                <g key={`x-${n.label}`} filter="url(#v3-shadow)">
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={n.h / 2}
                    fill={n.group === 'purple' ? 'url(#v3-node-purple)' : n.group === 'blue' ? 'url(#v3-node-blue)' : n.group === 'lavender' ? 'url(#v3-node-lavender)' : 'url(#v3-node-teal)'}
                    stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.05" />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 1} textAnchor="middle"
                    fill={n.group === 'teal' ? '#5FD8A8' : '#9295C0'} fontSize="9.5" fontWeight="600" letterSpacing="0.4" opacity="0.8">{n.label}</text>
                </g>
              ))}

            </g>

            {/* ---- Floating particles ---- */}
            {[
              [35, 40], [200, 55], [320, 85], [520, 65], [590, 90],
              [80, 170], [315, 140], [480, 135], [610, 180],
              [290, 275], [200, 310], [570, 285], [620, 310],
              [80, 300], [155, 385], [240, 410], [500, 410], [570, 390],
              [670, 150], [660, 260], [680, 370], [680, 430],
            ].map(([px, py], i) => (
              <circle key={`vp-${i}`} cx={px} cy={py} r={i % 4 === 0 ? 1.8 : 1} fill="#FFFFFF"
                opacity={0.03 + (i % 4) * 0.015}>
                <animate attributeName="opacity"
                  values={`${0.03 + (i % 4) * 0.015};${0.01};${0.03 + (i % 4) * 0.015}`}
                  dur={`${2.5 + (i % 3) * 1.2}s`} repeatCount="indefinite" />
              </circle>
            ))}

            {/* ---- Zone labels (subtle, bottom) ---- */}
            <g opacity="0.22">
              <circle cx="115" cy="225" r="1.5" fill="#5B5FE3" opacity="0.5" />
              <text x="130" y="227" fill="#5B5FE3" fontSize="8" fontWeight="700" letterSpacing="1">PRODUCT ENGINEERING</text>
              <circle cx="465" cy="268" r="1.5" fill="#787BEE" opacity="0.5" />
              <text x="480" y="267" fill="#787BEE" fontSize="8" fontWeight="700" letterSpacing="1">GROWTH MARKETING</text>
              <circle cx="328" cy="440" r="1.5" fill="#A78BFA" opacity="0.5" />
              <text x="343" y="439" fill="#A78BFA" fontSize="8" fontWeight="700" letterSpacing="1">CUSTOMER</text>
              <text x="343" y="449" fill="#A78BFA" fontSize="8" fontWeight="700" letterSpacing="1" opacity="0.7">OPERATIONS</text>
            </g>

            {/* ---- Bottom annotation ---- */}
            <g opacity="0.25">
              <line x1="220" y1="465" x2="500" y2="465" stroke="#5B5FE3" strokeWidth="0.5" strokeOpacity="0.15" />
              <circle cx="360" cy="465" r="1.5" fill="#5B5FE3" strokeOpacity="0.25" />
              <text x="360" y="458" textAnchor="middle" fill="#5B5FE3" fontSize="8" fontWeight="700" opacity="0.5" letterSpacing="1.5">YOUR WORKFLOWS · ALL HERE · ALL RUNNING</text>
            </g>
          </svg>
        )}
        {illustrationVariant === 'v4' && (
          <svg viewBox="0 0 720 480" className="relative w-full max-w-[720px] h-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(0 22px 48px rgba(91,94,227,0.14))' }}>
            <defs>
              <linearGradient id="v4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7F8FF" />
                <stop offset="52%" stopColor="#EEF1FF" />
                <stop offset="100%" stopColor="#F8F5FF" />
              </linearGradient>
              <radialGradient id="v4-aura-purple" cx="45%" cy="42%" r="55%">
                <stop offset="0%" stopColor="#5B5FE3" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#5B5FE3" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="v4-aura-green" cx="78%" cy="20%" r="38%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="v4-card" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#F8F9FF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="v4-folder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B5FE3" />
                <stop offset="100%" stopColor="#7B6FF0" />
              </linearGradient>
              <filter id="v4-shadow">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#27315F" floodOpacity="0.12" />
              </filter>
              <filter id="v4-soft">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#5B5FE3" floodOpacity="0.12" />
              </filter>
              <pattern id="v4-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 L 0 24" fill="none" stroke="#5B5FE3" strokeWidth="0.35" opacity="0.08" />
              </pattern>
            </defs>

            <rect width="720" height="480" rx="28" fill="url(#v4-bg)" />
            <rect width="720" height="480" rx="28" fill="url(#v4-aura-purple)" />
            <rect width="720" height="480" rx="28" fill="url(#v4-aura-green)" />
            <rect width="720" height="480" rx="28" fill="url(#v4-grid)" />

            <g opacity="0.42" fill="none" stroke="#5B5FE3" strokeWidth="1.2" strokeDasharray="5,10">
              <path d="M348 206 C268 150 218 122 146 114" />
              <path d="M372 205 C470 135 528 112 608 118" />
              <path d="M342 250 C270 282 218 316 166 370" />
              <path d="M384 252 C462 300 520 330 592 360" />
              <path d="M360 198 C360 150 360 118 360 82" />
            </g>

            <g filter="url(#v4-shadow)">
              <path d="M302 187 H346 L360 206 H442 C455 206 466 217 466 230 V296 C466 310 455 322 440 322 H284 C269 322 258 310 258 296 V211 C258 198 269 187 302 187 Z" fill="url(#v4-folder)" />
              <rect x="278" y="224" width="168" height="76" rx="18" fill="#FFFFFF" opacity="0.16" />
              <text x="362" y="252" textAnchor="middle" fill="white" fontSize="17" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">SOP Library</text>
              <text x="362" y="276" textAnchor="middle" fill="white" opacity="0.72" fontSize="10" fontWeight="700" letterSpacing="1.6" fontFamily="system-ui,-apple-system,sans-serif">CUSTOM WORKFLOWS</text>
              <circle cx="430" cy="232" r="6" fill="#FFFFFF" opacity="0.45">
                <animate attributeName="opacity" values="0.45;0.16;0.45" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>

            {[
              { x: 52, y: 52, w: 190, h: 132, title: 'Product SOP', tag: 'R&D', color: '#5B5FE3', nodes: ['需求', '设计', '开发', '测试', '发布'] },
              { x: 482, y: 56, w: 186, h: 130, title: 'GTM SOP', tag: 'Growth', color: '#787BEE', nodes: ['策略', '内容', '渠道', '投放', '复盘'] },
              { x: 66, y: 294, w: 204, h: 132, title: 'Support SOP', tag: 'Ops', color: '#A78BFA', nodes: ['工单', '分派', '处理', '升级', '闭环'] },
              { x: 482, y: 292, w: 188, h: 134, title: 'Compliance SOP', tag: 'Risk', color: '#F59E0B', nodes: ['申请', '审查', '审批', '审计', '归档'] },
              { x: 270, y: 48, w: 180, h: 112, title: 'Data SOP', tag: 'Analytics', color: '#34D399', nodes: ['采集', '清洗', '洞察', '预警'] },
            ].map((sop, idx) => (
              <g key={sop.title} filter="url(#v4-shadow)" style={{ transformOrigin: `${sop.x + sop.w / 2}px ${sop.y + sop.h / 2}px` }}>
                <rect x={sop.x} y={sop.y} width={sop.w} height={sop.h} rx="22" fill="url(#v4-card)" stroke="#FFFFFF" strokeWidth="1" />
                <rect x={sop.x + 14} y={sop.y + 14} width="34" height="24" rx="8" fill={sop.color} opacity="0.12" />
                <rect x={sop.x + 20} y={sop.y + 19} width="22" height="4" rx="2" fill={sop.color} opacity="0.55" />
                <rect x={sop.x + 20} y={sop.y + 27} width="16" height="4" rx="2" fill={sop.color} opacity="0.28" />
                <text x={sop.x + 58} y={sop.y + 27} fill="#111827" fontSize="13" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">{sop.title}</text>
                <text x={sop.x + 58} y={sop.y + 43} fill="#8F959E" fontSize="9" fontWeight="700" letterSpacing="1.2" fontFamily="system-ui,-apple-system,sans-serif">{sop.tag}</text>
                <rect x={sop.x + sop.w - 50} y={sop.y + 18} width="30" height="16" rx="8" fill={sop.color} opacity="0.1" />
                <text x={sop.x + sop.w - 35} y={sop.y + 29} textAnchor="middle" fill={sop.color} fontSize="8" fontWeight="800">SOP</text>

                <g transform={`translate(${sop.x + 22}, ${sop.y + 66})`}>
                  <path d="M12 18 C36 8 46 8 70 18" fill="none" stroke={sop.color} strokeOpacity="0.35" strokeWidth="1.6" />
                  <path d="M12 18 C38 28 48 32 78 44" fill="none" stroke={sop.color} strokeOpacity="0.22" strokeWidth="1.3" strokeDasharray="4,4" />
                  <path d="M74 18 C102 18 120 26 140 24" fill="none" stroke={sop.color} strokeOpacity="0.35" strokeWidth="1.6" />
                  <path d="M82 44 C106 44 122 36 146 48" fill="none" stroke={sop.color} strokeOpacity="0.24" strokeWidth="1.3" strokeDasharray="3,5" />

                  {[
                    { x: 0, y: 8, label: sop.nodes[0], active: idx === 0 },
                    { x: 58, y: 0, label: sop.nodes[1] },
                    { x: 66, y: 34, label: sop.nodes[2] },
                    { x: 130, y: 14, label: sop.nodes[3] },
                    { x: sop.w > 195 ? 148 : 134, y: 42, label: sop.nodes[4] },
                  ].filter(n => n.label).map((n) => (
                    <g key={`${sop.title}-${n.label}`} filter="url(#v4-soft)">
                      <rect x={n.x} y={n.y} width={n.label.length > 2 ? 42 : 34} height="22" rx="11" fill={n.active ? sop.color : '#FFFFFF'} stroke={sop.color} strokeWidth={n.active ? 0 : 1} strokeOpacity={n.active ? 1 : 0.22} />
                      <text x={n.x + (n.label.length > 2 ? 21 : 17)} y={n.y + 14.5} textAnchor="middle" fill={n.active ? '#FFFFFF' : '#565B6B'} fontSize="8.5" fontWeight="800" fontFamily="system-ui,-apple-system,sans-serif">{n.label}</text>
                    </g>
                  ))}
                </g>
              </g>
            ))}

            <g opacity="0.7">
              {[
                [310, 350, '#5B5FE3'], [394, 352, '#787BEE'], [352, 370, '#34D399'], [332, 122, '#A78BFA'], [428, 118, '#F59E0B']
              ].map(([x, y, color], i) => (
                <g key={`spark-${i}`}>
                  <circle cx={x} cy={y} r="3" fill={color} opacity="0.28">
                    <animate attributeName="opacity" values="0.28;0.08;0.28" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                  <circle cx={x} cy={y} r="1.3" fill={color} opacity="0.65" />
                </g>
              ))}
            </g>

            <g opacity="0.55">
              <rect x="254" y="392" width="212" height="30" rx="15" fill="#FFFFFF" stroke="#5B5FE3" strokeOpacity="0.12" />
              <text x="360" y="411" textAnchor="middle" fill="#5B5FE3" fontSize="10" fontWeight="800" letterSpacing="1" fontFamily="system-ui,-apple-system,sans-serif">ONE SOP · ONE WORKFLOW · ORGANIZED</text>
            </g>
          </svg>
        )}
        {illustrationVariant === 'v5' && (
          <div className="relative mx-auto w-full max-w-[700px] h-full min-h-[440px] overflow-hidden">
            <style>{`
              .workflow-waterfall-card {
                box-shadow: 0 18px 42px rgba(47, 55, 110, 0.10);
              }
              @keyframes xiaoAWorkflowJump {
                0%, 100% { transform: translateY(0) scale(1); }
                45% { transform: translateY(-7px) scale(1.04); }
              }
              .xiao-a-workflow {
                animation: xiaoAWorkflowJump 2.4s ease-in-out infinite;
              }
            `}</style>


            <div className="absolute top-5 left-0 z-20 px-2 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#5B5FE3]">SOP waterfall</div>
            <div className="absolute top-5 right-0 z-20 px-2 py-1 text-[10px] font-bold text-[#8F959E]">scroll to move</div>
            <div className="xiao-a-workflow pointer-events-none absolute left-[56%] top-[46%] z-40 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full border border-[#5B5FE3]/18 bg-white/95 px-3 py-2 shadow-[0_18px_46px_rgba(91,95,227,0.18)] backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B5FE3] text-[12px] font-black text-white ring-4 ring-[#5B5FE3]/10">小A</span>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.14em] text-[#5B5FE3]">in workflow</div>
                    <div className="text-[9px] font-bold text-[#8F959E]">joins a SOP node</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex h-full gap-4 px-0 pt-16 pb-6">
              {[
                {
                  dir: 'up', shift: 40, cards: [
                    { title: 'CRM Lead-to-Deal', tag: 'CRM / Sales', color: '#34D399', h: 210, agent: 'Sales Agent', summary: '线索进入后，销售、法务、商务审批按同一 SOP 横向流转。', primary: ['Lead', 'Qualify', 'Demo', 'Proposal', 'Deal'], branch: ['Legal', 'Discount', 'CSM'] },
                    { title: 'Customer Onboarding', tag: 'CSM', color: '#5B5FE3', h: 202, agent: 'CS Agent', summary: '客户签约后，配置、迁移、培训、验收形成标准交付路径。', primary: ['Kickoff', 'Setup', 'Migrate', 'Train', 'Go-live'], branch: ['Risk', 'Support', 'Review'] },
                    { title: 'Renewal Management', tag: 'Revenue', color: '#A78BFA', h: 194, agent: 'RevOps Agent', summary: '续约窗口触发健康度评估、风险处理和商务跟进。', primary: ['Usage', 'Health', 'Risk', 'Exec', 'Renew'], branch: ['Churn', 'Expansion'] },
                    { title: 'IT Service Request', tag: 'Internal Ops', color: '#5B5FE3', h: 190, agent: 'IT Agent', summary: '员工请求进入审批、权限开通、执行和通知闭环。', primary: ['Request', 'Approve', 'Provision', 'Notify', 'Done'], branch: ['Permission', 'SLA'] },
                  ]
                },
                {
                  dir: 'down', shift: -110, cards: [
                    { title: 'Product Development', tag: 'R&D', color: '#5B5FE3', h: 218, agent: 'PM Agent', summary: '需求、设计、研发、测试、发布都在横向工作流里有序发生。', primary: ['PRD', 'Design', 'Dev', 'QA', 'Release'], branch: ['Tech', 'Docs', 'Monitor'] },
                    { title: 'GTM Campaign Launch', tag: 'GTM', color: '#787BEE', h: 210, agent: 'GTM Agent', summary: '策略、内容、渠道、投放、复盘沉淀为可复用打法。', primary: ['Strategy', 'Content', 'Channel', 'Launch', 'Review'], branch: ['Creative', 'Budget', 'Report'] },
                    { title: 'Compliance Approval', tag: 'Risk', color: '#F59E0B', h: 198, agent: 'Risk Agent', summary: '合规事项按审批链路流转，例外、审计、归档都有明确节点。', primary: ['Submit', 'Review', 'Approve', 'Audit', 'Archive'], branch: ['Exception', 'Policy'] },
                    { title: 'Content Production', tag: 'Marketing Ops', color: '#34D399', h: 194, agent: 'Content Agent', summary: '选题、创作、评审、发布形成标准内容生产 SOP。', primary: ['Brief', 'Draft', 'Review', 'Publish', 'Reuse'], branch: ['SEO', 'Design'] },
                  ]
                },
              ].map((column, columnIdx) => {
                const direction = column.dir === 'up' ? -1 : 1
                const offset = Math.max(-260, Math.min(50, waterfallOffset * direction * 0.28 + column.shift))
                return (
                  <div key={`wf-column-${columnIdx}`} className="h-full flex-1 overflow-hidden">
                    <div
                      className="transition-transform duration-500 ease-out will-change-transform"
                      style={{ transform: `translateY(${offset}px)` }}
                    >
                      {column.cards.map((item) => (
                        <div key={item.title} className="workflow-waterfall-card relative mb-6 overflow-hidden rounded-[24px] border border-white/80 bg-white/94 backdrop-blur-sm p-4" style={{ height: item.h }}>
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="mb-1.5 flex items-center gap-2">
                                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="truncate text-[12px] font-black text-[#111827]">{item.title}</span>
                              </div>
                              <span className="rounded-full px-2 py-1 text-[8px] font-black uppercase tracking-[0.08em]" style={{ color: item.color, backgroundColor: `${item.color}14` }}>{item.tag}</span>
                            </div>
                            <div className="flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[8px] font-black" style={{ color: item.color, backgroundColor: `${item.color}14` }}>
                              <span>🤖</span>
                              <span>{item.agent}</span>
                            </div>
                          </div>

                          <p className="mb-3 h-[32px] overflow-hidden text-[10px] leading-4 text-[#646A73]">{item.summary}</p>

                          <div className="overflow-hidden rounded-2xl border border-white/80 p-3" style={{ backgroundColor: `${item.color}0D` }}>
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-[8px] font-black uppercase tracking-[0.14em] text-[#8F959E]">Horizontal workflow</span>
                              <span className="h-1.5 w-12 rounded-full" style={{ backgroundColor: item.color, opacity: 0.35 }} />
                            </div>
                            <svg viewBox="0 0 250 88" className="block h-[88px] w-full overflow-visible">
                              <defs>
                                <filter id={`wf-card-shadow-${item.title.replace(/\s/g, '-')}`}>
                                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#27315F" floodOpacity="0.10" />
                                </filter>
                              </defs>
                              <path d="M26 32 C58 28, 70 28, 84 32 S128 36, 142 32 S186 28, 224 32" fill="none" stroke={item.color} strokeWidth="2" strokeOpacity="0.26" />
                              <path d="M84 42 C96 58, 114 62, 128 64" fill="none" stroke={item.color} strokeWidth="1.5" strokeOpacity="0.22" strokeDasharray="4,4" />
                              <path d="M142 42 C154 58, 174 62, 188 64" fill="none" stroke={item.color} strokeWidth="1.5" strokeOpacity="0.22" strokeDasharray="4,4" />
                              {item.primary.map((node, nodeIdx) => {
                                const x = 4 + nodeIdx * 48
                                return (
                                  <g key={`${item.title}-${node}`} filter={`url(#wf-card-shadow-${item.title.replace(/\s/g, '-')})`}>
                                    <rect x={x} y="20" width="42" height="24" rx="12" fill={nodeIdx === 0 ? item.color : '#FFFFFF'} stroke={item.color} strokeWidth={nodeIdx === 0 ? 0 : 1} strokeOpacity="0.24" />
                                    <text x={x + 21} y="35" textAnchor="middle" fill={nodeIdx === 0 ? '#FFFFFF' : item.color} fontSize="6.5" fontWeight="800" fontFamily="system-ui,-apple-system,sans-serif">{node}</text>
                                    {nodeIdx === 2 && (
                                      <g>
                                        <circle cx={x + 21} cy="9" r="7" fill={item.color} opacity="0.14" />
                                        {item.title === 'Product Development' ? (
                                          <g>
                                            <circle cx={x + 21} cy="9" r="9" fill="#5B5FE3" opacity="0.16" />
                                            <circle cx={x + 21} cy="8.5" r="6" fill="#5B5FE3" />
                                            <text x={x + 21} y="11.2" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">A</text>
                                          </g>
                                        ) : (
                                          <text x={x + 21} y="12" textAnchor="middle" fontSize="8">🤖</text>
                                        )}
                                      </g>
                                    )}
                                  </g>
                                )
                              })}
                              {item.branch.map((node, nodeIdx) => (
                                <g key={`${item.title}-branch-${node}`}>
                                  <rect x={70 + nodeIdx * 48} y="58" width="42" height="20" rx="10" fill="#FFFFFF" stroke={item.color} strokeWidth="1" strokeOpacity="0.18" />
                                  <text x={91 + nodeIdx * 48} y="71" textAnchor="middle" fill={item.color} fontSize="6" fontWeight="800" fontFamily="system-ui,-apple-system,sans-serif">{node}</text>
                                </g>
                              ))}
                            </svg>
                          </div>
                          {item.title === 'Product Development' && (
                            <div className="xiao-a-workflow absolute left-1/2 top-[132px] z-30 -translate-x-1/2 rounded-full border border-[#5B5FE3]/20 bg-white px-2.5 py-1.5 shadow-[0_14px_32px_rgba(91,95,227,0.16)]">
                              <div className="flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5B5FE3] text-[12px] font-black text-white">小A</span>
                                <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#5B5FE3]">in SOP</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  if (card.id === 'orchestrate') {
    const agentPeople = [
      { name: 'Code Agent', role: 'Engineering', origin: 'Create', action: 'Create custom agent', desc: 'Built by your team for code review, implementation tasks, and release checks.', color: '#5B5FE3', initials: 'CA' },
      { name: 'Research Agent', role: 'GTM research', origin: 'Bring', action: 'Bring external agent', desc: 'Connect an agent your team already uses for market scans and account research.', color: '#3EAB6E', initials: 'RA' },
      { name: 'CRM Agent', role: 'Sales ops', origin: 'Hire', action: 'Hire ready-made agent', desc: 'A ready-to-use assistant for lead enrichment, qualification, and CRM hygiene.', color: '#34D399', initials: 'CRM' },
      { name: 'Design Agent', role: 'Creative ops', origin: 'Bring', action: 'Bring external agent', desc: 'Plug in a specialist agent for creative ideation, asset review, and brand checks.', color: '#A78BFA', initials: 'DA' },
      { name: 'Data Agent', role: 'Analytics', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Analyze dashboards, explain metric changes, and turn insights into next actions.', color: '#0EA5E9', initials: 'BI' },
      { name: 'Ops Agent', role: 'Internal tools', origin: 'Create', action: 'Create custom agent', desc: 'Create a private agent for IT requests, approvals, permissions, and internal tasks.', color: '#F59E0B', initials: 'OA' },
      { name: 'Legal Agent', role: 'Risk review', origin: 'Bring', action: 'Bring external agent', desc: 'Bring an existing review agent into approval flows and compliance checkpoints.', color: '#EF4444', initials: 'LA' },
      { name: 'PM Agent', role: 'Product', origin: 'Create', action: 'Create custom agent', desc: 'Build a product agent that understands specs, roadmap context, and release rituals.', color: '#787BEE', initials: 'PM' },
      { name: 'QA Agent', role: 'Quality', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Run test plans, summarize defects, and keep release quality visible.', color: '#06B6D4', initials: 'QA' },
      { name: 'Support Agent', role: 'Customer support', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Triage tickets, draft replies, and escalate issues with context.', color: '#10B981', initials: 'SA' },
      { name: 'Security Agent', role: 'Security', origin: 'Bring', action: 'Bring external agent', desc: 'Bring a specialized security agent into review and approval workflows.', color: '#111827', initials: 'SEC' },
      { name: 'Finance Agent', role: 'Finance ops', origin: 'Create', action: 'Create custom agent', desc: 'Create an agent for spend checks, invoice reviews, and approval routing.', color: '#D97706', initials: 'FA' },
      { name: 'HR Agent', role: 'People ops', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Help employees with onboarding, policy lookup, and internal requests.', color: '#EC4899', initials: 'HR' },
      { name: 'Content Agent', role: 'Marketing', origin: 'Create', action: 'Create custom agent', desc: 'Build a content agent that understands brand voice and campaign playbooks.', color: '#8B5CF6', initials: 'CO' },
      { name: 'Sales Agent', role: 'Revenue', origin: 'Bring', action: 'Bring external agent', desc: 'Connect your existing sales assistant to pipeline and account workflows.', color: '#2563EB', initials: 'SL' },
      { name: 'Meeting Agent', role: 'Productivity', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Capture meeting notes, assign follow-ups, and sync decisions.', color: '#14B8A6', initials: 'MT' },
      { name: 'SRE Agent', role: 'Operations', origin: 'Create', action: 'Create custom agent', desc: 'Create an agent for incidents, runbooks, and system reliability checks.', color: '#F97316', initials: 'SR' },
      { name: 'Docs Agent', role: 'Knowledge', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Keep specs, decisions, and team knowledge searchable and current.', color: '#64748B', initials: 'DOC' },
      { name: 'Partner Agent', role: 'Ecosystem', origin: 'Bring', action: 'Bring external agent', desc: 'Bring partner-built agents into your controlled workflow environment.', color: '#7C3AED', initials: 'PA' },
      { name: 'Procurement Agent', role: 'Procurement', origin: 'Create', action: 'Create custom agent', desc: 'Create a private agent for sourcing, vendor checks, and purchase approvals.', color: '#B45309', initials: 'PR' },
      { name: 'Localization Agent', role: 'Global ops', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Translate, localize, and review assets across markets.', color: '#0891B2', initials: 'LO' },
      { name: 'Customer Agent', role: 'Customer success', origin: 'Bring', action: 'Bring external agent', desc: 'Connect a customer-facing agent into renewal and onboarding workflows.', color: '#059669', initials: 'CS' },
      { name: 'Release Agent', role: 'Release ops', origin: 'Hire', action: 'Hire ready-made agent', desc: 'Coordinate release checklists, blockers, and launch approvals.', color: '#4F46E5', initials: 'RL' },
      { name: 'Insights Agent', role: 'Strategy', origin: 'Create', action: 'Create custom agent', desc: 'Create an agent that turns market, product, and customer signals into decisions.', color: '#9333EA', initials: 'IN' },
    ]
    const hasActiveAgent = activeAgentLane !== null
    const isEmptySeatActive = typeof activeAgentLane === 'number' && activeAgentLane < 0
    const storySeatKey = 510
    const isStorySeatActive = activeAgentLane === storySeatKey
    const emptySeatInfo = {
      name: 'Open seat',
      role: 'Your next agent',
      action: 'Bring, create, or hire an agent',
      desc: 'This empty seat can be filled by bringing your own agent, creating a private one, or hiring a ready-made agent.',
      color: '#F59E0B',
    }
    const activeSeatAgentIndex = hasActiveAgent && !isEmptySeatActive
      ? (Math.floor(activeAgentLane / 100) * 18 + activeAgentLane % 100) % agentPeople.length
      : 0
    const activePerson = isEmptySeatActive ? emptySeatInfo : (isStorySeatActive ? xiaoAAgent : (hasActiveAgent ? agentPeople[activeSeatAgentIndex] : agentPeople[0]))
    const originStyles = {
      Hire: { color: '#3EAB6E', label: 'Hire an agent' },
      Bring: { color: '#5B5FE3', label: 'Bring your agent' },
      Create: { color: '#F59E0B', label: 'Create your agent' },
    }
    const activeOrigin = isEmptySeatActive ? { color: '#F59E0B', label: 'Bring · Create · Hire' } : originStyles[activePerson.origin]
    const rows = Array.from({ length: 12 }, (_, row) => ({ row, cols: row < 3 ? 15 : row < 7 ? 16 : 17 }))
    const emptySeatKeys = new Set([
      '1-3', '1-9', '1-13', '2-4', '2-7', '2-10', '2-14',
      '3-2', '3-6', '3-11', '3-15', '4-1', '4-5', '4-9', '4-12',
      '5-3', '5-5', '5-8', '5-13', '5-15', '6-2', '6-6', '6-9', '6-14',
      '7-3', '7-7', '7-11', '7-15', '8-1', '8-4', '8-6', '8-10', '8-14',
      '9-2', '9-6', '9-10', '9-13', '9-16', '10-4', '10-8', '10-12', '10-15',
      '11-1', '11-5', '11-8', '11-11', '11-15',
    ])

    const renderAgent = (person, active, scale) => (
      <div className="absolute left-1/2 top-[-18px] z-20 -translate-x-1/2" style={{ transform: `translateX(-50%) ${active ? 'translateY(-8px) scale(1.1)' : ''}` }}>
        {active && <div className="agent-seat-spotlight absolute inset-[-18px] rounded-full" style={{ backgroundColor: person.color }} />}
        <div className="relative" style={{ width: 38 * scale, height: 48 * scale }}>
          <div className={`absolute left-1/2 top-0 rounded-full bg-[#20242A] shadow-[0_10px_22px_rgba(15,23,42,0.30)] transition-all duration-300 ${active ? 'ring-2 ring-white' : 'ring-1 ring-white/45'}`} style={{ width: 28 * scale, height: 31 * scale, transform: 'translateX(-50%)' }}>
            <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle at 38% 22%, ${person.color}70, transparent 48%)` }} />
            <div className="absolute left-[22%] top-[24%] h-[35%] w-[56%] rounded-full bg-[#F2C6A5]" />
            <div className="absolute left-[34%] top-[36%] flex w-[32%] justify-between">
              <span className="h-1 w-1 rounded-full bg-[#111827]/75" />
              <span className="h-1 w-1 rounded-full bg-[#111827]/75" />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 rounded-t-full shadow-[0_8px_18px_rgba(15,23,42,0.20)]" style={{ width: 35 * scale, height: 28 * scale, transform: 'translateX(-50%)', backgroundColor: person.color }}>
            <div className="absolute inset-x-[25%] top-[18%] h-[17%] rounded-full bg-white/22" />
          </div>
        </div>
      </div>
    )

    return (
      <div className="relative h-full min-h-[440px] w-full overflow-hidden" onMouseLeave={() => setActiveAgentLane(null)}>
        <style>{`
          @keyframes agentSeatSpotlight {
            0%, 100% { opacity: 0.16; transform: scale(0.88); }
            50% { opacity: 0.42; transform: scale(1.16); }
          }
          @keyframes xiaoASeatBreathe {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-6px) scale(1.05); }
          }
          @keyframes workflowDash {
            from { stroke-dashoffset: 42; }
            to { stroke-dashoffset: 0; }
          }
          .agent-seat-spotlight { animation: agentSeatSpotlight 2.8s ease-in-out infinite; filter: blur(1px); }
          .xiao-a-seat { animation: xiaoASeatBreathe 2.6s ease-in-out infinite; }
          .workflow-stage-line { animation: workflowDash 2.4s linear infinite; }
        `}</style>

        <div className="absolute inset-0 bg-gradient-to-b from-[#220708] via-[#5F1414] to-[#1D0506]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/42 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/42 to-transparent" />

        <svg viewBox="0 0 700 430" className="pointer-events-none absolute inset-0 z-20 h-full w-full">
          <defs>
            <linearGradient id="frontStageFlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5B5FE3" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="stageGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="350" cy="78" rx="220" ry="58" fill="url(#stageGlow)" />
          <rect x="154" y="46" width="392" height="76" rx="26" fill="#120F1C" opacity="0.86" />
          <path className="workflow-stage-line" d="M205 84 C250 68, 292 100, 337 84 S425 68, 472 84" fill="none" stroke="url(#frontStageFlow)" strokeWidth="2.2" strokeDasharray="8 10" />
          {[
            { label: 'Brief', x: 205, color: '#5B5FE3' },
            { label: 'Plan', x: 272, color: '#3EAB6E' },
            { label: 'Build', x: 340, color: '#F59E0B' },
            { label: 'Review', x: 408, color: '#A78BFA' },
            { label: 'Ship', x: 475, color: '#10B981' },
          ].map((node, idx) => (
            <g key={node.label}>
              <rect x={node.x - 27} y="68" width="54" height="32" rx="16" fill={idx === 2 ? node.color : '#FFFFFF'} opacity="0.96" />
              <text x={node.x} y="88" textAnchor="middle" fill={idx === 2 ? '#FFFFFF' : node.color} fontSize="8" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">{node.label}</text>
            </g>
          ))}
          <text x="350" y="34" textAnchor="middle" fill="#FFFFFF" opacity="0.80" fontSize="10" fontWeight="850" fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="1.4">LIVE WORKFLOW STAGE</text>
        </svg>

        <div className="absolute left-5 top-5 z-40 rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white/80 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur">
          Bring · Create · Hire
        </div>

        <div className="absolute bottom-[-18px] left-1/2 top-[122px] z-30 w-[112%] -translate-x-1/2">
          {rows.map(({ row, cols }) => {
            const scale = 0.84 + row * 0.04
            return (
              <div
                key={`front-row-${row}`}
                className="grid gap-x-2 gap-y-2"
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                  marginBottom: row < 8 ? 5 : 7,
                  transform: `translateX(${row % 2 === 0 ? '-1.8%' : '1.8%'})`,
                }}
              >
                {Array.from({ length: cols }).map((_, col) => {
                  const key = `${row}-${col}`
                  const empty = emptySeatKeys.has(key)
                  const emptyActiveKey = -((row + 1) * 100 + col)
                  const seatAgentKey = row * 100 + col
                  const agentIdx = (row * 18 + col) % agentPeople.length
                  const isStorySeat = seatAgentKey === storySeatKey
                  const person = empty ? null : (isStorySeat ? xiaoAAgent : agentPeople[agentIdx])
                  const active = empty ? activeAgentLane === emptyActiveKey : activeAgentLane === seatAgentKey
                  return (
                    <button
                      key={key}
                      type="button"
                      onMouseEnter={() => {
                        if (empty) setActiveAgentLane(emptyActiveKey)
                        if (person) setActiveAgentLane(seatAgentKey)
                      }}
                      onFocus={() => {
                        if (empty) setActiveAgentLane(emptyActiveKey)
                        if (person) setActiveAgentLane(seatAgentKey)
                      }}
                      className="relative min-h-[38px] rounded-t-[10px] transition-all duration-300"
                      style={{ zIndex: active ? 70 : 10 + row }}
                    >
                      {person && (
                        <div className={isStorySeat ? 'xiao-a-seat' : ''}>
                          {renderAgent(person, active || isStorySeat, scale)}
                          {isStorySeat && (
                            <>
                              <div className="pointer-events-none absolute left-1/2 top-[-56px] z-50 -translate-x-1/2 rounded-full border border-white/80 bg-white px-3 py-1.5 text-[9px] font-black text-[#5B5FE3] shadow-[0_14px_34px_rgba(91,95,227,0.22)]">
                                小A · selected
                              </div>
                              <div className="pointer-events-none absolute left-1/2 top-[-24px] z-40 h-16 w-16 -translate-x-1/2 rounded-full border-2 border-[#5B5FE3]/30 bg-[#5B5FE3]/10 shadow-[0_18px_46px_rgba(91,95,227,0.22)]" />
                            </>
                          )}
                        </div>
                      )}
                      {empty && (
                        <div className="absolute left-1/2 top-[-14px] z-20 -translate-x-1/2">
                          {active && <div className="agent-seat-spotlight absolute inset-[-18px] rounded-full bg-[#F59E0B]" />}
                          <div className={`absolute left-1/2 top-[-25px] w-[82px] -translate-x-1/2 rounded-full border px-2 py-1 text-center text-[7px] font-black uppercase tracking-[0.06em] shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition-all duration-300 ${active ? 'scale-100 border-[#F59E0B] bg-[#FFF8EA] text-[#F59E0B] opacity-100' : 'pointer-events-none scale-95 border-white/0 bg-transparent text-white/0 opacity-0'}`}>
                            Hire · Bring · Create
                          </div>
                          <div className={`flex h-9 w-9 items-center justify-center rounded-full border border-dashed transition-all duration-300 ${active ? 'scale-100 border-[#F59E0B] bg-[#FFF8EA] text-[#F59E0B] opacity-100 shadow-[0_18px_38px_rgba(245,158,11,0.22)]' : 'pointer-events-none scale-90 border-white/0 bg-transparent text-white/0 opacity-0'}`}>
                            <span className="text-[16px] font-black leading-none">+</span>
                          </div>
                        </div>
                      )}
                      <div className={`relative h-full min-h-[38px] rounded-t-[10px] border border-[#5C0C0D]/60 bg-gradient-to-b from-[#B93425] via-[#8E1D18] to-[#5C0C0D] shadow-[inset_0_3px_0_rgba(255,255,255,0.16),0_7px_12px_rgba(0,0,0,0.22)] transition-all duration-300 ${active ? 'brightness-125 ring-2 ring-white/70' : ''}`}>
                        <div className="absolute inset-x-1 top-1 h-2 rounded-full bg-white/18" />
                        <div className="absolute bottom-0 left-1/2 h-[32%] w-[84%] -translate-x-1/2 rounded-t-[8px] bg-black/12" />
                        {empty && <div className={`absolute inset-1 rounded-t-[7px] border border-dashed transition-all duration-300 ${active ? 'border-white/55 bg-white/10' : 'border-white/0 bg-transparent'}`} />}
                      </div>
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>

        {hasActiveAgent && (
        <div className="absolute right-4 top-1/2 z-[90] w-[218px] -translate-y-1/2 rounded-[28px] border border-white/80 bg-white/[0.93] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em]" style={{ color: activeOrigin.color, backgroundColor: `${activeOrigin.color}14` }}>
              {activeOrigin.label}
            </span>
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: activePerson.color }} />
          </div>
          <div className="mb-1 text-[16px] font-black tracking-[-0.03em] text-[#111827]">{activePerson.name}</div>
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8F959E]">{activePerson.role}</div>
          <p className="mb-4 text-[11px] leading-5 text-[#646A73]">{activePerson.desc}</p>
          <div className="rounded-2xl border border-[#EEF0F4] bg-[#FBFCFF] p-3">
            <div className="mb-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#8F959E]">Action</div>
            <div className="text-[12px] font-black text-[#111827]">{activePerson.action}</div>
          </div>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#EEF0F4] bg-white p-3">
            {isEmptySeatActive ? (
              <div>
                <div className="mb-3 grid grid-cols-3 items-center gap-2">
                  <div className="rounded-xl border border-[#E8EAFF] bg-[#F6F7FF] p-2 text-center">
                    <div className="text-[8px] font-black text-[#5B5FE3]">Bring</div>
                    <div className="mt-1 h-6 rounded-md bg-[#5B5FE3]/12" />
                  </div>
                  <div className="rounded-xl border border-[#DDF6E8] bg-[#F3FCF7] p-2 text-center">
                    <div className="text-[8px] font-black text-[#3EAB6E]">Hire</div>
                    <div className="mt-1 h-6 rounded-md bg-[#3EAB6E]/15" />
                  </div>
                  <div className="rounded-xl border border-[#FFE8BF] bg-[#FFF8EA] p-2 text-center">
                    <div className="text-[8px] font-black text-[#F59E0B]">Create</div>
                    <div className="mt-1 flex h-6 items-center justify-center rounded-md bg-[#F59E0B] text-white">+</div>
                  </div>
                </div>
                <div className="text-[9px] leading-4 text-[#8F959E]">Use the open seat to bring an external agent, create a private one, or hire a ready-made agent.</div>
              </div>
            ) : activePerson.origin === 'Bring' ? (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="rounded-xl border border-[#E8EAFF] bg-[#F6F7FF] px-2.5 py-2">
                    <div className="text-[8px] font-black uppercase tracking-[0.12em] text-[#5B5FE3]">External</div>
                    <div className="text-[10px] font-black text-[#111827]">Your agent</div>
                  </div>
                  <div className="flex flex-1 items-center px-2">
                    <span className="h-px flex-1 border-t border-dashed border-[#5B5FE3]/40" />
                    <span className="mx-1 h-1.5 w-1.5 rounded-full bg-[#5B5FE3]" />
                    <span className="h-px flex-1 border-t border-dashed border-[#5B5FE3]/40" />
                  </div>
                  <div className="rounded-xl bg-[#111827] px-2.5 py-2 text-white">
                    <div className="text-[8px] font-black uppercase tracking-[0.12em] text-white/45">Meegle</div>
                    <div className="text-[10px] font-black">Connect</div>
                  </div>
                </div>
                <div className="text-[9px] leading-4 text-[#8F959E]">Bring an existing agent through MCP, CLI, API, or partner integrations.</div>
              </div>
            ) : activePerson.origin === 'Create' ? (
              <div>
                <div className="mb-3 grid grid-cols-[1fr_auto] gap-2">
                  <div className="rounded-xl border border-[#FFE8BF] bg-[#FFF8EA] p-2">
                    <div className="mb-1 h-1.5 w-12 rounded-full bg-[#F59E0B]/35" />
                    <div className="mb-1 h-1.5 w-8 rounded-full bg-[#F59E0B]/20" />
                    <div className="grid grid-cols-3 gap-1 pt-1">
                      <span className="h-5 rounded-md bg-white shadow-sm" />
                      <span className="h-5 rounded-md bg-white shadow-sm" />
                      <span className="h-5 rounded-md bg-white shadow-sm" />
                    </div>
                  </div>
                  <div className="flex h-full w-10 items-center justify-center rounded-xl bg-[#F59E0B] text-[18px] font-black text-white">+</div>
                </div>
                <div className="text-[9px] leading-4 text-[#8F959E]">Create a private agent from templates, skills, tools, and business context.</div>
              </div>
            ) : (
              <div>
                <div className="mb-3 grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="rounded-lg border border-[#DDF6E8] bg-[#F3FCF7] p-1.5">
                      <div className="mb-1 h-5 rounded-md bg-[#3EAB6E]/15" />
                      <div className="mx-auto h-1 w-8 rounded-full bg-[#3EAB6E]/30" />
                    </div>
                  ))}
                </div>
                <div className="text-[9px] leading-4 text-[#8F959E]">Hire a ready-made agent and place it directly into a workflow.</div>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    )
  }

  if (card.id === 'context') {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#FFF9EA] via-[#FFF2D2] to-[#FFE8AF]" style={{ opacity: isVisible ? 1 : 0.4, transition: 'opacity 0.6s ease' }} />
        <div className="absolute inset-[4%] rounded-[34px] bg-white/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(#D97706 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        <style>{`
          @keyframes xiaoABagOpen {
            0%, 100% { transform: translateY(0) scale(1); }
            45% { transform: translateY(-8px) scale(1.03); }
          }
          .xiao-a-context-bag { animation: xiaoABagOpen 2.8s ease-in-out infinite; }
        `}</style>
        <svg viewBox="0 0 820 500" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" style={{ filter: 'drop-shadow(0 24px 52px rgba(245,158,11,0.14))' }}>
          <defs>
            <linearGradient id="uc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="uc-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B5FE3" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            <linearGradient id="uc-card" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFDF7" />
            </linearGradient>
            <filter id="uc-shadow"><feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#7C4D00" floodOpacity="0.12" /></filter>
            <filter id="uc-glow"><feGaussianBlur stdDeviation="10" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>

          <rect x="40" y="34" width="740" height="432" rx="42" fill="#FFFFFF" opacity="0.24" />
          <rect x="70" y="64" width="680" height="372" rx="34" fill="#FFFFFF" opacity="0.16" />
          <rect x="104" y="126" width="612" height="258" rx="32" fill="#FFFFFF" opacity="0.24" />
          <rect x="128" y="154" width="564" height="198" rx="26" fill="#FFFDF8" opacity="0.58" />

          {/* Popular integrations */}
          <g opacity="0.30">
          {[
            { x: 58, y: 160, label: 'Slack', icon: 'S', color: '#7C3AED' },
            { x: 58, y: 220, label: 'Jira', icon: 'J', color: '#2563EB' },
            { x: 58, y: 280, label: 'GitHub', icon: 'G', color: '#111827' },
            { x: 676, y: 160, label: 'Figma', icon: 'F', color: '#EC4899' },
            { x: 676, y: 220, label: 'Drive', icon: 'D', color: '#10B981' },
            { x: 676, y: 280, label: 'Notion', icon: 'N', color: '#111827' },
            { x: 366, y: 390, label: 'Confluence', icon: 'C', color: '#F59E0B' },
          ].map((app, i) => (
            <g key={app.label}>
              <rect x={app.x} y={app.y} width="86" height="34" rx="17" fill="white" stroke={app.color} strokeWidth="1" strokeOpacity="0.14" filter="url(#uc-shadow)" />
              <circle cx={app.x + 18} cy={app.y + 17} r="10" fill={app.color} opacity="0.12" />
              <text x={app.x + 14} y={app.y + 21} fill={app.color} fontSize="10" fontWeight="900">{app.icon}</text>
              <text x={app.x + 34} y={app.y + 21} fill="#111827" fontSize="10" fontWeight="800">{app.label}</text>
              <path
                d={`M${app.x + 43} ${app.y + 17} C${app.x < 410 ? app.x + 130 : app.x - 70} ${app.y + 17}, ${app.x < 410 ? 270 : 550} ${i < 3 ? 210 : 300}, 410 258`}
                fill="none"
                stroke={app.color}
                strokeWidth="1"
                strokeDasharray="3,8"
                opacity="0.16"
              />
            </g>
          ))}
          </g>

          <g opacity="0.42">
          {[
            { x: 152, y: 166, icon: '📄', label: 'Docs', sub: 'Specs / wiki', color: '#3B82F6', tx: 330, ty: 214 },
            { x: 152, y: 246, icon: '💬', label: 'Chats', sub: 'Slack / Lark', color: '#8B5CF6', tx: 330, ty: 258 },
            { x: 152, y: 326, icon: '🎫', label: 'Tickets', sub: 'Jira / Linear', color: '#EF4444', tx: 330, ty: 304 },
            { x: 542, y: 166, icon: '📅', label: 'Meetings', sub: 'Notes / calls', color: '#10B981', tx: 490, ty: 214 },
            { x: 542, y: 246, icon: '📊', label: 'Metrics', sub: 'BI / reports', color: '#F59E0B', tx: 490, ty: 258 },
            { x: 542, y: 326, icon: '🧩', label: 'PRDs', sub: 'Requirements', color: '#06B6D4', tx: 490, ty: 304 },
          ].map((src, i) => (
            <g key={src.label}>
              <path
                d={`M${src.x + (src.x < 410 ? 118 : 0)} ${src.y + 27} C${src.x < 410 ? src.x + 184 : src.x - 76} ${src.y + 27}, ${src.tx} ${src.ty}, ${src.tx} ${src.ty}`}
                fill="none"
                stroke={src.color}
                strokeWidth="1.6"
                strokeDasharray="4,5"
                opacity="0.38"
              >
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite" />
              </path>
              <circle cx={src.tx} cy={src.ty} r="3" fill={src.color} opacity="0.55">
                <animate attributeName="opacity" values="0.25;0.85;0.25" dur={`${1.8 + i * 0.16}s`} repeatCount="indefinite" />
              </circle>
              <rect x={src.x} y={src.y} width="126" height="56" rx="16" fill="url(#uc-card)" stroke={src.color} strokeWidth="1.2" strokeOpacity="0.18" filter="url(#uc-shadow)" />
              <circle cx={src.x + 23} cy={src.y + 28} r="14" fill={src.color} opacity="0.10" />
              <text x={src.x + 15} y={src.y + 34} fontSize="15">{src.icon}</text>
              <text x={src.x + 46} y={src.y + 31} fill="#111827" fontSize="11" fontWeight="750">{src.label}</text>
              <text x={src.x + 46} y={src.y + 45} fill="#8F959E" fontSize="8" fontWeight="700">{src.sub}</text>
            </g>
          ))}
          </g>

          {/* Context Center distributes normalized information packages upward */}
          <g opacity="0.82">
            <rect x="104" y="42" width="612" height="86" rx="26" fill="#FFFFFF" opacity="0.78" stroke="#FDE7B6" strokeWidth="1.2" filter="url(#uc-shadow)" />
            <rect x="128" y="58" width="112" height="22" rx="11" fill="#FFF7E6" />
            <text x="184" y="73" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="900" letterSpacing="1.1">PACKAGE LAYER</text>
            <text x="410" y="71" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="900">Context Center packages the right block on demand</text>
            <text x="662" y="73" textAnchor="middle" fill="#5B5FE3" fontSize="9" fontWeight="900">To agents</text>
          </g>
          <g opacity="0.30">
          {[
            { x: 160, y: 88, color: '#5B5FE3', anchorX: 296 },
            { x: 288, y: 88, color: '#EF4444', anchorX: 372 },
            { x: 416, y: 88, color: '#F59E0B', anchorX: 448 },
            { x: 544, y: 88, color: '#10B981', anchorX: 524 },
          ].map((packet, i) => (
            <g key={`packet-line-${i}`}>
              <path
                d={`M410 176 C410 150, ${packet.anchorX} 126, ${packet.x + 52} 126`}
                fill="none"
                stroke={packet.color}
                strokeWidth="1.8"
                strokeDasharray="5,7"
                opacity="0.55"
              >
                <animate attributeName="stroke-dashoffset" from="24" to="0" dur={`${1.8 + i * 0.18}s`} repeatCount="indefinite" />
              </path>
              <circle cx={packet.x + 52} cy="126" r="4.5" fill={packet.color} opacity="0.72">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur={`${1.6 + i * 0.18}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          </g>

          <g filter="url(#uc-glow)">
            <circle cx="410" cy="258" r="104" fill="#F59E0B" opacity="0.10">
              <animate attributeName="r" values="112;128;112" dur="4.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.06;0.13;0.06" dur="4.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="410" cy="258" r="82" fill="#5B5FE3" opacity="0.08">
              <animate attributeName="r" values="88;100;88" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="410" cy="258" r="50" fill="#A78BFA" opacity="0.12">
              <animate attributeName="opacity" values="0.08;0.16;0.08" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </g>

          <rect x="326" y="176" width="168" height="164" rx="30" fill="white" stroke="#E9ECF3" strokeWidth="1.2" filter="url(#uc-shadow)" />
          <rect x="326" y="176" width="168" height="48" rx="30" fill="url(#uc-core)" />
          <text x="410" y="205" textAnchor="middle" fill="white" fontSize="13" fontWeight="850">Context Center</text>
          <text x="410" y="238" textAnchor="middle" fill="#8F959E" fontSize="8" fontWeight="800" letterSpacing="1.2">SOURCE OF TRUTH</text>

          {[
            { y: 260, label: 'Entities', pct: 92, color: '#5B5FE3' },
            { y: 288, label: 'Signals', pct: 86, color: '#F59E0B' },
            { y: 316, label: 'Decisions', pct: 96, color: '#10B981' },
          ].map((item) => (
            <g key={item.label}>
              <text x="352" y={item.y - 5} fill="#646A73" fontSize="9" fontWeight="700">{item.label}</text>
              <text x="470" y={item.y - 5} textAnchor="end" fill={item.color} fontSize="8" fontWeight="850">{item.pct}%</text>
              <rect x="352" y={item.y + 2} width="118" height="6" rx="3" fill="#F0F2F6" />
              <rect x="352" y={item.y + 2} width={item.pct * 1.18} height="6" rx="3" fill={item.color} opacity="0.82" />
            </g>
          ))}

          <g opacity="0.38">
          {[
            { x: 160, y: 88, sub: 'for planning', icon: '01', color: '#5B5FE3' },
            { x: 288, y: 88, sub: 'for risk', icon: '02', color: '#EF4444' },
            { x: 416, y: 88, sub: 'for status', icon: '03', color: '#F59E0B' },
            { x: 544, y: 88, sub: 'for actions', icon: '04', color: '#10B981' },
          ].map((packet, i) => (
            <g key={`packet-card-${i}`}>
              <rect x={packet.x} y={packet.y} width="104" height="42" rx="14" fill="white" stroke={packet.color} strokeWidth="1.8" strokeOpacity="0.34" filter="url(#uc-shadow)" />
              <rect x={packet.x + 10} y={packet.y + 28} width="56" height="4" rx="2" fill={packet.color} opacity="0.12" />
              <circle cx={packet.x + 19} cy={packet.y + 18} r="10" fill={packet.color} opacity="0.14" />
              <text x={packet.x + 19} y={packet.y + 21} textAnchor="middle" fill={packet.color} fontSize="7.2" fontWeight="950">{packet.icon}</text>
              <text x={packet.x + 36} y={packet.y + 17} fill="#111827" fontSize="11" fontWeight="900">Package</text>
              <text x={packet.x + 36} y={packet.y + 29} fill="#8F959E" fontSize="7.2" fontWeight="750">{packet.sub}</text>
              <circle cx={packet.x + 91} cy={packet.y + 13} r="3.5" fill={packet.color} opacity="0.65">
                <animate attributeName="r" values="2.4;4;2.4" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          </g>

          <g>
            <rect x="238" y="410" width="344" height="34" rx="17" fill="white" stroke="#DDF6E8" filter="url(#uc-shadow)" />
            <circle cx="260" cy="427" r="11" fill="#ECFDF5" stroke="#16A34A" strokeWidth="2" />
            <path d="M255 427 l3 3 l7 -8" stroke="#16A34A" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="282" y="431" fill="#16A34A" fontSize="11" fontWeight="850">All integrations, content streams, and signals unified in one context layer</text>
          </g>
        </svg>
        <div className="pointer-events-none absolute left-[30%] top-[38%] z-40 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full border border-[#5B5FE3]/18 bg-white/90 px-2.5 py-2 shadow-[0_18px_42px_rgba(91,95,227,0.14)] backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5B5FE3] text-[13px] font-black text-white">小A</span>
            <div className="text-[10px] font-black uppercase tracking-[0.13em] text-[#5B5FE3]">with context</div>
          </div>
        </div>
        <div className="xiao-a-context-bag pointer-events-none absolute right-[9%] top-[23%] z-40 w-[210px] rounded-[26px] border border-[#FDE7B6] bg-white/94 p-4 shadow-[0_24px_60px_rgba(180,83,9,0.18)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-black uppercase tracking-[0.14em] text-[#B45309]">小A's package</div>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFF7E6] text-[16px]">▣</div>
          </div>
          <div className="mb-3 rounded-2xl bg-[#FFF8EA] p-3">
            <div className="mb-2 h-2 w-20 rounded-full bg-[#F59E0B]/35" />
            <div className="h-2 w-28 rounded-full bg-[#F59E0B]/18" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Docs', 'Chats', 'Tasks', 'Metrics'].map((item) => (
              <div key={item} className="rounded-xl border border-[#F1F3F7] bg-white px-2 py-1.5 text-center text-[9px] font-black text-[#646A73]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return null
}

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
  const [isTyping, setIsTyping] = useState(false)
  const sectionRef = useRef(null)
  const cycleRef = useRef(null)
  const started = useRef(false)
  const scenesRef = useRef(AI_ASSISTANT_SCENES)

  const selectScene = useCallback((idx) => {
    if (cycleRef.current) clearTimeout(cycleRef.current)
    setActiveIdx(idx)
    setIsTyping(true)
    setTimeout(() => setIsTyping(false), 900)
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
          selectScene(step % total)
          step += 1
          cycleRef.current = setTimeout(play, 3300)
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
  const totalScenes = AI_ASSISTANT_SCENES.length

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

        <div className="relative overflow-hidden rounded-[28px] border border-black/[0.04] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="relative min-h-[560px] w-full">
            <div className="absolute inset-y-0 left-0 w-[48%] bg-[#FBFCFF]" />
            <div className="absolute inset-y-0 right-0 w-[52%] bg-gradient-to-br from-[#6B5CFF] via-[#4F55F6] to-[#3B39E8]" />
            <div className="absolute inset-y-0 left-[48%] w-px bg-white/70" />
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#5B5FE3 1px, transparent 1px)', backgroundSize: '14px 14px' }} />

            <div className="absolute left-[64px] top-0 h-full w-px bg-[#D8DFFF]" />

            <div className="absolute left-[78px] top-0 h-[560px] w-[340px]">
              {AI_ASSISTANT_SCENES.map((scene, idx) => {
                let rel = (idx - activeIdx + totalScenes) % totalScenes
                if (rel > totalScenes / 2) rel -= totalScenes
                const visible = rel >= -2 && rel <= 3
                const isActive = idx === activeIdx
                const top = 178 + rel * 96 + (rel > 0 ? 72 : 0)

                if (!visible) return null

                if (isActive) {
                  return (
                    <div
                      key={scene.id}
                      className="absolute left-[-12px] w-[380px] rounded-[4px] bg-white p-3 shadow-[0_14px_44px_rgba(15,23,42,0.16)] transition-all duration-500"
                      style={{ top, zIndex: 20 }}
                    >
                      <div className="mb-2 flex items-center gap-1.5 text-[13px] font-black tracking-[-0.02em] text-[#111827]">
                        <Sparkles size={15} className="text-[#5B5FE3]" />
                        Meegle Assistant
                      </div>
                      <div className="rounded-[4px] border border-[#8179FF] bg-white px-3 py-2.5 shadow-[0_0_0_1px_rgba(129,121,255,0.08)]">
                        <div className="min-h-[22px] text-[13px] font-medium leading-[1.55] text-[#111827]">
                          {isTyping ? (
                            <span>
                              {scene.prompt.substring(0, Math.max(12, Math.floor(scene.prompt.length * 0.58)))}
                              <span className="inline-flex ml-0.5">...<span className="animate-pulse">.</span></span>
                            </span>
                          ) : scene.prompt}
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[#1F2329]">
                          <div className="flex items-center gap-4">
                            <span className="text-[18px] leading-none">@</span>
                            <span className="text-[20px] leading-none">+</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[14px] leading-none">⌘</span>
                            <span className="h-6 w-6 rounded-full bg-[#1F2329]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <button
                    key={scene.id}
                    onClick={() => selectScene(idx)}
                    className="absolute left-0 w-[340px] rounded-[3px] border border-[#D9DDE8] bg-white/58 px-4 py-4 text-left text-[13px] font-medium text-[#8D96A8] backdrop-blur-sm transition-all duration-500 hover:border-[#BFC6FF] hover:bg-white/84 hover:text-[#5B5FE3]"
                    style={{ top, zIndex: rel > 0 ? 8 - rel : 8 + rel }}
                  >
                    <span>{scene.prompt}</span>
                    {rel > 0 && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-[#9AA3B5]">+</span>}
                  </button>
                )
              })}
            </div>

            <div className="absolute right-[42px] top-[78px] h-[384px] w-[46%] rounded-[12px] bg-white shadow-[0_18px_50px_rgba(18,24,74,0.18)] transition-all duration-700">
              <div className="flex h-full items-center justify-center rounded-[12px] border border-white/40 bg-white/92">
                <div className="text-center">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${activeScene.gradient} shadow-lg transition-all duration-500`}>
                    <span className="text-[28px]">{activeScene.icon}</span>
                  </div>
                  <div className="text-[15px] font-black text-[#111827]">{activeScene.label}</div>
                  <div className="mt-2 text-[12px] font-semibold text-[#A1A7B3]">Product screenshot placeholder</div>
                </div>
              </div>
            </div>

            <div className="absolute right-[42px] top-[78px] h-[384px] w-[46%] rounded-[12px] ring-1 ring-white/20" />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => selectScene((activeIdx - 1 + AI_ASSISTANT_SCENES.length) % AI_ASSISTANT_SCENES.length)}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#EEF0F4] bg-white shadow-sm transition-colors hover:bg-[#F4F6FF]"
          >
            <ChevronLeft size={12} className="text-[#8F959E]" />
          </button>
          <div className="flex gap-2">
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
          <button
            onClick={() => selectScene((activeIdx + 1) % AI_ASSISTANT_SCENES.length)}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#EEF0F4] bg-white shadow-sm transition-colors hover:bg-[#F4F6FF]"
          >
            <ChevronRight size={12} className="text-[#8F959E]" />
          </button>
        </div>
      </div>
    </section>
  )
}

const MeegleHomepage = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [cascadeVariant, setCascadeVariant] = useState('fullbleed')
  const [illustrationVariant, setIllustrationVariant] = useState('v5')
  const [stackProgress, setStackProgress] = useState(-1)
  const heroRef = useRef(null)
  const stackRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const updateStackProgress = () => {
      frame = 0
      const el = stackRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight || 1
      const totalScroll = Math.max(1, el.offsetHeight - viewport)
      const inView = rect.top <= viewport && rect.bottom >= 0
      const scrolled = Math.max(0, Math.min(totalScroll, -rect.top))
      setStackProgress(inView ? scrolled / totalScroll : -1)
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateStackProgress)
    }

    updateStackProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const clamp01 = (value) => Math.max(0, Math.min(1, value))
  const segmentProgress = (start, end) => clamp01((stackProgress - start) / (end - start))
  const agentHop = segmentProgress(0.05, 0.36)
  const packageHop = segmentProgress(0.40, 0.70)
  const storyVisible = stackProgress >= 0.04 && stackProgress <= 0.78 && illustrationVariant === 'v5'
  const agentX = 76 + ((68 - 76) * agentHop)
  const agentY = 46 + ((56 - 46) * agentHop) - Math.sin(agentHop * Math.PI) * 12
  const agentScale = 0.9 + Math.sin(agentHop * Math.PI) * 0.22
  const packageX = 68 + ((82 - 68) * packageHop)
  const packageY = 56 + ((35 - 56) * packageHop) - Math.sin(packageHop * Math.PI) * 10
  const packageScale = 0.78 + (0.32 * packageHop)
  const showAgentHop = stackProgress >= 0.05 && stackProgress < 0.42
  const showPackageHop = stackProgress >= 0.34 && stackProgress <= 0.76

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
        @keyframes storyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91,95,227,0.22); }
          50% { box-shadow: 0 0 0 18px rgba(91,95,227,0); }
        }
        @keyframes storyBagGlow {
          0%, 100% { filter: drop-shadow(0 14px 26px rgba(245,158,11,0.18)); }
          50% { filter: drop-shadow(0 22px 38px rgba(245,158,11,0.34)); }
        }
        .story-pulse {
          animation: storyPulse 2.2s ease-in-out infinite;
        }
        .story-bag-glow {
          animation: storyBagGlow 2.4s ease-in-out infinite;
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
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-br from-[#F7F8FF] via-white to-[#F7FFFB] overflow-hidden">
        <div className="absolute top-[-22%] left-[-12%] h-[560px] w-[560px] rounded-full bg-[#5B5FE3]/[0.075] blur-[120px]" />
        <div className="absolute top-[10%] right-[-8%] h-[620px] w-[620px] rounded-full bg-[#10B981]/[0.065] blur-[135px]" />
        <div className="absolute bottom-[-28%] left-[28%] h-[560px] w-[720px] rounded-full bg-[#F59E0B]/[0.045] blur-[130px]" />
        <div className="absolute bottom-[8%] right-[18%] h-[420px] w-[420px] rounded-full bg-[#EC4899]/[0.035] blur-[110px]" />
        <div className="absolute inset-0 opacity-55" style={{ backgroundImage: 'linear-gradient(rgba(91,95,227,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(91,95,227,0.045) 1px, transparent 1px)', backgroundSize: '88px 88px', maskImage: 'radial-gradient(ellipse at 52% 38%, black 0%, transparent 68%)' }} />

        <div className="relative w-full max-w-[1340px] mx-auto px-6">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center">
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
      <div ref={stackRef} className="relative" style={{ height: `${(STACK_CARDS.length + 1) * 100}vh` }}>
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
          <div className="w-px h-5 bg-[#E2E4E9] mx-0.5" />
          <button
            onClick={() => setIllustrationVariant('v2')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
              illustrationVariant === 'v2'
                ? 'bg-[#5B5FE3] text-white shadow-sm'
                : 'text-[#646A73] hover:text-[#111827] hover:bg-[#F4F6F9]'
            }`}
          >
            v2 蓝图版
          </button>
          <button
            onClick={() => setIllustrationVariant('v3')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
              illustrationVariant === 'v3'
                ? 'bg-[#5B5FE3] text-white shadow-sm'
                : 'text-[#646A73] hover:text-[#111827] hover:bg-[#F4F6F9]'
            }`}
          >
            v3 丰富版
          </button>
          <button
            onClick={() => setIllustrationVariant('v4')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
              illustrationVariant === 'v4'
                ? 'bg-[#5B5FE3] text-white shadow-sm'
                : 'text-[#646A73] hover:text-[#111827] hover:bg-[#F4F6F9]'
            }`}
          >
            v4 SOP版
          </button>
          <button
            onClick={() => setIllustrationVariant('v5')}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
              illustrationVariant === 'v5'
                ? 'bg-[#5B5FE3] text-white shadow-sm'
                : 'text-[#646A73] hover:text-[#111827] hover:bg-[#F4F6F9]'
            }`}
          >
            v5 瀑布流
          </button>
        </div>

        {storyVisible && (
          <div className="pointer-events-none fixed inset-0 z-[85] hidden lg:block">
            {showAgentHop && (
              <div
                className="absolute transition-opacity duration-150"
                style={{
                  left: `${agentX}vw`,
                  top: `${agentY}vh`,
                  opacity: 0.34 + Math.sin(agentHop * Math.PI) * 0.66,
                  transform: `translate(-50%, -50%) scale(${agentScale})`,
                }}
              >
                <div className="story-pulse flex items-center gap-2 rounded-full border border-white/75 bg-white/94 px-3 py-2 shadow-[0_20px_55px_rgba(91,95,227,0.24)] backdrop-blur-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B5FE3] text-[14px] font-black text-white">小A</span>
                  <span className="pr-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#5B5FE3]">
                    SOP → Seat
                  </span>
                </div>
              </div>
            )}

            {showPackageHop && (
              <div
                className="absolute transition-opacity duration-150"
                style={{
                  left: `${packageX}vw`,
                  top: `${packageY}vh`,
                  opacity: 0.28 + Math.sin(packageHop * Math.PI) * 0.72,
                  transform: `translate(-50%, -50%) scale(${packageScale})`,
                }}
              >
                <div className="story-bag-glow rounded-[22px] border border-[#FDE7B6] bg-white/95 p-3 shadow-[0_22px_60px_rgba(180,83,9,0.22)] backdrop-blur-xl">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF7E6] text-[16px]">▣</span>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.14em] text-[#B45309]">context package</div>
                      <div className="text-[10px] font-bold text-[#646A73]">Seat → Context</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {['Docs', 'Chats', 'Tasks', 'Metrics'].map((item) => (
                      <span key={item} className="rounded-lg bg-[#FFF8EA] px-2 py-1 text-center text-[8px] font-black text-[#B45309]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

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
                    <div className={card.id === 'workflows' && illustrationVariant === 'v5'
                      ? 'h-full overflow-visible'
                      : 'rounded-[32px] border border-black/[0.04] bg-white overflow-hidden h-full shadow-[0_16px_60px_rgba(15,23,42,0.04)]'
                    }>
                      <AgentCardIllustration card={card} isVisible={true} illustrationVariant={illustrationVariant} />
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
                    <div className={card.id === 'workflows' && illustrationVariant === 'v5'
                      ? 'h-full overflow-visible'
                      : 'rounded-[32px] border border-black/[0.04] bg-white overflow-hidden h-full shadow-[0_16px_60px_rgba(15,23,42,0.04)]'
                    }>
                      <AgentCardIllustration card={card} isVisible={true} illustrationVariant={illustrationVariant} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* AI ASSISTANT — Animated Chat Interface */}
      <AIAssistantSection />

      {/* CONTROL — Governance Pillars */}
      <section className="relative py-32 md:py-44 bg-[#FBFBFE] overflow-hidden">
        <div className="absolute top-[-8%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[#5B5FE3]/[0.02] blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] h-[520px] w-[520px] rounded-full bg-[#A78BFA]/[0.03] blur-[120px]" />

        <div className="relative max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-16 lg:gap-20 items-start">
            <div className="max-w-[420px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-4 py-1.5 text-[12px] font-semibold text-[#5B5FE3] mb-6">
                <Shield size={14} />
                Governance Built In
              </div>
              <h2 className="text-[48px] md:text-[72px] leading-[0.92] font-black tracking-[-0.07em] text-[#0A0A14]">
                AI You Can
                <br />
                Control.
              </h2>
              <p className="mt-8 text-[18px] leading-8 text-[#646A73] max-w-[380px]">
                Meegle builds governance into every agent, every workflow, and every data boundary from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 pt-2">
              {CONTROL_PILLARS.map((item) => (
                <div key={item.title} className="max-w-[320px]">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4EFFF] text-[#A26BEE]">
                    {item.icon}
                  </div>
                  <h3 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#4B5563]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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


/* ============ GAME VERSION — 2.5D Sequential Workflow ============ */

const FLOW_BOARD_W = 1040
const FLOW_BOARD_H = 460
const FLOW_STEPS = [
  { id: 'build', label: 'Build Workflow' },
  { id: 'assign', label: 'Assign Agents' },
  { id: 'deliver', label: 'Confirm Delivery' },
]

const FLOW_NODES = [
  { id: 'start', color: '#3EAB6E', x: 24, y: 154, w: 82, h: 40 },
  { id: 'intake', color: '#5B5FE3', x: 150, y: 90, w: 108, h: 44 },
  { id: 'context', color: '#06B6D4', x: 150, y: 218, w: 108, h: 44 },
  { id: 'plan', color: '#F59E0B', x: 310, y: 86, w: 118, h: 46 },
  { id: 'route', color: '#8B5CF6', x: 310, y: 218, w: 118, h: 46 },
  { id: 'agentA', color: '#5B5FE3', x: 480, y: 36, w: 112, h: 46 },
  { id: 'agentB', color: '#10B981', x: 480, y: 140, w: 112, h: 46 },
  { id: 'agentC', color: '#EC4899', x: 480, y: 246, w: 112, h: 46 },
  { id: 'reviewA', color: '#F97316', x: 652, y: 74, w: 118, h: 46 },
  { id: 'reviewB', color: '#06B6D4', x: 652, y: 214, w: 118, h: 46 },
  { id: 'merge', color: '#8B5CF6', x: 830, y: 142, w: 116, h: 48 },
  { id: 'outcome', color: '#10B981', x: 990, y: 142, w: 112, h: 48 },
]

const FLOW_EDGES = [
  { from: 'start', to: 'intake' },
  { from: 'start', to: 'context' },
  { from: 'intake', to: 'plan' },
  { from: 'context', to: 'route' },
  { from: 'plan', to: 'agentA' },
  { from: 'plan', to: 'agentB' },
  { from: 'route', to: 'agentB' },
  { from: 'route', to: 'agentC' },
  { from: 'agentA', to: 'reviewA' },
  { from: 'agentB', to: 'reviewA' },
  { from: 'agentB', to: 'reviewB' },
  { from: 'agentC', to: 'reviewB' },
  { from: 'reviewA', to: 'merge' },
  { from: 'reviewB', to: 'merge' },
  { from: 'merge', to: 'outcome' },
]

const getFlowNode = (id) => FLOW_NODES.find(node => node.id === id)

const AgentAvatar = ({ color = '#5B5FE3', size = 44 }) => (
  <svg viewBox="0 0 52 58" width={size} height={size} aria-hidden="true">
    <ellipse cx="26" cy="53" rx="17" ry="4.4" fill="#172033" opacity="0.08" />
    <path d="M16 51c1-8 4.3-12 10-12s9 4 10 12H16z" fill={color} opacity="0.7" />
    <path d="M17 42c-3.4-1-5.5-3.1-6.2-6.2" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.75" />
    <path d="M35 42c3.4-1 5.5-3.1 6.2-6.2" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.75" />
    <rect x="12" y="12" width="28" height="25" rx="11" fill="#fff" />
    <rect x="16" y="16" width="20" height="15" rx="7.5" fill={color} />
    <path d="M26 12V7" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="26" cy="6" r="2.2" fill="#FF5A8A" />
    <circle cx="22" cy="23" r="1.4" fill="#fff" />
    <circle cx="30" cy="23" r="1.4" fill="#fff" />
    <path d="M22.6 27c2 1.3 4.8 1.3 6.8 0" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M40 12.8l1-2.1 1 2.1 2.1.8-2.1 1-1 2.1-1-2.1-2.1-1 2.1-.8z" fill="#10B981" />
    <path d="M9.4 20l.8-1.6.8 1.6 1.6.7-1.6.8-.8 1.6-.8-1.6-1.6-.8 1.6-.7z" fill="#F59E0B" />
  </svg>
)

const FlowNodeCard = ({ node, index, visible, active, assigned, completeState, confirming }) => (
  <div className="absolute" style={{
    left: node.x,
    top: node.y,
    width: node.w,
    height: node.h,
    opacity: visible ? 1 : 0,
    transform: visible
      ? `translateY(0) scale(${active ? 1.03 : 1})`
      : 'translateY(18px) scale(0.9)',
    transition: 'opacity 0.5s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)',
    zIndex: 10 + index,
  }}>
    <div style={{
      position: 'absolute',
      left: 10,
      top: node.h + 8,
      width: node.w - 8,
      height: 14,
      borderRadius: '50%',
      background: node.color,
      opacity: completeState === 'confirmed' ? 0.24 : active ? 0.2 : 0.1,
      filter: 'blur(12px)',
      transform: 'translate(10px, 4px)',
    }} />
    <div className="relative flex h-full items-center overflow-hidden rounded-[14px] border px-3 shadow-[10px_18px_34px_rgba(38,45,64,0.13)] backdrop-blur" style={{
      background: completeState === 'confirmed' ? '#10b981' : 'rgba(255,255,255,0.86)',
      borderColor: active ? `${node.color}88` : completeState === 'confirmed' ? '#10b98166' : completeState === 'agentDone' ? '#2563eb66' : 'rgba(148,163,184,0.35)',
      boxShadow: active
        ? `0 0 0 3px ${node.color}16, 12px 20px 38px rgba(38,45,64,0.16)`
        : completeState === 'confirmed'
          ? '0 0 0 3px rgba(16,185,129,0.10), 12px 20px 38px rgba(38,45,64,0.13)'
          : completeState === 'agentDone'
            ? '0 0 0 3px rgba(37,99,235,0.10), 12px 20px 38px rgba(38,45,64,0.13)'
          : '10px 18px 34px rgba(38,45,64,0.12)',
    }}>
      <span className="absolute left-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full" style={{ background: completeState === 'confirmed' ? 'white' : completeState === 'agentDone' ? '#2563EB' : node.color, opacity: completeState === 'confirmed' ? 0.9 : 1 }} />
      <span className="ml-5 h-2 w-[36%] rounded-full" style={{ background: completeState === 'confirmed' ? 'white' : node.color, opacity: completeState === 'confirmed' ? 0.72 : 0.4 }} />
      <span className="ml-2 h-2 w-[15%] rounded-full" style={{ background: completeState === 'confirmed' ? 'white' : node.color, opacity: completeState === 'confirmed' ? 0.42 : 0.2 }} />
      {assigned && (
        <span className="absolute right-1 top-1/2 -translate-y-1/2">
          <AgentAvatar color={completeState === 'confirmed' ? '#059669' : AGENT_BENCH[index % AGENT_BENCH.length].color} size={32} />
        </span>
      )}
      <span className="absolute inset-x-3 bottom-1.5 h-px opacity-25" style={{ background: completeState === 'confirmed' ? 'rgba(255,255,255,0.8)' : `linear-gradient(90deg, transparent, ${node.color}, transparent)` }} />
      {completeState === 'agentDone' && (
        <span className="absolute right-10 rounded-md bg-[#EFF6FF] px-1.5 py-0.5 text-[8px] font-black text-[#2563EB]">DONE</span>
      )}
    </div>
    {confirming && (
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-1.5 py-1 shadow-[0_12px_28px_rgba(38,45,64,0.14)] backdrop-blur" style={{
        top: node.h + 10,
        transform: 'translateX(-50%)',
      }}>
        <span className="rounded-full bg-[#10b981] px-2 py-0.5 text-[9px] font-black text-white">Confirm</span>
        <span className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[9px] font-black text-[#64748B]">Redo</span>
      </div>
    )}
  </div>
)

const FlowConnection = ({ edge, visible, active, completed }) => {
  const from = getFlowNode(edge.from)
  const to = getFlowNode(edge.to)
  if (!from || !to || !visible) return null

  const sx = from.x + from.w
  const sy = from.y + from.h / 2
  const ex = to.x
  const ey = to.y + to.h / 2
  const curve = Math.max(36, Math.abs(ex - sx) * 0.35)
  const d = `M ${sx} ${sy} C ${sx + curve} ${sy}, ${ex - curve} ${ey}, ${ex} ${ey}`
  const stroke = completed ? '#2563EB' : active ? '#3B82F6' : '#CBD5E1'

  return (
    <g>
      {(active || completed) && (
        <path
          d={d}
          fill="none"
          stroke={completed ? '#2563EB' : '#60A5FA'}
          strokeWidth="8"
          strokeLinecap="round"
          opacity={completed ? 0.1 : 0.14}
        />
      )}
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={active || completed ? 2.2 : 1.2}
        strokeLinecap="round"
        opacity={active || completed ? 0.92 : 0.5}
        strokeDasharray={active && !completed ? '8 8' : 'none'}
      />
      {active && !completed && (
        <path d={d} fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="8 8" opacity="0.75">
          <animate attributeName="stroke-dashoffset" from="32" to="0" dur="0.9s" repeatCount="indefinite" />
        </path>
      )}
    </g>
  )
}

const StepProgress = ({ activeStep }) => (
  <div className="absolute bottom-0 left-1/2 z-40 grid w-[min(620px,92vw)] -translate-x-1/2 grid-cols-3 gap-2">
    {FLOW_STEPS.map((step, idx) => {
      const active = idx === activeStep
      const done = idx < activeStep
      return (
        <div key={step.id} className="relative overflow-hidden rounded-2xl border bg-white/75 px-3.5 py-3 shadow-[0_14px_36px_rgba(38,45,64,0.08)] backdrop-blur" style={{
          borderColor: active ? 'rgba(91,95,227,0.32)' : done ? 'rgba(16,185,129,0.28)' : 'rgba(226,232,240,0.9)',
        }}>
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-[#E8ECF4]">
            <div className="h-full rounded-full transition-all duration-500" style={{
              width: active || done ? '100%' : '24%',
              background: done ? '#10b981' : active ? 'linear-gradient(90deg, #5B5FE3, #A78BFA)' : '#CBD5E1',
            }} />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-black uppercase tracking-[0.16em]" style={{ color: active ? '#5B5FE3' : done ? '#059669' : '#94A3B8' }}>0{idx + 1}</span>
            <span className="truncate text-[10px] font-black uppercase tracking-[0.08em] text-[#172033]">{step.label}</span>
          </div>
        </div>
      )
    })}
  </div>
)

const GameWorkflowBoard = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(current => {
        const maxFrame = activeStep === 0 ? FLOW_NODES.length - 1 : activeStep === 1 ? 1 : FLOW_NODES.length * 2
        if (current < maxFrame) return current + 1
        setActiveStep(step => (step + 1) % FLOW_STEPS.length)
        return 0
      })
    }, activeStep === 2 ? 620 : 720)
    return () => clearInterval(timer)
  }, [activeStep])

  const visibleNodeCount = activeStep === 0 ? frame + 1 : FLOW_NODES.length
  const assignedNodeCount = activeStep >= 1 ? FLOW_NODES.length : 0
  const currentDeliverIndex = Math.floor(frame / 2)
  const confirmedNodeCount = activeStep === 2 ? Math.min(currentDeliverIndex, FLOW_NODES.length) : 0
  const agentDoneNodeIndex = activeStep === 2 && frame % 2 === 0 && currentDeliverIndex < FLOW_NODES.length ? currentDeliverIndex : -1
  const confirmingNodeIndex = activeStep === 2 && frame % 2 === 1 && currentDeliverIndex < FLOW_NODES.length ? currentDeliverIndex : -1

  return (
    <div className="relative w-full select-none overflow-visible" style={{ height: FLOW_BOARD_H }}>
      <div className="absolute left-1/2 top-[45%]" style={{
        width: FLOW_BOARD_W,
        height: 330,
        transform: 'translate(-50%, -50%) scale(0.68)',
      }}>
        <svg className="absolute inset-0 overflow-visible" viewBox={`0 0 ${FLOW_BOARD_W + 100} 330`} width={FLOW_BOARD_W + 100} height="330">
          {FLOW_EDGES.map((edge) => {
            const fromIdx = FLOW_NODES.findIndex(node => node.id === edge.from)
            const toIdx = FLOW_NODES.findIndex(node => node.id === edge.to)
            const visible = activeStep === 0 ? toIdx < visibleNodeCount && fromIdx < visibleNodeCount : true
            const deliverIndex = Math.floor(frame / 2)
            const active = activeStep === 0
              ? toIdx === frame
              : activeStep === 2 && toIdx === Math.max(1, deliverIndex)
            const edgeCompleted = activeStep === 2 && toIdx < confirmedNodeCount
            return <FlowConnection key={`${edge.from}-${edge.to}`} edge={edge} visible={visible} active={active} completed={edgeCompleted} />
          })}
        </svg>

        {FLOW_NODES.map((node, idx) => (
          <FlowNodeCard
            key={node.id}
            node={node}
            index={idx}
            visible={idx < visibleNodeCount}
            active={(activeStep === 0 && idx === frame) || (activeStep === 1 && assignedNodeCount === FLOW_NODES.length)}
            assigned={idx < assignedNodeCount}
            completeState={idx < confirmedNodeCount ? 'confirmed' : idx === agentDoneNodeIndex ? 'agentDone' : null}
            confirming={idx === confirmingNodeIndex}
          />
        ))}
      </div>

      <StepProgress activeStep={activeStep} />
    </div>
  )
}

export default MeegleHomepage
