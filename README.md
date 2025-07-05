# React Spreadsheet Prototype

This is a front-end-only React prototype that visually and functionally replicates the spreadsheet UI from the provided Figma design. It mimics an Excel/Google Sheets-like experience with responsive styling and interactive controls.

## Features

- Pixel-perfect UI implementation based on Figma
- Spreadsheet layout and functionality using `react-table`
- Functional toolbar:
  - Hide Fields: Toggle column visibility
  - Sort: Sorts data by specific columns
  - Filter: Filter values in columns
  - Cell View: Highlights currently selected cell
- Custom components for:
  - Status tags (e.g., In-process, Complete, Blocked)
  - Priority levels (Low, Medium, High)
  - Avatars (mocked)
- Responsive and scrollable table UI
- Fully styled with Tailwind CSS
- Written in strict TypeScript

(Additional Feature)

- Column Resizer & Hide Toggler

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- React Table v7
- Lucide React (optional icons)
