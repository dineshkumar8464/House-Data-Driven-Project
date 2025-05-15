# House-Data-Driven-Project

Welcome to the repository for the project on the Development of an project called House Data Driven Project.

_A project developed during my College academics_

---


## Overview

**House Data Driven Price Predictor** is a software that utilizes Machine Learning techniques to estimate House prices based on historical and feature-based data.

It supports:

* Real-time prediction

To design and implement this tool:

* Accurately predicts prices using ML models and users to make their data driven decisions accurately
* Provides a smooth user experience. 


---
## Repositry Content

The repositry structure as follows:

- `client folder`:
 - app.html file- The main HTML file that provides the structure and input form for users to enter house features.
 - app.css file- Handles the styling of the user interface, ensuring a clean and responsive design.
 - app.js file- Adds interactivity by handling user events and sending prediction requests to the Flask backend.

- `model folder`:
 - House-Price-Predictor.ipynb file- Jupyter Notebook containing the full pipeline for training and evaluating the house price prediction model.
 - banglore_home_prices_model.pickle file- Serialized machine learning model trained to predict house prices based on input features.
 - bengaluru_house_prices.csv file- Dataset containing house listings in Bengaluru used for training and testing the model.
 - columns.json- JSON file storing feature (column) names used by the model to ensure consistent input during prediction.


- `artifacts folder`:
  - Directory used to store saved model artifacts like the trained model and feature metadata for deployment.


- `server.py file`- Flask server script that handles routing and exposes the model prediction functionality via API endpoints.
- `utils.py file`- Utility functions for data processing, input transformation, and feature extraction used during model inference.
- `requirements.txt`- Text file listing all Python dependencies required to run the project environment successfully.
 - `README.md file` – Provides an overview, setup guide, and usage instructions for the project.


This data science project series walks through step by step process of how to build a real estate price prediction website.
Build a model using sklearn and linear regression using banglore home prices dataset from kaggle.com.
Second step would be to write a python flask server that uses the saved model to serve http requests. 
Third component is the website built in html, css and javascript that allows user to enter home square ft area, bedrooms etc and it will call python flask server to retrieve the predicted price. 
During model building we will cover almost all data science concepts such as data load and cleaning, outlier detection and removal, feature engineering, dimensionality reduction.
Using various tools includes:
Python
Numpy and Pandas for data cleaning
Matplotlib for data visualization
Sklearn for model building
Jupyter notebook, visual studio code and pycharm as IDE
Python flask for http server
HTML/CSS/Javascript for UI

---

## Result

![image](https://github.com/user-attachments/assets/f7b24c65-a837-45f0-b53f-0b84178c0095)

---

## Getting Started

Clone the repository: git clone https://github.com/dineshkumar8464/House-Data-Driven-Project.git/

Navigate to the repository directory: cd House-Data-Driven-project

Explore the client folder/ model folder/ server folders for the coding implementation.

Follow the documentation in the documents/ directory for detailed information.

---

## Contribution Guidelines

Contributions to this project are welcome! If you find issues or have enhancements to propose, please follow these steps:

## Fork the repository.

Create a new branch for your feature/bugfix: git checkout -b feature-name.

Make your changes and commit them: git commit -m "Description of changes".

Push to the branch: git push origin feature-name.

Open a pull request, describing your changes and the problem they solve.

---


## Contact:

Feel free to reach out to me at dineshmanimela088@gmail.com for any questions, feedback, or collaboration opportunities.

---



