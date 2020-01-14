import React from 'react'
import PropTypes from 'prop-types'
import {withDocument} from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import TextInput from 'part:@sanity/components/textinputs/default'
import { frontendurls } from '../../env'

// 1. Import react-timepicker CSS
// import '../../node_modules/react-timepicker/timepicker.css?raw'
// import {frontend} from '../../sanity.json'

// // 2. Transform hours and minutes to a formatted time string
// const outgoingValue = (hours, minutes) => `${padStart(hours, 2, '0')}:${padStart(minutes, 2, '0')}`
//
// // 3. Transform a formatted time string to hours and minutes
// const incomingValues = value => {
//     if (!value) {
//         return {}
//     }
//     const [hours, minutes] = value.split(':')
//     return {
//         hours: Number(hours),
//         minutes: Number(minutes)
//     }
// }

// 4. Create a Sanity PatchEvent based on a change in time value
// const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(value))

function computeUrl(item) {
    // console.log(item);
    var string = "";

    frontendurls.map(function (feurl) {
        if(item.includes('https'))
        {
            string = "https://"+feurl;
        }
        else if(item.includes('http'))
        {
            string = "http://"+feurl;
        }
        else{
            string = feurl;
        }
        item =  _replace(item,string);
        console.log(item);
    });
    return item;
}

const _replace = (url,string) => {
    // if(window.location.port.length > 0)
    // {
    //     string = string + ":" + window.location.port;
    // }
    // console.log(url);
    return url.replace(string,"");
}

class CtaLink extends React.Component {

    // 5. Declare shape of React properties
    static propTypes = {
        type: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        }).isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }

    timeInput = React.createRef()

    // 6. Called by the Sanity form-builder when this input should receive focus
    focus() {
        if (this._firstField) {
            this._firstField.focus()
        }
    }

    // 7. Function called whenever an editor changes a value
    handleUrlChange = evt => {
        this.hasEdited = true

        const {onChange, type} = this.props
        const value = evt.target.value

        if (!value) {
            onChange(PatchEvent.from(unset()))
            return
        }
        var url = computeUrl(value.trim());
        console.log(url);
        onChange(PatchEvent.from(unset(), set(url)))
        // onChange(PatchEvent.from(unset(), set({_type: type.name, url: computeUrl(value.trim())})))
    };

    hasEdited = false;
    state = {loading: false};


    setFirstField = el => {
        this._firstField = el
    };



    handleFocus = () => {
        this.hasEdited = false
    };

    handleBlur = () => {
        if (!this.hasEdited || !this.props.value.url) {
            return
        }

        this.handleUrlChange(this.props.value.url)
    };


    render = () => {
        const {value, type, level, onFocus, onBlur, focusPath, markers} = this.props
        //transform value?
        return (

            // 8. Use FormField if you want title and description rendered like any other input field
            <FormField label={type.title} description={type.description}>
                <TextInput
                    ref={this.setFirstField}
                    type="text"
                    onFocus={this.handleFocus}
                    value={value === undefined ? '' : value}
                    onChange={this.handleUrlChange}
                    onBlur={this.handleUrlChange}
                />
            </FormField>
        )
    }
}

export default withDocument(CtaLink)
