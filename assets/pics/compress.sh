#!/bin/bash

for fd in $(ls -1d */); do
    cd "$fd"
    for fl in $(ls *.jpg -1); do
        mkdir "${fl%%.*}"
        mv "$fl" "${fl%%.*}"
        cd "${fl%%.*}"
        convert "${fl%%.*}.jpg" -quality 40% "${fl%%.*}_compressed.jpg"
        mv "${fl%%.*}.jpg" "${fl%%.*}_raw.jpg"
        cd ..
    done
    cd ..
done

"compressed: $(find . -name "*_compressed.jpg" -print0 | du -bch --files0-from=-| tail -1)" > compressed_details.txt
"raw: $(find . -name "*_raw.jpg" -print0 | du -bch --files0-from=-| tail -1)" > compressed_details.txt