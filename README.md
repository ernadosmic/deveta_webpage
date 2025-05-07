# Deveta osnovna škola - Maoča Website

This repository contains the source code for the Deveta osnovna škola website, built with Jekyll.

## Local Development

### Prerequisites

To run this site locally, you'll need:

1. Ruby (version 2.5.0 or higher)
2. RubyGems
3. GCC and Make (for Windows users, install via [RubyInstaller](https://rubyinstaller.org/) with DevKit)

### Installation

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository or download the source code
   
3. Navigate to the directory:
   ```
   cd deveta_webpage
   ```
   
4. Install dependencies:
   ```
   bundle install
   ```

### Running Locally

1. Start the Jekyll development server:
   ```
   bundle exec jekyll serve
   ```

2. Open your browser and visit:
   ```
   http://localhost:4000
   ```

The site will auto-refresh when files are changed.

## File Structure

- `_config.yml`: Jekyll configuration
- `_layouts/`: HTML layout templates
- `_includes/`: Reusable HTML components
- `_posts/`: Blog posts with each post in its own folder
  - `YYYY-MM-DD-title/`: Individual post folder
    - `index.md`: Post content in Markdown format
    - `assets/`: Post-specific images and files
- `_events/`: Events collection
- `_downloads/`: Documents collection
- `assets/`: Global assets
- `images/`: Global images
- `css/`: Stylesheets
- `js/`: JavaScript files

## Adding Content

### Creating a New Post

1. Create a new folder in `_posts/` using the naming convention:
   ```
   YYYY-MM-DD-post-title
   ```

2. Inside this folder, create an `index.md` file with front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   author: "Author Name"
   categories: 
     - category1
     - category2
   featured: true/false
   featured_image: "assets/image.jpg"
   thumbnail: "assets/thumbnail.jpg"
   excerpt: "A short description of the post"
   ---

   Post content goes here...
   ```

3. Add post-specific images to the `assets/` subfolder within your post folder.

### Creating a New Event

Similar structure to posts, but in the `_events/` collection.

### Adding Documents

Add documents to the `_downloads/` collection, with each document in its own folder with assets.

## Deployment

When ready to deploy, build the site:

```
bundle exec jekyll build
```

This will generate the static site in the `_site` directory, which can be deployed to your web server.

bundle exec jekyll serve

## License

Copyright © 2025 Deveta osnovna škola Brčko distrikta Bosne i Hercegovine. All rights reserved.