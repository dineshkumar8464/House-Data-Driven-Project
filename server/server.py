from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])

    # Check if sqft per BHK is less than 300
    if total_sqft / bhk < 300:
        response = jsonify({
            'estimated_price': 0,
            'message': 'Invalid input: BHK size should be at least 300 sqft'
        })
    else:
        # Bathroom validation
        max_bathrooms = {1: 2, 2: 3, 3: 4, 4: 5}  # Define max baths for each BHK
        allowed_bath = max_bathrooms.get(bhk, 5)  # Default max 5 for BHK > 4

        if bath > allowed_bath:
            response = jsonify({
                'estimated_price': 0,
                'message': f'Warning: {bath} bathrooms for a {bhk} BHK is unusual! Typically, max {allowed_bath} bathrooms are expected.'
            })
        else:
            estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)
            estimated_price = max(0, estimated_price)
            response = jsonify({'estimated_price': estimated_price})

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()