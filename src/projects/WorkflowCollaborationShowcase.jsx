import React, { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Circle,
  Cpu,
  GitBranch,
  Orbit,
  Sparkles,
  UserRound
} from 'lucide-react'

const STAGES = [
  {
    id: 'intake',
    label: '需求进入',
    short: 'Intake',
    status: 'reviewing',
    human: 'PM',
    agent: 'Parse',
    x: 10,
    y: 54
  },
  {
    id: 'plan',
    label: '技术评审',
    short: 'Plan',
    status: 'co-create',
    human: 'Tech',
    agent: 'Draft',
    x: 29,
    y: 54
  },
  {
    id: 'breakdown',
    label: '任务拆解',
    short: 'Split',
    status: 'co-create',
    human: 'Owner',
    agent: 'Break',
    x: 47,
    y: 54
  },
  {
    id: 'delivery',
    label: '交付推进',
    short: 'Ship',
    status: 'auto-next',
    human: 'Lead',
    agent: 'Drive',
    x: 66,
    y: 54
  },
  {
    id: 'verify',
    label: '完成确认',
    short: 'Done',
    status: 'approved',
    human: 'QA',
    agent: 'Check',
    x: 84,
    y: 54
  }
]

const BRANCHES = [
  { id: 'design', label: 'Design', x: 67, y: 26 },
  { id: 'client', label: 'Client', x: 67, y: 40 },
  { id: 'dev', label: 'Dev', x: 85, y: 26 },
  { id: 'qa', label: 'QA', x: 85, y: 40 },
  { id: 'launch', label: 'Launch', x: 85, y: 68 }
]

const statusClass = {
  reviewing: 'bg-amber-50 text-amber-700 border-amber-200',
  'co-create': 'bg-[#EEF3FF] text-[#315CEC] border-[#C8D5FF]',
  'auto-next': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  approved: 'bg-violet-50 text-violet-700 border-violet-200'
}

const WorkflowNode = ({ stage, isActive, isPassed }) => (
  <div
    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
      isActive ? 'scale-105' : 'scale-100'
    }`}
    style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
  >
    <div
      className={`relative min-w-[148px] rounded-full border px-4 py-2 shadow-sm backdrop-blur ${
        isActive
          ? 'border-[#4C7DFF] bg-white shadow-[0_10px_30px_rgba(76,125,255,0.24)]'
          : isPassed
            ? 'border-[#D8E2FF] bg-[#F8FAFF]'
            : 'border-[#DADDE3] bg-white/92'
      }`}
    >
      {isActive ? (
        <div className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,_rgba(87,125,255,0.18),_transparent_65%)] blur-xl" />
      ) : null}

      <div className="relative flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[12px] font-semibold text-[#1F2329] tracking-wide">{stage.short}</div>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#111827] text-white">
              <UserRound size={11} />
            </span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#5B7CFA] text-white">
              <Bot size={11} />
            </span>
          </div>
        </div>
        <div
          className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-semibold ${
            statusClass[stage.status]
          }`}
        >
          {stage.label}
        </div>
      </div>
    </div>
  </div>
)

