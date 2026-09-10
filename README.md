# AnimateKit

AnimateKit is an open-source React animation gallery for exploring, learning, and reusing creative UI animations.

The project contains interactive examples for page transitions, scroll animations, cursor effects, parallax interactions, card animations, and other creative motion experiments. Each animation includes a working preview and source code so developers can learn from the implementation and use the ideas in their own projects.

## Demo

Add the deployed project URL here:

```text
https://animate-kit.vercel.app/
```

## Features

- Interactive animation examples
- Source code for every animation
- Copy-to-clipboard code viewer
- Page transition examples
- Scroll-based animations
- Cursor and mask effects
- Responsive layouts
- React Router navigation
- Motion-powered interactions
- Syntax-highlighted source code
- Vercel Analytics integration

## Tech Stack

- React
- Vite
- React Router
- Motion
- Tailwind CSS
- React Icons
- React Syntax Highlighter
- Lenis
- Vercel Analytics
- ESLint

## Getting Started

### Prerequisites

Make sure you have Node.js 18 or later and npm installed.

### Installation

```bash
git clone https://github.com/rajul2911/animate-kit.git
cd animate-kit
npm install
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the project for ESLint errors |

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Project Structure

```text
animate-kit/
├── public/
│   └── Static public assets
├── src/
│   ├── App.jsx                    # Main application routes
│   ├── main.jsx                   # React entry point
│   ├── App.css                    # Application-level styles
│   ├── index.css                  # Global styles and Tailwind setup
│   ├── assests/                   # Images and media for animations
│   │   ├── Card_Scroll_Parallax/
│   │   ├── Mask-Cursor/
│   │   └── Parallax Scroll Images/
│   ├── components/                # Interactive animation components
│   │   ├── CursorAnimation/
│   │   ├── PageAnimationOne/
│   │   ├── PageAnimationTwo/
│   │   ├── PageAnimationThree/
│   │   └── ScrollAnimationAll/
│   ├── files&codes/               # Animation metadata and source code
│   │   ├── CursorEffectCodeShow.js
│   │   ├── PageAnimationCodeShow.js
│   │   └── ScrollAnimationCodeShow.js
│   ├── pages/                     # Category and home pages
│   │   ├── MainPage.jsx
│   │   ├── Card.jsx
│   │   ├── PageAnimation.jsx
│   │   ├── ScrollAnimation.jsx
│   │   └── CursorAnimation.jsx
│   ├── RouteConfig/               # Route definitions by category
│   │   ├── PageAnimationRoutes.jsx
│   │   ├── ScrollAnimationRoute.jsx
│   │   └── CursorAnimationRoutes.jsx
│   └── utils/
│       └── CodeUiReusable.jsx     # Shared animation and code viewer
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Application Routes

| Route | Description |
| --- | --- |
| `/` | AnimateKit home page |
| `/page-animation` | Page animation collection |
| `/page-animation/page-animation-one` | Page animation example one |
| `/page-animation/page-animation-two` | Page animation example two |
| `/page-animation/page-animation-three` | Page animation example three |
| `/scroll-animation` | Scroll animation collection |
| `/scroll-animation/scroll-animation-one` | Parallax scroll example |
| `/scroll-animation/scroll-animation-two` | Card scroll parallax example |
| `/cursor-effects` | Cursor effects collection |
| `/cursor-effects/cursor-one` | Mask cursor example |

## How the Project Works

### Category pages

Category pages such as `PageAnimation.jsx`, `ScrollAnimation.jsx`, and `CursorAnimation.jsx` provide the heading, description, and animation data to the reusable code viewer.

```jsx
<CodeUiReusable
	animations={animations}
	eyebrow="Page Transitions"
	title="Page Animation"
	description="Explore different page transition animations and their source code."
	backRoute="/"
/>
```

### Animation components

Animation components contain the actual interactive experience. Examples include:

```text
src/components/PageAnimationOne/PageAnimationOne.jsx
src/components/ScrollAnimationAll/Parallax Scroll/ScrollOne.jsx
src/components/CursorAnimation/Mask-Cursor/CursorOne.jsx
```

### Code data files

Files inside `src/files&codes/` contain the animation metadata and source code displayed in the code viewer.

```js
export const animations = [
	{
		id: 1,
		name: "Page Animation One",
		route: "/page-animation/page-animation-one",
		files: [
			{
				name: "PageAnimationOne.jsx",
				code: "/* source code shown in the viewer */",
			},
		],
	},
];
```

