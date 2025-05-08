source "https://rubygems.org"

# Specify Ruby version to match deployment environment
ruby "2.7.2"

# Jekyll and core dependencies
gem "jekyll", "~> 4.3.2"
gem "webrick", "~> 1.7"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Platform specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

# For file system events on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]