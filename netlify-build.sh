#!/bin/bash

# Install specific Ruby version using rbenv (which Netlify supports)
echo "Installing Ruby 3.1.0"
rbenv install 3.1.0 -s
rbenv local 3.1.0
rbenv rehash

# Install correct Bundler version
echo "Installing Bundler"
gem install bundler -v 2.3.26

# Install gems and build site
echo "Installing dependencies and building site"
bundle install
bundle exec jekyll build