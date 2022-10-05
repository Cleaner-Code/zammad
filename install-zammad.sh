#!/bin/bash

#
brew install imlib2 gcc postgresql@14 openssl@1.1 mysql

asdf install 
asdf reshim

cp config/database/database.yml config/database.yml

gem install eventmachine -- --with-openssl-dir=/opt/homebrew/Cellar/openssl@1.1/1.1.1q/
bundle install --without test development mysql
bundle exec rails db:setup
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed

bundle exec puma -p 3000
