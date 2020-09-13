import React, {Component} from 'react';
import Navbar from './NavCont';
import SigFormComp from '../Components/SigFormComp'
import '../CSS/Form.css';

class SigForm extends Component
{
    render()
    {
        return(
            <div>
                <Navbar />
                <SigFormComp />
            </div>

        )
    }
}
export default SigForm