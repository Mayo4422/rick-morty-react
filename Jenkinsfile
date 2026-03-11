pipeline {
    agent any

    tools {
        nodejs "NodeJS 24"
    }

    stages {

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Analisis SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    ${tool 'SonarQubeScanner'}/bin/sonar-scanner
                    '''
                }
            }
        }

    }
}