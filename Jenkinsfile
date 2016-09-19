node {
    stage 'Checkout'
    git credentialsId: '66ec4b08-453a-47d2-b8d3-ed9073a29482', url: 'git@bitbucket.org:nodejesters/retire-calc-app.git'

    stage 'Prepare'
    def nodeDir = tool name: '6.2.2', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'

    stage 'Build'
    sh "ionic build"
    archive 'www'
}
