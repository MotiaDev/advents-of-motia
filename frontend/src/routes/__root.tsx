import { createRootRouteWithContext, Outlet, Link } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { Gift } from 'lucide-react';
import '../styles/layout.css';
import { useEffect, useState } from 'react';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent
});

function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate static snowflakes to avoid hydration mismatch
    setSnowflakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((i) => {
        const left = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const animationDelay = Math.random() * 5;
        const size = 0.5 + Math.random() * 0.5; // rem
        
        return (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${left}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
              fontSize: `${size}rem`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          >
            ❄
          </div>
        );
      })}
    </div>
  );
}

function RootComponent() {
  return (
    <div className="app">
      <Snowfall />
      
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="logo">
              <Gift className="logo-icon" size={28} color="var(--color-christmas-red)" />
              <span className="logo-text">
                Advent of <span className="gradient-text">Motia</span>
              </span>
            </Link>
            <div className="nav-links">
              <a href="https://www.motia.dev/docs" target="_blank" rel="noopener noreferrer" className="nav-link">
                Docs
              </a>
              <a href="https://github.com/MotiaDev/motia" target="_blank" rel="noopener noreferrer" className="nav-link">
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-message">
            Built with 🎄 <span className="gradient-text">Holiday Spirit</span>
          </p>
          <p className="footer-powered-by">
            Powered by <a href="https://www.motia.dev" target="_blank" rel="noopener noreferrer" className="text-gold">Motia</a> & <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer" className="text-muted-link">TanStack</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
