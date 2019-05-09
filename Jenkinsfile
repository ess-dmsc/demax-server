node('docker') {
  stage('Checkout'){
    checkout scm
  }
  stage('Unit tests'){
    sh "docker-compose -f './CI/docker-compose/docker-compose-test.yaml' up --build --abort-on-container-exit"
  }

  stage('Production build'){
    withCredentials([ usernamePassword(credentialsId: 'dockerhubess',usernameVariable: 'docker_user',passwordVariable: 'docker_password' )]) {
      sh 'docker login -u essdmscdm -p $docker_password '
      def IMAGE_ID = sh ( script: 'git rev-parse HEAD',returnStdout: true).trim()
      sh "docker build -t essdmscdm/demax-server:latest -t essdmscdm/demax-server:${IMAGE_ID} ."
      echo "Git image id : ${IMAGE_ID}"
      sh "docker push essdmscdm/demax-server:${IMAGE_ID}"
      sh "docker push essdmscdm/demax-server:latest"
      sh "docker rmi essdmscdm/demax-server:${IMAGE_ID}"
    }
  }
}
