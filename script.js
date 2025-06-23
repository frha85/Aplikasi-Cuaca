document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeather(location);
    }
});

async function getWeather(location) {
    const apiKey = '703058f21433ac148997fdf809ee6df9'; // Ganti dengan API Key Anda
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Suhu: ${data.main.temp} °C</p>
                <p>Cuaca: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>Lokasi tidak ditemukan</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}