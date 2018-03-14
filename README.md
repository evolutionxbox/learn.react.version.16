# Learn React version 16

### First Assignment

Follow the instructions explained in the problem video and try to implement a solution on your own. Compare it with my solution (video + downloadable files) thereafter.

The instructions are:

1. ✅ Create TWO new components: UserInput and UserOutput
1. ✅ UserInput should hold an input element, UserOutput two paragraphs
1. ✅ Output multiple UserOutput components in the App component (any paragraph texts of your choice)
1. ✅ Pass a username (of your choice) to UserOutput via props and display it there
1. ✅ Add state to the App component (=> the username) and pass the username to the UserOutput component
1. ✅ Add a method to manipulate the state (=> an event-handler method)
1. ✅ Pass the event-handler method reference to the UserInput component and bind it to the input-change event
1. ✅ Ensure that the new input entered by the user overwrites the old username passed to UserOutput
1. ✅ Add two-way-binding to your input (in UserInput) to also display the starting username
1. ✅ Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

#### Questions for this Assignment

What did you find most challenging and how did you overcome the challenge?

### Assignment: Time to Practice - Lists & Conditionals

1. ✅ Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
1. ✅ Create a new component (=> ValidationComponent) which receives the text length as a prop
1. ✅ Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
1. ✅ Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
1. ✅ Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
1. ✅ When you click a CharComponent, it should be removed from the entered text.

Hint: Keep in mind that JavaScript strings are basically arrays!
