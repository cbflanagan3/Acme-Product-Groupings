const offeringsURL = 'https://acme-users-api-rev.herokuapp.com/api/offerings';
const companiesURL = 'https://acme-users-api-rev.herokuapp.com/api/companies';
const productsURL = 'https://acme-users-api-rev.herokuapp.com/api/products';



// fetch(productsURL)
//     .then(response => response.json())
//         // .then(data => console.log(data))
//             .then(data => fetch(offeringsURL))

// const create = (type, class) => {
//     const newNode = document.createElement(type);
//     if (class) {
//         newNode.classList.add(class);
//     }
//     return newNode;
// }

const products = fetch(productsURL);
const companies = fetch(companiesURL);
const offerings = fetch(offeringsURL);

const allData = Promise.all([products, offerings, companies]);

allData
    .then(response => {
        const productsResponse = response[0];
        const offeringsResponse = response[1];
        const companiesResponse = response[2];

        return Promise.all([productsResponse.json(), offeringsResponse.json(), companiesResponse.json()]);
    })
        .then(JSONs => {
            const productsJSON = JSONs[0];
            const offeringsJSON = JSONs[1];
            const companiesJSON = JSONs[2];

            // console.log("productsJSON", productsJSON);
            // console.log("offeringsJSON", offeringsJSON);
            // console.log("companiesJSON", companiesJSON);
                productsJSON.map(product => {
                const productBox= document.createElement('div');
                productBox.classList.add('box');
                const productName = document.createElement('div');
                productName.classList.add('name');
                productName.innerText = `${product.name}`;
                const productDescription = document.createElement('div');
                productDescription.classList.add('description');
                productDescription.innerText = `${product.description}`;
                productBox.append(productName, productDescription);
                const offeringsList = document.createElement('ul');
                offeringsList.classList.add('offerings');
                if (productsJSON.productid = offeringsJSON.id) {
                                const offer = document.createElement('li');
                                offer.innerHTML(`Offered by: company at ${data.price}`);
                                offeringsList.append(offer);
                            }
                        })

            }) 

          

            

         

// const render = () => {
    
//     fetch(productsURL)
//         .then(response => response.json())
//             .then(data => createProductBox(data))
// }

// render();