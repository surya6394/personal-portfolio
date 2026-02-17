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
        Developed responsive and <b>reusable UI components</b> using React.js,
        Redux, and JavaScript, improving user experience and maintainability.
      </>,
      <>
        <b>Optimized performance</b>, reducing page load time by 30% and
        integrated <b>RESTful APIs</b> for real-time data updates.
      </>,
      <>
        Collaborated with UX/UI designers to <b>enhance accessibility</b> and
        worked in <b>Agile teams</b>, actively participating in standups and
        code reviews.
      </>,
      <>
        <b>Ensured application stability</b> with <b>unit testing</b> (Jest,
        Testing Lib.) and debugging to maintain high <b>code quality</b>.
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
        Developed responsive and <b>reusable UI components</b> using React.js,
        Redux, and JavaScript, improving user experience and maintainability.
      </>,
      <>
        <b>Optimized performance</b>, reducing page load time by 30% and
        integrated <b>RESTful APIs</b> for real-time data updates.
      </>,
      <>
        Collaborated with UX/UI designers to <b>enhance accessibility</b> and
        worked in <b>Agile teams</b>, actively participating in standups and
        code reviews.
      </>,
      <>
        <b>Ensured application stability</b> with <b>unit testing</b> (Jest,
        Testing Lib.) and debugging to maintain high <b>code quality</b>.
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
        Worked with the <b>ML team</b> to integrate real-time{" "}
        <b>JSON data visualization</b>, implementing <b>interactive charts</b>{" "}
        using ApexCharts/chart.js for better insights.
      </>,
      <>
        Collaborated closely with <b>UX/UI</b> designers to ensure{" "}
        <b>accessibility and seamless</b> user experience{" "}
        <b>across devices</b>.
      </>,
      <>
        Conducted thorough peer code reviews, providing{" "}
        <b>constructive feedback</b> on code quality, performance, and security,
        identified and <b>resolved 30+ critical bugs</b> before code deployment,
        improving <b>application stability.</b>
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