import React from 'react';

function Home(props) {
    return (
        <div className="container mt-4">
            <img src="https://hybridheroes.de/blog/content/images/size/w1200/2022/03/redux-toolkit-1400.jpg" alt="" />
            <div className="row">
                <div className="col-7 mx-auto">
                    <div className="card text-white bg-secondary mt-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                This project was created to learn 'Redux Toolkit'.
                            </h5>
                            <p className='card-text'>
                                In react the state is distributed in a singular direction. i.e; from parent to child.
                                This data is lost when user switch between different components. But by using Redux toolkit we 
                                can create create a global state locally. This global state or store lets all the components 
                                extract data from it, at the same time maintaining the data without loosing it.
                            </p>

                            <p className='card-text'> 
                                In this project I've created each component with and without Redux Toolkit,
                                for the purpose of demonstrating its usefullness.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;