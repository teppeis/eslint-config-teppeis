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
  npx eslint --max-warnings 0 .
  if [ $? -ne 0 ]; then
    error=1
  fi
  set -e
  cd $current_dir
}

tsc() {
  local current_dir=$(pwd)
  local target_dir="$examples_dir/$1"
  cd "$target_dir"
  set +e
  npx tsc
  if [ $? -ne 0 ]; then
    error=1
  fi
  set -e
  cd $current_dir
}

echo "Linting examples..."
lint "es2021"
lint "es2022"
lint "es2023"
lint "node18"
lint "node20"
lint "typescript-cjs"
tsc "typescript-cjs"
lint "typescript-esm"
tsc "typescript-esm"
lint "typescript-type-checked"
tsc "typescript-type-checked"
lint "mocha"
lint "browser"

exit $error
