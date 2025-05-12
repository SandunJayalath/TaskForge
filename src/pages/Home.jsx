import { ArrowBigUp } from 'lucide-react';
import { ArrowBigDown } from 'lucide-react';
import React, { useState } from 'react'
import { MoonStar } from 'lucide-react';
import { CloudSun } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Settings } from 'lucide-react';
import { X } from 'lucide-react';

function Home() {

    const [isDarkMode, setIsDarkMode] = useState(true)
    const [tasks, setTasks] = useState(["Wake up early", "Take Breakfast", "Hit The Gym", "Take The Shower"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    const clearTasks =() => {
        setTasks([])
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }  
    }

    function deleteTask(indexToDelete){
        setTasks(tasks => tasks.filter((_, index) => index !== indexToDelete))
    }

    function moveTaskUp(index){
        
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] =
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    

    // Setting Box
    const [isSettingBoxOpen, setIsSettingBoxOpen] = useState(false)

    const [fontSize, setFontSize] = useState("17px");
    const [fontFamily, setFontFamily] = useState("Arial");
    const [backgroundColor, setBackgroundColor] = useState("var(--background-color)")
    const [cardColor, setCardColor] = useState("var(--background-color)")
    const [accentColor, setAccentColor] = useState("var(--blue)")

    const handleFontChange = (event) => {
        setFontSize(event.target.value)
    }

    const handleFamilyChange = (event) => {
        setFontFamily(event.target.value)
    }

    const handleBackChange = (event) => {
        setBackgroundColor(event.target.value)
    }

    const handleCardColor = (event) => {
        setCardColor(event.target.value)
    }

    const handleAccentChange = (event) => {
        setAccentColor(event.target.value)
    }

    // Privacy Box
    const [isPrivacyBox, setIsPrivacyBox] = useState(false);

    return (
        <>
        <div className={`app ${isDarkMode ? 'dark' : 'light'} d-flex justify-content-center`} style={{fontSize, fontFamily}}>
        <div className='main-container' style={{maxWidth: "900px", backgroundColor, overflowX: "hidden"}}>
            <div className='row mb-5 nav' style={{display: "flex", height: "70px", backgroundColor: "var(--pink)", marginBottom: "30px", alignItems: "center", color: "white", margin: "0 auto"}}>
                <div className="col-8 col-md-10 col-lg-10 col-xl-10">
                    <h4 className='nav-topic ms-3'>Task Manager</h4>
                </div>
                <div className="d-flex col-4 col-md-2 col-lg-2 col-xl-2 gap-3" style={{justifyContent: "flex-end"}}>
                    <button className='setting-button' onClick={() => setIsSettingBoxOpen(true)}><Settings style={{width: "22px"}}/></button>                
                    <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <CloudSun/> : <MoonStar/>}</button>
                </div>
                { isSettingBoxOpen && (
                    <div className='setting-box' style={{maxWidth: "500px", width: "90%"}}>
                        <X className='close-button' onClick={() => setIsSettingBoxOpen(false)}/>
                       
                        <h5>Settings</h5>
                        <hr/>

                        <h5>Appearance</h5>
                        <div className="d-flex mt-3" style={{alignItems: "center"}}> 
                            <h6>Font Size: </h6>
                            <label><input type="checkbox" name="fontSize" value="14px" checked={fontSize === "14px"} onChange={handleFontChange} />Small<span class="checkmark"></span></label>
                            <label><input type="checkbox" name="fontSize" value="16px" checked={fontSize === "16px"} onChange={handleFontChange}/>Medium</label>
                            <label><input type="checkbox" name="fontSize" value="20px" checked={fontSize === "20px"} onChange={handleFontChange}/>Large</label>
                        </div>
                        <div className="d-flex mt-3 mb-4" style={{alignItems: "center"}}> 
                            <h6>Font Styles: </h6>

                            <label For="Fonts">Select Fonts</label>
                            <select value={fontFamily} name="fonts" id="Fonts" onChange={handleFamilyChange}>
                                <option value="Poppins" >Poppins</option>
                                <option value="Inter">Inter</option>
                                <option value="Arial">Arial</option>
                            </select>
                        </div>

                        <h5>Personalization</h5>
                        <div className="d-flex mt-3" style={{alignItems: "center"}}> 
                            <h6>Background Color: </h6>
                            <label><input type="checkbox" name='background-color' value="var(--soft-back-color)" checked={backgroundColor === "var(--soft-back-color)"} onChange={handleBackChange}/>Soft</label>
                            <label><input type="checkbox"  name='background-color' value="var(--clean-back-color)" checked={backgroundColor === "var(--clean-back-color)"} onChange={handleBackChange} />Clean</label>
                            <label><input type="checkbox"  name='background-color' value="var(--warmth-back-color)" checked={backgroundColor === "var(--warmth-back-color)"} onChange={handleBackChange}/>Warmth</label>
                        </div>
                        <div className="d-flex mt-3 mb-3" style={{alignItems: "center"}}> 
                            <h6>Task Background: </h6>
                            <label><input type="checkbox" name='card-color' value="var(--soft-back-color)" checked={cardColor === "var(--soft-back-color)"} onChange={handleCardColor}/>Soft</label>
                            <label><input type="checkbox"  name='card-color' value="var(--clean-back-color)" checked={cardColor === "var(--clean-back-color)"} onChange={handleCardColor}/>Clean</label>
                            <label><input type="checkbox"  name='card-color' value="var(--warmth-back-color)" checked={cardColor === "var(--warmth-back-color)"} onChange={handleCardColor}/>Warmth</label>
                        </div>
                        <div className="d-flex mb-4" style={{alignItems: "center"}}> 
                            <h6>Accent Background: </h6>
                            <label><input type="checkbox" name='accentColor' value="var(--blue)" checked={accentColor === "var(--blue)"} onChange={handleAccentChange}/>Blue</label>
                            <label><input type="checkbox" name='accentColor' value="var(--green)" checked={accentColor === "var(--green)"} onChange={handleAccentChange}/>Green</label>
                            <label><input type="checkbox"  name='accentColor' value="var(--yellow)" checked={accentColor === "var(--yellow)"} onChange={handleAccentChange}/>Yellow</label>
                        </div>

                        <h5>Task Data</h5>
                        <div className="d-flex mt-3 gap-2" style={{alignItems: "center"}}> 
                            <button onClick={clearTasks}>Clear Data</button>
                            <a href="#input-areas">
                                <button onClick={() => setIsSettingBoxOpen(false)}>Add Tasks</button>
                            </a>
                            <button>Export Tasks</button>
                        </div>
                        <button id='okay-button' onClick={() => setIsSettingBoxOpen(false)}>Okay</button>
                    </div>
                ) }

            </div>

            <div className="container d-flex" style={{flexDirection: "column", textAlign: "center", paddingTop: "10px", alignItems: "center"}}>
                <div className='d-flex justify-content-center align-items-center input-area' style={{flexDirection: "column"}}>
                <h1><strong>Stay on Track, One Task at a Time</strong></h1>
                    <div className="d-flex mt-3" style={{justifyContent: "center"}}>
                        <input id="input-areas" type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} style={{borderRadius: "20px 0px 0px 20px", fontSize}}/>
                        <button id="adding-button" style={{borderRadius: "0px 20px 20px 0px", height: "50px"}} onClick={addTask}>Add</button>
                    </div>
                </div>

                <div className='tasks-back-container mt-3' style={{backgroundColor: accentColor, display: "flex", flexDirection: "column", paddingBottom: "40px", borderRadius: "20px", marginTop: "25px"}}>
                    {tasks.length === 0 ? (
                        <div className='d-flex justify-content-center pt-4' style={{width: "100%"}}>
                        <div style={{border: "3px solid red", textAlign:"center", borderRadius: "10px", padding: "20px 0px", width: "400px"}}>
                            <h4 style={{fontSize, fontWeight: "bold"}}>No Tasks ! Start adding Tasks</h4>
                        </div>
                        </div>
                    ) : (
                    tasks.map((task, index) => (
                    <div key={index}>
                        <div className="container" style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", justifyContent: "center"}}>
                            <div className="row" id="msg-compo" style={{backgroundColor: cardColor}}>
                            <div className="col-6 col-md-6 col-lg-8 col-xl-8 d-flex" style={{alignItems: "center"}}>
                                <h4 style={{fontSize}}>{task}</h4>
                            </div>

                            <div className="col-6 col-md-6 col-lg-4 col-xl-4" style={{width: "30%", position: "absolute", right: "0px", display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-end", top: "50%", transform: "translateY(-50%)"}}>
                                <div className="d-flex" style={{display: "flex", alignItems: "center", gap: "5px", flex: "0 0 50%", padding: "0px 10px"}}>
                                    <button id="delete-button" onClick={() => deleteTask(index)} ><strong><Trash2/></strong></button>
                                    <button id="moving-button" onClick={() => moveTaskUp(index)}><strong><ArrowBigUp className='icons'/></strong></button>
                                    <button id="moving-button" onClick={() => moveTaskDown(index)}><strong><ArrowBigDown className='icons'/></strong></button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )))}
                </div>
            </div>

            <div className="d-flex footer-section" style={{flexDirection: "column"}}>
                <h5>Task Manager App v1.0.0</h5>
                <h6>Created by Sandun</h6>
                <div className="d-flex gap-2 fs-6">
                    <a href="">GitHub</a>
                    <div className="vertical-line"></div>
                    <a href="">Portfolio</a>
                    <div className="vertical-line"></div>
                    <a className='policy-text' onClick={() => setIsPrivacyBox(true)}>Privacy Policy</a>
                    { isPrivacyBox && (
                        <div className="privacy-box">
                            <h5>🛡️ Privacy Info</h5>
                            <h6>This app stores your tasks locally on your device. No data is collected, stored, or shared with anyone.</h6>
                            <button onClick={() => setIsPrivacyBox(false)}>Done</button>
                        </div>
                    ) }
                </div>
            </div>

            </div>
        </div>
        </>
    );
}
export default Home;

