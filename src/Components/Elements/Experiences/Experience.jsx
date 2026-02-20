import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    role: "Engineer - React",
    company: "Acidaes Solutions Pvt. Ltd. (BusinessNext)",
    companyUrl: "https://www.businessnext.com/",
    location: "Noida, Uttar Pradesh",
    duration: "July 2025 - Present",
    points: [
      <>
        Design and develop <b className="font-[600]">scalable frontend applications</b> using React JS, JavaScript, HTML5, CSS, REST APIs, and modern web technologies within the <b className="font-[600]">Microsoft technology stack</b>.
      </>,
      <>
        Contribute to <b className="font-[600]">end-to-end product development</b> in an Agile environment, ensuring high-quality code, optimized performance, and efficient software delivery for <b className="font-[600]">BFSI domain solutions</b>.
      </>,
      <>
        Collaborate with <b className="font-[600]">cross-functional teams</b> and <b className="font-[600]">product leaders</b> to implement best development practices, solve <b className="font-[600]">complex business problems</b>, and enhance platform capabilities.
      </>,
      <>
        Work with <b className="font-[600]">databases and backend integrations</b>, including SQL Server, Web APIs, MongoDB, and Cassandra, ensuring seamless data handling and system scalability.
      </>
    ]
  },
  {
    role: "Frontend Developer",
    company: "ClevDoc Platforms Inc.",
    companyUrl: "https://clevdoc.com/",
    location: "Gurgaon, Haryana",
    duration: "November 2023 - July 2025",
    points: [
      <>
        Developed responsive and <b className="font-[600]">reusable UI components</b> using React.js,
        Redux, and JavaScript, improving user experience and maintainability.
      </>,
      <>
        <b className="font-[600]">Optimized performance</b>, reducing page load time by 30% and
        integrated <b className="font-[600]">RESTful APIs</b> for real-time data updates.
      </>,
      <>
        Collaborated with UX/UI designers to <b className="font-[600]">enhance accessibility</b> and
        worked in <b className="font-[600]">Agile teams</b>, actively participating in standups and
        code reviews.
      </>,
      <>
        <b className="font-[600]">Ensured application stability</b> with <b className="font-[600]">unit testing</b> (Jest,
        Testing Lib.) and debugging to maintain high <b className="font-[600]">code quality</b>.
      </>
    ]
  },
  {
    role: "Software Engineer Trainee",
    company: "KiwiTech",
    companyUrl: "https://kiwitech.com/",
    location: "Noida, Uttar Pradesh",
    duration: "December 2022 - August 2023",
    points: [
      <>
        Worked with the <b className="font-[600]">ML team</b> to integrate real-time{" "}
        <b className="font-[600]">JSON data visualization</b>, implementing <b className="font-[600]">interactive charts</b>{" "}
        using ApexCharts/chart.js for better insights.
      </>,
      <>
        Collaborated closely with <b className="font-[600]">UX/UI</b> designers to ensure{" "}
        <b className="font-[600]">accessibility and seamless</b> user experience{" "}
        <b className="font-[600]">across devices</b>.
      </>,
      <>
        Conducted thorough peer code reviews, providing{" "}
        <b className="font-[600]">constructive feedback</b> on code quality, performance, and security,
        identified and <b className="font-[600]">resolved 30+ critical bugs</b> before code deployment,
        improving <b className="font-[600]">application stability.</b>
      </>
    ]
  }
];

const Experience = () => {
  return (
    <div className="md:py-24 py-14">
      <h1 className="font-[600] md:text-[40px] text-[28px] -mt-3">
        Work Experience
      </h1>

      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </div>
  );
};

export default Experience;