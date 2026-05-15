import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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

const AgentCardIllustration = ({ card, isVisible, illustrationVariant = 'v2' }) => {
  if (card.id === 'workflows') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#F4F6FF] to-[#E8EBFF]" style={{ opacity: isVisible ? 1 : 0.4, transition: 'opacity 0.6s ease' }} />
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
  const [typingBubble, setTypingBubble] = useState(null)
  const sectionRef = useRef(null)
  const cycleRef = useRef(null)
  const started = useRef(false)
  const scenesRef = useRef(AI_ASSISTANT_SCENES)

  const selectScene = useCallback((idx) => {
    if (cycleRef.current) clearTimeout(cycleRef.current)
    setActiveIdx(idx)
    setTypingBubble(idx)
    setTimeout(() => setTypingBubble(null), 1800)
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
  const isTyping = typingBubble === activeIdx

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

        {/* Single canvas: product screenshot as background, switchable dialog overlay on left */}
        <div className="relative rounded-[28px] overflow-hidden border border-black/[0.04] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
          <div className="relative w-full" style={{ aspectRatio: '16 / 9', minHeight: 540 }}>
            {AI_ASSISTANT_SCENES.map((scene, idx) => (
              <div
                key={scene.id}
                className={`absolute inset-0 w-full h-full transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gradient-to-br ${scene.gradient}`}
                style={{ opacity: activeIdx === idx ? 0.06 : 0 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${scene.gradient} flex items-center justify-center shadow-lg`} style={{ opacity: 0.25 }}>
                    <span className="text-[28px]">{scene.icon}</span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#B0B8C5] mt-4">Replace with product screenshot</p>
                </div>
              </div>
            ))}

            {/* Switchable dialog overlay: only ONE at a time */}
            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 max-w-[360px] w-[42%]">
              {AI_ASSISTANT_SCENES.map((scene, idx) => (
                <div
                  key={scene.id}
                  className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    position: activeIdx === idx ? 'relative' : 'absolute',
                    inset: activeIdx === idx ? 'auto' : 0,
                    opacity: activeIdx === idx ? 1 : 0,
                    transform: `translateY(${activeIdx === idx ? 0 : (idx > activeIdx ? 16 : -16)}px)`,
                    pointerEvents: activeIdx === idx ? 'auto' : 'none',
                    visibility: activeIdx === idx ? 'visible' : 'hidden'
                  }}
                >
                  {/* User bubble */}
                  <div className="flex justify-end mb-1.5">
                    <div
                      className="rounded-2xl rounded-br-md px-3.5 py-2.5 transition-all duration-500"
                      style={{
                        backgroundColor: scene.color,
                        color: 'white',
                        boxShadow: `0 8px 32px ${scene.color}40`
                      }}
                    >
                      <div className="text-[10px] font-bold mb-0.5 text-white/50">You</div>
                      <div className="text-[12px] leading-[1.5] font-semibold max-w-[240px]">
                        {isTyping ? (
                          <span>
                            {scene.label.substring(0, Math.max(4, Math.floor(scene.label.length * 0.55)))}
                            <span className="inline-flex ml-0.5">...<span className="animate-pulse">.</span></span>
                          </span>
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
                      boxShadow: '0 8px 32px rgba(15,23,42,0.08)'
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
                        <span>
                          {scene.prompt.substring(0, Math.max(6, Math.floor(scene.prompt.length * 0.5)))}
                          <span className="inline-flex ml-0.5">...<span className="animate-pulse">.</span></span>
                        </span>
                      ) : (
                        <div>
                          <div className="font-semibold mb-1" style={{ color: scene.color }}>{scene.label}</div>
                          <span>{scene.prompt}</span>
                          <div className="text-[9px] text-[#B0B8C5] mt-1.5">{scene.desc}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scene label badge */}
            <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.06] px-4 py-2 shadow-sm transition-all duration-500">
              <div className={`h-5 w-5 rounded-full bg-gradient-to-br ${activeScene.gradient} flex items-center justify-center`}>
                <span className="text-[9px]">{activeScene.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-[#111827]">{activeScene.label}</span>
            </div>
          </div>
        </div>

        {/* Scene dots + nav arrows */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => selectScene((activeIdx - 1 + AI_ASSISTANT_SCENES.length) % AI_ASSISTANT_SCENES.length)}
            className="h-7 w-7 rounded-full border border-[#EEF0F4] bg-white flex items-center justify-center hover:bg-[#F4F6FF] transition-colors shadow-sm"
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
            className="h-7 w-7 rounded-full border border-[#EEF0F4] bg-white flex items-center justify-center hover:bg-[#F4F6FF] transition-colors shadow-sm"
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
  const [activeTab, setActiveTab] = useState('planning')
  const [cascadeVariant, setCascadeVariant] = useState('fullbleed')
  const [illustrationVariant, setIllustrationVariant] = useState('v3')
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
                    <div className="rounded-[32px] border border-black/[0.04] bg-white overflow-hidden h-full shadow-[0_16px_60px_rgba(15,23,42,0.04)]">
                      <AgentCardIllustration card={card} isVisible={true} illustrationVariant={illustrationVariant} />
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


/* ============ GAME VERSION — 2.5D Concept Workflow Orchestration ============ */

const FLOW_BOARD_W = 760
const FLOW_BOARD_H = 440
const FLOW_NODE_W = 112
const FLOW_NODE_H = 70

const FLOW_STEPS = [
  { id: 'build', label: 'Build workflow', desc: '构建流程' },
  { id: 'assign', label: 'Assign agents & humans', desc: '分配 Agent 和人' },
  { id: 'deliver', label: 'Collaborate to deliver', desc: '协作完成任务' },
]

const FLOW_HUB = { x: 470, y: 186, w: 210, h: 96 }

const FLOW_NODES = [
  { id: 'brief', label: 'Brief', icon: '✦', color: '#5B5FE3', x: 34,  y: 162, side: 'left' },
  { id: 'research', label: 'Research', icon: '⌕', color: '#F59E0B', x: 194, y: 42, side: 'top' },
  { id: 'design', label: 'Design', icon: '◆', color: '#8B5CF6', x: 264, y: 150, side: 'mid' },
  { id: 'build', label: 'Build', icon: '▰', color: '#3EAB6E', x: 184, y: 280, side: 'bottom' },
  { id: 'review', label: 'Review', icon: '✓', color: '#EC4899', x: 344, y: 70, side: 'top' },
]

const HUMAN_PALETTE = ['#E5E7EB', '#FDE68A', '#BFDBFE', '#FBCFE8', '#BBF7D0']

const BoardAgentIcon = ({ color, type = 'agent', size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    {type === 'human' ? (
      <>
        <circle cx="12" cy="7" r="4.5" fill={color} />
        <path d="M5.5 20c.8-4 3.2-6 6.5-6s5.7 2 6.5 6" fill={color} opacity="0.75" />
        <circle cx="10.5" cy="6.6" r="0.65" fill="#0A0A14" />
        <circle cx="13.5" cy="6.6" r="0.65" fill="#0A0A14" />
      </>
    ) : (
      <>
        <rect x="6" y="5" width="12" height="10" rx="5" fill={color} opacity="0.92" />
        <path d="M12 5V2.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="2.2" r="1.2" fill={color} />
        <rect x="8" y="14" width="8" height="5" rx="2.5" fill={color} opacity="0.62" />
        <circle cx="10" cy="9" r="0.8" fill="white" />
        <circle cx="14" cy="9" r="0.8" fill="white" />
      </>
    )}
  </svg>
)

const ConceptNode = ({ node, idx, activeStep }) => {
  const assigned = activeStep >= 1
  const completed = activeStep === 2
  const agent = AGENT_BENCH[idx % AGENT_BENCH.length]
  const humanColor = HUMAN_PALETTE[idx % HUMAN_PALETTE.length]

  return (
    <div className="absolute" style={{
      left: node.x,
      top: node.y,
      width: FLOW_NODE_W,
      height: FLOW_NODE_H,
      transform: activeStep === 0 ? `translateZ(${idx * 2}px)` : activeStep === 1 ? 'translateZ(14px)' : 'translateZ(18px)',
      transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease',
      opacity: activeStep === 0 ? 0.86 + idx * 0.025 : 1,
      zIndex: 5 + idx,
    }}>
      <div style={{
        position: 'absolute',
        left: 12,
        top: FLOW_NODE_H + 8,
        width: FLOW_NODE_W - 14,
        height: 18,
        borderRadius: '50%',
        background: node.color,
        opacity: completed ? 0.28 : assigned ? 0.2 : 0.12,
        filter: 'blur(13px)',
        transform: 'translate(8px, 4px)',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 14,
        overflow: 'hidden',
        background: completed
          ? `linear-gradient(180deg, ${node.color}22 0%, #10151a 100%)`
          : 'linear-gradient(180deg, #1b1d26 0%, #101118 100%)',
        border: `1px solid ${completed ? '#34d39966' : `${node.color}55`}`,
        boxShadow: completed
          ? `0 0 22px ${node.color}22, 10px 18px 34px rgba(0,0,0,0.55)`
          : `8px 14px 28px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.08)`,
      }}>
        <div style={{ height: 5, background: `linear-gradient(90deg, ${node.color}, ${node.color}aa)` }} />
        <div className="flex h-[65px] items-center gap-2.5 px-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[15px] font-black" style={{
            color: node.color,
            background: `${node.color}18`,
            boxShadow: `inset 0 0 0 1px ${node.color}22`,
          }}>
            {node.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[12px] font-bold text-white/90">{node.label}</div>
            <div className="mt-0.5 text-[9px] font-semibold text-white/28">
              {completed ? 'Done' : assigned ? 'Agent + Human' : 'Workflow node'}
            </div>
          </div>
          {completed && (
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.35)]">
              <svg viewBox="0 0 10 10" width="9" height="9">
                <path d="M2 5l2 2L8 3" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {assigned && (
        <div className="absolute -right-2 -top-5 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0b0c12]/90 px-1.5 py-1 shadow-[0_8px_18px_rgba(0,0,0,0.35)]" style={{
          animation: 'bounceIn 0.45s cubic-bezier(0.16,1,0.3,1) both',
          animationDelay: `${idx * 0.06}s`,
        }}>
          <BoardAgentIcon color={agent.color} size={17} />
          <BoardAgentIcon color={humanColor} type="human" size={16} />
        </div>
      )}
    </div>
  )
}

const HubCard = ({ activeStep }) => {
  const completed = activeStep === 2
  return (
    <div className="absolute" style={{
      left: FLOW_HUB.x,
      top: FLOW_HUB.y,
      width: FLOW_HUB.w,
      height: FLOW_HUB.h,
      transform: completed ? 'translateZ(26px)' : 'translateZ(16px)',
      zIndex: 30,
      transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <div style={{
        position: 'absolute',
        left: 18,
        top: FLOW_HUB.h + 10,
        width: FLOW_HUB.w - 20,
        height: 24,
        borderRadius: '50%',
        background: completed ? '#10b981' : '#5B5FE3',
        opacity: completed ? 0.24 : 0.18,
        filter: 'blur(18px)',
        transform: 'translate(16px, 4px)',
      }} />
      <div className="relative h-full overflow-hidden rounded-[18px] border bg-[#151520] px-6 py-5" style={{
        borderColor: completed ? '#34d39977' : '#8B5CF688',
        boxShadow: completed
          ? '0 0 34px rgba(16,185,129,0.18), 14px 24px 42px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '14px 24px 42px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}>
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#5B5FE3] via-[#8B5CF6] to-[#06B6D4]" />
        <div className="flex h-full items-center gap-4">
          <div className="grid grid-cols-2 gap-1.5">
            {['#5B5FE3', '#06B6D4', '#8B5CF6', '#3EAB6E'].map((c, i) => (
              <span key={c} className="block h-4 w-7 rounded-[5px]" style={{ background: c, opacity: completed || i < activeStep + 2 ? 0.95 : 0.35 }} />
            ))}
          </div>
          <div>
            <div className="text-[24px] font-semibold tracking-[-0.04em] text-white">Meegle</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
              Orchestrated delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WorkflowArc = ({ node, idx, activeStep }) => {
  const sx = node.x + FLOW_NODE_W
  const sy = node.y + FLOW_NODE_H / 2
  const ex = FLOW_HUB.x + 30
  const ey = FLOW_HUB.y + FLOW_HUB.h / 2
  const curve = node.side === 'top' ? -70 : node.side === 'bottom' ? 70 : 0
  const midX = sx + (ex - sx) * 0.48
  const d = `M ${sx} ${sy} C ${midX} ${sy + curve}, ${midX + 20} ${ey + curve}, ${ex} ${ey}`
  const bright = activeStep >= 1 || activeStep === 2
  const pulse = activeStep === 2
  const color = bright ? '#3B82F6' : 'rgba(59,130,246,0.38)'

  return (
    <g opacity={activeStep === 0 ? 0.55 : 1}>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={bright ? 2.6 : 1.6}
        strokeLinecap="round"
        strokeDasharray={activeStep === 0 ? '7 7' : 'none'}
        opacity={bright ? 0.95 : 0.5}
      />
      {activeStep === 0 && (
        <path d={d} fill="none" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="7 7" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="28" to="0" dur="1s" repeatCount="indefinite" />
        </path>
      )}
      {pulse && (
        <circle r="4" fill="#93C5FD">
          <animateMotion dur={`${1.2 + idx * 0.08}s`} repeatCount="indefinite" path={d} />
          <animate attributeName="opacity" values="0;1;0" dur={`${1.2 + idx * 0.08}s`} repeatCount="indefinite" />
        </circle>
      )}
      <circle cx={sx} cy={sy} r="4.5" fill="#93C5FD" stroke="#0b0c12" strokeWidth="2" />
      <circle cx={ex} cy={ey} r="5" fill="#93C5FD" stroke="#0b0c12" strokeWidth="2" />
    </g>
  )
}

const StepProgress = ({ activeStep }) => (
  <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/10 bg-[#090a10]/80 px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur">
    {FLOW_STEPS.map((step, idx) => {
      const active = idx === activeStep
      const done = idx < activeStep
      return (
        <div key={step.id} className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl px-2.5 py-1.5" style={{
            background: active ? 'rgba(91,95,227,0.18)' : done ? 'rgba(16,185,129,0.12)' : 'transparent',
            color: active ? '#C4B5FD' : done ? '#6EE7B7' : 'rgba(255,255,255,0.34)',
          }}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black" style={{
              background: active ? '#5B5FE3' : done ? '#10b981' : 'rgba(255,255,255,0.08)',
              color: '#fff',
            }}>{idx + 1}</span>
            <span className="hidden text-[10px] font-bold sm:inline">{step.desc}</span>
          </div>
          {idx < FLOW_STEPS.length - 1 && <span className="h-px w-5 bg-white/10" />}
        </div>
      )
    })}
  </div>
)

const GameWorkflowBoard = () => {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(step => (step + 1) % FLOW_STEPS.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full select-none overflow-hidden rounded-[28px] border border-white/5 bg-[#030306]" style={{ height: FLOW_BOARD_H, perspective: '1100px', perspectiveOrigin: '58% 18%' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_46%,rgba(91,95,227,0.16),transparent_34%),radial-gradient(circle_at_26%_70%,rgba(59,130,246,0.10),transparent_30%)]" />
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

      <div className="absolute left-1/2 top-[42%]" style={{
        width: FLOW_BOARD_W,
        height: 360,
        transform: 'translate(-50%, -50%) rotateX(52deg) rotateZ(-8deg) scale(0.88)',
        transformStyle: 'preserve-3d',
      }}>
        <div className="absolute inset-x-10 top-12 bottom-4 rounded-[40px] bg-white/[0.025] blur-[1px]" />
        <svg className="absolute inset-0 overflow-visible" viewBox={`0 0 ${FLOW_BOARD_W} 360`} width={FLOW_BOARD_W} height="360">
          {FLOW_NODES.map((node, idx) => <WorkflowArc key={node.id} node={node} idx={idx} activeStep={activeStep} />)}
        </svg>
        {FLOW_NODES.map((node, idx) => <ConceptNode key={node.id} node={node} idx={idx} activeStep={activeStep} />)}
        <HubCard activeStep={activeStep} />
      </div>

      <div className="absolute left-6 top-5 z-40 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Concept flow</div>
        <div className="mt-1 text-[13px] font-bold text-white/80">{FLOW_STEPS[activeStep].label}</div>
      </div>

      <StepProgress activeStep={activeStep} />
    </div>
  )
}

export default MeegleHomepage
