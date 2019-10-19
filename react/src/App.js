import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


const App = (props) => {
    console.log(props);
    return(
        <div>
            <Header data={data}/>
            <p>Hello Python!</p>
            <Footer data={data}/>
        </div>
    );
};

export default App;

