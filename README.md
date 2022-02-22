This is a simple seat booking component, that we usually see in a ticket booking app. The features include showing the availability of seats. i.e If the seats are available to book, unavailable, disabled because of theatre orientation or any other reason, or currently blocked by someone who is trying to reserve the seats. When you select a seat, it blocks your seat realtime for a certain amount of time, within which no one can book the seats. When time expires and the payment is not yet done, the seat is available to everyone.

##Approach

So when I thought of the problem statement, I started working on the ENTITY part of the problem. Considering only this part of the Application, we only required these params: Seating structure/orientation, individual seat prices, and the booking status of each seat.
Now while choosing the data structure for this, the first obvious option was to have 2D matrix. However the issue that I though might happen was, given that we want to make the seat blocking feature realtime, and firebase being one of the optimal solution for realtime, it doesn't support Arrays to be stored. Also, in a general theatre, the rows are usually marked with alphabets. So I choose data structure which stored the seating orientation like:
```
{
  'A': [{seatPrice: '250', bookingStatus: 'AVAILABLE'}, {seatPrice: '350', bookingStatus: 'DISABLED'}.....],
  'B': [{seatPrice: '250', bookingStatus: 'UNAVAILABLE'}, {seatPrice: '350', bookingStatus: 'DISABLED'}.....],
  ....
}
```
This choice gave me the scope to retain the structure properly on something like firebase.

Then next comes the APPLICATION part of the problem. Being a very simple two component app, the use cases that we needed to consider were also simple. We simply needed two main functionalities, those are update the entity and store the bokking status once the timer starts.

The next comes the PRESENTATION part of the problem. I decided to keep the logic and UI part of the components different, as I find it a more maintainable approach to separate complexities. Overall there were three major components, the seating structure, teh checkout page and the timer component.

##Tech Used, Shortcomings and Better Solutions

The ENTITY part is currently structured keeping in mind the real time aspect of the problem. Had it not been a real time case (like many booking apps, where you get the updated status once you refetch), we could have gone by something like a 2D matric which can be bit more easily scaled.

The APPLICATION part is currently a simple context which is then fitted in a custom hook so as to keep it clean. However it was only written this way keeping in mind that this constitutes of only two components. However had this been a bigger application, this will be a very wrong choice. Context API should only store things that are not usually modified, becuase they are wrapped somewhere up in the hirearchy, otherwise it will be a highly inefficient system, as whenever a variable changes, the entire app rerenders. Sure we can memoize the components, but it's still an anti pattern. Now the solution to this that I would have preferred have two parts:

 1) If realtime is required, I would have preferred something like react-redux and react-redux-firebase as my store. That keeps the entire realtime thing very clean

 2) If realtime was not required, I would have preferred to use react-query to handle the state, as I find it very efficien in handling data that is being fetched.

the PRESENTATION part is currently just a simple view. Everything in this part can be improvised by many folds. Also we can make it responsive as this app can most likely be used in multiple devices. Also we should have an admin panel for the theater handlers to provide information.