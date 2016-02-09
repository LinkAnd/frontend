#!/bin/bash

grunt build 

sudo docker-compose build

sudo docker-compose up
