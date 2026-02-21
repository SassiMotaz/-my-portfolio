import Image from "next/image";
import Me from "@/public/074b959ac94f49aeadb9f967640ec9e2 (1).jpg";

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Development of a full-featured e-commerce web app using Angular, Spring Boot, Stripe API, and MongoDB.",
      link: "https://github.com/SassiMotaz/ecommerce-app",
    },
    {
      title: "AI Chatbot Assistant",
      description:
        "A chatbot powered by NLP and Python Flask that assists users with automated support and recommendations.",
      link: "https://github.com/SassiMotaz/ai-chatbot",
    },
    {
      title: "Business Intelligence Dashboard",
      description:
        "Interactive dashboard built with Power BI and ETL automation for enterprise data analytics.",
      link: "https://github.com/SassiMotaz/bi-dashboard",
    },
  ];

  return (
    <>
      <head>
        <title>Sassi Motaz</title>
        <meta name="description" content="Sassi Motaz's personal website" />
        <link rel="icon" href="/logo.png" />
      </head>

      <div className="divide-y divide-gray-100 dark:divide-gray-700">

        {/* Header */}
        <div className="space-y-2 pt-5 pb-8 md:space-x-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
            Portfolio
          </h1>
        </div>

        {/* About Section */}
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              alt="Photo of Motaz Sassi"
              src={Me}
              className="h-48 w-48 rounded-full object-cover object-top"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Sassi Motaz
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Full Stack Developer | Java, Python, Angular, React, Spring Boot
            </p>

            <div className="flex space-x-5 pt-6">
              {/* GitHub */}
              <a href="https://github.com/SassiMotaz" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2..." />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/sassi-mootaz-4a6622375/" target="_blank">
                <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-8 h-8 text-teal-500 hover:text-teal-600">
                  <path d="M880 112H144c-17.7 0-32 14.3..." />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:sassimootaz99@gmail.com" target="_blank">
                <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-8 h-8 text-teal-500 hover:text-teal-600">
                  <path d="M928 160H96c-17.7 0-32 14.3..." />
                </svg>
              </a>
            </div>
          </div>

          {/* About Text */}
          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
            <p>
              Hi everyone 👋, I'm <b>Motaz Sassi</b>, a <b>Full Stack Developer</b> based in <b>Zaghouan, Tunisia</b>. 
              I build modern, high-performance web applications using Angular, Spring Boot, React, Python, and PHP.
            </p>
            <p>
              I currently work at <b>PASS Consulting Group</b>, developing scalable solutions with <b>Angular</b> and <b>Spring Boot</b>.
              I also have strong experience in AI-powered modules, e-commerce platforms, dashboards, and APIs.
            </p>
            <p>
              I’m skilled in <b>Java, Python, PHP, JavaScript</b>, and specialize in full-stack development, DevOps, and intelligent systems.
              Passionate about technology, I’m always exploring new tools and innovation-driven projects.
            </p>
            <p>
              I’m currently open to new opportunities in software development,
              backend engineering, and intelligent solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
