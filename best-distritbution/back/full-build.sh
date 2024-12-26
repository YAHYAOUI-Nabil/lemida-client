
docker rm -f -v bestdist-back:1.0.0
docker rmi $(docker images |grep bestdist-back:1.0.0 )
sh build.sh
sh run.sh