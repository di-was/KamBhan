// Default Data
data = {
    theme: '#fff',
    dashBoards: {total: 0},
    columbs: {
        Todo: {

        },
        Doing: {

        },
        Done: {

        },
    }

}


// Functions For retrival and manipulation of data
themeChangeTo = () => { 
    data = { 'theme': `${color}`, ...data}
    localStorage.data = data;
}

addDashBoards = (id, dashName) => {
    data = {
        dashBoards: {
            id: {
                name: dashName,
                
            },
            ...dashBoards
        },
        ...data
    }
}