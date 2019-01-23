node('docker') {stage('Checkout'){checkout scm}
                stage('Unit Test User Office '){
                sh "docker build -f Dockerfile-test  -t uo ."
                sh 'docker-compose run demax-server npm run test'
}}
