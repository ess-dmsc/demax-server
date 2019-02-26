node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('Unit Test User Office '){
    sh "docker-compose -f docker-compose-test.yaml up --build --abort-on-container-exit"
  }
  stage('Cleanup'){
  sh "docker-compose down"
  }
}
