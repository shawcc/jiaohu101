import React, { useEffect, useMemo, useState } from 'react'
import BillingManagement from './projects/BillingManagement'
import AiUsageDashboard from './projects/AiUsageDashboard'
import LeadFormExperiment from './projects/LeadFormExperiment'

const projects = [
  {
    id: 'billing-management',
    name: '计费管理系统原型',
    desc: '飞书插件平台计费模式配置',
    component: BillingManagement
  },
  {
    id: 'ai-usage-dashboard',
    name: 'AI 用量管理面板',
    desc: 'AI 用量概览与消耗明细',
    component: AiUsageDashboard
  },
  {
    id: 'lead-form-experiment',
    name: '留资表单优化实验',
    desc: 'A/B 测试四种不同的留资表单设计',
    component: LeadFormExperiment
  }
]

const getProjectById = (id) => projects.find((p) => p.id === id) || null

const App = () => {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const readHash = () => {
      const id = window.location.hash.replace('#', '')
      setActiveId(id || null)
    }
    readHash()
    window.addEventListener('hashchange', readHash)
    return () => window.removeEventListener('hashchange', readHash)
  }, [])

  const activeProject = useMemo(() => getProjectById(activeId), [activeId])

  const handleSelect = (id) => {
    window.location.hash = id
  }

  const handleBack = () => {
    window.location.hash = ''
  }

  if (!activeProject) {
    return (
      <div className="min-h-screen bg-[#f5f6f7] text-[#1F2329] font-sans">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="mb-8">
            <div className="text-2xl font-bold">交互设计项目库</div>
            <div className="text-sm text-[#646A73] mt-2">
              选择一个项目进入原型页面
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleSelect(project.id)}
                className="text-left bg-white border border-[#DEE0E3] rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="text-lg font-bold">{project.name}</div>
                <div className="text-sm text-[#8F959E] mt-2">{project.desc}</div>
                <div className="text-xs text-[#3370FF] mt-4 font-semibold">
                  打开项目 →
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const ActiveComponent = activeProject.component

  return (
    <div className="min-h-screen bg-[#f5f6f7] text-[#1F2329] font-sans">
      <div className="bg-white border-b border-[#DEE0E3]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="text-sm text-[#3370FF] font-semibold hover:underline"
            >
              返回项目列表
            </button>
            <span className="text-sm text-[#8F959E]">/</span>
            <span className="text-sm font-semibold">{activeProject.name}</span>
          </div>
          <div className="flex gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleSelect(project.id)}
                className={`px-3 py-1 rounded text-xs font-semibold border ${
                  project.id === activeProject.id
                    ? 'bg-[#3370FF] text-white border-[#3370FF]'
                    : 'bg-white text-[#646A73] border-[#DEE0E3] hover:bg-[#F5F6F7]'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ActiveComponent />
    </div>
  )
}

export default App
