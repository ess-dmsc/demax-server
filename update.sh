git pull
cd demax-client
git pull
cd ..
docker-compose -f docker-compose-pm2.yaml up --build -d

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker system prune -a -f
