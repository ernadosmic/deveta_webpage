source "https://rubygems.org"

# Specify Ruby version to match local environment
ruby "2.7.2"

# Use the latest Jekyll version
gem "jekyll", "~> 4.3.2"

# Performance-booster for watching directories on Windows
gem "webrick", "~> 1.8"

# Optional: Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library. Only include these gems on Windows platforms
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end