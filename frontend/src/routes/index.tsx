import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { adventDaysQueryOptions } from '../queries/adventQueries';
import { Lock, Unlock, Gift } from 'lucide-react';
import '../styles/home.css';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(adventDaysQueryOptions);
  }
});

function HomeComponent() {
  const { data, isLoading, error } = useQuery(adventDaysQueryOptions);

  if (error) {
    return (
      <div className="container">
        <div className="error-message glass-panel">
          <h2>Error Loading Calendar</h2>
          <p>{error instanceof Error ? error.message : 'Failed to load advent days'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="hero animate-fade-in">
        <h1 className="hero-title">
          <span className="hero-title-main">Welcome to the</span>
          <span className="hero-title-sub">Advent of <span className="gradient-text">Backends</span></span>
        </h1>
        
        {/* Subheader badge with Motia logo */}
        <div className="hero-badge">
          <img src="https://www.motia.dev/icon.png" alt="Motia" className="hero-badge-logo" />
          <span>Join us for 30 days of Motia coding!</span>
        </div>
        
        <p className="hero-description">
          Every day, we're sharing a new, ready-to-run backend example.<br/>
          See how easy (and fun) it is to build with Motia. 🎄✨
        </p>
      </section>

      {isLoading ? (
        <div className="days-grid">
          {Array.from({ length: 12 }).map((_, n) => (
            <div key={n} className="day-card loading">
              <div className="day-card-content">
                <div className="skeleton"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="days-grid">
          {data?.data?.map((day, index) => {
            const isLocked = !day.unlocked;
            
            if (isLocked) {
              return (
                <div 
                  key={day.day} 
                  className="day-card locked"
                  style={{ animationDelay: `${Math.min(index * 0.05, 1)}s` }}
                >
                  <div className="day-card-ribbon locked"></div>
                  <div className="day-card-content">
                    <div className="day-header">
                      <span className="day-number">Day {day.day}</span>
                      <Lock size={18} className="day-lock-icon" />
                    </div>
                    
                    <h3 className="day-title">{day.title}</h3>
                    <p className="day-description">{day.description}</p>
                    
                    <div className="day-footer">
                      <span className="unwrap-btn locked">
                        Unwrap Magic <Gift size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={day.day}
                to="/day/$dayNumber"
                params={{ dayNumber: day.day.toString() }}
                className="day-card"
                style={{ animationDelay: `${Math.min(index * 0.05, 1)}s` }}
              >
                <div className="day-card-ribbon"></div>
                
                <div className="day-card-content">
                  <div className="day-header">
                    <span className="day-number">Day {day.day}</span>
                    <Unlock size={18} className="day-unlock-icon" />
                  </div>
                  
                  <h3 className="day-title">{day.title}</h3>
                  <p className="day-description">{day.description}</p>
                  
                  <div className="day-footer">
                    <span className="unwrap-btn">
                      Unwrap Magic <Gift size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <section className="cta-section">
        <h2 className="cta-title">Create Your Own Holiday Magic</h2>
        <p className="cta-description">
          The best gift you can give yourself is the power to build anything. 
          Start your Motia journey today and turn your backend ideas into reality.
        </p>
        <div className="cta-buttons">
          <a href="https://www.motia.dev/docs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Start Building Now
          </a>
          <a href="https://github.com/MotiaDev/motia" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Star on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
