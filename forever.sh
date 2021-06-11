if forever list | grep -v "grep" | grep "frontend-app"
then
   forever stop "frontend-app"
   echo 'stopped'
fi
forever --killTree --minUptime 5000 --uid "frontend-app" -a start /opt/bitnami/projects/staffomatic-coyo-widget/current/bin/www
# forever start /opt/bitnami/projects/staffomatic-coyo-widget/current/bin/www
