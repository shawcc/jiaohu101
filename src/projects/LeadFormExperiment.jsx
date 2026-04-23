import React, { useState } from 'react';
import { Check, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, ArrowLeft, Star, LayoutTemplate, Globe, Zap, Users, MessageSquare, Kanban, Bot } from 'lucide-react';

const LeadFormExperiment = () => {
  const [activeVariant, setActiveVariant] = useState('Online');
  const [step, setStep] = useState(1);

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
          <option value="demo">预约产品演示</option>
          <option value="pricing">咨询价格方案</option>
          <option value="tech">技术与集成支持</option>
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

  // --- 变体 A: 沉浸居中版 (Immersive) ---
  const VariantImmersive = () => (
    <div className="max-w-[800px] mx-auto py-20 px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">与产品专家聊聊</h1>
      <p className="text-[15px] text-gray-500 mb-10 max-w-[480px]">告诉我们您的业务痛点，我们将为您提供定制化的协作方案与专属报价。</p>
      
      <div className="w-full max-w-[560px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-10 border border-gray-100 text-left">
        <FormFields ctaText="提交需求" variant="Immersive" />
      </div>

      <div className="mt-16 w-full flex flex-col items-center border-t border-gray-100 pt-10">
        <Logos layout="flex" />
      </div>
    </div>
  );

  // --- 变体 B: 分步降阻版 (Multi-step) ---
  const VariantMultiStep = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-16">
      <div className="flex-1 max-w-[460px]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-md mb-6">
          <LayoutTemplate size={14} /> 专属方案定制
        </div>
        <h1 className="text-[34px] font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">获取专属于您团队的<br/>最佳实践与报价</h1>
        <p className="text-[15px] text-gray-500 mb-10 leading-relaxed">只需 2 个简单步骤，即可预约演示并获取行业标杆的效率提升方案。</p>
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
            <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="企业或组织名称*" />
            <select className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm text-gray-700 bg-white">
              <option value="">人员规模*</option>
              <option value="1-50">1 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="201-500">201 - 500</option>
              <option value="500+">500+</option>
            </select>
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

  // --- 变体 C: 信任驱动版 (Trust-driven) ---
  const VariantTrust = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
      <div className="flex-1 max-w-[480px]">
        <h1 className="text-[32px] font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">全球 10,000+ 优秀团队的<br/>共同选择</h1>
        
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8 relative">
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-serif">"</div>
          <div className="flex text-yellow-400 mb-3 ml-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <p className="text-[14px] text-gray-700 font-medium leading-relaxed mb-5">"自从全公司迁移到 Meegle，我们跨部门的沟通效率提升了至少 40%，安全合规也完全达到了我们的严苛标准，是非常值得信赖的伙伴。"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full border border-gray-100 flex items-center justify-center text-blue-600 font-bold">张</div>
            <div>
              <div className="font-bold text-[13px] text-gray-900">张明 (Ming Zhang)</div>
              <div className="text-[12px] text-gray-500">某知名互联网公司 IT 负责人</div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="flex gap-4 items-start">
            <div className="mt-0.5 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={14} />
            </div>
            <div>
              <h4 className="font-bold text-[14px] text-gray-900">企业级数据安全</h4>
              <p className="text-[13px] text-gray-500 mt-1">符合 ISO 27001 等全球最高标准的安全合规认证。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[440px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100 shrink-0">
        <h2 className="text-xl font-bold text-gray-900 mb-2">免费申请演示</h2>
        <p className="text-[13px] text-gray-500 mb-6">填写信息，我们的产品专家将在 1 个工作日内与您联系</p>
        <FormFields ctaText="立即申请演示" variant="Trust" />
      </div>
    </div>
  );

  // --- 变体 D: 动态权益版 (Benefit-driven) ---
  const VariantBenefit = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-16">
      <div className="flex-1 sticky top-24 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs rounded-full mb-6 shadow-sm">
          限时权益
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">留下您的需求<br/>解锁专属企业权益</h1>
        <p className="text-base text-gray-600 mb-10 max-w-[400px]">现在提交需求，即可在购买或试用时享受以下专属服务支持：</p>
        
        <div className="space-y-6 mb-12">
          <div className="flex gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">免费的数据迁移评估</h3>
              <p className="text-sm text-gray-500 mt-1">由高级架构师提供 1v1 的现有系统迁移方案。</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">长达 30 天的高级试用</h3>
              <p className="text-sm text-gray-500 mt-1">开放所有企业级特性，无任何功能限制。</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Users size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">专属的实施培训</h3>
              <p className="text-sm text-gray-500 mt-1">提供面向您团队的线上实施培训课程。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[460px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-8 border border-gray-100 shrink-0">
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">获取您的专属权益</h2>
          <p className="text-[13px] text-gray-500">请确保填写有效的企业联系方式以激活权益</p>
        </div>
        <FormFields ctaText="提交并解锁权益" variant="Benefit" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1F2329] flex flex-col relative">
      {/* 实验控制台 (仅供内部查看) */}
      <div className="bg-[#1F2329] px-6 py-3 flex items-center justify-between z-50">
        <div className="font-bold text-xs text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          A/B 实验台：留资转化优化
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {[
            { id: 'Online', label: '线上原版 (Control)' },
            { id: 'Immersive', label: '变体A: 沉浸居中' },
            { id: 'MultiStep', label: '变体B: 分步降阻' },
            { id: 'Trust', label: '变体C: 信任驱动' },
            { id: 'Benefit', label: '变体D: 动态权益' }
          ].map(v => (
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

      <Navbar />

      {/* 实验变体渲染区 */}
      <div className="flex-1 bg-gradient-to-b from-[#F4F7FF]/60 to-transparent">
        <div className="transition-opacity duration-500">
          {activeVariant === 'Online' && <VariantOnline />}
          {activeVariant === 'Immersive' && <VariantImmersive />}
          {activeVariant === 'MultiStep' && <VariantMultiStep />}
          {activeVariant === 'Trust' && <VariantTrust />}
          {activeVariant === 'Benefit' && <VariantBenefit />}
        </div>
      </div>
    </div>
  );
};

export default LeadFormExperiment;
