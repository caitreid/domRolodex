

// console.log('ready for rolos')

const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
]

// function for populating data
const populateData = ()=> {
    for (let i =0; i < data.length; i ++) {
        console.log(`Name: ${data[i].name}`)
        // this will display each objects address
        // console.log(`Address: ${data[i].address}`)
        // This builds a container for our info
        const infoContainer = document.createElement('div')
        infoContainer.classList.add('info-container')
        // this will add a name div for each name in our data
        const nameDiv = document.createElement('div')
        // gives each nameDiv the class 'name'
        nameDiv.classList.add('name')
        // populates names for every name div
        nameDiv.innerText = data[i].name
        // creates a div for my address data
        const addressDiv = document.createElement('div')
        // gives my address divs a little class
        addressDiv.classList.add('address')
        // adds address text to address divs
        addressDiv.innerText = data[i].address
        // adds my nameDiv to the infoContainer
        infoContainer.appendChild(nameDiv)
        // appends my address div to infoContainer
        infoContainer.appendChild(addressDiv)
        document.querySelector('body').appendChild(infoContainer)
    }

}

const addData = (name, address) => {
    data.push({name, address})

    populateData()
}


document.addEventListener('DOMContentLoaded', () => {
    populateData()
})


