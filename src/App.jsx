import { useState } from 'react'
import './App.css'
import AppRoutes from './routes'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider, useSidebar } from './context/SidebarContext'

function AppContent() {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeSidebar}
      />
      
      {/* Mobile Sidebar Drawer */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-72 bg-[hsl(var(--card))] glass-card shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 h-full">
          <Sidebar isMobile />
        </div>
      </aside>

      <main className='flex flex-row justify-center items-start gap-4 md:gap-6 p-4 md:p-6 max-w-[1700px] mx-auto'>
        {/* Desktop Sidebar */}
        <aside className="hidden md:block sidebar basis-1/5 max-w-[300px]">
          <div className="glass-card rounded-2xl overflow-hidden h-[calc(100vh-140px)] sticky top-24">
            <Sidebar />
          </div>
        </aside>

        {/* Main Body */}
        <section className="mainBody w-full md:basis-4/5">
          <div className="glass-card rounded-2xl h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar sticky top-24 p-4 md:p-6">
            <AppRoutes />
          </div>
        </section>
      </main>

    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
