docker rm -f -v bestdist-client
docker rmi $(docker images |grep bestdist-client:1.0.0)
sh build.sh
sh run.sh