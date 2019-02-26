node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('Unit Test User Office '){
    sh "docker-compose -f docker-compose-test.yaml up --exit-code-from demax-server"
  }
  stage('Cleanup'){
  sh "docker-compose down"
  }
}
