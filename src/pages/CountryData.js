// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../component/Sidebar';

// Functional component to display country data
const CountryData = () => {
  // State hook to store the country data fetched from the API
  const [countriesData, setCountriesData] = useState([]);

  // useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    // Asynchronous function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make the API call using Axios
        const response = await axios.get('https://restcountries.com/v3.1/all');
        // Update the state with the response data
        setCountriesData(response.data);
      } catch (error) {
        // Log any errors that occur during data fetching
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function to fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <>
      {/* Sidebar component */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main content container */}
      <div className='main-container'>
        {/* Use react-bootstrap's Row and Col to display cards in a responsive grid */}
        <Row xs={1} sm={2} md={3} lg={4}>
          {/* Map over the countriesData array and render a Card for each country */}
          {countriesData.map((country) => {
            // Destructure the relevant data from the country object
            const { name, flags, region, subregion, population, languages, currencies } = country;

            // Check if any essential data is missing for a country, and skip rendering if so
            if (!name || !flags || !region || !subregion || !population || !languages || !currencies) {
              return null;
            }

            return (
              // Render a Card for the country with its information
              <Col key={name.common} className="mb-4">
                <Card>
                  {/* Display the country's flag as the Card's top image */}
                  <Card.Img variant="top" src={flags.png} />
                  <Card.Body>
                    {/* Display the common name of the country as the Card's title */}
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                      {/* Display information about the country */}
                      <strong>Region:</strong> {region} <br />
                      <strong>Subregion:</strong> {subregion} <br />
                      <strong>Population:</strong> {population} <br />
                      <strong>Languages:</strong> {Object.values(languages).join(', ')} <br />
                      <strong>Currencies:</strong> {Object.values(currencies).join(', ')} <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CountryData;
