node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('Unit Test User Office '){
    sh "docker-compose -f docker-compose-test.yaml up"
  }
  stage('Cleanup'){
  sh "docker-compose down"
  }
}
