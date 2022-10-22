
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
                if (parseInt(key2) === dashId) {
                    for (const [key3, value3] of Object.entries(values2)) {
                        if (key3 === 'columbs' ) {
                            for (const [key4, value4] of Object.entries(value3)) {
                                if (parseInt(key4) === columbId) {
                                    for (const [key5, value5] of Object.entries(value4)) {
                                    
                                        if ( key5 === 'tasks') {  
                                                data = {
                                                    ...orgData,
                                                    dashBoards: {
                                                        ...values,
                                                        [key2]: {
                                                            ...values2,
                                                            columbs: {
                                                            ...value3,
                                                            [columbId] : {
                                                                ...value4,
                                                                tasks : {
                                                                    ...value5,
                                                                    [tasksId] : {
                                                                        taskName: taskName,
                                                                        taskDescription: taskDescription,
                                                                        subTasks: {

                                                                        }
                                                                    }
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
        }
    }
}


addSubTask = (dashId, columbId, tasksId, subtaskId, subtaskDescription) =>  {
    for (const [key, values] of Object.entries(orgData)) {
        if (key == 'dashBoards') {
            for (const [key2, values2] of Object.entries(values)) {
                if (parseInt(key2) === dashId) {
                    for (const [key3, value3] of Object.entries(values2)) {
                        if (key3 === 'columbs' ) {
                            for (const [key4, value4] of Object.entries(value3)) {
                                if (parseInt(key4) === columbId) {
                                    for (const [key5, value5] of Object.entries(value4)) {
                                        if (key5 === 'tasks') {
                                            for ( const [key6, value6] of Object.entries(value5)) {
                                                if (parseInt(key6) === tasksId) {
                                                    for (const [key7, value7] of Object.entries(value6)) {
                                                        if (key7 === 'subTasks') {
                                                            data = {
                                                                ...orgData,
                                                                dashBoards: {
                                                                    ...values,
                                                                    [key2]: {
                                                                        ...values2,
                                                                        columbs: {
                                                                        ...value3,
                                                                        [columbId] : {
                                                                            ...value4,
                                                                            tasks : {
                                                                                ...value5,
                                                                                [tasksId] : {
                                                                                    ...value6,
                                                                                    subTasks: {
                                                                                        ...value7,
                                                                                        [subtaskId]: subtaskDescription
                                                                                    }
                                                                                }
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
                            }
                        }
                    }
                }
            }
        } 
    }