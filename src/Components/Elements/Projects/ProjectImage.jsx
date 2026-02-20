const ProjectImage = ({ project, alignRight }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`flex w-full ${alignRight ? "justify-end mt-10" : "mb-5"}`}
    >
        <div className="relative group hover:scale-105 ease-in-out sm:hover:scale-105  duration-200">
            <span
                className={`flex group-hover:-top-16 absolute top-0 left-1/2 -translate-x-1/2 text-white w-max px-4 py-3 rounded gap-1 items-center after:content-[''] after:w-5 after:h-5 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ${project.tooltipBg}`}
            >
                {project.title}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-external-link'
                >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                </svg>
            </span>

            <img
                src={project.image}
                alt={project.title}
                className={`max-w-[300px] relative ${project.shadow}`}
            />
        </div>
    </a>
);

export default ProjectImage;
