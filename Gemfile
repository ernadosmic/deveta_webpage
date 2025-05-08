source "https://rubygems.org"

ruby "2.7.2"

# Core dependencies
gem "jekyll", "~> 4.3.2"
gem "webrick", "~> 1.8"
gem "ffi", "1.15.5"
gem "sassc", "2.4.0"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Platform specific dependencies
gem "tzinfo", "~> 2.0"
gem "tzinfo-data"

# Windows specific
platforms :mingw, :x64_mingw do
  gem "wdm", ">= 0.1.0" if Gem.win_platform?
end