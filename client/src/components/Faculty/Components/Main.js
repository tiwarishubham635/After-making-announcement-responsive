import React from 'react';
import facultyList from './facultyList';
import FacultyCard from './FacultyCard';

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            data: facultyList
        }
    }
    render()
    {
        const facultyData = this.state.data.map(item => <FacultyCard key={item.name} item={item}/>)
        return (
            <main>
                <div className='Title'>
                    <div>Faculty</div>
                </div>
                    
                
                <div className='Context'>
                    <div className="faculty-list">
                        {facultyData}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;