import { React, Component } from 'react';
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }
  countTotalFeedback = () => { return this.state.good + this.state.neutral + this.state.bad };
  countPositiveFeedbackPercentage = () => { return Math.round(this.state.good / this.countTotalFeedback() * 100) };
  btnClick = (evt) => {
    const name = evt.currentTarget.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }))
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
<>
    <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state) } onLeaveFeedback={this.btnClick} /> 
    </Section>
    <Section title="Statistics">
            { this.countTotalFeedback() === 0 ?
              <Notification message="There is no feedback given" /> :
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                percent={this.countPositiveFeedbackPercentage()} />
            }
    </Section> 
</>  
    );
  }
};
