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
                    if (key2.id === dashId) {
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
        localStorage.orgData = orgData
     
}



// Possible Bugs to be tested
// 1) validity of orgData (funcs : addColumbs) after appending keys
// 2) Repetition of 14 n 15