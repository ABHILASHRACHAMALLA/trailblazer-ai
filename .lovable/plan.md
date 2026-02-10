
# WildTrail – AI Powered Adventure Travel Planner

## Overview
A modern, clean adventure travel planning website where users sign up, enter trip preferences, and receive AI-generated personalized itineraries with budgets in Indian Rupees (₹). Users can save plans, revisit trip history, and explore popular destinations.

---

## Pages & Features

### 1. Landing Page
- Hero section with stunning adventure imagery and tagline ("Plan Your Next Adventure with AI")
- Quick "Plan a Trip" CTA button
- Popular destinations gallery showcasing trending spots (India + International) with beautiful cards
- How it works section (3 steps: Enter Details → AI Plans → Go Explore)
- Testimonials/stats section
- Footer with links

### 2. Authentication (Email/Password + Google Sign-In)
- Sign up and login pages with clean forms
- Google one-click sign-in option
- Email/password registration
- Redirect to dashboard after login

### 3. User Profile & Preferences
- Profile page where users set their name, avatar
- Travel preferences: preferred travel types (adventure, trekking, beach, city, nature), dietary needs, accessibility requirements, budget range preference
- These preferences auto-fill the trip planner form for a personalized experience

### 4. Trip Planner (Core Feature)
- Beautiful form with fields:
  - Destination (text input with suggestions)
  - Budget in ₹ (Indian Rupees) with slider or input
  - Number of days
  - Travel type selection (adventure, trekking, beach, city, nature) — pre-filled from preferences
  - Number of travelers
  - Any special requirements
- Submit triggers AI generation with a loading animation

### 5. AI-Generated Travel Plan Display
- Streaming AI response displayed in a rich, structured format:
  - **Overview** — destination highlights
  - **Day-wise Itinerary** — each day with activities, timings, locations
  - **Transport Suggestions** — how to get around
  - **Accommodation Ideas** — budget-appropriate options
  - **Estimated Budget Breakdown** — all costs in ₹ (INR)
  - **Travel Tips** — safety, weather, packing, local customs
- Option to save the plan to user's account

### 6. Trip History Dashboard
- Personalized greeting ("Welcome back, [Name]!")
- List of all previously saved travel plans
- Click to view any past plan in full detail
- Delete plans option

### 7. Popular Destinations Gallery
- Curated grid of popular Indian and international destinations
- Each card shows destination image, name, best season, and travel type tags
- Clicking a destination pre-fills the trip planner with that destination

---

## Backend & Database (Supabase + Lovable Cloud)
- **User profiles table** — name, avatar, preferences (travel types, dietary, accessibility)
- **Saved trips table** — stores generated plans linked to users
- **Edge function** for AI trip generation using Lovable AI (Gemini) — processes user inputs and returns structured itinerary
- Row-level security so users can only access their own data

---

## Design Direction
- **Modern & clean** with nature-inspired accent colors (forest greens, earthy tones on white backgrounds)
- Adventure-themed illustrations and icons throughout
- Responsive design for mobile and desktop
- Smooth animations and transitions for a polished feel
