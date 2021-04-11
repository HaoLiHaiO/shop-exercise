## Build Website according to Wireframe

- Favicon changed. New icon is a cool "R" like React.
- Title of the page has been updated: "Super Cool Retro Game Shop!"
- No script message changed for fun: "Oh no... It looks like Javascript can't be run in your browser! Please enable Javascript!"
- The web app is almost fully accessible (color schemes are all AAA, font sizes, etc.) 🎉
- The web app is FULLY responsive. It should work on absolutely all devices. 🎉
- The web app is compatible with all browsers.
- Lighthouse score for desktop view: Perf 94, Accessibility 100, Best practices 93, SEO 100
- Lighthouse score for mobile view: Perf 64 (images were picked up randomly and cannot be optimized), Accessibility 100, Best practices 93

## Product Page

### Products

- Products are displayed on the right side according to wireframe.
- Products are placed in column in individual cards for better UI / UX
- Smooth card angles (radius)
- When hovering on the cards, they increase in size for a better detailed view (bonus)
- They can be added to the right side component (ShopCart).
- I did not use Material UI or Bootstrap and styled everything from scratch myself (to get best accessibility results). I still learnt how to use Material UI though.
- The dataset "products.ts" was renamed to "data.ts" because it was confusing with the other components' names. I changed the entire dataset anyway except the type { picture: string; price: number; name: string }

### Adding products to the ShopCart

- Add to cart button. Same style as all other buttons on the website.
- Hover effect with smooth transitions. Hover target color is also AAA.
- useContext was used for storing items.
- All items are listed in the ShopCart as well as the quantity and the price (for the quantity, a counter was added in the context provider)
- Button that links to CheckoutForm. (an implementation with useHistory / onNavigate was made for fun too and is available in the comments in the code 😄)

### Order page

- A checkout form with name, address, etc. and the list of items under.
- Submit logs a message order was successful in the console. there is also a home button to conveniently return to the main page.
- A remove product from cart functionality was made for fun and is available in the comments in the code. 😄
- All buttons are the same.

## Extras

- The web app is FULLY RESPONSIVE. 🎉
- Detail view of item on hover 🎉