### Route configuration

Routes are grouped by animation category in `src/RouteConfig/`. The main route groups are registered in `src/App.jsx`.

## How to Add a New Animation

### 1. Create the animation component

Add your component inside the correct category folder.

```text
src/components/ScrollAnimationAll/MyNewAnimation/MyNewAnimation.jsx
```

Build the animation using React, Motion, CSS, Tailwind CSS, or another library already used by the project.

### 2. Add required assets

Place images, videos, or other static files inside `src/assests/` and use clear, descriptive file names.

### 3. Add the route

Open the relevant route file and add a route for the new component:

```jsx
<Route
	path="my-new-animation"
	element={<MyNewAnimation />}
/>
```

### 4. Add animation metadata

Open the relevant file inside `src/files&codes/` and add an entry containing a unique `id`, readable `name`, live route, and source files:

```js
{
	id: 4,
	name: "My New Animation",
	route: "/scroll-animation/my-new-animation",
	files: [
		{
			name: "MyNewAnimation.jsx",
			code: `// Add the source code here`,
		},
	],
}
```

### 5. Test the animation

Run `npm run dev` and check that the animation works, the route opens directly, the back button works, the source code and copy button work, the layout works on mobile and desktop, and there are no console errors.

### 6. Run validation

```bash
npm run lint
npm run build
```

## Contribution Guide

Contributions are welcome. You can contribute by adding new animations, improving existing components, fixing bugs, improving accessibility, or updating documentation.

### Fork and clone the repository

Click the **Fork** button on GitHub, then clone your fork:

```bash
git clone https://github.com/rajul2911/animate-kit.git
cd animate-kit
npm install
```

### Create a branch

Use a descriptive branch name:

```bash
git checkout -b feat/add-hover-animation
```

Other examples:

```bash
git checkout -b fix/cursor-animation
git checkout -b docs/update-readme
git checkout -b refactor/code-viewer
```

### Make and validate your changes

Keep changes focused and follow the existing project structure. For a new animation, you will usually update:

```text
src/components/
src/files&codes/
src/RouteConfig/
```

Update `src/pages/` only when a category page needs new behavior or configuration. Test manually in the browser, then run:

```bash
npm run lint
npm run build
```

### Commit and push your changes

```bash
git add .
git commit -m "feat: add hover reveal animation"
git push origin feat/add-hover-animation
```

### Open a pull request

Create a pull request from your branch to the main repository. Include what you changed, why you changed it, which files were modified, how the change was tested, screenshots or recordings for visual changes, and any limitations or follow-up work.

## Contribution Guidelines

- Keep pull requests focused on one improvement
- Reuse existing components and patterns
- Avoid unrelated formatting changes
- Use descriptive component and variable names
- Keep animations responsive
- Test keyboard and pointer interactions
- Add useful `alt` text to images
- Avoid unnecessary dependencies
- Keep source code examples complete and runnable
- Make sure the code viewer shows the correct source code
- Run `npm run lint` and `npm run build` before opening a pull request

## Animation Quality Checklist

- The animation has a clear purpose
- The animation does not cause unwanted layout shifts
- The animation works on different screen sizes
- The animation respects reduced-motion preferences where appropriate
- The animation does not create horizontal page overflow
- The animation does not block normal navigation
- The animation performs well in the browser
- The example includes all required source files
- The live route and code viewer route match

## Bug Reports

When reporting a bug, include a clear description, steps to reproduce, expected behavior, actual behavior, browser and operating system, screenshots or a recording when useful, and relevant console errors.

## Feature Requests

For a feature request, explain what problem the feature solves, what the proposed behavior should be, which animation category it belongs to, and whether you would like to implement it yourself.

## Code of Conduct

Please be respectful and constructive when participating in this project. Welcome people with different experience levels, give useful feedback, focus on ideas and code rather than individuals, and help keep discussions focused and inclusive.

## License


```text
This project is licensed under the MIT License.
```



## Acknowledgements

Built with React, Vite, Motion, Tailwind CSS, React Router, React Icons, React Syntax Highlighter, and Lenis.

## Maintainer

Created and maintained by [Rajul Gupta](https://github.com/rajul2911).

If AnimateKit helps you, consider giving the repository a star on GitHub.
