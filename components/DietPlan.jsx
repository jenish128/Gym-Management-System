import React from "react";

const DietPlan = () => {
    return(
        <div className="classes-con">
            <h1 className="classes-heading">Diet Plan</h1>
            <table className="classes-table">
    <tr>
        <th className="meal-width">Meal</th>
        <th className="time-width">Time</th>
        <th>Foods</th>
    </tr>
    <tr>
        <td>Pre-Workout</td>
        <td>30-60 mins before</td>
        <td>Banana, Soaked Almonds & Walnuts, Black Coffee (for energy boost)</td>
    </tr>
    <tr>
        <td>Breakfast</td>
        <td>8:00 AM</td>
        <td>Oats with Nuts & Chia Seeds, Peanut Butter on Whole Wheat Toast, Greek Yogurt, Fruits</td>
    </tr>
    <tr>
        <td>Snack</td>
        <td>11:00 AM</td>
        <td>Roasted Chickpeas, Peanut Butter with Multigrain Crackers, Dry Fruits</td>
    </tr>
    <tr>
        <td>Lunch</td>
        <td>1:00 PM</td>
        <td>Dal, Brown Rice/Quinoa, Paneer Bhurji, Green Salad, Sautéed Vegetables</td>
    </tr>
    <tr>
        <td>Pre-Workout</td>
        <td>4:30 PM</td>
        <td>Homemade Protein Shake (Milk, Banana, Peanut Butter, Chia Seeds), Handful of Nuts</td>
    </tr>
    <tr>
        <td>Post-Workout</td>
        <td>6:30 PM</td>
        <td>Whey Protein Shake, Boiled Sweet Potatoes, Sprouts Salad</td>
    </tr>
    <tr>
        <td>Dinner</td>
        <td>8:00 PM</td>
        <td>Grilled Paneer/Tofu, Quinoa/Roti, Sautéed Vegetables, Avocado Salad</td>
    </tr>
    <tr>
        <td>Before Bed</td>
        <td>10:00 PM</td>
        <td>Warm Milk with Turmeric, Handful of Nuts, Herbal Tea</td>
    </tr>
</table>


        </div>
    );
}

export default DietPlan;