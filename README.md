# Titus Elias Phiri — Tourism & Safari Portfolio

## Folder structure
- `index.html` — website
- `style.css` — design and animations
- `script.js` — interactions
- `assets/` — put Titus's photo, logo and CV here

## Add Titus's photo
1. Take/choose a professional photo.
2. Rename it exactly: `titus.jpg`
3. Put it inside the `assets` folder.
4. Refresh the website.

The photo appears automatically in the About section.

## Add the logo
1. Rename the logo image to `logo.png`.
2. Put it inside `assets`.
3. Refresh the website.

If no logo is present, the website shows a simple TP mark.

## Add the CV PDF
1. Rename the CV to `titus-cv.pdf`.
2. Put it inside `assets`.
3. The View CV and Download PDF buttons will work automatically.

## Change the wildlife photos
The gallery currently uses online Unsplash image URLs so the site looks complete immediately.
To use your own wildlife photos:
1. Put your images in `assets/gallery/`.
2. Open `index.html`.
3. Replace any gallery `<img src="https://...">` with a local path such as:
   `assets/gallery/lion.jpg`

## Run it
You can double-click `index.html` to preview it.
For a public website, upload the whole folder to GitHub Pages, Netlify or another static hosting service.

## Important
The contact form uses `mailto:` and opens the visitor's email app. For a real online contact form that stores/submits messages without email software, connect a form service or backend later.

