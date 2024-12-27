
docker rm -f -v bestdist-back:0.0.0
docker rmi $(docker images |grep bestdist-back:0.0.0 )
sh build.sh
sh run.sh