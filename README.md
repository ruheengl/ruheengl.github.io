# Ruhee Nagulwar — Portfolio

Built with React + Vite + React Router.

## Pages
- `/` — Home (hero + featured work)
- `/about` — About + skills
- `/work` — All projects with filter tabs
- `/work/:id` — Individual project pages with demo video
- `/contact` — Contact info

## Running locally
```bash
npm install
npm run dev
```

## Adding a demo video to a project
Open `src/data/projects.js`, find the project, and set:
```js
youtubeId: 'your-youtube-video-id'
// e.g. for https://youtube.com/watch?v=dQw4w9WgXcQ → youtubeId: 'dQw4w9WgXcQ'
```

## Adding a cover image to a project card
1. Put your image in `public/images/` (e.g. `public/images/arguvis.jpg`)
2. In `src/data/projects.js`, set: `cover: '/images/arguvis.jpg'`
3. In `Work.jsx` and `Home.jsx`, the `<div className="work-thumb">` can be replaced with `<img src={p.cover} alt={p.title} />`

## Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```
Make sure `homepage` in `package.json` matches your GitHub Pages URL.
