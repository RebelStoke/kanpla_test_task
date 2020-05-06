import React from 'react';
import logo from './logo.svg';
import './App.css';
import {motion} from "framer-motion"


function App() {
    return (
        <div className="App">
            <div id="checkboxes">
                <input type="checkbox" name="rGroup" value="1" id="r1"/>
                <motion.label drag
                              dragConstraints={{left: -20, right: 20, top: -20, bottom: 20}}
                              whileHover={{
                                  scale: 1.1,
                                  transition: { duration: 0.7 }
                              }}
                              whileTap={{
                                  scale: 1,
                                  opacity: 0.5,
                                  borderRadius: "100%",
                              }} className="checkbox_circle" htmlFor="r1">
                    <p className="box_text">FRE</p>
                </motion.label>
                <input type="checkbox" name="rGroup" value="2" id="r2"/>
                <motion.label drag
                              dragConstraints={{left: -20, right: 20, top: -20, bottom: 20}}
                              whileHover={{
                                  scale: 1.1,
                                  transition: { duration: 0.7 }
                              }}
                              whileTap={{
                                  scale: 1,
                                  opacity: 0.5,
                                  borderRadius: "100%",
                              }} className="checkbox_circle" htmlFor="r2">
                    <p className="box_text">FRE</p>
                </motion.label>
                <input type="checkbox" name="rGroup" value="3" id="r3"/>
                <motion.label drag
                              dragConstraints={{left: -20, right: 20, top: -20, bottom: 20}}
                              whileHover={{
                                  scale: 1.1,
                                  transition: { duration: 0.7 }
                              }}
                              whileTap={{
                                  scale: 1,
                                  opacity: 0.5,
                                  borderRadius: "100%",
                              }} className="checkbox_circle" htmlFor="r3">
                    <p className="box_text">FRE</p>
                </motion.label>
            </div>
        </div>
    );
}


export default App;
