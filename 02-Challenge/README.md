# 08 TypeScript and OOP: Vehicle Builder

## Description

This project is a TypeScript-based command-line application that allows users to create and interact with different types of vehicles. The application initially supported only cars, but I extended it to include trucks and motorbikes. Users can create a new vehicle or select an existing one and then perform various actions specific to that vehicle type. The program continues to prompt the user until they decide to exit.

Features
Vehicle Creation: Users can create three types of vehicles: Car, Truck, and Motorbike.
Custom Actions: Each vehicle type supports unique actions. For example, trucks can tow other vehicles, and motorbikes can perform wheelies.
Persistent Interaction: Users can perform multiple actions on the selected vehicle until they choose to exit the application.
Video Walkthrough
A full walkthrough video demonstrating the functionality of the Vehicle Builder can be found here: Walkthrough Video.

The video showcases:

How to invoke the application using the command line.
The creation of each vehicle type (Car, Truck, and Motorbike).
Input of vehicle details and execution of custom actions for each vehicle type.
Link of the video: https://share.vidyard.com/watch/bxNCQ37suJTkuVJxpAAz68?

Installation and Usage
Clone the repository.
git clone https://github.com/yourusername/vehicle-builder.git

Navigate to the project directory.
cd vehicle-builder

Install dependencies.
npm install
Start the application.
npm run start

Classes and Structure
Car Class: Represents a standard car with properties like color, make, model, year, weight, and top speed.
Truck Class: Extends the base functionality with additional properties like towing capacity. Trucks can perform the unique action of towing other vehicles.
Motorbike Class: Represents a motorbike with properties like front and rear wheel details. Motorbikes can perform wheelies.



