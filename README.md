# WeatherForcastApp

weather-forecast-app
Our users travel between UK cities regularly and want to be able to see what they need to pack before they travel. Most users check the weather for their destinations for the coming week using the following service: https://openweathermap.org
<br>
As a weather app user I want to see the weather for Birmingham, London, and Cardiff So that I can know what clothes to take with me. Acceptance criteria
<br>
Given that I have selected no city When I look at the page Then I see no weather forecasts
<br>
Given that I have selected a city When I look at the page Then I see the weather for the next 5 days for that city
<br>
Given that I am looking at a weather prediction When I look at each prediction Then I see the following for that day/location:
<br>

- Temperature in Degrees Celsius
- Windspeed
- Weather description
- Weather icon

<br/>
Given that I have chosen a different city When I look at the page Then I see the weather for the newly chosen city only

<br/>
ng g c features/weather/pages/weather-page
ng g c layouts/main-layout
ng g c shared/components/header
ng g c shared/components/page-not-found
ng g c features/weather/components/city-selector
ng g s features/weather/services/weather
ng g c features/weather/components/forecast-card
