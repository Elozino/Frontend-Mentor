HOW TO BUILD THIS PROJECT

-- This is an intermediate frontendmentor project (while the UI might seeem easy the logic requires lots of thinking)

## GUIDES
-- Study the project such as the designs
-- Study the workflow
-- Take a break and think of how best to solve it


# LOOK UP THE TAILWIND CSS ONLINE FOR CONFIGURATION AND USAGE

**PROJECT WALK THROUGH**
-- In the App.js we imported the data.json given to us
-- We created a state to check if the data is fetch from the data file (line 68) and display what was given
-- We created a component to for the job board and passed in necessary props (line 73)
-- Since the data.json was an array of object which we passed as props, we have to destructure the job (either by {jobs} or //by key value {tools role, etc...})
-- We pass the props to the neccessary jsx structure and render them

*Hopefully your UI has been set; the next step is to implement the workflow*
-- The job roles, tools, level, and languages are clickable and should show only jobs with those tags.
-- To make this simpler in react make sure to use a good data structure to make it an iteratable array so the click event can be selected easily.
-- Remember to set an error boundary and key to avoid react "shouting at you"
-- Add a click event that should collect a prop i.e the tag clicked to be able to filter it.
-- Notice we did not put the filter function in our JobBoard component, hence we need to pass the onClick function as a props the the component. If yours is in the same file, there is no need for the props.

*Creating the Filter function*
-- In the design the filtered list is a seperate jsx component on its own with data depending on what the user clicked hence, we need to set a state to keep track of what was clicked. (Basically, state is to keep track of any update that is different from what was initially rendered). So we created a state (line 9)

-- We created a function to show what was clicked by the user (line 33). The function takes the tag clicked (thanks to the mapped array it is easier to get) as an argument (line 33). We also added a condition to make the filter tag display if it exist (shows) (line 34)

-- To make the job filter based on what user clicked (i.e the filter function), we created a filter function that takes an instance of the jobs like we did in the job board component (line 16) and do a return that checks if it includes tag(tag: the clicked event) (i.e show/display if tag is true/present) (line 29).

-- To remove the filter tags from filter we created an click event on them that takes an argument(jsx line: 58) and created a function which takes that argument (line 39) and update the state of the filter (line 9) to the filtered tags still remaining. (i.e in the current state, filter to check if the clicked/passedFilter is not the same in the current state. 

~Explanation of how filter function works~
if it is the same, remove else leave it or else, leave it.
If it is (===) it will still show what the user clicked and remove the rest.
If it is (!==) it will remove what the user clicked and leave the rest.
