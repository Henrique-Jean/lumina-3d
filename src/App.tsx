import { Bot, ChevronRight, Zap, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-lumina text-white font-sans selection:bg-lumina-accent selection:text-white">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <div className="w-8 h-8 bg-lumina-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <Bot size={20} className="text-white" />  
          </div>
          LUMINA<span className="text-lumina-accent">3D</span>  
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Technology</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <button className="px-6 py-2 border border-gray-700 rounded-full hover:border-lumina-accent hover:text-lumina-accent transition-all duration-300 text-sm font-medium">
          Get Started
        </button>      
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh]">

        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumina-card border border-gray-800 text-xs text-lumina-cyan font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lumina-cyan opacity-75 "></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lumina-cyan"></span>
            </span>
            Spline Integration Active
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Design for the<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-accent to-lumina-cyan">
              Next Dimension
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Experience the future of web interaction. Seamless 3D integration directly in your browser. No plugins, just pure performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-lumina-accent text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
              Explore Model <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-lumina-card border border-gray-700 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
              <Zap size={20} className="text-yellow-400" /> Demo
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck size={18} /> Secure 3D Redndering
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Zap size={18} /> 60 FPS Guarented
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full lg:h-[600px] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lumina-accent/20 rounded-full blur-[100px] -z-10"></div>
          <spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"></spline-viewer>

          <div className="absolute bottom-4 right-4 text-xs text-gray-600">
            Interactive 3D Model
          </div>
        </div>
      </main>

    </div>
  )
} 

export default App