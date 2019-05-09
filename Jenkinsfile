node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('DEMAX Backend tests'){
    sh "docker-compose -f './CI/docker-compose/docker-compose-test.yaml' up --build --abort-on-container-exit"
  }
stage('Build Docker'){
    withCredentials([ usernamePassword(credentialsId: 'dockerhubess',usernameVariable: 'docker_user',passwordVariable: 'docker_password' )]) {
      sh 'docker login -u essdmscdm -p $docker_password '
      def IMAGE_ID = sh ( script: 'git rev-parse HEAD',returnStdout: true).trim()
      sh "docker build . --tag essdmscdm/demax-server:latest -t essdmscdm/demax-server:${IMAGE_ID}dev"
      echo "Git image id : ${IMAGE_ID}"
    }
  }
  stage('DEMAX Production Build'){
      if (env.BRANCH_NAME == 'develop'){
            def IMAGE_ID = sh ( script: 'git rev-parse HEAD',returnStdout: true).trim()
      sh "docker build . --tag essdmscdm/demax-server:latest -t essdmscdm/demax-server:${IMAGE_ID}dev"
      echo "Git image id : ${IMAGE_ID}"
      sh "docker push essdmscdm/demax-server:${IMAGE_ID}dev"
      sh "docker push essdmscdm/demax-server:latest"
      sh "docker rmi essdmscdm/demax-server:${IMAGE_ID}dev"
      }
  }
}
