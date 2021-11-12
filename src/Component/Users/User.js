import React from 'react';

const User = (props) => {
          const familiar = props.familiar;
          let greetings;
          if (familiar) {
                    greetings = <p>Welcome, my friend.</p>;
          }
          else {
                    greetings = <p>Who the hell are you?</p>;
          }
          // javaScript ternary Operator 
          // const greetings = familiar ? "hello" : "gello";
          // let number = 3;
          // if(number > 5 && familiar === true)
          return (
                    <div>
                              <div>
                                        <h1>Greetings</h1>
                                        {greetings}
                              </div>
                              <div>
                                        <h1>Food</h1>
                                        {
                                                  familiar ? <p>I will buy Food for you.</p> : <p>Let's eat his his whose whose</p>
                                        }
                              </div>
                              <div>
                                        <h1>Connection</h1>
                                        {
                                                  familiar && <p>Let's join my facebook.</p>
                                        }
                                        {/* <p>I don't add stranger?</p> */}
                              </div>
                    </div>
          );
};

export default User;