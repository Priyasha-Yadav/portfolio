import { memo, useState } from "react";

const ProjectCard = memo(({ project }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            className="group relative rounded-2xl p-[1px]
      bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30
      transition-transform duration-300 ease-out hover:-translate-y-3"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Inner card */}
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-full rounded-2xl overflow-hidden
        bg-gradient-to-b from-gray-800/40 to-gray-900/80
        border border-white/10
        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]
        transition-transform duration-300 ease-out
        group-hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.45)]
        will-change-transform flex flex-col h-full"
            >
                {/* Purple glow (edge-focused, not foggy) */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-500
          bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_60%)]"
                />

                {/* Image / Video */}
                <div className="relative h-52 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                        />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative px-5 pt-4 pb-3 flex flex-col gap-2 flex-1">                    <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                </h3>

                    <p className="text-sm text-gray-400 leading-relaxed h-16 overflow-hidden">
                        {project.description}   
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-2 pt-2 flex-wrap">
                        {project.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full
                bg-white/5 border border-white/10
                text-gray-300 backdrop-blur-md
                transition group-hover:bg-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-3 mt-auto">
                        {project.demoVideo && (
                            <a
                                href={project.demoVideo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="shrink-0 h-10 px-4 rounded-lg flex items-center justify-center text-sm border border-white/10 bg-white/5 transition hover:bg-white/10"
                                title="Watch demo on YouTube"
                            >
                                Watch
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="shrink-0 h-10 px-4 rounded-lg flex items-center justify-center text-sm border border-white/10 bg-white/5 transition hover:bg-white/10"
                                title="GitHub Repository"
                            >
GitHub 
                            </a>
                        )}

                        {/* Arrow */}
                        <span
                            className="ml-auto shrink-0 h-8 w-8 rounded-full
              bg-white/5 flex items-center justify-center
              text-sm transition
              group-hover:bg-purple-700 group-hover:scale-110"
                        >
                            ↗
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
});

export default ProjectCard;
