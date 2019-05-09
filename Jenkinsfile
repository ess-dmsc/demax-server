node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('DEMAX Backend tests'){
    sh "docker-compose -f './CI/docker-compose/docker-compose-test.yaml' up --build --abort-on-container-exit"
  }
  stage('DEMAX Production build'){
    withCredentials([ usernamePassword(credentialsId: 'dockerhubess',usernameVariable: 'docker_user',passwordVariable: 'docker_password' )]) {
    sh "docker login -u essdmscdm -p $docker_password"
    sh "docker build . --tag demax/demax-server:latest -t demax/demax-server:${IMAGE_ID}dmscprod"
  }
  stage('Build Docker'){
      withCredentials([ usernamePassword(credentialsId: 'dockerhubess',usernameVariable: 'docker_user',passwordVariable: 'docker_password' )]) {
        sh 'docker login -u essdmscdm -p $docker_password '
        def IMAGE_ID = sh ( script: 'git rev-parse HEAD',returnStdout: true).trim()
        sh "docker build --file CI/ESS/Dockerfile.proxy . --tag dacat/catamel:latest -t dacat/catamel:${IMAGE_ID}dev"
        echo "Git image id : ${IMAGE_ID}"
      }
    }
    stage('Production Build'){
        if (env.BRANCH_NAME == 'develop'){
              def IMAGE_ID = sh ( script: 'git rev-parse HEAD',returnStdout: true).trim()
        sh "docker build --file CI/ESS/Dockerfile.proxy . --tag dacat/catamel:latest -t dacat/catamel:${IMAGE_ID}dev"
        echo "Git image id : ${IMAGE_ID}"
        sh "docker push dacat/catamel:${IMAGE_ID}dev"
        sh "docker push dacat/catamel:latest"
        sh "docker rmi dacat/catamel:${IMAGE_ID}dev"
        }
    }
}
