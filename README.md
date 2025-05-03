Sense-AI is a cutting-edge, AI-powered web platform built using Next.js and Gemini AI, designed to empower users with tools for career development and insights. From resume and cover letter generation to personalized interview preparation and industry insights based on your skills, Sense-AI serves as your intelligent career assistant.

🧩 Tech Stack
Sense-AI is built using a powerful and modern tech stack. At its core is Next.js, a React-based framework that enables full-stack development with features like server-side rendering and routing for optimal performance. Gemini AI serves as the primary engine behind all AI functionalities, powering the generation of resumes, cover letters, interview questions, and skill-based insights. For user authentication and seamless onboarding, Clerk is integrated to manage sign-ups, logins, and also handle the landing page experience. The application uses Neon Tech, a serverless PostgreSQL solution, to efficiently store and manage user data, generated content, and other essential records. To handle background processes, such as executing heavy AI tasks, activity logging, and sending email notifications, Inngest is used to ensure smooth and asynchronous task management.


DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```
