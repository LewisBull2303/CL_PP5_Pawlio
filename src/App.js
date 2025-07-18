import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import PageNotFound from './components/PageNotFound';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || '';

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Body}>
        {!currentUser ? (
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/login" render={() => <SignInForm />} />
            <Route render={() => <Landing />} />
          </Switch>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PostsPage message="No results found" />}
            />
            {/* Feed route */}
            <Route
              exact
              path="/feed"
              render={() => (
                <PostsPage
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              )}
            />
            {/* Like posts route */}
            <Route
              exact
              path="/liked"
              render={() => (
                <PostsPage
                  message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
              )}
            />

            <Route
              exact
              path="/posts/create"
              render={() => <PostCreateForm />}
            />
            <Route exact path="/posts/:id" render={() => <PostPage />} />
            <Route
              exact
              path="/posts/:id/edit"
              render={() => <PostEditForm />}
            />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route
              exact
              path="/profiles/:id/edit"
              render={() => <ProfileEditForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit/password"
              render={() => <UserPasswordForm />}
            />
            <Route render={() => <PageNotFound />} />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        )}
      </Container>
    </div>
  );
}

export default App;
