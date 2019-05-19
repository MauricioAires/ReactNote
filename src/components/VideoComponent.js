import React,{ Component } from 'react';
import { CardVideo,Frame } from '../pages/dashboard/styles';
import { FaTrash, FaSitemap } from 'react-icons/fa';

class Video extends Component{
    
    constructor(props){
        super(props);
        this.VideoUrl = this.props.videoUrl;
        this.videoId = this.props.videoId;
        this.videoClass = this.props.videoClasse;
        this.VideoDescription = this.props.videoDescription;


    }

    handleRemoveVideo(videoId){
        this.props.removeVideo(videoId);
    }

    render(){
        return(
            <CardVideo >
                <div className="head">
                    <strong>{this.videoClass}</strong>
                    <span 
                            onClick={() => this.handleRemoveVideo(this.videoId)}>
                     <FaTrash size={20} /> 
                    </span>
                </div>
                <Frame>
                    <iframe 
                        title={this.videoId}
                        src={`https://www.youtube.com/embed/${this.VideoUrl}`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen />
                </Frame>

                    
                    <span className="description">
                        {
                            this.VideoDescription
                        }    
                           
                    </span>
               
            </CardVideo>
         );
    }
}

export default Video;