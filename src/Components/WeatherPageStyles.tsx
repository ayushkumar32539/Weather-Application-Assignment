import styled, { keyframes } from 'styled-components';

interface WeatherCardProps {
  weather: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; /* Default background color */
  animation: ${fadeIn} 0.5s ease-in; /* Fade in animation */
`;

export const WeatherCard = styled.div<WeatherCardProps>`
  border-radius: 10px;
  padding: 40px; /* Increase padding for better spacing */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Update box-shadow */
  text-align: center;
  /* Conditional background color based on weather description */
  font-family: 'Arial', sans-serif;
  background-color: ${(props) => {
    switch (props.weather) {
      case 'clear sky':
        return '#87CEEB'; // Sky Blue
      case 'rain':
        return '#4682B4'; // Steel Blue
      case 'clouds':
        return '#778899'; // Light Slate Gray
      case 'snow':
        return '#F0FFFF'; // Azure
      default:
        return '#ffffff'; // Default White
    }
  }};
  animation: ${fadeIn} 0.5s ease-in; 
  transition: background-color 0.5s ease; 
`;

export const WeatherIcon = styled.div`
  font-size: 5rem; 
  margin-bottom: 1rem; 
`;

export const Temperature = styled.p`
  font-size: 2rem; 
  font-weight: bold;
  margin-bottom: 1rem; 
`;

export const Description = styled.p`
  font-size: 1.5rem; /* Adjust font size */
  color: #666666;
  margin-bottom: 1rem; /* Adjust margin */
`;

export const CityName = styled.h2`
  font-size: 2.5rem; /* Adjust font size */
  margin-bottom: 1rem; /* Adjust margin */
`;

export const WeatherDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WeatherDetailsList = styled.ul`
  list-style: none;
  text-align: left;
`;

export const WeatherDetailItem = styled.li`
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif; /* Change font family */
`;