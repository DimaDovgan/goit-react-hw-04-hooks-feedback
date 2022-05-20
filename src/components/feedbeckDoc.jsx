import React, { useState,useEffect } from "react";
import { Statistics } from "./statistic-list"
import { FeedbackOptions } from "./buttoon-list";
import { Notification } from "./Notification"
import { Section } from "./sectionTitle"
export const Feedback = () => { 
    const [good, setGood] = useState(0);
    const [natural, setNatural] = useState(0);
    const [bad, setBad] = useState(0);
    const [render, setRender] = useState(null);


    const handl = (event) => {
        
        let name = event.target.name;
    
        switch (name) {
    case "good": 
                setGood((value) => value + 1);
                setRender(true);
    break;

    case "natural": 
                setNatural((value) => value + 1);
                setRender(true);
                break;
            
    case "bad":
                setBad((value) => value + 1);
                setRender(true);
    break;

    default:
    console.log("error")
    break
}
    };


    const countTotalFeedback = () => {
        return good + natural + bad;
        
    }
    const countPositiveFeedbackPercentage = () => {
        return (Math.round((good/countTotalFeedback())*100))
    }


    return <div>
            
            <Section title="Please leave feedback">
            <FeedbackOptions options={["good","natural","bad"]} onLeaveFeedback={handl} />
            </Section>
            <Section title="Statistic">
            {render ? <Statistics good={good} neutral={natural} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                : <Notification message="There is no feedback" />}
            </Section>
        </div>
        
    
}


