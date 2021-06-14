module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)
  require('shipit-shared')(shipit)

  var currentPath = "/opt/bitnami/projects/staffomatic-coyo-widget";

  var Slack = require('slack-node');
  var webhookUri = "https://hooks.slack.com/services/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";
  var slack = new Slack();
  slack.setWebhook(webhookUri);

  shipit.initConfig({
    default: {
      workspace: currentPath,
      deployTo: '/opt/bitnami/projects/staffomatic-coyo-widget',
      repositoryUrl: 'https://github.com/easyPEP/staffomatic-coyo-widget.git',
      keepReleases: 2,
      rsync: ['--del'],
      shallowClone: true,
      ignores: ['.git', 'node_modules']
    },
    production: {
      branch:'production',
      servers: 'bitnami@35.156.164.51',
    },
    staging: {
      branch:'develop',
      servers: 'bitnami@35.156.164.51',
    }
  })

  shipit.blTask('npm:install', async () => {
    await shipit.remote(`cd ${shipit.releasePath} && npm install`)
  })

  shipit.blTask('server:start', async () => {
    const command = 'chmod +x forever.sh && ./forever.sh'
    await shipit.remote(`cd ${shipit.currentPath} && ${command}`)
  })

  shipit.blTask('server:restart', async () => {
    const command = 'forever restartall'
    await shipit.remote(`cd ${shipit.config.deployTo} && ${command}`)
  })

  shipit.on('deployed', function () {
    shipit.start('server:start')
  });
}