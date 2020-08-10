import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {Slider, Paper} from '@material-ui/core';

const SliderForm: React.FC = () => {
  const [value, setValue] = useState<number[]>([0, 100]);

  const marks = [
    {label: '0%', value: 0},
    {label: '100%', value: 100},
  ];

  const handleValue = useCallback((event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }, []);
  return (
    <Container elevation={0}>
      <StyledTitle>Video duration</StyledTitle>
      <StyledSilder
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        value={value}
        onChange={handleValue}
        marks={marks}
      />
    </Container>
  );
};

const Container = styled(Paper)`
  width: 100%;
  padding: ${({theme}) => theme.defaultSpacing};
  margin-top: 10px;
  border: 1px solid lightgray;

  &:hover {
    border-color: black;
  }
`;

const StyledTitle = styled.div`
  margin: 0px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const StyledSilder = styled(Slider)`
  margin-top: ${({theme}) => theme.defaultSpacing};
`;

export default SliderForm;
