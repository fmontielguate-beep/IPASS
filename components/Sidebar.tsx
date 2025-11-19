
import * as React from 'react';
import { BookOpen, CheckCircle, LogOut, User as UserIcon } from 'lucide-react';
import { User, Module } from '../types';

interface SidebarProps {
  user: User;
  modules: Module[];
  activeModuleId: number;
  completedModules: number[];
  onSelectModule: (id: number) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  user,
  modules,
  activeModuleId,
  completedModules,
  onSelectModule,
  onLogout
}) => {
  return (
    <aside className="w-full md:w-72 bg-amber-100 border-r border-amber-200 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-amber-200 bg-amber-200/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500 p-2 rounded-full text-white">
            <UserIcon size={20} />
          </div>
          <div>
            <h2 className="font-bold text-amber-900 leading-tight">{user.name} {user.surname}</h2>
            <p className="text-xs text-amber-700 font-mono">Col: {user.collegiateId}</p>
          </div>
        </div>
        <div className="text-xs text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
          <span className="font-bold">Intentos del curso:</span> {user.attempts}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {modules.map((module) => {
          const isActive = activeModuleId === module.id;
          const isCompleted = completedModules.includes(module.id);

          return (
            <button
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3 ${
                isActive 
                  ? 'bg-white shadow-md border-l-4 border-amber-500' 
                  : 'hover:bg-amber-50/80 border-l-4 border-transparent'
              }`}
            >
              <div className={`mt-1 ${isCompleted ? 'text-green-600' : 'text-amber-400'}`}>
                {isCompleted ? <CheckCircle size={18} /> : <BookOpen size={18} />}
              </div>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                  Módulo {module.id}
                </span>
                <h3 className={`font-medium leading-snug ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                  {module.title.split(':')[1] || module.title}
                </h3>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-amber-200">
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 p-3 text-amber-700 hover:bg-amber-200 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};
