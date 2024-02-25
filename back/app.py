from flask import Flask, jsonify
from flask_cors import CORS  # Import the CORS module
from pymongo import MongoClient
import pandas as pd
import statistics

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB configuration
client = MongoClient("mongodb://127.0.0.1:27017/")
db = client["khub"]
file_name = "C:\\Users\\matta\\OneDrive\\Desktop\\aug\\aug\\back\\Latest_Data_Science_Salaries.csv"
df = pd.read_csv(file_name)
data = df.to_dict(orient="records")

# Check if the database connection is successful
try:
    client.server_info()  # This will trigger an exception if the connection fails
    db_status = "Database connected"
except Exception as e:
    db_status = f"Database connection failed: {str(e)}"

# Insert data into the database
db.file_names.insert_many(data)

@app.route("/data", methods=["GET"])
def get_data():
    # Fetch all data from the 'file_names' collection
    fetched_data = list(db.file_names.find({}))

    # Convert ObjectId to string for JSON serialization
    for data_entry in fetched_data:
        data_entry["_id"] = str(data_entry["_id"])

    return jsonify(fetched_data)

@app.route("/statistics", methods=["GET"])
def calculate_statistics():
    # Fetch data from the 'file_names' collection
    fetched_data = list(db.file_names.find({}))

    # Extract salary values from fetched data
    salaries = [data_entry["Salary"] for data_entry in fetched_data]

    # Calculate statistics
    mean_salary = statistics.mean(salaries)
    median_salary = statistics.median(salaries)
    try:
        mode_salary = statistics.mode(salaries)
    except statistics.StatisticsError:
        mode_salary = "No unique mode"
    std_deviation_salary = statistics.stdev(salaries)
    min_salary = min(salaries)
    max_salary = max(salaries)

    # Create a dictionary to hold the calculated statistics
    statistics_dict = {
        "mean_salary": mean_salary,
        "median_salary": median_salary,
        "mode_salary": mode_salary,
        "std_deviation_salary": std_deviation_salary,
        "min_salary": min_salary,
        "max_salary": max_salary
    }

    return jsonify(statistics_dict)

@app.route("/db_status", methods=["GET"])
def check_db_status():
    return jsonify({"status": db_status})

if __name__ == "__main__":
    app.run(debug=True)