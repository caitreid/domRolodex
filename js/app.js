

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

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < data.length; i++) {
        // this will display each object
        // console.log(data[i])
        // this will display each objects name
        console.log(`Name: ${data[i].name}`)

        let name = data[i].name;

        // this will display each objects address
        console.log(`Address: ${data[i].address}`)

        let address = data[i].address

        const div = document.createElement('div');

        div.classList.add('info-container');

        document.querySelector('body').append(div)

        div.append(name)
        div.append(address)
    }
})