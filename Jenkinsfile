node('docker') {stage('Checkout'){checkout scm}
                stage('Unit Test User Office '){
                sh 'docker-compose -f docker-compose-test.yml'
                    sh 'docker-compose run demax-server npm run test'
}}
