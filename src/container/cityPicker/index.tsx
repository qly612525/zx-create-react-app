import * as React from 'react';
import './index.css';

interface Props {

}

class CityPicker extends React.Component<Props, {}> {

    render() {
        return (
            <div className="cityPicker__wrapper">
                <p>城市选择器</p>
            </div>
        );
    }

}

export default CityPicker;