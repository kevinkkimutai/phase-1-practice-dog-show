const API = "http://localhost:3000/dogs";
const dogs = document.getElementById("table-body");
document.addEventListener("DOMContentLoaded", () => {

  const dogsList = (name, breed, sex) => {
    const dogs = document.getElementById("table-body");
    const row = document.createElement('tr');
    const nameRow = document.createElement('td')
    nameRow.innerText = name
    const breeds = document.createElement('td');
    breeds.innerText = breed
    const sexs = document.createElement('td')
    sexs.innerText = sex
    const edit = document.createElement('td');
    const btn = document.createElement('button');
    btn.addEventListener('click', () => {
        console.log('clicked')
     })
 
    btn.classList.add('button');
    btn.innerHTML = "Edit Dog"


    dogs.appendChild(row);
    row.appendChild(nameRow);
    row.appendChild(breeds);
    row.appendChild(sexs);
    row.appendChild(edit);
    edit.appendChild(btn)

  };

  
  const fetchDogs = () => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
        data.map(
            cat => dogsList(cat.name, cat.breed, cat.sex)
        )

    })
  }
  fetchDogs()
});




