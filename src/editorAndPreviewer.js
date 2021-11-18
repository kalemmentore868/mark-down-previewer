import React, {Component} from 'react'
import './App.css';
let marked = require("marked")




class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            preview: "# Welcome to my React Markdown Previewer!"
         }
         this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e){
        
        this.setState({
            preview: e.target.value
        })
    }


    render() { 
        
        return ( 
            <div>
                <div className="editor-box">                    
                    <h2 className="h2-editor">Editor</h2>
                    <textarea id="editor" rows="12" cols="60" onChange={this.handleChange}>{this.state.preview}</textarea>
                </div>
                <div id="preview">
                    <h2 className="h2-preview">Previewer</h2>
                    <p dangerouslySetInnerHTML= {{__html: marked(this.state.preview)}}></p>

                </div>
            </div>

         );
    }
}
 
export default Display;