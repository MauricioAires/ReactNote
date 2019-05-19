import React, { Component } from 'react';
import { Form, Textarea, Input } from '@rocketseat/unform';
import { IoIosArrowDown, IoIosArrowUp, IoIosAdd } from 'react-icons/io';
import { FaTimesCircle, FaCog } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import user from '../../assets/default-user.jpeg';
import NoteDate from '../../components/NoteComponent';
import VideoDate from '../../components/VideoComponent';
import iconUser from '../../assets/default-user.jpeg';
import { DivForm, BodyDash, DivOutBackground, DivModalEditUser, Logo, User, Video, Content, Note, DivVideoBackground, DivNoteBackground } from './styles.js';
import * as Yup from 'yup';
// conect firebase
import firebase from '../../Firebase';



class dashboard extends Component {
  constructor(props) {
    super(props);

    // varial token do usuario
    const token = localStorage.getItem("@token");

    // "urls " para cadastrar
    this.refNote = firebase.firestore().collection('notes');
    this.refVideo = firebase.firestore().collection('videos');

    // "urls " para buscar com filtro
    this.refQueryNote = firebase.firestore().collection('notes').orderBy('createdAt', 'desc').where("token", "==", token);
    this.refQueryVideo = firebase.firestore().collection('videos').orderBy('createdAt', 'desc').where("token", "==", token);


    this.state = {
      modalNote: false,
      modalVideo: false,
      modalLogout: false,
      modalEditUser: false,
      notes: [],
      videos: [],

    }
  }


  async componentDidMount() {

    if (!localStorage.getItem('@token')) {
      this.props.history.push("/login");
    }


    // pegar dados com filtro
    this.unsubscribe = this.refQueryNote.onSnapshot(this.onCollectionUpdate);
    this.unsubscribe = this.refQueryVideo.onSnapshot(this.onCollectionVideoUpdate);

  }


