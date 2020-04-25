import React from 'react'
import { connect } from 'react-redux'
import img from '../../assests/glue.svg'

let Loading = ({ loading }) => (
    loading ?
    <div>
        <img src={img} alt="loading" />
        <h1>Loading</h1>
    </div> :
    null
)

const mapStateToProps = (state) => ({ loading: state.loading })

export default connect(mapStateToProps, null)(Loading)