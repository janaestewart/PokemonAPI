//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#poke-holder-img').src = data.sprites.versions['generation-v']['black-white'].front_default
        document.querySelector('#poke-name').innerText = data.name
        document.querySelector('#poke-id').innerText = data.id
        document.querySelector('#poke-height').innerText = data.height
        document.querySelector('#poke-type').innerText = data.types[0].type.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

