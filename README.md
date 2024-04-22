# Limble Take Home Project


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

---------
## Deployed site: https://limble-project.web.app/

--------

This was an exciting opportunity to delve back into Angular and learn how the community at large/framework has grown! I took the deliverables literally and decided to create the Angular app without any external
dependencies besides ng-icons. It wasn't until I was well into the project that I realized I could've employed the observer pattern
using RxJS for event handling. If allowed more time, this would be the first order of improvement.     


![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDgyYjM2Mm93NmVqYzRwbHR1NnkxNmQwamY5b2FsNHV2OXFoN3U5NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E3qpuvFL7AreMdXssJ/giphy.gif##)

## How to run locally

 - Clone down this repo
 - Run `npm install`
 - Run `ng serve`
 - Navigate to `http://localhost:4200/`

## Improvements if time allotted

  - Incorporate RxJS observable pattern
  - Create generic modal service if a second type of modal is requested and add an interface for classes to implement
  - Move `onKeydown()` functionality from `AddCommentComponent` to `TagUserModalComponent`
  - Implement fuzzy search algorithm for modal component
  - Within modal component, list users in descending order based on an interactivity metric between users in application 
  - Add unit tests for components and services (one of main advantages of storing application logic inside services is relative ease with testing)
  - Create utils file where we can store the unique modal ids so we’re not passing strings around application
  - Disable document interaction when modal is open
  - Add functionality to add tagged users in middle and beginning of text
  - Accessing DOM or native element directly is typically bad practice; investigate `ngIf` structural directive as possible alternative solution


