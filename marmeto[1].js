document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch('https://products-api-2ttf.onrender.com/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    const apiDataElement = document.getElementById('apiData');
    if (Array.isArray(data)) {

        data.forEach(item => {
            const itemElement = document.createElement('div');
            const itemTitle = document.createElement("h3");
            const itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemTitle.textContent = item.title;
            itemElement.appendChild(itemTitle);
            itemElement.appendChild(itemImage);
            apiDataElement.appendChild(itemElement);
        });
    } else {
        apiDataElement.textContent = JSON.stringify(data);
    }
}