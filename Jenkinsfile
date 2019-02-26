node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('DEMAX Backen unit test'){
    sh "docker-compose -f docker-compose-test.yaml up --build --abort-on-container-exit"
  }
}
