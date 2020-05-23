## <Route path = "/"> => "/" is treated as a subset by react router so this request is always rendered on the page for the different route also.
ex- "/about" => in this case about and home both will be displayed 
to avoid this we can rewrite as "/home" or can put the keyword exact path="/"  which will render the exact path.

## Link performs the action of function preventDefault()
## react-router attaches some extra properties to object props when we pass it as arguement such as history,match,location
-> one property is push in history object in props which redirects tio specified path passed as arguement.
-> withRouter is higher order component which attaches  extra properties explicitly to the props 

                                Higher Order Component
    component                     -----------------                     Supercharged component
   -----------                    |  ------------ |                         -----------
   |Navbar.js|--------------------|  | Navbar.js| |-------------------------|Navbar.js|
   -----------                    |  ------------ |                         -----------
                                  -----------------


                                