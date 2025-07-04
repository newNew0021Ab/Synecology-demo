# Synecology Environmental Consulting Website

## Overview

This is a modern, multi-page website for Synecology, an environmental consulting company. The application features a sophisticated "Organic Innovator" design concept that blends technology with nature, utilizing glassmorphism effects and organic visual elements. The site is built as a full-stack application with React frontend, Express backend, and PostgreSQL database using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage (extensible to database)
- **Development**: Hot module replacement with Vite integration

### Design System
- **Color Palette**: 
  - Primary: Sea Green (#2E8B57)
  - Background: Off-white (#FDFBF6)
  - Text: Dark Slate Gray (#2F4F4F)
  - Supporting: Soft blues and sandy beiges
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Nunito Sans (sans-serif)
- **Visual Effects**: Glassmorphism with backdrop blur, organic blob shapes, custom cursor

## Key Components

### Pages Structure
- **Home**: Hero section with animated backgrounds, services overview
- **Services**: Detailed service offerings with glassmorphic cards
- **Case Studies**: Project showcases with results and metrics
- **Blog**: Content management for articles and insights
- **About**: Team information and company story
- **Contact**: Contact form with validation using React Hook Form and Zod

### Reusable Components
- **GlassmorphicCard**: Glassmorphism effect wrapper with animation
- **OrganicBlob**: Animated organic shapes for background decoration
- **Header**: Fixed glassmorphic navigation with mobile menu
- **Footer**: Company information and social links
- **CustomCursor**: Interactive cursor with hover effects

### UI Component Library
- Complete shadcn/ui component set with Radix UI primitives
- Form components with validation
- Data display components (tables, cards, badges)
- Navigation components (menus, pagination)
- Feedback components (toasts, dialogs, alerts)

## Data Flow

### Client-Side
1. React components render with initial state
2. TanStack Query manages server state and caching
3. Form submissions handled through React Hook Form with Zod validation
4. Route changes managed by Wouter router
5. UI state updates trigger re-renders and animations

### Server-Side
1. Express server handles API requests with /api prefix
2. Middleware for logging, JSON parsing, and error handling
3. Database operations through Drizzle ORM
4. Currently using in-memory storage with interface for database migration

### Database Schema
- **Users table**: Basic user management with username/password
- **Extensible**: Schema designed for easy addition of content types
- **Migrations**: Drizzle Kit for database schema management

## External Dependencies

### Core Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- TanStack Query for data fetching and caching
- Framer Motion for animations
- Wouter for routing
- Tailwind CSS for styling
- Radix UI for accessible components

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database for PostgreSQL hosting
- Connect-pg-simple for session management
- Various utility libraries (date-fns, clsx, etc.)

### Development Dependencies
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- Replit-specific plugins for development environment

## Deployment Strategy

### Development
- Vite development server with hot module replacement
- Express server with middleware integration
- Database migrations using Drizzle Kit
- Environment variables for database connection

### Production Build
1. Vite builds client-side React application
2. ESBuild bundles server-side Express application
3. Static files served from dist/public directory
4. Database migrations run via `npm run db:push`

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- `REPL_ID` for Replit environment detection

### Scripts
- `npm run dev`: Development server with TypeScript execution
- `npm run build`: Production build for both client and server
- `npm start`: Production server execution
- `npm run db:push`: Database schema deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup