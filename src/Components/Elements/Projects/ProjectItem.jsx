import ProjectImage from "./ProjectImage";

const ProjectItem = ({ project, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className="flex flex-col sm:flex-row gap-4 md:mt-24 mt-20 sm:gap-[80px] items-center relative">

            {/* Timeline Horizontal Line */}
            <div className={`h-[2px] absolute top-1/2 hidden sm:block bg-orgClr 
        ${isLeft ? "left-[20%] right-1/2" : "left-1/2 right-[20%]"}`} />

            {/* Timeline Dot */}
            <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-4 h-4 hidden sm:block rounded-full border-[3px] border-orgClr absolute left-1/2 -translate-x-1/2 bg-white z-10 hover:scale-125 duration-200"
            />

            {/* LEFT IMAGE */}
            {isLeft && (
                <ProjectImage project={project} />
            )}

            {/* CONTENT */}
            <div className={`w-full ${!isLeft ? "text-right" : ""}`}>
                <h3
                    className="font-bold md:text-[40px] text-[30px]"
                    style={{ color: project.color }}
                >
                    {project.title}
                </h3>

                <h2
                    className="text-lg opacity-90"
                    style={{ color: project.color }}>
                    ({project.subtitle})
                </h2>

                <p className="text-justify mt-2 text-gray-700 dark:text-gray-300">
                    {project.description}
                </p>

                <ul className={`flex flex-wrap gap-2 mt-2 ${!isLeft && "justify-end"}`}>
                    {project.tech.map((tech, i) => (
                        <li
                            key={i}
                            className="border rounded-full border-[#999] px-[10px] py-[5px]"
                        >
                            #{tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT IMAGE */}
            {!isLeft && (
                <ProjectImage project={project} alignRight />
            )}
        </div>
    );
};

export default ProjectItem;