import React from 'react'
import CountUp from 'react-countup';

export default function AmaitedCounter(props) {
  return (
       <CountUp 
      end={props.end} 
      duration={props.duration} 
      enableScrollSpy 
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} />
      )}
    </CountUp>
  )
}
