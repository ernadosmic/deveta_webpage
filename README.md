# Deveta School Website

A responsive school website designed to showcase school activities, news, and provide document downloads. This website is built with HTML, CSS, and JavaScript and is ready to be hosted on GitHub Pages.

## Color Scheme

The website uses the following color scheme:
- Primary Color (Navy Blue): #002F6C
- Secondary Color (Gold): #FFCD00

## Website Structure

```
deveta_webpage/
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── pages/
│   ├── news.html          # School news page
│   ├── events.html        # Upcoming events page
│   └── downloads.html     # Document downloads page
├── documents/             # School documents for download
└── images/                # Images for the website
```

## How to Update the Website

### Adding News Items

To add a new news item:
1. Open `pages/news.html`
2. Copy an existing news article element
3. Update the heading, date, and content
4. Place newer articles at the top

Example:
```html
<article>
    <h3>Your News Title</h3>
    <p class="date">May 10, 2025</p>
    <p>Content of your news article goes here.</p>
</article>
```

### Adding Events

To add a new event:
1. Open `pages/events.html`
2. Copy an existing event element
3. Update the title, date, description, location, and time
4. Add events in chronological order

Example:
```html
<div class="event">
    <h3>Event Title</h3>
    <p class="date">June 15, 2025</p>
    <p>Description of the event goes here.</p>
    <p><strong>Location:</strong> Event Location</p>
    <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
</div>
```

### Adding Documents for Download

To add downloadable documents:
1. Add your document to the `documents/` folder (preferably in PDF format)
2. Open `pages/downloads.html`
3. Add a new list item to the document list

Example:
```html
<li>
    <a href="../documents/your-document-name.pdf">Document Title</a>
    <span class="date">Updated: May 10, 2025</span>
    <p>Brief description of the document.</p>
</li>
```

### Adding Images

1. Add optimized images to the `images/` folder
2. Reference images in HTML using relative paths:
```html
<img src="images/your-image.jpg" alt="Image description">
```

## How to Deploy on GitHub Pages

1. Create a new repository on GitHub
2. Initialize Git in your local project folder:
   ```
   git init
   ```
3. Add and commit your files:
   ```
   git add .
   git commit -m "Initial commit"
   ```
4. Link your local repository to the GitHub repository:
   ```
   git remote add origin https://github.com/your-username/your-repository-name.git
   ```
5. Push your code to GitHub:
   ```
   git push -u origin main
   ```
6. In your GitHub repository, go to Settings > Pages
7. Under "Source", select the branch you want to deploy (main or master)
8. Click Save, and your website will be published at `https://your-username.github.io/your-repository-name/`

## Updating the Site

After making changes to your website:
1. Add and commit your changes:
   ```
   git add .
   git commit -m "Description of your changes"
   ```
2. Push your changes to GitHub:
   ```
   git push origin main
   ```
3. GitHub Pages will automatically update your site with the new changes

## Preview Your Website Locally

Double-click on `index.html` to open it in your web browser, or use a local web server for more accurate testing.