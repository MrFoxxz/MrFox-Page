import React from "react"
import Card from '../../components/Card'
import ICard from '../../components/ICard'
import MButton from '../../components/MButton'

import "./styles.scss";

export const AboutMe = () => {
  return (
    <div>
      <div className="box">

      {/*   <div className="img"> IMG </div> */}

        <div className="infobox">
          <ul class="list nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><h3>Sobre Mi</h3></a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><h3>Educación</h3></a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><h3>Experiencia</h3></a>
            </li>
            <li class="nav-item" >
              <p class="nav-link disabled" tabindex="-1" aria-disabled="true">Miguel Angel Jaimes Contreras</p>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">

            <MButton
            id="0"
            name="Curriculum bien perron"
            cert="https://docs.google.com/viewer?srcid=1XZYFZcx-8sCAHFK0wBpsmNDxfvZkpu9I&pid=explorer&efh=false&a=v&chrome=false&embedded=true">
            </MButton>

            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

              <Card
                id="10"
                tittle="Sobre Mi:"
                sub="Full Stack Developer Front-end Developer Designer y gamer, dispuesto a retos, aprender y a crear cosas nuevas."
                cert=""
                text="  Programador con conocimientos en manejo de lenguajes, diseño gráfico, videojuegos, fotografía y atención al cliente, con expectativas de ampliar mi perfil profesional en áreas como desarrollo de código y diseño de páginas web. 
                  Habilidades comunicativas tanto oral como escrita y de trabajo en equipo, además de la capacidad de análisis de sistemas y rápido aprendizaje. Con una alta atención al detalle y tolerancia al estrés.
                  Observador, disciplinado, comprometido, ético y proactivo.    ">
              </Card>
              
              <Card
                id="11"
                tittle="Skills:"
                sub="Manejo los siguientes programas por experiencia y cursos realizados."
                cert=""
                text="JavaScript
                - React.js
                - Redux
                - HTML
                - CSS
                - Node.js
                - Sequelize ORM
                - Express.js
                - PostgreSQL
                - Ruby on Rails
                - Firebase
                - Git
                - Photoshop
                - AutoCAD">
              </Card>

              <Card
                id="12"
                tittle="Aptitudes:"
                sub="Aptitudes que definen mi forma de trabajar, gracias a las experiencias recibidas."
                cert=""
                text="Iniciativa
                - Liderazgo
                - Servicio de atención al cliente
                - Comunicación
                - Dirección general
                - Estrategia
                - Investigación
                -Marketing">
              </Card>

              <Card
                id="13"
                tittle="Aficiones e intereses:"
                sub="Hobbies y aficiones favoritas"
                cert=""
                text="Videojuegos
                - Fotografía y vídeo
                - Dibujo
                - Diseño
                - Trekking
                - Música
                - Leer">
              </Card>

              <Card>
              </Card>

            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <ICard
              id="1"
              tittle="Full Stack Web Developer"
              sub="Henry"
              cert="https://docs.google.com/viewer?srcid=1XZYFZcx-8sCAHFK0wBpsmNDxfvZkpu9I&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
              text="Conocimientos en JavaScript, HTML, CSS, Node, React, Redux, SQL">                
              </ICard>

              <ICard
              id="2"
              tittle="Manejo de Adobe Photoshop"
              sub="El Servicio Nacional de Aprendizaje SENA"
              cert="https://docs.google.com/viewer?srcid=17quZ8IYAzJYYBJCvin-8nyKcFdln-553&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
              text="Manejo del programa de diseño de Autodesk Photoshop."></ICard>

              <ICard
              id="3"
              tittle="Manejo de herramienta de Microsoft Office: Excel"
              sub="El Servicio Nacional de Aprendizaje SENA"
              cert="https://docs.google.com/viewer?srcid=1ogxPqjuajdxXRsNJ9IdcMxNntiPXUzRC&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
              text="Manejo del programa de diseño de Autodesk Photoshop.">                
              </ICard>

              <ICard
              id="4"
              tittle="Autodesk Inventor"
              sub="Instituto de Computacion Arts"
              cert="https://docs.google.com/viewer?srcid=1-7l9FJOJW5MHSuzalN5IF2VPNgFwe6j_&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
              text="Manejo del programa de diseño de Autodesk Inventor y AutoCAD.">
              </ICard>

              <ICard
              id="5"
              tittle="Especialista Instalador de Redes"
              sub="Instituto de Capacitación Técnica Keys"
              cert="https://docs.google.com/viewer?srcid=18r03DuiKHFGBrNyGzaMS8UGVPXMUmv8q&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
              text="Conocimientos en Cableado interno, montaje de redes LAN y de fibra optica.">
              </ICard>

              <Card
              id="6"
              tittle="Ingenieria Mecanica (Incompleto)"
              sub="Universidad Central de Venezuela"
              text="Carrera estudidada en la Univerdidad Central de Venezuela con materias aprovadas hasta el 6to semestre.">
              </Card>

              <Card>
              </Card>
            </div>

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <ICard
                id="7"
                tittle="Manager"
                sub="Empire Gaming"
                cert="https://docs.google.com/viewer?srcid=10BGSBl6mWSaNaPyBG1HIcGS37tuoBCL_&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
                text='Encargado de la gerencia, administración, y coordinación del local gamer "Empire Gaming", sus eventos y empleados.'>
              </ICard>
                
              <ICard
                id="8"
                tittle="Coordinador de atencion Integral"
                sub="Bodegón de Francis"
                cert="https://docs.google.com/viewer?srcid=1-07edrV-4KyMRVeBuiofuPdoV9ydBtz9&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
                text="Puesto encargado en coordinar equipo para eventos organizados por el Bodegon, Atencion al cliente en general y organizacion de bodega.">
              </ICard>

              <Card
                id="9"
                tittle="Tutor Universitario"
                sub="Universidad Central de Venezuela"
                cert=""
                text="Tutor de las materias, diseño mecanico, diseño AutoCAD e Inventor 3D"> 
              </Card>

              <Card>
              </Card>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe