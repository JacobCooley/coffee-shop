#!/usr/bin/env bash
gnome-terminal --tab -e "bash -c 'cd /mnt/c/Projects/coffee-shop && yarn dev';bash" --tab -e "bash -c 'cd /mnt/c/Projects/geth && ./startnode.sh';bash" --tab -e "bash -c 'cd /mnt/c/Projects/ganjafarm && yarn start';bash"