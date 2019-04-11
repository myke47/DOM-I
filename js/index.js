const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Text added to Nav
let myALinks = document.getElementsByTagName('a');
myALinks[0].textContent = 'Services';
myALinks[1].textContent = 'Product';
myALinks[2].textContent = 'Vision';
myALinks[3].textContent = 'Features';
myALinks[4].textContent = 'About';
myALinks[5].textContent = 'Contact';

// cta img src & alt
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);
ctaImage.setAttribute('alt', 'Image of a code snippet.');

// What is the button saying
let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

// Where is my H1
let ctaHone = document.querySelector('h1');
ctaHone.textContent = siteContent['cta']['h1'];

// What do the h4, p content items say
let featureHfour = document.querySelector('div:nth-child(1) > h4');
featureHfour.textContent = siteContent['main-content']['features-h4'];

let pFeatures = document.querySelector('div:nth-child(1) > p');
pFeatures.textContent = siteContent['main-content']['features-content'];

let aboutHfour = document.querySelector('div:nth-child(2) > h4');
aboutHfour.textContent = siteContent['main-content']['about-h4'];

let pAbout = document.querySelector('div:nth-child(2) > p');
pAbout.textContent = siteContent['main-content']['about-content'];

// middle image placement
let midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
midImg.setAttribute('alt', 'Image of code snippets across the screen');

// bottom content elements, h4, p
// let servicesHfour = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4')
let servicesHfour = document.querySelector('div.bottom-content > div:nth-child(1) > h4');
servicesHfour.textContent = siteContent['main-content']['services-h4'];

let pServices = document.querySelector('div.bottom-content > div:nth-child(1) > p');
pServices.textContent = siteContent['main-content']['services-content'];

let productHfour = document.querySelector('div.bottom-content > div:nth-child(2) > h4');
productHfour.textContent = siteContent['main-content']['product-h4'];

let pProduct = document.querySelector('div.bottom-content > div:nth-child(2) > p');
pProduct.textContent = siteContent['main-content']['product-content'];

let visionHfour = document.querySelector('div:nth-child(3) > h4');
visionHfour.textContent = siteContent['main-content']['vision-h4'];

let pVision = document.querySelector('div.bottom-content > div:nth-child(3) > p');
pVision.textContent = siteContent['main-content']['vision-content'];


