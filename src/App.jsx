import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Brain,
  MessageSquare,
  Zap,
  Lock,
  Unlock,
  ArrowDown,
  BarChart3,
  CheckCircle2,
  Cpu,
  Fingerprint,
  FileText,
  X,
  ChevronDown,
  GitMerge,
  Share2,
  Mic2,
  History,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Play,
  Loader2
} from 'lucide-react';

// --- 样式配置 ---
const THEME = {
  bg: "bg-gray-50",
  card: "bg-white shadow-xl shadow-gray-200/60 border border-gray-100",
};

// --- Gemini API 配置 ---
// 注意：在实际部署时，建议将 API Key 放在环境变量中，或者通过后端代理调用以保护 Key
const apiKey = ""; // 系统会在运行时注入 Key

// 统一的板块进入动画封装
const SectionWrapper = ({ children, className = "", id = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-24 md:py-32 px-6 md:px-12 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};

// 装饰性的连接线
const ConnectorLine = () => (
  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-24 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent opacity-50" />
);

// --- 组件：Hero Section (封面) ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white">
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-100/40 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        style={{ y: y1, opacity }}
        className="z-10 max-w-5xl text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 text-sm font-semibold tracking-wide shadow-sm backdrop-blur-sm">
            NeurIPS 2025 Spotlight
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[1.1]">
          THOUGHT<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">COMM</span>
        </h1>

        <p className="text-lg md:text-3xl text-gray-600 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
          超越语言符号：<br className="md:hidden"/>多智能体协作中的<strong className="text-gray-900 font-semibold">思维通信</strong>范式
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 font-medium text-xs md:text-base tracking-wide uppercase">
          <p>CMU</p>
          <span className="hidden md:inline">•</span>
          <p>Meta AI</p>
          <span className="hidden md:inline">•</span>
          <p>MBZUAI</p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

// --- 组件：痛点对比 ---
const ProblemVsSolution = () => {
  return (
    <SectionWrapper className="bg-gray-50 border-t border-gray-100">
      <ConnectorLine />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">为什么要用思维通信？</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">语言是人类协作的桥梁，但对 AI 来说，它是一条<span className="text-rose-500 font-medium">狭窄且有损</span>的小路。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* 传统模式 */}
          <motion.div
            whileHover={{ y: -5 }}
            className={`${THEME.card} p-8 md:p-10 rounded-3xl relative overflow-hidden group transition-all duration-300`}
          >
            <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <MessageSquare size={240} className="text-gray-900" />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600"><MessageSquare size={24} /></div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">传统语言通信</h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">✕</div>
                <div>
                  <strong className="block text-gray-900 text-lg mb-1">信息有损 (Lossy)</strong>
                  <span className="text-gray-500 leading-relaxed text-sm md:text-base">将高维思维压缩成低维文字，丢失底层逻辑与置信度。</span>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                 <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">✕</div>
                <div>
                  <strong className="block text-gray-900 text-lg mb-1">模糊间接 (Ambiguous)</strong>
                  <span className="text-gray-500 leading-relaxed text-sm md:text-base">接收者需反向猜测发送者的意图，容易产生误解。</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* THOUGHTCOMM */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-indigo-200/40 border border-indigo-100 relative overflow-hidden group transition-all duration-300 ring-1 ring-indigo-50"
          >
            <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Brain size={240} className="text-indigo-600" />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600"><Zap size={24} /></div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">THOUGHTCOMM</h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <strong className="block text-gray-900 text-lg mb-1">思维直连 (Direct)</strong>
                  <span className="text-gray-500 leading-relaxed text-sm md:text-base">直接交换潜在变量 <code className="bg-indigo-50 px-1 py-0.5 rounded text-indigo-700 font-mono text-sm">Z_t</code>，无损传递意图。</span>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                 <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <strong className="block text-gray-900 text-lg mb-1">结构解耦 (Disentangled)</strong>
                  <span className="text-gray-500 leading-relaxed text-sm md:text-base">数学上区分“共识”与“私见”，自动路由至相关智能体。</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- 组件：理论可视化 (Theory Animation) ---
const TheoryAnimation = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStage(p => (p + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[400px] w-full bg-gray-50/50 rounded-3xl border border-gray-200 relative overflow-hidden flex flex-col items-center justify-center shadow-inner group">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

        <div className="absolute top-4 left-4 text-xs font-mono text-gray-400 bg-white/50 px-2 py-1 rounded backdrop-blur-sm border border-gray-100 z-10">
            Latent Space Visualization
        </div>

        <AnimatePresence mode="wait">
            {stage === 0 && (
                <motion.div
                    key="mixed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="text-sm font-bold text-gray-600 mb-4 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Mixed Signal (Ht)</div>
                    <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                        {/* 混合的杂乱粒子 */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-indigo-500' : i % 3 === 1 ? 'bg-rose-500' : 'bg-purple-500'}`}
                                animate={{ x: [Math.random()*60-30, Math.random()*60-30], y: [Math.random()*60-30, Math.random()*60-30] }}
                                transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}

            {stage === 1 && (
                <motion.div
                    key="filtering"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="text-sm font-bold text-indigo-600 mb-4">Disentangling...</div>
                    <div className="w-48 h-24 bg-white/80 backdrop-blur-md border border-indigo-200 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="flex flex-col items-center">
                            <Share2 className="text-indigo-500 mb-2" size={24} />
                            <code className="text-xs font-mono text-indigo-800 z-10">Jacobian Mask</code>
                        </div>
                    </div>
                </motion.div>
            )}

            {stage === 2 && (
                <motion.div
                    key="separated"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full px-4 md:px-12 flex justify-between items-center z-10 h-full pt-8"
                >
                    {/* Private A + Routing */}
                    <div className="flex flex-col items-center relative">
                        <div className="mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Agent A</div>
                        <div className="w-16 h-16 rounded-full border-2 border-rose-100 bg-white flex items-center justify-center shadow-md relative z-10">
                            <div className="w-8 h-8 bg-rose-500 rounded-full shadow-lg shadow-rose-200" />
                        </div>
                        <span className="mt-3 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded border border-rose-100">Private A</span>
                        {/* Routing Lines */}
                        <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] overflow-visible pointer-events-none -z-10">
                             <motion.path
                                d="M 0 0 L 0 -40"
                                fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                             />
                        </motion.svg>
                    </div>

                    {/* Shared + Routing */}
                    <div className="flex flex-col items-center relative -mt-4">
                        <div className="mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Global</div>
                        <div className="w-24 h-24 rounded-full border-2 border-purple-100 bg-white flex items-center justify-center shadow-xl relative z-10">
                            <div className="w-14 h-14 bg-purple-600 rounded-full shadow-lg shadow-purple-200 flex items-center justify-center text-white font-bold text-xs">
                                Zt
                            </div>
                        </div>
                        <span className="mt-3 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">Shared Truth</span>
                        {/* Routing Lines to A and B */}
                        <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] overflow-visible pointer-events-none -z-10">
                             {/* To A */}
                             <motion.path
                                d="M 0 0 Q -80 0 -120 -20"
                                fill="none" stroke="#9333ea" strokeWidth="3"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                             />
                             {/* To B */}
                             <motion.path
                                d="M 0 0 Q 80 0 120 -20"
                                fill="none" stroke="#9333ea" strokeWidth="3"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                             />
                        </motion.svg>
                    </div>

                    {/* Private B + Routing */}
                    <div className="flex flex-col items-center relative">
                        <div className="mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Agent B</div>
                         <div className="w-16 h-16 rounded-full border-2 border-indigo-100 bg-white flex items-center justify-center shadow-md relative z-10">
                            <div className="w-8 h-8 bg-indigo-500 rounded-full shadow-lg shadow-indigo-200" />
                        </div>
                        <span className="mt-3 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">Private B</span>
                         {/* Routing Lines */}
                         <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] overflow-visible pointer-events-none -z-10">
                             <motion.path
                                d="M 0 0 L 0 -40"
                                fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                             />
                        </motion.svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

// --- 组件：理论可视化区域 ---
const TheorySection = () => {
  return (
    <SectionWrapper className="bg-white">
      <ConnectorLine />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
           <div className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-6 border border-purple-100 shadow-sm">
               Theoretical Foundation
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">非参数设置下的<br/>可识别性定理</h2>

           <p className="text-lg text-gray-600 mb-10 leading-relaxed">
             THOUGHTCOMM 的核心突破在于：即使没有时间戳等辅助信息，我们也证明了可以从杂乱的观测数据 <code className="bg-gray-100 px-1 rounded text-gray-800">H_t</code> 中，唯一恢复出底层的思维结构。
           </p>

           <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="group p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-purple-50/50 hover:border-purple-100 transition-colors cursor-default"
              >
                  <h4 className="font-bold text-gray-900 flex items-center gap-3 text-lg">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Unlock size={18} /></div>
                      定理 1：共享思维解耦
                  </h4>
                  <p className="text-gray-500 mt-2 pl-[52px]">
                      数学上证明团队共识 (Shared Thoughts) 可以被完美分离，不混杂私有噪音。
                  </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="group p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-rose-50/50 hover:border-rose-100 transition-colors cursor-default"
              >
                  <h4 className="font-bold text-gray-900 flex items-center gap-3 text-lg">
                      <div className="p-2 bg-rose-100 rounded-lg text-rose-600"><Lock size={18} /></div>
                      定理 2：私有思维保留
                  </h4>
                  <p className="text-gray-500 mt-2 pl-[52px]">
                      个体的独特视角 (Private Thoughts) 被独立保护，防止长尾观点丢失。
                  </p>
              </motion.div>
           </div>
        </div>

        <TheoryAnimation />
      </div>
    </SectionWrapper>
  );
};

// --- 组件：核心工作流演示 (使用固定百分比定位) ---
const WorkflowDemo = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "1. Drafting (草稿生成)",
      desc: "智能体基于历史生成初步回复，仅用于暴露潜在意图，随后被废弃。",
      color: "bg-gray-600",
      bg: "bg-gray-100",
      text: "text-gray-600"
    },
    {
      title: "2. Snapshotting (提取状态)",
      desc: "系统截取 Transformer 最后一层的隐藏状态 Ht，就像拍摄一张“思维快照”。",
      color: "bg-indigo-600",
      bg: "bg-indigo-50",
      text: "text-indigo-600"
    },
    {
      title: "3. Uncovering (思维解码)",
      desc: "编码器将 Ht 映射到潜在空间。混合的思维像未分类的积木一样被倒出。",
      color: "bg-purple-600",
      bg: "bg-purple-50",
      text: "text-purple-600"
    },
    {
      title: "4. Routing (结构化路由)",
      desc: "利用 Jacobian 掩码像筛子一样过滤，将“共识”与“私有杂念”物理分离。",
      color: "bg-rose-600",
      bg: "bg-rose-50",
      text: "text-rose-600"
    },
    {
      title: "5. Injection (思维注入)",
      desc: "筛选后的思维被压缩成前缀向量 Pt，像芯片一样插入智能体大脑。",
      color: "bg-cyan-600",
      bg: "bg-cyan-50",
      text: "text-cyan-600"
    },
    {
      title: "6. Generation (最终生成)",
      desc: "智能体带着被修正的意图 Pt，重新审视上下文，生成高质量共识回复。",
      color: "bg-green-600",
      bg: "bg-green-50",
      text: "text-green-600"
    }
  ];

  return (
    <SectionWrapper className="bg-gray-50 border-t border-gray-200">
      <ConnectorLine />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">THOUGHTCOMM 工作流引擎</h2>

        {/* 步骤条 */}
        <div className="flex justify-center mb-16 overflow-x-auto py-2">
            <div className="flex gap-2 p-1.5 bg-white rounded-full border border-gray-200 shadow-sm">
                {steps.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setStep(i)}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${i === step ? 'text-white' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                        {i === step && (
                            <motion.div
                                layoutId="activeStep"
                                className="absolute inset-0 bg-black rounded-full shadow-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">Step {i + 1}</span>
                    </button>
                ))}
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50"
              >
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold mb-4 uppercase tracking-wider ${steps[step].bg} ${steps[step].text}`}>
                    Current Process
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-gray-900`}>{steps[step].title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {steps[step].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(prev => Math.max(0, prev - 1))}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300 hover:shadow-md transition font-medium bg-transparent"
                disabled={step === 0}
              >
                Prev
              </button>
              <button
                onClick={() => setStep(prev => Math.min(5, prev + 1))}
                className="flex-1 px-6 py-3 rounded-xl bg-black hover:bg-gray-800 text-white transition font-medium shadow-lg flex items-center justify-center gap-2 border border-black"
              >
                Next Step <ArrowDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white rounded-[2rem] border border-gray-200 aspect-[16/9] relative overflow-hidden shadow-inner group">
            <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

            <div className="absolute inset-0">

                {/* Agent A (Fixed Top 25%) */}
                <div className="absolute left-[10%] top-[25%] -translate-y-1/2 flex flex-col items-center z-10 w-24">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-indigo-100 shadow-xl flex items-center justify-center text-indigo-600 font-bold text-xl relative overflow-hidden">
                        <span className="z-10">A</span>
                        <div className="absolute inset-0 bg-indigo-50/50 z-0"></div>
                    </div>
                    <span className="mt-2 text-xs font-bold text-indigo-300 uppercase tracking-widest bg-white/80 px-2 py-1 rounded backdrop-blur-sm border border-indigo-100">Agent A</span>
                </div>

                {/* Agent B (Fixed Top 75%) */}
                <div className="absolute left-[10%] top-[75%] -translate-y-1/2 flex flex-col items-center z-10 w-24">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-cyan-100 shadow-xl flex items-center justify-center text-cyan-600 font-bold text-xl relative overflow-hidden">
                        <span className="z-10">B</span>
                        <div className="absolute inset-0 bg-cyan-50/50 z-0"></div>
                    </div>
                    <span className="mt-2 text-xs font-bold text-cyan-300 uppercase tracking-widest bg-white/80 px-2 py-1 rounded backdrop-blur-sm border border-cyan-100">Agent B</span>
                </div>

                {/* Step 1: Drafts */}
                <AnimatePresence>
                    {step === 0 && (
                        <>
                            <motion.div initial={{opacity:0, scale:0.8, x: -20}} animate={{opacity:1, scale:1, x: 0}} exit={{opacity:0, scale:0.8}} className="absolute top-[25%] left-[25%] -translate-y-1/2 bg-white p-3 rounded-xl rounded-tl-none shadow-md border border-gray-100 flex items-center gap-3 z-20">
                                <FileText size={16} className="text-indigo-300"/>
                                <span className="text-xs text-gray-400 font-mono">Draft A...</span>
                                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5}}><X size={14} className="text-red-400"/></motion.div>
                            </motion.div>
                             <motion.div initial={{opacity:0, scale:0.8, x: -20}} animate={{opacity:1, scale:1, x: 0}} exit={{opacity:0, scale:0.8}} className="absolute top-[75%] left-[25%] -translate-y-1/2 bg-white p-3 rounded-xl rounded-bl-none shadow-md border border-gray-100 flex items-center gap-3 z-20">
                                <FileText size={16} className="text-cyan-300"/>
                                <span className="text-xs text-gray-400 font-mono">Draft B...</span>
                                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5}}><X size={14} className="text-red-400"/></motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Ht Orbs Movement */}
                {(step === 1 || step === 2) && (
                    <>
                        <motion.div
                            className="absolute w-12 h-12 rounded-full bg-indigo-500 shadow-xl shadow-indigo-300/50 z-20 flex items-center justify-center text-white border-2 border-white"
                            initial={step === 1 ? { left: "25%", top: "25%", y: "-50%" } : { left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                            animate={step === 1 ? { x: 0 } : { left: "50%", top: "50%", x: "-50%", y: "-50%", scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Brain size={18} />
                        </motion.div>
                        <motion.div
                            className="absolute w-12 h-12 rounded-full bg-cyan-500 shadow-xl shadow-cyan-300/50 z-20 flex items-center justify-center text-white border-2 border-white"
                            initial={step === 1 ? { left: "25%", top: "75%", y: "-50%" } : { left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                            animate={step === 1 ? { x: 0 } : { left: "50%", top: "50%", x: "-50%", y: "-50%", scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <Brain size={18} />
                        </motion.div>
                    </>
                )}

                {/* Central Encoder - Step 2 only */}
                <AnimatePresence>
                {step === 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/80 backdrop-blur-md rounded-3xl border border-indigo-100 flex flex-col items-center justify-center z-0 shadow-2xl"
                    >
                        <Cpu size={48} className="text-indigo-600 mb-2" />
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Encoder</span>
                    </motion.div>
                )}
                </AnimatePresence>

                {/* Thought Particles - Percentage Based Alignment */}
                {(step === 2 || step === 3) && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(15)].map((_, i) => {
                            const type = i % 3;
                            const colorClass = type === 0 ? "text-purple-500" : (type === 1 ? "text-indigo-500" : "text-cyan-500");
                            const Icon = type === 0 ? Lightbulb : (type === 1 ? Sparkles : Zap);

                            // Align targets to relative container percentages
                            const targetTop = type === 0 ? "50%" : (type === 1 ? "25%" : "75%");
                            const targetLeft = type === 0 ? "50%" : "60%";

                            return (
                                <motion.div
                                    key={i}
                                    className={`absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm border border-slate-100 ${colorClass}`}
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        marginTop: "-16px",
                                        marginLeft: "-16px"
                                    }}
                                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                    animate={step === 2 ? {
                                        x: (Math.random() - 0.5) * 150,
                                        y: (Math.random() - 0.5) * 150,
                                        opacity: 1,
                                        scale: 1
                                    } : {
                                        top: targetTop,
                                        left: targetLeft,
                                        x: (Math.random() - 0.5) * 30,
                                        y: (Math.random() - 0.5) * 20,
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                                >
                                    <Icon size={14} fill="currentColor" className="opacity-20" />
                                    <Icon size={14} className="absolute" strokeWidth={2.5} />
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Step 3 Label - Centered vertically */}
                {step === 3 && (
                    <motion.div
                        initial={{opacity:0, y: 10}}
                        animate={{opacity:1, y: 0}}
                        className="absolute top-[35%] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-purple-200 px-5 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-purple-100/50 z-30"
                    >
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-xs font-bold text-purple-700">Consensus Extracted (Theorem 1)</span>
                    </motion.div>
                )}

                {/* Step 4: Injection (Pt Chips) - Percentage Based Alignment */}
                {step === 4 && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, left: "60%", top: "25%", x: "-50%", y: "-50%", scale: 0 }}
                            animate={{ opacity: 1, left: "25%", top: "25%", x: 0, y: "-50%", scale: 1 }}
                            className="absolute w-14 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-300/50 z-30 border border-indigo-400"
                        >
                            <span className="text-xs text-white font-bold font-mono">Pt</span>
                            <div className="absolute -right-1 w-1 h-4 bg-indigo-400 rounded-r-sm" />
                        </motion.div>

                         <motion.div
                            initial={{ opacity: 0, left: "60%", top: "75%", x: "-50%", y: "-50%", scale: 0 }}
                            animate={{ opacity: 1, left: "25%", top: "75%", x: 0, y: "-50%", scale: 1 }}
                            className="absolute w-14 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-300/50 z-30 border border-cyan-400"
                        >
                            <span className="text-xs text-white font-bold font-mono">Pt</span>
                            <div className="absolute -right-1 w-1 h-4 bg-cyan-400 rounded-r-sm" />
                        </motion.div>
                    </>
                )}

                {/* Step 5: Final */}
                <AnimatePresence>
                    {step === 5 && (
                        <>
                            <motion.div
                                initial={{ scale: 0, opacity: 0, x: -20 }}
                                animate={{ scale: 1, opacity: 1, x: 0 }}
                                className="absolute left-[30%] top-[25%] -translate-y-1/2 px-4 py-3 bg-white rounded-xl shadow-lg border border-green-200 flex items-center gap-3 z-20"
                            >
                                <div className="p-1.5 bg-green-50 rounded-lg text-green-600"><FileText size={16} /></div>
                                <div className="text-xs font-bold text-gray-700">Reply_v2.pdf</div>
                            </motion.div>
                             <motion.div
                                initial={{ scale: 0, opacity: 0, x: -20 }}
                                animate={{ scale: 1, opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="absolute left-[30%] top-[75%] -translate-y-1/2 px-4 py-3 bg-white rounded-xl shadow-lg border border-green-200 flex items-center gap-3 z-20"
                            >
                                <div className="p-1.5 bg-green-50 rounded-lg text-green-600"><FileText size={16} /></div>
                                <div className="text-xs font-bold text-gray-700">Reply_v2.pdf</div>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute right-[10%] top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-2xl border border-green-100 text-center shadow-2xl shadow-green-100"
                            >
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 shadow-inner">
                                    <CheckCircle2 size={32} />
                                </div>
                                <div className="text-xl font-bold text-gray-900">Consensus Reached</div>
                                <div className="text-sm text-gray-500 mt-1">Accuracy +17.2%</div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- 组件：Gemini 思维模拟器 ---
const GeminiDemoSection = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSimulate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const prompt = `
        You are a simulator for a multi-agent system described in the paper 'Thought Communication'.
        User Query: "${input}"
        
        Task:
        1. Simulate "Agent A" (Rational/Logical persona) drafting an initial short response (1 sentence).
        2. Simulate "Agent B" (Creative/Intuitive persona) drafting an initial short response (1 sentence).
        3. Extract the "Shared Latent Thought" (the abstract underlying consensus logic, 1 sentence).
        4. Generate a Final Consensus Answer based on the shared thought (1 sentence).

        Output strictly in JSON format:
        {
          "agentA": "string",
          "agentB": "string",
          "sharedThought": "string",
          "consensus": "string"
        }
      `;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        }
      );

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      try {
        const cleanJson = text.replace(/```json|```/g, '').trim();
        setResult(JSON.parse(cleanJson));
      } catch (e) {
        console.error("JSON Parse Error", e);
        setResult({
            agentA: "Simulation error...",
            agentB: "Simulation error...",
            sharedThought: "Failed to parse thought.",
            consensus: text
        });
      }

    } catch (error) {
      console.error('Gemini API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper className="bg-gray-50 border-t border-gray-200">
      <ConnectorLine />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} /> AI Interactive Demo
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ 思维共振模拟器</h2>
          <p className="text-gray-500">输入一个问题，实时观察 Agent A 与 Agent B 如何通过潜在思维达成共识。</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 overflow-hidden">
            <div className="p-8 border-b border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
                <div className="flex gap-4 max-w-2xl mx-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="例如：如何解决气候变暖？"
                        className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 bg-white shadow-sm transition-all"
                        onKeyDown={(e) => e.key === 'Enter' && handleSimulate()}
                    />
                    <button
                        onClick={handleSimulate}
                        disabled={loading || !input}
                        className="px-8 py-4 bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2 min-w-[140px] justify-center"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><Play size={18} fill="currentColor" /> 模拟</>}
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {result && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-8 md:p-12 bg-white"
                    >
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                                className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 relative"
                            >
                                <div className="absolute -top-3 left-6 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Agent A (Rational)</div>
                                <p className="text-indigo-900 text-sm italic leading-relaxed">"{result.agentA}"</p>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}
                                className="md:mt-12 p-6 rounded-2xl bg-purple-50 border border-purple-100 relative text-center"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-purple-100 shadow-sm">
                                    <GitMerge className="text-purple-500" size={24} />
                                </div>
                                <h4 className="text-purple-800 font-bold text-xs uppercase mb-2">Shared Latent Thought</h4>
                                <p className="text-purple-900 text-sm font-medium">"{result.sharedThought}"</p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 relative"
                            >
                                <div className="absolute -top-3 left-6 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">Agent B (Creative)</div>
                                <p className="text-cyan-900 text-sm italic leading-relaxed">"{result.agentB}"</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                            className="mt-8 p-6 rounded-xl bg-gray-900 text-white text-center shadow-xl"
                        >
                            <div className="flex items-center justify-center gap-2 mb-2 text-green-400 font-bold text-sm uppercase tracking-widest">
                                <CheckCircle2 size={16} /> Final Consensus Reached
                            </div>
                            <p className="text-lg md:text-xl font-light">"{result.consensus}"</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!result && !loading && (
                <div className="p-12 text-center text-gray-400 flex flex-col items-center">
                    <Brain size={48} className="mb-4 opacity-20" />
                    <p className="text-sm">等待思维输入...</p>
                </div>
            )}
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- 组件：关键机制深度 Q&A (独立翻页设计) ---
const QASection = () => {
  const questions = [
    {
      id: 1,
      icon: <Mic2 className="w-8 h-8 text-indigo-600" />,
      title: "传统的文本对话还在吗？",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold mt-1">Text</span>
            <p className="text-gray-600"><strong>显式通道</strong>：传递 "What"（细节与连贯性），保证可解释性。</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold mt-1">Thought</span>
            <p className="text-gray-600"><strong>隐式通道</strong>：传递 "Why"（逻辑与共识），减少无效争论。</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      icon: <History className="w-8 h-8 text-cyan-600" />,
      title: "上下文角色的转变？",
      content: (
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <div className="text-xs font-bold text-gray-400 uppercase mb-1">State Extraction</div>
            <div className="font-bold text-gray-700">Past-facing</div>
            <div className="text-xs text-gray-500">向后总结观点</div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
            <div className="text-xs font-bold text-indigo-400 uppercase mb-1">Inference</div>
            <div className="font-bold text-indigo-700">Future-facing</div>
            <div className="text-xs text-indigo-500">向前引导生成</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: <GitMerge className="w-8 h-8 text-rose-600" />,
      title: "如何利用私有思维？",
      content: (
        <p className="text-gray-600 leading-relaxed">
          系统不只是求平均，而是通过 <span className="font-bold text-gray-800">解耦 → 路由 → 加权 → 转化</span> 的过程，将有价值的少数派意见（私有思维）保留并转化为全员可见的显性文本，防止“多数人的暴政”。
        </p>
      )
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "协作只体现在加权吗？",
      content: (
        <div className="grid grid-cols-2 gap-3 mt-2">
          {["全局增强", "社会确认", "私有转化", "噪音屏蔽"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      )
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);

  const nextQ = () => setCurrentQ(prev => (prev + 1) % questions.length);
  const prevQ = () => setCurrentQ(prev => (prev - 1 + questions.length) % questions.length);

  return (
    <SectionWrapper className="bg-gray-50 border-t border-gray-200">
      <ConnectorLine />
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">关键机制深度问答 (Q&A)</h2>
        <p className="text-gray-500">深入解析 THOUGHTCOMM 的底层逻辑</p>
      </div>

      <div className="max-w-2xl mx-auto relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden min-h-[400px] flex flex-col">
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                {questions[currentQ].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{questions[currentQ].title}</h3>
              <div className="text-left w-full">
                {questions[currentQ].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
          <button
            onClick={prevQ}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <div className="flex gap-2">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentQ ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>

          <button
            onClick={nextQ}
            className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-gray-900/20 border border-black"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- 组件：实验结果 ---
const ResultsSection = () => {
  return (
    <SectionWrapper className="bg-white">
      <ConnectorLine />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center justify-center gap-3 text-gray-900">
          <BarChart3 className="text-indigo-600 w-8 h-8" />
          实验结果：MATH & GSM8K
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            <h3 className="text-xl font-bold text-gray-800 mb-10">MATH 准确率 (Qwen-3-1.7B)</h3>
            <div className="space-y-8 relative z-10">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">Single Agent</div>
                <div className="h-12 bg-gray-50 rounded-xl overflow-hidden relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "43.6%" }} className="h-full bg-gray-300 flex items-center px-4 text-gray-600 font-bold text-sm">43.6%</motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">Multiagent FT (SOTA)</div>
                <div className="h-12 bg-gray-50 rounded-xl overflow-hidden relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "75.8%" }} className="h-full bg-blue-400 flex items-center px-4 text-white font-bold text-sm">75.8%</motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold text-indigo-600 mb-2">THOUGHTCOMM (Ours)</div>
                <div className="h-12 bg-indigo-50 rounded-xl overflow-hidden relative ring-1 ring-indigo-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "93%" }}
                    className="h-full bg-indigo-600 flex items-center px-4 text-white font-bold text-sm shadow-lg shadow-indigo-200"
                  >
                    93.0%
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 text-xs font-bold bg-white px-3 py-1 rounded-full shadow-sm border border-green-100"
                  >
                    +17.2%
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

           {/* Cards */}
           <div className="md:col-span-2 grid grid-cols-2 gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
                  <div className="p-4 bg-white rounded-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Fingerprint className="text-indigo-600 w-8 h-8" />
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-2 tracking-tight">96.7<span className="text-2xl text-gray-400 font-medium">%</span></div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Consensus Score</div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300">
                   <div className="p-4 bg-white rounded-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Cpu className="text-cyan-600 w-8 h-8" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2 tracking-tight">轻量化训练</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">仅需训练自编码器与适配器</div>
              </motion.div>

              <div className="col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <CheckCircle2 className="text-green-400" />
                        Conclusion
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
                    THOUGHTCOMM 开创了 <strong className="text-white">Mind-to-Mind Communication</strong> 新范式。
                    通过非参数下的潜在思维解耦，我们在不损失信息的前提下实现了高效的多智能体协作。
                    </p>
                </div>
                {/* 装饰圆环 */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
              </div>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- 主应用 ---
const App = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-8 py-4 flex justify-between items-center transition-all">
        <div className="font-bold text-xl tracking-tighter text-gray-900 flex items-center gap-2">
            <Brain className="text-indigo-600 w-6 h-6"/>
            THOUGHT<span className="text-indigo-600">COMM</span>
        </div>
        <div className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 hidden md:block">
            NeurIPS 2025 Paper Presentation
        </div>
      </nav>

      <main className="pt-0">
        <Hero />
        <ProblemVsSolution />
        <TheorySection />
        <WorkflowDemo />
        <GeminiDemoSection />
        <QASection />
        <ResultsSection />
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-gray-50">
        <p>© 2025 Thought Communication Presentation.</p>
      </footer>
    </div>
  );
};

export default App;