#!/bin/bash

grunt build -f

sudo docker-compose build

sudo docker-compose up
