// get rid of this
if (localStorage.getItem('data') === null) {
    let orgData = {
        theme: '#fff',
        dashBoards: {total:0},
    }
    localStorage.setItem('orgData', orgData)
} else {
    let orgData = localStorage.getItem('orgData');
}
 
// Functions For retrival and manipulation of data
themeChangeTo = () => { 
    var data = { 'theme': `${color}`, ...orgData}
    localStorage.orgData = data;
    orgData = localStorage.getItem('orgData')
}

addDashBoards = (id, dashName) => {
    
    var data = {
        dashBoards: {
            [id]: {
                name: dashName,
                columbs: {
                    ...columbs // Sub function  here
                }
            },
            ...dashBoards
        },
        ...orgData
    }
    localStorage.orgData = data;
    orgData = localStorage.getItem('orgData')
}

addColumbs = (dashId, columbId, columbName) => {

        for (const [key, values] of Object.entries(orgData)) {
            if (key == 'dashBoards') {
                for (const [key2, values2] of Object.entries(values)) {
                    if (key2 === dashId) {
                        for (const [key3, values3] of Object.entries(values2)) {
                            key3 = {
                                [columbId] : {
                                    columbName: columbName,
                                    tasks: {}
                                },
                                ...values3
                            }
                        }
                    }
                }
            }
        }
        localStorage.orgData = orgData;
     
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
                                    key4 = {
                                        [tasksId] : {
                                            taskName: taskName,
                                            description:  taskDescription,
                                            subtask: {},
                                        },
                                        ...value4
                                    }
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