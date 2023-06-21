const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

data.forEach(product => {
    let productDiv = document.createElement('div');
    let title = document.createElement('h3');
    let image = document.createElement('img');
    let price = document.createElement('p');
    let link = document.createElement('a');
    let colorDiv = document.createElement('div');
    let specsDiv = document.createElement('div');

    title.textContent = product.title;
    image.src = product.img;
    price.textContent = `$${product.price}`;
    link.href = product.url;
    link.textContent = 'Buy Now';
    product.colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color;
        colorDiv.appendChild(colorBox);
    });
    for (const [key, value] of Object.entries(product.specs)) {
        if (key === 'display') {
            let displayTitle = document.createElement('h4');
            displayTitle.textContent = value.title;
            let displaySize = document.createElement('p');
            displaySize.textContent = value.size + '" display';
            specsDiv.appendChild(displayTitle);
            specsDiv.appendChild(displaySize);
        } else if (key === 'chip') {
            let chipTitle = document.createElement('h4');
            chipTitle.textContent = value.title;
            let chipDescription = document.createElement('p');
            chipDescription.textContent = value.description;
            specsDiv.appendChild(chipTitle);
            specsDiv.appendChild(chipDescription);
        } else if (key === 'ram') {
            let ramTitle = document.createElement('h4');
            ramTitle.textContent = value.title;
            let ramDescription = document.createElement('p');
            ramDescription.textContent = value.description;
            specsDiv.appendChild(ramTitle);
            specsDiv.appendChild(ramDescription);
        } else if (key === 'memory') {
            let memorySize = document.createElement('p');
            memorySize.textContent = `${value.size} ${value.type} storage`;
            specsDiv.appendChild(memorySize);
        } else if (key === 'camera') {
            let cameraTitle = document.createElement('h4');
            cameraTitle.textContent = value.title;
            let cameraDescription = document.createElement('p');
            cameraDescription.textContent = value.description;
            specsDiv.appendChild(cameraTitle);
            specsDiv.appendChild(cameraDescription);
        } else if (key === 'other') {
            let otherTitle = document.createElement('h4');
            otherTitle.textContent = 'Other Features:';
            let otherList = document.createElement('ul');
            value.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                otherList.appendChild(li);
            });
            specsDiv.appendChild(otherTitle);
            specsDiv.appendChild(otherList);
        } else {
            let p = document.createElement('p');
            p.textContent = value;
            specsDiv.appendChild(p);
        }
    }

    productDiv.append(title);
    productDiv.append(image);
    productDiv.append(price);
    productDiv.append(link);
    productDiv.append(colorDiv);
    productDiv.append(specsDiv);

    container.append(productDiv);
});