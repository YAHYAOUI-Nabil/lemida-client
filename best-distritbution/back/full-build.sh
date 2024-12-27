
docker rm -f -v best-dist-back
docker rmi $(docker images |grep best-dist-back:1.0.0 )
sh build.sh
sh run.sh