git pull
cd demax-client
git pull
cd ..
docker-compose -f docker-compose-stage.yaml up --build -d
docker system prune -f
docker-compose logs --follow