import React, { useEffect, useMemo, useState } from 'react'
import {
  Plus,
  ChevronDown,
  Globe,
  Zap,
  CheckCircle2,
  Info,
  Package,
  Send,
  Clock,
  BarChart3
} from 'lucide-react'

const BillingManagement = () => {
  const [designVersion, setDesignVersion] = useState('v2')
  const [flexMode, setFlexMode] = useState('A')
  const [sourceMode, setSourceMode] = useState('A')
  const [aiRatio, setAiRatio] = useState('10')
  const [trialConfig, setTrialConfig] = useState({
    enabled: true,
    name: '免费体验额度',
    type: 'edition',
    targetId: 'p_ultimate',
    duration: '7',
    usage: '1000'
  })
  const [priceDescription, setPriceDescription] = useState('')

  const editionPlans = [
    {
      id: 'p_standard',
      name: '标准版',
      idStr: 'price_1d9b1a0c3f_standard',
      mode: '按年付费',
      quota: '20000',
      price: '1999.00',
      status: '已发布'
    },
    {
      id: 'p_pro',
      name: '专业版',
      idStr: 'price_1d9b1a0c3f_pro',
      mode: '按年付费',
      quota: '60000',
      price: '2999.00',
      status: '已发布'
    },
    {
      id: 'p_ultimate',
      name: '旗舰版',
      idStr: 'price_a727dc32deb3900b',
      mode: '按年付费',
      quota: '100000',
      price: '5000.00',
      status: '待生效'
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
    },
    {
      id: 'a_plus',
      name: '飞书AI包 Plus',
      idStr: 'price_ai_package_plus',
      mode: '按量购买',
      quota: '-',
      price: '-'
    }
  ]

  const addonPlans = [
    {
      id: 'add_boost',
      name: '增值包 · 次数加油',
      idStr: 'price_addon_boost',
      type: '增值包',
      status: '已发布',
      mode: '一次性购买',
      price: '33.00',
      visibility: '可见'
    },
    {
      id: 'add_team',
      name: '增值包 · 团队扩容',
      idStr: 'price_addon_team',
      type: '增值包',
      status: '待生效',
      mode: '按次付费',
      price: '99.00',
      visibility: '可见'
    }
  ]

  const mixedPlans = useMemo(
    () => [
      ...editionPlans.map((p) => ({
        id: p.id,
        name: p.name,
        idStr: p.idStr,
        type: '版本方案',
        status: p.status,
        mode: p.mode,
        limit: p.quota,
        trial: '7 天',
        price: `¥ ${p.price}/年`,
        visibility: '可见'
      })),
      ...addonPlans.map((p) => ({
        id: p.id,
        name: p.name,
        idStr: p.idStr,
        type: '增值包',
        status: p.status,
        mode: p.mode,
        limit: '-',
        trial: '不提供',
        price: `¥ ${p.price}`,
        visibility: p.visibility
      }))
    ],
    [editionPlans, addonPlans]
  )

  const externalEntitlements = [
    {
      id: 'ext_ai_basic',
      name: '外部 AI 用量包 · 基础',
      source: '伙伴平台',
      quota: '未知',
      expiry: '未知',
      note: '价格/sku 不可见'
    },
    {
      id: 'ext_ai_enterprise',
      name: '外部 AI 用量包 · 企业',
      source: '企业合同',
      quota: '未知',
      expiry: '未知',
      note: '仅可识别可用额度'
    }
  ]

  const isSchemeFlexible = designVersion === 'v1'
  const isSchemeTabs = designVersion === 'v2'
  const isSchemeAddon = designVersion === 'v3'
  const editionTitle = isSchemeTabs ? '版本限额方案' : '自营 A · 版本限额方案'
  const showSelf =
    (isSchemeFlexible && flexMode !== 'B') ||
    (isSchemeTabs && sourceMode === 'A') ||
    isSchemeAddon
  const showExternal =
    (isSchemeFlexible && flexMode !== 'A') || (isSchemeTabs && sourceMode === 'B')

  const trialTypeOptions = useMemo(() => {
    if (isSchemeAddon) {
      return ['edition', 'addon']
    }
    if (isSchemeTabs) {
      return sourceMode === 'B' ? ['external'] : ['edition']
    }
    if (isSchemeFlexible) {
      if (flexMode === 'A') return ['edition', 'ai']
      if (flexMode === 'B') return ['external']
      return ['edition', 'ai', 'external']
    }
    return ['edition', 'ai']
  }, [isSchemeAddon, isSchemeTabs, isSchemeFlexible, flexMode, sourceMode])

  const trialTypeLabels = {
    edition: '版本限额体验',
    ai: 'AI 用量包体验',
    external: '外部AI用量包体验',
    addon: '增值包体验'
  }

  useEffect(() => {
    if (!trialTypeOptions.includes(trialConfig.type)) {
      const nextType = trialTypeOptions[0]
      const nextTarget =
        nextType === 'ai'
          ? aiPlans[0]?.id ?? ''
          : nextType === 'external'
            ? externalEntitlements[0]?.id ?? ''
            : nextType === 'addon'
              ? addonPlans[0]?.id ?? ''
              : editionPlans[0]?.id ?? ''
      setTrialConfig((prev) => ({
        ...prev,
        type: nextType,
        targetId: nextTarget
      }))
    }
  }, [trialTypeOptions, trialConfig.type, aiPlans, addonPlans, editionPlans, externalEntitlements])


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
              方案一 · A/B/A+B 灵活配置
            </button>
            <button
              onClick={() => setDesignVersion('v2')}
              className={`px-4 py-1 text-[11px] rounded transition-all ${
                designVersion === 'v2'
                  ? 'bg-[#3370ff] text-white font-bold'
                  : 'text-[#8f959e] hover:bg-gray-50'
              }`}
            >
              方案二 · A 或 B（顶部切换）
            </button>
            <button
              onClick={() => setDesignVersion('v3')}
              className={`px-4 py-1 text-[11px] rounded transition-all ${
                designVersion === 'v3'
                  ? 'bg-[#3370ff] text-white font-bold'
                  : 'text-[#8f959e] hover:bg-gray-50'
              }`}
            >
              方案三 · A（版本+增值包）
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
                  {isSchemeFlexible && (
                    <div className="flex bg-[#f2f3f5] p-0.5 rounded ml-2 border border-[#dee0e3]/50">
                      <button
                        onClick={() => setFlexMode('A')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          flexMode === 'A'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        自营 A
                      </button>
                      <button
                        onClick={() => setFlexMode('B')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          flexMode === 'B'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        外部 B
                      </button>
                      <button
                        onClick={() => setFlexMode('A+B')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          flexMode === 'A+B'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        A + B
                      </button>
                    </div>
                  )}
                  {isSchemeTabs && (
                    <div className="flex bg-[#f2f3f5] p-0.5 rounded ml-2 border border-[#dee0e3]/50">
                      <button
                        onClick={() => setSourceMode('A')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          sourceMode === 'A'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        版本限额 A
                      </button>
                      <button
                        onClick={() => setSourceMode('B')}
                        className={`px-4 py-1 text-[11px] rounded transition-all ${
                          sourceMode === 'B'
                            ? 'bg-white shadow-sm font-bold text-[#3370ff]'
                            : 'text-[#8f959e]'
                        }`}
                      >
                        外部AI包 B
                      </button>
                    </div>
                  )}
                  {isSchemeFlexible && (
                    <div className="text-[11px] text-[#8f959e] font-medium">
                      A 为自营售卖，B 为外部权益消费
                    </div>
                  )}
                  {isSchemeTabs && (
                    <div className="text-[11px] text-[#8f959e] font-medium">
                      A 为自营版本限额，B 为外部 AI 用量包（价格/SKU 不可见）
                    </div>
                  )}
                </div>
                {isSchemeTabs && sourceMode === 'A' && (
                  <button className="text-[#3370ff] border border-[#3370ff]/30 px-4 py-1.5 rounded text-xs flex items-center gap-1.5 hover:bg-blue-50 font-bold transition-all active:scale-95 shadow-sm">
                    <Plus size={15} /> 添加付费方案
                  </button>
                )}
                {isSchemeFlexible && (
                  <div className="flex gap-2">
                    <button className="text-[#3370ff] border border-[#3370ff]/30 px-3 py-1.5 rounded text-xs flex items-center gap-1.5 hover:bg-blue-50 font-bold transition-all active:scale-95 shadow-sm">
                      <Plus size={14} /> 添加版本方案
                    </button>
                    <button className="text-[#3370ff] border border-[#3370ff]/30 px-3 py-1.5 rounded text-xs flex items-center gap-1.5 hover:bg-blue-50 font-bold transition-all active:scale-95 shadow-sm">
                      <Plus size={14} /> 添加 AI 用量包
                    </button>
                  </div>
                )}
                {isSchemeAddon && (
                  <div className="flex gap-2">
                    <button className="text-[#3370ff] border border-[#3370ff]/30 px-3 py-1.5 rounded text-xs flex items-center gap-1.5 hover:bg-blue-50 font-bold transition-all active:scale-95 shadow-sm">
                      <Plus size={14} /> 添加版本方案
                    </button>
                    <button className="text-[#3370ff] border border-[#3370ff]/30 px-3 py-1.5 rounded text-xs flex items-center gap-1.5 hover:bg-blue-50 font-bold transition-all active:scale-95 shadow-sm">
                      <Plus size={14} /> 添加增值包
                    </button>
                  </div>
                )}
              </div>


              <div className="space-y-6">
                {showSelf ? (
                  <div className="space-y-6">
                    {isSchemeAddon ? (
                      <div>
                        <div className="px-6 py-4 flex items-center justify-between bg-[#fafbfc]">
                          <div className="text-[13px] font-bold text-[#1f2329]">
                            自营 A · 版本封装 + 增值包
                          </div>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[13px]">
                            <thead>
                              <tr className="text-[#8f959e] border-b border-[#f2f3f5]">
                                <th className="pl-6 py-4 font-medium uppercase tracking-tight">
                                  名称
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  ID
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  类型
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  状态
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  付费模式
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  使用人数限制
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  试用周期
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  价格
                                </th>
                                <th className="py-4 font-medium uppercase tracking-tight">
                                  用户可见性
                                </th>
                                <th className="pr-6 py-4 text-right">操作</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f2f3f5]">
                              {mixedPlans.map((p) => (
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
                                      {p.type}
                                    </span>
                                  </td>
                                  <td className="py-5">
                                    <span
                                      className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                                        p.status === '已发布'
                                          ? 'bg-[#ebf7ff] text-[#3370ff] border-[#c9e2ff]'
                                          : 'bg-[#fff7e6] text-[#ad6800] border-[#ffe7ba]'
                                      }`}
                                    >
                                      {p.status}
                                    </span>
                                  </td>
                                  <td className="py-5 text-[#1f2329] font-medium">
                                    {p.mode}
                                  </td>
                                  <td className="py-5 text-[#1f2329] font-medium">
                                    {p.limit}
                                  </td>
                                  <td className="py-5 text-[#8f959e] text-[12px]">
                                    {p.trial}
                                  </td>
                                  <td className="py-5 font-bold text-[#1f2329]">
                                    {p.price}
                                  </td>
                                  <td className="py-5 text-[#8f959e] text-[12px]">
                                    {p.visibility}
                                  </td>
                                  <td className="pr-6 py-5 text-right space-x-4 text-[#3370ff]">
                                    <button className="hover:underline font-bold text-[12px]">
                                      详情
                                    </button>
                                    <button className="hover:underline font-bold text-[12px]">
                                      下架
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="border-b border-[#f2f3f5]">
                          <div className="px-6 py-4 flex items-center justify-between bg-[#fafbfc]">
                            <div className="text-[13px] font-bold text-[#1f2329]">
                              {editionTitle}
                            </div>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-[13px]">
                              <thead>
                                <tr className="text-[#8f959e] border-b border-[#f2f3f5]">
                                  <th className="pl-6 py-4 font-medium uppercase tracking-tight">
                                    方案名称
                                  </th>
                                  <th className="py-4 font-medium uppercase tracking-tight">
                                    方案 ID
                                  </th>
                                  <th className="py-4 font-medium uppercase tracking-tight">
                                    计费模式
                                  </th>
                                  <th className="py-4 font-medium uppercase tracking-tight">
                                    方案状态
                                  </th>
                                  <th className="py-4 font-medium uppercase tracking-tight">
                                    数量
                                  </th>
                                  <th className="py-4 font-medium uppercase tracking-tight">
                                    价格
                                  </th>
                                  <th className="pr-6 py-4 text-right">操作</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#f2f3f5]">
                                {editionPlans.map((p) => (
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
                                      <span className="ml-2 text-[10px] text-[#8f959e]">
                                        仅可通过升级扩容
                                      </span>
                                    </td>
                                    <td className="py-5">
                                      <span
                                        className={`px-2 py-0.5 rounded text-[11px] font-medium border ${
                                          p.status === '已发布'
                                            ? 'bg-[#ebf7ff] text-[#3370ff] border-[#c9e2ff]'
                                            : 'bg-[#fff7e6] text-[#ad6800] border-[#ffe7ba]'
                                        }`}
                                      >
                                        {p.status}
                                      </span>
                                    </td>
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
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {!isSchemeTabs ? (
                          <div>
                            <div className="px-6 py-4 flex items-center justify-between bg-[#fafbfc]">
                              <div className="text-[13px] font-bold text-[#1f2329]">
                                自营 A · AI 用量包
                              </div>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-[13px]">
                                <thead>
                                  <tr className="text-[#8f959e] border-b border-[#f2f3f5]">
                                    <th className="pl-6 py-4 font-medium uppercase tracking-tight">
                                      方案名称
                                    </th>
                                    <th className="py-4 font-medium uppercase tracking-tight">
                                      方案 ID
                                    </th>
                                    <th className="py-4 font-medium uppercase tracking-tight">
                                      计费模式
                                    </th>
                                    <th className="pr-6 py-4 font-medium uppercase tracking-tight">
                                      资源换算关系
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[#f2f3f5]">
                                  {aiPlans.map((p) => (
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
                                        <span className="ml-2 text-[10px] text-[#8f959e]">
                                          可叠加购买扩容
                                        </span>
                                      </td>
                                      <td className="pr-6 py-5">
                                        <div className="inline-flex items-center gap-2 bg-white border border-[#dee0e3] rounded-lg px-3 py-2">
                                          <span className="text-[12px] text-[#1f2329]">
                                            1 次调用
                                          </span>
                                          <span className="text-[11px] text-[#8f959e]">
                                            等同于
                                          </span>
                                          <input
                                            type="number"
                                            value={aiRatio}
                                            onChange={(e) => setAiRatio(e.target.value)}
                                            className="w-16 border border-[#dee0e3] rounded px-2 py-1 text-[12px] focus:border-[#3370ff] outline-none font-bold text-[#3370ff]"
                                          />
                                          <span className="text-[12px] text-[#1f2329]">
                                            点数
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>
                ) : null}

                {showExternal ? (
                  <div>
                    <div className="px-6 py-4 flex items-center justify-between bg-[#fafbfc]">
                      <div className="text-[13px] font-bold text-[#1f2329]">
                        外部 B · AI 用量包
                      </div>
                      <div className="text-[11px] text-[#8f959e] font-medium">
                        价格/SKU 不可见
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[13px]">
                        <thead>
                          <tr className="text-[#8f959e] border-b border-[#f2f3f5]">
                            <th className="pl-6 py-4 font-medium uppercase tracking-tight">
                              权益名称
                            </th>
                            <th className="py-4 font-medium uppercase tracking-tight">
                              权益 ID
                            </th>
                            <th className="py-4 font-medium uppercase tracking-tight">
                              来源
                            </th>
                            <th className="py-4 font-medium uppercase tracking-tight">
                              可用额度
                            </th>
                            <th className="py-4 font-medium uppercase tracking-tight">
                              到期
                            </th>
                            <th className="pr-6 py-4">备注</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f2f3f5]">
                          {externalEntitlements.map((e) => (
                            <tr key={e.id} className="hover:bg-[#f9fafb] transition-colors">
                              <td className="pl-6 py-5 font-bold text-[#1F2329]">
                                {e.name}
                              </td>
                              <td className="py-5 text-[#8f959e] font-mono text-[11px] tracking-tighter">
                                {e.id}
                              </td>
                              <td className="py-5 text-[#1f2329] font-medium">{e.source}</td>
                              <td className="py-5 text-[#8f959e]">{e.quota}</td>
                              <td className="py-5 text-[#8f959e]">{e.expiry}</td>
                              <td className="pr-6 py-5 text-[#8f959e] text-[12px]">
                                {e.note}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="bg-[#f9fafb] border-t border-[#f2f3f5] p-8">
                <div className="ml-4 border-l-2 border-[#dee0e3] pl-8 space-y-7">
                  <div className="space-y-6">
                    <div className="flex items-center gap-10">
                      <span className="text-[13px] font-bold text-[#1f2329] w-28">
                        免费体验额度
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
                          体验方式 <span className="text-[#f54a45]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={trialConfig.type}
                            onChange={(e) => {
                              const type = e.target.value
                              const targetId =
                                type === 'ai'
                                  ? aiPlans[0]?.id ?? ''
                                  : type === 'external'
                                    ? externalEntitlements[0]?.id ?? ''
                                    : type === 'addon'
                                      ? addonPlans[0]?.id ?? ''
                                      : editionPlans[0]?.id ?? ''
                              setTrialConfig((prev) => ({ ...prev, type, targetId }))
                            }}
                            className="w-full border border-[#dee0e3] rounded px-3 py-2 text-[13px] appearance-none focus:border-[#3370ff] outline-none bg-white cursor-pointer transition-all shadow-sm focus:ring-1 focus:ring-[#3370ff]/10"
                          >
                            {trialTypeOptions.map((t) => (
                              <option key={t} value={t}>
                                {trialTypeLabels[t]}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="absolute right-2 top-2.5 text-[#8f959e] pointer-events-none"
                            size={16}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                          关联方案 <span className="text-[#f54a45]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={trialConfig.targetId}
                            onChange={(e) =>
                              setTrialConfig({
                                ...trialConfig,
                                targetId: e.target.value
                              })
                            }
                            className="w-full border border-[#dee0e3] rounded px-3 py-2 text-[13px] appearance-none focus:border-[#3370ff] outline-none bg-white cursor-pointer transition-all shadow-sm focus:ring-1 focus:ring-[#3370ff]/10"
                          >
                            {trialConfig.type === 'ai'
                              ? aiPlans.map((p) => (
                                  <option key={p.id} value={p.id}>
                                    {p.name}
                                  </option>
                                ))
                              : trialConfig.type === 'external'
                                ? externalEntitlements.map((ent) => (
                                    <option key={ent.id} value={ent.id}>
                                      {ent.name}
                                    </option>
                                  ))
                                : trialConfig.type === 'addon'
                                  ? addonPlans.map((p) => (
                                      <option key={p.id} value={p.id}>
                                        {p.name}
                                      </option>
                                    ))
                                  : editionPlans.map((p) => (
                                      <option key={p.id} value={p.id}>
                                        {p.name}
                                      </option>
                                    ))}
                          </select>
                          <ChevronDown
                            className="absolute right-2 top-2.5 text-[#8f959e] pointer-events-none"
                            size={16}
                          />
                        </div>
                        {trialConfig.type === 'external' ? (
                          <div className="text-[11px] text-[#8f959e] mt-1">
                            外部权益的价格/SKU 等信息不可见，仅能配置消费入口与额度
                          </div>
                        ) : null}
                      </div>
                      {trialConfig.type === 'edition' ? (
                        <div className="space-y-2">
                          <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                            体验时长 (天) <span className="text-[#f54a45]">*</span>
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
                      ) : null}
                      <div className="space-y-2">
                        <label className="text-[12px] text-[#8f959e] flex items-center gap-1 font-bold">
                          体验额度 <span className="text-[#f54a45]">*</span>
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
                            placeholder={
                              trialConfig.type === 'edition'
                                ? '席位限制'
                                : trialConfig.type === 'external'
                                  ? '可用额度'
                                  : '用量限制'
                            }
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

    </div>
  )
}

export default BillingManagement
