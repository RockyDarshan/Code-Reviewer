# Code Review AI

An AI-powered code review tool that provides instant feedback on your code using Google's Gemini AI model.

## Features

- Real-time code editing with syntax highlighting
- Instant AI-powered code review feedback
- Support for JavaScript code analysis
- Modern, responsive UI with split-pane view
- Markdown rendering of review feedback

## Project Structure

```
CODE-REVIEW/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── Frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

## Setup & Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd CODE-REVIEW
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../Frontend
npm install
```

4. Configure environment variables:
   - Create a `.env` file in the backend directory
   - Add your Google Gemini API key:

```
GOOGLE_GEMINI_KEY=your_api_key_here
```

## Running the Application

1. Start the backend server:

```bash
cd backend
npm start
```

The server will run on http://localhost:3000

2. Start the frontend development server:

```bash
cd Frontend
npm run dev
```

The frontend will be available at http://localhost:5173

## Technologies Used

### Frontend

- React
- Vite
- PrismJS (syntax highlighting)
- React Markdown
- Axios
- CSS3

### Backend

- Express.js
- Google Generative AI
- CORS
- dotenv

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
