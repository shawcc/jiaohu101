import React, { useState, useMemo } from 'react'
import {
  Plus,
  ChevronDown,
  Globe,
  Zap,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Info,
  Package,
  Send,
  HelpCircle,
  Clock,
  BarChart3,
  ArrowRightLeft
} from 'lucide-react'

const BillingManagement = () => {
  const [designVersion, setDesignVersion] = useState('v2')
  const [activeMode, setActiveMode] = useState('edition')
  const [showSwitchWarning, setShowSwitchWarning] = useState(false)
  const [aiRatio, setAiRatio] = useState('10')
  const [trialConfig, setTrialConfig] = useState({
    enabled: true,
    name: '7天免费试用旗舰版',
    targetId: 'p_ultimate',
    duration: '7',
    usage: '1000'
  })
  const [priceDescription, setPriceDescription] = useState('')

  const editionPlans = [
    {
      id: 'p_ultimate',
      name: '旗舰版',
      idStr: 'price_a727dc32deb3900b',
      mode: '按年付费',
      quota: '100000',
      price: '5000.00'
    }
  ]

  const aiPlans = [
    {
      id: 'a_standard',
      name: '飞书AI包',
      idStr: 'price_ai_package_default',
      mode: '按量购买',
      quota: '-',
      price: '-'
    }
  ]

  const currentPlans = useMemo(
    () => (activeMode === 'edition' ? editionPlans : aiPlans),
    [activeMode]
  )

  const handleModeSwitch = (mode) => {
    if (mode === activeMode) return
    if (currentPlans.length > 0) {
      setShowSwitchWarning(mode)
    } else {
      performSwitch(mode)
    }
  }

  const performSwitch = (mode) => {
    setActiveMode(mode)
    if (mode === 'ai') {
      setTrialConfig((prev) => ({
        ...prev,
        targetId: 'a_standard',
        name: '免费试用 AI 包'
      }))
    } else {
      setTrialConfig((prev) => ({
        ...prev,
        targetId: 'p_ultimate',
        name: '7天免费试用旗舰版'
      }))
    }
    setShowSwitchWarning(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f6f7] flex flex-col text-[#1F2329] font-sans">
      <header className="h-12 bg-white border-b border-[#dee0e3] flex items-center justify-between px-4 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#3370ff] rounded flex items-center justify-center text-white font-bold text-xs">
            A
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">群助手</span>
            <span className="px-1.5 py-0.5 bg-[#eff0f1] text-[#646a73] text-[10px] rounded font-medium">
              企业
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-[#ff9900] font-medium ml-1">
              <span className="w-1.5 h-1.5 bg-[#ff9900] rounded-full"></span>{' '}
              未上架
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#646a73] text-[11px]">
            <Info size={14} className="text-[#3370ff]" />
            <span>修改需随AI节点版本发布生效，请前往 插件发布 创建版本</span>
            <a href="#" className="text-[#3370ff] hover:underline ml-1">
              去发布
            </a>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-[#dee0e3]">
            <div className="w-full h-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-500 font-bold tracking-tighter">
              Avatar
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-56 bg-white border-r border-[#dee0e3] flex flex-col py-4 shrink-0 overflow-y-auto font-medium">
          <div className="px-6 mb-3 text-[11px] font-bold text-[#8f959e] uppercase tracking-wider">
            开发
          </div>
          <nav className="space-y-0.5 px-3 text-[13px]">
            {['基本信息', '插件功能', '权限管理', '云工程'].map((label, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-3 py-2 rounded text-[#1f2329] hover:bg-[#f2f3f5] cursor-pointer transition-colors"
              >
                <span className="text-[#646a73]">
                  <Package size={16} />
                </span>{' '}
                {label}
              </div>
            ))}
          </nav>
          <div className="px-6 mt-6 mb-3 text-[11px] font-bold text-[#8f959e] uppercase tracking-wider">
            管理
          </div>
          <nav className="space-y-0.5 px-3 text-[13px]">
            <div className="flex items-center gap-3 px-3 py-2 rounded text-[#1f2329] hover:bg-[#f2f3f5] cursor-pointer">
              <Send size={16} className="text-[#646a73]" /> 插件发布
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded bg-[#e8f0ff] text-[#3370ff] font-bold cursor-pointer">
              <Zap size={16} /> 付费管理
            </div>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-8 relative bg-[#f5f6f7]">
          <div className="absolute top-8 right-10 z-10 flex bg-white border border-[#dee0e3] p-1 rounded shadow-md scale-90 origin-right transition-all hover:shadow-lg">
            <button
              onClick={() => setDesignVersion('v1')}
              className={`px-4 py-1 text-[11px] rounded transition-all ${
                designVersion === 'v1'
                  ? 'bg-[#3370ff] text-white font-bold'
                  : 'text-[#8f959e] hover:bg-gray-50'
              }`}
            >
              方案一
            </button>
            <button
              onClick={() => setDesignVersion('v2')}
              className={`px-4 py-1 text-[11px] rounded transition-all ${
                designVersion === 'v2'
                  ? 'bg-[#3370ff] text-white font-bold'
                  : 'text-[#8f959e] hover:bg-gray-50'
              }`}
            >
              方案二
            </button>
            <button
              onClick={() => setDesignVersion('v3')}
              className={`px-4 py-1 text-[11px] rounded transition-all ${
                designVersion === 'v3'
                  ? 'bg-[#3370ff] text-white font-bold'
                  : 'text-[#8f959e] hover:bg-gray-50'
              }`}
            >
              方案三
            </button>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-[#ebf2ff] border border-[#bbdaff] p-4 rounded-lg flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5 text-[#3370ff] text-[12px]">
                <Info size={16} />
                <span className="font-medium text-blue-700 leading-relaxed">
                  付费方案更新无需发版直接生效。变更计费逻辑或开启 AI 用量后，请提交平台审核。
                </span>
              </div>
              <button className="bg-[#3370ff] text-white px-5 py-2 rounded text-[12px] font-bold hover:bg-[#285fd9] shadow-sm transition-all active:scale-95">
                提交审核
              </button>
            </div>

            <section className="bg-white border border-[#dee0e3] rounded-lg overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-[#f2f3f5] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 font-bold text-[15px]">
                    <div className="w-5 h-5 bg-[#7b61ff] rounded flex items-center justify-center text-white shadow-sm">
                      <Zap size={12} />
                    </div>
                    付费方案
                  </div>
                  {(designVersion === 'v2' || designVersion === 'v3') && (
                    <div className="flex bg-[#f2f3f5] p-0.5 rounded ml-2 border border-[#dee0e3]/50">
                      <button
                        onClick={() => handleModeSwitch('edition')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          activeMode === 'edition'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        版本限额
                      </button>
                      <button
                        onClick={() => handleModeSwitch('ai')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          activeMode === 'ai'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        AI用量包
                      </button>
                    </div>
                  )}
                </div>
                {activeMode === 'edition' && (
                  <button className="text-[#3370ff] border border-[#3370ff]/30 px-4 py-1.5 rounded text-xs flex items-center gap-1.5 hover:bg-blue-50 font-bold transition-all active:scale-95 shadow-sm">
                    <Plus size={15} /> 添加付费方案
                  </button>
                )}
              </div>

              {(designVersion === 'v1' || designVersion === 'v3') && (
                <div className="px-6 py-5 bg-[#fafbfc] border-b border-[#f2f3f5] flex flex-col gap-4">
                  <div className="flex gap-4 p-1 bg-[#f2f3f5] w-fit rounded-lg border border-[#dee0e3]/30">
                    <button
                      onClick={() => handleModeSwitch('edition')}
                      className={`px-6 py-2 text-[12px] rounded-md transition-all flex items-center gap-2 ${
                        activeMode === 'edition'
                          ? 'bg-white shadow-md text-[#3370ff] font-bold'
                          : 'text-[#646a73] hover:bg-white/50'
                      }`}
                    >
                      <Layers size={14} /> 版本限额
                    </button>
                    <button
                      onClick={() => handleModeSwitch('ai')}
                      className={`px-6 py-2 text-[12px] rounded-md transition-all flex items-center gap-2 ${
                        activeMode === 'ai'
                          ? 'bg-white shadow-md text-[#3370ff] font-bold'
                          : 'text-[#646a73] hover:bg-white/50'
                      }`}
                    >
                      <Zap size={14} /> AI用量包
                    </button>
                  </div>
                  <div className="flex items-start gap-2 text-[#646a73] text-[11px] bg-white p-3 rounded border border-[#f2f3f5] shadow-inner">
                    <HelpCircle size={14} className="mt-0.5 text-[#3370ff]" />
                    <span>
                      {activeMode === 'edition'
                        ? '按席位和时间维度进行功能授权售卖，支持旗舰版等规格配置。'
                        : '由系统提供统一的 AI 调用能力，通过购买 AI 资源包进行额度扣减。'}
                    </span>
                  </div>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="text-[#8f959e] border-b border-[#f2f3f5] bg-[#fafbfc]">
                      <th className="pl-6 py-4 font-medium uppercase tracking-tight">
                        方案名称
                      </th>
                      <th className="py-4 font-medium uppercase tracking-tight">
                        方案 ID
                      </th>
                      <th className="py-4 font-medium uppercase tracking-tight">
                        计费模式
                      </th>
                      {activeMode === 'edition' && (
                        <>
                          <th className="py-4 font-medium uppercase tracking-tight">
                            数量
                          </th>
                          <th className="py-4 font-medium uppercase tracking-tight">
                            价格
                          </th>
                          <th className="pr-6 py-4 text-right">操作</th>
                        </>
                      )}
                      {activeMode === 'ai' && (
                        <th className="pr-6 py-4 font-medium uppercase tracking-tight">
                          资源换算关系
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2f3f5]">
                    {currentPlans.map((p) => (
                      <tr
                        key={p.id}
                        className="group hover:bg-[#f9fafb] transition-colors"
                      >
                        <td className="pl-6 py-5 font-bold text-[#1F2329]">
                          {p.name}
                        </td>
                        <td className="py-5 text-[#8f959e] font-mono text-[11px] tracking-tighter">
                          {p.idStr}
                        </td>
                        <td className="py-5">
                          <span className="bg-[#f2f3f5] px-2 py-0.5 rounded text-[11px] font-medium text-[#5e646e] border border-[#dee0e3]/40">
                            {p.mode}
                          </span>
                        </td>
                        {activeMode === 'edition' && (
                          <>
                            <td className="py-5 font-semibold text-[#1f2329]">
                              {p.quota}
                            </td>
                            <td className="py-5 font-bold text-[#1f2329]">
                              ¥ {p.price}{' '}
                              <span className="text-[#8f959e] font-normal text-[11px]">
                                / 年
                              </span>
                            </td>
                            <td className="pr-6 py-5 text-right space-x-4 text-[#3370ff]">
                              <button className="hover:underline font-bold text-[12px]">
                                编辑规格
                              </button>
                              <button className="text-[#f54a45] hover:underline font-bold text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">
                                下架
                              </button>
                            </td>
                          </>
                        )}
                        {activeMode === 'ai' && (
                          <td className="pr-6 py-5">
                            <div className="inline-flex items-center gap-2 bg-white border border-[#dee0e3] rounded-lg px-3 py-2">
                              <span className="text-[12px] text-[#1f2329]">1 次调用</span>
                              <span className="text-[11px] text-[#8f959e]">等同于</span>
                              <input
                                type="number"
                                value={aiRatio}
                                onChange={(e) => setAiRatio(e.target.value)}
                                className="w-16 border border-[#dee0e3] rounded px-2 py-1 text-[12px] focus:border-[#3370ff] outline-none font-bold text-[#3370ff]"
                              />
                              <span className="text-[12px] text-[#1f2329]">点数</span>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#f9fafb] border-t border-[#f2f3f5] p-8">
                <div className="ml-4 border-l-2 border-[#dee0e3] pl-8 space-y-7">
                  <div className="flex items-center gap-10">
                    <span className="text-[13px] font-bold text-[#1f2329] w-28">
                      支持试用
                    </span>
                    <div
                      className={`w-10 h-5 rounded-full relative cursor-pointer transition-all ${
                        trialConfig.enabled ? 'bg-[#34a853]' : 'bg-[#dee0e3]'
                      }`}
                      onClick={() =>
                        setTrialConfig({
                          ...trialConfig,
                          enabled: !trialConfig.enabled
                        })
                      }
                    >
                      <div
                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                          trialConfig.enabled ? 'left-[22px]' : 'left-0.5'
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-16 gap-y-7">
                    <div className="space-y-2">
                      <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                        试用方案名称{' '}
                        <span className="text-[#f54a45]">*</span>
                      </label>
                      <input
                        type="text"
                        value={trialConfig.name}
                        onChange={(e) =>
                          setTrialConfig({
                            ...trialConfig,
                            name: e.target.value
                          })
                        }
                        className="w-full bg-white border border-[#dee0e3] rounded px-3 py-2 text-[13px] focus:border-[#3370ff] outline-none transition-all shadow-sm"
                        placeholder="请输入试用方案名称"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                        对应规格 <span className="text-[#f54a45]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          disabled={activeMode === 'ai'}
                          value={
                            activeMode === 'ai' ? 'a_standard' : trialConfig.targetId
                          }
                          onChange={(e) =>
                            setTrialConfig({
                              ...trialConfig,
                              targetId: e.target.value
                            })
                          }
                          className={`w-full border border-[#dee0e3] rounded px-3 py-2 text-[13px] appearance-none focus:border-[#3370ff] outline-none ${
                            activeMode === 'ai'
                              ? 'bg-[#f2f3f5] cursor-not-allowed text-[#8f959e]'
                              : 'bg-white cursor-pointer transition-all shadow-sm focus:ring-1 focus:ring-[#3370ff]/10'
                          }`}
                        >
                          {activeMode === 'ai' ? (
                            <option value="a_standard">飞书AI包</option>
                          ) : (
                            <>
                              <option value="">请选择规格</option>
                              {editionPlans.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.name}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                        {activeMode !== 'ai' && (
                          <ChevronDown
                            className="absolute right-2 top-2.5 text-[#8f959e] pointer-events-none"
                            size={16}
                          />
                        )}
                      </div>
                    </div>

                    {activeMode === 'edition' && (
                      <div className="space-y-2">
                        <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                          试用时长 (天){' '}
                          <span className="text-[#f54a45]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={trialConfig.duration}
                            onChange={(e) =>
                              setTrialConfig({
                                ...trialConfig,
                                duration: e.target.value
                              })
                            }
                            className="w-full bg-white border border-[#dee0e3] rounded px-3 py-2 text-[13px] focus:border-[#3370ff] outline-none pr-12 transition-all shadow-sm"
                          />
                          <Clock
                            className="absolute right-3 top-2.5 text-[#8f959e]"
                            size={14}
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                        试用用量限制 <span className="text-[#f54a45]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={trialConfig.usage}
                          onChange={(e) =>
                            setTrialConfig({
                              ...trialConfig,
                              usage: e.target.value
                            })
                          }
                          className="w-full bg-white border border-[#dee0e3] rounded px-3 py-2 text-[13px] focus:border-[#3370ff] outline-none pr-12 transition-all shadow-sm"
                          placeholder={activeMode === 'edition' ? '席位限制' : '用量限制'}
                        />
                        <BarChart3
                          className="absolute right-3 top-2.5 text-[#8f959e]"
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-[#dee0e3] rounded-lg overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-[#f2f3f5] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2 font-bold text-[15px]">
                  <div className="w-5 h-5 bg-[#34a853] rounded flex items-center justify-center text-white shadow-sm">
                    <Globe size={12} />
                  </div>
                  商店展示页配置
                </div>
                <button className="text-[#3370ff] text-[12px] flex items-center gap-1.5 font-bold hover:underline transition-all">
                  <CheckCircle2 size={16} /> 预览商店最终效果
                </button>
              </div>
              <div className="p-8 flex gap-12">
                <div className="w-32 shrink-0">
                  <label className="text-[13px] font-bold text-[#1f2329] flex items-center gap-1 pt-1.5">
                    价格说明{' '}
                    <Info size={14} className="text-[#8f959e] cursor-help" />
                  </label>
                  <p className="text-[11px] text-[#8f959e] mt-2 leading-relaxed italic">
                    此内容为全模式通用说明，将在商店详情页底部展示。建议包含版本功能对比。
                  </p>
                </div>
                <div className="flex-1">
                  <textarea
                    value={priceDescription}
                    onChange={(e) => setPriceDescription(e.target.value)}
                    placeholder="在此详细说明不同规格方案的功能差异，或上传商店展示图说明文字，支持 Markdown 格式..."
                    className="w-full border border-[#dee0e3] rounded-lg p-4 text-[13px] h-36 resize-none outline-none focus:border-[#3370ff] bg-[#fafbfc] hover:bg-white transition-all shadow-inner focus:shadow-none"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#dee0e3] py-4 flex justify-center gap-6 z-40 shadow-[0_-4px_15px_rgba(0,0,0,0.03)]">
        <button className="px-14 py-2 border border-[#dee0e3] rounded text-[14px] font-medium hover:bg-gray-50 text-[#646a73] transition-all active:scale-95">
          取消
        </button>
        <button className="px-14 py-2 bg-[#3370ff] text-white rounded text-[14px] font-bold hover:bg-[#285fd9] shadow-lg shadow-blue-100 transition-all active:scale-95">
          提交并保存
        </button>
      </div>

      {showSwitchWarning && (
        <div className="fixed inset-0 bg-[#1f2329]/60 flex items-center justify-center z-[100] backdrop-blur-[4px] transition-all">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full shadow-2xl border border-[#dee0e3] animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-[#f54a45] mb-5">
                <AlertTriangle size={28} />
              </div>
              <h3 className="font-bold text-[17px] text-[#1f2329]">
                确认切换计费逻辑？
              </h3>
              <p className="text-[13px] text-[#646a73] mt-2 mb-8 leading-relaxed">
                切换计费逻辑将清空当前已配置的所有规格数据，试用关联也将失效。此操作不可撤销，请确认。
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowSwitchWarning(false)}
                className="flex-1 py-2.5 text-[13px] font-bold text-[#646a73] border border-[#dee0e3] rounded-lg hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => performSwitch(showSwitchWarning)}
                className="flex-1 py-2.5 bg-[#f54a45] text-white rounded-lg font-bold shadow-lg shadow-red-100 hover:bg-[#d83935] transition-all active:scale-95"
              >
                确认切换
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BillingManagement
