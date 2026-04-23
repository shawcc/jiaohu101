import React, { useState } from 'react';
import { Check, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, ArrowLeft, Star, LayoutTemplate, Globe, Zap, Users, MessageSquare, Kanban, Bot } from 'lucide-react';

const LeadFormExperiment = () => {
  const [activeVariant, setActiveVariant] = useState('Online');
  const [step, setStep] = useState(1);
  const [source, setSource] = useState('contact'); // 'contact' (联系我们) or 'pricing' (购买咨询)

  // 模拟完整线上环境的全局导航栏
  const Navbar = () => (
    <nav className="h-16 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <div className="font-black text-2xl tracking-tighter text-blue-600">Meegle</div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">产品</a>
          <a href="#" className="hover:text-blue-600 transition-colors">解决方案</a>
          <a href="#" className="hover:text-blue-600 transition-colors">价格</a>
          <a href="#" className="hover:text-blue-600 transition-colors">客户案例</a>
          <a href="#" className="hover:text-blue-600 transition-colors">资源中心</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden md:block">登录</a>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          免费试用
        </button>
      </div>
    </nav>
  );

  // 共享的表单核心字段（保证字段数不少）
  const FormFields = ({ ctaText, variant }) => (
    <div className="space-y-4 w-full">
      <div className="flex flex-col sm:flex-row gap-4">
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
        <div className="relative w-[100px]">
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
          {source === 'pricing' ? (
            <>
              <option value="pricing">咨询价格方案与折扣</option>
              <option value="edition">评估适合的版本</option>
              <option value="demo">预约产品演示</option>
            </>
          ) : (
            <>
              <option value="demo">预约产品演示</option>
              <option value="pricing">咨询价格方案</option>
              <option value="tech">技术与集成支持</option>
            </>
          )}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      </div>

      <button className="w-full h-12 mt-2 bg-[#2152F3] hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20">
        {ctaText}
      </button>

      <p className="text-[11px] text-gray-400 leading-relaxed mt-4">
        继续使用即表示您同意我们的<a href="#" className="underline hover:text-blue-500">服务条款</a>并确认您已阅读<a href="#" className="underline hover:text-blue-500">隐私协议</a>了解我们如何收集、使用和共享您的数据。
      </p>
    </div>
  );

  const Logos = ({ layout = 'grid' }) => (
    <div className={`mt-10 ${layout === 'flex' ? 'w-full' : ''}`}>
      <p className="text-[11px] text-gray-500 font-medium mb-5">行业领先者的最佳选择</p>
      <div className={layout === 'grid' 
        ? "grid grid-cols-4 gap-y-6 gap-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        : "flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"}>
        <div className="font-black text-sm text-blue-800">ZUS COFFEE</div>
        <div className="font-black text-sm text-red-600">7-ELEVEn</div>
        <div className="font-bold text-sm text-red-600">海底捞</div>
        <div className="font-black text-sm text-green-500">goto</div>
        <div className="font-black text-sm text-yellow-500">MR.DIY</div>
        <div className="font-black text-sm text-red-500">POP MART</div>
        <div className="font-black text-lg text-orange-500 -mt-1">mi</div>
        <div className="font-bold text-sm text-blue-400">traveloka</div>
      </div>
    </div>
  );

  // --- 变体 O: 线上原版 (Control) - 精确还原 ---
  const VariantOnline = () => (
    <div className="max-w-[1200px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
      {/* 左侧：产品图与标题 */}
      <div className="flex-1 max-w-[560px] text-center md:text-left relative">
        {/* 背景光晕模拟 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">完美协作</h1>
        <p className="text-[15px] text-gray-500 mb-12">在可视化节点流里开启无缝合作</p>
        
        {/* 假装是一个轮播图组件的展示容器 */}
        <div className="w-full bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
          <div className="bg-gray-50 p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
          {/* 模拟的产品界面截图 */}
          <div className="p-6 h-[300px] bg-[#FAFBFC] relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                <Check size={14} />
              </div>
              <span className="font-bold text-sm">Character Posture Development</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded-full font-bold">Ongoing</span>
            </div>
            
            <div className="space-y-4">
              {/* 模拟的节点流 */}
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1 font-medium"><Check size={12}/> 3D Model Involved</div>
                <div className="px-3 py-1.5 bg-gray-100 text-gray-500 text-xs rounded-full">FE Gray</div>
                <div className="px-3 py-1.5 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1 font-medium"><Check size={12}/> Sound Design</div>
              </div>
              <div className="h-px bg-gray-200 my-4" />
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"/>Story Init</div>
                <div className="h-px w-8 bg-gray-300" />
                <div className="px-3 py-1 bg-white border border-blue-500 text-blue-600 text-xs rounded-full font-medium flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"/>Scene Setup</div>
              </div>
            </div>
          </div>
        </div>

        {/* 轮播图指示器 */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-1.5 rounded-full bg-blue-600" />
          <div className="w-8 h-1.5 rounded-full bg-gray-200" />
          <div className="w-8 h-1.5 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* 右侧：线上原版双列表单 */}
      <div className="w-full md:w-[500px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 border border-gray-100">
        <div className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">工作邮箱 <span className="text-red-500">*</span></label>
              <input type="email" className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="name@company.com" />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">电话号码 <span className="text-red-500">*</span></label>
              <div className="flex gap-0">
                <select className="w-[70px] h-10 px-2 border border-gray-300 border-r-0 rounded-l outline-none focus:border-blue-500 text-[13px] bg-gray-50">
                  <option>+86</option>
                </select>
                <input type="tel" className="flex-1 h-10 px-3 border border-gray-300 rounded-r outline-none focus:border-blue-500 text-[13px]" placeholder="请输入" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">名字 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="Jane" />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">姓氏 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="Doe" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">公司名称 <span className="text-red-500">*</span></label>
              <input type="text" className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="Acme Inc." />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">公司规模 <span className="text-red-500">*</span></label>
              <select className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px] bg-white appearance-none">
                <option>请选择</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[13px] text-gray-700 font-medium">职位 <span className="text-red-500">*</span></label>
            <select className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px] bg-white appearance-none">
              <option>请选择</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[13px] text-gray-700 font-medium">我们能为您提供什么帮助？ <span className="text-red-500">*</span></label>
            <textarea className="w-full h-24 p-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px] resize-none" placeholder="请向我们咨询"></textarea>
          </div>

          <div className="flex items-end justify-between gap-4 mt-2">
            <p className="text-[10px] text-gray-400 leading-relaxed flex-1">
              继续使用即表示您同意我们的<a href="#" className="underline">服务条款</a>并确认您已阅读<a href="#" className="underline">隐私协议</a>了解我们如何收集、使用和共享您的数据。
            </p>
            <button className="px-8 py-2.5 bg-[#3370FF] hover:bg-blue-700 text-white rounded text-[13px] font-medium transition-colors shrink-0">
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 变体 A: 经典对照版 (Classic) - 原先漏掉的版本 ---
  const VariantClassic = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
      <div className="flex-1 max-w-[420px]">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          {source === 'pricing' ? '购买咨询' : '联系销售'}
        </h1>
        <p className="text-base text-gray-600 mb-8">
          {source === 'pricing' ? '获取适合您团队的报价方案。' : '在 Meegle 里畅快协作？'}
        </p>
        
        <div className="space-y-4 mb-8">
          {['预约 Meegle 产品演示', '为你的团队选择最佳版本', '获取你所在行业的最佳实践', '从你现有的工具迁移到 Meegle'].map((text, i) => (
            <div key={i} className="flex items-center gap-3 text-[13px] text-gray-800 font-medium">
              <Check size={16} className="text-gray-900 shrink-0" />
              {text}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[13px] text-gray-600 font-medium mb-10">
          <HelpCircle size={14} className="shrink-0" />
          <span>获取更多产品信息或客户支持，请访问<a href="#" className="text-blue-600 hover:underline">帮助中心</a></span>
        </div>

        <Logos layout="grid" />
      </div>

      <div className="w-full md:w-[480px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100">
        <FormFields ctaText="获得专属支持" variant="Classic" />
      </div>
    </div>
  );

  // --- 变体 B: 沉浸居中版 (Immersive) - 融入“信任驱动” ---
  const VariantImmersive = () => (
    <div className="max-w-[800px] mx-auto py-20 px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        {source === 'pricing' ? '与销售专家聊聊' : '与产品专家聊聊'}
      </h1>
      <p className="text-[15px] text-gray-500 mb-8 max-w-[480px]">
        {source === 'pricing' ? '了解最新的价格方案与企业折扣，获取专属报价单。' : '告诉我们您的业务痛点，我们将为您提供定制化的协作方案。'}
      </p>
      
      {/* 融入信任背书元素 */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="flex -space-x-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#F8FAFC] bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">张</div>
          <div className="w-8 h-8 rounded-full border-2 border-[#F8FAFC] bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">李</div>
          <div className="w-8 h-8 rounded-full border-2 border-[#F8FAFC] bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">王</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <span className="text-[11px] text-gray-500 mt-0.5">超过 10,000+ 企业信赖选择</span>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="flex items-center gap-1.5 text-gray-600">
          <ShieldCheck size={16} className="text-green-500" />
          <span className="text-[11px] font-medium">ISO 27001 安全认证</span>
        </div>
      </div>

      <div className="w-full max-w-[560px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-10 border border-gray-100 text-left">
        <FormFields ctaText="提交需求" variant="Immersive" />
      </div>

      <div className="mt-16 w-full flex flex-col items-center border-t border-gray-100 pt-10">
        <Logos layout="flex" />
      </div>
    </div>
  );

  // --- 变体 C: 分步降阻版 (Multi-step) - 融入“动态权益” ---
  const VariantMultiStep = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-16">
      <div className="flex-1 max-w-[460px]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-md mb-6">
          <LayoutTemplate size={14} /> 专属方案定制
        </div>
        <h1 className="text-[34px] font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">留下您的需求<br/>解锁专属企业权益</h1>
        <p className="text-[15px] text-gray-500 mb-8 leading-relaxed">只需 2 个简单步骤，即可在购买或试用时享受以下专属服务支持：</p>
        
        {/* 融入动态权益元素 */}
        <div className="space-y-4 mb-10">
          <div className="flex gap-3">
            <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Check size={14} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-[13px]">免费的数据迁移评估</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">由高级架构师提供 1v1 的现有系统迁移方案。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Check size={14} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-[13px]">长达 30 天的高级试用</h4>
              <p className="text-[12px] text-gray-500 mt-0.5">开放所有企业级特性，无任何功能限制。</p>
            </div>
          </div>
        </div>

        <Logos layout="grid" />
      </div>

      <div className="w-full md:w-[480px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100 relative overflow-hidden min-h-[460px] flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-100'}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-100'}`} />
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-6">
          {step === 1 ? '步骤 1：了解您的企业诉求' : '步骤 2：如何发送方案给您？'}
        </h3>

        {step === 1 ? (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300 flex-1">
            <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm text-gray-700 bg-white">
              <option value="">你需要什么帮助？*</option>
              <option value="demo">预约产品演示</option>
              <option value="pricing">咨询价格方案</option>
              <option value="tech">技术与集成支持</option>
            </select>
            <button onClick={() => setStep(2)} className="w-full h-12 bg-[#2152F3] hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 mt-6">
              下一步 <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300 flex-1 flex flex-col">
            <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="企业或组织名称*" />
            <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm text-gray-700 bg-white">
              <option value="">人员规模*</option>
              <option value="1-50">1 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="201-500">201 - 500</option>
              <option value="500+">500+</option>
            </select>
            <input type="email" className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="工作邮箱*" />
            <div className="flex gap-0">
              <select className="w-[100px] h-12 pl-4 pr-8 border border-gray-300 border-r-0 rounded-l-lg outline-none focus:border-blue-500 text-sm bg-gray-50">
                <option value="+86">+86</option>
              </select>
              <input type="tel" className="flex-1 h-12 px-4 border border-gray-300 rounded-r-lg outline-none focus:border-blue-500 text-sm" placeholder="手机号*" />
            </div>
            
            <div className="mt-auto pt-6">
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="w-12 h-12 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg font-medium flex items-center justify-center transition-all shrink-0">
                  <ArrowLeft size={16} />
                </button>
                <button className="flex-1 h-12 bg-[#2152F3] hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-sm shadow-blue-500/20">
                  获取专属解决方案
                </button>
              </div>
              <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">继续使用即表示您同意我们的<a href="#" className="underline">服务条款</a>并确认隐私协议。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // 变体D和变体E已根据要求移除

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1F2329] flex flex-col relative">
      {/* 实验控制台 (仅供内部查看) */}
      <div className="bg-[#1F2329] px-6 py-3 flex items-center justify-between z-50">
        <div className="font-bold text-xs text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          A/B 实验台：留资转化优化
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-md p-1 mr-4">
            <button
              onClick={() => setSource('contact')}
              className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                source === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              入口：联系我们
            </button>
            <button
              onClick={() => setSource('pricing')}
              className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                source === 'pricing' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              入口：购买咨询
            </button>
          </div>
          
          <div className="flex gap-1 overflow-x-auto">
          {[
            { id: 'Online', label: '线上原版 (Control)', sources: ['contact', 'pricing'] },
            { id: 'Classic', label: '变体A: 经典左右布局', sources: ['contact'] },
            { id: 'Immersive', label: '变体B: 沉浸居中', sources: ['contact', 'pricing'] },
            { id: 'MultiStep', label: '变体C: 分步降阻', sources: ['contact'] }
          ].filter(v => v.sources.includes(source)).map(v => (
            <button
              key={v.id}
              onClick={() => { setActiveVariant(v.id); setStep(1); }}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all whitespace-nowrap ${
                activeVariant === v.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
      </div>

      <Navbar />

      {/* 实验变体渲染区 */}
      <div className="flex-1 bg-gradient-to-b from-[#F4F7FF]/60 to-transparent">
        <div className="transition-opacity duration-500">
          {activeVariant === 'Online' && <VariantOnline />}
          {activeVariant === 'Classic' && <VariantClassic />}
          {activeVariant === 'Immersive' && <VariantImmersive />}
          {activeVariant === 'MultiStep' && <VariantMultiStep />}
        </div>
      </div>
    </div>
  );
};

export default LeadFormExperiment;
