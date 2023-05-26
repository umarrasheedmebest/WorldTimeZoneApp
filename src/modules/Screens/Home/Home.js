import React from "react";
import HomeComponents from "./index";
import HomeSerivceComponent from "./index.service";

class Home extends React.Component {
    render() {
        return (
            <HomeSerivceComponent {...this.props}>
                {props => (
                    <HomeComponents
                        {...props}
                    />
                )}
            </HomeSerivceComponent>
        );
    };
};

export default Home;