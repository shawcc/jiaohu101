import React, { useState } from 'react'
import {
  Users,
  Settings,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Download,
  Box,
  Cpu,
  Zap,
  HelpCircle,
  Clock,
  FileText,
  Sparkles,
  Calendar
} from 'lucide-react'

const SHARED_QUOTAS = {
  free: {
    title: 'AI 免费用量',
    periodUsed: 8600,
    periodTotal: 20000,
    unit: '点'
  },
  paid: {
    title: 'AI 付费用量',
    monthUsed: 1200,
    monthLimit: 10000,
    unit: '点'
  }
}

const OFFICIAL_PRODUCTS = [
  {
    id: 'o_report',
    name: 'AI 周报',
    status: '正式',
    expiry: '2026-09-09',
    icon: <FileText className="text-white" size={20} />,
    iconBg: 'bg-blue-500',
    unit: '点',
    monthUsed: 3200,
    totalUsed: 68000
  },
  {
    id: 'o_hr',
    name: 'AI 人力分析',
    status: '正式',
    expiry: '2026-09-09',
    icon: <Users className="text-white" size={20} />,
    iconBg: 'bg-indigo-500',
    unit: '点',
    monthUsed: 1800,
    totalUsed: 25000
  },
  {
    id: 'o_field',
    name: 'AI 字段',
    status: '正式',
    expiry: '2026-09-09',
    icon: <Sparkles className="text-white" size={20} />,
    iconBg: 'bg-emerald-500',
    unit: '点',
    monthUsed: 3600,
    totalUsed: 98000
  }
]

const NODE_PRODUCTS_OFFICIAL = [
  {
    id: 'n_prd',
    name: 'AI PRD',
    status: '正式',
    expiry: '2026-09-09',
    icon: <Box className="text-white" size={20} />,
    iconBg: 'bg-sky-500',
    sourceType: '飞书项目',
    usageGroups: [
      { label: '免费配额', used: 120, total: 500, unit: '次', type: 'free' },
      {
        label: '付费配额',
        used: 600,
        total: 2000,
        unit: '次',
        type: 'paid',
        annotation: '基础版'
      }
    ]
  }
]

const NODE_PRODUCTS_ISV = [
  {
    id: 'n_case',
    name: 'AI 用例',
    status: '正式',
    expiry: '2026-09-09',
    icon: <Cpu className="text-white" size={20} />,
    iconBg: 'bg-purple-500',
    isvName: '飞书伙伴·霓虹AI',
    aiPackageTag: '飞书AI包',
    usageGroups: [
      { label: '免费额度', used: 20000, total: 20000, unit: '点', type: 'free' },
      { label: '付费额度', used: 4500, total: 50000, unit: '点', type: 'paid' }
    ]
  },
  {
    id: 'n_release',
    name: 'AI ReleaseNote',
    status: '正式',
    expiry: '2026-09-09',
    icon: <FileText className="text-white" size={20} />,
    iconBg: 'bg-amber-500',
    isvName: '灵感工坊',
    usageGroups: [
      { label: '免费配额', used: 5, total: 10, unit: '次', type: 'free' },
      {
        label: '付费配额',
        used: 0,
        total: 0,
        unit: '次',
        type: 'paid',
        emptyMsg: '未购买'
      }
    ]
  }
]

const LOGS_DATA = [
  {
    id: 1,
    name: 'AI PRD',
    desc: '根据PRD模板自动生成文档数据',
    time: '2026-09-09 21:06:03',
    operator: '李天天',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Li',
    equity: '付费配额 (基础版)',
    equityColor: 'bg-blue-100 text-blue-700',
    usage: '1 次',
    remark: '无'
  },
  {
    id: 2,
    name: 'AI 用例',
    desc: '执行异常路径测试用例生成',
    time: '2026-09-09 20:15:22',
    operator: '张敏',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',
    equity: 'AI 免费额度',
    equityColor: 'bg-red-100 text-red-700',
    usage: '450 点',
    remark: '无'
  }
]

const AiUsageDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeMenu, setActiveMenu] = useState('AI用量')

  const menuGroups = [
    { title: '组织架构', items: ['成员管理', '团队管理'], icon: <Users size={18} /> },
    {
      title: '费用中心',
      items: ['资产与席位', '权益用量', 'AI用量', '订单管理'],
      icon: <CreditCard size={18} />,
      expanded: true
    },
    { title: '企业设置', items: ['企业信息', '功能设置'], icon: <Settings size={18} /> },
    { title: '安全合规', items: ['安全设置', '管理员日志'], icon: <ShieldCheck size={18} /> }
  ]

  const ProgressBar = ({ used, total, unit, label, type, annotation, emptyMsg }) => {
    const isNoBusiness = total === 0
    const percent = isNoBusiness ? 0 : Math.min((used / total) * 100, 100)
    const barColor =
      percent >= 100 ? 'bg-[#F54A45]' : type === 'paid' ? 'bg-[#3370FF]' : 'bg-[#00B42A]'

    return (
      <div className="py-2.5 first:pt-0 last:pb-0">
        <div className="flex justify-between items-center mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#646A73] font-medium">{label}</span>
            {annotation && (
              <span className="text-[9px] px-1 bg-[#F2F3F5] text-[#646A73] rounded font-medium">
                {annotation}
              </span>
            )}
          </div>
          <span className="text-xs font-bold font-mono">
            {isNoBusiness ? (
              <span className="text-[#8F959E] font-normal text-[10px]">{emptyMsg}</span>
            ) : (
              <>
                {used.toLocaleString()}{' '}
                <span className="text-[#8F959E] font-normal text-[10px]">
                  / {total.toLocaleString()} {unit}
                </span>
              </>
            )}
          </span>
        </div>
        <div className="w-full h-1.5 bg-[#F2F3F5] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              isNoBusiness ? 'bg-transparent border border-dashed border-gray-200' : barColor
            }`}
            style={{ width: `${isNoBusiness ? 100 : percent}%` }}
          />
        </div>
      </div>
    )
  }

  const formatNumber = (n) => {
    if (typeof n !== 'number') return String(n ?? '')
    return n.toLocaleString()
  }

  const MetricCard = ({ title, iconBg, icon, value, subLabel }) => {
    return (
      <div className="bg-white border border-[#DEE0E3] rounded-xl p-4 flex items-start gap-3">
        <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] text-[#646A73] font-bold">{title}</div>
          <div className="text-[18px] font-extrabold text-[#1F2329] mt-1 leading-none">
            {value}
          </div>
          {subLabel ? (
            <div className="text-[11px] text-[#8F959E] font-medium mt-2">{subLabel}</div>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-[#F5F6F7] text-[#1F2329] font-sans overflow-hidden">
      <aside className="w-64 bg-white border-r border-[#DEE0E3] flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-[#DEE0E3] flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs shadow-sm">
            飞书
          </div>
          <span className="font-bold text-sm">企业管理后台</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="mb-2">
              <div className="px-5 py-2 flex items-center justify-between text-[#8F959E] hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2.5 text-sm">
                  {group.icon}
                  <span>{group.title}</span>
                </div>
                {group.items.length > 0 && (
                  <ChevronDown size={14} className={group.expanded ? '' : '-rotate-90'} />
                )}
              </div>
              {group.expanded && (
                <div className="mt-1">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      onClick={() => setActiveMenu(item)}
                      className={`pl-12 pr-4 py-2 text-sm cursor-pointer transition-colors ${
                        activeMenu === item
                          ? 'bg-[#EBF2FF] text-[#3370FF] font-medium border-r-[3px] border-[#3370FF]'
                          : 'text-[#1F2329] hover:bg-gray-100'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-[#DEE0E3] flex items-center px-6 justify-between flex-shrink-0 z-10">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-base">AI 用量管理</h2>
            <HelpCircle size={16} className="text-[#8F959E] cursor-pointer" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100 cursor-pointer">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="user" />
          </div>
        </header>

        <div className="bg-white px-6 border-b border-[#DEE0E3] flex-shrink-0">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 text-sm font-medium border-b-2 transition-all ${
                activeTab === 'overview'
                  ? 'border-[#3370FF] text-[#3370FF]'
                  : 'border-transparent text-[#646A73] hover:text-[#1F2329]'
              }`}
            >
              用量概览
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`py-3 text-sm font-medium border-b-2 transition-all ${
                activeTab === 'logs'
                  ? 'border-[#3370FF] text-[#3370FF]'
                  : 'border-transparent text-[#646A73] hover:text-[#1F2329]'
              }`}
            >
              消耗明细
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard
                  title={SHARED_QUOTAS.free.title}
                  iconBg="bg-[#B37FEB]"
                  icon={<Sparkles className="text-white" size={18} />}
                  value={`${formatNumber(SHARED_QUOTAS.free.periodUsed)}/${formatNumber(
                    SHARED_QUOTAS.free.periodTotal
                  )} ${SHARED_QUOTAS.free.unit}`}
                  subLabel="当期已用/当期限额"
                />
                <MetricCard
                  title={SHARED_QUOTAS.paid.title}
                  iconBg="bg-[#9254DE]"
                  icon={<Sparkles className="text-white" size={18} />}
                  value={`${formatNumber(SHARED_QUOTAS.paid.monthUsed)}/${formatNumber(
                    SHARED_QUOTAS.paid.monthLimit
                  )} ${SHARED_QUOTAS.paid.unit}`}
                  subLabel="本月已用/本月上限"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {OFFICIAL_PRODUCTS.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-[#DEE0E3] rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-all"
                  >
                    <div className="p-5 pb-4">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${product.iconBg} rounded-lg flex items-center justify-center`}
                          >
                            {product.icon}
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm">{product.name}</h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#F8F9FA] rounded-lg p-4 min-h-[110px] border border-[#F2F3F5]">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-2">
                            <div className="text-[11px] text-[#646A73] font-bold">
                              本月已用
                            </div>
                            <div className="text-[18px] font-extrabold font-mono">
                              {formatNumber(product.monthUsed)}{' '}
                              <span className="text-[11px] text-[#8F959E] font-medium">
                                {product.unit}
                              </span>
                            </div>
                          </div>
                          <div className="w-px h-12 bg-[#DEE0E3]" />
                          <div className="flex flex-col gap-2">
                            <div className="text-[11px] text-[#646A73] font-bold">
                              累计已用
                            </div>
                            <div className="text-[18px] font-extrabold font-mono">
                              {formatNumber(product.totalUsed)}{' '}
                              <span className="text-[11px] text-[#8F959E] font-medium">
                                {product.unit}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-[11px] text-[#8F959E] font-medium">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#00B42A]" />
                            免费额度
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#3370FF]" />
                            付费额度
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-3 bg-white border-t border-[#F2F3F5] mt-auto flex justify-between items-center text-[11px] text-[#8F959E]">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock size={12} /> 到期日: {product.expiry}
                      </span>
                      <button
                        onClick={() => setActiveTab('logs')}
                        className="text-[#3370FF] font-bold flex items-center gap-0.5 hover:underline"
                      >
                        消耗详情 <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[15px] font-bold text-[#1F2329]">AI 节点</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...NODE_PRODUCTS_OFFICIAL, ...NODE_PRODUCTS_ISV].map((product) => (
                      <div
                        key={product.id}
                        className="bg-white border border-[#DEE0E3] rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-all"
                      >
                        <div className="p-5 pb-4">
                          <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 ${product.iconBg} rounded-lg flex items-center justify-center`}
                              >
                                {product.icon}
                              </div>
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-sm">{product.name}</h4>
                                  {product.sourceType && (
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F2F3F5] text-[#646A73] font-bold">
                                      {product.sourceType}
                                    </span>
                                  )}
                                  {product.aiPackageTag && (
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EBF2FF] text-[#3370FF] font-extrabold">
                                      {product.aiPackageTag}
                                    </span>
                                  )}
                                </div>
                                {product.isvName && (
                                  <span className="text-[10px] text-[#8F959E]">
                                    {product.isvName}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="bg-[#F8F9FA] rounded-lg p-3.5 space-y-1 min-h-[110px] flex flex-col justify-center border border-[#F2F3F5]">
                            {product.usageGroups.map((group, idx) => (
                              <ProgressBar key={idx} {...group} />
                            ))}
                          </div>
                        </div>

                        <div className="px-5 py-3 bg-white border-t border-[#F2F3F5] mt-auto flex justify-between items-center text-[11px] text-[#8F959E]">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock size={12} /> 到期日: {product.expiry}
                          </span>
                          <button
                            onClick={() => setActiveTab('logs')}
                            className="text-[#3370FF] font-bold flex items-center gap-0.5 hover:underline"
                          >
                            消耗详情 <ChevronRight size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#DEE0E3] rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-[#DEE0E3] flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#646A73] font-medium">使用时间</span>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F6F7] border border-[#DEE0E3] rounded-md text-sm cursor-pointer hover:bg-gray-50 transition-colors">
                    <Calendar size={14} className="text-[#8F959E]" />
                    <span className="text-[#1F2329]">2026-03-01 ~ 2026-03-17</span>
                    <ChevronDown size={14} className="text-[#8F959E]" />
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-medium text-[#1F2329] border border-[#DEE0E3] px-4 py-1.5 rounded hover:bg-gray-50 transition-colors shadow-sm">
                  <Download size={14} /> 导出日志
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#F8F9FA] text-[#646A73] text-xs border-b border-[#DEE0E3]">
                      <th className="px-6 py-3 font-medium">应用名称</th>
                      <th className="px-6 py-3 font-medium">使用时间</th>
                      <th className="px-6 py-3 font-medium">操作人</th>
                      <th className="px-6 py-3 font-medium">权益来源</th>
                      <th className="px-6 py-3 font-medium text-right">消耗量</th>
                      <th className="px-6 py-3 font-medium">备注</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2F3F5]">
                    {LOGS_DATA.map((log) => (
                      <tr key={log.id} className="hover:bg-[#F5F7FA] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-[#EBF2FF] flex items-center justify-center text-[#3370FF]">
                              <Zap size={12} />
                            </div>
                            <span className="font-bold text-xs">{log.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#646A73] font-mono">
                          {log.time}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <img
                              src={log.avatar}
                              className="w-4 h-4 rounded-full border border-gray-100"
                              alt="avatar"
                            />
                            <span className="text-[11px] font-medium">{log.operator}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-sm font-medium ${log.equityColor}`}
                          >
                            {log.equity}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-right">
                          {log.usage}
                        </td>
                        <td className="px-6 py-4 text-xs text-[#8F959E]">{log.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-white border-t border-[#DEE0E3] flex justify-between items-center text-xs text-[#8F959E]">
                <span>共计 {LOGS_DATA.length} 条记录</span>
                <div className="flex items-center gap-2">
                  <button
                    className="p-1 border border-[#DEE0E3] rounded disabled:opacity-30"
                    disabled
                  >
                    <ChevronRight size={14} className="rotate-180" />
                  </button>
                  <span className="px-2 font-medium text-[#1F2329]">1 / 1</span>
                  <button className="p-1 border border-[#DEE0E3] rounded hover:bg-gray-50">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default AiUsageDashboard
