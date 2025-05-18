import { useState } from 'react';
import { ChevronDown, ChevronUp, LayoutDashboard, Link, List, Calendar, Info, X, Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const menus = [
    { title: 'Dashboard', icon: <LayoutDashboard /> },
    { title: 'Shortcuts', icon: <Link /> },
    { title: 'Overview', icon: <List /> },
    { title: 'Events', icon: <Calendar /> },
    { title: 'About', icon: <Info /> },
  ];

  const toggleMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <button
        className="bg-slate-800 text-white p-3 m-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <div className="bg-slate-800 text-white w-64 p-4 h-screen">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">My App</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-white" />
            </button>
          </div>
          {menus.map((menu, index) => (
            <div key={index}>
              <button
                className="flex items-center w-full justify-between p-3 hover:bg-slate-700 rounded"
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center gap-2">
                  {menu.icon}
                  <span>{menu.title}</span>
                </div>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeIndex === index && (
                <div className="bg-slate-700 p-2">
                  <p className="ml-8">Submenu 1</p>
                  <p className="ml-8">Submenu 2</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
