#!/bin/bash
#pm2 start index.js --name ShadeBot --watch --env production
pm2 start ecosystem.config.js --env production --watch