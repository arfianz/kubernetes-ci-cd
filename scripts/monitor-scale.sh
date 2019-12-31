#!/bin/bash

#Retrieve the latest git commit hash
BUILD_TAG=`git rev-parse --short HEAD`

#Build the docker image
docker build -t 127.0.0.1:30400/monitor-scale:$BUILD_TAG -f applications/monitor-scale/Dockerfile applications/monitor-scale

#Setup the proxy for the registry
docker stop socat-registry; docker rm socat-registry; docker run -d -e "REG_IP=`minikube ip`" -e "REG_PORT=30400" --name socat-registry -p 30400:5000 socat-registry

echo "5 second sleep to make sure the registry is ready"
sleep 5;

#Push the images
docker push 127.0.0.1:30400/monitor-scale:$BUILD_TAG

#Stop the registry proxy
docker stop socat-registry

# Setup RBAC auth for monitor-scale
kubectl apply -f manifests/monitor-scale-serviceaccount.yaml

# Create the deployment and service for the monitor-scale node server
sed 's#127.0.0.1:30400/monitor-scale:$BUILD_TAG#127.0.0.1:30400/monitor-scale:'$BUILD_TAG'#' applications/monitor-scale/k8s/deployment.yaml | kubectl apply -f -
