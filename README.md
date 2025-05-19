# Job Search Application

A React-based job search interface powered by machine learning.

## Features

- Real-time job search functionality
- ML-powered search results
- Responsive design
- Loading states and error handling

## Project Structure

```
src/
  ├── components/
  │   ├── SearchContainer.jsx    # Main container component
  │   ├── SearchInput.jsx        # Search input field
  │   └── JobResults.jsx         # Results display
  └── styles/
      └── Search.module.css      # Shared styles
```

## Setup and Running

1. Clone the repository:

```bash
git clone [repository-url]
cd jobsearch
```

2. Install dependencies:

```bash
npm install
```

3. Install ML dependencies:

```bash
cd ml
sh install.sh
cd ..
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development

- The search interface is built with React
- Styles are managed with CSS Modules
- ML processing is handled by the backend services
