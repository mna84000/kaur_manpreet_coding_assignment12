# Kaur_Manpreet_Coding_Assignment12

## Overview

This project is a React and Storybook Component Library created for WEBD-3012 Business Systems Build and Testing.

## Components Included

* Button
* Label
* Text
* Dropdown
* RadioButton
* Img
* HeroImage
* Card
* Table
* TableHeader
* TableRow
* TableCell
* TableFooter

## Project Setup Steps

### Create React Application

npx create-react-app kaur_manpreet_coding_assignment12 --template typescript

### Enter Project Folder

cd kaur_manpreet_coding_assignment12

### Install Storybook

npx storybook@latest init

### Install Styled Components

npm install styled-components

npm install --save-dev @types/styled-components

### Install Testing Package

npm install --save-dev jest-styled-components

### Run Storybook

npm run storybook

### Run Tests

npm test

### Create Production Build

npm run build

### Build Docker Image

docker build -t kaur_manpreet_coding_assignment12 .

### Run Docker Container

docker run --name kaur_manpreet_coding_assignment12 -p 8083:8083 kaur_manpreet_coding_assignment12

## Docker Information

Working Directory:

/kaur_manpreet_ui_garden

Port:

8083

## Author

Manpreet Kaur
WEBD-3012
Coding Assignment 12
