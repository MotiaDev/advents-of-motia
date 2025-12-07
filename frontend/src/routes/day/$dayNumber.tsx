import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Tweet } from 'react-tweet';
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Github, ExternalLink } from 'lucide-react';
import { adventDayQueryOptions } from '../../queries/adventQueries';
import '../../styles/day-detail.css';

export const Route = createFileRoute('/day/$dayNumber')({
  component: DayDetailComponent,
  loader: ({ context: { queryClient }, params: { dayNumber } }) => {
    return queryClient.ensureQueryData(adventDayQueryOptions(parseInt(dayNumber)));
  }
});

function DayDetailComponent() {
  const { dayNumber } = Route.useParams();
  const { data, isLoading, error } = useQuery(adventDayQueryOptions(parseInt(dayNumber)));

  if (error) {
    return (
      <div className="container">
        <div className="error-message glass-card">
          <h2>❌ Day Not Found</h2>
          <p>The requested day could not be found in our advent calendar.</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} /> Back to Calendar
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="day-detail loading">
          <div className="skeleton h-12 w-3/4 mb-4"></div>
          <div className="skeleton h-64 w-full"></div>
        </div>
      </div>
    );
  }

  const day = data?.data;
  if (!day) return null;

  return (
    <div className="container">
      <div className="day-detail animate-fade-in">
        <Link to="/" className="back-button">
          <ArrowLeft size={16} /> Back to Calendar
        </Link>

        <header className="day-header-detail">
          <div className="day-badge">
            <Calendar size={16} />
            <span>Day {day.day} of 30</span>
          </div>
          <h1 className="day-title-large">{day.title}</h1>
          <p className="day-subtitle">{day.description}</p>
        </header>

        <div className="day-content-grid">
          <div className="main-content">
            <div className="tweet-container glass-card">
              <div className="tweet-wrapper light">
                 <Tweet id={day.tweetId} />
              </div>
            </div>
            
            <div className="content-card glass-card">
              <h2>About this Example</h2>
              <p>{day.content}</p>
              
              {day.githubExample && (
                <div className="github-example-box">
                  <h3><Github size={20} /> Featured Example</h3>
                  <p className="example-name">{day.githubExample}</p>
                  <a 
                    href={day.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-github-link"
                  >
                    View Source Code <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar">
            {day.features && day.features.length > 0 && (
              <div className="features-card glass-card">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {day.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <CheckCircle2 size={18} className="text-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="resources-card glass-card">
              <h3>Learn More</h3>
              <div className="resource-links">
                <a
                  href="https://www.motia.dev/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/MotiaDev/motia-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  More Examples
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav className="day-navigation">
          {parseInt(dayNumber) > 1 && (
            <Link
              to="/day/$dayNumber"
              params={{ dayNumber: (parseInt(dayNumber) - 1).toString() }}
              className="nav-button nav-prev"
            >
              <ArrowLeft size={16} /> Day {parseInt(dayNumber) - 1}
            </Link>
          )}
          {parseInt(dayNumber) < 30 && (
            <Link
              to="/day/$dayNumber"
              params={{ dayNumber: (parseInt(dayNumber) + 1).toString() }}
              className="nav-button nav-next"
            >
              Day {parseInt(dayNumber) + 1} <ArrowRight size={16} />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
