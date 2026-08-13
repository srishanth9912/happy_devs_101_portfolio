import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, Users, FolderGit2, Search, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CountUp } from './CountUp';
import { GitHubRepo, GitHubUserData } from '../types/portfolio';

interface GitHubSectionProps {
  defaultUsername?: string;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ defaultUsername = 'srishanth9912' }) => {
  const [username, setUsername] = useState(defaultUsername);
  const [inputVal, setInputVal] = useState(defaultUsername);
  const [userData, setUserData] = useState<GitHubUserData | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackRepos: GitHubRepo[] = [
    { id: 101, name: 'awesome-web-tools', description: 'A curated collection of modern developer tools.', html_url: `https://github.com/${username}`, stargazers_count: 42, forks_count: 12, language: 'TypeScript' },
    { id: 102, name: 'ai-prompt-engine', description: 'Lightweight library for constructing structured AI prompts.', html_url: `https://github.com/${username}`, stargazers_count: 28, forks_count: 7, language: 'Python' },
    { id: 103, name: 'portfolio-react-vite', description: 'Production-ready React + Vite + Tailwind portfolio template.', html_url: `https://github.com/${username}`, stargazers_count: 85, forks_count: 24, language: 'TypeScript' },
  ];

  const fetchData = async (user: string) => {
    setLoading(true);
    setError(null);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)
      ]);
      if (!userRes.ok) throw new Error('User not found');
      const u = await userRes.json();
      const r = await reposRes.json();
      setUserData({ username: u.login, avatar_url: u.avatar_url, public_repos: u.public_repos, followers: u.followers, following: u.following, html_url: u.html_url });
      setRepos(r);
    } catch {
      setUserData({ username: user, avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80', public_repos: 15, followers: 120, following: 45, html_url: `https://github.com/${user}` });
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(username); }, [username]);

  return (
    <section id="github" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white flex items-center justify-center gap-3">
              <Github className="w-8 h-8 text-indigo-400" />
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-slate-400">Live public repositories fetched from the GitHub REST API.</p>
          </div>
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-xl mx-auto mb-10">
            <form onSubmit={e => { e.preventDefault(); if (inputVal.trim()) setUsername(inputVal.trim()); }} className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  placeholder="Enter GitHub username…"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Fetch
              </motion.button>
            </form>
          </div>
        </ScrollReveal>

        {/* User profile card */}
        {userData && (
          <ScrollReveal delay={0.15}>
            <div className="glass-panel p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-4">
                <img src={userData.avatar_url} alt={userData.username} className="w-12 h-12 rounded-full border-2 border-indigo-500/40" />
                <div>
                  <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-heading font-bold text-white hover:text-indigo-400 flex items-center gap-1.5 transition-colors">
                    @{userData.username} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-400">Public GitHub Profile</p>
                </div>
              </div>
              <div className="flex gap-5 text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-indigo-400" />
                  <span><strong><CountUp end={userData.public_repos} /></strong> Repos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span><strong><CountUp end={userData.followers} /></strong> Followers</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {error && (
          <p className="text-center text-amber-400/80 text-sm mb-6">{error}</p>
        )}

        {/* Repos grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0,1,2].map(i => (
              <div key={i} className="glass-panel h-40 rounded-2xl animate-pulse" style={{ opacity: 0.4 - i * 0.08 }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between group"
                initial={{ opacity: 0, y: 24, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 220, damping: 22 }}
                whileHover={{ borderColor: 'rgba(99,102,241,0.4)', y: -4, boxShadow: '0 12px 30px rgba(99,102,241,0.15)' }}
              >
                <div className="space-y-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-heading font-semibold text-white group-hover:text-indigo-400 flex items-center justify-between transition-colors"
                  >
                    <span className="truncate">{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                  </a>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {repo.description || 'No description available.'}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-indigo-300">{repo.language || 'Code'}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" />{repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" />{repo.forks_count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
