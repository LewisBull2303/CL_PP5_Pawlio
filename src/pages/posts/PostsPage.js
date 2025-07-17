import React, { useEffect, useState } from 'react';

import { Form, Col, Row, Container, Badge } from 'react-bootstrap';

import Post from './Post';
import Asset from '../../components/Asset';

import appStyles from '../../App.module.css';
import styles from '../../styles/PostsPage.module.css';
import columnStyles from '../../styles/SmallMenuContainer.module.css';
import { useLocation } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';

import NoResults from '../../assets/no-results.png';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import PopularProfiles from '../profiles/PopularProfiles';
import LikeFeedAddPost from '../../components/LikeFeedAddPost';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function PostsPage({ message, filter = '' }) {
  const [posts, setPosts] = useState({ results: [] });
  const [category, setCategory] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  // detect the url change between home, feed & liked pages
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [query, setQuery] = useState('');

  /*
    Handles API request using the filters for each of pages
    to fetch relevant posts to the filter
    Displays all the posts, just posts by the profiles followed, 
    just the liked posts or posts in a specific category
    Shows a loading spinner when required
  */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}search=${query}${
            category !== null ? `&category=${category}` : ''
          }`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err)
      }
    };
    setHasLoaded(false);
    /*
      Delays making an API request and fetching posts of 1 second
      instead of on each key stroke
    */
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser, category]);

  return (
    <Container>
      <Row>
        <Col className={`${columnStyles.SplitColumns} pt-2 p-0 p-lg-2`} lg={4}>
          <LikeFeedAddPost />

          <Container
            className={`${appStyles.Content} ${columnStyles.CollapsedColumn} mb-2`}
          >
            <PopularProfiles />
          </Container>

          <Container
            className={`${appStyles.Content} ${columnStyles.CollapsedColumn} ${columnStyles.CategoriesColumn}`}
          >
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory(null)}
            >
              None
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Dog')}
            >
              Dog
            </Badge>
            <p className=" font-weight-bold ml-2">Post categories</p>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Puppy')}
            >
              Puppy
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Old Pet')}
            >
              Old Pet
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Nature')}
            >
              Nature
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Family')}
            >
              Family
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Big Pet')}
            >
              Big Pet
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Small Pet')}
            >
              Small Pet
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Funny')}
            >
              Funny
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Sleeping')}
            >
              Sleeping
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Playing')}
            >
              Playing
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Zoomies')}
            >
              Zoomies
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Camping')}
            >
              Camping
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Kids & Pets')}
            >
              Kids & Pets
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Cute')}
            >
              Cute
            </Badge>
            <Badge
              variant="secondary"
              pill
              className={`${styles.Badge}`}
              onClick={() => setCategory('Silly')}
            >
              Silly
            </Badge>
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>
          {/* Posts text search bar */}
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(e) => e.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search posts"
              aria-label="search bar"
            />
            <i
              className={`fa-solid fa-eraser ${styles.Clear}`}
              onClick={() => setQuery('')}
            />
          </Form>

          {hasLoaded ? (
            <>
              {posts.results.length ? (
                // InfiniteScroll component handles loading more pages of posts as the user scrolls
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <Post
                      key={post.id}
                      {...post}
                      setPosts={setPosts}
                      // truncate post description on the main page to 500 characters
                      content={
                        post.content.length > 500
                          ? post.content.slice(0, 500) + ' .....'
                          : post.content
                      }
                    />
                  ))}
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
              ) : (
                // if no results found, show no results asset with a relevant message
                <Container className={appStyles.Content}>
                  <Asset
                    src={NoResults}
                    width={20}
                    height={20}
                    message={message}
                  />
                </Container>
              )}
            </>
          ) : (
            // display a loading spinner if the posts haven't been loaded yet
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
