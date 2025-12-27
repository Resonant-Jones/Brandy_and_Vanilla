# Brandy & Vanilla - Website Project

This is the full-stack landing page and intake website for **Brandy & Vanilla**, a premium Dominican heritage cake business.

## Project Structure

```
BrandyAndVanilla/
├── index.html          # Landing Page
├── about.html          # Story & Blog
├── order.html          # Order Form (Stripe ready)
├── admin.html          # Admin Dashboard
├── styles/
│   └── index.css       # Design System & Theme
├── scripts/
│   ├── main.js         # Navigation & Animations
│   ├── order.js        # Form Logic & Calculations
│   └── admin.js        # Dashboard Logic
└── assets/
    └── images/         # Placeholders for visual assets
```

## Features

1.  **Premium Design**: Custom CSS using a curated palette (Cream, Warm Gold, Deep Terracotta, Indigo) and typography (Cormorant Garamond + Lato).
2.  **Mobile-First**: Fully responsive navigation and grid layouts.
3.  **Order System**:
    *   Itemized selection with dynamic price calculation.
    *   Delivery vs. Pickup logic.
    *   Stripe integration readiness (see `scripts/order.js`).
4.  **Admin Dashboard**:
    *   View recent orders.
    *   Quick stats (Weekly orders, Revenue).
    *   Product management UI.

## Deployment Instructions

### Option 1: Netlify (Recommended)

1.  **Drag & Drop**:
    *   Log in to [Netlify](https://www.netlify.com/).
    *   Drag the `BrandyAndVanilla` folder directly onto the "Sites" dashboard.
    *   Your site will be live instantly!

2.  **Git Integration**:
    *   Push this folder to a GitHub repository.
    *   Connect the repo to Netlify.
    *   Netlify will auto-deploy on every push.

### Option 2: Vercel

1.  **CLI**:
    *   Install Vercel CLI: `npm i -g vercel`
    *   Run `vercel` inside the `BrandyAndVanilla` folder.
    *   Follow the prompts.

2.  **Git Integration**:
    *   Push to GitHub.
    *   Import the project in the Vercel dashboard.
    *   Framework Preset: "Other" (Static).

## Backend & Stripe Setup

To make the order form fully functional:

1.  **Stripe**:
    *   Get your Publishable Key from the Stripe Dashboard.
    *   Update `scripts/order.js` to initialize Stripe with your key.
    *   Implement a server-side endpoint (e.g., Netlify Function) to create the Checkout Session.

2.  **Data Storage**:
    *   For the Admin Dashboard to show real data, connect the form submission to a database (Firebase, Supabase, or Airtable).
    *   Update `scripts/admin.js` to fetch data from that source instead of the mock data.

## Visual Assets

**Note**: Image generation is currently pending. Please replace the placeholder images in `assets/images` with your actual photography:
*   `baking_scene.png` (Hero background)
*   `meringue_cake.png` (Product shots)
*   `packaging_mockup.png` (Story/About)