const BranchNode = ({ branch, isLit }) => (
  <div
    className="absolute -translate-x-1/2 -translate-y-1/2"
    style={{ left: `${branch.x}%`, top: `${branch.y}%` }}
  >
    <div
      className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-700 ${
        isLit
          ? 'border-[#B9C9FF] bg-[#F4F7FF] text-[#315CEC] shadow-[0_8px_24px_rgba(76,125,255,0.18)]'
          : 'border-[#DADDE3] bg-white text-[#8F959E]'
      }`}
    >
      {branch.label}
    </div>
  </div>
)

const FlowLine = ({ className }) => (
  <div className={`absolute overflow-hidden rounded-full bg-[#E8ECF3] ${className}`}>
    <div className="flow-beam absolute inset-y-0 left-[-28%] w-[28%] rounded-full bg-[linear-gradient(90deg,rgba(90,124,255,0),rgba(90,124,255,0.92),rgba(97,226,255,0.08))]" />
  </div>
)

const WorkflowCollaborationShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % STAGES.length)
    }, 2300)

    return () => window.clearInterval(timer)
  }, [])

  const activeStage = STAGES[activeIndex]
  const passedIds = useMemo(() => STAGES.slice(0, activeIndex).map((stage) => stage.id), [activeIndex])

  return (
    <div className="min-h-[calc(100vh-48px)] bg-[radial-gradient(circle_at_top,_#F3F7FF_0%,_#F7F8FA_42%,_#EEF1F6_100%)] text-[#1F2329]">
      <style>{`
        @keyframes flowBeam {
          0% { transform: translateX(0); opacity: 0; }
          18% { opacity: 1; }
          100% { transform: translateX(460%); opacity: 0; }
        }
        @keyframes pulseRing {
          0% { transform: scale(.96); opacity: .4; }
          75% { transform: scale(1.08); opacity: 0; }
          100% { transform: scale(1.08); opacity: 0; }
        }
        .flow-beam {
          animation: flowBeam 2.4s linear infinite;
        }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 1px solid rgba(76, 125, 255, .35);
          animation: pulseRing 1.8s ease-out infinite;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-8 py-10">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div className="max-w-[640px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D8E2FF] bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#4C6FFF] shadow-sm backdrop-blur">
              <Orbit size={14} />
              Workflow Orchestration
            </div>
            <h1 className="text-[42px] leading-[1.08] font-black tracking-[-0.04em] text-[#111827]">
              一个项目，被拆成一条会自己流动的协作链
            </h1>
            <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-[#5B6472]">
              每个节点都同时连接人和 Agent。人确认，系统自动推进，下一段流程立刻点亮。
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="flex -space-x-2">
              <div className="h-9 w-9 rounded-full border-2 border-white bg-[#0F172A] text-white flex items-center justify-center">
                <UserRound size={16} />
              </div>
              <div className="h-9 w-9 rounded-full border-2 border-white bg-[#5B7CFA] text-white flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="h-9 w-9 rounded-full border-2 border-white bg-[#8B5CF6] text-white flex items-center justify-center">
                <Sparkles size={16} />
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#8F959E]">Human + Agent</div>
              <div className="text-sm font-semibold text-[#111827]">共同产出，自动接力</div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/75 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur">
          <div className="border-b border-[#EEF1F4] px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6157]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="text-sm font-semibold text-[#1F2329]">aria testing deletion</div>
                <div className="rounded-full bg-[#F4F6FA] px-2.5 py-1 text-[11px] text-[#646A73]">
                  Pending Product Initial Review
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-[#646A73]">
                <span className="rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1">UI & UX</span>
                <span className="rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1">
                  Technical
                </span>
                <span className="rounded-full border border-[#D8E2FF] bg-[#F3F7FF] px-2.5 py-1 text-[#315CEC]">
                  AI Analysis
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-[1.8fr_0.92fr] gap-6">
              <div className="rounded-[28px] border border-[#EEF1F4] bg-[linear-gradient(180deg,_rgba(250,251,253,0.96),_rgba(244,247,252,0.96))] p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2329]">
                    <GitBranch size={16} className="text-[#5B7CFA]" />
                    Flow Canvas
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-[11px] text-[#646A73] shadow-sm">
                    Active: {activeStage.label}
                  </div>
                </div>

                <div className="relative h-[460px] overflow-hidden rounded-[24px] border border-[#E8ECF3] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.96),_rgba(243,246,251,0.98))]">
                  <div className="absolute inset-x-[10%] top-[54%] h-px border-t border-dashed border-[#D7DCE6]" />
                  <div className="absolute left-[66%] top-[26%] h-[29%] w-px border-l border-dashed border-[#D7DCE6]" />
                  <div className="absolute left-[66%] top-[40%] h-[14%] w-px border-l border-dashed border-[#D7DCE6]" />
                  <div className="absolute left-[84%] top-[26%] h-[42%] w-px border-l border-dashed border-[#D7DCE6]" />
                  <div className="absolute left-[66%] top-[26%] h-px w-[18%] border-t border-dashed border-[#D7DCE6]" />
                  <div className="absolute left-[66%] top-[40%] h-px w-[18%] border-t border-dashed border-[#D7DCE6]" />
                  <div className="absolute left-[66%] top-[68%] h-px w-[18%] border-t border-dashed border-[#D7DCE6]" />

                  <FlowLine className="left-[12%] top-[53.4%] h-[3px] w-[53%]" />
                  <FlowLine className="left-[67.5%] top-[25.6%] h-[3px] w-[15%]" />
                  <FlowLine className="left-[67.5%] top-[39.6%] h-[3px] w-[15%]" />
                  <FlowLine className="left-[67.5%] top-[67.6%] h-[3px] w-[15%]" />

                  <div className="absolute left-[64.2%] top-[53.6%] -translate-x-1/2 -translate-y-1/2">
                    <div className="pulse-ring relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(76,125,255,0.18)]">
                      <ArrowRight size={16} className="text-[#4C7DFF]" />
                    </div>
                  </div>

                  {STAGES.map((stage, index) => (
                    <WorkflowNode
                      key={stage.id}
                      stage={stage}
                      isActive={index === activeIndex}
                      isPassed={passedIds.includes(stage.id)}
                    />
                  ))}

                  {BRANCHES.map((branch, index) => (
                    <BranchNode
                      key={branch.id}
                      branch={branch}
                      isLit={activeIndex >= 3 && index <= 2 + (activeIndex % 2)}
                    />
                  ))}

                  <div className="absolute inset-x-0 bottom-4 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-2 text-[11px] text-[#646A73] shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
                      <Circle size={10} className="fill-[#5B7CFA] text-[#5B7CFA]" />
                      Human review
                      <Circle size={10} className="fill-[#111827] text-[#111827]" />
                      Agent execution
                      <Circle size={10} className="fill-[#18B26B] text-[#18B26B]" />
                      Auto handoff
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-[28px] border border-[#EEF1F4] bg-[#FCFCFD] p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-[#1F2329]">Node Status</div>
                    <div className="rounded-full border border-[#D8E2FF] bg-[#F4F7FF] px-2.5 py-1 text-[10px] font-semibold text-[#315CEC]">
                      LIVE
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#EDF0F5] bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[12px] text-[#8F959E]">Current</div>
                        <div className="mt-1 text-[22px] font-black tracking-[-0.03em] text-[#111827]">
                          {activeStage.short}
                        </div>
                      </div>
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#E8EEFF,#F5F8FF)] text-[#4C7DFF]">
                        <Cpu size={20} />
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFD] px-3.5 py-3">
                        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F2329]">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#111827] text-white">
                            <UserRound size={14} />
                          </span>
                          {activeStage.human}
                        </div>
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      </div>

                      <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFD] px-3.5 py-3">
                        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F2329]">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5B7CFA] text-white">
                            <Bot size={14} />
                          </span>
                          {activeStage.agent}
                        </div>
                        <Sparkles size={16} className="text-[#5B7CFA]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#E8ECF3] bg-[linear-gradient(135deg,#101828,#1B2545)] p-4 text-white shadow-[0_12px_40px_rgba(15,23,42,0.2)]">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                      Confirmation
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold">Human Confirmed</div>
                        <div className="mt-1 text-[12px] text-white/60">Auto routing to the next node</div>
                      </div>
                      <div className="pulse-ring relative rounded-full bg-[#315CEC] px-4 py-2 text-[11px] font-semibold">
                        Completed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#EEF1F4] bg-white p-5 shadow-sm">
                  <div className="mb-3 text-sm font-semibold text-[#1F2329]">Auto Transition</div>
                  <div className="flex items-center justify-between rounded-2xl bg-[linear-gradient(90deg,#F3F7FF,#FBFCFF)] px-4 py-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#8F959E]">From</div>
                      <div className="mt-1 text-base font-bold text-[#111827]">{activeStage.short}</div>
                    </div>
                    <ArrowRight size={18} className="text-[#4C7DFF]" />
                    <div className="text-right">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[#8F959E]">To</div>
                      <div className="mt-1 text-base font-bold text-[#111827]">
                        {STAGES[(activeIndex + 1) % STAGES.length].short}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-[#EEF1F4] bg-[#FBFCFE] p-3">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8F959E]">1</div>
                      <div className="mt-2 text-[12px] font-semibold text-[#1F2329]">Agent prepares</div>
                    </div>
                    <div className="rounded-2xl border border-[#EEF1F4] bg-[#FBFCFE] p-3">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8F959E]">2</div>
                      <div className="mt-2 text-[12px] font-semibold text-[#1F2329]">Human confirms</div>
                    </div>
                    <div className="rounded-2xl border border-[#EEF1F4] bg-[#FBFCFE] p-3">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8F959E]">3</div>
                      <div className="mt-2 text-[12px] font-semibold text-[#1F2329]">Next node lights up</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowCollaborationShowcase
