
docker rm -f -v best-dist-back:0.0.0
docker rmi $(docker images |grep best-dist-back:0.0.0 )
sh build.sh
sh run.sh