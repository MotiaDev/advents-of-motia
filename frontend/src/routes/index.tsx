import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { adventDaysQueryOptions } from '../queries/adventQueries';
import { Lock, Unlock, Gift, Sparkles } from 'lucide-react';
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
          <h2>❌ Error Loading Calendar</h2>
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
          <span className="hero-title-sub">Advent of <span className="gradient-text-motia">Motia</span></span>
        </h1>
        <p className="hero-description">
          Embark on a magical journey through 30 days of backend innovation. 
          Unwrap a new powerful example each day and discover how Motia brings joy to backend development. 🎄✨
        </p>
      </section>

      {isLoading ? (
        <div className="days-grid">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div key={n} className="day-card loading">
              <div className="day-card-content">
                <div className="day-number skeleton"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="days-grid">
          {data?.data?.map((day, index) => (
            <Link
              key={day.day}
              to="/day/$dayNumber"
              params={{ dayNumber: day.day.toString() }}
              className="day-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="day-card-ribbon"></div>
              <div className="day-card-content">
                <div className="day-header">
                  <span className="day-number">Day {day.day}</span>
                  {day.unlocked ? (
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-gold opacity-70" />
                      <Unlock size={18} className="text-gold" />
                    </div>
                  ) : (
                    <Lock size={18} className="text-muted" />
                  )}
                </div>
                
                <h3 className="day-title">{day.title}</h3>
                <p className="day-description">{day.description}</p>
                
                <div className="day-footer">
                  <span className="read-more">
                    Unwrap Magic <Gift size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
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
