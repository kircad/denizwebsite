'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'Languages',
    items: ['Go', 'Python', 'C++', 'JavaScript', 'SQL', 'MATLAB', 'Bash'],
  },
  {
    label: 'AI & LLM',
    items: ['OpenAI & Azure OpenAI', 'Anthropic', 'Vertex AI'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Helm', 'AWS', 'Azure', 'Prometheus', 'Grafana', 'Linux'],
  },
  {
    label: 'Backend & Web',
    items: ['FastAPI', 'Flask', 'Postgres', 'Supabase', 'React', 'Next.js'],
  },
  {
    label: 'Tools & Testing',
    items: ['Git', 'GitHub Actions', 'Puppeteer', 'Jest'],
  },
];

export const Skills = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-display text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="bg-white rounded-2xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-sm text-gray-700 bg-gray-50 border border-gray-200 hover:border-cyan-400 hover:text-cyan-700 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
