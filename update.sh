git pull
cd demax-client
git pull
cd ..
docker pull essdmscdm/demax-server
docker pull essdmscdm/demax-client

docker-compose up --build -d

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker system prune -a -f
