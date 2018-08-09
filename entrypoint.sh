#!/bin/sh

# Replace env vars in Json file
file_env="/usr/share/nginx/html/assets/config/configuration_env.json"
file="/usr/share/nginx/html/assets/config/configuration.json"

cp $file_env $file
envsubst '$CLIENT_ID,$REDIRECT_URL,$SIGNUP_SIGNIN_AUTHORITY,$PASSWORD_RESET_AUTHORITY' < $file_env > $file

echo "Starting Nginx"
nginx -g 'daemon off;'
