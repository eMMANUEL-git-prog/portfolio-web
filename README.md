# Emmanuel's Portfolio Website

A professional full-stack portfolio website built with React, Node.js, Express, and PostgreSQL.

## Features

- **Frontend**: React with Next.js, Tailwind CSS, responsive design
- **Backend**: Node.js with Express, RESTful API
- **Database**: PostgreSQL with native SQL queries
- **Authentication**: JWT-based admin authentication
- **Admin Dashboard**: CRUD operations for projects
- **Contact Form**: Functional contact form with backend handling
- **Dark Mode**: Toggle between light and dark themes

## Tech Stack

### Frontend

- Next.js 14 (React framework)
- Tailwind CSS (styling)
- TypeScript
- Radix UI components
- Lucide React (icons)
- next-themes (dark mode)

### Backend

- Node.js
- Express.js
- PostgreSQL with pg driver
- JWT authentication
- bcryptjs (password hashing)
- CORS enabled

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/emmanuel19727/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Setup Frontend**
   \`\`\`bash

# Install frontend dependencies

npm install

# Create environment file

cp .env.example .env.local

# Update .env.local with your backend URL

NEXT_PUBLIC_API_URL=http://localhost:5000
\`\`\`

3. **Setup Backend**
   \`\`\`bash

# Navigate to backend directory

cd backend

# Install backend dependencies

npm install

# Create environment file

cp .env.example .env

# Update .env with your PostgreSQL configuration

DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=http://localhost:3000
PORT=5000
\`\`\`

4. **Setup PostgreSQL Database**
   \`\`\`bash

# Create database (if using local PostgreSQL)

createdb portfolio

# Run database setup script

npm run setup-db
\`\`\`

5. **Create Admin User**
   \`\`\`bash

# In backend directory

npm run create-admin
\`\`\`

6. **Start Development Servers**

Backend:
\`\`\`bash

# In backend directory

npm run dev
\`\`\`

Frontend:
\`\`\`bash

# In root directory

npm run dev
\`\`\`

Visit `http://localhost:3000` to see the website.
Admin login: `http://localhost:3000/admin/login`

- Email: emmanuel19727@gmail.com
- Password: admin123

## Deployment

### Frontend (Vercel)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variable: `NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com`
- Deploy

### Backend (Render)

1. **Deploy to Render**

- Go to [render.com](https://render.com)
- Create a new Web Service
- Connect your GitHub repository
- Select the backend directory
- Add environment variables:
  - `DATABASE_URL`: Your PostgreSQL connection string
  - `JWT_SECRET`: Your JWT secret
  - `FRONTEND_URL`: Your Vercel app URL
  - `NODE_ENV`: production
- Deploy

### Database (Railway/Render PostgreSQL)

1. **Create PostgreSQL Database**

- Use Railway, Render, or Supabase for managed PostgreSQL
- Get the connection string
- Update `DATABASE_URL` in your environment variables

2. **Run Database Setup**
   \`\`\`bash

# After deployment, run these commands on your server

npm run setup-db
npm run create-admin
\`\`\`

## Project Structure

\`\`\`
portfolio-website/
├── app/ # Next.js app directory
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Homepage
│ ├── about/ # About page
│ ├── projects/ # Projects page
│ ├── contact/ # Contact page
│ └── admin/ # Admin pages
├── components/ # React components
│ ├── ui/ # UI components
│ ├── providers/ # Context providers
│ ├── Navbar.tsx # Navigation
│ ├── Footer.tsx # Footer
│ └── ... # Other components
├── contexts/ # React contexts
├── backend/ # Backend API
│ ├── database/ # SQL schema
│ ├── routes/ # API routes
│ ├── middleware/ # Express middleware
│ ├── scripts/ # Utility scripts
│ └── server.js # Express server
└── README.md
\`\`\`

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token
- `POST /api/auth/create-admin` - Create admin user

### Projects

- `GET /api/projects` - Get all projects (public)
- `GET /api/projects/:id` - Get single project (public)
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Contact

- `POST /api/contact` - Submit contact form (public)
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/:id` - Update message status (admin)

## Database Schema

### Users Table

- id (SERIAL PRIMARY KEY)
- email (VARCHAR UNIQUE)
- password (VARCHAR)
- role (VARCHAR)
- created_at, updated_at (TIMESTAMP)

### Projects Table

- id (SERIAL PRIMARY KEY)
- title (VARCHAR)
- description (TEXT)
- image (VARCHAR)
- technologies (TEXT[])
- github_url (VARCHAR)
- live_url (VARCHAR)
- featured (BOOLEAN)
- created_at, updated_at (TIMESTAMP)

### Contacts Table

- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- status (VARCHAR)
- created_at, updated_at (TIMESTAMP)

## Customization

1. **Update Personal Information**

   - All personal details are already updated for Emmanuel
   - Email: emmanuel19727@gmail.com
   - GitHub: https://github.com/emmanuel19727

2. **Styling**

   - Dark mode toggle is now working properly
   - Modify Tailwind classes in components
   - Update color scheme in `globals.css`

3. **Content**
   - Add your projects through admin dashboard
   - Update About page content
   - Modify hero section text

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email emmanuel19727@gmail.com or create an issue on GitHub.
\`\`\`

The portfolio website has been updated with:

✅ **Personal Information Updated:**

- Name changed to "Emmanuel" throughout the site
- Email updated to "emmanuel19727@gmail.com"
- GitHub links updated to "emmanuel19727"
- All personal references updated

✅ **Theme Toggle Fixed:**

- Properly configured ThemeProvider in layout
- Added suppressHydrationWarning to prevent hydration issues
- Dark mode toggle now works correctly

✅ **PostgreSQL Integration:**

- Converted from MongoDB to PostgreSQL
- Updated all database models and queries
- Added proper SQL schema with indexes and triggers
- Updated tech stack references to include PostgreSQL

✅ **Backend Updates:**

- New PostgreSQL-based API routes
- Database setup and admin creation scripts
- Updated package.json with PostgreSQL dependencies
- Environment configuration for PostgreSQL

The website is now fully personalized for Emmanuel and uses PostgreSQL instead of MongoDB. The dark mode toggle should work properly now!
