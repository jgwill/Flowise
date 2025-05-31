FLOWISE_DIR=$HOME/.flowise.3.dev
MOUNT_PATH=/root/.flowise
XPORT=3003
. /opt/binscripts/load.sh

dkcrm flowise
docker run -d --name flowise -v $FLOWISE_DIR:$MOUNT_PATH -p $XPORT:3000 flowise
