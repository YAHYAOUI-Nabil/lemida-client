docker run --net lnr-network -it -d --restart=always --name bestdist-client -h bestdist-client -p 8080:8080 -e HOST_NAME="prod" bestdist-client:0.0.0