  onCollectionVideoUpdate = async (querySnapshot) => {

    const videos = [];
    querySnapshot.forEach((doc) => {
      // nome das variaves que irã ser push
      const { url, descricao, token, classe, createdAt } = doc.data();
      videos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        url,
        descricao,
        token,
        classe,
        createdAt
      });
    });
    this.setState({
      videos
    });
  }

  onCollectionUpdate = async (querySnapshot) => {

    const notes = [];
    querySnapshot.forEach((doc) => {
      // nome das variaves que irã ser push
      const { text, createdAt } = doc.data();
      notes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        text,
        createdAt
      });
    });
    this.setState({
      notes
    });
  }


  handleClickNote = () => {
    const { modalNote } = this.state;
    this.setState({
      modalNote: !modalNote
    });
  }


  handleSubmitEditUser = (data) => {
    const { modalEditUser, modalLogout } = this.state;
    var user = firebase.auth().currentUser;

    
      user.updateProfile({
        displayName: data.name,
        email: data.email,
        password: data.senha
      }).then(() => {
        localStorage.setItem("@name",data.name);
        this.forceUpdate();
        this.setState({
          modalLogout: !modalLogout,
          modalEditUser: !modalEditUser
        });    
      });
  }

  handleEditUser = () => {
    const { modalEditUser, modalLogout } = this.state;
    this.setState({
      modalLogout: !modalLogout,
      modalEditUser: !modalEditUser
    });
  }

  handleClickVideo = () => {
    const { modalVideo } = this.state;
    this.setState({
      modalVideo: !modalVideo
    });
  }

  handleClickOut = () => {
    const { modalLogout } = this.state;
    this.setState({
      modalLogout: !modalLogout
    });
  }

  handleClickSair = async () => {
    await localStorage.clear();
    this.props.history.push("/login");
  }

  handleAddNote = (data) => {
    const { modalNote } = this.state;
    const token = localStorage.getItem("@token");
    this.refNote.add({
      token: token,
      text: data.textonote,
      createdAt: Date.now()
    }).then(
      // fechar a pooup depois que for cadastrado 
      this.setState({
        modalNote: !modalNote
      })
    ).catch((error) => {
      console.error("Error adding document: ", error);
    });
  }



  handleAddVideo = (data) => {
    const { modalVideo } = this.state;
    const cod = data.url.substring(32, 43);
    const token = localStorage.getItem("@token");

    this.refVideo.add({
      token: token,
      classe: data.classe,
      descricao: data.descricao,
      url: cod,
      createdAt: Date.now()
    }).then(
      // fechar a pooup depois que for cadastrado 
      this.setState({
        modalVideo: !modalVideo
      })
    ).catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  handleRemoveNote(noteId) {
    firebase.firestore().collection('notes').doc(noteId).delete().then(() => {
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  handleRemoveVideo(videoId) {
    firebase.firestore().collection('videos').doc(videoId).delete().then(() => {
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const initialData = {
      name: localStorage.getItem("@name"),
      email: localStorage.getItem("@email"),
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    const schemaVideo = Yup.object().shape({
      url: Yup.string().required(),
    });
    
    const schemaNote = Yup.object().shape({
      textonote: Yup.string().required(),
    });
    const ModalNote =
      <DivNoteBackground>
        <div id="back-div" onClick={this.handleClickNote}></div>
        <div>
          <label> Nova Nota </label>
          <Form schema={schemaNote}  onSubmit={this.handleAddNote}>
            <Textarea name="textonote" placeholder="Texto ..."></Textarea>
            <Input name="submit" type="submit" value="SALVAR" />
          </Form>
        </div>

      </DivNoteBackground>
      ;


      

    const ModalEditUser =
      <DivModalEditUser>
        <div id="back-div" onClick={this.handleEditUser}></div>
        <DivForm>
          <h2>Editar Conta</h2>
          <Form schema={schema} className="form" initialData={initialData} onSubmit={this.handleSubmitEditUser}>
            <label>
              <img src={iconUser} alt="Icone user" />
            </label>

            <Input type="text" name="name" placeholder="Nome" />
            <Input type="email"  name="email" placeholder="Email" />
            <Input type="submit" name="login" value="SALVAR" />
          </Form>
        </DivForm>
      </DivModalEditUser>
      ;
    const ModalVideo =
      <DivVideoBackground>
        <div id="back-div" onClick={this.handleClickVideo}></div>
        <div>
          <label> Novo Video </label>
          <Form schema={schemaVideo} onSubmit={this.handleAddVideo}>
            <Input type="text" name="classe" placeholder="Classe" maxLength={20} />
            <Input type="text" name="url" placeholder="URL" />
            <Input type="text" name="descricao" placeholder="Descrição" maxLength={100} />
            <Input name="submit" type="submit" value="SALVAR" />
          </Form>
        </div>

      </DivVideoBackground>
      ;

    const ModalLogout =
      <DivOutBackground>
        <div className="actions">
          <p onClick={this.handleEditUser}> <FaCog size={14} /> Editar Perfil </p>
          <p onClick={this.handleClickSair}> <FaTimesCircle size={14} /> Sair </p>
        </div>
        <div id="back-div" onClick={this.handleClickOut}></div>
      </DivOutBackground>
      ;

    return (
      <BodyDash>
        {this.state.modalEditUser === true && ModalEditUser}
        {this.state.modalNote === true && ModalNote}
        {this.state.modalVideo === true && ModalVideo}

        <header>
          <Logo>
            <img src={logo} alt="logo react note" />
            <h1>
              Dashboard
              </h1>
          </Logo>
          <User>
            <img src={user} alt="user default" />
            <span onClick={this.handleClickOut} >
              {localStorage.getItem('@name')}
              {this.state.modalLogout === true
                ? <IoIosArrowUp className='icon' size={24} />
                : <IoIosArrowDown className='icon' size={24} />
              }
            </span>
            {this.state.modalLogout === true && ModalLogout}
          </User>
        </header>
        <Content>

          <Video>
            <div className="divAddVideo" onClick={this.handleClickVideo}>
              <IoIosAdd size={30} />
            </div>
            {
              this.state.videos.map((data, index) => {
                return (
                  <VideoDate
                    videoUrl={data.url}
                    videoDescription={data.descricao}
                    videoId={data.key}
                    videoClasse={data.classe}
                    key={data.key}
                    removeVideo={this.handleRemoveVideo}
                  />
                )
              })
            }
          </Video>

          <Note>
            <div className="divAdd" onClick={this.handleClickNote}>
              <IoIosAdd size={30} />
            </div>
            {
              this.state.notes.map((data, index) => {
                return (
                  <NoteDate
                    noteContent={data.text}
                    noteId={data.key}
                    key={data.key}
                    removeNote={this.handleRemoveNote}
                  />
                )
              })
            }
          </Note>

        </Content>

      </BodyDash>
    );
  }
}

export default dashboard;