#!/bin/bash

active_pid=$(xdotool getactivewindow getwindowpid)
active_app=$(ps -p $active_pid -o comm=)
echo "Active application: $active_app"