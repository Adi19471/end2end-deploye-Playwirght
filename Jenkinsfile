
pipeline {
    agent any

    environment {
        DB_HOST = 'localhost'
        DB_USER = 'root'
        DB_NAME = 'playwright_db'
        DB_PASSWORD = credentials('mysql-db-password')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test tests/api/ --reporter=html'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true

            echo 'Playwright execution completed'
        }

        success {
            echo 'All automation tests passed!'
        }

        failure {
            echo 'Automation tests failed!'
        }
    }
}
