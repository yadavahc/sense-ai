Sense-AI is a cutting-edge, AI-powered web platform built using Next.js and Gemini AI, designed to empower users with tools for career development and insights. From resume and cover letter generation to personalized interview preparation and industry insights based on your skills, Sense-AI serves as your intelligent career assistant.

🧩 Tech Stack

Sense-AI is built using a powerful and modern tech stack. At its core is Next.js, a React-based framework that enables full-stack development with features like server-side rendering and routing for optimal performance. Gemini AI serves as the primary engine behind all AI functionalities, powering the generation of resumes, cover letters, interview questions, and skill-based insights. For user authentication and seamless onboarding, Clerk is integrated to manage sign-ups, logins, and also handle the landing page experience. The application uses Neon Tech, a serverless PostgreSQL solution, to efficiently store and manage user data, generated content, and other essential records. To handle background processes, such as executing heavy AI tasks, activity logging, and sending email notifications, Inngest is used to ensure smooth and asynchronous task management.

Follow these steps:
3. git clone https://github.com/yadavahc/sense-ai.git
2. cd sense-ai
3. Install dependencies
npm install
4. Setup environment variables

Create a .env.local file and add the necessary credentials:
# Clerk Authentication 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here

# Clerk Routing URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Database Connection (Neon Tech PostgreSQL)
DATABASE_URL=postgresql://your_username:your_password@your_neon_host/sense-ai?sslmode=require

# Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

5. Run the development server
npm run dev
Visit http://localhost:3000 to see your app in action!


