import React from 'react'

class Task extends React.Component{

    componentDidMount(){
        this.setState({myState: 'Florida'})
    }
    
    render(){
        const { nomeTask } = this.props;
        const { myState } = this.state || {};

        

        return (
            <div>
                <div style={{
                    border: 'solid 1px black',
                    margin: '5px',
                    padding: '20px',
                    borderRadius: '15px'

                }}>
                <h1>Nome da task:</h1>
                <p>{nomeTask}</p>
                </div>

            </div>
        )
    }
}


export default Task