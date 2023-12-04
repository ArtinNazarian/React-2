### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? <br> It allows us to implement client routing.

- What is a single page application? <br> In a single page application the user can send request to the sever without the page loading. There is no full request response cycle.

- What are some differences between client side and server side routing? <br> A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server. A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page.

- What are two ways of handling redirects with React Router?<br> When would you use each? Redirect component. Best to use it when a user doesn't have permission to view a certain page .push method on history object is the second method. This is used when a form is submitted and the user has to be directed to the previous page.

- What are two different ways to handle page-not-found user experiences using React Router? <br> You can set the path= "_" which will match any other URL and then redirect the usera to a different page. The second option is to have the path="_" and then render a component called PageNotFound which will let the user know the URL doesn't exist.

- How do you grab URL parameters from within a component using React Router?<br> We use a hook called useParams

- What is context in React? When would you use it?<br> Context provides a way to pass data through the component tree from parent to child component without having to pass the props down manually at each level.

- Describe some differences between class-based components and function components in React.<br> Class-based React doesn't have hooks, instead state is initialized in the constructor of the class function. There is no render method used in functional components Class component requires you to extend from React. Also in class-based components React lifecycle methods can be used inside class components

- What are some of the problems that hooks were designed to solve?<br> Hooks lets you use state and other React features without writing a class.
