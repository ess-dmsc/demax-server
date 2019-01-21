node('docker') {stage('Checkout'){checkout scm}
                stage('Unit Test User Office '){
                sh 'docker-compose build -f docker-compose-test.yaml'
                    sh 'docker-compose run demax-server npm run test'
}}
