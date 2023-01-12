import { CalendarBlank } from 'phosphor-react';
import React from 'react';
import { Container, Card } from './styles';
interface TimeLineProps {
  date: string;
  title: string;
  description: string;
}

function TimeLine({ date, title, description }: TimeLineProps) {
  return (
    <Container>
      <Card>
        <small>
          <CalendarBlank size={20} /> {date}
        </small>
        <h4>
          {title.split('-')[0]} - <span>{title.split('-')[1]}</span>
        </h4>
        <p>{description}</p>
      </Card>
    </Container>
  );
}

export default TimeLine;
