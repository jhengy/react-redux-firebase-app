import React from 'react'

// this is a routed component with route parameter
/**
 * 1. set up template with mock data (remember the routed component parameter with id)
 */
const ProjectDetails = (props) => {
  const id = props.match.params.id // extract route paramter
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title - {id}
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda itaque laboriosam repellendus nihil necessitatibus, est impedit officiis commodi ducimus! Ab, soluta. Quibusdam, neque ex illo consequatur ullam laborum alias!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Hengyuan</div>
          <div>29 May 2019</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
