import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

const displayedRepos = ['30days-client', 'your-cause', 'tales-of-anxiety', 'moonlight', 'todolist'];

const details = {
  '30days-client': {
    tech: ['JavaScript', 'React', 'NodeJS', 'MongoDB', 'CSS'],
    github: 'https://github.com/paulinemss/30days-client',
    url: 'https://thirtydays.netlify.app/',
  },
  'your-cause': {
    tech: ['JavaScript', 'Handlebars', 'NodeJS', 'CSS'],
    github: 'https://github.com/paulinemss/your-cause',
    url: 'https://yourcause.herokuapp.com/',
  },
  'tales-of-anxiety': {
    tech: ['JavaScript', 'HTML', 'CSS', 'p5.js'],
    github: 'https://github.com/paulinemss/tales-of-anxiety',
    url: 'https://paulinemss.github.io/tales-of-anxiety/',
  },
  moonlight: {
    tech: ['JavaScript', 'React', 'CSS'],
    github: 'https://github.com/paulinemss/moonlight',
    url: 'https://moon-light.netlify.app/',
  },
  todolist: {
    tech: ['JavaScript', 'React', 'CSS'],
    github: 'https://github.com/paulinemss/todolist',
    url: 'https://todolist-pm.netlify.app/',
  },
};

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 50, orderBy: { field: CREATED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const repos = edges.filter(e => displayedRepos.includes(e.node.name));
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {repos.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === 'light' ? '#000' : '#fff'} />
                  </div>
                  <div>
                    <Fork color={theme === 'light' ? '#000' : '#fff'} />
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {details[node.name].tech.map((name, index) => (
                      <span key={index}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
