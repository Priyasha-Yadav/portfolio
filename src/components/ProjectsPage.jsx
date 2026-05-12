import { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";
import LazyRender from './LazyRender';
import { projects, categorized } from '../data/projects';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Use centralized data to avoid repetition
  const categories = ["All", ...Object.keys(categorized)];

  // Build full list for current category (objects), defaulting to all
  const filteredList =
    activeCategory === "All"
      ? Object.keys(projects).map((k) => projects[k])
      : (categorized[activeCategory] || []).map((key) => projects[key]);

  // Visible slice for incremental loading
  const filteredProjects = filteredList.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);
  


  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden p-10">
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header with animated gradient */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient p-2 leading-[1.2]">
            My Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across various technologies and platforms, from full-stack applications to design projects.
          </p>
        </div>

        {/* Category navigation */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-2 md:justify-center min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid with animations */}

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <LazyRender key={project.url} height={420}>
                <ProjectCard project={project} />
              </LazyRender>
            ))}
          </div>

        </div>

        {/* View more button */}
        {filteredList && filteredList.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg hover:scale-[1.01] transition-transform"
            >
              View more
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectsPage;
