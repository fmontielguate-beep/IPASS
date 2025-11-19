
import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, AppScreen, CourseState } from './types';
import { courseModules } from './data';
import { Sidebar } from './components/Sidebar';
import { Button } from './components/Button';
import { Quiz } from './components/Quiz';
import { ChevronLeft, ShieldCheck, GraduationCap } from 'lucide-react';

export default function App() {
  // State
  const [screen, setScreen] = useState<AppScreen>('login');
  const [user, setUser] = useState<User | null>(null);
  
  // Course State
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [courseState, setCourseState] = useState<CourseState>('reading');
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  
  // Login Form State
  const [loginForm, setLoginForm] = useState({ name: '', surname: '', collegiateId: '' });
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  // Effect to load user from local storage (simulate persistence)
  useEffect(() => {
    const storedUser = localStorage.getItem('ipass_user');
    if (storedUser) {
        // Simple hydration, in real app would validate token
        // We don't auto-login to allow "new attempt" logic, but we remember attempts
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Check for existing attempts for this collegiate ID in localStorage
    const storageKey = `ipass_attempts_${loginForm.collegiateId}`;
    const attempts = parseInt(localStorage.getItem(storageKey) || '0', 10);

    const newUser: User = {
      ...loginForm,
      attempts: attempts + 1
    };

    // Update storage
    localStorage.setItem(storageKey, (attempts + 1).toString());
    
    setUser(newUser);
    setScreen('course');
    setActiveModuleId(1);
    setCompletedModules([]);
    setCourseState('reading');
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'Helena2016') {
      setUser({
        name: 'Usuario',
        surname: 'Prueba',
        collegiateId: 'TEST-001',
        attempts: 99,
        isTestUser: true
      });
      setScreen('course');
      setAdminError('');
    } else {
      setAdminError('Contraseña incorrecta');
    }
  };

  const handleModuleComplete = (score: number) => {
    // Simple logic: if they finish the quiz, we mark module as done regardless of score for this demo,
    // or enforce passing. Let's mark as done.
    if (!completedModules.includes(activeModuleId)) {
      setCompletedModules([...completedModules, activeModuleId]);
    }
    
    // Check if all modules are done
    if (completedModules.length + 1 >= courseModules.length && !completedModules.includes(activeModuleId)) {
        // Course finished
        setTimeout(() => setScreen('certificate'), 1000);
    } else {
        // Go back to reading or next module
        setCourseState('reading');
        // Auto advance if available
        if (activeModuleId < courseModules.length) {
           // Optional: auto advance
           // setActiveModuleId(prev => prev + 1);
        }
    }
  };

  const activeModule = courseModules.find(m => m.id === activeModuleId) || courseModules[0];
  const progressPercentage = (completedModules.length / courseModules.length) * 100;

  // Render Login Screen
  if (screen === 'login' || screen === 'admin_login') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[url('https://picsum.photos/1920/1080?blur=4')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-amber-900/40 backdrop-blur-sm"></div>
        
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative z-10 border-t-8 border-amber-500">
          <div className="text-center mb-8">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
              <GraduationCap size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Curso I-PASS</h1>
            <p className="text-gray-600 mt-2">Maestría en Pediatría</p>
          </div>

          {screen === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  required 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  value={loginForm.name}
                  onChange={e => setLoginForm({...loginForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input 
                  required 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  value={loginForm.surname}
                  onChange={e => setLoginForm({...loginForm, surname: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de Colegiado</label>
                <input 
                  required 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  value={loginForm.collegiateId}
                  onChange={e => setLoginForm({...loginForm, collegiateId: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full py-3 mt-2">Comenzar Curso</Button>
              
              <div className="pt-4 text-center border-t border-gray-100 mt-4">
                <button 
                  type="button"
                  onClick={() => setScreen('admin_login')}
                  className="text-sm text-amber-600 hover:text-amber-800 underline"
                >
                  Acceso Curso de Prueba
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm text-amber-800 mb-4">
                Acceso protegido para evaluación del sistema.
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input 
                  required 
                  type="password" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  value={adminPassword}
                  onChange={e => setAdminPassword(e.target.value)}
                />
                {adminError && <p className="text-red-500 text-sm mt-1">{adminError}</p>}
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="secondary" onClick={() => setScreen('login')} className="flex-1">
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1">
                  Acceder
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Render Certificate/Finished Screen
  if (screen === 'certificate') {
      return (
          <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-center">
              <div className="max-w-2xl bg-white p-12 rounded-3xl shadow-xl border-4 border-amber-400">
                  <div className="text-amber-500 mb-6 flex justify-center">
                      <ShieldCheck size={80} />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Felicitaciones!</h1>
                  <p className="text-xl text-gray-600 mb-8">
                      Has completado satisfactoriamente el<br/>
                      <span className="font-bold text-amber-800">Curso de Estandarización I-PASS</span>
                  </p>
                  <div className="bg-amber-50 p-6 rounded-xl mb-8 text-left inline-block w-full">
                      <p className="text-gray-500 text-sm uppercase tracking-wide font-bold mb-1">Estudiante</p>
                      <p className="text-2xl font-serif text-gray-900 mb-4">{user?.name} {user?.surname}</p>
                      
                      <p className="text-gray-500 text-sm uppercase tracking-wide font-bold mb-1">Colegiado</p>
                      <p className="text-lg font-mono text-gray-900">{user?.collegiateId}</p>
                  </div>
                  <Button onClick={() => {
                      setScreen('login');
                      setCompletedModules([]);
                      setLoginForm({name: '', surname: '', collegiateId: ''});
                      setAdminPassword('');
                  }}>
                      Volver al Inicio
                  </Button>
              </div>
          </div>
      )
  }

  // Main Course UI
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar 
        user={user!}
        modules={courseModules}
        activeModuleId={activeModuleId}
        completedModules={completedModules}
        onSelectModule={(id) => {
            if (courseState !== 'quiz') {
                setActiveModuleId(id);
                setCourseState('reading');
            } else {
                alert("Debes terminar la evaluación actual antes de cambiar de módulo.");
            }
        }}
        onLogout={() => setScreen('login')}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Bar with Progress */}
        <header className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex-1 pr-8">
             <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                <span>Progreso del Curso</span>
                <span>{Math.round(progressPercentage)}%</span>
             </div>
             <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-amber-500 transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
             </div>
          </div>
          <div>
              {courseState === 'reading' && activeModuleId > 1 && (
                  <Button 
                    variant="secondary" 
                    onClick={() => setActiveModuleId(prev => prev - 1)}
                    className="mr-2"
                  >
                    <ChevronLeft size={18} /> Anterior
                  </Button>
              )}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-amber-50/30 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            {courseState === 'reading' ? (
              <div className="animate-fade-in">
                <div className="mb-8 border-b border-amber-200 pb-6">
                    <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Módulo {activeModule.id}</span>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{activeModule.title.split(':')[1] || activeModule.title}</h1>
                    <p className="text-lg text-gray-600 italic bg-white p-4 rounded-lg border-l-4 border-amber-400 shadow-sm">
                        {activeModule.summary}
                    </p>
                </div>
                
                <div className="prose prose-amber max-w-none mb-12">
                    {activeModule.content}
                </div>

                <div className="flex justify-center pt-8 border-t border-gray-200">
                    <Button onClick={() => setCourseState('quiz')} className="text-lg px-8 py-4 shadow-xl">
                        Realizar Autoevaluación
                    </Button>
                </div>
              </div>
            ) : (
              <Quiz 
                questions={activeModule.quiz} 
                onComplete={handleModuleComplete}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
