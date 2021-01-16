import React, { useState } from 'react';
import Select from 'react-select';
import { Container, Challenge, OutlinedButton } from 'components/common';
import data from 'assets/data/codewars.json';
import { Wrapper, IntroWrapper, SelectWrapper } from './styles';

const options = [
  { value: 'all', label: 'All' },
  { value: '4 kyu', label: '4 kyu [Difficult]' },
  { value: '5 kyu', label: '5 kyu [Advanced]' },
  { value: '6 kyu', label: '6 kyu [Intermediate]' },
  { value: '7 kyu', label: '7 kyu [Easy]' },
  { value: '8 kyu', label: '8 kyu [Very Easy]' },
];

export const Challenges = () => {
  const [level, setLevel] = useState({ value: 'all', label: 'All' });
  const [maxVisible, setMaxVisible] = useState(10);
  const handleChange = lvl => {
    setLevel(lvl);
    setMaxVisible(10);
  };

  const katas = data.filter(e => {
    if (level.value === 'all') return e;
    return e.level === level.value;
  });

  const canShowMore = katas.length > maxVisible;

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <h2>Katas</h2>

        <SelectWrapper>
          <Select
            value={level}
            onChange={handleChange}
            options={options}
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary75: '#BEA6FF',
                primary50: '#DACCFF',
                primary25: '#DACCFF',
                primary: '#7C4DFF',
              },
            })}
          />
        </SelectWrapper>

        {katas.slice(0, maxVisible).map((e, i) => (
          <Challenge kata={e} key={i} />
        ))}

        {canShowMore && (
          <OutlinedButton isSmall type="button" onClick={() => setMaxVisible(maxVisible + 10)}>
            Load more
          </OutlinedButton>
        )}
      </IntroWrapper>
    </Wrapper>
  );
};
