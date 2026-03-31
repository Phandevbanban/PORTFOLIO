import React from "react";
import { 
  HTML5, CSS, JavaScript, TypeScript, Nextjs, TailwindCSS, 
  ShadcnUiDark, Git, MySQLDark, ReactDark, NestJS, Docker, Redis
} from "@ridemountainpig/svgl-react";

export const HtmlIcon = (props: any) => <HTML5 {...props} />;
export const CssIcon = (props: any) => <CSS {...props} />;
export const JsIcon = (props: any) => <JavaScript {...props} />;
export const TsIcon = (props: any) => <TypeScript {...props} />;
export const NextIcon = (props: any) => <Nextjs {...props} />;
export const TailwindIcon = (props: any) => <TailwindCSS {...props} />;
export const ShadcnIcon = (props: any) => <ShadcnUiDark {...props} />;
export const GitIcon = (props: any) => <Git {...props} />;
export const MySQLIcon = (props: any) => <MySQLDark {...props} />;
export const ReactIcon = (props: any) => <ReactDark {...props} />;
export const NestIcon = (props: any) => <NestJS {...props} />;
export const DockerIcon = (props: any) => <Docker {...props} />;
export const RedisIcon = (props: any) => <Redis {...props} />;

export const ChatIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

export const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const ArrowDownIcon = () => (
  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

