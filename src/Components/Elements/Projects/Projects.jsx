import Project1 from '../../images/Project_1.png'
import Project2 from '../../images/Project_2.png'
import Project3 from '../../images/Project_3.png'
import Project4 from '../../images/Project_4.png'
import Project5 from '../../images/Project_5.png'
import ProjectItem from './ProjectItem'

const Projects = () => {

    const projects = [
        {
            title: "ClevDoc Banking",
            subtitle: "Banking Loan Management",
            image: Project1,
            url: "https://clevdoc.com/",
            color: "#0B1E59",
            shadow: "drop-shadow-[0_0px_60px_#0B1E59]",
            tooltipBg: "bg-[#0B1E59]",
            description: (
                <p className='text-justify mt-2 text-gray-700 dark:text-gray-300'>
                    Architected the Clevdoc <span className='font-semibold'>Banking Platform</span>, a responsive <span className='font-semibold'>loan recovery solution</span> that enhances communication between banks and borrowers, ensuring a seamless user experience and streamlined <span className='font-semibold'>financial workflows</span>. Developed a robust <span className='font-semibold'>Banking CMS</span> to manage data efficiently, improving operational integrity and performance. Integrated a secure <span className='font-semibold'>payment gateway</span> for smooth and hassle-free transactions, and implemented real-time <span className='font-semibold'>push notifications</span> using Firebase to keep users instantly informed of critical updates.
                </p>
            ),
            tech: [
                "react.js", "tailwind css", "context api", "node.js",
                "firebase", "mongoDB", "mongoose", "css", "javascript", "figma"
            ]
        },

        {
            title: "Banking CMS",
            subtitle: "Banking Content Management System",
            image: Project2,
            url: "https://cms.clevdoc.com/",
            color: "#0B1E59",
            shadow: "drop-shadow-[0_0px_60px_#0B1E59]",
            tooltipBg: "bg-[#0B1E59]",
            description: (
                <p className='text-justify text-gray-700 dark:text-gray-300 mt-2'>
                    Designed and developed a comprehensive <span className='font-semibold'>Banking CMS</span> to <span className='font-semibold'>streamline</span> data management for <span className='font-semibold'>loan recovery operations</span>. The <span className='font-semibold'>CMS</span> enhanced operational efficiency by providing a structured, intuitive interface for <span className='font-semibold'>ClevDoc to manage</span> bank and borrower information, <span className='font-semibold'>payment statuses</span>, loan management, <span className='font-semibold'>bank user management</span> and recovery workflows. Integrated secure access controls and real-time <span className='font-semibold'>Firebase notifications</span> for critical updates. Ensured data integrity and <span className='font-semibold'>smooth backend communication</span> through Redux Toolkit.
                </p>
            ),
            tech: [
                "react.js", "redux", "tailwind css", "node.js",
                "swiper.js", "mongoDB", "mongoose", "css", "javascript", "figma"
            ]
        },

        {
            title: "Voice Kit",
            subtitle: "Voice Emotion Analyzer",
            image: Project3,
            url: "https://www.kiwitech.com/",
            color: "#6ddb54",
            shadow: "drop-shadow-[0_0px_60px_#6ddb54]",
            tooltipBg: "bg-[#6ddb54]",
            description: (
                <p className='text-justify text-gray-700 dark:text-gray-300 mt-2'>
                    VoiceKit is an <span className='font-semibold'>ML-powered tool</span> that analyzes emotions in recorded <span className='font-semibold'>audio conversations</span> to help businesses <span className='font-semibold'>evaluate client interactions</span>. It features emotion detection, <span className='font-semibold'>visual insights</span> via bar and donut charts, and <span className='font-semibold'>PDF reporting</span> for stakeholders. The platform empowers organizations to improve communication strategies, <span className='font-semibold'>boost client engagement</span>, and drive informed decisions.
                </p>
            ),
            tech: [
                "react.js", "redux", "tailwind css", "python api",
                "chart.js", "mongoDB", "mongoose", "css", "javascript", "figma"
            ]
        },

        {
            title: "HitWeb",
            subtitle: "IT Consultancy and Services Startup",
            image: Project4,
            url: "#",
            color: "rgba(16,16,16,1)",
            shadow: "drop-shadow-[0_0px_60px_rgba(16,16,16,1)]",
            tooltipBg: "bg-[rgba(16,16,16,1)]",
            description: (
                <p className='text-justify text-gray-700 dark:text-gray-300 mt-2'>
                    Being a <span className='font-semibold'>lead developer</span>, revamped the site to a <span className='font-semibold'>highly
                        responsive</span>, and interactive website. Created new features and
                    pages. Worked as a team with other team member and <span className='font-semibold'>ux
                        designer</span>.
                </p>
            ),
            tech: [
                "react.js", "tailwind css", "node.js", "swiper.js",
                "mongoDB", "mongoose", "css", "javascript", "figma"
            ]
        },

        {
            title: "Itax-Easy",
            subtitle: "Software Development Agency",
            image: Project5,
            url: "https://surya6394.github.io/Itax-easy-website/",
            color: "#3b82f6",
            shadow: "drop-shadow-[0_0px_60px_#3b82f6]",
            tooltipBg: "bg-blue-500",
            description: (
                <p className='text-justify text-gray-700 dark:text-gray-300 mt-2'>
                    Developed a <span className='font-semibold'>full-fledged software development</span> platform
                    focusing on <span className='font-semibold'>user needs and efficiency</span>. Built the complete site
                    from scratch.
                </p>
            ),
            tech: [
                "react.js", "tailwind css", "node.js",
                "mongoDB", "mongoose", "css", "javascript", "figma"
            ]
        }
    ];

    return (
        <section className="max-w-screen-xl mx-auto pb-10 relative">

            <h1 className="md:text-[40px] text-[28px] border-b-2 relative z-10 bg-slate-100 dark:bg-gray-900 w-max mx-auto px-4 py-2 border-orgClr font-[600]">
                My Projects
            </h1>

            {projects.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
            ))}

            {/* Vertical Timeline */}
            <div className="hidden sm:block w-[2px] bg-orgClr absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
        </section>
    );
};

export default Projects;    