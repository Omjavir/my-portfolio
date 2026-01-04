import React from "react";

const hi = () => {
  return (
    <div className="m-4 p-4">
      <div className="font-bold">Experience : </div>
      <div className="m-4 p-4">
        <ol className="relative border-s border-default">
          <li className="ms-6 mb-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-buffer">
              <svg
                className="w-3 h-3 text-fg-brand-strong"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>
            </span>
            <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
              Mar 2024 - Dec 2025
            </time>
            <h3 className="my-2 text-lg font-semibold text-heading">
              Software Developer
            </h3>
            <ul className="ms-5">
              <li className="list-disc pb-1">
                Led the end-to-end development of a web application using
                Node.js, Express.js, React.js, and MySQL, replacing a legacy
                system and supporting 500,000+ monthly active users.
              </li>
              <li className="list-disc pb-1">
                Built the platform from scratch, resulting in a 70% increase in
                user engagement time and a 40% improvement in data-fetching
                speed compared to the previous website.
              </li>
              <li className="list-disc pb-1">
                Designed and implemented secure RESTful APIs using Express.js;
                integrated middleware such as Helmet, CORS, and rate limiting to
                enhance API security and reduce vulnerability exposure.
              </li>
              <li className="list-disc pb-1">
                Developed a responsive, component-based frontend in React.js,
                improving initial page load speed by 30%.
              </li>
              <li className="list-disc pb-1">
                Integrated JWT-based authentication using secure HTTP-only
                cookies for a custom CMS, enabling seamless login workflows and
                enforcing role-based access control.
              </li>
            </ul>
          </li>
          <li className="ms-6 mb-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-buffer">
              <svg
                className="w-3 h-3 text-fg-brand-strong"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>
            </span>
            <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
              Nov 2023 - Jan 2024
            </time>
            <h3 className="my-2 text-lg font-semibold text-heading">
              Frontend Developer (Internship)
            </h3>
            <ul className="ms-5">
              <li className="list-disc pb-1">
                Developed a React.js dashboard for a delivery platform, enabling
                delivery analytics and streamlined admin workflows used by
                internal operations teams.
              </li>
              <li className="list-disc pb-1">
                Enhanced user efficiency by 30% by integrating React Table with
                pagination, filtering, and search functionality → resulting in
                significantly faster data navigation and improved overall UX.
              </li>
              <li className="list-disc pb-1">
                Collaborated closely with backend engineers to interpret API
                architecture, optimize request handling, and ensure seamless
                integration of RESTful endpoints → reducing UI-API errors and
                improving data reliability.
              </li>
            </ul>
          </li>
          <li className="ms-6 mb-5">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-buffer">
              <svg
                className="w-3 h-3 text-fg-brand-strong"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>
            </span>
            <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
              Jul 2021 - Feb 2022
            </time>
            <h3 className="my-2 text-lg font-semibold text-heading">
              Frontend Developer (Internship)
            </h3>
            <ul className="ms-5">
              <li className="list-disc pb-1">
                Developed 7+ responsive React.js components used across multiple
                pages → improved UI consistency and reduced development time.
              </li>
              <li className="list-disc pb-1">
                Integrated REST APIs using Axios, managing loading/error states
                and improving data reliability across the app.
              </li>
              <li className="list-disc pb-1">
                Improved frontend performance by ~28% through code splitting,
                lazy loading, and bundle optimization.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default hi;
