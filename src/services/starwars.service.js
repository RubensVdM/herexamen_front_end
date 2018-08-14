export const getAll2 = () => {
  return fetch('https://swapi.co/api/people/')
                .then(response => response.json())
}

export const getAll3 = () => {
  return fetch('https://swapi.co/api/people/?page=2')
                .then(response => response.json())
}

export const get2 = (name) => {
  return fetch (`https://swapi.co/api/people/?search=${name}`)
                .then(response => response.json())
}

export const add = (character) => {
    return fetch('http://localhost:1337/characters/add', {
        method: 'POST',
        body: JSON.stringify(character),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const getAll = () => {
    return fetch('#').then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const get = (name) => {
    return fetch(`http://localhost:1337/characters/${name}`).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const update = (name, character) => {
    return fetch(`http://localhost:1337/characters/${name}`, {
        method: 'PUT',
        body: JSON.stringify(character),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
