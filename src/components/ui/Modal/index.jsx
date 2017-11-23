import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getModal } from 'redux/modal/reducer';
import { closeModal } from 'redux/modal/actions';
import keycode from 'keycode';

import './styles.css';

/* Modal components */


const MODAL_COMPONENTS = {

};

class Modal extends Component {

    closeModal = (event) => {
        if (keycode(event) === 'esc') {
            this.props.closeModal();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.child === null && nextProps.child) {
            document.addEventListener('keydown', this.closeModal);
        }

        if (this.props.child && nextProps.child === null) {
           document.removeEventListener('keydown', this.closeModal);        
        }
    }

    render() {
        const { child, childProps } = this.props;
        const ModalChild = MODAL_COMPONENTS[child] || null;
        
        return (
            child ? 
            <section className="modal">
                <div className="modal__content">
                    <button onClick={this.props.closeModal} className="modal__btn">✖</button>
                    {<ModalChild {...childProps} />}
                </div>
            </section> : null
        );
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    child: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    childProps: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    ...getModal(state)
});

const mapDispatchToProps = {
    closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

