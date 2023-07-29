import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../component/Sidebar';
import './Meal.css';
import './Dashboard.css';

function Meal() {
  // State hooks to manage the meal data, selected alphabet, loading state, and error state
  const [meals, setMeals] = useState([]);
  const [selectedAlphabet, setSelectedAlphabet] = useState('a');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch meals when the selectedAlphabet changes
  useEffect(() => {
    // Function to fetch meals based on the selected alphabet
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedAlphabet}`
        );

        // Check if meals are found for the selected alphabet
        if (response.data.meals) {
          setMeals(response.data.meals);
        } else {
          setMeals([]);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal details:', error);
        setLoading(false);
        setError('Error fetching meals. Please try again.');
      }
    };

    // Call the fetchMeals function when the selectedAlphabet changes
    fetchMeals();
  }, [selectedAlphabet]);

  // Create an array of alphabet options from 'a' to 'z'
  const alphabetOptions = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Function to handle alphabet selection
  const handleAlphabetChange = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  return (
    <>
      {/* Sidebar component */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main content container */}
      <div className='main-container'>
        <Col>
          <div>
            <h1>Meals starting with '{selectedAlphabet}'</h1>
            {/* Alphabet selection buttons */}
            <div className="alphabet-selection">
              {alphabetOptions.map((alphabet) => (
                <button
                  key={alphabet}
                  onClick={() => handleAlphabetChange(alphabet)}
                  className={selectedAlphabet === alphabet ? 'active' : ''}
                >
                  {alphabet}
                </button>
              ))}
            </div>

            {/* Display loading, error, or meal cards based on the state */}
            {loading && <div>Loading...</div>}
            {!loading && error && <div>Error: {error}</div>}
            {!loading && !error && meals.length === 0 && (
              <div>No meals found for '{selectedAlphabet}'.</div>
            )}
            {!loading && !error && meals.length > 0 && (
              <div className="meal-card-container">
                {/* Render meal cards for each meal */}
                {meals.map((meal) => (
                  <Card key={meal.idMeal} className="meal-card">
                    <div className="meal-card-image">
                      <Card.Img variant="top" src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                    <Card.Body>
                      <Card.Title>{meal.strMeal}</Card.Title>
                      <Card.Text>
                        <p>Category: {meal.strCategory}</p>
                        <p>Area: {meal.strArea}</p>
                        <h3>Ingredients:</h3>
                        <ul>
                          {/* Render ingredients list */}
                          {Object.keys(meal)
                            .filter((key) => key.startsWith('strIngredient') && meal[key])
                            .map((key) => (
                              <li key={key}>{meal[key]}</li>
                            ))}
                        </ul>
                        <h3>Instructions:</h3>
                        <p>{meal.strInstructions}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Col>
      </div>
    </>
  );
}

export default Meal;
