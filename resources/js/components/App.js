import React from 'react';
import Footer from './Footer';
import Table from './Table';


function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
               {/* components go here */}
               <Table/>
               <Footer/>

            </div>
        </div>
    );
}

export default App;