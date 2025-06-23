import {
  UserCircle,
  Headset,
  User,
  FileText,
  Box,
  LayoutGrid,
} from 'lucide-react'

const menuItems = [
  { icon: Headset, label: 'COLABORADOR', href: '/collaborators' },
  { icon: User, label: 'CLIENTE', href: '/clients', active: true },
  { icon: FileText, label: 'ORDENS', href: '/orders' },
  { icon: Box, label: 'ESTOQUE', href: '/stock' },
]

export function SideBar() {
  return (
    <aside className="flex h-screen w-48 flex-col items-center bg-background-secondary py-4">
      <div className="flex flex-col items-center text-center mb-8">
        <UserCircle size={48} className="text-text-primary" />
        <span className="mt-2 font-semibold text-text-primary">
          João Gabriel
        </span>
        <span className="text-sm text-text-secondary">Chaves</span>
      </div>

      <nav className="flex flex-col items-center space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center p-4 rounded-lg w-36 h-24 text-center ${
              item.active
                ? 'bg-interactive-primary/30 text-interactive-primary'
                : 'text-text-secondary hover:bg-background-tertiary'
            }`}
          >
            <item.icon size={32} />
            <span className="mt-2 text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="flex flex-col items-center text-text-secondary hover:text-text-primary">
          <LayoutGrid size={24} />
          <span className="text-xs tracking-widest">...</span>
        </button>
      </div>
    </aside>
  )
}
