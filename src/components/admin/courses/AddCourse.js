import React, { Component } from 'react'
import firebase from '../../../firebase';

export default class AddCourse extends Component {
  state = {
    newCourse: {},
    file: null
  }


  addCourse = (e) => {
    e.preventDefault()
    firebase.database().ref('courses/')
      .push(this.state.newCourse)
      .then(r => {
        if (this.state.file) {
          let updates = {};
          firebase.storage()
            .ref(r.key)
            .child(this.state.file.name)
            .put(this.state.file)
            .then(s => {
              const link = s.downloadURL;
              let { newCourse } = this.state
              newCourse["photos"] = [link];
              updates[`/courses/${r.key}`] = newCourse;
              firebase.database().ref().update((updates));
            });
        }
      }).catch(e => console.log(e))
  }

  onChange = (e) => {
    const { newCourse } = this.state
    newCourse[e.target.name] = e.target.value
    this.setState({ newCourse })
  }
  onChangeImage = (e) => {
    let { file } = this.state
    file = e.target.files[0]
    this.setState({ file })
  }

  render() {
    return (
      <div style={{ paddingTop: '60px', maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>

        <div className="aplicacion">
          <div className="card_form">
            <h5 style={{ textAlign: 'center' }}>Agregar curso</h5>
            <hr className="division" />
            <form onSubmit={this.addCourse}>
              <div className="formgroup">
                <div className="inp">
                  <input type="text" name="courseName" className="formcontrol" onChange={this.onChange} placeholder="Nombre del curso" />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <textarea onChange={this.onChange} type="text" name="description" className="formcontrol" placeholder="Descripción" />
                </div>
              </div>
              <div className="formgroup">
                <p>Fecha de inicio: </p>
                <div className="inp">
                  <input type="date" onChange={this.onChange} className="formcontrol" name="startDate" />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <input type="text" onChange={this.onChange} name="schedule" className="formcontrol" placeholder="Días de curso y horario." />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <input type="text" onChange={this.onChange} name="location" className="formcontrol" placeholder="Ubicación" />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <input type="number" onChange={this.onChange} name="price" className="formcontrol" placeholder="Precio" />
                </div>
              </div>
              <div className="formgroup">
                <div className="inp">
                  <input type="file" onChange={this.onChangeImage} accept="image/*" name="file" className="formcontrol" placeholder="Ubicación" />
                </div>
              </div>
              <button className="btn_start" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
