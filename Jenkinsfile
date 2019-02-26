node('docker') {stage('Checkout'){checkout scm}
                stage('Unit Test User Office '){
                sh "docker build -f Dockerfile-test  -t uo ."
                sh 'docker run  -t uo NODE_ENV=jenkins_test npm test'
}}
