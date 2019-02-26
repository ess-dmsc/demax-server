node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('DEMAX Backend tests'){
    sh "docker-compose -f docker-compose-test.yaml up --build --abort-on-container-exit"
  }
}
