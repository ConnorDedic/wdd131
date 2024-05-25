document.addEventListener('DOMContentLoaded', function() {
  const products = [
    {
      id: "fc-1888", 
      name: "flux capacitor", 
      avgRating: 4.5
    },
    {
      id: "fc-2050", 
      name: "power laces", 
      avgRating: 4.7 
    },
    {
      id: "fs-1987", 
      name: "time circuits", 
      avgRating: 3.5
    },
    {
      id: "ac-2000", 
      name: "low voltage reactor", 
      avgRating: 3.9
    },
    {
      id: "jj-1969", 
      name: "warp equalizer", 
      avgRating: 5.0
    }
  ];

  const selected_option = document.getElementById('productName');

  if (selected_option) {
      products.forEach(item => {
          let option = document.createElement('option');
          option.value = item.id;
          option.textContent = item.name;
          selected_option.appendChild(option);
      });
  }

  // Review counter using localStorage
  let num_of_reviews = localStorage.getItem('num_of_reviews');
  if (num_of_reviews) {
      num_of_reviews = parseInt(num_of_reviews, 10);
  } else {
      num_of_reviews = 0;
  }

  num_of_reviews++;
  localStorage.setItem('num_of_reviews', num_of_reviews);
  document.getElementById('num_of_reviews').textContent = num_of_reviews;
});

