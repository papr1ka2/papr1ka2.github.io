#!/bin/bash

USER=$1

sudo adduser --disabled-password --gecos "" $USER
sudo gpasswd -a $USER adm
sudo gpasswd -a $USER sudo
