import Image from "next/image";
import Head from "next/head";
import Me from "@/public/074b959ac94f49aeadb9f967640ec9e2 (1).jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sassi Motaz</title>
        <meta name="description" content="Sassi Motaz's personal website" />
        <link rel="icon" href="/logo.png" />
      </Head>

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
              Full Stack Developer
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 pt-6">
              <a
                href="https://github.com/SassiMotaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-8 h-8 text-teal-500 hover:text-teal-600" />
              </a>

              <a
                href="https://www.linkedin.com/in/sassi-mootaz-4a6622375/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-8 h-8 text-teal-500 hover:text-teal-600" />
              </a>

              <a
                href="mailto:sassimootaz99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="w-8 h-8 text-teal-500 hover:text-teal-600" />
              </a>
            </div>
          </div>

          {/* About Text */}
          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
            <p>
              Hi, I'm <b>Motaz Sassi</b>, a <b>Full Stack Developer</b> based in{" "}
              <b>Zaghouan, Tunisia</b>. I have{" "}
              <b>3 years of professional experience</b> and currently work at{" "}
              <b>PASS Consulting Group</b>, specializing in{" "}
              <b>Spring Boot, Angular, and Symfony</b>.
            </p>
            <p>
              I build modern, scalable web applications and have strong
              experience in{" "}
              <b>
                e-commerce platforms, AI-powered modules, dashboards, and APIs
              </b>
              . My expertise also includes{" "}
              <b>
                full-stack development, DevOps practices, and intelligent
                systems
              </b>
              .
            </p>
            <p>
              Skilled in <b>Java, Python, PHP, JavaScript</b>, I focus on
              creating maintainable architectures and delivering high-quality
              solutions. Passionate about technology, I continuously explore new
              tools and innovative approaches.
            </p>
            <p>
              I’m currently open to new opportunities in{" "}
              <b>
                software development, backend engineering, and intelligent
                solutions
              </b>
              , aiming to deliver impactful projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
