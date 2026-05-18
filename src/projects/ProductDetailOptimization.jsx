import React, { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Image,
  Link,
  Lock,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Star,
  Users,
  X,
  Zap
} from 'lucide-react';

const product = {
  name: '组织架构插件',
  seller: '正弘盈企业数智科技有限公司',
  desc: '将客户列表接入组织架构管理视图，帮助企业客户决策链的信息关系一目了然，也能同步呈现参与人的基础信息与协作痕迹。',
  installs: 66,
  price: '¥2500.00 起',
  version: '1.1.1',
  updateAt: '2026-03-05',
  category: '组织架构管理'
};

const tabs = ['概述', '权限', '价格方案'];

const productStats = [
  ['安装', product.installs],
  ['售价', product.price],
  ['评分', '暂无'],
  ['版本', product.version]
];

const rawPainCards = [
  ['销售人员', '对接人员信息分散，客户决策人和影响人难以快速识别，跟进时需要反复查找聊天记录。'],
  ['客户经理', '企业客户组织层级复杂，关键人、协作人、审批链条经常变动，维护成本高。']
];

const improvedValues = [
  {
    title: '看清客户组织关系',
    desc: '把客户、部门、联系人和上下级关系汇总到统一视图，减少信息查找成本。'
  },
  {
    title: '沉淀关键人协作记录',
    desc: '围绕客户组织结构记录跟进状态、负责人与协作痕迹，方便团队接手。'
  },
  {
    title: '辅助销售推进决策链',
    desc: '帮助销售识别决策人、影响人和待补充信息，让推进动作更明确。'
  }
];

const scenarios = [
  '客户关系复杂，销售需要快速识别关键联系人',
  '多人共同跟进同一客户，需要同步最新组织关系',
  '客户组织架构频繁变化，需要减少人工维护遗漏',
  '管理者需要查看团队客户覆盖和推进状态'
];

const infoRows = [
  ['开发者', product.seller],
  ['联系邮箱', 'zhonghongyan@eqiyun.net'],
  ['联系电话', '18963603506'],
  ['最新版本', product.version],
  ['最近更新时间', product.updateAt]
];

const ProductIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB84D] to-[#FF7A45] flex items-center justify-center shadow-sm">
    <div className="w-7 h-7 rounded-lg bg-white/90 flex items-center justify-center text-[#F06A2A] font-black text-sm">组</div>
  </div>
);

const OriginalScreenshot = () => (
  <div className="h-[260px] bg-white rounded border border-[#DEE0E3] overflow-hidden shadow-sm">
    <div className="h-8 border-b border-[#EFF0F1] flex items-center px-3 gap-1.5 bg-[#FAFBFC]">
      <span className="w-2 h-2 rounded-full bg-[#F54A45]" />
      <span className="w-2 h-2 rounded-full bg-[#FFB400]" />
      <span className="w-2 h-2 rounded-full bg-[#00A870]" />
      <div className="ml-3 h-3 w-32 bg-[#E8EAED] rounded" />
    </div>
    <div className="grid grid-cols-[88px_1fr] h-[228px]">
      <div className="border-r border-[#EFF0F1] bg-[#F7F8FA] p-2 space-y-2">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-[#DDE2E9]" />
            <div className="h-2 rounded bg-[#DDE2E9]" style={{ width: `${34 + (i % 3) * 10}px` }} />
          </div>
        ))}
      </div>
      <div className="p-3">
        <div className="h-6 w-44 rounded bg-[#EEF2F8] mb-3" />
        <div className="grid grid-cols-6 gap-1.5 text-[8px]">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className={`h-5 rounded ${i > 10 && i < 18 ? 'bg-[#E8F3FF]' : 'bg-[#F1F3F6]'}`} />
          ))}
        </div>
        <div className="absolute" />
        <div className="mt-4 h-16 border-2 border-[#F54A45] rounded-sm" />
      </div>
    </div>
  </div>
);

