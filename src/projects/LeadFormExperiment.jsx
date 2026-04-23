import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, ArrowLeft, Star, LayoutTemplate, Globe, Zap, Users, MessageSquare, Kanban, Bot, Trophy, X, BarChart2 } from 'lucide-react';

const ALL_VARIANTS = {
  contact: [
    { id: 'Online', label: '线上原版 (Control)' },
    { id: 'Classic', label: '变体A: 明确可获收益' },
    { id: 'Immersive', label: '变体B: 沉浸居中' },
    { id: 'MultiStep', label: '变体C: 分步降阻' },
    { id: 'Automated', label: '变体D: 效率提升版' }
  ],
  pricing: [
    { id: 'Online', label: '线上原版 (Control)' },
    { id: 'Immersive', label: '变体B: 沉浸居中' }
  ]
};

const LeadFormExperiment = () => {
  const [activeVariant, setActiveVariant] = useState('Online');
  const [step, setStep] = useState(1);
  const [source, setSource] = useState('contact'); // 'contact' (联系我们) or 'pricing' (购买咨询)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 模拟用户登录状态

  // 模拟已登录用户的预填数据
  const mockUser = {
    company: '字节跳动',
    size: '500+',
    email: 'zhangsan@bytedance.com',
    phone: '13800138000',
    firstName: '三',
    lastName: '张',
    jobTitle: '产品经理'
  };

  // 投票盘口相关状态
  const [showBettingPool, setShowBettingPool] = useState(false);
  const [voterName, setVoterName] = useState('');
  const [votedChoices, setVotedChoices] = useState(null); // { contact: 'id', pricing: 'id' }
  const [pendingVotes, setPendingVotes] = useState({ contact: null, pricing: null });
  
  const [votesData, setVotesData] = useState({ contact: {}, pricing: {} });
  const [isVoting, setIsVoting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 每次打开盘口时刷新云端数据
  useEffect(() => {
    if (showBettingPool) {
      setIsLoading(true);
      fetch('/api/vote')
        .then(res => res.json())
        .then(data => {
          if (data && data.contact) setVotesData(data);
        })
        .catch(err => console.error('获取票数失败:', err))
        .finally(() => setIsLoading(false));
    }
  }, [showBettingPool]);

  useEffect(() => {
    // 从 localStorage 读取“我自己”的投票记录
    const savedMyVote = localStorage.getItem('meegle_my_vote');
    const savedMyName = localStorage.getItem('meegle_my_name');
    if (savedMyVote) setVotedChoices(JSON.parse(savedMyVote));
    if (savedMyName) setVoterName(savedMyName);
  }, []);

  const handleVoteSubmit = async () => {
    if (!voterName.trim()) return alert('请先填写您的姓名或花名');
    if (!pendingVotes.contact || !pendingVotes.pricing) return alert('请为两个实验都选择一个方案');

    setIsVoting(true);
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          voterName: voterName.trim(),
          contactVote: pendingVotes.contact,
          pricingVote: pendingVotes.pricing
        })
      });

      if (res.ok) {
        const updatedData = await res.json();
        setVotesData(updatedData);
        setVotedChoices(pendingVotes);
        
        // 保存到本地以记住状态
        localStorage.setItem('meegle_my_vote', JSON.stringify(pendingVotes));
        localStorage.setItem('meegle_my_name', voterName.trim());
      } else {
        const error = await res.json();
        alert('提交失败: ' + (error.error || '未知错误'));
      }
    } catch (e) {
      alert('网络错误，请检查网络或确认 Vercel KV 是否配置正确');
    } finally {
      setIsVoting(false);
    }
  };

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
            defaultValue={isLoggedIn ? mockUser.company : ''}
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
            placeholder="企业或组织名称*"
          />
        </div>
        <div className="flex-1 relative">
          <select 
            defaultValue={isLoggedIn ? mockUser.size : ''}
            className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm text-gray-700 bg-white"
          >
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
          defaultValue={isLoggedIn ? mockUser.email : ''}
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
            defaultValue={isLoggedIn ? mockUser.phone : ''}
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
              <input type="email" defaultValue={isLoggedIn ? mockUser.email : ''} className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="name@company.com" />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">电话号码 <span className="text-red-500">*</span></label>
              <div className="flex gap-0">
                <select className="w-[70px] h-10 px-2 border border-gray-300 border-r-0 rounded-l outline-none focus:border-blue-500 text-[13px] bg-gray-50">
                  <option>+86</option>
                </select>
                <input type="tel" defaultValue={isLoggedIn ? mockUser.phone : ''} className="flex-1 h-10 px-3 border border-gray-300 rounded-r outline-none focus:border-blue-500 text-[13px]" placeholder="请输入" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">名字 <span className="text-red-500">*</span></label>
              <input type="text" defaultValue={isLoggedIn ? mockUser.firstName : ''} className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="Jane" />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">姓氏 <span className="text-red-500">*</span></label>
              <input type="text" defaultValue={isLoggedIn ? mockUser.lastName : ''} className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="Doe" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">公司名称 <span className="text-red-500">*</span></label>
              <input type="text" defaultValue={isLoggedIn ? mockUser.company : ''} className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px]" placeholder="Acme Inc." />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-[13px] text-gray-700 font-medium">公司规模 <span className="text-red-500">*</span></label>
              <select defaultValue={isLoggedIn ? mockUser.size : ''} className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px] bg-white appearance-none">
                <option value="">请选择</option>
                <option value="1-50">1 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-500">201 - 500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[13px] text-gray-700 font-medium">职位 <span className="text-red-500">*</span></label>
            <select defaultValue={isLoggedIn ? mockUser.jobTitle : ''} className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-[13px] bg-white appearance-none">
              <option value="">请选择</option>
              <option value="产品经理">产品经理</option>
              <option value="研发工程师">开发工程师</option>
              <option value="总监/高管">总监/高管</option>
              <option value="其他">其他</option>
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

  // --- 提取变体A和变体C共用的左侧“明确收益”组件，以控制实验变量 ---
  const BenefitLeftSide = () => (
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
  );

  // --- 变体 A: 明确收益 (原经典对照版) ---
  const VariantClassic = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
      <BenefitLeftSide />
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

  // --- 变体 C: 分步降阻版 (Multi-step) ---
  const VariantMultiStep = () => (
    <div className="max-w-[1080px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-16">
      <BenefitLeftSide />

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
            <input type="text" defaultValue={isLoggedIn ? mockUser.company : ''} className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="企业或组织名称*" />
            <select defaultValue={isLoggedIn ? mockUser.size : ''} className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm text-gray-700 bg-white">
              <option value="">人员规模*</option>
              <option value="1-50">1 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="201-500">201 - 500</option>
              <option value="500+">500+</option>
            </select>
            <input type="email" defaultValue={isLoggedIn ? mockUser.email : ''} className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="工作邮箱*" />
            <div className="flex gap-0">
              <select className="w-[100px] h-12 pl-4 pr-8 border border-gray-300 border-r-0 rounded-l-lg outline-none focus:border-blue-500 text-sm bg-gray-50">
                <option value="+86">+86</option>
              </select>
              <input type="tel" defaultValue={isLoggedIn ? mockUser.phone : ''} className="flex-1 h-12 px-4 border border-gray-300 rounded-r-lg outline-none focus:border-blue-500 text-sm" placeholder="手机号*" />
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

  // --- 变体 D: 效率提升版 (Automated) - 英文版官网布局 ---
  const VariantAutomated = () => (
    <div className="max-w-[1200px] mx-auto py-24 px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
      {/* 左侧文案与图示 */}
      <div className="flex-1 max-w-[540px]">
        <h1 className="text-[44px] font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">Automated. Accelerated. Integrated.</h1>
        <p className="text-xl text-gray-500 mb-12">Automate repetitive tasks and integrations with a variety of tools, all in one place with Meegle</p>
        
        {/* 模拟工作流配图 */}
        <div className="relative w-full aspect-[4/3] bg-[#FCF8F3] rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50" />
          
          <div className="relative z-10 flex flex-col gap-4">
            {/* 模拟节点 1 */}
            <div className="w-[280px] bg-white rounded-lg shadow-sm border border-blue-200 overflow-hidden ml-12">
              <div className="bg-blue-600 px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-bold">
                <div className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center"><Check size={8} /></div>
                Trigger
              </div>
              <div className="p-4 text-sm font-medium text-gray-800">
                When <span className="text-blue-600">Issues</span> status changed from <span className="text-blue-600">Any-state</span> to <span className="text-blue-600">Closed</span>
              </div>
            </div>
            
            {/* 连接线 */}
            <div className="w-px h-6 bg-gray-300 ml-48" />

            {/* 模拟悬浮菜单 */}
            <div className="absolute left-0 top-32 w-[220px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2 z-20">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white"><MessageSquare size={16} /></div>
                <span className="text-sm font-medium text-gray-700">Send Notifications</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white"><Users size={16} /></div>
                <span className="text-sm font-medium text-gray-700">Create Group Chat</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white"><Check size={16} /></div>
                <span className="text-sm font-medium text-gray-700">Status Update</span>
              </div>
            </div>

            {/* 模拟节点 2 */}
            <div className="w-[280px] bg-white rounded-lg shadow-sm border border-green-200 overflow-hidden ml-48">
              <div className="bg-emerald-500 px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-bold">
                <div className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center"><Check size={8} /></div>
                Issue Status Update
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 font-medium mb-3">Following Issues have been closed</p>
                <div className="space-y-2">
                  <div className="text-xs text-blue-600 font-medium">Display mode orientation not correc...</div>
                  <div className="text-xs text-blue-600 font-medium">Crush when multi-tapping</div>
                  <div className="text-xs text-blue-600 font-medium">Loading Stuck</div>
                </div>
                <button className="mt-4 w-full py-1.5 border border-blue-200 text-blue-600 rounded text-xs font-bold">Change to Reopen</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧中文版单列长表单 */}
      <div className="w-full md:w-[480px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100">
        <FormFields ctaText="提交" variant="Automated" />
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
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-md p-1">
            <button
              onClick={() => setIsLoggedIn(false)}
              className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                !isLoggedIn ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              未登录访客
            </button>
            <button
              onClick={() => setIsLoggedIn(true)}
              className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                isLoggedIn ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              已登录用户
            </button>
          </div>

          <div className="w-px h-4 bg-gray-700" />

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
          {ALL_VARIANTS[source].map(v => (
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
          {activeVariant === 'Webinar' && <VariantWebinar />}
        </div>
      </div>

      {/* 悬浮盘口按钮 */}
      <button
        onClick={() => setShowBettingPool(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6 py-3.5 shadow-xl flex items-center gap-2 font-bold text-sm transition-transform hover:scale-105 z-[90]"
      >
        <Trophy size={18} className="text-yellow-300" />
        {votedChoices ? '查看盘口赛况' : '参与组内预测'}
      </button>

      {/* 实验说明与投票侧边栏 */}
      {showBettingPool && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]" onClick={() => setShowBettingPool(false)} />
          <div className="fixed inset-y-0 right-0 w-[440px] bg-white shadow-2xl z-[100] flex flex-col border-l border-gray-200 animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-lg font-extrabold flex items-center gap-2 text-gray-900">
                <BarChart2 className="text-blue-600" size={22} />
                留资转化实验盘口
              </h2>
              <button onClick={() => setShowBettingPool(false)} className="text-gray-400 hover:text-gray-900 bg-white rounded-full p-1 shadow-sm border border-gray-200">
                <X size={18} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* 实验说明 */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded mb-4">
                  <Check size={12} /> 实验目的与假设
                </div>
                <div className="space-y-4 text-[13px] text-gray-600 leading-relaxed">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900 block mb-1">线上原版 (Control)</strong>
                    作为基线（Baseline），提供当前转化率基准。左侧展示完整产品能力，右侧为长表单。
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900 block mb-1">变体 A (经典对照)</strong>
                    <span className="text-blue-600 font-medium">假设：</span>线上原版左侧信息过载。精简为短平快的 4 个“联系销售后能获得什么”（即期望值管理），能降低认知负荷，让视线更快聚焦到表单。
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900 block mb-1">变体 B (沉浸居中) + 信任驱动</strong>
                    <span className="text-blue-600 font-medium">假设：</span>隧道视觉效应（强制聚焦）+ 强有力的社会认同（星级/安全认证），能有效对冲隐私焦虑。适合强意向的「购买咨询」入口。
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900 block mb-1">变体 C (分步降阻)</strong>
                    <span className="text-blue-600 font-medium">假设：</span>利用沉没成本谬误，将长表单拆分。第一步仅 1 个无阻力选择题，极大提高漏斗起始留存。左侧维持收益描述以控制变量。
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900 block mb-1">变体 D (效率提升版)</strong>
                    <span className="text-blue-600 font-medium">假设：</span>英文官网布局风格。大字号直击痛点，配以直观的自动化工作流界面图示，配合中文单列表单，测试跨文化排版在中文语境下的转化表现。
                  </div>
                </div>
              </div>

              {/* 投票区 */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded mb-4">
                  <Trophy size={12} /> 组内下注预测
                </div>
                
                {!votedChoices ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">我是谁？（姓名/花名）</label>
                      <input 
                        type="text" 
                        value={voterName}
                        onChange={e => setVoterName(e.target.value)}
                        className="w-full h-10 px-3 border border-gray-300 rounded outline-none focus:border-blue-500 text-sm" 
                        placeholder="输入你的名字..." 
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                      <h4 className="font-bold text-sm text-gray-900">Q1. 实验一（联系我们）中，谁会胜出？</h4>
                      <div className="space-y-2">
                        {ALL_VARIANTS.contact.map(v => (
                          <button 
                            key={v.id}
                            onClick={() => setPendingVotes(p => ({ ...p, contact: v.id }))} 
                            className={`w-full text-left p-3 border rounded-lg transition-all font-medium text-sm flex justify-between items-center ${
                              pendingVotes.contact === v.id ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700 hover:border-blue-300'
                            }`}
                          >
                            {v.label}
                            {pendingVotes.contact === v.id && <Check size={16} className="text-blue-600" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
                      <h4 className="font-bold text-sm text-gray-900">Q2. 实验二（购买咨询）中，谁会胜出？</h4>
                      <div className="space-y-2">
                        {ALL_VARIANTS.pricing.map(v => (
                          <button 
                            key={v.id}
                            onClick={() => setPendingVotes(p => ({ ...p, pricing: v.id }))} 
                            className={`w-full text-left p-3 border rounded-lg transition-all font-medium text-sm flex justify-between items-center ${
                              pendingVotes.pricing === v.id ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700 hover:border-blue-300'
                            }`}
                          >
                            {v.label}
                            {pendingVotes.pricing === v.id && <Check size={16} className="text-blue-600" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={handleVoteSubmit}
                      disabled={isVoting}
                      className="w-full py-3 bg-[#2152F3] hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-bold transition-colors shadow-md flex items-center justify-center"
                    >
                      {isVoting ? '提交中...' : '提交我的预测'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* 实验一赛况 */}
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-sm text-gray-900 mb-4 border-b border-gray-200 pb-2">实验一（联系我们）当前赛况</h4>
                      <div className="space-y-4">
                        {ALL_VARIANTS.contact.sort((a, b) => (votesData.contact[b.id]?.length || 0) - (votesData.contact[a.id]?.length || 0)).map(v => {
                          const voters = votesData.contact[v.id] || [];
                          const total = Object.values(votesData.contact).reduce((sum, arr) => sum + arr.length, 0);
                          const pct = total === 0 ? 0 : Math.round((voters.length / total) * 100);
                          const isMyChoice = votedChoices.contact === v.id;
                          
                          return (
                            <div key={v.id}>
                              <div className="flex justify-between text-xs mb-1.5">
                                <span className={`font-medium ${isMyChoice ? 'text-blue-700 font-bold' : 'text-gray-700'}`}>
                                  {v.label} {isMyChoice && '👈 你选的'}
                                </span>
                                <span className="font-bold text-gray-900">{pct}% <span className="text-gray-500 font-normal">({voters.length}票)</span></span>
                              </div>
                              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                                <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${isMyChoice ? 'bg-blue-600' : 'bg-gray-400'}`} 
                                  style={{ width: `${pct}%` }} 
                                />
                              </div>
                              {voters.length > 0 && (
                                <p className="text-[10px] text-gray-500 leading-tight">支持者：{voters.join(', ')}</p>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* 实验二赛况 */}
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-sm text-gray-900 mb-4 border-b border-gray-200 pb-2">实验二（购买咨询）当前赛况</h4>
                      <div className="space-y-4">
                        {ALL_VARIANTS.pricing.sort((a, b) => (votesData.pricing[b.id]?.length || 0) - (votesData.pricing[a.id]?.length || 0)).map(v => {
                          const voters = votesData.pricing[v.id] || [];
                          const total = Object.values(votesData.pricing).reduce((sum, arr) => sum + arr.length, 0);
                          const pct = total === 0 ? 0 : Math.round((voters.length / total) * 100);
                          const isMyChoice = votedChoices.pricing === v.id;
                          
                          return (
                            <div key={v.id}>
                              <div className="flex justify-between text-xs mb-1.5">
                                <span className={`font-medium ${isMyChoice ? 'text-blue-700 font-bold' : 'text-gray-700'}`}>
                                  {v.label} {isMyChoice && '👈 你选的'}
                                </span>
                                <span className="font-bold text-gray-900">{pct}% <span className="text-gray-500 font-normal">({voters.length}票)</span></span>
                              </div>
                              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                                <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${isMyChoice ? 'bg-blue-600' : 'bg-gray-400'}`} 
                                  style={{ width: `${pct}%` }} 
                                />
                              </div>
                              {voters.length > 0 && (
                                <p className="text-[10px] text-gray-500 leading-tight">支持者：{voters.join(', ')}</p>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeadFormExperiment;
