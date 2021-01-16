import React, { useRef, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import codewars from 'assets/icons/codewars.svg';
import { Kata, KataDetails, KataSubtitle, KataSolution, LoadMore } from './styles';

function formatDate(dateString) {
  const date = new Date(dateString);
  return moment(date).format('MMMM YYYY');
}

export const Challenge = ({ kata }) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const codeElement = useRef(null);

  useEffect(() => {
    if (codeElement.current) {
      setMaxHeight(codeElement.current.clientHeight);
    }
  }, []);

  return (
    <Kata>
      <KataDetails maxHeight={maxHeight}>
        <h3>{kata.title}</h3>
        <KataSubtitle>
          <p>{kata.level}</p>
          <p>Solved: {formatDate(kata.timestamp)}</p>
        </KataSubtitle>
        <div>
          <ReactMarkdown>{kata.kata.description}</ReactMarkdown>
        </div>
        <LoadMore>
          <a href={kata.url} target="_blank" rel="noopener noreferrer">
            <img src={codewars} alt="codewars icon" />
            <p>View kata on Codewars</p>
          </a>
        </LoadMore>
      </KataDetails>
      <KataSolution ref={codeElement}>
        <SyntaxHighlighter language="javascript" style={materialLight} wrapLongLines>
          {kata.solution}
        </SyntaxHighlighter>
      </KataSolution>
    </Kata>
  );
};