const PolishedScreenshot = () => (
  <div className="h-[260px] rounded-2xl bg-gradient-to-br from-[#F7FAFF] to-[#E8F3FF] border border-[#D6E4FF] p-5 overflow-hidden">
    <div className="h-full rounded-xl bg-white shadow-sm border border-[#DEE0E3] p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="h-3 w-24 rounded bg-[#C9D9FF] mb-2" />
          <div className="h-5 w-40 rounded bg-[#245BDB]" />
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#E8FFF3] text-[#00A870] text-[11px] font-bold">已同步</div>
      </div>
      <div className="grid grid-cols-[150px_1fr] gap-4 h-[174px]">
        <div className="rounded-xl bg-[#F5F8FF] p-3 space-y-3">
          {['客户总部', '华东区域', '华南区域', 'KA 业务线'].map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-lg ${index === 0 ? 'bg-[#3370FF]' : 'bg-white border border-[#DEE0E3]'}`} />
              <div className="text-[11px] font-semibold text-[#34383F]">{item}</div>
            </div>
          ))}
        </div>
        <div className="relative rounded-xl bg-[#FAFBFC] border border-[#EFF0F1] p-4">
          <div className="absolute left-8 top-9 w-20 h-12 rounded-xl bg-white border border-[#3370FF] shadow-sm" />
          <div className="absolute left-[140px] top-4 w-24 h-12 rounded-xl bg-white border border-[#DEE0E3] shadow-sm" />
          <div className="absolute left-[140px] top-[88px] w-24 h-12 rounded-xl bg-white border border-[#DEE0E3] shadow-sm" />
          <div className="absolute left-[88px] top-[60px] w-[52px] h-px bg-[#AAB9D4]" />
          <div className="absolute left-[128px] top-[30px] w-px h-[84px] bg-[#AAB9D4]" />
          <div className="absolute right-5 bottom-4 left-5 h-7 rounded-lg bg-[#E8F3FF]" />
        </div>
      </div>
    </div>
  </div>
);

const HeroGallery = ({ variant }) => (
  <div className="relative h-[286px] bg-[#FAFBFC] flex items-center justify-center">
    <button className="absolute left-3 w-8 h-8 rounded-full bg-white border border-[#DEE0E3] flex items-center justify-center text-[#8F959E]">
      <ChevronLeft size={16} />
    </button>
    <div className="w-[560px] max-w-[78%]">
      {variant === 'before' ? <OriginalScreenshot /> : <PolishedScreenshot />}
      <div className="mt-4 flex justify-center gap-2">
        <span className="w-12 h-1 rounded-full bg-[#1F2329]" />
        <span className="w-12 h-1 rounded-full bg-[#DEE0E3]" />
        <span className="w-12 h-1 rounded-full bg-[#DEE0E3]" />
      </div>
    </div>
    <button className="absolute right-3 w-8 h-8 rounded-full bg-white border border-[#DEE0E3] flex items-center justify-center text-[#8F959E]">
      <ChevronRight size={16} />
    </button>
  </div>
);

const Sidebar = () => (
  <aside className="w-[360px] shrink-0 border-l border-[#EFF0F1] bg-white p-6 space-y-5">
    <div>
      <div className="text-base font-bold text-[#1F2329] mb-4">基本信息</div>
      <div className="border border-[#DEE0E3] rounded-lg overflow-hidden">
        {infoRows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[104px_1fr] border-b last:border-b-0 border-[#EFF0F1] text-xs">
            <div className="bg-[#FAFBFC] px-3 py-3 text-[#646A73]">{label}</div>
            <div className="px-3 py-3 text-[#1F2329] text-right truncate">{value}</div>
          </div>
        ))}
        <div className="grid grid-cols-[104px_1fr] text-xs">
          <div className="bg-[#FAFBFC] px-3 py-3 text-[#646A73]">操作手册</div>
          <div className="px-3 py-3 text-right text-[#3370FF]">查看帮助文档</div>
        </div>
      </div>
    </div>

    <div>
      <div className="text-base font-bold text-[#1F2329] mb-4">适用于以下位置</div>
      <div className="border border-[#DEE0E3] rounded-lg p-3 space-y-3">
        {[['工作台', product.category], ['插件配置', '组织架构管理'], ['详情页', '插件信息']].map(([label, value]) => (
          <div key={label} className="flex items-center gap-3 text-xs">
            <div className="w-7 h-7 rounded bg-[#F5F6F7] flex items-center justify-center text-[#8F959E]">
              <Monitor size={14} />
            </div>
            <div>
              <div className="font-semibold text-[#1F2329]">{label}</div>
              <div className="text-[#8F959E] mt-0.5">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="border border-[#DEE0E3] rounded-lg p-4">
      <div className="flex items-center gap-2 text-sm font-bold text-[#1F2329]">
        <ShieldCheck size={16} className="text-[#00A870]" />
        平台信息区保持统一
      </div>
      <p className="mt-2 text-xs leading-5 text-[#646A73]">
        开发商、联系方式、协议、适用位置等仍由平台侧边栏承载，不放回正文里。
      </p>
    </div>
  </aside>
);

const ProductHeader = ({ variant }) => (
  <div className="bg-white border-b border-[#EFF0F1]">
    <div className="h-12 px-8 flex items-center justify-between text-xs text-[#8F959E]">
      <div className="flex items-center gap-1">
        <span>推荐商品</span>
        <ChevronRight size={13} />
        <span>{product.name}</span>
      </div>
      <X size={16} />
    </div>

    <div className="grid grid-cols-[1fr_1fr] min-h-[336px]">
      <div className="px-12 py-10 border-r border-[#EFF0F1]">
        <div className="flex items-start gap-4">
          <ProductIcon />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-[#1F2329]">{product.name}</h1>
              {variant === 'after' && <span className="px-2 py-0.5 rounded bg-[#E8F3FF] text-[#3370FF] text-xs font-bold">已优化</span>}
            </div>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#646A73]">
              {variant === 'before'
                ? product.desc
                : '面向销售、客户成功和管理者的客户组织关系管理插件，帮助团队更快看清关键人、协作人和客户决策链。'}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-8 max-w-[520px]">
          {productStats.map(([label, value]) => (
            <div key={label}>
              <div className="text-xs text-[#8F959E]">{label}</div>
              <div className="mt-1 text-sm font-bold text-[#1F2329]">{value}</div>
            </div>
          ))}
        </div>

        {variant === 'after' && (
          <div className="mt-6 flex flex-wrap gap-2">
            {['客户组织关系', '销售协作', '关键人识别', '信息沉淀'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-[#F5F6F7] text-[#34383F] text-xs font-semibold">{tag}</span>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center gap-3">
          <button className="h-10 px-24 rounded bg-[#00A870] text-white text-sm font-bold">购买</button>
          <button className="w-10 h-10 rounded border border-[#DEE0E3] flex items-center justify-center text-[#646A73]">
            <Link size={15} />
          </button>
          <button className="w-10 h-10 rounded border border-[#DEE0E3] flex items-center justify-center text-[#646A73]">···</button>
        </div>
      </div>

      <HeroGallery variant={variant} />
    </div>
  </div>
);

const OriginalContent = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-base font-bold text-[#1F2329] mb-4">一、产品介绍</h2>
      <p className="text-sm leading-7 text-[#34383F]">
        客户专属接入组织架构管理工具，系统让客户决策链的信息关系一目了然，也能同步呈现参与人的基础信息与协作痕迹，方便快速掌握关键对接情况。
      </p>
    </section>

    <section>
      <h2 className="text-base font-bold text-[#1F2329] mb-4">二、角色痛点</h2>
      <div className="grid grid-cols-2 gap-6">
        {rawPainCards.map(([title, desc], index) => (
          <div key={title} className="p-4">
            <div className="h-28 bg-[#F5F6F7] rounded mb-4 flex items-center justify-center text-[#C2C8D1] text-xs">
              插画占位 {index + 1}
            </div>
            <div className="font-bold text-sm text-[#1F2329] mb-2 text-center">{title}</div>
            <p className="text-xs leading-6 text-[#646A73]">
              {desc}<span className="text-[#F54A45] font-bold">沟通成本高，信息遗漏严重。</span>
            </p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-base font-bold text-[#1F2329] mb-4">三、插件身份</h2>
      <div className="border border-[#DEE0E3] overflow-hidden text-xs w-full">
        <div className="grid grid-cols-4 bg-[#F5F6F7] font-bold text-[#1F2329]">
          {['插件名称', '插件类型', '售卖状态', '订阅价格'].map((item) => <div key={item} className="p-3 border-r last:border-r-0 border-[#DEE0E3]">{item}</div>)}
        </div>
        <div className="grid grid-cols-4 text-[#34383F]">
          {['客户组织架构插件', '普通插件', '已发布', '2500'].map((item) => <div key={item} className="p-3 border-r last:border-r-0 border-[#DEE0E3]">{item}</div>)}
        </div>
      </div>
    </section>

    <section className="space-y-5">
      <h2 className="text-base font-bold text-[#1F2329]">四、操作截图说明</h2>
      {[1, 2, 3, 4].map((item) => (
        <div key={item}>
          <div className="text-sm font-bold text-[#1F2329] mb-2">{item}. 插件配置与后台操作步骤</div>
          <OriginalScreenshot />
          <p className="mt-2 text-xs leading-5 text-[#646A73]">
            通过红框区域完成配置，管理员进入对应页面后选择需要同步的客户组织字段，保存后即可生效。
          </p>
        </div>
      ))}
    </section>
  </div>
);

const ImprovedContent = () => (
  <div className="space-y-10">
    <section>
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E8F3FF] text-[#3370FF] text-xs font-bold mb-4">
        <BadgeCheck size={14} /> 概览
      </div>
      <h2 className="text-2xl font-black text-[#1F2329] tracking-tight">把客户组织关系从“散落信息”变成“团队共用视图”</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#646A73]">
        适合需要长期跟进企业客户的销售和客户成功团队。插件帮助团队统一维护客户组织结构、关键联系人和协作记录，降低交接和跟进成本。
      </p>
    </section>

    <section className="grid grid-cols-3 gap-4">
      {improvedValues.map((item) => (
        <div key={item.title} className="rounded-xl border border-[#DEE0E3] p-5 bg-white">
          <div className="w-9 h-9 rounded-lg bg-[#E8F3FF] text-[#3370FF] flex items-center justify-center mb-4">
            <Zap size={18} />
          </div>
          <div className="font-bold text-[#1F2329]">{item.title}</div>
          <p className="mt-2 text-sm leading-6 text-[#646A73]">{item.desc}</p>
        </div>
      ))}
    </section>

    <section className="grid grid-cols-[1fr_360px] gap-6">
      <div>
        <h2 className="text-lg font-black text-[#1F2329] mb-4">核心界面</h2>
        <PolishedScreenshot />
      </div>
      <div className="rounded-xl border border-[#DEE0E3] p-5 bg-[#FAFBFC]">
        <h3 className="font-bold text-[#1F2329] mb-4">适用场景</h3>
        <div className="space-y-3">
          {scenarios.map((item) => (
            <div key={item} className="flex gap-3 text-sm leading-6 text-[#34383F]">
              <Check size={16} className="mt-1 text-[#00A870] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-lg font-black text-[#1F2329] mb-4">使用流程</h2>
      <div className="grid grid-cols-4 gap-3">
        {['安装插件', '配置客户字段', '维护组织关系', '团队协作跟进'].map((item, index) => (
          <div key={item} className="rounded-xl border border-[#DEE0E3] bg-white p-4">
            <div className="w-7 h-7 rounded-full bg-[#3370FF] text-white flex items-center justify-center text-xs font-bold mb-3">{index + 1}</div>
            <div className="font-bold text-sm text-[#1F2329]">{item}</div>
            <div className="mt-2 h-1 rounded bg-[#E8F3FF]" />
          </div>
        ))}
      </div>
    </section>

    <section className="rounded-xl border border-[#DEE0E3] overflow-hidden">
      <div className="grid grid-cols-[160px_1fr] border-b border-[#EFF0F1] text-sm">
        <div className="bg-[#FAFBFC] p-4 font-bold text-[#34383F]">插件类型</div>
        <div className="p-4 text-[#646A73]">普通插件，安装后在指定位置使用</div>
      </div>
      <div className="grid grid-cols-[160px_1fr] border-b border-[#EFF0F1] text-sm">
        <div className="bg-[#FAFBFC] p-4 font-bold text-[#34383F]">适用角色</div>
        <div className="p-4 text-[#646A73]">销售、客户成功、销售管理者、业务管理员</div>
      </div>
      <div className="grid grid-cols-[160px_1fr] text-sm">
        <div className="bg-[#FAFBFC] p-4 font-bold text-[#34383F]">服务支持</div>
        <div className="p-4 text-[#646A73]">提供帮助文档、配置指导和服务商联系方式</div>
      </div>
    </section>
  </div>
);

const PlainEditorContent = () => (
  <article className="max-w-[760px] text-sm leading-7 text-[#34383F]">
    <h2 className="text-xl font-black text-[#1F2329] tracking-tight mb-4">
      帮助团队看清客户组织关系和关键协作人
    </h2>
    <p className="mb-4">
      组织架构插件适合需要长期跟进企业客户的销售、客户成功和业务管理团队。它可以把客户组织关系、关键联系人和协作记录集中到一个视图中，减少信息散落和团队交接成本。
    </p>
    <p className="mb-8">
      当客户组织层级复杂、多人共同跟进同一客户，或客户关键人频繁变化时，团队可以通过该插件更快了解当前客户关系和下一步跟进重点。
    </p>

    <h3 className="text-base font-bold text-[#1F2329] mt-8 mb-3">Key Features</h3>
    <ul className="list-disc pl-5 space-y-2 mb-8">
      <li>维护客户、部门、联系人和上下级关系，形成团队共用的客户组织视图。</li>
      <li>记录销售、客户成功和协作人的跟进信息，方便多人协同推进。</li>
      <li>支持围绕客户组织结构查看关键人、影响人和待补充信息。</li>
      <li>帮助管理者了解团队客户覆盖情况和重点客户推进状态。</li>
    </ul>

    <h3 className="text-base font-bold text-[#1F2329] mt-8 mb-3">You can use this plugin for</h3>
    <ul className="list-disc pl-5 space-y-2 mb-8">
      <li>客户关系复杂，销售需要快速识别关键联系人。</li>
      <li>多人共同跟进同一客户，需要同步最新组织关系。</li>
      <li>客户组织架构频繁变化，需要减少人工维护遗漏。</li>
      <li>管理者需要查看团队客户覆盖和推进状态。</li>
    </ul>

    <h3 className="text-base font-bold text-[#1F2329] mt-8 mb-3">How it works</h3>
    <ol className="list-decimal pl-5 space-y-2 mb-8">
      <li>安装插件并完成必要授权。</li>
      <li>在客户详情或插件配置中维护客户组织关系。</li>
      <li>补充关键联系人、协作人和跟进状态。</li>
      <li>团队成员在统一视图中查看和更新客户关系。</li>
    </ol>

    <h3 className="text-base font-bold text-[#1F2329] mt-8 mb-3">Notes</h3>
    <p className="mb-3">
      插件安装后可在指定位置使用。具体权限范围、版本信息、开发者信息和服务协议请查看右侧基本信息区。
    </p>
    <p>
      如需配置指导，请查看
      <a href="#" className="text-[#3370FF] font-semibold hover:underline mx-1">帮助文档</a>
      或联系服务商支持。
    </p>
  </article>
);

const MarketplacePage = ({ variant }) => (
  <div className="bg-white border border-[#DEE0E3] rounded-2xl overflow-hidden shadow-sm">
    <ProductHeader variant={variant} />
    <div className="flex border-b border-[#EFF0F1] px-12 bg-white">
      {tabs.map((tab, index) => (
        <button key={tab} className={`h-14 px-5 text-sm font-bold border-b-2 ${index === 0 ? 'border-[#00A870] text-[#1F2329]' : 'border-transparent text-[#646A73]'}`}>
          {tab}
        </button>
      ))}
    </div>
    <div className="flex items-start">
      <main className="flex-1 min-w-0 p-12">
        {variant === 'before' && <OriginalContent />}
        {variant === 'after' && <ImprovedContent />}
        {variant === 'plain' && <PlainEditorContent />}
      </main>
      <Sidebar />
    </div>
  </div>
);

const ProductDetailOptimization = () => {
  const [mode, setMode] = useState('after');

  return (
    <div className="min-h-screen bg-[#F5F6F7]">
      <div className="max-w-[1500px] mx-auto px-6 py-8">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DEE0E3] text-xs font-bold text-[#3370FF] mb-3">
              <Image size={14} />
              第 6 个交互项目
            </div>
            <h1 className="text-3xl font-black text-[#1F2329] tracking-tight">商品详情页优化</h1>
          </div>

          <div className="bg-white border border-[#DEE0E3] rounded-xl p-1 flex">
            {[
              ['before', '线上基础版'],
              ['after', '同框架优化版'],
              ['plain', '朴素编辑器版']
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setMode(key)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  mode === key ? 'bg-[#3370FF] text-white shadow-sm' : 'text-[#646A73] hover:bg-[#F5F6F7]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <MarketplacePage variant={mode} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailOptimization;
