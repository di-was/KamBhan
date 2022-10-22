
if (localStorage.getItem('orgData') === null) {
    let orgData = {
        theme: '#fff',
        dashBoards: {},  
    }
    localStorage.setItem('orgData', JSON.stringify(orgData))
}
let orgData = JSON.parse(localStorage.getItem('orgData'))

function getData() {
    console.log(JSON.parse(localStorage.getItem('orgData')))
}
 
// Functions For retrival and manipulation of data
themeChangeTo = (color) => { 
    var data = {...orgData,  'theme': `${color}`}
    localStorage.orgData = JSON.stringify(data);
    orgData = JSON.parse(localStorage.getItem('orgData'))
}

addDashBoards = (id, dashName) => {
    for (const [key, value] of Object.entries(orgData)) {
        if (key === 'dashBoards') {
            let dashboard = value
            var data = {
                ...orgData,
                dashBoards: {
                    ...dashboard,
                    [id]: {
                        name: dashName,
                        columbs: {
                            
                        }
                    },
                },
            }
            localStorage.orgData = JSON.stringify(data);
            orgData = JSON.parse(localStorage.getItem('orgData'))
            
        } 
    }
}




addColumbs = (dashId, columbId, columbName) => {


        for (const [key, values] of Object.entries(orgData)) {
            if (key == 'dashBoards') {
                for (const [key2, values2] of Object.entries(values)) {
                    if (parseInt(key2) === dashId) {
                        for (let [key3, values3] of Object.entries(values2)) {
                            if (key3 === 'columbs') {
                                data = {
                                    ...orgData,
                                    dashBoards: {
                                        ...values,
                                        [dashId]: {
                                            ...values2,
                                            columbs: {
                                                ...values3,
                                                [columbId]: {
                                                    [columbName]: columbName,
                                                    tasks: {}
                                                }
                                            }
                                        }

                                    }
                                }
                                localStorage.orgData = JSON.stringify(data);
                                orgData = JSON.parse(localStorage.getItem('orgData'))
                            }
                           
                        }
                    }
                }
            }
        }

      

     
}





addTask = (dashId, columbId, tasksId, taskName, taskDescription) => {
    for (const [key, values] of Object.entries(orgData)) {
        if (key == 'dashBoards') {
            for (const [key2, values2] of Object.entries(values)) {
                if (key2 === dashId) {
                    for (const [key3, value3] of Object.entries(values2)) {
                        if (key3 === columbId ) {
                            for (const [key4, value4] of Object.entries(value3)) {
                                if (key4 === 'tasks') {
                                    data = {
                                        ...orgData,
                                        dashBoards: {
                                            ...values,
                                            key2: {
                                                ...values2,
                                                columbs: {
                                                   ...value3,
                                                   [columbId] : {
                                                    ...value4,
                                                     tasks: {
                                                        
                                                     }
                                                   }
                                                   
                                                   
                                                }
                                            }
    
                                        }
                                    }
                                    localStorage.orgData = JSON.stringify(data);
                                    orgData = JSON.parse(localStorage.getItem('orgData'))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    localStorage.orgData = orgData;
}

addSubTask = (dashId, columbId, tasksId, subtaskId, subtaskDescription) =>  {
    for (const [key, values] of Object.entries(orgData)) {
        if (key == 'dashBoards') {
            for (const [key2, values2] of Object.entries(values)) {
                if (key2 === dashId) {
                    for (const [key3, value3] of Object.entries(values2)) {
                        if (key3 === columbId) {
                            for (const [key4, value4] of Object.entries(value3)) {
                                if (key4 === 'tasks') {
                                    for (const [key5, value5] of Object.entries(value4)) {
                                        if (key5 === tasksId) {
                                            for (const [key6, value6] of Object.entries(value5)) {
                                                if (key6 === 'subtask') {
                                                   key6 = {
                                                    [subtaskId]: {
                                                        description: subtaskDescription
                                                    },
                                                    ...value6
                                                   }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

 
// Data Structure
/*
    {
        theme: color
        dashboards {
            [id of dashboard]: {
                name : string
                columbs : {
                    [id of columb] : {
                        columbName: string
                        tasks : {
                            [id of task] : {
                                taskName : string
                                description: string
                                subtask : {
                                    [id of subtask] : {
                                        description : string
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
*/

// Possible Bugs to be tested
// 1) validity of orgData (funcs : addColumbs) after appending keys
// 2) Repetition of 14 n 15