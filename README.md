# Justin Engineering Portfolio

This is a simple, data-driven portfolio site designed so you can keep adding projects without rebuilding the layout.

## Files

- `index.html` — general overview / homepage
- `project.html` — reusable project detail page
- `projects.js` — **the main file you edit when adding projects**
- `app.js` — generates the project cards on the homepage
- `project-page.js` — generates the detail page
- `styles.css` — site design

## Run it locally

The easiest option:

1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

You can also simply double-click `index.html`, although Live Server is better while editing.

## Add a new project

Open `projects.js` and copy one of the project objects.

Change:

- `slug`
- `title`
- `category`
- `year`
- `summary`
- `image`
- `tags`
- `metrics`
- `overview`
- `highlights`
- `architecture`

The homepage card and detail page will be created automatically.

Example:

```js
{
  slug: "my-new-project",
  title: "My New Project",
  category: "Embedded Systems",
  year: "2027",
  summary: "Short one-sentence summary.",
  image: "images/my-new-project.jpg",
  imageAlt: "My new project",
  tags: ["KiCad", "STM32", "C"],
  metrics: [
    ["4-layer", "PCB"],
    ["100 Hz", "control loop"]
  ],
  overview: "Longer explanation...",
  highlights: [
    "Designed ...",
    "Tested ..."
  ],
  architecture: [
    "Sensor",
    "Microcontroller",
    "Output"
  ]
}
```

## Add photos

1. Create an `images` folder beside `index.html`.
2. Put your image inside it, e.g. `images/drone.jpg`.
3. In `projects.js`, set:

```js
image: "images/drone.jpg"
```

## Deploy

### GitHub Pages
Push the entire folder to a GitHub repository and enable GitHub Pages under:
Settings → Pages → Deploy from branch.

### Vercel
Create a GitHub repository, push this folder, then import the repository into Vercel. Since this is a static site, it can deploy with essentially no configuration.

## Recommended next upgrades

- Add real drone / circuit / research photos
- Add GitHub and demo-video buttons to project pages
- Add downloadable resume
- Add project galleries
- Add a light/dark mode toggle
- Move to Next.js later if you want animations, MDX project posts, or more complex routing

## Included drone assets

The Autonomous Quadcopter page now includes:

- Main drone project photo
- Second drone build angle
- Radio controller photo
- Mission Planner screenshot
- Flight demo button linking to the YouTube Short

Flight demo: https://youtube.com/shorts/QbR_BUqkFbw
