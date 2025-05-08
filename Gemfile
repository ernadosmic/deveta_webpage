source "https://rubygems.org"

# Specify Ruby version to match local environment
ruby "2.7.2"

# Core dependencies
gem "jekyll", "~> 4.3.2"
gem "webrick", "~> 1.8"
gem "ffi", "1.15.5"  # Pin to exact version
gem "sassc", "2.4.0"  # Pin to exact version

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
  gem "racc", "~> 1.6.0"
end

platforms :ruby do
  gem "eventmachine", "1.2.7"
  gem "racc", "~> 1.6.0"
end