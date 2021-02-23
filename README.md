# Polybee WeatherApp :honeybee:

## Introduction

This web application was made as part of my application to [Polybee](https://www.polybee.co/) for a position as a Full Stack Engineer intern for summer 2021 :technologist: .

The application is made using the Angular framework. Having no prior experience in Angular, I picked it up through several crash course videos in 24 hours to produce this application. As such, the design is not as modular and clean as I would like it to be as I am still learning about Angular design paradigms.

## Specifications

The specifications for the web application that were given to me are as follows. I have indicated which specifications I have accomplished along with any comments I have on the implementation.

1. The app consists of a grid of 9 panels. Every panel shows the weather data of one city.
   Initially, all panels would be empty.  :white_check_mark: 

   _**comments**: Implemented using CSS grid styles_

2. On clicking on an empty panel, a text box is shown on the panel itself, asking the user to
   enter the city name. On entering the name, the panel now shows weather data for that city. :white_check_mark:

   _**comments**: Implemented using conditional rendering based on component state_

3. Every panel should have an “Edit” button - on clicking this, the user should be able to change
   the city shown in that panel.:white_check_mark:

4. If there was an error in getting the data (eg. wrong city name), the panel itself shows the error
   and the user can re-enter the city name. :white_check_mark:

   _**comments**: Implemented by passing the error message to the component to be displayed_

5. Every panel has a background picture that describes the weather at the city - eg.
   sunny/rainy/cloudy. :white_check_mark:

   _**comments**: Implemented by querying the API's images based on the returned weather code_

6. The panels should be in a grid and responsive - the panels should align themselves in a row
   with respect to the screen size: for small screens - less number of panels in a row and for large
   screens - more number of panels in a row. :white_check_mark:

Bonus Specifications:

7. The weather data must be updated regularly - data displayed should be no more than 30
   seconds old. This must not be done using a manual refresh button. :white_check_mark:

   _**comments**: Implemented by adding a function in the constructor that checks to see if valid weather data exists before querying for a refresh. Added a last updated section at the bottom to reflect accuracy of data_

8. Enable offline use - on refreshing the page, even when offline, the page shows the last
   obtained weather data. To implement this, use either HTML5 LocalStorage or IndexedDB (use
   the Angular IndexedDB wrapper if using this). :white_check_mark:

   _**comments**: Implemented using LocalStorage. After each successful query, we update the saved object. On unsuccessful query, we delete the saved object. Local data is retrieved on init_

I was given the following additional constraints by Polybee:

1. Must only use the OpenWeatherMap API
2. Do not use any third party library for the weather API.
3. Must use the Bootstrap UI Framework
4. Code must be hosted on a Git repository
5. Use the Angular framework for client logic
6. You are totally free to refer to any documentation/internet
forum/book/Stack Overflow answers or any other resource
7. The project needs to work.



## Resources

I only used two resources to implement this project. I first watched an [Angular crash course](https://www.youtube.com/watch?v=Fdf5aTYRW0E) to understand the basic mechanics and paradigms associated with Angular. I then completed most of the [Tour of Heroes app](https://angular.io/tutorial) tutorial that is provided by Angular on their website. These two were sufficient to get me started with the project. For many of the features (Implementing a responsive grid, Querying APIs and updating state, Storing and Retrieving from local data), I have previously implemented them in [past projects](https://github.com/KishenKumarrrrr/NUSexchange) in React. The challenge was mainly figuring out how to convert my ideas from the React to Angular.

In particular, I struggled with implementing forms in Angular the most because it is done in a manner that is very different from React.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
