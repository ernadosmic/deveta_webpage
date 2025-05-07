source "https://rubygems.org"

# Specify Ruby version to match GitHub Actions environment
ruby "3.3.8"

# Use the latest Jekyll version
gem "jekyll", "~> 4.3.2"

# Optional: Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap"
end

# Windows and JRuby specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  # Replace wdm with a modern alternative for file watching on Windows
  gem "eventmachine", ">= 1.2.7", platforms: [:mingw, :x64_mingw, :mswin]
end

# Performance-booster for watching directories on Windows
gem "webrick", "~> 1.8"