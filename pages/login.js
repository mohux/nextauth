import LoginForm from '../components/LoginForm';
import nextCookie from 'next-cookies';
import Router from 'next/router';
const Login = () => {
    return (
        <React.Fragment>
            <LoginForm />
         
        </React.Fragment>
    );
}
Login.getInitialProps = (ctx) => {
    const { token } = nextCookie(ctx);
    if (ctx.req && token) {
        ctx.res.writeHead(302, { Location: '/' })
        ctx.res.end()
        return
    }
    if (token) {
        Router.push('/')
    }
    return {};

}

export default Login;