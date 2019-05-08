node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('DEMAX Backend tests'){
    sh "docker-compose -f './CI/docker-compose/docker-compose-test.yaml' up --build --abort-on-container-exit"
  }
  stage('DEMAX Production build'){
    sh "docker-compose up --build -d"
  }
}
