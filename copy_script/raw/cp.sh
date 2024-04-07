#!/bin/bash

# Initialize enviroment

cd Giang
mv *.* ..
cd ..
cd Khang
mv *.* ..
cd ..
cd kiên
mv *.* ..
cd ..
cd Nhật
mv *.* ..
cd ..
rm -rf Giang
rm -rf Khang
rm -rf kiên
rm -rf Nhật
mkdir cn
mkdir gdbb
mkdir per
mkdir txlop
mkdir txvinpearl
mkdir vestlop

# Extract downloaded drive zips

ls *.zip > list_zip.txt
for file in $(cat ./list_zip.txt); 
do
    unzip "$file";
done

# Move the files to the folders respectively
# Requires list files. Do not delete those.

for file in $(cat ./list_cn.txt); 
do
    mv "$file" ./cn/
done
for file in $(cat ./list_gdbb.txt); 
do
    mv "$file" ./gdbb/
done
for file in $(cat ./list_per.txt); 
do
    mv "$file" ./per/
done
for file in $(cat ./list_txlop.txt); 
do
    mv "$file" ./txlop/
done
for file in $(cat ./list_txvinpearl.txt); 
do
    mv "$file" ./txvinpearl/
done
for file in $(cat ./list_vestlop.txt); 
do
    mv "$file" ./vestlop/
done

# To generate: 
# ls <folder_name> -1 > list_<folder_name>.txt
# and follow this script.
