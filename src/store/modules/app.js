import Cookies from 'js-cookie';

const app = {
    state: {        
        lang: 'china',        
        theme: '#fff',
        tilte:'维保APP'
    },
    mutations: {       
        changeTheme (state, mainTheme) {
            state.theme = mainTheme;
        },         
        setAvator (state, path) {
            localStorage.avatorImgPath = path;
        } 
    }
};

export default app;
