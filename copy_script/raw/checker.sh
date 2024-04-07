#!/bin/bash

not_verfied = 0

for file in $(cat './list.txt'); do
    if [ ! -f ./"$file" ]; then
        not_verfied = 1
        echo "the files might've been renamed"
        break
    fi
done

if [ $(ls *.jpg | wc -l) != $(cat './list.txt' | wc -l) ]; then
    not_verfied = 1
    echo "there isn't enough files"
fi

if [ not_verfied == 0 ]; then 
    echo "file verity completed"
fi