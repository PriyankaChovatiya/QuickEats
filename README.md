# why React is fast ?
- Becuase react is doing efficient DOM manipulation. 

# How ?
- Because it has virtual DOM.
- It find out the difference between virtual DOM and Update the UI.
- It has the Diff Algorithm.



# food building structure 
.
.
/**
 * Header 
 * - logo 
 * - navbar
 * Body 
 * - Search
 * - RestaurantContainer 
 *    - Reastaurant Card 
 * Footer 
 * - Copyright 
 * - Links
 * - Address
 * - Contact
 */


 # Two Types of export and import 

 - default export/import 

 export default Components;
 import Components from './Components';


 - named export/import

 export const Component = "";
 import { Component } from './Components';


...
# Hooks 

# what is Hooks ?
 - Hooks allow function components to have access to state and other React features.
 - Also it is normal JS function which given by react.
 - Normal JS utility function
 - whenever State variable updates react will rerender the Component.


 -- Hooks

 1. useState() : 
    - Used to superpowerful react variable. 
    - import used as named import.
    - import { useState } from "react";

 2. useEffect() :


 # Reconciliation Algorithm ( React fiber)

 - Reconciliation - A high-level description of React's reconciliation algorithm.

 - Virtual DOM : it is a representation of Actual DOM 
 - Actual DOM : created Elements 
   ex: <div>
       <div>
       <img></img>
       </div>
       </div>

# Diff Algorithm
- It is the finds out the diffrence between updated Virtual DOM and Previous Virtual DOM.
- Suppose we have 7 res-card in our DOM. After the click Button it filter  in to 3 res-cards in our DOM.


# React Fiber Architecture  (https://github.com/acdlite/react-fiber-architecture) in 2016

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.