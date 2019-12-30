import { loginUser } from '../lib/auth';
import { login } from '../util/auth';
export default class LoginFrom extends React.Component {
    state = {
        email: 'Sincere@april.biz',
        password: 'hildegard.org'
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        login({ token: email });
    }


    render() {
        return (
            <div>
                <style jsx>{`
                    form{
                        display:block;
                        input{
                            margin-bottom:5px;
                            min-width:250px;
                            border:1px solid grey;
                            border-radius:3px;
                            outline:none;
                            padding:5px 8px;
                            &:focus{
                                box-shadow:1px 1px 6px rgba(64, 121, 154, 0.5);
                                border-color:rgba(64,121,154,1);
                            }
                        }
                    }
                `}</style>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="email"
                            name="email"
                            placeholder="email"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}