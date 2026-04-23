import React, { useState } from 'react';
import { Check, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, ArrowLeft, Star } from 'lucide-react';

const LeadFormExperiment = () => {
  const [activeVariant, setActiveVariant] = useState('A');
  const [step, setStep] = useState(1);

  // 共享的表单项组件
  const FormFields = ({ variant }) => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
            placeholder="企业或组织名称*"
          />
        </div>
        <div className="flex-1 relative">
          <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-gray-700 bg-white">
            <option value="">人员规模*</option>
            <option value="1-50">1 - 50</option>
            <option value="51-200">51 - 200</option>
            <option value="201-500">201 - 500</option>
            <option value="500+">500+</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
          placeholder="工作邮箱*"
        />
      </div>

      <div className="flex gap-0">
        <div className="relative w-24">
          <select className="w-full h-12 pl-4 pr-8 appearance-none border border-gray-300 border-r-0 rounded-l-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-gray-700 bg-gray-50">
            <option value="+86">+86</option>
            <option value="+1">+1</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
        <div className="flex-1 relative">
          <input
            type="tel"
            className="w-full h-12 px-4 border border-gray-300 rounded-r-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
            placeholder="手机号*"
          />
        </div>
      </div>

      <div className="relative">
        <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-gray-700 bg-white">
          <option value="">你需要什么帮助？*</option>
          <option value="demo">预约产品演示</option>
          <option value="pricing">咨询价格方案</option>
          <option value="tech">技术与集成支持</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      </div>

      <button className="w-full h-12 bg-[#2152F3] hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
        {variant === 'C' ? '获取专属解决方案' : variant === 'D' ? '免费申请演示' : '获得专属支持'}
      </button>

      <p className="text-[11px] text-gray-400 leading-relaxed mt-4">
        继续使用即表示您同意我们的<a href="#" className="underline">服务条款</a>并确认您已阅读<a href="#" className="underline">隐私协议</a>了解我们如何收集、使用和共享您的数据。
      </p>
    </div>
  );

  // 客户 Logo 区
  const Logos = () => (
    <div className="mt-12">
      <p className="text-xs text-gray-500 font-medium mb-6">行业领先者的最佳选择</p>
      <div className="grid grid-cols-4 gap-y-6 gap-x-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {/* 使用文字/简单图形模拟 Logo 以节省资源 */}
        <div className="font-black text-lg text-blue-800 tracking-tighter">ZUS<span className="text-xs font-normal ml-1">COFFEE</span></div>
        <div className="font-black text-lg text-red-600 tracking-tighter">7-ELEVEn</div>
        <div className="font-bold text-lg text-red-600">海底捞</div>
        <div className="font-black text-lg text-green-500">goto</div>
        <div className="font-black text-lg text-yellow-500">MR.DIY</div>
        <div className="font-black text-lg text-red-500">POP MART</div>
        <div className="font-black text-xl text-orange-500">mi</div>
        <div className="font-bold text-lg text-blue-400">traveloka</div>
      </div>
    </div>
  );

  // 方案 A: 经典对照组（左图右表）
  const VariantA = () => (
    <div className="max-w-[1000px] mx-auto pt-16 pb-24 px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">联系销售</h1>
        <p className="text-lg text-gray-600 mb-10">在 Meegle 里畅快协作。</p>
        
        <div className="space-y-4 mb-10">
          {['预约 Meegle 产品演示', '为你的团队选择最佳版本', '获取你所在行业的最佳实践', '从你现有的工具迁移到 Meegle'].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
              <Check size={18} className="text-gray-900" />
              {text}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
          <HelpCircle size={16} />
          获取更多产品信息或客户支持，请访问<a href="#" className="text-blue-600 hover:underline">帮助中心</a>
        </div>

        <Logos />
      </div>

      <div className="w-full md:w-[480px] bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <FormFields variant="A" />
      </div>
    </div>
  );

  // 方案 B: 沉浸式居中（降低两侧干扰，提升专注度）
  const VariantB = () => (
    <div className="max-w-[800px] mx-auto pt-16 pb-24 px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">与产品专家聊聊</h1>
      <p className="text-lg text-gray-600 mb-12">告诉我们您的需求，我们将为您提供定制化的协作方案与报价。</p>
      
      <div className="w-full max-w-[560px] bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 text-left">
        <FormFields variant="B" />
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10 w-full flex flex-col items-center">
        <p className="text-xs text-gray-500 font-medium mb-6">超过 10,000+ 优秀团队的共同选择</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          <div className="font-black text-lg text-blue-800">ZUS COFFEE</div>
          <div className="font-black text-lg text-red-600">7-ELEVEn</div>
          <div className="font-bold text-lg text-red-600">海底捞</div>
          <div className="font-black text-lg text-green-500">goto</div>
          <div className="font-black text-lg text-red-500">POP MART</div>
          <div className="font-bold text-lg text-blue-400">traveloka</div>
        </div>
      </div>
    </div>
  );

  // 方案 C: 分步降阻（将 5 个表单项拆为 2 步，先业务后联系方式）
  const VariantC = () => (
    <div className="max-w-[1000px] mx-auto pt-16 pb-24 px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-sm rounded-full mb-6">定制方案</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">获取专属于您团队的<br/>Meegle 解决方案</h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">只需 2 个简单步骤，即可预约演示并获取行业最佳实践参考。</p>
        <Logos />
      </div>

      <div className="w-full md:w-[480px] bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-8">
          <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-100'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-100'}`} />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {step === 1 ? '步骤 1：了解您的企业' : '步骤 2：如何联系您？'}
        </h3>

        {step === 1 ? (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="企业或组织名称*" />
            <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm text-gray-700 bg-white">
              <option value="">人员规模*</option>
              <option value="1-50">1 - 50</option>
              <option value="51-200">51 - 200</option>
            </select>
            <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm text-gray-700 bg-white">
              <option value="">你需要什么帮助？*</option>
              <option value="demo">预约产品演示</option>
            </select>
            <button onClick={() => setStep(2)} className="w-full h-12 bg-[#2152F3] hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 mt-4">
              下一步 <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <input type="email" className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="工作邮箱*" />
            <div className="flex gap-0">
              <select className="w-24 h-12 pl-4 pr-8 border border-gray-300 border-r-0 rounded-l-lg outline-none focus:border-blue-500 text-sm bg-gray-50">
                <option value="+86">+86</option>
              </select>
              <input type="tel" className="flex-1 h-12 px-4 border border-gray-300 rounded-r-lg outline-none focus:border-blue-500 text-sm" placeholder="手机号*" />
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setStep(1)} className="w-12 h-12 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg font-medium flex items-center justify-center transition-all">
                <ArrowLeft size={18} />
              </button>
              <button className="flex-1 h-12 bg-[#2152F3] hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
                获取专属解决方案
              </button>
            </div>
            <p className="text-[11px] text-gray-400 mt-2">继续使用即表示您同意我们的服务条款并确认隐私协议。</p>
          </div>
        )}
      </div>
    </div>
  );

  // 方案 D: 右侧信任驱动（表单在左，右侧强化客户背书）
  const VariantD = () => (
    <div className="max-w-[1000px] mx-auto pt-16 pb-24 px-8 flex flex-col md:flex-row items-start gap-16">
      <div className="w-full md:w-[440px] bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">申请产品演示</h2>
        <p className="text-sm text-gray-500 mb-8">填写信息，销售专家将在 1 个工作日内与您联系</p>
        <FormFields variant="D" />
      </div>

      <div className="flex-1 pt-4">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">为何选择 Meegle？</h1>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">企业级数据安全</h4>
                <p className="text-sm text-gray-600 mt-1">符合全球最高标准的安全合规认证，保护您的核心资产。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <Check size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">无缝迁移与集成</h4>
                <p className="text-sm text-gray-600 mt-1">支持与主流办公软件打通，提供专业团队协助数据迁移。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100/50">
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-gray-800 font-medium italic mb-4">"自从迁移到 Meegle，我们跨部门的沟通效率提升了至少 40%，管理成本显著下降。"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <div className="font-bold text-sm text-gray-900">张明</div>
              <div className="text-xs text-gray-500">某知名互联网公司 IT 总监</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F7FF] via-[#F8FAFF] to-white font-sans text-[#1F2329]">
      {/* 实验控制台 (仅演示用) */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="font-bold text-sm text-gray-800 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          留资表单 A/B 实验台
        </div>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'A', label: '方案 A (原版对照)' },
            { id: 'B', label: '方案 B (沉浸居中)' },
            { id: 'C', label: '方案 C (分步降阻)' },
            { id: 'D', label: '方案 D (信任驱动)' }
          ].map(v => (
            <button
              key={v.id}
              onClick={() => { setActiveVariant(v.id); setStep(1); }}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeVariant === v.id 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* 渲染对应的变体 */}
      <div className="transition-opacity duration-500">
        {activeVariant === 'A' && <VariantA />}
        {activeVariant === 'B' && <VariantB />}
        {activeVariant === 'C' && <VariantC />}
        {activeVariant === 'D' && <VariantD />}
      </div>
    </div>
  );
};

export default LeadFormExperiment;
