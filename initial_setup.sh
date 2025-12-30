#!/usr/bin/env bash

SETUP_DIR=~/.setup
SETUP_LOGS_DIR="$SETUP_DIR/logs"
SETUP_BACKUP_LOGS_DIR="$SETUP_DIR/logs/backup"
CURR_DATE=$(date +%Y-%m-%d-%H%M%S)

# Create ~/.setup as the default folder to store all setup related logs and files
mkdir -p "$SETUP_DIR"
mkdir -p "$SETUP_LOGS_DIR"
mkdir -p "$SETUP_BACKUP_LOGS_DIR"

# Capture all logs from this script to a new setup log file
LOGFILE="$SETUP_LOGS_DIR/setup-$CURR_DATE.log"
touch "$LOGFILE"

# Save file descriptors for stdout and stderr, write all further output to logfile
exec 3>&1
exec 4>&2
exec > >(tee -a "$LOGFILE") 2>&1

echo "Running setup script at: $CURR_DATE"

set -e
set -u
set -o pipefail
set -x

# Sublime text

wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo tee /etc/apt/keyrings/sublimehq-pub.asc > /dev/null
echo -e 'Types: deb\nURIs: https://download.sublimetext.com/\nSuites: apt/stable/\nSigned-By: /etc/apt/keyrings/sublimehq-pub.asc' | sudo tee /etc/apt/sources.list.d/sublime-text.sources

# Update apt

sudo apt update
sudo apt -y upgrade

# Refresh all snap packages

sudo snap refresh

# Install important packages

sudo apt install -y git
sudo apt install -y python3.13-venv

# Setup virtualenv, update pip and install ansible and dependencies
/usr/bin/python3 -m venv ~/.setup/venv-ansible

set +x
source ~/.setup/venv-ansible/bin/activate

set -x
pip install --upgrade pip
pip install -r requirements.txt
ansible-galaxy install -r requirements.yml

# Restore original file descriptors for stdout and stderr
set +x
exec 1>&3 3>&-
exec 2>&4 4>&-

set -x
export ANSIBLE_LOG_PATH="$SETUP_LOGS_DIR/ansible-$CURR_DATE.log"

gsettings set org.gnome.desktop.peripherals.touchpad natural-scroll true

ansible-playbook main.yml -K
