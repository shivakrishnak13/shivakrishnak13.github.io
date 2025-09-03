import React, { useState, useEffect } from "react";
import ReactGithubCalendar from "react-github-calendar";
import "../Styles/statistics.css";
import { AiOutlineWarning } from "react-icons/ai";

const Statistics = () => {
  const [imageLoading, setImageLoading] = useState({
    stats: true,
    languages: true,
    streak: true
  });
  const [imageErrors, setImageErrors] = useState({
    stats: false,
    languages: false,
    streak: false
  });

  const username = "shivakrishnak13";
  const theme = "vue-dark";

  const statsData = [
    {
      id: "stats",
      title: "GitHub Stats",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&theme=${theme}&show_icons=true&hide_border=true`,
      alt: "GitHub Statistics"
    },
    {
      id: "languages",
      title: "Most Used Languages",
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&langs_count=6&show_icons=true&theme=${theme}&layout=compact&hide_border=true`,
      alt: "Most Used Languages"
    },
    {
      id: "streak",
      title: "Contribution Streak",
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&border_radius=10&date_format=M%20j%5B%2C%20Y%5D`,
      alt: "GitHub Streak Stats"
    }
  ];

  const handleImageLoad = (statId) => {
    setImageLoading(prev => ({ ...prev, [statId]: false }));
  };

  const handleImageError = (statId) => {
    setImageLoading(prev => ({ ...prev, [statId]: false }));
    setImageErrors(prev => ({ ...prev, [statId]: true }));
  };

  const calendarTheme = {
    light: ['#f0f0f0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="statistics-section" id="statistics">
      <div className="statistics-header">
        <h1 className="statistics-title">
          Git <span className="statistics-title-accent">Stats</span>
        </h1>
      </div>

      <div className="statistics-container">
        {/* GitHub Calendar */}
        <div className="calendar-section">
          <div className="calendar-header">
            <h2 className="calendar-title">Contribution Activity</h2>
            <p className="calendar-subtitle">
              A year of contributions on GitHub
            </p>
          </div>
          <div className="calendar-wrapper">
            <div className="github-calendar">
              <ReactGithubCalendar
                username={username}
                colorScheme="light"
                theme={calendarTheme}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                hideColorLegend={false}
                hideMonthLabels={false}
                hideTotalCount={false}
                loading={
                  <div className="stat-card-loading">
                    <div className="loading-spinner"></div>
                  </div>
                }
                errorMessage={
                  <div className="stat-card-error">
                    <AiOutlineWarning className="error-icon" />
                    <p className="error-message">
                      Unable to load GitHub activity
                    </p>
                  </div>
                }
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* GitHub Stats Grid */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <article
              key={stat.id}
              className="stat-card"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {imageLoading[stat.id] && (
                <div className="stat-card-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
              
              {imageErrors[stat.id] && (
                <div className="stat-card-error">
                  <AiOutlineWarning className="error-icon" />
                  <p className="error-message">
                    Failed to load {stat.title}
                  </p>
                </div>
              )}

              {!imageErrors[stat.id] && (
                <img
                  className="stat-image"
                  src={stat.url}
                  alt={stat.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(stat.id)}
                  onError={() => handleImageError(stat.id)}
                  style={{
                    display: imageLoading[stat.id] ? 'none' : 'block'
                  }}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
