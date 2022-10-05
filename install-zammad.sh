#!/bin/bash

#
brew install imlib2 gcc postgresql@14 openssl@1.1 mysql forego

asdf install 
asdf reshim

cp config/database/database.yml config/database.yml

gem install eventmachine -- --with-openssl-dir=/opt/homebrew/Cellar/openssl@1.1/1.1.1q/
bundle install --without test development mysql
bundle exec rails db:setup
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed

# There are three separate processes that support the Zammad application (a web server, websocket server and background-worker). 
# The web server alone is sufficient to launch the application, but without the other two, critical features will not work.
# Zammad uses a Procfile to specify the different processes required by the application. We are using forego) to read the Procfile and spawn each process listed within it.
forego start
