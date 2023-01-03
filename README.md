# JobAce

## General Information

This is the repository for JobAce. 

## Environments

Current git environment: git status
Check env status: $ amplify status

Create environment: $ amplify add env
Change environment: $ amplify env checkout <dev> / <production>
Configure project: $ amplify configure project

## Working on Features

Use dev backend: $ amplify env checkout dev
Branches status: $ git branch
Create new branch: $ git checkout -b <feature-name>
Change to branch: $ git checkout <feature-name>
Merge feature: git merge <feature-name>; git push

## Testing & Debugging

Listen to stripe web hook: $ webhook: /opt/homebrew/bin/stripe listen --forward-to <https://<appid>.execute-api.eu-west-1.amazonaws.com/dev/webhook> --forward-connect-to <https://<appid>.execute-api.eu-west-1.amazonaws.com/dev/webhook>
AWS CloudWatch: Examine logs of tools
AWS AppSync: Test GraphQL database queries
Test Python FastAPI: $ uvicorn main:app
Run Python tests with: $ python3 -m pytest

## Cleaning up
 
Git feature: $ git push origin --delete <feature-name>
Amplify env: $ amplify env remove dev

## Sources
[Instructions](https://docs.aws.amazon.com/amplify/latest/userguide/team-workflows-with-amplify-cli-backend-environments.html)