import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  HardHat, 
  BarChart3, 
  Database, 
  Bot, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Linkedin,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Target,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Settings,
  Calculator,
  ShieldCheck,
  Truck,
  Microscope
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-copper-500/30 bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2 text-zinc-900">
            <BrainCircuit className="text-copper-600" />
            <span>DZP</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-semibold text-zinc-500">
            <a href="#experiencia" className="hover:text-copper-600 transition-colors">Experiencia</a>
            <a href="#programa" className="hover:text-copper-600 transition-colors">Programa Formativo</a>
            <a href="#contacto" className="hover:text-copper-600 transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-500 hover:text-copper-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-zinc-200 overflow-hidden shadow-lg"
            >
              <div className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-zinc-600">
                <a href="#experiencia" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-copper-600 transition-colors">Experiencia</a>
                <a href="#programa" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-copper-600 transition-colors">Programa Formativo</a>
                <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-copper-600 transition-colors">Contacto</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-copper-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-copper-700 text-sm font-semibold mb-6 shadow-sm">
              <span>Ingeniero Civil Industrial | Relator en Inteligencia Artificial Aplicada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-zinc-900">
              Diego <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-600 to-copper-800">
                Zamorano Pérez
              </span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8 max-w-xl leading-relaxed font-medium">
              Ingeniero Civil Industrial especializado en implementación de Inteligencia Artificial en procesos organizacionales, formando equipos desde nivel operativo hasta gerencial.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#programa" className="px-6 py-3 rounded-none bg-copper-600 text-white font-semibold hover:bg-copper-700 transition-colors flex items-center gap-2 shadow-md shadow-copper-600/20">
                Ver Programa Formativo
                <ArrowRight size={18} />
              </a>
              <a href="#contacto" className="px-6 py-3 rounded-none bg-white text-zinc-900 font-semibold hover:bg-zinc-50 transition-colors border border-zinc-300 shadow-sm">
                Contactar
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative h-full">
            <div className="h-full rounded-none bg-white border border-zinc-200 p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-zinc-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-copper-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <HardHat className="w-12 h-12 text-copper-600 mb-8" />
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">Mi Diferenciador</h3>
                <p className="text-zinc-600 leading-relaxed mb-6 font-medium">
                  Mi experiencia parte en terreno. Trabajé como jornalero en construcción, lo que me permite entender los procesos desde su base operativa.
                </p>
                <p className="text-zinc-800 font-semibold">
                  Hoy combino esa experiencia con ingeniería, metodologías Lean y herramientas de IA para transformar organizaciones desde dentro.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience & Skills */}
      <section id="experiencia" className="py-20 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-copper-600" />
                <h2 className="text-3xl font-bold text-zinc-900">Experiencia Profesional</h2>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-zinc-200">
                  <div className="absolute w-3.5 h-3.5 bg-copper-600 rounded-full -left-[8.5px] top-1.5 ring-4 ring-white" />
                  <h4 className="text-xl font-bold text-zinc-900">Relator en Inteligencia Artificial</h4>
                  <p className="text-copper-700 font-semibold mb-2">OTEC Santa Mónica</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-zinc-200">
                  <div className="absolute w-3.5 h-3.5 bg-zinc-300 rounded-full -left-[8.5px] top-1.5 ring-4 ring-white" />
                  <h4 className="text-xl font-bold text-zinc-900">Capacitaciones en Sector Público</h4>
                  <ul className="mt-4 space-y-3 text-zinc-600 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-copper-500" /> MINEDUC (Subsecretaría de Educación Parvularia)</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-copper-500" /> SLEP Llanquihue</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-copper-500" /> OMIL</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-copper-500" /> Servicios de Salud</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-zinc-200">
                  <div className="absolute w-3.5 h-3.5 bg-zinc-300 rounded-full -left-[8.5px] top-1.5 ring-4 ring-white" />
                  <h4 className="text-xl font-bold text-zinc-900">Ingeniero en Control de Gestión</h4>
                  <p className="text-zinc-600 font-medium mt-2">BI, KPIs, automatización</p>
                </div>

                <div className="relative pl-8 border-l-2 border-transparent">
                  <div className="absolute w-3.5 h-3.5 bg-zinc-300 rounded-full -left-[8.5px] top-1.5 ring-4 ring-white" />
                  <h4 className="text-xl font-bold text-zinc-900">Consultoría</h4>
                  <p className="text-zinc-600 font-medium mt-2">Transformación digital y procesos</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <BrainCircuit className="text-copper-600" />
                <h2 className="text-3xl font-bold text-zinc-900">Habilidades Clave</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Bot, text: "IA Aplicada" },
                  { icon: BarChart3, text: "Power BI / Looker" },
                  { icon: Database, text: "Excel / Google Sheets" },
                  { icon: Database, text: "SQL y Análisis" },
                  { icon: BrainCircuit, text: "Automatización" },
                  { icon: Target, text: "Lean Management" },
                  { icon: Briefcase, text: "Gestión de Proyectos" },
                  { icon: Users, text: "Relatoría Efectiva" },
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-none bg-zinc-50 border border-zinc-200 hover:border-copper-500/50 transition-colors shadow-sm">
                    <skill.icon className="text-copper-600" size={20} />
                    <span className="text-zinc-800 font-semibold">{skill.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Casos de Aplicación Experta */}
      <section className="py-24 px-6 bg-zinc-900 text-white border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 text-center md:text-left">
            <h2 className="text-copper-500 font-mono text-sm tracking-widest uppercase mb-4 font-bold">Casos de Aplicación Experta</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 flex items-center justify-center md:justify-start gap-3">
              <Settings className="text-copper-600" size={36} />
              IA Aplicada a la Ingeniería y Operaciones
            </h3>
            <p className="text-xl text-zinc-400 max-w-3xl font-medium">
              Resolviendo desafíos reales del rubro constructivo e industrial con herramientas de Inteligencia Artificial avanzadas.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pilar 1: Ingeniería */}
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-none bg-zinc-800/50 border border-zinc-700 h-full hover:border-copper-500/50 transition-colors group">
                <Microscope className="w-10 h-10 text-copper-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4">Investigación y Soluciones Complejas</h4>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Asistencia avanzada en investigación técnica para sistemas directos e indirectos de procesos constructivos (hidráulica, neumática y otras ciencias aplicadas). Desarrollo de soluciones rápidas y precisas para problemas de alta complejidad en obra.
                </p>
              </div>
            </FadeIn>

            {/* Pilar 2: Operaciones */}
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-none bg-zinc-800/50 border border-zinc-700 h-full hover:border-copper-500/50 transition-colors group">
                <Calculator className="w-10 h-10 text-copper-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4">Operaciones y Análisis de Datos</h4>
                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                  Optimización y precisión en el cálculo de <strong className="text-zinc-200">cubicaciones</strong>.
                </p>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Análisis profundo de flotas vehiculares, transformando reportes complejos y densos de aplicaciones de gestión en información clara, visual y lista para la toma de decisiones gerenciales.
                </p>
              </div>
            </FadeIn>

            {/* Pilar 3: Seguridad y Ética */}
            <FadeIn delay={0.3}>
              <div className="p-8 rounded-none bg-zinc-800/50 border border-zinc-700 h-full hover:border-copper-500/50 transition-colors group">
                <ShieldCheck className="w-10 h-10 text-copper-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4">Visión Crítica y Seguridad de la Información</h4>
                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                  Implementación de IA con una <strong className="text-zinc-200">visión crítica y realista</strong> de sus capacidades y limitaciones, evitando el "solucionismo mágico".
                </p>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Énfasis absoluto en la protección de la información y protocolos estrictos sobre el cuidado al subir <strong className="text-zinc-200">datos sensibles</strong> de la empresa a plataformas de IA.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="programa" className="py-24 px-6 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-copper-700 font-mono text-sm tracking-widest uppercase mb-4 font-bold">Programa Formativo</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 max-w-3xl mx-auto leading-tight">
              IA Aplicada a la Gestión de Proyectos en Construcción
            </h3>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
              Aplicar herramientas de IA para mejorar la planificación, control y toma de decisiones, aumentando la eficiencia y reduciendo desviaciones.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Clock, label: "Duración", value: "24 horas" },
              { icon: GraduationCap, label: "Modalidad", value: "Teórico-práctica" },
              { icon: Users, label: "Perfil", value: "Técnicos a Gerencias" },
              { icon: Target, label: "Nivel", value: "Inicial-intermedio" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-none bg-white border border-zinc-200 text-center shadow-sm">
                  <stat.icon className="w-8 h-8 text-copper-600 mx-auto mb-4" />
                  <div className="text-sm text-zinc-500 mb-1 font-semibold uppercase tracking-wider">{stat.label}</div>
                  <div className="font-bold text-zinc-900 text-lg">{stat.value}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Diagnóstico y Madurez Digital",
                hours: "4h",
                icon: Target,
                objective: "Identificar el nivel de digitalización y oportunidades de IA.",
                tools: ["ChatGPT", "Google Forms"],
                result: "Identificación de ineficiencias y procesos automatizables."
              },
              {
                title: "IA en Planificación",
                hours: "6h",
                icon: Calendar,
                objective: "Optimizar planificación de obra mediante IA.",
                tools: ["Google Sheets", "ChatGPT"],
                result: "Planificaciones realistas y reducción de incertidumbre."
              },
              {
                title: "IA en Control de Obra",
                hours: "6h",
                icon: BarChart3,
                objective: "Mejorar el control físico-financiero en tiempo real.",
                tools: ["Looker Studio", "Power BI"],
                result: "Control preciso e información en tiempo real."
              },
              {
                title: "IA en Gestión de Riesgos",
                hours: "4h",
                icon: AlertTriangle,
                objective: "Anticipar problemas y reducir impacto.",
                tools: ["ChatGPT"],
                result: "Mejores decisiones ante escenarios de riesgo."
              },
              {
                title: "IA para Liderazgo",
                hours: "2h",
                icon: Lightbulb,
                objective: "Usar IA como copiloto estratégico.",
                tools: ["ChatGPT", "Presentaciones"],
                result: "Comunicación clara y decisiones rápidas."
              },
              {
                title: "Proyecto Final Aplicado",
                hours: "Práctico",
                icon: HardHat,
                objective: "Aplicar lo aprendido en un caso real de obra.",
                tools: ["Todas las anteriores"],
                result: "Solución funcional y documento ejecutivo."
              }
            ].map((mod, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-none bg-white border border-zinc-200 hover:border-copper-500/50 transition-colors group flex flex-col shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-none bg-zinc-50 text-copper-600 group-hover:bg-copper-600 group-hover:text-white transition-colors">
                      <mod.icon size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-zinc-400">{mod.hours}</span>
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">Módulo {i + 1}: {mod.title}</h4>
                  <p className="text-zinc-600 text-sm mb-6 flex-grow font-medium">{mod.objective}</p>
                  
                  <div className="space-y-4 mt-auto">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Herramientas</div>
                      <div className="flex flex-wrap gap-2">
                        {mod.tools.map((t, j) => (
                          <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 font-semibold border border-zinc-200">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-zinc-100">
                      <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">Resultado</div>
                      <p className="text-sm text-copper-700 font-semibold flex items-start gap-2">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-copper-600" />
                        <span>{mod.result}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Methodology & Results */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 rounded-none bg-zinc-900 border border-zinc-800 h-full shadow-xl">
                <h4 className="text-2xl font-bold text-white mb-6">Enfoque Metodológico</h4>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden flex">
                    <div className="w-[20%] bg-zinc-500" title="20% Fundamentos" />
                    <div className="w-[30%] bg-copper-700" title="30% Demostración" />
                    <div className="w-[50%] bg-copper-500" title="50% Práctica" />
                  </div>
                </div>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <div className="w-3 h-3 rounded-full bg-zinc-500" /> 20% Fundamentos
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <div className="w-3 h-3 rounded-full bg-copper-700" /> 30% Demostración
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <div className="w-3 h-3 rounded-full bg-copper-500" /> 50% Aplicación Práctica
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-none bg-white border border-zinc-200 h-full shadow-sm">
                <h4 className="text-2xl font-bold text-zinc-900 mb-6">Resultados para Empresas</h4>
                <ul className="space-y-5 font-medium">
                  {[
                    "Automatización de procesos",
                    "Mejora en control de proyectos",
                    "Reducción de errores",
                    "Toma de decisiones basada en datos"
                  ].map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700">
                      <CheckCircle2 className="text-copper-600 shrink-0 mt-0.5" size={22} />
                      <span className="text-lg">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block p-8 md:p-12 border-2 border-copper-600 bg-zinc-50 relative w-full max-w-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-copper-600 text-white px-6 py-1 text-sm font-bold tracking-widest uppercase">
                Inversión
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Valor del Programa</h3>
              <div className="flex items-end justify-center gap-2 mt-6">
                <span className="text-5xl md:text-6xl font-extrabold text-copper-700">1 UF</span>
                <span className="text-xl text-zinc-500 font-medium mb-2">/ hora líquido</span>
              </div>
              <p className="text-zinc-600 mt-6 font-medium max-w-md mx-auto">
                Capacitación especializada y práctica, enfocada en resultados reales para tu equipo o empresa.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contacto" className="py-24 px-6 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">¿Trabajamos juntos?</h2>
            <p className="text-xl font-medium mb-12 text-zinc-400 max-w-2xl mx-auto">
              Lleva la Inteligencia Artificial a tu organización con impacto real desde el primer día.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <a href="https://wa.me/56920621254?text=Hola%20Diego,%20me%20interesa%20tu%20programa%20formativo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-8 rounded-none bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-700/50 hover:border-copper-500/50 group">
                <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-copper-600 transition-colors">
                  <MessageCircle size={32} className="text-copper-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-lg text-white mb-1">WhatsApp</span>
                  <span className="text-sm text-zinc-400 font-medium">+56 9 2062 1254</span>
                </div>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diego.zamorano.wp@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-8 rounded-none bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-700/50 hover:border-copper-500/50 group">
                <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-copper-600 transition-colors">
                  <Mail size={32} className="text-copper-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-lg text-white mb-1">Gmail</span>
                  <span className="text-sm text-zinc-400 font-medium">diego.zamorano.wp@gmail.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/diego-zamorano-perez-b5720b225/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-8 rounded-none bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-700/50 hover:border-copper-500/50 group">
                <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-copper-600 transition-colors">
                  <Linkedin size={32} className="text-copper-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-lg text-white mb-1">LinkedIn</span>
                  <span className="text-sm text-zinc-400 font-medium">Conectar</span>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-500 font-medium text-sm bg-zinc-950 border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Diego Zamorano Pérez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
