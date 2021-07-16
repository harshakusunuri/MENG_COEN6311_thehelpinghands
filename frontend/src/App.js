import { Container, Form, Button } from "react-bootstrap";
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import DonationScreen from "./screens/DonationScreen";
import MotoOfOurOrganizationScreen from "./screens/MotoOfOurOrganizationScreen";
import MemberHomeScreen from "./screens/MemberScreens/MemberHomeScreen";
import OrganizationHomeScreen from "./screens/OrganizationScreens/OrganizationHomeScreen";
import MemberRegisterScreen from "./screens/MemberScreens/MemberRegisterScreen";
import MemberLoginScreen from "./screens/MemberScreens/MemberLoginScreen";
import MemberUpdateDetailsScreen from "./screens/MemberScreens/MemberUpdateDetailsScreen";

import OrganizationViewMembersScreen from "./screens/OrganizationScreens/OrganizationViewMembersScreen";
import OrganizationRegisterScreen from "./screens/OrganizationScreens/OrganizationRegisterScreen";
import OrganizationLoginScreen from "./screens/OrganizationScreens/OrganizationLoginScreen";
import OrganizationUpdateDetailsScreen from "./screens/OrganizationScreens/OrganizationUpdateDetailsScreen";
import OrganizationPostsViewPostsScreen from "./screens/OrganizationScreens/OrganizationPostsViewPostsScreen";
import OrganizationPostsCreatePostsScreen from "./screens/OrganizationScreens/OrganizationPostsCreatePostsScreen";
import MemberViewTasksScreen from "./screens/MemberScreens/MemberViewTasksScreen";


function App() {
  return (
    <Router>

      <div>
        <Header />

        {/* <main className="py-3"> */}
        <div style={{ background: 'whitesmoke' }}>
          <Container  >
            {/* <h1>My App</h1> */}
            {/* <Route path='/' component={HomeScreen} exact />
          <Route path='/MotoOfOurOrganizationScreen' component={MotoOfOurOrganizationScreen} /> */}

            <Route path='/' component={MotoOfOurOrganizationScreen} exact />
            <Route path='/DonationScreen' component={DonationScreen} />

            <Route path='/MemberHomeScreen' component={MemberHomeScreen} />
            <Route path='/OrganizationHomeScreen' component={OrganizationHomeScreen} />

            {/* Below sample Screens */}

            <Route path='/MemberRegisterScreen' component={MemberRegisterScreen} />
            <Route path='/MemberLoginScreen' component={MemberLoginScreen} />
            <Route path='/MemberUpdateDetailsScreen' component={MemberUpdateDetailsScreen} />
            <Route path='/MemberViewTasksScreen' component={MemberViewTasksScreen} />

            <Route path='/OrganizationRegisterScreen' component={OrganizationRegisterScreen} />
            <Route path='/OrganizationLoginScreen' component={OrganizationLoginScreen} />
            <Route path='/OrganizationUpdateDetailsScreen' component={OrganizationUpdateDetailsScreen} />
            <Route path='/OrganizationViewMembersScreen' component={OrganizationViewMembersScreen} />
            <Route path='/OrganizationPostsViewPostsScreen' component={OrganizationPostsViewPostsScreen} />
            <Route path='/OrganizationPostsCreatePostsScreen' component={OrganizationPostsCreatePostsScreen} />


          </Container>
        </div>
        {/* </main> */}

        <Footer />
      </div>
    </Router >
  );
}

export default App;
