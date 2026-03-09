import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import {resumes} from "../../constants";
import {callbackify} from "node:util";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ARA.ai" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className={"main-section"}>
      <div className={"page-heading py-16"}>
        <h1>
          Build a Resume That Gets You Hired
        </h1>
        <h2>
          Get AI-powered insights and personalized feedback to make your resume stand out.
        </h2>

      </div>
      {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" className="w-[200px]" />
          </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
      )}

      {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
              Upload Resume
            </Link>
          </div>
      )}
    </section>
  </main>
}
