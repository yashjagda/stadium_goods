############# Vending Machine ##############
# Project setup
- ants/src folder contains all the components and frontend renders

# Project approach
- home component - used to display all the elements and acts as parent component
- ants component - handles and displays specific ant
- display component - to display ranked results only triggers when all the ants are calculated
Approcach - 
All the ants and states are handled by Ants component, after calculation their result is pushed to
the main object and stored in a results array to generate ranked results for display.


# API 
- the graphql api given caused No CORS errors, to handle the error https://cors-anywhere.herokuapp.com/ 
was used to provide proxy layer. Incase the elements don't load 
Troubleshoot - 
go to link https://cors-anywhere.herokuapp.com/ and press request temporary access button that's it!

# Steps- to initialize

1) In terminal 
   cd stadium_goods/ants
   npm install
   npm start

