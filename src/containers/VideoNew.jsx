import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import DOMPurify from "dompurify";

import { addVideo } from "../actions";

class VideoNew extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        let label = field.label;
        if(field.required) {
            label = <strong>{label}</strong>;
        }

        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    className="form-control"
                    { ...field.input }
                />
                <div className="text-danger">{touched ? error : ""}</div>
            </div>
        );
    }

    renderTextarea(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <textarea
                    className="form-control"
                    { ...field.input }
                />
            </div>
        );
    }

    /*renderFileInput(field) {
        return (
            <div className="form-group">
                <label>File input</label>
                <input
                    className="form-control-file"
                    type="file"
                    { ...field.input }
                />
            </div>
        );
    }*/

    handleFormSubmit(values) {
        const newVideo = values;

        for( let videoPropKey in newVideo ) {
            newVideo[videoPropKey] = DOMPurify.sanitize(newVideo[videoPropKey]);
        }

        // country should be an array
        let country = [];
        if( newVideo.country ) {
            newVideo.country.split(",").map( countryItem => {
                const cleanStr = countryItem.trim();

                if( cleanStr.length > 0 ) {
                    country.push(cleanStr)
                }
            });
        }
        newVideo.country = country;

        // jenre must be an array
        let genre = [];
        if( newVideo.genre ) {
            newVideo.genre.split(",").map( countryItem => {
                const cleanStr = countryItem.trim();

                if( cleanStr.length > 0 ) {
                    genre.push(cleanStr);
                }
            });
        }
        newVideo.genre = genre;

        // save video
        this.props.addVideo(values);
        this.props.reset();
    }

    showSuccess() {
        return this.props.isVideoAdded ? <div className="text-success">Video data was saved.</div> : false;
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Add new video</h2>
                    </div>
                    <div className="col-md-6">
                        { this.showSuccess() }
                        <form className="video-new" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <Field
                                label="Title"
                                name="name"
                                required="required"
                                component={this.renderField}
                            />
                            <Field
                                label="Picture link"
                                name="picture"
                                required="required"
                                component={this.renderField}
                            />
                            <Field
                                label="Original name"
                                name="originalName"
                                component={this.renderField}
                            />
                            <Field
                                label="Director"
                                name="director"
                                component={this.renderField}
                            />
                            <Field
                                label="Countries"
                                name="country"
                                component={this.renderField}
                            />
                            <Field
                                label="Genres"
                                name="genre"
                                component={this.renderField}
                            />
                            <Field
                                label="Year"
                                name="year"
                                component={this.renderField}
                            />
                            <Field
                                label="IMDb rating"
                                name="rating"
                                component={this.renderField}
                            />
                            <Field
                                label="Description"
                                name="description"
                                component={this.renderTextarea}
                            />
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ videoData: { isVideoAdded } }) {
    return { isVideoAdded };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addVideo }, dispatch);
}

VideoNew = connect(mapStateToProps, mapDispatchToProps)(VideoNew);

function validate(values) {
    const errors = {};

    if( !values.name ) {
        errors.name = "Title cannot be empty.";
    }

    if( !values.picture ) {
        errors.picture = "Picture link cannot be empty.";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "VideoNew"
})(VideoNew);