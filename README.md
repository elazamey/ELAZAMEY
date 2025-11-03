# CELIA FASHION DESIGN - E-Commerce Web App

A full-featured e-commerce platform for fashion design built with Next.js 14, TypeScript, Tailwind CSS, and MongoDB Atlas.

## Features

- 🛍️ **E-Commerce Functionality**: Product catalog, shopping cart, checkout process
- 👗 **Fashion Categories**: Kids, Teens, Girls, Men, Women, Accessories
- 🔍 **Product Filtering**: By category, price, color, size
- 🛒 **Shopping Cart**: Add/remove items, quantity management
- 💳 **Checkout Process**: Shipping and payment forms
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🗄️ **Database Integration**: MongoDB Atlas for data storage
- 🚀 **Free Deployment**: Ready for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas (free tier)
- **Deployment**: Vercel (free plan)

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (free)
- GitHub account
- Vercel account (free)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/celia-fashion-design.git
cd celia-fashion-design
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
MONGODB_URI=your_mongodb_atlas_connection_string
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. Push code to GitHub repository
2. Connect Vercel to your GitHub repo
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
4. Deploy!

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   └── ...
├── components/            # Reusable components
├── lib/                   # Utilities and database
│   ├── models/           # Mongoose models
│   └── mongodb.ts        # Database connection
└── ...
```

## API Endpoints

- `GET/POST /api/products` - Product CRUD operations
- `GET/PUT/DELETE /api/products/[id]` - Individual product operations
- `GET/POST /api/orders` - Order management
- `GET/POST /api/users` - User management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
