#!/usr/bin/env bash
set -e

examples_dir=$(cd $(dirname $0);pwd)
error=0

lint() {
  local current_dir=$(pwd)
  local target_dir="$examples_dir/$1"
  echo "- $1"
  cd "$target_dir"
  set +e
  npx eslint .
  if [ $? -ne 0 ]; then
    error=1
  fi
  set -e
  cd $current_dir
}

echo "Linting examples..."
lint "browser"
lint "es2021"
lint "mocha"

exit $error
