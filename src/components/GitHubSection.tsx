import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, GitFork, Users, FolderGit2, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CountUp } from './CountUp';
import { GitHubRepo, GitHubUserData } from '../types/portfolio';

interface GitHubSectionProps {
  defaultUsername?: string;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ defaultUsername = 'srishanth9912' }) => {
  const username = defaultUsername;
  const [userData, setUserData] = useState<GitHubUserData | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackRepos: GitHubRepo[] = [
    { id: 101, name: 'happy_devs_101_-Campus-Complaint-', description: 'Campus complaint and grievance management portal.', html_url: `https://github.com/${username}/happy_devs_101_-Campus-Complaint-`, stargazers_count: 5, forks_count: 2, language: 'TypeScript' },
    { id: 102, name: 'CFAI_PROJECT', description: 'AI & Machine Learning algorithm repository.', html_url: `https://github.com/${username}/CFAI_PROJECT`, stargazers_count: 4, forks_count: 1, language: 'Python' },
    { id: 103, name: 'happy_devs_101_portfolio', description: 'Modern developer portfolio crafted with React & Tailwind.', html_url: `https://github.com/${username}/happy_devs_101_portfolio`, stargazers_count: 8, forks_count: 3, language: 'TypeScript' },
  ];

  const fetchData = async (user: string) => {
    setLoading(true);
    setError(null);

    const cacheKey = `github_portfolio_cache_${user}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const age = Date.now() - timestamp;
        // Cache valid for 1 hour (3,600,000 milliseconds)
        if (age < 3600000) {
          setUserData(data.user);
          setRepos(data.repos);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      // Silently ignore localStorage issues (e.g. private browsing mode)
    }

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)
      ]);
      if (!userRes.ok) throw new Error('User not found');
      const u = await userRes.json();
      const r = await reposRes.json();

      const newUserData = {
        username: u.login,
        avatar_url: u.avatar_url,
        public_repos: u.public_repos,
        followers: u.followers,
        following: u.following,
        html_url: u.html_url
      };

      setUserData(newUserData);
      setRepos(r);

      try {
        localStorage.setItem(cacheKey, JSON.stringify({
          data: { user: newUserData, repos: r },
          timestamp: Date.now()
        }));
      } catch (e) {
        // Silently ignore quota exceeded or disabled storage
      }
    } catch {
      setUserData({ username: user, avatar_url: 'https://avatars.githubusercontent.com/u/234371978?v=4', public_repos: 11, followers: 5, following: 2, html_url: `https://github.com/${user}` });
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(username); }, [username]);

  const langColors: Record<string, string> = {
    'TypeScript': '#CCFF00',
    'JavaScript': '#FF6B35',
    'Python': '#00FFD4',
    'Java': '#FF2D78',
    'HTML': '#4D7CFF',
    'CSS': '#CCFF00',
    'C': '#A8B9CC',
  };

  return (
    <section id="github" className="py-28 relative">
      <div className="section-line mb-28" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] block mb-3">// 05</span>
              <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">
                GitHub<span className="text-[#CCFF00]">.</span>
              </h2>
              <p className="text-white/30 text-base mt-4 max-w-xl">
                Live repositories, metrics, and activity from GitHub.
              </p>
            </div>

            {/* Direct Profile Link button */}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto"
              data-cursor-hover
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* User profile Card */}
        {userData && (
          <ScrollReveal delay={0.1}>
            <div className="cyber-card p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-2xl border border-white/[0.08] bg-[#080808]">
              <div className="flex items-center gap-4">
                {userData.avatar_url && (
                  <img src={userData.avatar_url} alt={userData.username}
                    className="w-12 h-12 rounded-full border-2 border-[#CCFF00]/40 shadow-lg shadow-[#CCFF00]/10" />
                )}
                <div>
                  <a href={userData.html_url} target="_blank" rel="noopener noreferrer"
                    className="text-lg font-heading font-bold text-white hover:text-[#CCFF00] flex items-center gap-1.5 transition-colors"
                    data-cursor-hover>
                    @{userData.username} <ExternalLink className="w-3.5 h-3.5 text-white/40" />
                  </a>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Public Profile</p>
                </div>
              </div>
              <div className="flex gap-6 text-sm text-white/40 font-mono">
                <div className="flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-[#CCFF00]" />
                  <span><strong className="text-white"><CountUp end={userData.public_repos} /></strong> Repos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#FF2D78]" />
                  <span><strong className="text-white"><CountUp end={userData.followers} /></strong> Followers</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {error && (
          <p className="text-[#FF2D78] text-xs font-mono mb-6">{error}</p>
        )}

        {/* Repos grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0,1,2].map(i => (
              <div key={i} className="cyber-card h-40 rounded-2xl animate-pulse bg-white/[0.02] border border-white/[0.04]" style={{ opacity: 0.3 - i * 0.08 }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => {
              const langColor = langColors[repo.language || ''] || '#CCFF00';
              return (
                <motion.div
                  key={repo.id}
                  className="cyber-card p-6 rounded-2xl flex flex-col justify-between group border border-white/[0.08] hover:border-white/20 bg-[#080808]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{
                    borderColor: `${langColor}40`,
                    y: -6,
                    boxShadow: `0 0 35px ${langColor}10`,
                  }}
                  data-cursor-hover
                >
                  <div className="space-y-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-heading font-semibold text-white group-hover:text-[#CCFF00] flex items-center justify-between transition-colors"
                    >
                      <span className="truncate">{repo.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-[#CCFF00] shrink-0 ml-2" />
                    </a>
                    <p className="text-white/30 text-xs leading-relaxed line-clamp-2 font-mono">
                      {repo.description || 'Repository on GitHub.'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.04] text-xs text-white/30 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColor, boxShadow: `0 0 8px ${langColor}60` }} />
                      {repo.language || 'Code'}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[#FF6B35]" />{repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks_count}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
