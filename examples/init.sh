#!/usr/bin/env bash
set -e

examples_dir=$(cd $(dirname $0);pwd)

init() {
  local current_dir=$(pwd)
  local target_dir="$examples_dir/$1"
  echo "- $1"
  cd "$target_dir"
  npm install
  cd $current_dir
}

echo "Initializing examples..."
init "typescript-cjs"
