import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  'Backend': ['Node.js', 'Python', 'Java', 'GraphQL', 'REST APIs'],
  'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  'DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  'Tools': ['Git', 'VS Code', 'Jira', 'Figma', 'Postman']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}