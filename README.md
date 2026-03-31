# Natural Shield Deodorant

## Project Overview
This is a modern, responsive website built with React and Vite that showcases innovative products and services. The site features a clean, professional design with smooth animations and transitions. It includes sections for hero content, product information, about the innovator, customer reviews, blog posts, contact information, and social media integration.

The website uses the Boafo accessibility widget to make the site accessible to all users, ensuring compliance with accessibility standards and providing an inclusive experience for visitors with disabilities.

## Technologies Used
- React 18
- Vite 5
- TypeScript
- CSS Modules
- Boafo Accessibility Widget

## How to Get Your Boafo API Key
1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Navigate to the API section
5. Copy your API key

## How to Integrate the Boafo Widget
Follow the official integration guide at:
https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`: `cp .env.example .env`
4. Add your Boafo API key to `.env`
5. Start the development server: `npm run dev`
6. Open your browser and navigate to `http://localhost:3001/`

## Development
- The project uses Vite for fast development and building
- TypeScript is configured for type safety
- The Boafo widget is initialized in `src/components/BoafoWidgetInitializer.jsx`
- All components are located in the `src/components` directory