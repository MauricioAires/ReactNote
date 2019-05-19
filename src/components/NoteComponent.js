import React,{ Component } from 'react';
import  PropTypes from 'prop-types';
import { CardNote } from '../pages/dashboard/styles';
import { FaTrash,MdUpdate } from 'react-icons/all';

class Note extends Component{
    
    constructor(props){
        super(props);
        this.noteContent =  this.props.noteContent;
        this.noteId = this.props.noteId;
    }

    handleRemoveNote(noteId){
        this.props.removeNote(noteId);
    }

    render(){
        return(
            <CardNote >
                <div className="note-header">
                    <p> <MdUpdate size={20}/></p>
                    <span 
                    onClick={() => this.handleRemoveNote(this.noteId)}>
                        <FaTrash size={16} />
                    </span>
                    
                </div>
                <p>
                   { this.noteContent }
                </p>
                <button> SALVAR </button>
            </CardNote>
         );
    }
}

Note.propTypes ={
        noteContent : PropTypes.string 
}

export default Note;